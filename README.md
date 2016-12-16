# Nexus
Nexus draw lines between elements by using HTML5 Canvas.

[Download](https://raw.githubusercontent.com/brunolandowski/nexus/master/nexus.js)

[Demo](https://jsfiddle.net/brunolandowski/o0z4L11n/)
## Install
First, create the canvas element before the boxes.
```HTML 
<canvas id="canvas"></canvas>

<div class="position"></div>
<div class="position"></div>
<div class="position"></div>
```
Make sure to call `nexus.js` after the content just before `</body>`.
```HTML
<script type="text/javascript" src="nexus.js"></script>
```

## Initialize it
```JavaScript
$('#canvas').nexus({
	// Get the class of objects need to be connected
	selector: ".position",
});		
```
## Options
```JavaScript
$('#canvas').nexus({
	// Get the class of objects need to be connected
	selector: ".position",

	// Set the line height in pixels
    lineHeight: "10", 

    // Set the color of connections, can be hexa, rgb or names
    lineColor: "red", 

    // Set if the connection should be dashed or lined by using true/false
    lineDash: true, 

    // Set line cap, can be 'round', 'square' or 'butt'
	lineCap: "butt",

	// Set if connections should be foreground or background as the canvas and boxes will overlap
    bringBack: true,

    // Set the anchors of connections in pixels; positive value if inside the boxes, negative if outside 
    anchor: "4", 
});
```
:palm_tree::palm_tree::palm_tree: That's it&#8239;!
