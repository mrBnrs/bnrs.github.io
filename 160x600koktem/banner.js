(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#051726",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg160.jpg", id:"bg160"},
		{src:"images/buil3.png", id:"buil3"},
		{src:"images/grand.png", id:"grand"},
		{src:"images/koktem1.png", id:"koktem1"},
		{src:"images/koktem2.png", id:"koktem2"},
		{src:"images/light.png", id:"light"},
		{src:"images/meteor.png", id:"meteor"},
		{src:"images/meteor2.png", id:"meteor2"}
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



(lib.bg160 = function() {
	this.initialize(img.bg160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.buil3 = function() {
	this.initialize(img.buil3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,408);


(lib.grand = function() {
	this.initialize(img.grand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,28);


(lib.koktem1 = function() {
	this.initialize(img.koktem1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,57);


(lib.koktem2 = function() {
	this.initialize(img.koktem2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,28);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,134);


(lib.meteor = function() {
	this.initialize(img.meteor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,180);


(lib.meteor2 = function() {
	this.initialize(img.meteor2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,14);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgEQgEgEgDgHQgCgHAAgHQAAgJACgGQADgHAFgDQAFgDAHgCQAHgDAIABIAXAAIAAgPQAAgHgCgFQgBgFgDgEQgDgDgFgCQgEgCgGAAQgDABgFABQgEACgEADQgEACgBAFQgCAEAAAFIgKAAQABgHACgGQADgGAEgEQAFgEAGgCQAGgCAGgBQAIABAGACQAGACAFAFQAEAFACAHQADAGAAAJIAABPIgIAAIgBgMQgFAGgHAEQgHAEgIABQgIAAgGgDgAgIABQgGACgDADQgEADgCAFQgCAEABAHQAAAGABAFQACAFAEADQADADAEABQAFACAFAAQAGAAAFgCQAEgCAEgDQAEgEABgEQACgGAAgFIAAgYIgYAAQgFAAgFABg");
	this.shape.setTransform(-0.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgFQgEgFgDgHQgCgHAAgJIAAgoQAAgJACgIQADgHAEgFQAFgFAGgDQAHgCAHAAQAHAAAHACQAGADAFAFQAFAFACAIQADAHAAAJIgKAAQAAgHgCgGQgBgFgEgEQgDgEgFgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgCAGQgCAGAAAHIAAAoQAAAHACAFQACAGADAEQADADAFACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDACgGQACgGAAgHIAJAAQAAAJgCAHQgDAIgFAFQgEAFgHADQgHACgHAAQgHAAgHgCg");
	this.shape.setTransform(0.1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-15.2,13.6,30.4);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA5QgHgDgEgFQgEgFgDgHQgCgHAAgJIAAgoQAAgJACgIQADgHAEgFQAFgFAHgDQAGgCAIAAQAHAAAGACQAHADAEAFQAGAFACAHQADAIAAAJIAAAXIg9AAIAAARQAAAHACAFQABAGAEAEQADADAFACQAFACAGAAQAFAAAFgCQAFgBAEgEQADgDACgGQACgFABgGIAKAAQgBAIgEAHQgCAHgFAFQgEAEgIADQgGACgHAAQgIAAgHgCgAgLgvQgFACgDAEQgEADgBAGQgCAGAAAHIAAARIAzAAIAAgRQAAgHgCgGQgCgGgDgDQgEgEgEgCQgGgCgEAAQgGAAgFACg");
	this.shape.setTransform(0.2,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXA5IAAg4IgtAAIAAA4IgKAAIAAhxIAKAAIAAAyIAtAAIAAgyIAKAAIAABxg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA4QgHgCgFgFQgEgEgDgGQgDgHAAgGIAJAAQABAFACAFQACAEADADQAEADAFACQAFACAEAAQAGAAAFgCQAFgCADgDQAEgDACgFQACgFAAgGQAAgFgCgEQgCgEgEgDQgDgDgFgCQgGgCgFAAIgQAAIAAgHIAQAAQAEABAFgCQAEgBADgEQADgDACgDQACgEAAgFQAAgEgCgEIgFgIQgDgCgEgCQgEgCgFAAQgFAAgEACQgEACgDACQgDAEgCAFIgCAKIgKAAQABgIACgGQACgGAFgFQAEgFAGgBQAGgDAHAAQAGAAAHADQAFACAFAEQAEAEADAGQACAFAAAHQAAAJgFAIQgEAFgIAEIAJABQAEADACAEQADADACAFQABAEAAAGQAAAHgCAGQgDAHgFAEQgFAFgHACQgGADgIAAQgGAAgHgDg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-15.2,12.8,30.4);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA5IAAhEIABgdIgBAAIgKAWIglBLIgKAAIAAhxIAKAAIAABIIgBAXIABABIAIgSIAnhOIAKAAIAABxg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-15.2,14.1,30.4);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBPQgHgCgFgGQgFgFgCgHQgCgHgBgJIAAhBQABgLADgIQADgHAHgGQAHgHAOgFQAIgCAEgDQAGgDADgHIAIAGQgEAIgIAEQgFAEgKADQgNAEgFAGQgFAEgBAFQgDAHAAAIIAAAMQAEgJAIgFQAIgEAIAAQAHAAAGADQAGACAEAFQAFAGACAHQACAGAAAJIAAAhQABAJgDAHQgDAHgEAFQgFAGgGACQgIADgHAAQgHAAgGgDgAgIgRQgFACgEAEQgEAEgCAGQgCAEAAAJIAAAfQAAAHABAGQADAFADAEQAEAEAEACQAFACAFAAQAFAAAFgCQAGgCADgEQADgEACgFQACgGAAgHIAAgfQAAgIgCgFQgCgGgDgEQgDgEgEgCQgGgCgFAAQgEAAgFACg");
	this.shape.setTransform(0.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-15.2,14.2,30.4);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA5QgIgDgEgFQgFgFgCgHQgDgIAAgJIAAgnQAAgKADgGQACgIAFgFQAEgFAIgDQAGgCAHgBQAIABAGACQAIADAEAFQAFAFACAIQADAGAAAKIAAAnQAAAJgDAIQgCAHgFAFQgEAFgIADQgGADgIAAQgHAAgGgDgAgKgvQgEACgFADQgDAEgBAGQgCAGAAAHIAAAnQAAAIACAFQABAGADAEQAFAEAEABQAGACAEAAQAGAAAFgCQAFgBAEgEQADgEABgGQACgFABgIIAAgnQgBgHgCgGQgBgGgDgEQgEgDgFgCQgFgCgGgBQgEABgGACg");
	this.shape.setTransform(0.1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,14,30.4);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaA5IAAhxIA1AAIAAAJIgrAAIAABog");
	this.shape.setTransform(0.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-15.2,11.5,30.4);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA5QgHgDgEgFQgEgFgDgHQgCgHAAgJIAAgoQAAgJACgIQADgHAEgFQAFgFAHgDQAGgCAIAAQAHAAAGACQAHADAEAFQAGAFACAHQADAIAAAJIAAAXIg9AAIAAARQAAAHACAFQABAGAEAEQADADAFACQAFACAGAAQAFAAAFgCQAFgBAEgEQADgDACgGQACgFABgGIAKAAQgBAIgEAHQgCAHgFAFQgEAEgIADQgGACgHAAQgIAAgHgCgAgLgvQgFACgDAEQgEADgBAGQgCAGAAAHIAAARIAzAAIAAgRQAAgHgCgGQgCgGgDgDQgEgEgEgCQgGgCgEAAQgGAAgFACg");
	this.shape.setTransform(0.2,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6A5IAAhxIAJAAIAABoIAuAAIAAhoIAHAAIAABoIAuAAIAAhoIAJAAIAABxg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-15.2,19.1,30.4);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgEQgEgEgDgHQgCgHAAgHQAAgJACgGQADgHAFgDQAFgDAHgCQAHgDAIABIAXAAIAAgPQAAgHgCgFQgBgFgDgEQgDgDgFgCQgEgCgGAAQgDABgFABQgEACgEADQgEACgBAFQgCAEAAAFIgKAAQABgHACgGQADgGAEgEQAFgEAGgCQAGgCAGgBQAIABAGACQAGACAFAFQAEAFACAHQADAGAAAJIAABPIgIAAIgBgMQgFAGgHAEQgHAEgIABQgIAAgGgDgAgIABQgGACgDADQgEADgCAFQgCAEABAHQAAAGABAFQACAFAEADQADADAEABQAFACAFAAQAGAAAFgCQAEgCAEgDQAEgEABgEQACgGAAgFIAAgYIgYAAQgFAAgFABg");
	this.shape.setTransform(-0.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA5IAAhxIAeAAQAGAAAGACQAGACAFAEQAEAEACAFQACAGAAAHQAAAHgDAGQgEAGgHAEQAJADAGAHQAFAIAAAKQAAAHgCAGQgDAGgEAEQgFAEgHADQgHACgHAAgAgYAwIAXAAQAFAAAFgCQAFgBAEgDQADgDACgEQABgFAAgFQAAgGgBgEQgCgEgDgDQgEgDgFgCQgFgBgEgBIgYAAgAgYgGIAWAAQADABAEgCQAEgBADgEQAEgDABgDQACgEAAgEQAAgFgCgEQgBgEgDgDQgDgCgFgBQgEgCgEAAIgVAAg");
	this.shape.setTransform(0.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-15.2,13.5,30.4);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgEQgFgEgCgHQgCgHgBgHQABgJACgGQACgHAGgDQAFgDAHgCQAHgDAIABIAXAAIAAgPQAAgHgBgFQgCgFgDgEQgDgDgEgCQgFgCgGAAQgDABgFABQgEACgEADQgDACgCAFQgCAEAAAFIgKAAQAAgHADgGQADgGAFgEQAEgEAGgCQAGgCAGgBQAIABAGACQAGACAEAFQAFAFACAHQACAGAAAJIAABPIgIAAIgBgMQgDAGgHAEQgIAEgIABQgIAAgGgDgAgJABQgFACgEADQgDADgCAFQgCAEAAAHQAAAGADAFQABAFADADQAEADAEABQAFACAFAAQAGAAAEgCQAGgCADgDQADgEADgEQABgGAAgFIAAgYIgYAAQgFAAgGABg");
	this.shape.setTransform(-0.2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBOIAAiZIAIAAIABAPQAEgIAIgFQAHgEAIAAQAHAAAGADQAGADAFAFQAEAFADAHQACAIAAAJIAAAmQAAAJgCAIQgDAHgEAGQgFAEgGADQgGADgIAAQgHAAgHgEQgIgEgEgHIAAA0gAgJhCQgEACgEAEQgEAEgCAHQgCAGAAAIIAAAlQAAAGACAGQACAGADADQAEAEAEADQAFACAFAAQAFAAAFgCQAFgCAEgEQADgEACgGQACgFAAgIIAAgmQAAgHgCgGQgCgGgDgEQgEgEgFgCQgEgCgGAAQgEAAgFACg");
	this.shape.setTransform(0.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-15.2,14.2,30.4);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBNIAAgJIAGAAQAGAAAEgFQADgDADgJIAIgaIglhmIAKAAIAdBYIAbhYIALAAIgnCCQgDALgGAHQgDADgDABQgEACgFAAg");
	this.shape.setTransform(0.1,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-15.2,12.6,30.4);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDA5IAAhoIgdAAIAAgJIBBAAIAAAJIgdAAIAABog");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-15.2,11.6,30.4);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZA5Igog5IgLAMIAAAtIgJAAIAAhxIAJAAIAAA4IARgUIAcgkIAMAAIgnAxIAsBAg");
	this.shape.setTransform(0.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-15.2,13.2,30.4);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA5QgHgDgEgFQgEgFgDgHQgCgHAAgJIAAgoQAAgJACgIQADgHAEgFQAFgFAHgDQAGgCAIAAQAHAAAGACQAHADAEAFQAGAFACAHQADAIAAAJIAAAXIg9AAIAAARQAAAHACAFQABAGAEAEQADADAFACQAFACAGAAQAFAAAFgCQAFgBAEgEQADgDACgGQACgFABgGIAKAAQgBAIgEAHQgCAHgFAFQgEAEgIADQgGACgHAAQgIAAgHgCgAgLgvQgFACgDAEQgEADgBAGQgCAGAAAHIAAARIAzAAIAAgRQAAgHgCgGQgCgGgDgDQgEgEgEgCQgGgCgEAAQgGAAgFACg");
	this.shape.setTransform(0.2,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDA5IAAhoIgdAAIAAgJIBBAAIAAAJIgdAAIAABog");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-15.2,11.6,30.4);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA5IAAhEIABgdIgBAAIgKAWIglBLIgKAAIAAhxIAKAAIAABIIgBAXIABABIAIgSIAnhOIAKAAIAABxg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-15.2,14.1,30.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA5IgbgxIgaAxIgLAAIAhg5Iggg4IAMAAIAYAwIAagwIALAAIggA4IAhA5g");
	this.shape.setTransform(0.1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-15.2,12.3,30.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBOIAAiZIAIAAIABAPQAEgIAIgFQAHgEAIAAQAHAAAGADQAGADAFAFQAEAFADAHQACAIAAAJIAAAmQAAAJgCAIQgDAHgEAGQgFAEgGADQgGADgIAAQgHAAgHgEQgIgEgEgHIAAA0gAgJhCQgEACgEAEQgEAEgCAHQgCAGAAAIIAAAlQAAAGACAGQACAGADADQAEAEAEADQAFACAFAAQAFAAAFgCQAFgCAEgEQADgEACgGQACgFAAgIIAAgmQAAgHgCgGQgCgGgDgEQgEgEgFgCQgEgCgGAAQgEAAgFACg");
	this.shape.setTransform(0.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-15.2,14.2,30.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgEQgEgEgDgHQgCgHAAgHQAAgJACgGQADgHAFgDQAFgDAHgCQAHgDAIABIAXAAIAAgPQAAgHgCgFQgBgFgDgEQgDgDgFgCQgEgCgGAAQgDABgFABQgEACgEADQgEACgBAFQgCAEAAAFIgKAAQABgHACgGQADgGAEgEQAFgEAGgCQAGgCAGgBQAIABAGACQAGACAFAFQAEAFACAHQADAGAAAJIAABPIgIAAIgBgMQgFAGgHAEQgHAEgIABQgIAAgGgDgAgIABQgGACgDADQgEADgCAFQgCAEABAHQAAAGABAFQACAFAEADQADADAEABQAFACAFAAQAGAAAFgCQAEgCAEgDQAEgEABgEQACgGAAgFIAAgYIgYAAQgFAAgFABg");
	this.shape.setTransform(-0.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZA5IAAgtIgVAAIgaAtIgLAAIAdgtQgGgBgFgCQgEgEgDgFQgEgCgCgGQgBgGAAgHQAAgHACgHQADgHAEgEQAFgFAGgCQAHgDAGAAIAeAAIAABxgAgFgtQgFACgDADIgFAIQgCAGAAAFQAAAGACAGQABAEAEAEQADABAEACQAFACADAAIAXAAIAAgzIgVAAQgEAAgFACg");
	this.shape.setTransform(-0.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-15.2,12.9,30.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgEQgEgEgDgHQgCgHAAgHQAAgJACgGQADgHAFgDQAFgDAHgCQAHgDAIABIAXAAIAAgPQAAgHgCgFQgBgFgDgEQgDgDgFgCQgEgCgGAAQgDABgFABQgEACgEADQgEACgBAFQgCAEAAAFIgKAAQABgHACgGQADgGAEgEQAFgEAGgCQAGgCAGgBQAIABAGACQAGACAFAFQAEAFACAHQADAGAAAJIAABPIgIAAIgBgMQgFAGgHAEQgHAEgIABQgIAAgGgDgAgIABQgGACgDADQgEADgCAFQgCAEABAHQAAAGABAFQACAFAEADQADADAEABQAFACAFAAQAGAAAFgCQAEgCAEgDQAEgEABgEQACgGAAgFIAAgYIgYAAQgFAAgFABg");
	this.shape.setTransform(-0.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,13.9,30.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZA5Igog5IgLAMIAAAtIgJAAIAAhxIAJAAIAAA4IARgUIAcgkIAMAAIgnAxIAsBAg");
	this.shape.setTransform(0.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-15.2,13.2,30.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA5QgIgDgEgFQgFgFgCgHQgDgIAAgJIAAgnQAAgKADgGQACgIAFgFQAEgFAIgDQAGgCAHgBQAIABAGACQAIADAEAFQAFAFACAIQADAGAAAKIAAAnQAAAJgDAIQgCAHgFAFQgEAFgIADQgGADgIAAQgHAAgGgDgAgKgvQgEACgFADQgDAEgBAGQgCAGAAAHIAAAnQAAAIACAFQABAGADAEQAFAEAEABQAGACAEAAQAGAAAFgCQAFgBAEgEQADgEABgGQACgFABgIIAAgnQgBgHgCgGQgBgGgDgEQgEgDgFgCQgFgCgGgBQgEABgGACg");
	this.shape.setTransform(0.1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15.2,14,30.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5QgGgDgFgFQgEgFgDgHQgCgHAAgJIAAgoQAAgJACgIQADgHAEgFQAFgFAGgDQAHgCAHAAQAHAAAHACQAGADAFAFQAFAFACAIQADAHAAAJIgKAAQAAgHgCgGQgBgFgEgEQgDgEgFgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgCAGQgCAGAAAHIAAAoQAAAHACAFQACAGADAEQADADAFACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDACgGQACgGAAgHIAJAAQAAAJgCAHQgDAIgFAFQgEAFgHADQgHACgHAAQgHAAgHgCg");
	this.shape.setTransform(0.1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-15.2,13.6,30.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlA5IAAhxIAKAAIAABxgAguA5IAAhxIAJAAIAAArIAXAAQAHAAAHADQAFACAFAFQAEADADAHQADAGAAAIQAAAHgDAHQgDAHgEAFQgFAEgFADQgHADgHAAgAglAwIAXAAQAFAAAFgCQAEgCADgEQAEgEABgEQACgFAAgGQAAgGgCgFQgBgFgEgDQgDgCgEgCQgFgCgFAAIgXAAg");
	this.shape.setTransform(0.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-15.2,16.8,30.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBNIAAiYIAiAAQAIAAAHACQAIADAEAFQAFAFADAHQADAHAAAKQAAAGgCAGQAAAGgDAFQgDAEgEADQgEADgGACQAHABAFABQAGAEADAEQAEAGACAGQABAGABAHQgBALgCAHQgEAJgFAFQgGAFgIADQgIACgIABgAgdBDIAbAAQAGAAAHgCQAFgCAFgEQAEgEACgGQACgGABgJQgBgGgCgHQgCgGgFgEQgFgEgFgDQgHgCgGAAIgaAAgAgdgGIAZAAQAFAAAGgCQAFgCAEgEQADgEACgGQACgFAAgHQAAgHgCgGQgCgGgEgDQgEgEgFgCQgGgCgFAAIgYAAg");
	this.shape.setTransform(0.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-15.2,14.9,30.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.koktem2, null, new cjs.Matrix2D(1,0,0,1,-161.2,-14)).s().p("AinCMIAAkXIFPAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-14,33.7,28);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.koktem2, null, new cjs.Matrix2D(1,0,0,1,-128.9,-14)).s().p("AiMCMIAAkXIEZAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-14,28.2,28);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.koktem2, null, new cjs.Matrix2D(1,0,0,1,-100.9,-14)).s().p("AiKCMIAAkXIEVAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-14,27.9,28);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.koktem2, null, new cjs.Matrix2D(1,0,0,1,-72.7,-14)).s().p("AiNCMIAAkXIEbAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-14,28.5,28);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.koktem2, null, new cjs.Matrix2D(1,0,0,1,-42.1,-14)).s().p("AiVCMIAAkXIErAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-14,30.2,28);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.koktem2, null, new cjs.Matrix2D(1,0,0,1,-13.5,-14)).s().p("AiGCMIAAkXIENAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-14,27.1,28);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buil3();
	this.instance.setTransform(-115,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,21,455,408);


(lib.spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.koktem1();
	this.instance.setTransform(-29,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-28.5,58,57);


(lib.meteor1copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meteor();
	this.instance.setTransform(-92.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-101.5,193,180);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.4)").ss(1,1,1).p("AWTAAMgslAAA");
	this.shape.setTransform(-143.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.meteor2();
	this.instance.setTransform(-20.5,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.9,-7,307.4,14);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(-66.5,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-67,133,134);


(lib.grand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grand();
	this.instance.setTransform(-43.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-14,87,28);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#051626").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg160();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.setTransform(-21.5,42.6);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(-30.8,42.6);

	this.instance_2 = new lib.Symbol36();
	this.instance_2.setTransform(-40,42.6);

	this.instance_3 = new lib.Symbol35();
	this.instance_3.setTransform(-49.5,42.6);

	this.instance_4 = new lib.Symbol34();
	this.instance_4.setTransform(-58.3,42.6);

	this.instance_5 = new lib.Symbol33();
	this.instance_5.setTransform(-67.3,42.6);

	this.instance_6 = new lib.Symbol32();
	this.instance_6.setTransform(-77,42.6);

	this.instance_7 = new lib.Symbol31();
	this.instance_7.setTransform(-27.5,14.2);

	this.instance_8 = new lib.Symbol30();
	this.instance_8.setTransform(-35.7,14.2);

	this.instance_9 = new lib.Symbol29();
	this.instance_9.setTransform(-43.9,14.2);

	this.instance_10 = new lib.Symbol28();
	this.instance_10.setTransform(-55.9,14.2);

	this.instance_11 = new lib.Symbol27();
	this.instance_11.setTransform(-67.9,14.2);

	this.instance_12 = new lib.Symbol26();
	this.instance_12.setTransform(-77.2,14.2);

	this.instance_13 = new lib.Symbol25();
	this.instance_13.setTransform(9.6,-14.2);

	this.instance_14 = new lib.Symbol24();
	this.instance_14.setTransform(0.1,-14.2);

	this.instance_15 = new lib.Symbol23();
	this.instance_15.setTransform(-8.8,-14.2);

	this.instance_16 = new lib.Symbol22();
	this.instance_16.setTransform(-16.4,-14.2);

	this.instance_17 = new lib.Symbol21();
	this.instance_17.setTransform(-24.4,-14.2);

	this.instance_18 = new lib.Symbol20();
	this.instance_18.setTransform(-33.4,-14.2);

	this.instance_19 = new lib.Symbol19();
	this.instance_19.setTransform(-41.7,-14.2);

	this.instance_20 = new lib.Symbol18();
	this.instance_20.setTransform(-50.2,-14.2);

	this.instance_21 = new lib.Symbol17();
	this.instance_21.setTransform(-58.9,-14.2);

	this.instance_22 = new lib.Symbol16();
	this.instance_22.setTransform(-67.6,-14.2);

	this.instance_23 = new lib.Symbol15();
	this.instance_23.setTransform(-77.1,-14.2);

	this.instance_24 = new lib.Symbol14();
	this.instance_24.setTransform(-18.8,-42.6);

	this.instance_25 = new lib.Symbol13();
	this.instance_25.setTransform(-27.8,-42.6);

	this.instance_26 = new lib.Symbol12();
	this.instance_26.setTransform(-36.8,-42.6);

	this.instance_27 = new lib.Symbol11();
	this.instance_27.setTransform(-45.9,-42.6);

	this.instance_28 = new lib.Symbol10();
	this.instance_28.setTransform(-55.2,-42.6);

	this.instance_29 = new lib.Symbol9();
	this.instance_29.setTransform(-65.6,-42.6);

	this.instance_30 = new lib.Symbol8();
	this.instance_30.setTransform(-76.7,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-57.8,100.7,115.6);


(lib.meteor1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.light = new lib.light_1();
	this.light.setTransform(-34.8,35.4,4.343,4.343,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

	// Layer 1
	this.instance = new lib.meteor();
	this.instance.setTransform(-92.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.8,-256.5,577.7,582);


(lib.logoname = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(72.2,49);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(40,49);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(11.9,49);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(-16.2,49);

	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(-46.8,49);

	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(-75.4,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,35,178,28);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.grand = new lib.grand_1();
	this.grand.setTransform(0.5,47);

	this.logon = new lib.logoname();
	this.logon.setTransform(0,-32);

	this.spin = new lib.spin();
	this.spin.setTransform(0,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spin},{t:this.logon},{t:this.grand}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-61,178,122);


// stage content:
(lib._160x600koktem = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
		
		
		this.logo2.visible = false;
		var repeated = false;
		
		var tl = new TimelineMax({repeat: 1, repeatDelay: .3, onRepeat: function(){
			repeated = true;
		}});
		
		var logon = g(this.logo.logon);
		var txt = g(this.txt);
		
		function check(){
			if(repeated) {
				tl.stop();
			}
		}
		
		
		tl.add('meteor', 1.4)
		tl.to(this.fade, 2, {alpha: 0, ease: Expo.easeOut});
		tl.from(this.meteor0, 2.5, {scaleX:'-=.4', scaleY:'-=.4', alpha: 0, x:'+=200', y:'-=400', ease: Power3.easeInOut}, 0);
		tl.from(this.meteor1, 2.5, {scaleX:'-=.4', scaleY:'-=.4', alpha: 0, x:'+=200', y:'-=400', ease: Power3.easeInOut} ,.4);
		
		tl.from(this.meteor, 1.5, {scaleX:'-=.4', scaleY:'-=.4', alpha: 0, x:'+=100', y:'-=200', ease: Power3.easeInOut}, 'meteor');
		tl.from(this.meteor.light, .42, {scaleX:0, scaleY:0, alpha: 0, ease: Linear.easeNone}, "meteor+=.8");
		tl.from(this.logo.spin, 1.1, {scaleX:0, scaleY:0, alpha: 0, rotation: "+=140", ease: Back.easeOut}, "meteor+=1");
		tl.to(this.meteor, .8, {scaleX:0, scaleY:0, alpha: 0, ease: Sine.easeIn}, 'meteor+=1.1');
		
		tl.staggerFrom(logon, 1, {x: 0, y: 0, alpha: 0, rotation: '-=30', ease: Expo.easeOut}, .14, "-=1");
		tl.from(this.logo.grand, 1, {alpha:0}, "-=.5");
		
		
		
		tl.from(this.bg, 1.3, {y: 0, ease: Power2.easeInOut}, 'move');
		tl.to(this.logo, 1.3, {scaleX:this.logo2.scaleX, scaleY:this.logo2.scaleY, y: this.logo2.y,  ease: Power2.easeInOut}, 'move');
		tl.to(this.logo.spin, 1.3, {rotation: '+=360',  ease: Power2.easeInOut}, 'move');
		tl.from(this.build, 2, {scaleX:"-=.4", scaleY:"-=.4",  y: "+=200",   ease: Power2.easeInOut}, 'move-=.6');
		
		tl.add('line', '-=.6');
		
		tl.from(this.line, 2, {x:0}, 'line');
		tl.staggerFrom(txt, 1, {alpha: 0}, .05,  'line');
		
		
		tl.to(this.fade, 1, {alpha: 1, ease: Expo.easeOut, onStart: check}, "+=3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 9
	this.fade = new lib.fade();
	this.fade.setTransform(80,300,0.667,1.5);

	this.timeline.addTween(cjs.Tween.get(this.fade).wait(1));

	// Layer 4
	this.meteor0 = new lib.meteor1copy();
	this.meteor0.setTransform(-52.3,547.4,1,1,-18.2,0,0,4,-11.5);

	this.meteor1 = new lib.meteor1copy();
	this.meteor1.setTransform(-49.9,316,1,1,-15.7,0,0,4,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.meteor1},{t:this.meteor0}]}).wait(1));

	// meteor
	this.meteor = new lib.meteor1();
	this.meteor.setTransform(82.5,275.6,1,1,-14.5,0,0,-37,37.1);

	this.timeline.addTween(cjs.Tween.get(this.meteor).wait(1));

	// Layer 8
	this.txt = new lib.txt();
	this.txt.setTransform(120.9,227.2,1.271,1.271,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// line
	this.line = new lib.line();
	this.line.setTransform(188.5,147,1,1,0,0,0,29,0);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

	// logo2
	this.logo2 = new lib.logo();
	this.logo2.setTransform(80,76,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(80,300,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// build
	this.build = new lib.Symbol1();
	this.build.setTransform(63,602,1,1,0,0,0,126,428);

	this.timeline.addTween(cjs.Tween.get(this.build).wait(1));

	// bg
	this.bg = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.6,218.4,704.8,744.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;