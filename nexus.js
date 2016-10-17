(function($) {
	$.fn.nexus = function(options) {
	
	// Default parameters.
        var defauts = {
		selector: ".position", // Get the class of objects need to be connected.
		lineHeight: "1", // Set the line height in pixels.
		lineColor: "#333", // Set the color of connections, can be hexa, rgb or names.
		lineDash: true, // Set if the connection should be dashed or lined by using true/false.
		lineCap: "butt", // Set line cap, can be 'round', 'square' or 'butt'.
		bringBack: true, // Set if connections should be foreground or background as the canvas and boxes will overlap.
		anchor: "5", // Set the anchors of connections in pixels; positive value if inside the boxes, negative if outside.
	};

      	var parametres = $.extend(defauts, options); // We extend the defaults parameters.

        return this.each(function() {
		$(this).css('position', 'absolute'); // Set positioning to enable overlapping. 
		var theid = $(this).attr('id'); // Get the 'id' of the canvas.
			
		// Default parameters to variables.
		var div_class = parametres.selector;
            	var line_width = parametres.lineHeight;
            	var line_color = parametres.lineColor;
            	var line_cap = parametres.lineCap;
            	var taille = $(div_class).length;

	if (parametres.bringBack) {
                $(this).css('z-index', -9999);
	}

	function ironLink() {
		$(div_class).each(function(i, index) {
			if (i == taille - 1) { 

                    	// Check for the last boxe.
                    	// Don't draw link between first and last element
			} else {
                        var outerHeight = parseInt($(div_class).css("margin"));  // Margins of the boxes as a variable.
			var marg_h = outerHeight - 0; 
                        var marg_w = outerHeight - 0;
			var premier_height = ($(this).outerHeight() + marg_h);
                        var premier_width = ($(this).outerWidth() + marg_w);
			var premier_right = (premier_width + $(this).position().left);
                        var premier_bottom = (premier_height + $(this).position().top);
			var deuxieme_left = (marg_w + $(this).nextAll().position().left);
                        var deuxieme_top = (marg_h + $(this).nextAll().position().top);
			var c = document.getElementById(theid);
			var ctx = c.getContext("2d");
			var anchorvar = parametres.anchor;
                        var anchor_right = parseFloat(anchorvar);

                        if (parametres.lineDash) {
                            ctx.setLineDash([10, 10]); // Check if lineDash is true.
                        } else {
                            ctx.setLineDash([0, 0]); // Check if lineDash is false.
                        }

			ctx.beginPath(); // Let's start the drawing.
			ctx.moveTo(premier_right - anchor_right, premier_bottom - anchor_right); 
                        ctx.lineTo(deuxieme_left + anchor_right, deuxieme_top + anchor_right);
                        ctx.lineWidth = line_width;
                        ctx.strokeStyle = line_color
                        ctx.lineCap = line_cap;
			ctx.stroke(); // Close the path.
                    }
                });
            }

	var canvas = document.getElementById(theid),
	   	context = canvas.getContext('2d');

            	// Resize the canvas to fill browser window dynamically.
		window.addEventListener('resize', resizeCanvas, true);

            	function resizeCanvas() {
                	var doc_height = $(document).height();
                	var doc_width = $(window).width();
                	canvas.width = doc_width;
                	canvas.height = doc_height;
			drawStuff();
            	}
            
            	resizeCanvas();

            	function drawStuff() {
            	}

		var height = $(window).height();
            	var width = $(window).width();

            	ironLink();

            	// Resize the canvas to fill browser window dynamically is window is resized.
		$(window).resize(function() {
			canvas.width = window.innerWidth;
                	canvas.height = window.innerHeight;
			resizeCanvas();
			ironLink();
		});
		
		console.log("%cNexus plugin made by Bruno Landowski", "background: #333; color: #bdbd0a; padding: 5px 10px;");
		console.log("%chttp://brunolandowski.fr", "color:#333");
		console.log("%chttps://github.com/brunolandowski", "color:#333");
		});
    };
})(jQuery);
