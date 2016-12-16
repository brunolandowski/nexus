(function($) {
	$.fn.nexus = function(options) {

		// Default parameters.
		var defauts = {
			// Get the class of objects need to be connected
			selector: ".item", 

			// Set the line height in pixels
			lineHeight: "5", 

			// Set the color of connections, can be hexa, rgb or names
			lineColor: "#ccc",

			// Set if the connection should be dashed or lined by using true/false. 
			lineDash: false, 

			// Set line cap, can be 'round', 'square' or 'butt'
			lineCap: "butt",

			// Set if connections should be foreground or background as the canvas and boxes will overlap
			bringBack: true,

			// Set the anchors of connections in pixels; positive value if inside the boxes, negative if outside 
			anchor: "5",
		};

		
		var parametres = $.extend(defauts, options); // We extend the defaults parameters
		return this.each(function() {
			$(this).css('position', 'absolute'); // Set positioning to enable overlapping
			$(this).css('zoom', '.5'); // Prevend aliasing on Retina Display
			

			var theid = $(this).attr('id'), // Get the 'id' of the canvas

				// Default parameters of variables
				div_class = parametres.selector,
				line_width = parametres.lineHeight * 2,
				line_color = parametres.lineColor,
				line_cap = parametres.lineCap,
				taille = $(div_class).length;

			if (parametres.bringBack) {
				$(this).css('z-index', -9999); // Put Canvas to background
			}

			
			function ironLink() {
				$(div_class).each(function(i, index) {

					// Check for the last boxe
					if (i == taille - 1) {
						// Don't draw link between first and last element
					} else {
						var outerHeight = parseInt($(div_class).css("margin")), // Margins of the boxes as a variable

							marg_h = outerHeight - 0,
							marg_w = outerHeight - 0,
						
							premier_height = ($(this).outerHeight() + marg_h),
							premier_width = ($(this).outerWidth() + marg_w),
							premier_right = (premier_width + $(this).position().left),
							premier_bottom = (premier_height + $(this).position().top),
							deuxieme_left = (marg_w + $(this).nextAll().position().left),
							deuxieme_top = (marg_h + $(this).nextAll().position().top),
						
							c = document.getElementById(theid),
							ctx = c.getContext("2d"),
							anchorvar = parametres.anchor,
							anchor_right = parseFloat(anchorvar);

						// Check if lineDash is true
						if (parametres.lineDash) {
							ctx.setLineDash([20, 20]); 
						} else {
							ctx.setLineDash([0, 0]); 
						}

						// Start the drawing
						ctx.beginPath(); 
						ctx.moveTo((premier_right * 2) - (anchor_right * 2), (premier_bottom * 2) - (anchor_right * 2));
						ctx.lineTo((deuxieme_left * 2) + (anchor_right * 2), (deuxieme_top * 2) + (anchor_right * 2));
						ctx.lineWidth = line_width;
						ctx.strokeStyle = line_color;
						ctx.lineCap = line_cap;
						// Close the path
						ctx.stroke(); 
					}
				});
			}

			var canvas = document.getElementById(theid),
				context = canvas.getContext('2d');

			// Resize the canvas to fill browser window dynamically
			window.addEventListener('resize', resizeCanvas, true);

			function resizeCanvas() {
				var doc_height = $(document).height(),
					doc_width = $(window).width();

					canvas.width = doc_width * 2;
					canvas.height = doc_height * 2;
			}

			resizeCanvas();

			var height = $(window).height(),
				width = $(window).width();

			ironLink();

			// Resize the canvas to fill browser window dynamically is window is resized.
			$(window).resize(function() {
				
				canvas.width = window.innerWidth * 2;
				canvas.height = window.innerHeight * 2;
				resizeCanvas();
				ironLink();
			});
		});
	};
})(jQuery);

console.log("%cNexus plugin made by Bruno Landowski", "background: #333; color: #bdbd0a; padding: 5px 10px;");
console.log("%chttp://brunolandowski.fr", "color:#333");
console.log("%chttps://github.com/brunolandowski", "color:#333");