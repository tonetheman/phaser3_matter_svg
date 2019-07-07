
# matter js experiment

Needless to say the experiment failed but I learned some stuff.

A test of getting and using an SVG path.

I created the SVG by hand with Inkscape. I saved as SVG then loaded it in Phaser.

I had to research this a bit and cheated some with jquery to just load the file. (Am I the only person using jquery now?)

Also had to get a polyfill for the SVG stuff. See here: https://github.com/progers/pathseg/blob/master/pathseg.js

Ball png file comes from phaser3 public examples.

Video.mp4 is what it looks like

See here for pure matter.js example: http://brm.io/matter-js/demo/#terrain
http://brm.io/matter-js/docs/classes/Bodies.html
And the phaser example ... does not load from SVG path though
https://labs.phaser.io/edit.html?src=src\physics\matterjs\add%20body%20to%20world.js