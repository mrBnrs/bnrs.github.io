(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#00AEB1",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bgb.jpg", id:"bgb"},
		{src:"images/bg240.png", id:"bg240"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bgb = function() {
	this.initialize(img.bgb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,545,600);


(lib.bg240 = function() {
	this.initialize(img.bg240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AATAvIAAgjIgPAAIgTAjIgNAAIAXgjQgFgBgDgDIgHgGQgCgCgBgFQgCgFAAgGQAAgGACgGQACgGAEgDQAEgEAGgDQAFgCAFAAIAaAAIAABdgAgDgiIgGAEQgDACgBAEQgBAEAAAEQAAAFABAEQABAEACACQADABADABQAEABACAAIARAAIAAglIgQAAIgGABg");
	this.shape.setTransform(5.2,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,17.4,25.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AASAvIAAgxIABgZIAAgBIgJASIgaA5IgLAAIAAhdIAKAAIAAA0IAAAWIAAAAIAGgOIAdg8IALAAIAABdg");
	this.shape.setTransform(6.1,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.4,25.6);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgdBAIAAh9IAIAAIACAJQAEgFAFgEQAGgCAFAAQAGAAAGACQAFACAEAFQAEAFACAGQACAHAAAJIAAAbQAAAHgCAHQgCAGgEAEQgDAFgGADQgFABgHAAQgFAAgFgCQgGgDgEgFIAAApgAgHg0QgEACgCADIgEAIQgCAGAAAFIAAAcIABAIIAEAIQADAEAEACQADACAEAAQAEAAAEgBQAEgCACgEQADgDABgEQACgFAAgFIAAgbQAAgHgCgFQgBgFgDgDIgHgFIgHgBQgDAAgEABg");
	this.shape.setTransform(6.3,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.5,25.6);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgMAvQgFgDgFgEQgDgEgCgHQgDgGAAgIIAAgdQAAgIADgGQACgHADgEQAFgEAFgDQAHgCAFAAQAGAAAGACQAHADADAEQAEAEADAHQACAGAAAIIAAAdQAAAIgCAGQgDAHgEAEQgDAEgHADQgGACgGAAQgFAAgHgCgAgHgkQgEABgDADQgCADgBAFQgCAEAAAGIAAAdQAAAGACAEQABAFACADQADADAEABIAHABIAIgBQAEgBACgDQAEgDABgFIABgKIAAgdIgBgKQgBgFgEgDQgCgDgEgBIgIgBIgHABg");
	this.shape.setTransform(6.1,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.4,25.6);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgEAvIAAhTIgXAAIAAgKIA3AAIAAAKIgXAAIAABTg");
	this.shape.setTransform(5.1,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,16.4,25.6);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgLAuQgGgCgEgEQgEgEgCgHQgCgGAAgIIAAgdQAAgIACgHQACgGAEgEQAEgEAGgDQAFgCAGAAQAGAAAGACQAFADAEAEQAFAEACAGQACAHAAAIIgLAAQAAgGgBgFIgEgHQgDgDgEgBIgHgBIgHABQgEABgCADIgEAHIgBALIAAAdIABAKQABAFADACQACADAEACQADABAEAAQAEAAAEgBQADgCADgDQACgCACgFIACgKIAKAAQAAAIgCAGQgCAHgFAEQgEAEgFACQgGADgGAAQgGAAgFgDg");
	this.shape.setTransform(6,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18,25.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AASAvIAAgxIABgZIAAgBIgJASIgaA5IgLAAIAAhdIAKAAIAAA0IAAAWIAAAAIAGgOIAdg8IALAAIAABdg");
	this.shape.setTransform(6.1,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.4,25.6);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AATAvIAAgjIgPAAIgTAjIgNAAIAXgjQgFgBgDgDIgHgGQgCgCgBgFQgCgFAAgGQAAgGACgGQACgGAEgDQAEgEAGgDQAFgCAFAAIAaAAIAABdgAgDgiIgGAEQgDACgBAEQgBAEAAAEQAAAFABAEQABAEACACQADABADABQAEABACAAIARAAIAAglIgQAAIgGABg");
	this.shape.setTransform(5.2,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,17.4,25.6);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgLAvQgGgCgEgEQgEgDgCgGQgCgFAAgHQAAgHACgFQACgFAEgDQAEgDAGgCQAGgBAGAAIATAAIAAgKIgBgKQgCgEgCgCQgCgDgEgBQgDgCgFAAQgGAAgFAFQgFAEgBAIIgKAAQAAgGACgFQACgFAEgEQAEgDAFgCQAGgCAEAAQAHAAAFACQAGACAEAFQADAEACAFQACAGAAAHIAABAIgJAAIgBgJQgDAFgFADQgGADgGAAQgGAAgFgCgAgHADQgDABgDACIgEAGQgCAEAAAEQAAAFACADQABAEADACQADACAEABIAGABIAIgBIAGgEIAEgFQACgEAAgEIAAgSIgTAAIgIABg");
	this.shape.setTransform(5.8,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.2,25.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AARAvIAAgsIgiAAIAAAsIgKAAIAAhdIAKAAIAAApIAiAAIAAgpIALAAIAABdg");
	this.shape.setTransform(6.1,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.3,25.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgcAvIAAhdIAKAAIAAAiIASAAQAEAAAGACQAFACAFAEQAEAEACAEQADAFAAAHQAAAHgDAFQgCAGgEAEQgFAEgFACQgGADgEAAgAgSAkIASAAIAFgBQAEgBADgDQADgDABgEQACgDAAgFIgCgIQgBgEgDgDQgDgBgEgBQgDgBgCAAIgSAAg");
	this.shape.setTransform(6.2,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,17.5,25.6);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgfAlQAEAAADgDQACgCACgFQACgGACgSIABgxIAvAAIAABdIgLAAIAAhTIgZAAIgCAoIgCATQgCAIgDAGQgDAFgEADQgFACgGAAg");
	this.shape.setTransform(5.3,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18,25.6);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgLAvQgGgCgEgEQgEgDgCgGQgCgFAAgHQAAgHACgFQACgFAEgDQAEgDAGgCQAGgBAGAAIATAAIAAgKIgBgKQgCgEgCgCQgCgDgEgBQgDgCgFAAQgGAAgFAFQgFAEgBAIIgKAAQAAgGACgFQACgFAEgEQAEgDAFgCQAGgCAEAAQAHAAAFACQAGACAEAFQADAEACAFQACAGAAAHIAABAIgJAAIgBgJQgDAFgFADQgGADgGAAQgGAAgFgCgAgHADQgDABgDACIgEAGQgCAEAAAEQAAAFACADQABAEADACQADACAEABIAGABIAIgBIAGgEIAEgFQACgEAAgEIAAgSIgTAAIgIABg");
	this.shape.setTransform(5.8,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.2,25.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgMAuQgGgCgEgEQgEgEgCgHQgCgGAAgIIAAgdQAAgIACgHQACgGAEgEQAEgEAGgDQAFgCAHAAQAFAAAGACQAGADAEAEQAEAEADAGQACAHAAAIIAAATIgxAAIAAAKIABAKQABAFADACQACADAEACQAEABAEAAQAEAAAEgBQADgBADgDQADgCABgEIADgJIAKAAQAAAHgDAGQgCAGgEAEQgFAEgFABQgGADgGAAQgHAAgFgDgAgIgkQgEABgCADIgEAHIgBALIAAALIAmAAIAAgLQAAgGgBgFQgBgEgDgDQgDgDgEgBIgHgBIgIABg");
	this.shape.setTransform(6.1,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.3,25.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AAxBNIAAiZIAqAAIAACZgAhaBNIAAiZIAnAAIAAAqIAQAAQAPAAAMADQAKADAJAHIAIAIIAGAKQADADABAHIABAOQAAAPgEAKQgEALgJAHQgGAFgLAEIgKADIgtABgAgzArIAKAAQAPAAAGgDQAEgCADgEQACgFAAgHQAAgGgCgEQgCgFgDgCQgGgFgNAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-7.7,18.3,15.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("Ag9BNIAAiZIAkAAIAVABQANAAAMADQANADAJAHIAIAIIAGAKQACAFABAHIACAOQAAAPgFAIQgEALgIAHQgIAHgLADQgLAEgOAAIgaAAIAAAogAgZACIAQAAQAMAAAGgCQAFgBACgEQACgFAAgHQAAgGgBgEQgCgFgEgCQgGgFgKAAIgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-7.7,12.5,15.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgXBNIAAgUIgRAAIAAgWIAAgBIARAAIABgfIg2hPIAwAAIAcAuIAdguIAwAAIg4BPIAAABIgBAeIAPAAIAAAXIgPAAIAAAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-7.7,15.4,15.5);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AAVBNIAAg7IgmAAIAAA7IgsAAIAAiZIAsAAIAAA9IAmAAIAAg9IApAAIAACZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-7.7,12.4,15.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgeALIAAgVIA9AAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1.1,6.3,2.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AAqBWIAAgSIgXAAIAAg9IgqAAIAAA9IgrAAIAAiZIArAAIAAA9IAqAAIAAg9IApAAIAABwIAHAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-8.6,13.5,17.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AApBNIgLgYIg5AAIgLAYIgpAAIBMiZIALAAIBICZgAAQAXIgPgdIgNAdIAcAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7.7,16.2,15.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgVBNIAAhuIghAAIAAgrIBtAAIAAArIghAAIAABug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-7.7,11.1,15.5);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgdBAIAAh9IAIAAIACAJQAEgFAFgEQAGgCAFAAQAGAAAGACQAFACAEAFQAEAFACAGQACAHAAAJIAAAbQAAAHgCAHQgCAGgEAEQgDAFgGADQgFABgHAAQgFAAgFgCQgGgDgEgFIAAApgAgHg0QgEACgCADIgEAIQgCAGAAAFIAAAcIABAIIAEAIQADAEAEACQADACAEAAQAEAAAEgBQAEgCACgEQADgDABgEQACgFAAgFIAAgbQAAgHgCgFQgBgFgDgDIgHgFIgHgBQgDAAgEABg");
	this.shape.setTransform(6.3,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.6,18.5,25.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AgFBIIgkhIIAphHIAqBLIgqBEIgCAAIgBAAIgCAAg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-7.2,8.6,14.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEB1").s().p("AgbAGIAAgLIA3AAIAAALg");
	this.shape.setTransform(-6.2,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AEB1").s().p("AApA+IAAh7IAOAAIAAB7gAg2A+IAAh7IAOAAIAAAuIAXAAQAIAAAIACQAFADAGAGQAGAEADAGQADAIAAAIQAAAJgDAHQgDAHgGAGQgGAFgFADQgIADgIAAgAgoAxIAXAAQAFAAAFgCQAFgCACgEQAEgEACgEQACgFAAgGQAAgGgCgFQgCgEgEgEQgCgDgFAAQgFgCgFAAIgXAAg");
	this.shape_1.setTransform(-22.8,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AEB1").s().p("AgoBWIAAinIAMAAIACALQAFgHAHgEQAIgDAHAAQAJAAAIADQAGADAFAGQAGAGADAJQACAJAAAMIAAAkQAAAKgCAIQgDAJgFAHQgFAFgHAEQgHACgKAAQgGABgIgEQgHgEgFgGIAAA2gAgKhFQgFACgDAFQgDADgDAHQgBAHAAAJIAAAkQgBAGACAGQACAGAEAFQADAEAEACQAFADAGAAQAGAAAEgCQAGgCADgEQAEgEACgGQACgHAAgHIAAgkQAAgJgCgHQgDgGgDgFQgDgEgGgCQgFgCgFAAQgFAAgFACg");
	this.shape_2.setTransform(-35.3,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AEB1").s().p("AgjBWIAAgPIAGAAQAIABAEgGQAEgEACgKIAIgaIgohuIAPAAIAeBZIAbhZIAPAAIgqCLIgDAMQgDAGgDAEQgDAEgGACQgEACgHABg");
	this.shape_3.setTransform(-45.6,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AEB1").s().p("AAdBUIAAhPIg5AAIAABPIgPAAIAAinIAPAAIAABMIA5AAIAAhMIAPAAIAACng");
	this.shape_4.setTransform(-56.5,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AEB1").s().p("AgbAGIAAgLIA3AAIAAALg");
	this.shape_5.setTransform(-66.8,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AEB1").s().p("AAXA/IAAg7IgtAAIAAA7IgPAAIAAh8IAPAAIAAA2IAtAAIAAg2IAPAAIAAB8g");
	this.shape_6.setTransform(-76.2,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AEB1").s().p("AgQA/QgHgDgFgFQgGgFgDgHQgDgHAAgJQAAgJADgIQADgGAGgEQAFgEAIgDQAIgCAJAAIAYAAIAAgOQAAgGgBgFQgCgGgDgDQgDgEgFgCQgEgBgGgBQgJABgHAFQgHAGgBALIgOAAQABgJADgGQACgHAGgEQAFgFAHgDQAHgCAHAAQAJAAAHADQAHADAFAFQAFAGADAHQADAIAAAJIAABWIgNAAIgBgMQgEAHgHADQgIAFgIgBQgIAAgIgCgAgJAEQgFACgEADQgEADgBAFQgCAEAAAGQAAAGACAFQACAFADACQAEADAFACQAFACAEAAQAGAAAFgDQAFgBADgDQAEgDACgFQABgFAAgFIAAgZIgZAAQgFABgFABg");
	this.shape_7.setTransform(-87.3,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AEB1").s().p("AgGBUIAAiYIglAAIAAgPIBXAAIAAAPIglAAIAACYg");
	this.shape_8.setTransform(-97.1,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AEB1").s().p("AglA+IAAh7IAhAAQAHAAAHACQAHACAFAFQAFAEADAGQACAGAAAIQAAAHgEAHQgDAHgHAFQAJACAGAIQAFAIAAAKQAAAJgCAGQgDAHgFAFQgFAEgIADQgIACgIAAgAgXAxIAWAAQAFAAAFgCQAFgBAEgDIAFgHQABgEAAgGQAAgFgBgEQgCgFgDgCQgEgDgFgCQgFgBgFAAIgWAAgAgXgIIATAAQAJAAAHgFQAGgFAAgKQAAgKgGgFQgGgFgKAAIgTAAg");
	this.shape_9.setTransform(-112.1,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,0,119.6,32.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEB1").s().p("AAiA/IAAhEIACgfIgBAAIgLAdIgSAkIgMAAIgRgkIgLgdIgBAAIABAfIAABEIgNAAIAAh8IAOAAIAaA5IAHASIAAAAIAIgSIAZg5IAPAAIAAB8g");
	this.shape.setTransform(2.9,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AEB1").s().p("AgRA+QgHgDgGgGQgFgFgDgJQgCgIgBgLIAAgnQABgLACgIQADgJAFgFQAGgGAIgDQAHgDAJAAQAHAAAIADQAIADAGAGQAFAFADAJQADAIAAALIAAAaIhCAAIAAANQAAAIACAGQABAGADAEQAEAEAFABQAFACAGAAQAFAAAFgBQAGgCADgDQAEgEACgFQACgFABgHIANAAQAAAKgDAIQgDAHgGAGQgFAFgJACQgHADgIAAQgJAAgIgDgAgLgwQgFACgEADQgDAEgBAGQgCAGAAAIIAAAOIA0AAIAAgOQAAgIgCgGQgCgGgDgEQgEgDgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_1.setTransform(-8.8,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AEB1").s().p("AglA+IAAh7IAhAAQAHAAAHACQAHACAFAFQAFAEADAGQACAGAAAIQAAAHgEAHQgDAHgHAFQAJACAGAIQAFAIAAAKQAAAJgCAGQgDAHgFAFQgFAEgIADQgIACgIAAgAgXAxIAWAAQAFAAAFgCQAFgBAEgDIAFgHQABgEAAgGQAAgFgBgEQgCgFgDgCQgEgDgFgCQgFgBgFAAIgWAAgAgXgIIATAAQAJAAAHgFQAGgFAAgKQAAgKgGgFQgGgFgKAAIgTAAg");
	this.shape_2.setTransform(-19,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AEB1").s().p("AAYA/IAAhDIABghIgBAAIgKAWIglBOIgOAAIAAh8IAOAAIAABGIgBAcIABAAIAIgSIAnhQIAOAAIAAB8g");
	this.shape_3.setTransform(-29.9,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AEB1").s().p("AA2A/Igng9IgJALIAAAyIgLAAIAAgyIgJgLIgnA9IgRAAIAvhGIgrg2IASAAIAXAeIAUAaIAAg4IALAAIAAA4IAUgaIAXgeIASAAIgsA2IAwBGg");
	this.shape_4.setTransform(-42.5,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AEB1").s().p("AAlBMIAAgbIhJAAIAAAbIgOAAIAAgpIAJAAQAFgJADgPQADgMACgTIACg3IA/AAIAABuIAOAAIAAApgAgPgRQgBARgDANQgCANgFAJIAxAAIAAhhIgkAAQAAAagCATg");
	this.shape_5.setTransform(-60.5,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AEB1").s().p("AgQA/QgHgEgGgFQgGgHgDgIQgCgIAAgMIAAgmQAAgLACgJQADgIAGgFQAGgHAHgCQAIgDAIAAQAJAAAIADQAHACAGAHQAGAFADAIQACAJAAALIAAAmQAAAMgCAIQgDAIgGAHQgGAFgHAEQgIACgJAAQgIAAgIgCgAgKgxQgFACgEAEQgDAEgCAGQgCAGAAAIIAAAmQAAAJACAGQACAGADAEQAEAEAFABQAFADAFAAQAGAAAFgDQAFgBAEgEQADgEACgGQACgGAAgJIAAgmQAAgIgCgGQgCgGgDgEQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(-71.1,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AEB1").s().p("AgeA/IAAh8IA9AAIAAANIgvAAIAABvg");
	this.shape_7.setTransform(-80.1,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AEB1").s().p("AAYBWIAAhEIABgfIgBAAIgKAUIglBPIgOAAIAAh8IAOAAIAABGIgBAdIABAAIAIgTIAnhQIAOAAIAAB8gAgKg7QgFgCgDgEQgDgDgCgFQgCgGgBgGIANAAQAAAIAEAEQADAEAGAAQAHAAADgEQAEgEAAgIIANAAQgBAGgCAGQgCAFgDADQgDAEgFACQgFACgGAAQgFAAgFgCg");
	this.shape_8.setTransform(-95.7,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AEB1").s().p("AgQA/QgHgEgGgFQgGgHgDgIQgCgIAAgMIAAgmQAAgLACgJQADgIAGgFQAGgHAHgCQAIgDAIAAQAJAAAIADQAHACAGAHQAGAFADAIQACAJAAALIAAAmQAAAMgCAIQgDAIgGAHQgGAFgHAEQgIACgJAAQgIAAgIgCgAgKgxQgFACgEAEQgDAEgCAGQgCAGAAAIIAAAmQAAAJACAGQACAGADAEQAEAEAFABQAFADAFAAQAGAAAFgDQAFgBAEgEQADgEACgGQACgGAAgJIAAgmQAAgIgCgGQgCgGgDgEQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_9.setTransform(-106.6,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AEB1").s().p("AgoBWIAAinIAMAAIACALQAFgHAIgEQAHgDAIAAQAIAAAIADQAHADAFAGQAFAGADAJQADAJgBAMIAAAkQABAKgDAIQgCAJgGAHQgFAFgHAEQgIACgIAAQgHABgIgEQgIgEgEgGIAAA2gAgKhFQgFACgDAFQgDADgCAHQgCAHAAAJIAAAkQAAAGABAGQACAGADAFQAEAEAEACQAGADAFAAQAFAAAGgCQAFgCAEgEQADgEABgGQACgHABgHIAAgkQgBgJgCgHQgCgGgDgFQgDgEgGgCQgFgCgFAAQgFAAgFACg");
	this.shape_10.setTransform(-117.4,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AEB1").s().p("AgQA/QgHgEgGgFQgGgHgDgIQgCgIAAgMIAAgmQAAgLACgJQADgIAGgFQAGgHAHgCQAIgDAIAAQAJAAAIADQAHACAGAHQAGAFADAIQACAJAAALIAAAmQAAAMgCAIQgDAIgGAHQgGAFgHAEQgIACgJAAQgIAAgIgCgAgKgxQgFACgEAEQgDAEgCAGQgCAGAAAIIAAAmQAAAJACAGQACAGADAEQAEAEAFABQAFADAFAAQAGAAAFgDQAFgBAEgEQADgEACgGQACgGAAgJIAAgmQAAgIgCgGQgCgGgDgEQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_11.setTransform(-128.5,19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AEB1").s().p("AgGA/IAAhwIgfAAIAAgMIBLAAIAAAMIgfAAIAABwg");
	this.shape_12.setTransform(-138.1,19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AEB1").s().p("AgsBUIAAinIAnAAQAJAAAIAEQAJADAFAFQAGAFADAIQADAJAAAKQAAAIgCAHQgBAFgDAFQgDAFgEADQgEADgFABQAHACAFACQAFADAEAFQAEAGACAGQACAHAAAJQAAALgDAIQgEAJgGAGQgGAGgJADQgIADgKAAgAgdBFIAcAAQAHAAAFgCQAHgBADgEQAEgEADgGQACgGAAgIQAAgIgDgHQgCgGgFgEQgFgFgGgCQgHgCgGAAIgZAAgAgdgHIAZAAQAFgBAGgCQAFgCAEgDQAEgEABgGQACgGAAgIQAAgHgCgGQgBgFgEgEQgEgEgFgCQgGgCgGABIgYAAg");
	this.shape_13.setTransform(-147.6,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,0,172,32.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E4040").s().p("AgEAMIACgXIAHAAIgFAXg");
	this.shape.setTransform(-83.1,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E4040").s().p("AgCAfIAAg3IgQAAIAAgGIAkAAIAAAGIgPAAIAAA3g");
	this.shape_1.setTransform(-133.4,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E4040").s().p("AgHAfQgEgCgCgCQgEgDgBgEQgBgFAAgFIAAgTQAAgFABgEQABgEAEgDQACgDAEgCQADgBAEAAQAEAAADABQAEACADADIAEAHIACAJIgHAAIgBgHIgDgEIgEgDIgFgBIgEABIgFADIgCAEIgBAHIAAATIABAHIACAFIAFADIAEABIAFgBIAEgDIADgFIABgHIAHAAQAAAFgCAFIgEAHQgDACgEACQgDABgEAAQgEAAgDgBg");
	this.shape_2.setTransform(-137.9,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E4040").s().p("AAMAfIAAggIAAgRIAAAAIgFALIgSAmIgHAAIAAg9IAHAAIAAAiIAAAOIAAAAIAEgJIATgnIAHAAIAAA9g");
	this.shape_3.setTransform(-143.4,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E4040").s().p("AgHAfQgEgCgCgCQgDgDgCgEQgBgFAAgFIAAgTQAAgFABgEQACgEADgDQACgDAEgCQAEgBADAAQADAAAEABQAEACADADIAEAHIACAJIgHAAIgBgHIgDgEIgFgDIgEgBIgEABIgFADIgCAEIgBAHIAAATIABAHIACAFIAFADIAEABIAEgBIAFgDIADgFIABgHIAHAAQAAAFgBAFIgFAHQgDACgEACQgEABgDAAQgDAAgEgBg");
	this.shape_4.setTransform(-148.5,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E4040").s().p("AAMAfIAAgeIgXAAIAAAeIgHAAIAAg9IAHAAIAAAbIAXAAIAAgbIAHAAIAAA9g");
	this.shape_5.setTransform(-153.9,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E4040").s().p("AgHAfQgEgBgDgDIgDgFQgCgEAAgFQAAgEACgEIADgFQAEgCAEAAIAHgBIAMAAIAAgHIgBgHIgCgEQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFgBQgEAAgDAEQgEACAAAGIgHAAQAAgFACgDIADgGQAEgCADgBQAEgBACAAQAFAAADABIAGAEIAEAHIABAJIAAApIgGAAIgBgGQgCAEgDACQgEACgEAAQgDgBgEgBgAgEABIgEADIgDAEIgBAFIABAFQABABAAABQAAAAAAABQABAAAAABQAAAAABABIAEABIAEABIAFgBIAFgCQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIABgFIAAgMIgMAAIgFAAg");
	this.shape_6.setTransform(-159.5,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E4040").s().p("AALAfIAAgeIgVAAIAAAeIgHAAIAAg9IAHAAIAAAbIAVAAIAAgbIAHAAIAAA9g");
	this.shape_7.setTransform(-164.7,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3E4040").s().p("AAMAfIAAggIAAgRIAAAAIgFALIgSAmIgHAAIAAg9IAHAAIAAAiIAAAOIAAAAIAEgJIATgnIAHAAIAAA9g");
	this.shape_8.setTransform(-170.1,29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E4040").s().p("AgCA1IAAgUIgEAAIgJgBQgEgCgDgEQgDgDgCgEQgCgFAAgGIAAgNQAAgGACgFQACgEADgEQADgDAEgBIAJgCIAEAAIAAgXIAFAAIAAAXIADAAQAFAAAEACIAIAEIAFAIQACAFAAAGIAAANQAAAGgCAFQgCAEgDADIgIAGQgEABgFAAIgDAAIAAAUgAADAaIADAAIAGgBQAEgBACgCQACgDABgDIABgIIAAgNIgBgIIgDgFIgGgEIgGgBIgDAAgAgMgWIgFAEQgCACgCADQgBAEAAAEIAAANQAAAFABADQACADACADQACACADABIAGABIAEAAIAAgxIgEAAIgGABg");
	this.shape_9.setTransform(-176.5,29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3E4040").s().p("AgGAPIADgdIAKAAIgHAdg");
	this.shape_10.setTransform(-58.4,20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E4040").s().p("AAXAkIAAhHIALAAIAABHgAghAkIAAhHIALAAIAAAZIANAAQAFAAAEACQADACADADQAEADABADQACAEAAAFQAAAGgCAEQgBAEgEAEQgDADgDABQgEACgFAAgAgWAZIAMAAQAGABAEgEIAAgFIABgFIgBgGIAAgDQgEgDgGAAIgMAAg");
	this.shape_11.setTransform(-63.8,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3E4040").s().p("AgJAkIgIgFQgDgDgCgEQgCgEAAgFIALAAQAAAGAEADQACACADAAIAEABQAGAAAEgDQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIABgGQAAgFgEgDQgDgDgHAAIgIAAIAAgHIAIAAQAFAAADgDQAEgDAAgFQAAgFgDgDQgEgDgFAAQgFAAgDADQgDADgBAGIgKAAQAAgFACgEQABgFADgDQADgDAFgBQAEgCAEAAQAFAAAEACQAEABADADQADADACAEQACAEAAAEQAAAGgDAEQgDAEgEACQAFAAADAEQAEAFAAAGQAAAFgCAEQgCAEgDAEQgDADgFABQgFACgFAAQgEAAgFgCg");
	this.shape_12.setTransform(-71,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E4040").s().p("AAXAkIAAhHIALAAIAABHgAghAkIAAhHIALAAIAAAZIAMAAQAGAAAEACQACACAEADQADADACADQACAEAAAFQAAAGgCAEQgCAEgDAEQgEADgCABQgEACgGAAgAgWAZIAMAAQAGABAEgEIABgFIABgFIgBgGIgBgDQgEgDgGAAIgMAAg");
	this.shape_13.setTransform(-78.1,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E4040").s().p("AAMAkIgUghIgFAGIAAAbIgLAAIAAhHIALAAIAAAgIAJgOIANgSIANAAIgXAfIAaAog");
	this.shape_14.setTransform(-85,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E4040").s().p("AgEAzIAAhIIAJAAIAABIgAgEgkQgCgDAAgCQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCABQgCADgDAAQgCAAgCgCg");
	this.shape_15.setTransform(-89.8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3E4040").s().p("AAUAsIAAgQIgnAAIAAAQIgLAAIAAgbIAGAAQADgEABgIIADgPIABgiIAnAAIAAA9IAIAAIAAAbgAgHgIIgCAOQgBAHgCAEIAYAAIAAgzIgSAAIgBAag");
	this.shape_16.setTransform(-94.6,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3E4040").s().p("AgZAaQADAAACgCIADgFIADgQIABgnIAnAAIAABIIgLAAIAAg+IgRAAIgCAfIgCAOQgBAGgDAEQgCAEgEACQgEACgFAAg");
	this.shape_17.setTransform(-101.2,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3E4040").s().p("AgKAkQgEgCgDgDQgDgDgCgGQgCgFAAgGIAAgVQAAgGACgGQACgFADgDQADgEAFgBQAEgCAFAAQAEAAAFACQAFABADAEQADADACAFQACAGAAAGIAAAOIglAAIAAAHIABAHIADAGIAEADIAFABIAFgBIAEgDQAEgDABgIIALAAQgBAHgCAEQgBAEgEADQgDAEgFACQgFABgEAAQgFAAgFgCgAgFgZIgEACIgDAGIgBAHIAAAHIAaAAIAAgHIgBgHQgBgDgCgDIgEgCIgFgBIgFABg");
	this.shape_18.setTransform(-106.9,16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3E4040").s().p("AAMAkIgUghIgGAGIAAAbIgKAAIAAhHIAKAAIAAAgIAKgOIANgSIANAAIgXAfIAbAog");
	this.shape_19.setTransform(-112.7,16.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3E4040").s().p("AAMAkIAAggIgXAAIAAAgIgLAAIAAhHIALAAIAAAeIAXAAIAAgeIALAAIAABHg");
	this.shape_20.setTransform(-119.3,16.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3E4040").s().p("AgKAlIgHgFQgDgDgCgEQgBgFAAgFQAAgFABgEQACgFAEgBQADgCAFgCQAEgBAFAAIAMAAIAAgHQAAgHgDgEIgEgDIgFgBQgEAAgDADQgEADAAAGIgLAAQAAgFACgEIAFgHQADgDAEgCQAFgBADAAQAFAAAFACQAEABADAEQADADACAFQABAEAAAGIAAAwIgJAAIgBgHQgCAEgEADQgFACgEAAQgFAAgEgBgAgEAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgDAEIgBAFIABAGIADAEQADADAFAAQAGAAAEgEQADgDAAgGIAAgMIgNAAIgEABg");
	this.shape_21.setTransform(-125.8,16.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E4040").s().p("AATAkIAAgiIABgSIgBgBIgGARIgIASIgJAAIgIgSIgGgRIAAABIAAASIAAAiIgKAAIAAhHIALAAIANAeIAEALIAAAAIAFgLIANgeIALAAIAABHg");
	this.shape_22.setTransform(-132.6,16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3E4040").s().p("AATAxIgFgWIgbAAIgEAWIgNAAIAZhhIALAAIAZBhgAALAQIgIgeIgDgTIAAAAIgCATIgIAeIAVAAg");
	this.shape_23.setTransform(-139.7,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3E4040").s().p("AAMAkIAAggIgXAAIAAAgIgLAAIAAhHIALAAIAAAeIAXAAIAAgeIALAAIAABHg");
	this.shape_24.setTransform(-149.2,16.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3E4040").s().p("AgKAlIgHgFQgDgDgCgEQgBgFAAgFQAAgFABgEQACgFAEgBQADgCAFgCQAEgBAFAAIAMAAIAAgHQAAgHgDgEIgEgDIgFgBQgEAAgDADQgEADAAAGIgLAAQAAgFACgEIAFgHQADgDAEgCQAFgBADAAQAFAAAFACQAEABADAEQADADACAFQABAEAAAGIAAAwIgJAAIgBgHQgCAEgEADQgFACgEAAQgFAAgEgBgAgEAEQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABIgDAEIgBAFIABAGIADAEQADADAFAAQAGAAAEgEQADgDAAgGIAAgMIgNAAIgEABg");
	this.shape_25.setTransform(-155.7,16.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3E4040").s().p("AAeAkIgUghIgFAGIAAAbIgJAAIAAgcIgEgFIgVAhIgNAAIAbgnIgYggIANAAIAMARIAKAPIAAggIAJAAIAAAgIAKgPIAMgRIANAAIgYAfIAbAog");
	this.shape_26.setTransform(-163,16.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3E4040").s().p("AAMAyIAAgiIABgTIAAAAIgHAQIgRAlIgLAAIAAhHIALAAIAAAiIgBATIABAAIAGgQIARglIALAAIAABHgAgFgiIgFgDQgCgCgBgDIgCgHIAJAAQAAAEACACQACACACAAQADAAACgCQACgCAAgEIAJAAIgBAHIgEAFIgFADIgGABIgFgBg");
	this.shape_27.setTransform(-170.5,15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3E4040").s().p("AATAxIgFgWIgbAAIgEAWIgNAAIAZhhIALAAIAZBhgAALAQIgIgeIgDgTIAAAAIgCATIgIAeIAVAAg");
	this.shape_28.setTransform(-176.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AsYDXICxmtIWAAAIiyGtg");
	this.shape_29.setTransform(-118.9,21.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AEB1").s().p("AiKDXIAAmtIEVAAIivGtg");
	this.shape_30.setTransform(-194.5,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.5,0,175.3,43);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEB1").s().p("AgNBdQgHgFAAgKQAAgJAHgGQAGgGAHAAQAJAAAGAGQAGAGAAAJQAAAKgGAFQgGAGgJAAQgHAAgGgGgAgSAqIAAiMIAkAAIAACMg");
	this.shape.setTransform(66.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AEB1").s().p("AAuBhIAAjBIAnAAIAADBgAhUBhIAAjBIApAAIAABKIALAAQAQAAAMAEQAJAFAIAJQAHAFAEAMQADALAAAOQAAAPgDAMQgEALgHAHQgIAHgJAEQgMADgQAAgAgrA9IAIAAQAMAAAFgFQAGgGAAgMQAAgNgGgFQgFgGgMAAIgIAAg");
	this.shape_1.setTransform(52.7,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AEB1").s().p("AAUBhIAAhPIgnAAIAABPIgoAAIAAjBIAoAAIAABOIAnAAIAAhOIAoAAIAADBg");
	this.shape_2.setTransform(34.7,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AEB1").s().p("Ag5BhIAAjBIAoAAIAABKIAPAAQAOAAAMAEQALAFAIAJQAIAFADAMQAEALAAAOQAAAPgEAMQgDALgIAHQgHAHgMAEQgLADgPAAgAgRA9IAMAAQAKAAAGgFQAGgGgBgMQABgNgGgFQgGgGgKAAIgMAAg");
	this.shape_3.setTransform(20.6,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AEB1").s().p("AhGA/QAKAAAFgFQAFgGADgSQADgOABgcIAGhaIBsAAIAADCIgoAAIAAidIgfAAQgCA0gHA1QgDASgFALQgFAKgHAGQgIAGgKACQgJACgOAAg");
	this.shape_4.setTransform(4.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AEB1").s().p("AgZBgQgMgEgIgJQgJgIgEgNQgEgNAAgPIAAhDQAAgQAEgMQAEgNAJgIQAIgJAMgEQAMgFANAAQAOAAAMAFQAMAEAIAJQAIAIAEANQAFAMAAAQIAABDQAAAPgFANQgEANgIAIQgIAJgMAEQgMAFgOAAQgNAAgMgFgAgQg2QgFAHAAAOIAABDQAAAOAFAHQAGAHAKAAQALAAAFgHQAGgHAAgOIAAhDQAAgOgGgHQgFgIgLABQgKgBgGAIg");
	this.shape_5.setTransform(-10.4,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AEB1").s().p("Ag6BhIAAjBIA7AAQALAAAKADQAJAEAHAIQAHAIAEAJQADALAAAMQAAALgEALQgEALgIAHQALAEAGALQAGALAAAOQAAANgEALQgEAKgIAJQgIAHgKAFQgLADgMAAgAgTA8IAPAAQAKAAAGgFQAGgGAAgKQAAgLgGgGQgGgFgJAAIgQAAgAgTgSIAQAAQAGAAAFgFQAEgGAAgKQAAgKgEgFQgFgFgHAAIgPAAg");
	this.shape_6.setTransform(-24.8,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AEB1").s().p("AgZBgQgMgEgJgJQgHgIgFgNQgEgNAAgPIAAhDQAAgQAEgMQAFgNAHgIQAJgJAMgEQALgFAOAAQAOAAAMAFQAMAEAIAJQAJAIADANQAFAMAAAQIAABDQAAAPgFANQgDANgJAIQgIAJgMAEQgMAFgOAAQgOAAgLgFgAgPg2QgGAHAAAOIAABDQAAAOAGAHQAFAHAKAAQAKAAAGgHQAGgHAAgOIAAhDQAAgOgGgHQgGgIgKABQgKgBgFAIg");
	this.shape_7.setTransform(-40,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AEB1").s().p("AAqByIAAghIhTAAIAAAhIgnAAIAAhGIAMAAQAHgHAEgKQAEgIADgLQAEgMACgcIADhRIBoAAIAACdIASAAIAABGgAgGgUQgBATgDAOQgEARgHAOIAtAAIAAh4IgcAAg");
	this.shape_8.setTransform(-56,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-18.8,146.3,37.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEB1").s().p("AAtBhIAAgwIADhFIgCgBIgRAyIgKAbIglAAIgKgbIgSgyIgBABIADBFIAAAwIgnAAIAAjBIAoAAIAfBKIAMAgIAAAAIANggIAfhKIAoAAIAADBg");
	this.shape.setTransform(40.2,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AEB1").s().p("AgaBgQgLgEgIgJQgJgIgEgNQgEgNAAgPIAAhDQAAgQAEgMQAEgNAJgIQAIgJALgEQANgFANAAQAOAAAMAFQAMAEAIAJQAIAIAFANQAEAMAAAQIAABDQAAAPgEANQgFANgIAIQgIAJgMAEQgMAFgOAAQgNAAgNgFgAgQg2QgFAHAAAOIAABDQAAAOAFAHQAHAHAJAAQALAAAFgHQAGgHAAgOIAAhDQAAgOgGgHQgFgIgLABQgJgBgHAIg");
	this.shape_1.setTransform(22.5,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AEB1").s().p("Ag7BhIAAjBIA4AAQAOgBAMAFQAMAEAIAJQAIAJAFAMQAEAMAAAQQAAAQgEAMQgFAKgIAJQgIAJgMAEQgMAFgOgBIgRAAIAAA/gAgUgCIARAAQAKABAGgIQAGgHAAgOQAAgOgGgHQgGgIgKABIgRAAg");
	this.shape_2.setTransform(8.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AEB1").s().p("AgaBgQgLgEgIgJQgJgIgEgNQgEgNAAgPIAAhDQAAgQAEgMQAEgNAJgIQAIgJALgEQANgFANAAQAOAAAMAFQAMAEAIAJQAIAIAFANQAEAMAAAQIAABDQAAAPgEANQgFANgIAIQgIAJgMAEQgMAFgOAAQgNAAgNgFgAgQg2QgFAHAAAOIAABDQAAAOAFAHQAHAHAJAAQALAAAFgHQAGgHAAgOIAAhDQAAgOgGgHQgFgIgLABQgJgBgHAIg");
	this.shape_3.setTransform(-7.2,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AEB1").s().p("Ag6BhIAAjBIBrAAIAAAlIhEAAIAAAlIATAAQANAAAMAEQALAFAIAJQAHAFAEAMQAFALAAANQAAAPgFAMQgEALgHAIQgIAHgLAEQgLADgOAAgAgTA8IAQAAQAJAAAGgFQAHgHgBgLQABgMgHgGQgGgFgJgBIgQAAg");
	this.shape_4.setTransform(-21.4,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AEB1").s().p("AAuBhIAAjBIAnAAIAADBgAhUBhIAAjBIApAAIAABKIALAAQAQAAAMAEQAJAFAIAJQAHAFAEAMQADALAAAOQAAAPgDAMQgEALgHAHQgIAHgJAEQgMADgQAAgAgrA9IAIAAQAMAAAFgFQAGgGAAgMQAAgNgGgFQgFgGgMAAIgIAAg");
	this.shape_5.setTransform(-39.4,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AEB1").s().p("Ag6BhIAAjBIA7AAQALAAAKADQAJAEAHAIQAHAIAEAJQADALAAAMQAAALgEALQgEALgIAHQALAEAGALQAGALAAAOQAAANgEALQgEAKgIAJQgIAHgKAFQgLADgMAAgAgTA8IAPAAQAKAAAGgFQAGgGAAgKQAAgLgGgGQgGgFgJAAIgQAAgAgTgSIAQAAQAGAAAFgFQAEgGAAgKQAAgKgEgFQgFgFgHAAIgPAAg");
	this.shape_6.setTransform(-56.5,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-18.8,132.5,37.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.bg240();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-0.1,106.3,0.3,-106).s().p("EgudATOMAAAgmbMBc7AAAMAAAAmbg");
	this.shape.setTransform(109.5,118);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.9,-5,595,405);


(lib.Symbol7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFAFF").s().p("AhRA9IAeguIgFAIIBRAAIglhBIAMgUIApA+IgiAzIBEAAIAIALIhTAAIgkABQgvAAACgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6.3,16.6,12.6);


(lib.Symbol5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAFF").s().p("AhRBWIAKgVIA8AAIgjg2IAuhhIAqBXIgHgMIgoBGQgBACBMgBIANAaIhTABIguAAQgkAAABgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.7,16.6,17.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("Ag+BXIgjg1IBRh4IByCsIhzABIgYAAIgVAAg");
	this.shape.setTransform(1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-8.7,19.8,17.5);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAFF").s().p("AgYA+Igag8IAxhAIA0BHIgZA1IgdAAIgVAAg");
	this.shape_1.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-6.3,10.3,12.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAFF").s().p("AhPBXIBPivIAsBfIgnA8IBDAAIAIAVIhQABIgdAAQgzAAABgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8.9,16.1,17.9);


(lib.bggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgb();
	this.instance.setTransform(-559,-186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-559,-186,545,600);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-66.2,52.4);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(-66.2,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.4,0,146.3,71.2);


(lib.Symbol20 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(20.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 7
	this.instance_1 = new lib.Symbol7_1();
	this.instance_1.setTransform(8.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 10
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(2.7,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 5
	this.instance_3 = new lib.Symbol5_1();
	this.instance_3.setTransform(-4.9,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 2
	this.instance_4 = new lib.Symbol2_1();
	this.instance_4.setTransform(-15,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Symbol 1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(-24.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-9.5,64.6,19.1);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-96.2,11,1,1,0,0,0,-59.8,16.4);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(-78,-16.4,1,1,0,0,0,-78,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-35.2,172,62.6);


(lib.story = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.setTransform(101.8,0,1,1,0,0,0,8.7,-12.8);

	this.instance_1 = new lib.Symbol33();
	this.instance_1.setTransform(88.2,0,1,1,0,0,0,9.2,-12.8);

	this.instance_2 = new lib.Symbol32();
	this.instance_2.setTransform(73.9,0,1,1,0,0,0,9.2,-12.8);

	this.instance_3 = new lib.Symbol31();
	this.instance_3.setTransform(59.7,0,1,1,0,0,0,9.2,-12.8);

	this.instance_4 = new lib.Symbol30();
	this.instance_4.setTransform(46.5,0,1,1,0,0,0,8.2,-12.8);

	this.instance_5 = new lib.Symbol29();
	this.instance_5.setTransform(33.6,0,1,1,0,0,0,9,-12.8);

	this.instance_6 = new lib.Symbol28();
	this.instance_6.setTransform(19.6,0,1,1,0,0,0,9.2,-12.8);

	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(-4.2,0,1,1,0,0,0,8.7,-12.8);

	this.instance_8 = new lib.Symbol26();
	this.instance_8.setTransform(-17.8,0,1,1,0,0,0,9.1,-12.8);

	this.instance_9 = new lib.Symbol25();
	this.instance_9.setTransform(-31.8,0,1,1,0,0,0,9.2,-12.8);

	this.instance_10 = new lib.Symbol24();
	this.instance_10.setTransform(-45.5,0,1,1,0,0,0,8.8,-12.8);

	this.instance_11 = new lib.Symbol23();
	this.instance_11.setTransform(-59,0,1,1,0,0,0,9,-12.8);

	this.instance_12 = new lib.Symbol22();
	this.instance_12.setTransform(-72.9,0,1,1,0,0,0,9.1,-12.8);

	this.instance_13 = new lib.Symbol21();
	this.instance_13.setTransform(-86.9,0,1,1,0,0,0,9.2,-12.8);

	this.instance_14 = new lib.Symbol11();
	this.instance_14.setTransform(-101.2,0,1,1,0,0,0,9.2,-12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.4,-12.8,221,25.6);


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(76.4,-0.9);

	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(52.8,-0.9);

	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(29.8,-0.9);

	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(6.2,-0.9);

	this.instance_4 = new lib.Symbol15();
	this.instance_4.setTransform(-15.7,0.6);

	this.instance_5 = new lib.Symbol14();
	this.instance_5.setTransform(-35.1,0);

	this.instance_6 = new lib.Symbol13();
	this.instance_6.setTransform(-59.1,-0.9);

	this.instance_7 = new lib.Symbol12();
	this.instance_7.setTransform(-80,-0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00AEB1").ss(0.1,1,1).p("AAAgUIAAAp");
	this.shape.setTransform(50.2,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-8.6,171,17.2);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.letters = new lib.letters();
	this.letters.setTransform(0,19.1);

	this.mounts = new lib.Symbol20();
	this.mounts.setTransform(-0.7,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mounts},{t:this.letters}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-27.6,171,55.4);


(lib.grune = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.stry = new lib.story();
	this.stry.setTransform(424.1,-113.1);

	this.timeline.addTween(cjs.Tween.get(this.stry).wait(1));

	// Layer 2
	this.logo = new lib.logo();
	this.logo.setTransform(422.5,-164);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEB1").s().p("Egt4AjWMAathGrMBBEAAAMAAABGrg");
	this.shape.setTransform(293.8,-140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-366.2,587.5,452.5);


// stage content:
(lib._240x400tanury2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var w = document.getElementById('scene').offsetWidth;
		var h = document.getElementById('scene').offsetHeight;
		function g(parent){
			var i, key, arr = []; 
			// iterate over every property name in the clip  
			for (key in parent) {  
				if (parent[key] instanceof createjs.Container) {  
					arr.push(parent[key]);
				}  
			}
			return arr.reverse();
		}
		
		var repeated = false;
		var twp = new TimelineMax({repeat: -1});
		var tl = new TimelineMax({repeat: 1, repeatDelay: 2, onRepeat: function(){
			repeated = true;
		}, onComplete: function(){
			twp.stop();
			}});
		
		tl.timeScale(1.2);
		
		var t1 = g(this.t1);
		var t2 = g(this.t2);
		
		var mnts = g(this.grune.logo.mounts);
		var ltrs = g(this.grune.logo.letters);
		var story = g(this.grune.stry);
		
		
		
		tl.to(this.grune2, 1, {alpha:0}, 1);
		tl.from(this.bg, 4, {scaleX: '+=.3', scaleY: '+=.3', x: '+=250', ease:Power1.easeInOut}, '-=1');
		tl.add('flat', '-=2');
		tl.from(this.flat, 2, {scaleX: '+=3', scaleY: '+=3',  ease:Power1.easeOut}, 'flat');
		tl.from(this.flat, .6, { alpha:0, ease:Sine.easeOut}, 'flat-=.2');
		//tl.from(this.flat.wht, 1, { alpha:.5}, 'flat');
		
		tl.from(this.plate, 1, {scaleX: '+=.2', scaleY: '+=.2', x:'-='+w,  ease:Power1.easeOut}, 'flat+=2');
		tl.staggerFrom(t1, 1, { x:'-='+150, alpha:0,  ease:Expo.easeOut}, .2, 'flat+=.8');
		tl.staggerFrom(t2, 1, { y:'+='+30, alpha:0,  ease:Expo.easeOut}, .1, 'flat+=1.8');
		
		
		
		tl.from(this.grune, 1, {x: w, ease: Power1.easeOut}, '+=3');
		tl.add('logo-=.8');
		tl.staggerFrom(mnts, 1.2, {scaleX: 0, scaleY: 0, ease: Back.easeOut}, .1, "logo");
		tl.staggerFrom(ltrs, 1.5, { scaleX: 0, scaleY: 0, ease: Expo.easeOut}, .04, 'logo+=.6');
		tl.staggerFrom(story, .7, { alpha: 0, ease: Sine.easeOut}, .04, 'logo+=1.4');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.grune2 = new lib.grune();
	this.grune2.setTransform(-256.5,325,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.grune2).wait(1));

	// Layer 1
	this.grune = new lib.grune();
	this.grune.setTransform(-256.5,325,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.grune).wait(1));

	// Layer 2
	this.plate = new lib.Symbol7();
	this.plate.setTransform(-8.6,360.3,1.266,1.266,0,0,0,-207.1,21.7);

	this.t2 = new lib.t2();
	this.t2.setTransform(86.2,116.1,1.125,1.125,0,0,0,-66.2,35.6);

	this.t1 = new lib.Symbol3_1();
	this.t1.setTransform(99.3,48.6,1.125,1.125,0,0,0,-78,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.plate}]}).wait(1));

	// Layer 3
	this.flat = new lib.Symbol2();
	this.flat.setTransform(0.9,130.1,1,1,0,0,0,0.9,130.1);

	this.timeline.addTween(cjs.Tween.get(this.flat).wait(1));

	// bg
	this.bg = new lib.bggg();
	this.bg.setTransform(110.2,62.2,0.711,0.711,0,0,0,-207.9,-58.8);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,171.8,663.6,430.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;