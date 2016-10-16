# Nexus
Nexus create links between two divs using canvas.

[Download](https://raw.githubusercontent.com/brunolandowski/nexus/master/nexus.js)
## Install
First, create the canvas element before the boxes.
```HTML 
<canvas id="canvas"></canvas>

<div></div>
<div></div>
<div></div>
```
Make sure to call `nexus.js` after the content just before `</body>`.
```HTML
<script type="text/javascript" src="nexus.js"></script>
```

## Initialize it
```JavaScript
$('#canvas').nexus();		
```
## Setting up
```JavaScript
$('#canvas').nexus({
	selector: ".position", // Get the class of objects need to be connected.
    lineHeight: "10", // Set the line height in pixels.
    lineColor: "red", // Set the color of connections, can be hexa, rgb or names.
    lineDash: true, // Set if the connection should be dashed or lined by using true/false.
	lineCap: "butt", // Set line cap, can be 'round', 'square' or 'butt'.
    bringBack: true, // Set if connections should be foreground or background as the canvas and boxes will overlap.
    anchor: "4", // Set the anchors of connections in pixels; positive value if inside the boxes, negative if outside.
});
```
:palm_tree::palm_tree::palm_tree: That's it&#8239;!