(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#00B5EB",
	opacity: 1.00,
	manifest: [
		{src:"images/can.png?1487236791290", id:"can"},
		{src:"images/cloud1t.png?1487236791290", id:"cloud1t"},
		{src:"images/hand.png?1487236791290", id:"hand"},
		{src:"images/hand2.png?1487236791290", id:"hand2"},
		{src:"images/spoon.png?1487236791290", id:"spoon"},
		{src:"images/vit1.png?1487236791290", id:"vit1"},
		{src:"images/vit2.png?1487236791290", id:"vit2"},
		{src:"images/vit3.png?1487236791290", id:"vit3"},
		{src:"images/water.png?1487236791290", id:"water"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.can = function() {
	this.initialize(img.can);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,164);


(lib.cloud1t = function() {
	this.initialize(img.cloud1t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,188);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,205);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,64);


(lib.spoon = function() {
	this.initialize(img.spoon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,168);


(lib.vit1 = function() {
	this.initialize(img.vit1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,61);


(lib.vit2 = function() {
	this.initialize(img.vit2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,63);


(lib.vit3 = function() {
	this.initialize(img.vit3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,71);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,168);


(lib.wht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.729)","rgba(255,255,255,0)"],[0,1],0,0.1,0,0,0.1,95.7).s().p("AqeKfQkWkXAAmIQAAmHEWkXQEWkWGIAAQGIAAEXEWQEWEXAAGHQAAGIkWEXQkXEWmIAAQmIAAkWkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-94.9,189.9,189.9);


(lib.vt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vit1();
	this.instance.setTransform(-41,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-30.5,82,61);


(lib.vt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vit2();
	this.instance.setTransform(-32,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-31.5,64,63);


(lib.vt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vit3();
	this.instance.setTransform(-36.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-35.5,73,71);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAxIAAhNQAAgHgCgFIgDgDIgGAAIgBAAIAAgFIBAAAIAHABQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABIACADIABAFIAAAMIgFAAIgBgIIgDgFIgGgDQgEgBgEgBIgWAAIAAAmIAkAAIAAAFIgkAAIAAAqIAXAAIAIgBIAGgEQAGgDAEgKIAEACIgEALQgCAFgDADQgCADgHAAg");
	this.shape.setTransform(34.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgAxIgJgDIgJgFIgKgJIgXgZIAAApIgTAAIAAhNQAAgHgCgEIgDgDIgGgBIgBAAIAAgFIASAAIAGABIAFADIACAGIAAAKIAAAcIAYggIAGgGIAFgFIAHgDQAEgCAFAAIAKAAIAAAGQgIAAgHACQgHACgFAGIgUAcIAgAiIAGAGIAHAEIAGAEIAFACIAAADIgEABIgHABg");
	this.shape_1.setTransform(25.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAxIAAhNQAAgHgCgFIgDgDIgGAAIgBAAIAAgFIAoAAIANABQAIAAAGADQAHADAEAFQAEAGABAIIgCAGQgBAEgDADIgGAFQgEACgFACQAHAAAFABQAFACADADQADADABAEIABAIQAAAJgEAGQgEAFgGADQgGADgJABIgPABgAgMAqIADABIAHAAIABAAQALAAAGgGQAHgFAAgKQAAgUgYgBIgLAAgAgJgqIgDABIAAAmIALAAIAHgBIAHgDQAFgFABgLQgBgFgCgEQgCgEgDgCIgHgDIgHgBIgDAAg");
	this.shape_2.setTransform(14.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAwIgIgFIgIgGIgFgIIgFgJQgDgJAAgLQAAgJADgKIAFgJIAFgIIAIgGIAIgFQAJgEAKAAIAKABIAKADQAJAEAGAHQAHAHADAKIADAKIABAJIgBAKIgDAKQgDAKgHAHIgHAGIgIAFIgKADIgKABQgKAAgJgEgAgTghQgIAMAAAVQAAALACAIQACAIAEAHQAHAMAMAAQANAAAIgMQAEgHABgIQACgIAAgLQAAgVgHgMQgIgLgNAAQgMAAgHALg");
	this.shape_3.setTransform(4.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgAxIgJgDIgJgFIgKgJIgXgZIAAApIgTAAIAAhNQAAgHgCgEIgDgDIgGgBIgBAAIAAgFIASAAIAGABIAFADIACAGIAAAKIAAAcIAYggIAGgGIAFgFIAHgDQAEgCAFAAIAKAAIAAAGQgIAAgHACQgHACgFAGIgUAcIAgAiIAGAGIAHAEIAGAEIAFACIAAADIgEABIgHABg");
	this.shape_4.setTransform(-4.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqAxIgHAAQgEgBgEgCQgEgCgEgEQgDgEgDgGIgEgJIgmAAIgMAcIgIAAIAthhIAEAAIAiBOQADAGAEAEQAEAEAFABIAAAEIgEAAgAAHAPIgPglIgSAlIAhAAg");
	this.shape_5.setTransform(-14.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAxIAAhbIglAAIAABbIgUAAIAAhNQAAgHgCgFIgCgDIgHAAIAAAAIAAgFIBYAAIAABhg");
	this.shape_6.setTransform(-25.3,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAyIAAgGIAHAAIAGgCIAFgDQADgCAAgDIAAgCIgcg9QgEgHgEgFQgFgEgGgBIAAgDIAPAAIAIABIAHAEQAGAFAEAHIASAoIAbg5IAKAAIgnBTIgEAHIgFAFIgFADIgIABg");
	this.shape_7.setTransform(-34.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-10.1,82.6,20.3);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA9IAAhOIgpBOIgSAAIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIASAAIAHABIAEADIACAGIABAJIAAA7IAphOIASAAIAABhgAAAgsIgGgCQgFgFgDgGIAEgDQADADAEACQADACAFAAQAHAAAEgCQAEgCACgDIAEADQgCAGgGAFIgGACIgHABIgFgBg");
	this.shape.setTransform(93.5,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAwIgIgFIgIgGIgFgIIgFgJQgDgKAAgKQAAgJADgKIAFgJIAFgIIAIgGIAIgFQAKgEAJAAIALABIAJADQAJAEAGAHQAHAHAEAKIACAKIABAJIgBALIgCAJQgEAKgHAHIgGAGIgJAFIgJADIgLABQgJAAgKgEgAgUggQgHALAAAVQAAAKACAJQACAJADAFQAIAMAMAAQANAAAIgMQADgFACgJQACgJAAgKQAAgVgHgLQgIgMgNAAQgMAAgIAMg");
	this.shape_1.setTransform(83.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhAxIgHgBIgEgDIgCgGIAAgJIAAgdIgnAAIAAAwIgTAAIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIARAAIAHABIAEADIACAGIABAJIAAAZIAnAAIAAgsIATAAIAABOQAAAHACAEIADACIAFABIACAAIAAAFg");
	this.shape_2.setTransform(72.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAxIAAgnIgJACIgKABQgQAAgKgIQgFgEgCgEQgDgHAAgIIAAgLQAAgHgCgDIgDgEIgFgBIgCAAIAAgEIASAAIAHABIAEADIACAGIABAJIAAAMQAAANAGAEQADADACACQADABAFAAIAIgBIAIgCIAAgzIAUAAIAABhg");
	this.shape_3.setTransform(61.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAxIAAhOIgpBOIgSAAIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIASAAIAHABIAEADIACAGIABAJIAAA7IAphOIASAAIAABhg");
	this.shape_4.setTransform(51.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAxIAAhaIgLAAIgHABIgFACQgFAEAAALIgEAAIAAgNIABgEIABgEIAFgDIAFgBIBFAAIAAAHIgfAAIAABag");
	this.shape_5.setTransform(42.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAxIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIBAAAIAHABQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAIACAEIABAEIAAANIgFAAIgBgIIgDgGIgGgDQgEgBgEAAIgWAAIAAAlIAkAAIAAAFIgkAAIAAApIAXAAIAIgBIAGgCQAGgEAEgKIAEABIgEANQgCAFgDACQgCADgHAAg");
	this.shape_6.setTransform(33.3,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiAtQgDgEgCgGQgCgGAAgJIAAgzIgfBNIgEAAIgphQIAABQIgIAAIAAhhIATAAIAkBHIAdhHIATAAIAABHQABAJACAMQABADACACQACACADABIAAADQgQAAgHgHg");
	this.shape_7.setTransform(22.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAxIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIAnAAIAHABIAJAAIAJAEQAEABAEAEQADAEACAFQACAEAAAHQAAAGgCAFQgCAFgDACQgDADgEACIgIACIgIABIgGABIgMAAIAAAogAgFgpIgDAAIAAAsIAIAAIAGgBQAEgBADgBQADgDACgEQABgEAAgIQAAgGgBgFQgCgEgDgDQgDgDgDgBIgHgBIgCAAg");
	this.shape_8.setTransform(11.5,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAxIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIBAAAIAHABQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAIACAEIABAEIAAANIgFAAIgBgIIgDgGIgGgDQgEgBgEAAIgWAAIAAAlIAkAAIAAAFIgkAAIAAApIAXAAIAIgBIAGgCQAGgEAEgKIAEABIgEANQgCAFgDACQgCADgHAAg");
	this.shape_9.setTransform(2.7,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAxIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIA+AAIAHABIADADIACAEIABAEIAAANIgEAAQgBgFgBgDQgBgEgDgCQgFgFgIABIgVAAIAABag");
	this.shape_10.setTransform(-5.8,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaA9IAAhOIgpBOIgSAAIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIASAAIAHABIAEADIACAGIABAJIAAA7IAphOIASAAIAABhgAAAgsIgGgCQgFgFgDgGIAEgDQADADAEACQADACAFAAQAHAAAEgCQAEgCACgDIAEADQgCAGgGAFIgGACIgHABIgFgBg");
	this.shape_11.setTransform(-19.4,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAwIgIgFIgIgGIgFgIIgEgJQgEgKAAgKQAAgJAEgKIAEgJIAFgIIAIgGIAIgFQAJgEAKAAIAKABIAKADQAJAEAGAHQAHAHADAKIADAKIABAJIgBALIgDAJQgDAKgHAHIgHAGIgIAFIgKADIgKABQgKAAgJgEgAgTggQgIALAAAVQAAAKACAJQABAJAFAFQAHAMAMAAQANAAAHgMQAFgFABgJQACgJAAgKQAAgVgIgLQgHgMgNAAQgMAAgHAMg");
	this.shape_12.setTransform(-29.7,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhAxIgHgBIgEgDIgCgGIAAgJIAAgdIgnAAIAAAwIgTAAIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIARAAIAHABIAEADIACAGIABAJIAAAZIAnAAIAAgsIATAAIAABOQAAAHACAEIADACIAFABIACAAIAAAFg");
	this.shape_13.setTransform(-40.5,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAxIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIA/AAIAHABIAEADIACAEIAAAEIAAANIgEAAQAAgFgBgDQgBgEgDgCQgFgFgJABIgWAAIAAAjIAMAAIAQABQAIABAGADQAGABAEAGQAEAFAAAKIgBAIQgBAEgCACQgEAFgGADQgGAEgIABIgQABgAgIAAIgEAAIAAApIAEABIAGABIABAAQAMAAAGgFQADgDABgEQACgFAAgFQAAgHgCgDQgBgFgDgCQgDgDgFgBQgEAAgGAAIgBAAIgDAAg");
	this.shape_14.setTransform(-50.7,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAwIgIgFIgIgGIgFgIIgFgJQgDgKAAgKQAAgJADgKIAFgJIAFgIIAIgGIAIgFQAKgEAJAAIALABIAJADQAJAEAGAHQAHAHAEAKIACAKIABAJIgBALIgCAJQgEAKgHAHIgGAGIgJAFIgJADIgLABQgJAAgKgEgAgUggQgHALAAAVQAAAKACAJQACAJADAFQAIAMAMAAQANAAAIgMQADgFACgJQACgJAAgKQAAgVgHgLQgIgMgNAAQgMAAgIAMg");
	this.shape_15.setTransform(-60.8,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AArA/IgDgOQgBgFgDgDQgCgDgDgCIgHgBIgvAAIgHABIgFAFIgFAIIgCAOIgHAAIAAgdIABgEIAEgBIAFAAIAGgRIAFgQQACgSAAgUQAAgHgCgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgFgBIgCAAIAAgFIBNAAIAABbIAGAAIADABIACAEIAAAdgAgMgbIgCAWIgDARIgGARIArAAIAAhUIgfAAg");
	this.shape_16.setTransform(-71.6,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAyIAAgGIAHAAIAGgCIAFgDQADgCAAgDIAAgCIgcg9QgEgHgEgFQgFgEgGgBIAAgDIAPAAIAIABIAHAEQAGAFAEAHIASAoIAbg5IAKAAIgnBTIgEAHIgFAFIgFADIgIABg");
	this.shape_17.setTransform(-81.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAxIAAhOQAAgHgCgDIgDgEIgGgBIgBAAIAAgEIApAAIAMABQAIAAAGADQAHADAEAFQAEAFABAKIgCAFQgBAEgDADIgGAFQgEACgGACQAIAAAFABQAFACADADQADADABAFIABAIQAAAIgEAFQgEAGgGADQgGADgJABIgPABgAgLApIACABIAHABIABAAQALAAAGgFQAHgGAAgJQAAgWgYABIgKAAgAgJgpIgCAAIAAAmIAKAAIAHgBIAHgEQAFgEAAgKQAAgGgCgEQgCgDgDgDIgHgDIgGgBIgEAAg");
	this.shape_18.setTransform(-94.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-10.1,202.7,20.3);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)"],[0,1],0.7,-7.1,0,0.7,0,9.1).s().p("AhTBGQgjgeAAgoQAAgoAjgeQAjgcAwAAQAxAAAjAcQAjAeAAAoQAAAogjAeQgjAegxgBQgwABgjgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-10,24,20);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAFIACgJIBPAAIgCAJg");
	this.shape.setTransform(70.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAmIgVAAIAEgZIADgPIACgLIABgGIAAgDIAAgBQAAgEgCgDQgCgCgFAAIgCAAIABgFIAUAAQAGAAADACQADADAAAGIAAACIgBAEIAAAFIgCAJIALAAIAMABIAKAEQAIADAAAJQAAAHgDAFQgDAFgFADQgFAEgHABQgHACgHAAgAgGAAIgGAfIAEAAIAEABIAFgBQADgBADgDIAFgGQABgEAAgGQAAgHgEgDQgEgBgFAAIgCAAg");
	this.shape_1.setTransform(56.7,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAmQgHAAgDgCQgDgDAAgGIABgCIAAgEIABgHIACgLIgYAAIgGAjIgWAAIAEgZIADgPIACgLIABgGIABgDIAAgBQAAgEgCgDQgCgCgGAAIgBAAIABgFIATAAQAHAAADACQACADAAAGIAAACIAAAEIgBAHIgCAKIAYAAIAGgiIAWAAIgFAZIgCAPIgCALIgBAGIgBADIAAABQAAAEACADQACACAGAAIABAAIAAAFg");
	this.shape_2.setTransform(47.7,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAmQgFgDgEgEQgEgEgDgGQgCgGAAgHQAAgIADgIQAEgJAFgHQAFgEAKgHQAJgEAIAAQAIAAAFACQAFABAFADQADACACAEQADAEAAAEQAAAHgEAFQgDAFgFACQgGADgGABIgOABIgPAAIgBAKQAAAJAEAEQAEAEAHAAQAGAAAGgDQAGgEAGgGIAEAEIgFAFIgHAGIgKAEQgFACgGAAQgHAAgGgCgAAAgeQgCACgDADIgFAKIgDAPIAPAAQADAAACgCQADgCACgDIADgGIABgGQAAgHgDgDQgEgCgDAAQgEAAgCABg");
	this.shape_3.setTransform(38.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA1QgGgCgEgEQgFgEgCgFQgCgGAAgHQAAgHADgMQAEgHAFgGQAHgGAIgFIAJgCIAIgBQAIgBAGAEQAGAEACAFIAAgCIAAgDQAAgHgBgGQgBgGgDgEQgDgDgFgDQgFgCgGgBIgFABIgIACIgFADIgEABIgCgHIAEgCIAHgDIAJgDIAIgBQAKABAHADQAGADAEAHQAFAGACAHQABAJAAAJQgBARgCAIQgDANgGAJQgEAEgDADIgJAGQgJAFgLABQgIgBgGgCgAgEgKQgEAFgDAFQgDAHgCAHIgCAPQABAKADAEQAEAFAFAAQAFAAAGgHIAGgKQADgHABgIIABgLIgBgHIgCgGIgEgEQgCgCgEAAQgEAAgEAEg");
	this.shape_4.setTransform(30,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAzQgFgCgDgCQgHgFAAgLIAAgDIABgFIABgLIAEgQIABgHQAAgEgCgDQgCgCgGAAIgBAAIABgFIATAAQAHAAADACQACADAAAGIgBAKIgDARIgBALIgBAFIAAADQAAAHADADQACACAGAAQADAAACgBIAEgEIAFgFIALg7IAVAAIgNBLIgOAAIgFgHIAAAAIgHAEIgFAEIgJABIgLgBgAAAghQgDgBgCgCQgGgEgBgHIAEgEQADADAEADQACACAHAAQAHAAAFgCQAFgDADgDIAEAEQgFAHgGAEQgEACgEABIgHABIgGgBg");
	this.shape_5.setTransform(16.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiAmQgGAAgDgCQgEgDAAgGIAAgCIABgDIABgHIACgLIADgQIAFgZIAVAAIgFAZIgDAPIgBALIgBAGIAAADIAAABQAAAEABADQADACAFAAIACAAIgBAFgAggAmIgVAAIAEgZIADgPIACgLIABgGIABgDIAAgBQgBgEgBgDQgCgCgGAAIgBAAIABgFIATAAQAGAAADACQADADAAAGIAAACIgBAEIAAAFIgCAJIALAAIANABIAHAEQAIADAAAJQAAAHgDAFQgCAFgGADQgEAEgGABQgGACgJAAgAgZAAIgGAfIAFAAIADABIAGgBQADgBACgDQAEgCABgEQACgEAAgGQAAgHgEgDQgEgBgEAAIgEAAg");
	this.shape_6.setTransform(5.8,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA1QgHgCgDgEQgFgEgCgFQgCgGAAgHQAAgHADgMQAEgHAFgGQAHgGAIgFIAJgCIAHgBQAJgBAGAEQAGAEACAFIABgCIAAgDQAAgHgCgGQgBgGgDgEQgDgDgFgDQgFgCgGgBIgGABIgHACIgFADIgEABIgCgHIAEgCIAHgDIAJgDIAIgBQAKABAGADQAHADAEAHQAEAGACAHQACAJAAAJQgBARgCAIQgDANgGAJQgDAEgFADIgIAGQgJAFgKABQgJgBgGgCgAgEgKQgFAFgDAFQgDAHgBAHIgCAPQAAAKAEAEQAEAFAFAAQAFAAAGgHIAGgKQADgHABgIIABgLIgBgHIgCgGIgEgEQgCgCgEAAQgEAAgEAEg");
	this.shape_7.setTransform(-4.9,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgAkQgFgDgFgJIgLgUIgFAiIgUAAIAGgiIgRAUQgIAJgHADQgGADgGAAIgHAAIgEgBIAAgFQADAAAFgDQAEgDAGgGIAZgbIgLgTQgDgFgDgCQgEgCgFABIABgFIADAAQAIAAAFADQAFADADAHIAOAYIAHglIATAAIgGAlIAXgYIAFgGIAGgEIAHgCIAIgBIACAAIAAAFQgFgBgFACQgEACgEAFIgSATIAQAbQADAGADADQADADADAAIAAAFIgFABIgHAAQgHAAgFgDg");
	this.shape_8.setTransform(-15.4,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAmQgFgDgEgEQgDgEgCgFQgCgFAAgHQABgIADgHQACgJAGgIQADgFAKgHQAIgFAIAAQAFAAADACQAEABACACIADAEIABAAIAHgHIAPAAIgLA7IgDAQIgOAAIgFgHIAAAAIgGAEIgEAEIgJABQgHAAgGgCgAgCgdQgEADgCAEIgFAJIgDALIgBAIIgBAJQAAAHADAFQADAFAFAAQAEAAADgBIADgEIAFgFIAJgrIgDgFIgFgEQgCgBgEAAQgDAAgCACg");
	this.shape_9.setTransform(-25.6,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIAlQgGgDgCgIIgMgVIgGAhIgVAAIAEgaIADgPIACgLIABgGIAAgDIAAgBQAAgEgCgDQgCgCgFAAIgCAAIABgFIAUAAQAGAAADADQADACAAAGIAAADIgBAEIgBAHIgCAMIAWgYIAGgGIAGgDIAHgDIAHgBIAEAAIgBAFQgFAAgEABQgFACgEAFIgUATIARAbQAHALAGABIAAAFIgFABIgHAAQgHAAgFgCg");
	this.shape_10.setTransform(-33.7,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAmQgFgDgEgEQgDgEgCgFQgBgFgBgHQAAgIAEgHQACgJAFgIQAEgFAKgHQAIgFAIAAQAFAAAEACQADABACACIAEAEIAAAAIAIgHIANAAIgKA7IgDAQIgOAAIgEgHIgBAAIgGAEIgEAEIgJABQgIAAgFgCgAgDgdQgDADgCAEIgFAJIgCALIgCAIIgBAJQAAAHADAFQADAFAGAAQADAAADgBIADgEIAGgFIAIgrIgEgFIgDgEQgDgBgEAAQgDAAgDACg");
	this.shape_11.setTransform(-47,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAmQgHAAgDgCQgDgDAAgGIABgCIAAgEIABgHIACgLIgYAAIgGAjIgWAAIAEgZIADgPIACgLIABgGIABgDIAAgBQAAgEgCgDQgCgCgGAAIgBAAIABgFIATAAQAHAAADACQACADAAAGIAAACIAAAEIgBAHIgCAKIAYAAIAGgiIAWAAIgFAZIgCAPIgCALIgBAGIgBADIAAABQAAAEACADQACACAGAAIABAAIAAAFg");
	this.shape_12.setTransform(-56.4,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoAFIACgJIBPAAIgCAJg");
	this.shape_13.setTransform(-70.3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-10.4,154,21);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAvIAAhKQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIA9AAQAEAAACABIAEADIACAEIAAADIAAANIgEAAQAAgEgBgEQgBgDgDgCQgCgCgDgBIgIgBIgVAAIAAAkIAjAAIAAAEIgjAAIAAAoIAXAAIAHgBQADgBADgCQAGgEADgJIAEABIgEAMQgCAEgCADQgDADgGAAg");
	this.shape.setTransform(99.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAvIAAhKIgnBKIgRAAIAAhKQAAgHgCgEIgDgCIgGgBIgBAAIAAgFIARAAIAHABQACABABADIADAFIABAJIAAA4IAnhLIARAAIAABdg");
	this.shape_1.setTransform(89.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgAvIgHgBIgDgDIgCgFIgBgJIAAgcIglAAIAAAuIgTAAIAAhKQABgHgCgEIgDgCIgFgBIgCAAIAAgFIASAAIAFABQADABACADIACAFIAAAJIAAAYIAlAAIAAgrIATAAIAABLQAAAGACAEIACACIAGABIABAAIAAAFg");
	this.shape_2.setTransform(80,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoAvIgGAAIgIgDQgFgCgCgEQgEgDgDgGIgDgIIgkAAIgMAaIgIAAIArhdIAFAAIAfBLQADAGAEAEQAEADAEABIAAAEIgCAAgAAHAOIgOgjIgRAjIAfAAg");
	this.shape_3.setTransform(70.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAvIAAhWIgLAAIgGABQgEAAgCACQgEAFAAAJIgEAAIAAgNIAAgDIACgEIAEgDQACgBAEAAIBBAAIAAAHIgeAAIAABWg");
	this.shape_4.setTransform(62.5,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaAvIAAhKIgoBKIgRAAIAAhKQgBgHgBgEIgDgCIgFgBIgCAAIAAgFIASAAIAFABQADABACADIACAFIAAAJIAAA4IAohLIARAAIAABdg");
	this.shape_5.setTransform(52.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYAvIAAhWIgjAAIAABWIgTAAIAAhKQAAgHgCgEIgDgCIgFgBIgCAAIAAgFIBVAAIAABdg");
	this.shape_6.setTransform(42.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAvIAAhKQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIA9AAQAEAAACABIAEADIACAEIAAADIAAANIgEAAQAAgEgBgEQgBgDgDgCQgCgCgDgBIgIgBIgVAAIAAAkIAjAAIAAAEIgjAAIAAAoIAXAAIAHgBQADgBADgCQAGgEADgJIAEABIgEAMQgCAEgCADQgDADgGAAg");
	this.shape_7.setTransform(30.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAuIgIgFIgHgGQgDgDgCgEIgFgJQgDgJAAgKQAAgJADgJIAFgJQACgEADgDIAHgGIAIgFQAJgEAJAAIAKABIAJADQAJAEAGAHQAGAGADAKIADAJIABAJIgBAKIgDAJQgDAJgGAHIgHAGIgIAFIgJADIgKABQgJAAgJgEgAgTgfQgHALAAAUQAAAKACAIQACAIADAGQAHALAMAAQAMAAAIgLQADgGACgIQACgIAAgKQAAgUgHgLQgIgLgMAAQgMAAgHALg");
	this.shape_8.setTransform(20.9,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgAvIgGgBIgFgDIgBgFIgBgJIAAgcIgkAAIAAAuIgUAAIAAhKQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIARAAIAHABQACABABADIADAFIABAJIAAAYIAkAAIAAgrIATAAIAABLQAAAGABAEIADACIAGABIABAAIAAAFg");
	this.shape_9.setTransform(10.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAvIAAhKQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIARAAIAGABQADABABADIADAFIAAAJIAAAUIALAAQAIAAAHACQAIABAGACQAGACAEAFQADAFAAAJQAAAJgDAFQgEAFgGADQgGADgIACIgPABgAgFgBIgDAAIgDABIAAAoIADABIAHAAIABAAQALABAGgHIAEgGQABgFAAgFQAAgFgBgFIgEgGQgDgDgFAAQgFgBgEgBIgBAAg");
	this.shape_10.setTransform(0.9,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAwIgDgBIAAgFQAEgBAEgDQAEgDADgIQADgIACgOQABgHABgaQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIBKAAIAABdIgTAAIAAhWIgcAAIAAAMQAAAWgCAOQgDAPgDAJIgFAIIgFAEQgGAEgGAAg");
	this.shape_11.setTransform(-9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AApAvIgIAAIgIgDQgDgCgEgEQgDgDgCgGIgEgIIglAAIgLAaIgIAAIArhdIAEAAIAgBLQADAGAEAEQADADAGABIAAAEIgEAAgAAGAOIgOgjIgRAjIAfAAg");
	this.shape_12.setTransform(-17.7,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgAvIgGgBIgFgDIgBgFIgBgJIAAgcIgkAAIAAAuIgUAAIAAhKQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIARAAIAHABQACABABADIADAFIABAJIAAAYIAkAAIAAgrIATAAIAABLQAAAGABAEIADACIAFABIACAAIAAAFg");
	this.shape_13.setTransform(-27.7,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAuIgIgFIgHgGQgDgDgCgEIgFgJQgDgJAAgKQAAgJADgJIAFgJQACgEADgDIAHgGIAIgFQAJgEAJAAIAKABIAJADQAJAEAGAHQAGAGADAKIADAJIABAJIgBAKIgDAJQgDAJgGAHIgHAGIgIAFIgJADIgKABQgJAAgJgEgAgTgfQgHALAAAUQAAAKACAIQACAIADAGQAHALAMAAQAMAAAIgLQADgGACgIQACgIAAgKQAAgUgHgLQgIgLgMAAQgMAAgHALg");
	this.shape_14.setTransform(-38.1,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZAvIAAhKIgnBKIgRAAIAAhKQAAgHgCgEIgDgCIgGgBIgBAAIAAgFIARAAIAHABQACABABADIADAFIABAJIAAA4IAnhLIARAAIAABdg");
	this.shape_15.setTransform(-48.8,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAoA8IgCgNQgBgFgDgDQgCgDgDgBIgHgBIg5AAIAAhKQAAgHgCgEIgDgDIgFgBIgCAAIAAgEIASAAIAGABQACABACACIACAGIABAJIAABDIAjAAIAAhWIATAAIAABWIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAcg");
	this.shape_16.setTransform(-58.6,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeAvIgIgDIgIgFIgLgJIgUgYIAAAoIgTAAIAAhKQgBgGgBgEIgDgDIgFgBIgCAAIAAgFIARAAIAGABQADABACADIACAFIABAJIAAAbIAXgeIAEgGIAGgFQADgCAEgBQADgCAEAAIALAAIAAAGQgIAAgHACQgGACgFAGIgUAaIAfAhIAGAFIAGAFIAGADIAFACIAAADIgFABIgGABg");
	this.shape_17.setTransform(-68.4,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgAvIgHgBIgEgDIgBgFIgBgJIAAgcIglAAIAAAuIgTAAIAAhKQAAgHgBgEIgDgCIgGgBIgBAAIAAgFIARAAIAHABQACABABADIADAFIAAAJIAAAYIAlAAIAAgrIATAAIAABLQAAAGABAEIADACIAGABIABAAIAAAFg");
	this.shape_18.setTransform(-78.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAwIAAgFIAHgBIAGgBIAFgDIACgFIABgDIgcg6QgDgHgFgEQgEgEgGgBIAAgDIAPAAQAEAAADACIAHADQAGAEADAHIASAnIAZg3IAKAAIglBQIgEAGIgFAFIgFADIgIABg");
	this.shape_19.setTransform(-88.5,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIA0IAAgKIgKgBIgJgCQgJgDgGgFIgFgGIgEgHQgDgHAAgJQAAgIADgHIAEgHIAFgGQAGgEAJgEQAIgDALAAIAAgDIgBgEIgDgCIgGgBIgBAAIAAgFIARAAQAGAAACAEQADAEAAAHQALAAAJADIAIAEIAGAEQAGAGADAHIACAIIABAHQgBAMgCAEQgDAIgGAFIgGAEIgIAEIgJACIgLABIAAAKgAAJAjQAHAAAEgCQAFgDADgFQAEgEABgGQACgGAAgHQAAgFgCgHQgBgFgEgFQgDgFgFgDQgEgCgHAAgAgTgcQgFADgDAFQgDAFgCAFQgBAHAAAFQAAAHABAGQACAGADAEQADAFAFADQAFACAGAAIAAhBQgGAAgFACg");
	this.shape_20.setTransform(-98.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-9.3,211.1,18.7);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4A7IgIgBQgDgBgCgDQgCgDgBgEIAAgMIAAhdIAXAAIAABdQAAAIACAGQABACADABIAHABIABAAIAAAGgAg+A7IAAheQAAgHgCgFQgBgDgDgBQgCgCgEAAIgCAAIAAgFIAWAAQAEAAADACQADAAACADQACADABAEIABALIAAAaIAOAAIATABQAIACAHAEQAIACAFAGQAEAIAAAKQAAAKgEAHQgFAHgIAEQgHAEgIACIgTABgAgjgBIgDABIAAAyIADABIAIABQARAAAHgIQADgDAAgFQACgGAAgGQAAgHgCgFQAAgFgDgEQgEgDgGAAQgFgCgJAAIgEAAg");
	this.shape.setTransform(18.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBLQgBgJgCgHQgBgGgDgEQgDgEgEgBQgEgCgFAAIg3AAQgFAAgEACQgEABgDAEQgCAEgCAGIgDAQIgJAAIAAgjQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAHAAQAEgKADgLQADgJABgKQADgWAAgYQAAgIgCgFQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQgDgBgEAAIgBAAIAAgGIBcAAIAABuIAHAAQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQAAABABAAQAAABAAAAQAAABAAAAIAAAjgAgOghIgDAbIgEAVIgHAUIA0AAIAAhlIgmAAg");
	this.shape_1.setTransform(4.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA6IgKgGIgIgIIgHgJIgFgLQgFgLAAgNQAAgMAFgLIAFgLIAHgJIAIgIIAKgFQALgFAMgBQAHAAAGACQAGABAFADQALAEAIAJQAIAIAEAMIADAMIABALIgBANIgDALQgEAMgIAIIgJAIIgKAGIgLADIgNABQgMABgLgFgAgXgnQgJAOAAAZQAAANACAKQACAKAFAHQAIAOAPAAQAQAAAJgOQAFgHACgKQACgKAAgNQAAgZgJgOQgJgPgQAAQgPAAgIAPg");
	this.shape_2.setTransform(-8.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA7IAAheQAAgHgCgFQgBgDgDgBQgCgCgEAAIgCAAIAAgFIAxAAIAPABQAKABAIADQAHAEAFAGQAGAGAAAKIgCAIQgBAEgEAEQgDAEgEACQgFADgGABQAIABAGABQAGACAEAEQADAFACAEIABAKQAAALgFAGQgEAGgIAEQgHADgKACIgTABgAgOAyIADABIAJABIABAAQANAAAIgHQAIgGAAgMQAAgZgdAAIgNAAgAgLgyIgDABIAAAtIANAAQAEAAAEgBQAFgCADgCQAHgGAAgMQAAgHgCgEQgCgFgEgDIgJgDIgIgBIgFAAg");
	this.shape_3.setTransform(-21.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-11.7,57.4,23.5);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoA7IgIgBQgDgBgCgDQgCgDAAgEIgBgMIAAghIgvAAIAAA5IgXAAIAAheQAAgHgCgFQgCgDgCgBQgDgCgEAAIgCAAIAAgFIAWAAQAFAAADACQADAAACADQACADABAEIAAALIAAAfIAvAAIAAg2IAXAAIAABdQAAAIADAGQABACACABIAHABIACAAIAAAGg");
	this.shape.setTransform(29,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzA7IgJAAIgKgEQgFgCgEgFQgEgEgDgIIgFgKIguAAIgPAhIgJAAIA1h1IAGAAIApBeQADAIAFAFQAEAEAHABIAAAFIgFAAgAAIASIgSgtIgVAtIAnAAg");
	this.shape_1.setTransform(17.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmA7IgKgDQgGgCgFgFQgGgEgGgHIgcgeIAAAyIgWAAIgBheQAAgHgCgFQgBgDgDgBQgDgCgEAAIgCAAIAAgFIAXAAQAEAAADACQADAAACADQACADABAEIAAALIAAAjIAegnIAGgHIAHgGQAEgDAFgBQAEgCAFAAIAOAAIAAAGQgLAAgIADQgIACgHAIIgZAiIAoAoIAIAHIAHAHIAHADIAHACIAAAFIgGABIgIABg");
	this.shape_2.setTransform(5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzA7IgJAAIgKgEQgEgCgFgFQgEgEgDgIIgFgKIgtAAIgQAhIgJAAIA1h1IAHAAIAoBeQADAIAFAFQAEAEAGABIAAAFIgEAAgAAIASIgSgtIgVAtIAnAAg");
	this.shape_3.setTransform(-6.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA7IAAhsIgMAAIgJABQgEAAgCADQgGAFAAAMIgFAAIAAgQIAAgEQABgDACgDQABgCADAAQADgCAFAAIBSAAIAAAJIglAAIAABsg");
	this.shape_4.setTransform(-18.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA6QgLgFgIgIIgGgJIgFgLQgEgKAAgNQAAgMAEgMQAFgMAIgJQAIgIALgFQAFgDAGgBQAGgCAEAAQARAAALAFQAKAFAFAFQAEAFAAAHIABAPIgGAAQgDgQgJgJQgJgIgPgBQgJAAgFAEQgHACgFAHQgGAGgDALQgDAQAAAKQAAAJACALQACAJAFAIQAFAGAHAFQAEADAEAAIAJABIAMgBIALgFQAKgGAHgNIAGAEQgEAIgFAGQgFAFgHAEQgGADgHACQgIABgKAAQgMABgLgFg");
	this.shape_5.setTransform(-29.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-11.7,75.4,23.5);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzA7IgJAAIgKgEQgFgCgEgFQgEgEgEgIIgDgKIgvAAIgOAhIgJAAIA1h1IAGAAIAoBeQADAIAFAFQAFAEAFABIAAAFIgDAAgAAIASIgSgtIgVAtIAnAAg");
	this.shape.setTransform(6.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoA7IgIgBQgDgBgCgDQgCgDAAgEIgBgMIAAghIgvAAIAAA5IgXAAIAAheQAAgHgCgFQgCgDgCgBQgDgCgEAAIgCAAIAAgFIAWAAQAFAAADACQADAAACADQACADABAEIAAALIAAAfIAvAAIAAg2IAXAAIAABdQAAAIADAGQABACACABIAHABIACAAIAAAGg");
	this.shape_1.setTransform(-5.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-11.7,28.8,23.5);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBLIAAh3IhBB3IgbAAIAAh3QAAgLgDgGQgCgDgDgCQgDgBgGgBIgCAAIAAgHIAcAAQAGAAAEACQAEABACAEQADAEABAFIABAPIAABaIBAh5IAcAAIAACWg");
	this.shape.setTransform(34.7,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxBLQgGgBgHgCQgHgEgIgFQgHgFgIgJIgjgnIAABAIgeAAIAAh3QAAgLgDgGQgCgDgDgCQgDgBgGgBIgCAAIAAgHIAcAAQAGAAAEACQAEABACAEQADAEABAFIABAPIAAAsIAmgyIAHgKIAKgHQAFgEAGgBQAFgDAHAAIAQAAIAAAJQgNAAgKADQgLADgIAKIggArIAzA1IAKAJIAJAHIAKAFIAIADIAAAFIgHACIgKAAg");
	this.shape_1.setTransform(19.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABWBLQgGAAgHgEQgHgDgHgGQgHgGgHgJIgfgmIAABBIgcAAIAAhBIgeAmQgIAJgGAGQgIAGgGADQgHAEgHAAIgOABIgJAAIgFgCIAAgFQAGgBAJgHQAKgGAIgKIAvg1IgggrIgIgIIgJgFIgKgDIgNAAIAAgJIAOAAQAHAAAGADQAFABAGAEIAJAHIAIAKIAlAyIAAhLIAcAAIAABLIAmgyIAHgKIAKgHQAFgEAGgBQAFgDAIAAIANAAIAAAJIgNAAIgKADQgFACgDADIgIAIIghArIAvA1QAIAKAKAGQAKAHAGABIAAAFIgGACIgIAAg");
	this.shape_2.setTransform(0.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBKQgGgDgGgFIgLgJIgJgMQgEgGgDgIQgFgPAAgQQAAgPAFgPQADgHAEgHQAEgGAFgGIALgKIAMgGQAOgHAQAAQAIAAAIABQAIACAHAEQAOAGAKAKQAKALAFAPQADAHABAIQABAIAAAHQAAAIgBAIQgBAIgDAHQgFAPgKALIgLAJQgGAFgHADQgHADgIACQgIABgIAAQgQAAgOgGgAgfgzQgLATAAAgQAAAQADANQADANAFAKQAMASATAAQAVAAALgSQAGgKADgNQADgNAAgQQAAgggMgTQgLgRgVgBQgTABgMARg");
	this.shape_3.setTransform(-19.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BNIgGgCIAAgHQAIgCAGgFQAGgFAFgMQAGgNACgWQACgMACgrQAAgLgEgGQgBgDgDgCQgEgBgEAAIgDAAIAAgHIB5AAIAACWIgeAAIAAiMIgwAAIAAAUQAAAkgDAXQgEAYgGAOQgDAHgEAFQgEAFgEADQgJAGgKAAg");
	this.shape_4.setTransform(-36.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-14.4,91.6,28.9);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBLIAAh3QAAgLgDgGQgBgDgDgCQgEgBgFgBIgCAAIAAgHIBjAAQAGAAAEADQAEABACACQACADAAAEIABAGIAAAUIgHAAQAAgIgCgFQgBgFgEgEQgEgCgFgCQgFgCgHAAIgjAAIAAA6IA6AAIAAAIIg6AAIAAA/IAlAAQAGAAAGgBQAFgBAFgEQAIgFAGgPIAGACIgGASQgCAIgEAEQgFAFgJgBg");
	this.shape.setTransform(56.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHBLQgGABgEgCQgEgCgCgCQgDgEAAgGIgBgOIAAh5IAdAAIAAB5QAAAKADAGQACADADACQADABAGAAIACAAIAAAHgAhPBLIAAh3QAAgLgDgGQgCgDgDgCQgDgBgGgBIgCAAIAAgHIAcAAQAGAAAEACQAEABACAEQADAEABAFIABAPIAAAgIASAAQAMAAANACQAKABAJAGQAKADAGAJQAGAIAAANQAAAOgGAJQgGAIgKAFQgJAGgKABQgNACgMAAgAgogDIgFABIgEACIAABAIAEABIAKABQAVAAAJgJQAFgFAAgGQADgHAAgJQAAgIgDgGQAAgHgFgFQgEgEgIAAQgHgDgLAAg");
	this.shape_1.setTransform(39.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBLIAAh3QAAgLgDgGQgBgDgDgCQgDgBgGgBIgCAAIAAgHIA+AAIAVACQAMABAKAEQAKAFAGAHQAHAIAAAOQAAAFgCAFQgCAFgEAEQgEAFgGAEQgGADgIACQAMABAGABQAIAEAFAFQAEAFACAFQACAHAAAHQAAANgGAIQgGAIgKAEQgJAFgMACIgZABgAgSBAIAEABQAEACAIgBIABAAQAQAAALgIQAKgIgBgPQABggglAAIgRAAgAgPhAIgDABIAAA5IARAAQAFAAAFgBIAKgFQAKgHgBgQQAAgIgCgHQgEgFgFgEQgEgDgHgBQgGgCgFAAIgFAAg");
	this.shape_2.setTransform(21.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBKQgGgDgGgFIgLgJIgJgMQgEgGgDgIQgFgPAAgQQAAgPAFgPQADgHAEgHQAEgGAFgGIALgKIAMgGQAOgHAQAAQAIAAAIABQAIACAHAEQAOAGAKAKQAKALAFAPQADAHABAIQABAIAAAHQAAAIgBAIQgBAIgDAHQgFAPgKALIgLAJQgGAFgHADQgHADgIACQgIABgIAAQgQAAgOgGgAgfgzQgLATAAAgQAAAQADANQADANAFAKQAMASATAAQAVAAALgSQAGgKADgNQADgNAAgQQAAgggMgTQgLgRgVgBQgTABgMARg");
	this.shape_3.setTransform(6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BNIgGgCIAAgHQAHgCAHgFQAGgFAGgMQAEgNADgWQADgMABgrQAAgLgEgGQgBgDgDgCQgEgBgFAAIgCAAIAAgHIB5AAIAACWIgeAAIAAiMIgvAAIAAAUQAAAkgEAXQgEAYgGAOQgDAHgEAFQgDAFgFADQgIAGgLAAg");
	this.shape_4.setTransform(-11.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBKQgGgDgGgFIgLgJIgJgMQgEgGgDgIQgFgPAAgQQAAgPAFgPQADgHAEgHQAEgGAFgGIALgKIAMgGQAOgHAQAAQAIAAAIABQAIACAHAEQAOAGAKAKQAKALAFAPQADAHABAIQABAIAAAHQAAAIgBAIQgBAIgDAHQgFAPgKALIgLAJQgGAFgHADQgHADgIACQgIABgIAAQgQAAgOgGgAgfgzQgLATAAAgQAAAQADANQADANAFAKQAMASATAAQAVAAALgSQAGgKADgNQADgNAAgQQAAgggMgTQgLgRgVgBQgTABgMARg");
	this.shape_5.setTransform(-26.5,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBLIAAiLIgQAAQgGAAgFACQgFABgEADQgHAGAAAQIgHAAIAAgUIACgGIADgHQABgCAFgBQAEgDAFAAIBrAAIAAALIgxAAIAACLg");
	this.shape_6.setTransform(-41.3,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaBKQgOgGgJgLQgFgEgEgHQgEgGgDgIQgEgOAAgQQAAgPAFgQQAGgPAKgLQAKgLAOgGIAOgGIAOgBQAWAAANAGQANAFAHAIQAEAGABAJIABAUIgHAAQgFgWgLgLQgMgLgSAAQgMABgGADQgKAEgGAIQgIAIgDAOQgFAVAAAMQAAANAEANQACAMAHAJQAFAJAKAGQAFADAFABQAEACAIAAQAHAAAIgDQAHgCAGgDQAOgJAJgQIAHAGQgFAKgHAGQgGAIgIAEQgIAFgJACQgKACgNAAQgPAAgPgGg");
	this.shape_7.setTransform(-55.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-14.4,131.5,28.9);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA6IAAgGIAHAAIAIgCIAGgEQADgCAAgEIABgDIgihHQgEgIgFgGQgGgFgHAAIAAgEIASAAQAFAAAEACQAEABAEACQAHAGAEAJIAXAuIAehCIAMAAIgtBhIgEAHIgHAHQgBACgFABIgKABg");
	this.shape.setTransform(49.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnA5IgIgBQgDgBgBgCQgCgDgBgEIgBgLIAAgiIgtAAIAAA4IgXAAIAAhaQAAgIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgBIgCAAIAAgFIAVAAIAIABQADABACADQABACABAFIABALIAAAcIAtAAIAAgzIAXAAIAABbQAAAHACAFQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQADABAEAAIACAAIAAAFg");
	this.shape_1.setTransform(38.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyA6IgJgBIgKgDQgEgDgFgEQgEgFgDgHIgEgKIgtAAIgOAgIgJAAIAzhxIAGAAIAoBbQACAHAGAFQAEAFAGAAIAAAFIgEABgAAHARIgRgsIgUAsIAlAAg");
	this.shape_2.setTransform(26.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA5IAAhpIgMAAIgIABQgEABgDACQgFAFAAAMIgFAAIAAgPIAAgFIACgFIAGgDQACgBAFAAIBQAAIAAAIIgkAAIAABpg");
	this.shape_3.setTransform(17.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUA4QgKgEgIgIIgGgJQgDgFgCgFQgDgLAAgNQgBgLAFgLQAEgMAIgIQAIgJAKgFQAGgCAGgBQAFgCAEAAQAQAAAKAFQALAEAFAFQADAFAAAHIABAPIgFAAQgDgQgJgIQgJgJgOAAQgIAAgGADQgGACgGAHQgFAGgDALQgDAQAAAIQAAAKACAKQACAJAFAHQAEAHAIAFIAHADIAJABQAFAAAGgCQAFgBAGgEQAKgGAGgMIAHAFQgFAHgEAFQgGAGgFADQgHADgHACQgHACgKAAQgMAAgLgFg");
	this.shape_4.setTransform(6.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoA5QgFAAgEgBIgIgFIgGgGIgGgHIgPgbIglAuIgLAAIArg2IgZgkIgGgHIgFgGIgHgFIgGgCIAAgDIATAAQAGAAADACQAFABADADIAHAGIAFAHIANAXIAigqIALAAIgnAyIAbApIAFAGIAFAGIAHAFIAGACIAAADg");
	this.shape_5.setTransform(-5,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxA6IgJgBIgJgDQgFgDgEgEQgEgFgDgHIgEgKIgtAAIgPAgIgIAAIA0hxIAGAAIAmBbQAEAHAEAFQAFAFAGAAIAAAFIgEABgAAIARIgSgsIgUAsIAmAAg");
	this.shape_6.setTransform(-16,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA3QgLgGgIgMIAFgEIAHAHIAIAHQAEADAFABQAGACAGAAQAEAAAFgCQAFgBADgDQAEgEACgEQACgFAAgGQAAgMgIgHQgIgHgLAAIgPAAIAAgGIAPAAIAHgBQAFgCADgDQAEgDACgEQADgFAAgGQAAgHgCgEIgGgHQgDgDgEgCIgGgBQgMAAgIAIQgIAIgDANIgGAAIABgOQAAgGAEgEQACgDAEgDIAIgDIAKgDIAJgBIAOABQAIACAHADQAGADAEAGIADAHIABAJQAAAEgBAEIgFAIQgEAEgFADQgFADgGACQAIABAGABQAGADAEAEQADAEACAGIACAKIgBAIQgBAEgDADQgEAHgHAEQgHADgIACQgIACgHAAQgPAAgLgGg");
	this.shape_7.setTransform(-27.2,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyA6IgJgBIgKgDQgEgDgFgEQgEgFgDgHIgEgKIgtAAIgOAgIgJAAIA0hxIAFAAIAoBbQACAHAGAFQAEAFAGAAIAAAFIgEABgAAHARIgRgsIgUAsIAlAAg");
	this.shape_8.setTransform(-37.5,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlA5IgKgCIgLgHQgFgEgGgHIgbgdIAAAwIgWAAIgBhaQAAgIgCgFQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBIgHgBIgCAAIAAgFIAVAAIAIABQADABACADQACADABAEIAAALIAAAhIAdgmIAGgGIAHgHIAIgDQAEgCAGAAIAMAAIAAAGQgKAAgIACQgIADgGAHIgYAgIAmApIAHAGIAIAGIAHAFIAGACIAAADIgFABIgIABg");
	this.shape_9.setTransform(-49.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-10.7,113.6,21.4);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA6IAAgGIAHAAIAIgCIAGgEQADgCAAgEIABgDIgihHQgEgIgFgGQgGgFgHAAIAAgEIASAAQAFAAAEACQAEABAEACQAHAGAEAJIAXAuIAehCIAMAAIgtBhIgEAHIgHAHQgBACgFABIgKABg");
	this.shape.setTransform(86.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoA0QgEgEgDgHQgCgIAAgJIAAg8IgkBZIgGAAIgvhdIAABdIgIAAIAAhxIAWAAIApBUIAihUIAYAAIAABUQgBAKADANQACAEACADQACACAEABIAAAEQgTAAgIgJg");
	this.shape_1.setTransform(74.4,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA5IAAhaQAAgIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgBIgCAAIAAgFIBLAAQAFAAACABIAGADIACAFIAAAFIAAAPIgFAAQAAgGgCgEQgBgEgDgCQgDgDgEgBIgJgBIgaAAIAAArIArAAIAAAGIgrAAIAAAwIAcAAIAIgBIAIgDQAHgEAEgMIAFACIgFAOQgCAGgDADQgDADgHAAg");
	this.shape_2.setTransform(61.1,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA4QgLgEgHgIIgHgJQgDgFgBgFQgFgLAAgNQABgLAEgLQAEgMAIgIQAIgJAKgFQAGgCAFgBQAGgCAFAAQAQAAAJAFQALAEAEAFQAEAFABAHIAAAPIgFAAQgEgQgIgIQgJgJgPAAQgHAAgGADQgGACgGAHQgFAGgDALQgDAQAAAIQAAAKACAKQACAJAFAHQAFAHAGAFIAIADIAIABQAGAAAGgCQAGgBAFgEQAKgGAGgMIAGAFQgEAHgFAFQgFAGgFADQgHADgHACQgIACgIAAQgMAAgLgFg");
	this.shape_3.setTransform(50.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA5IAAhaQAAgIgBgFQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgGgBIgCAAIAAgFIAvAAIAPABQAKABAHADQAIADAEAGQAFAGABAKQAAAEgCAEQgCAEgDADQgCAEgFACIgLAFQAJAAAGABQAFADAEADQADAEABAFIABAJQABAKgFAHQgEAGgIADQgHAEgJABIgTABgAgNAxIADAAIAIABIABAAQANAAAIgGQAHgGABgMQgBgYgcAAIgMAAgAgLgxIgCABIAAAsIAMAAQAEAAAEgBQAEgBAEgDQAHgFAAgNQAAgGgCgEQgCgFgFgCQgDgDgFgBIgIgBIgEAAg");
	this.shape_4.setTransform(38.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA4IgKgGIgIgHIgHgJIgFgKQgEgMAAgMQAAgLAEgMIAFgKIAHgJIAIgHQAEgEAGgCQAKgFAMAAIAMABIALAEQALAFAHAIQAIAIAEALIADAMQABAGAAAFIgBAMIgDAMQgEALgIAIQgDAEgFADIgKAGIgLAEIgMABQgMAAgKgFgAgXgmQgJAOAAAYQAAAMACAKQADAKAEAHQAJAOAOAAQAPAAAJgOQAFgHACgKQACgKAAgMQAAgYgJgOQgJgOgPAAQgOAAgJAOg");
	this.shape_5.setTransform(22,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeA5IAAhpIgsAAIAABpIgXAAIAAhaQAAgIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgBIgCAAIAAgFIBnAAIAABxg");
	this.shape_6.setTransform(9.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxA6IgJgBIgJgDQgFgDgEgEQgEgFgDgHIgEgKIgtAAIgPAgIgIAAIA0hxIAGAAIAmBbQAEAHAEAFQAFAFAGAAIAAAFIgEABgAAIARIgSgsIgUAsIAmAAg");
	this.shape_7.setTransform(-6.1,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlA5IgKgCIgLgHQgFgEgGgHIgbgdIAAAwIgWAAIgBhaQAAgIgCgFQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBIgHgBIgCAAIAAgFIAVAAIAIABQADABACADQACADABAEIAAALIAAAhIAdgmIAGgGIAHgHIAIgDQAEgCAGAAIAMAAIAAAGQgKAAgIACQgIADgGAHIgYAgIAmApIAHAGIAIAGIAHAFIAGACIAAADIgFABIgIABg");
	this.shape_8.setTransform(-18,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA5IAAhaQAAgIgCgFQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgGgBIgDAAIAAgFIAwAAIAPABQAJABAIADQAHADAGAGQAEAGAAAKQAAAEgBAEQgBAEgDADQgEAEgEACIgLAFQAJAAAFABQAGADADADQAEAEACAFIABAJQgBAKgEAHQgEAGgIADQgHAEgKABIgSABgAgOAxIAEAAIAJABIABAAQAMAAAHgGQAJgGgBgMQAAgYgbAAIgOAAgAgKgxIgEABIAAAsIAOAAQADAAAEgBQAFgBADgDQAHgFAAgNQAAgGgDgEQgCgFgDgCQgEgDgFgBIgIgBIgEAAg");
	this.shape_9.setTransform(-30,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxA6IgJgBIgJgDQgFgDgEgEQgEgFgDgHIgEgKIgtAAIgPAgIgIAAIA0hxIAGAAIAmBbQAEAHAEAFQAFAFAGAAIAAAFIgEABgAAIARIgSgsIgUAsIAmAAg");
	this.shape_10.setTransform(-40.8,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA5IAAhpIgNAAIgIABQgEABgCACQgGAFAAAMIgFAAIAAgPIABgFIACgFIAEgDQADgBAEAAIBRAAIAAAIIglAAIAABpg");
	this.shape_11.setTransform(-50.5,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTA4QgLgEgHgIIgHgJQgDgFgBgFQgFgLAAgNQABgLAEgLQAEgMAIgIQAHgJALgFQAGgCAFgBQAGgCAFAAQAQAAAKAFQAKAEAEAFQAEAFABAHIAAAPIgFAAQgEgQgIgIQgJgJgPAAQgHAAgFADQgIACgFAHQgFAGgDALQgDAQAAAIQAAAKACAKQACAJAFAHQAFAHAGAFIAIADIAIABQAHAAAFgCQAFgBAGgEQAKgGAHgMIAFAFQgDAHgGAFQgFAGgGADQgFADgIACQgIACgIAAQgMAAgLgFg");
	this.shape_12.setTransform(-61.4,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWA4IgKgGIgIgHIgHgJIgFgKQgEgMAAgMQAAgLAEgMIAFgKIAHgJIAIgHQAEgEAGgCQAKgFAMAAIAMABIALAEQALAFAHAIQAIAIAEALIADAMQABAGAAAFIgBAMIgDAMQgEALgIAIQgDAEgFADIgKAGIgLAEIgMABQgMAAgKgFgAgXgmQgJAOAAAYQAAAMACAKQADAKAEAHQAJAOAOAAQAPAAAJgOQAFgHACgKQACgKAAgMQAAgYgJgOQgJgOgPAAQgOAAgJAOg");
	this.shape_13.setTransform(-73.9,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAyBJQgBgJgCgGQgCgGgCgEQgDgEgEgBQgDgCgFAAIg3AAQgFAAgDACQgEABgCAEQgDAEgCAGQgCAGgBAJIgIAAIAAghQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGAAQAEgJADgKIAFgSQADgWAAgXQAAgIgCgFQgCgDgCgBIgHgBIgBAAIAAgFIBaAAIAABpIAGAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAAhgAgOggQAAAOgCAMIgEAUIgHATIAzAAIAAhhIglAAg");
	this.shape_14.setTransform(-86.6,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-10.7,187.3,21.4);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAFIABgJICAAAIgCAJg");
	this.shape.setTransform(-0.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-11.2,19.4,22.5);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAnQgGgDgEgEQgFgFgCgGQgCgFAAgIQAAgGADgKQAEgKAHgGQAEgFALgHIAJgDIAJgBQAIAAAHACQAGADAEAEQAFAEACAGQACAHAAAHQAAAHgDAKQgEAIgHAIQgGAGgJAFIgKADIgIABQgIAAgHgCgAAAgfQgCABgCADQgFAFgDAIQgDAHgBAHIgBANQAAAJADAGQADAGAHgBQADAAABgBQADgBACgCQAFgGADgIQADgHABgIIABgMQAAgKgDgFIgEgEQgCgCgEABQgDgBgCACg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-11.2,13.6,22.5);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAmQgGgDgCgIIgMgWIgHAiIgVAAIAEgaIADgQIACgLIABgGIABgDIAAgCQAAgEgCgDQgDgCgFAAIgCAAIABgFIAVAAQAGAAADACQADADAAAGIAAADIgBAEIgBAIIgCAMIAXgZIAGgGIAGgEIAHgCIAIgBIADAAIAAAEQgFAAgFACQgEACgFAFIgUAUIARAcQAGALAIACIgBAEIgFABIgHAAQgHAAgGgCg");
	this.shape.setTransform(0.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-11.2,13.2,22.5);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAnQgGgDgEgEQgFgFgCgGQgCgFAAgIQAAgGADgKQAEgKAHgGQAEgFALgHIAJgDIAJgBQAIAAAHACQAGADAEAEQAFAEACAGQACAHAAAHQAAAHgDAKQgEAIgHAIQgGAGgJAFIgKADIgIABQgIAAgHgCgAAAgfQgCABgCADQgFAFgDAIQgDAHgBAHIgBANQAAAJADAGQADAGAHgBQADAAABgBQADgBACgCQAFgGADgIQADgHABgIIABgMQAAgKgDgFIgEgEQgCgCgEABQgDgBgCACg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-11.2,13.6,22.5);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAoIgEgBIABgFQAEAAAFgDQAEgDAEgGQAEgGADgKQAEgJADgQIAAgGQAAgEgCgDQgCgDgGAAIABgFIBKAAIgOBOIgWAAIANhGIgYAAIgCANQgBARgFAKQgEAMgFAHQgFAHgGAEQgGADgGAAg");
	this.shape.setTransform(-0.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-11.2,13.9,22.5);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAnQgGgDgEgEQgFgFgCgGQgCgFAAgIQAAgGADgKQAEgKAHgGQAEgFALgHIAJgDIAJgBQAIAAAHACQAGADAEAEQAFAEACAGQACAHAAAHQAAAHgDAKQgEAIgHAIQgGAGgJAFIgKADIgIABQgIAAgHgCgAAAgfQgCABgCADQgFAFgDAIQgDAHgBAHIgBANQAAAJADAGQADAGAHgBQADAAABgBQADgBACgCQAFgGADgIQADgHABgIIABgMQAAgKgDgFIgEgEQgCgCgEABQgDgBgCACg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-11.2,13.6,22.5);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbAlQgEgDgCgFQgBgEAAgGIAAgDIAAgFIACgLIAEgSIghA4IgFAAIgTg6IgLA6IgJAAIAOhOIAVAAIAQAyIAegzIAWAAIgGAiIgDASIgCAJIAAAEQAAAGACAEQADADAEABIgBAEQgPAAgHgFg");
	this.shape.setTransform(-0.3,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,15.6,22.5);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAnQgGgDgEgEQgFgEgCgHQgCgFAAgHQAAgJADgIQAEgKAGgGQAEgFALgHQAIgEAJAAQAIAAAGABQAGABAEAEQAEACACAEQACAEAAAEQAAAIgDAFQgEAFgFACQgGADgHABIgNABIgQAAIgBAKQAAAKAEAEQAEAFAHgBQAGAAAHgDQAGgFAFgFIAFADIgGAHIgHAFQgEADgGABQgFACgFAAQgIAAgGgCgAAAgfQgCACgDAEIgFAKIgEAPIAQAAQADAAADgCIAEgFIADgGIABgHQAAgHgDgDQgDgCgEAAQgEgBgCACg");
	this.shape.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-11.2,12.8,22.5);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAnIgXAAIAFgZIADgQIACgLIABgHIAAgDIAAgBQAAgEgCgDQgCgDgFABIgCAAIABgGIAVAAQAGABADACQADADAAAGIAAADIAAADIgBAGIgCAJIALAAIAMABQAGACAFACQAIADAAAKQAAAHgDAEQgDAGgGADQgEAEgIACQgHABgHAAgAgCAAIgFAAIgFAfIAEABIAEAAIAEgBQAFAAACgDIAFgHQACgDAAgHQAAgHgFgCQgDgCgGAAg");
	this.shape.setTransform(-0.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-11.2,12.9,22.5);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAoIgEgBIABgFQAEAAAFgDQAEgDAEgGQAEgGADgKQAEgJADgQIAAgGQAAgEgCgDQgCgDgGAAIABgFIBKAAIgOBOIgWAAIANhGIgYAAIgCANQgBARgFAKQgEAMgFAHQgFAHgGAEQgGADgGAAg");
	this.shape.setTransform(-0.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-11.2,13.9,22.5);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjAnQgHABgDgDQgDgCAAgHIABgCIAAgEIABgGIACgMIADgQIAFgbIAWAAIgFAaIgDAQIgCALIgBAGIAAADIAAABQAAAGACACQACADAGAAIABAAIAAAEgAggAnIgXAAIAFgZIADgQIACgLIABgHIAAgDIAAgBQAAgEgCgDQgCgDgFABIgCAAIABgGIAUAAQAHABADACQADADAAAGIAAADIgBADIgBAGIgBAJIALAAIANABIAIAEQAIADAAAKQAAAHgDAEQgDAGgFADQgFAEgGACQgHABgIAAgAgVAAIgFAAIgFAfIAEABIADAAIAGgBQAEAAACgDQADgDACgEQACgDAAgHQAAgHgEgCQgEgCgFAAg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-11.2,16.8,22.5);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAzQgIgIAAgPQAAgRAEgLQAEgNAGgJQAEgGAJgJQAIgGAHgBIAXgGIAMgDQAEgCABgDIAFAAIgCANQgBADgCAEQgDADgGABIgdAHQgEABgFACQgFADgEAEIgHAKQgDAGgCAGIABAAIAGgHIAIgHQAEgDAFgCQAFgBAEAAQAHAAAFACQAGABAEAEQAEADACAFQACAEAAAHIgBAMIgCAKQgEAJgHAGQgGAGgIADQgHACgJAAQgQAAgJgIgAgJgDQgEADgDAHIgEAOIgBAMIABAJQABAEACACQABACADABIAEABQAGAAADgFQAEgFACgGIAEgOIABgNIgBgJQgBgBgCgCIgDgDIgEgBQgFAAgEAEg");
	this.shape.setTransform(0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-11.2,13.6,22.5);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAnQgGgDgEgEQgFgFgCgGQgCgFAAgIQAAgGADgKQAEgKAHgGQAEgFALgHIAJgDIAJgBQAIAAAHACQAGADAEAEQAFAEACAGQACAHAAAHQAAAHgDAKQgEAIgHAIQgGAGgJAFIgKADIgIABQgIAAgHgCgAAAgfQgCABgCADQgFAFgDAIQgDAHgBAHIgBANQAAAJADAGQADAGAHgBQADAAABgBQADgBACgCQAFgGADgIQADgHABgIIABgMQAAgKgDgFIgEgEQgCgCgEABQgDgBgCACg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-11.2,13.6,22.5);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAmQgGgDgCgIIgNgWIgGAiIgWAAIAFgaIADgQIACgLIABgGIAAgDIAAgCQAAgEgCgDQgCgCgFAAIgCAAIABgFIAUAAQAHAAADACQADADAAAGIAAADIAAAEIgCAIIgCAMIAXgZIAGgGIAGgEIAGgCIAIgBIAEAAIgBAEQgFAAgEACQgFACgEAFIgUAUIARAcQAGALAIACIgBAEIgFABIgHAAQgHAAgGgCg");
	this.shape.setTransform(0.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-11.2,13.2,22.5);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAnQgGgDgEgEQgFgEgCgHQgCgFAAgHQAAgJADgIQAEgKAGgGQAEgFALgHQAIgEAJAAQAIAAAGABQAGABAEAEQAEACACAEQACAEAAAEQAAAIgDAFQgEAFgFACQgGADgHABIgNABIgQAAIgBAKQAAAKAEAEQAEAFAHgBQAGAAAHgDQAGgFAFgFIAFADIgGAHIgHAFQgEADgGABQgFACgFAAQgIAAgGgCgAAAgfQgCACgDAEIgFAKIgEAPIAQAAQADAAADgCIAEgFIADgGIABgHQAAgHgDgDQgDgCgEAAQgEgBgCACg");
	this.shape.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-11.2,12.8,22.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAnQgGgDgEgEQgFgFgCgGQgCgFAAgIQAAgGADgKQAEgKAHgGQAEgFALgHIAJgDIAJgBQAIAAAHACQAGADAEAEQAFAEACAGQACAHAAAHQAAAHgDAKQgEAIgHAIQgGAGgJAFIgKADIgIABQgIAAgHgCgAAAgfQgCABgCADQgFAFgDAIQgDAHgBAHIgBANQAAAJADAGQADAGAHgBQADAAABgBQADgBACgCQAFgGADgIQADgHABgIIABgMQAAgKgDgFIgEgEQgCgCgEABQgDgBgCACg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-11.2,13.6,22.5);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAnQgIAAgFgDQgEgEgBgGIgGgOIgbAbIgLAAIAjgjIgMgaQgCgFgEgEQgDgEgEAAIABgEIAQAAQAIABAFADQAEAEAAAGIAGAOIAbgcIAMAAIgjAkIALAZQADAHADADQAEADAEABIgBADg");
	this.shape.setTransform(-0.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-11.2,12.6,22.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA5IABgGIAJAAIAHgDIAHgFQADgDACgFIAGgJIgThBQgCgHgEgDQgDgDgFgBIAAgDIAPAAQAJAAAEADQAGAEABAGIALArIAeg3IAJAAIgxBZIgHAMQgDAEgEADQgEACgEABIgIABg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-11.2,12.9,22.5);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAnQgHgDgEgEQgFgFgBgGQgDgFAAgHQAAgJADgIQADgHAHgKIAIgGIAIgFQAIgEAKAAIAIAAIAKABQAEACADADQADACAAAGIgBAGIgBAJIgGAAIAAgCIAAgBIgBgJIgDgFIgHgEIgIAAQgDgBgEACQgDABgBACQgFAGgDAHQgDAHgCAIIgCANQABAKAEAGQAEAEAHAAQAIAAAHgDQAFgFAGgFIAEADIgFAHIgIAFQgEADgFABQgGACgGAAQgIAAgGgCg");
	this.shape.setTransform(-0.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-11.2,12.6,22.5);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAFIABgJICAAAIgCAJg");
	this.shape.setTransform(-0.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-11.2,19.4,22.5);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBOIAAgVIAVAAIAAAVgAgIAoIAAgGQAAgLADgIQACgGADgGIAOgMQAKgIADgGQADgFAAgGQAAgLgIgIQgKgJgMAAQgKAAgJAIQgHAIgDAQIgTgDQACgVAOgMQANgLATAAQAXAAANAMQAOAMAAASQgBAKgEAJQgFAIgOAKIgMANQgDAEgBAFQgBAFgBALg");
	this.shape.setTransform(-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.1,16.2,28.2);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA4IAAhfIgkAAIAAgQIBZAAIAAAQIgkAAIAABfg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-14.1,14.1,28.2);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgPQAPgQAVAAQAXAAAOAPQAOAQAAAaIAAAEIhSAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAEgMIAUACQgFARgNAKQgMAJgUAAQgWAAgPgPgAAfgJQgBgOgGgHQgJgLgPAAQgLAAgJAIQgJAJgBAPIA9AAIAAAAg");
	this.shape.setTransform(0.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-14.1,15.5,28.2);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA4IAAhfIgkAAIAAgQIBZAAIAAAQIgkAAIAABfg");
	this.shape.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-14.1,13.9,28.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA4IAAhTIgyBTIgVAAIAAhvIATAAIAABUIAzhUIAVAAIAABvg");
	this.shape.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.1,16.3,28.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA4IAAgyIgzAAIAAAyIgTAAIAAhvIATAAIAAAvIAzAAIAAgvIATAAIAABvg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-14.1,16.2,28.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBMIgCgRIAKABQAHAAAEgCQADgCADgEIAGgOIABgFIgqhvIAVAAIAXBCIAGAYIAIgYIAYhCIATAAIgrBxQgGASgCAIQgGAJgGAEQgGAEgKABQgGgBgGgCg");
	this.shape.setTransform(0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-14.1,15,28.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoA4IAAhZIghBZIgPAAIgfhdIAABdIgTAAIAAhvIAdAAIAdBYIAghYIAbAAIAABvg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-14.1,19.3,28.2);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoA4IAAhZIghBZIgPAAIgfhdIAABdIgTAAIAAhvIAdAAIAdBYIAfhYIAcAAIAABvg");
	this.shape.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-14.1,19.1,28.2);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA4IAAhTIgyBTIgVAAIAAhvIATAAIAABUIAzhUIAVAAIAABvg");
	this.shape.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.1,16.3,28.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA4IAAhvIATAAIAAAsIAXAAQAWAAANAKQANAHAAAQQAAAOgLAKQgLAKgXAAgAgZAoIATAAQAQAAAJgEQAHgFAAgJQAAgHgGgGQgFgGgSAAIgWAAg");
	this.shape.setTransform(0.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-14.1,15.5,28.2);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA4IAAhfIgkAAIAAgQIBZAAIAAAQIgkAAIAABfg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-14.1,14.1,28.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA4IAAhTIgzBTIgUAAIAAhvIATAAIAABUIAyhUIAVAAIAABvg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.1,16.3,28.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghArQgOgPAAgcQAAgQAGgOQAGgNAMgHQAMgHANAAQASAAAMAJQALAJAEARIgTADQgCgLgHgGQgHgFgJAAQgNAAgJAKQgJAKAAAVQAAAWAJAKQAJALAMAAQALAAAHgHQAIgHACgOIASACQgDATgMALQgNALgSAAQgVAAgOgPg");
	this.shape.setTransform(0.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-14.1,15,28.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArA4IAAhvIATAAIAABvgAg9A4IAAhvIATAAIAAAsIAYAAQAWAAAMAKQANAHAAAQQAAAOgKAKQgLAKgVAAgAgqAoIAUAAQASAAAGgEQAHgFAAgJQAAgHgFgGQgEgGgUAAIgWAAg");
	this.shape.setTransform(-0.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-14.1,19.8,28.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA4IAAhvIAsAAQAPAAAIADQAHADAGAHQAFAHABAKQgBAIgDAGQgDAGgHAEQAIABAGAHQAEAHAAAKQgBAQgKAIQgKAIgUAAgAgaAoIAaAAQANAAAGgEQAHgDAAgKQAAgFgDgFQgEgEgFgBQgGgCgKAAIgYAAgAgagHIAUAAQALAAAEgCQAFgBADgEQAEgEAAgFQAAgJgGgDQgGgEgNAAIgWAAg");
	this.shape.setTransform(0.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-14.1,15.7,28.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgcQAAgeARgPQAPgMATAAQAXAAAOAPQAPAPAAAbQAAAUgGAMQgHANgMAGQgNAHgOAAQgWAAgOgPgAgWgfQgKALAAAUQAAAVAKALQAJALANAAQAOAAAJgLQAKgLAAgVQAAgUgKgLQgJgKgOAAQgNAAgJAKg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.1,16.2,28.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZA4IAAhfIgxAAIAABfIgTAAIAAhvIBXAAIAABvg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-14.1,15.9,28.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA4IgUgjQgFgKgEgEQgFgDgHAAIAAA0IgTAAIAAhvIATAAIAAAxQAKAAADgDQAEgEAFgRQAGgNADgEQADgFAFgBQAFgCAKAAIADAAIAAAQIgFAAQgHAAgCACQgDADgEALQgFALgDAEQgEAFgFADQAKABAMAUIAVAjg");
	this.shape.setTransform(0.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-14.1,13.7,28.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAxQgKgJAAgOQAAgIADgHQAFgHAFgEQAHgCAHgCIARgDQAVgDALgEIAAgEQAAgMgFgFQgIgGgNAAQgNAAgGAEQgGAFgEAMIgSgCQADgMAGgIQAFgHAMgEQALgEAMAAQAOAAAJADQAJAEAFAFQAEAFABAIIABARIAAAYQAAAaACAHQAAAHAEAHIgTAAQgDgGgCgIQgKAJgKAEQgIADgLAAQgSAAgKgJgAgDAHQgMABgFACQgEADgDAEQgDAEAAAFQAAAHAGAFQAGAFAKAAQAJAAAKgEQAIgFAEgJQADgGAAgNIAAgGQgKAEgTADg");
	this.shape.setTransform(-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.1,16.2,28.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBNIgagqQgIgSgIgGQgHgGgLAAIAABIIgVAAIAAiZIAVAAIAABEQAOAAAGgFQAFgGAHgUQAHgQAEgGQAEgHAIgEQAHgEAKAAIAMAAIAAASIgEAAIgEAAQgKAAgFAEQgFAFgGAPQgIAVgFAEQgFAFgGADQANADAPAXIAgA0g");
	this.shape.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-14.1,16.8,28.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,181,235,0.737)","rgba(89,206,241,0.275)"],[0,1],-5,23.1,0,-5,23.1,143.1).s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,250);


(lib.sml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AxIABgHIBDhQIgXAAQgNAAgGAFQgGAEgCALIgGAAIACgNIACgGQABgDACgCIAGgEQAEgCAGAAIBIAAIhJBXIA1AAIgBAKg");
	this.shape.setTransform(67.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKBCQgHgDgEgKIgPgaIgHAoIgbAAIAIgwIAGgfIADgVIACgLIABgFIAAgCQAAgGgDgDQgCgCgHAAIgCAAIABgHIAZAAQAIAAAEADQAEAEAAAIIgBADIgBAKIgEAVIgGAkIAcgdIAIgGIAHgGIAIgDIAKgBIAEAAIAAAFQgHABgFACQgGACgFAGIgZAXIAVAkQAIAPAJACIgBAEIgGACIgIABQgJAAgHgEg");
	this.shape_1.setTransform(57.4,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAKQgCgDAAgEQAAgFAEgFQAEgEAFAAQAFAAADACQACADAAAEQAAAFgEAEQgEAFgFAAQgFAAgDgCg");
	this.shape_2.setTransform(48.8,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBEIAJgwIAGgfIADgVIACgLIABgFIAAgCQAAgGgDgDQgCgCgHAAIgCAAIABgHIAXAAQAJAAADADQAEAEAAAIIAAACIgBAGIgCALIgEAVIgGAgIgIAxg");
	this.shape_3.setTransform(44.6,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAwQgGgDgFgFQgEgFgCgHQgDgHAAgIQAAgLAEgJQAEgMAGgJQAFgHANgJQAKgGALAAQAGAAAEACQAEACADACIAFAGIABAAIAJgKIASAAIgOBMIgEAVIgRAAIgGgKIgBAAIgHAGIgGAEQgFACgGAAQgKAAgHgDgAgEglQgEADgDAGIgGAMIgDANIgCALIgBALQAAAKADAGQAEAGAIAAQAEAAAEgCIAFgEIAGgHIAKg3QgBgEgDgCIgFgFQgDgCgFAAQgEAAgEADg");
	this.shape_4.setTransform(36,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnAyIAFgdIADgTIADgLIAAgHIAAgDIABgCQAAgKgEgEQgDgEgGAAQgGAAgFADQgGACgDADIABACIABADIAAADIAAACIgBAEIgBAHIgCALIgDAUIgGAdIgZAAIAFgdIADgTIACgLIACgHIAAgDIABgCQgBgKgEgEQgDgEgGAAQgFAAgFADIgIAGIAAABIABABIAAACIAAABIgBADIgBAIIgCANIgEATIgFAgIgbAAIAFggIAEgUIACgOIABgHIABgEIAAgCQAAgGgCgCQgDgDgGAAIgDAAIACgHIAUAAQAGAAAEACQAFACACAEIAAAAIAMgGQAHgEAJAAQAGAAAEACIAGADIAGAEIADADQAFgEAHgEQAIgEAMAAQAPAAAIAHQAEADACAFQACAGAAAHIAAADIgBAKIgEATIgHAng");
	this.shape_5.setTransform(21.5,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAwQgGgBgEgEQgIgGAAgOIAAgDIAAgHIADgNIAEgVIABgKQAAgFgCgDQgDgDgHAAIgCAAIABgHIAZAAQAJAAADADQAEADgBAIIgBAOIgEAVIgCAOIgBAHIAAADQAAAJAEAEQADADAHAAQAFAAACgCIAGgEIAGgHIAOhMIAbAAIgRBhIgSAAIgGgKIgBAAIgIAGIgHAEQgFACgGAAQgIAAgHgCg");
	this.shape_6.setTransform(7,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAwQgGgDgFgFQgEgFgCgHQgDgHAAgIQAAgLAEgJQAEgMAGgJQAFgHANgJQAKgGALAAQAGAAAEACQAEACADACIAFAGIABAAIAJgKIASAAIgOBMIgEAVIgRAAIgGgKIgBAAIgHAGIgGAEQgFACgGAAQgKAAgHgDgAgEglQgEADgDAGIgGAMIgDANIgCALIgBALQAAAKADAGQAEAGAIAAQAEAAAEgCIAFgEIAGgHIAKg3QgBgEgDgCIgFgFQgDgCgFAAQgEAAgEADg");
	this.shape_7.setTransform(-4.6,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAyIgMgCQgFgBgEgEQgDgEAAgGIAAgHIABgJIAIAAIAAABQAAAKAFAHQADADAEACQAFABAGAAIAHAAIAGgDIAGgFQACgDAAgEQAAgGgEgDIgKgHIgKgEQgKgFgGgEQgGgGAAgIQAAgJAEgGQAEgGAHgEQAGgEAIgCQAGgCAIAAIALABIALACQAFABAEAEQAEAEAAAGIgBAIIgBAIIgHAAIAAgBQAAgKgGgGQgCgEgFgCQgEgBgGAAIgHABIgFADQgDACgCADQgCADAAAEQAAAFADADQAEADAEACIALAGQAMAFAGAEQADACACAEQABAEAAAEQAAAJgEAGQgFAGgHAEQgGAEgJACIgPACg");
	this.shape_8.setTransform(-15.5,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAKQgCgDAAgEQAAgFAEgFQAEgEAFAAQAFAAADACQACADAAAEQAAAFgEAEQgEAFgFAAQgFAAgDgCg");
	this.shape_9.setTransform(-23.3,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAzIgQg5IgiA5IgJAAIgVhLQgDgLgEgFQgDgFgGAAIABgEIABAAIADgBIAEAAIABAAIAMABQAGACAEADQAEADADAFQADAFACAHIALAmIAUgfIgCgHQgDgLgEgFQgDgFgFAAIABgEIAEgBIAEAAIANABQADACAFADQAEADAEAFQADAFACAHIAMApIAlhBIALAAIg4Bjg");
	this.shape_10.setTransform(-32,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAzIgQg5IgiA5IgJAAIgVhLQgDgLgEgFQgDgFgGAAIABgEIABAAIADgBIAEAAIABAAIAMABQAGACAEADQAEADADAFQADAFACAHIALAmIAUgfIgCgHQgDgLgEgFQgDgFgFAAIABgEIAEgBIAEAAIANABQADACAFADQAEADAEAFQADAFACAHIAMApIAlhBIALAAIg4Bjg");
	this.shape_11.setTransform(-48.2,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAzIgPg5IgiA5IgKAAIgVhLQgCgLgEgFQgDgFgGAAIABgEIACAAIADgBIACAAIACAAIANABQAEACAFADQAEADADAFQADAFACAHIALAmIAUgfIgCgHQgDgLgDgFQgEgFgEAAIABgEIADgBIAFAAIALABQAEACAFADQAEADADAFQAEAFACAHIAMApIAlhBIALAAIg4Bjg");
	this.shape_12.setTransform(-64.5,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4281").s().p("AymDmIAAnLMAlNAAAIAAHLg");
	this.shape_13.setTransform(0,0,0.723,0.723);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.1,-16.6,172.4,33.3);


(lib.plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA4E86").s().p("AgqDcIAAi7Ii9AAIAAhBIC9AAIAAi7IBVAAIAAC7IC9AAIAABBIi9AAIAAC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-22.1,46.5,44.2);


(lib.h2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand2();
	this.instance.setTransform(-111.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-32,223,64);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6WD0IAAnoMA0tAAAIAAHog");
	mask.setTransform(168.8,24.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACICYIhShSQgiAeguAAQg1AAglgmQgmglAAgzQAAg1AmglQAlgmA1AAQAzAAAlAmQAmAlAAA1QAAAugeAiIBRBRQADADAAAFQABAEgDAEQgDADgFAAIgBABQgEAAgDgDgAhlhlQgfAfAAAsQAAAqAfAfQAfAfAsAAQAqAAAfgfQAfgfAAgqQAAgsgfgfQgfgfgqAAQgsAAgfAfg");
	this.shape.setTransform(310.6,25.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.1,10,31,31);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BuQgbgOgJghQgHgWABgcIgBhLQAAgdgBgJQgBgGgLgBIgGgBQgEAAgCgCQgDgCABgEQABgEADgBIAKgBIAuABIAWAAQAGAAACADQACADgCADQgBAEgEAAQgJABgFABQgDAEAAALIgBBmQAAAlAIATQAKAZAeAHQATAFASgGQAbgJAIgaQAFgPABgWIAAgkIAAhSIgBgIQgBgEgDgBIgRgDQgDAAgCgEQgBgDACgDQACgDAKgBQAiACARgBQANAAADACQACAEgCAEQgCADgGABQgHAAgDACQgCACgBAMIgBBpQgCAxgSAZQgLAPgSAJQgRAJgTABIgOABQggAAgXgNg");
	this.shape_1.setTransform(46.9,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdB5Ig6gCQgaACgNgBQgDAAgDgDQgCgEACgDQACgDAHgBQAHAAACgCQAEgIAAgSIABgtQAAhUgBgrQgBgIgEgCQgDgCgGAAIgIAAQgEgBgBgDQgCgDACgDQACgDAFgBIAHAAQAkACAagCQALAAADADQACACgBAEQgBAEgEABQgJAAgFACQgDABgBAEQgCAHAAAaIAABPIABAqQABAaACAHQACAHAIACQAJABAbAAQARgBAGgGQAFgGADgOQAAgDAEgCQADgBADACQAEADgBAJIgGAiQgCAGgHABIgTABIgSAAg");
	this.shape_2.setTransform(126.4,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA9B6IgHgBQgEgBgCgDQgCgDAGgGIgVg2QgEgOgEgFIg+AAIgQAvQgGASABAHIAIACQAGAAADADQADACgCAEQgCAEgEABIgWgBIgZAAQgQABgJgBQgEAAgBgFQgBgFAEgCQADgBAIAAQAHgBADgCQAGgEAEgIIAHgOIBGi5IAEgIQACgGADgCQADgCACACQADACACAEIBECpQAMAdAFAIQAJAOAJADIAJABQAFAAADADQACADgCAEQgCAEgEAAIgPAAIgrgBgAgfANIAuAAIgWhCIgBAAIgXBCg");
	this.shape_3.setTransform(105.7,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah9B6IggABQgEgBgCgDQgCgDADgDQACgEAGAAIAJgBQAEgDACgJIAFgqIAUijQABgMAHgBQAFgBAFAJIBWCkIAHAOIBXiyQAEgIAEAAQAEAAACADQACADAAADIAYC/IACAPQADAIAFAEQAIAEASABQADABABADQABADgCADQgDADgFAAIgvgCQgMAAgIgCQgHgBABgGIAFgHIgOiOIgbA1IgtBaIgFANQgCADgEAAQgEAAgCgDIgKgQIhFiHIgIBGIgDAhQgCATABANQAAAFALAAQALACAAAFQAAADgCACQgCADgDAAIgEAAIgdgBg");
	this.shape_4.setTransform(76,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFB6QgNgBgHABIgcABQgJAAABgHQgBgGAGgBIAKgBQAFAAAEgCQAHgFAIgTIBJi+QAEgJACgDQADgCADAAQACABABACQADAEAEAKIBHCxQALAYAJAIQAGAEANABQAEAAACAEQACADgCADQgBAEgJAAIg3gBQgKgBgCgDQgCgFAGgFIgdhJIg4gBIgGABIgPArIgFAPQgCAIABAHIAKABQAFAAACAEQACADgCADQgCADgEABIgFAAIgPgBgAgOgkIgRAxIAuAAIgWhDIgHASg");
	this.shape_5.setTransform(25.4,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzB3IgJgDQgEgDgBgFIABglQABgMADgCQAGgCADAEQABABABAIQABAQAJAIQANAMAXgBQAUAAAKgRQAJgOgGgSQgEgLgTgRIgbgYQgRgMgJgNQgNgSABgYQABgYAPgPQAQgPAWgDQAWgEAcAGIAIABQAFABABADQABAHgCAPIAAAXQgBAEgFABQgEAAgDgDQgBgRgGgGQgJgLgWgBQgPgBgLAJQgGAGgCAJQgCAJADAJQADAJANALIAZAWQARAOAKAIQANAOAFANQAGAPgCARQgBAQgIAOQgOAXgeAIQgMADgOAAQgTAAgSgGg");
	this.shape_6.setTransform(6.7,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADALIgIgLIAAAMIgFAAIAAgVQAAgBgEgDIAPABQACAAACACQACADgBADQAAACgFACQAEAIAJAGQgHgBgEgCgAgFAAQAHAAgBgGQABgGgHAAIAAAMg");
	this.shape_7.setTransform(137,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAWQgKgFgCgLQgDgJAFgJQAGgJALgCQAKgDAIAGQAIAFACALQACAHgEAJIgFgBQAFgMgGgIQgDgHgJgCQgGgCgHAEQgHAFgCAHQgCAFAEAHQADAHAHADQAGADAHgEQACgBAIACQgGAGgJABIgCAAQgFAAgGgDg");
	this.shape_8.setTransform(136.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,139.1,25.1);


(lib.drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA4E86").s().p("AkuEsQhYhCgphmQgphpAVhuQAfidCFhZQCEhZCbAgQBrAUBSBLQBVBPATBnQAFAbAEA+QACA7AIAlQANBGAgAyQAnA7A/AZQizBijLAPQgfACgeAAQi9AAiBhfg");
	this.shape.setTransform(1.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-39.9,92,79.2);


(lib.cl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud1t();
	this.instance.setTransform(-147,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-94,294,188);


(lib.ch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgiCEIhZiEIAAAAIABgBIAsgeQAAAAAAgBQABAAAAAAQAAAAABAAQAAABAAAAIAsA/IBsijIABgBIACAAIAsAdQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIiaDnIgCABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-13.3,25,26.7);


(lib.can_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.can();
	this.instance.setTransform(-53,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-82,106,164);


(lib.astbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAfQgEgCgDgDQgDgDgBgFQgCgEAAgGQAAgHACgFQADgIAEgGQADgEAJgGQAGgEAHAAIAHABIAEADIADADIABAAIAGgGIAMAAIgJAxIgDAOIgLAAIgEgGIgBAAIgEADIgEADIgHABQgGAAgFgCgAgCgYQgDACgCAEIgEAIIgCAIIgBAHIgBAHQAAAHACAEQADAEAFAAIAFgBIADgDIAEgFIAGgjQAAgDgCgCIgDgDQgCgBgEAAQgCAAgCACg");
	this.shape.setTransform(-51,-16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAgQgFAAgDgCQgCgCAAgGIAAgCIAAgDIABgGIACgJIgUAAIgFAeIgSAAIAEgVIACgMIABgJIABgGIABgCIAAgBQAAgEgCgCQgCgCgEAAIgCAAIABgEIARAAQAFAAACACQADACAAAFIAAACIgBAEIgBAFIgBAJIAUAAIAFgdIASAAIgDAVIgDAMIgCAJIgBAFIAAADIAAABQAAADACADQACACAEAAIABAAIAAAEg");
	this.shape_1.setTransform(-58.8,-16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAfQgEgCgDgDQgDgDgBgFQgCgEAAgGQAAgHACgFQADgIAEgGQADgEAJgGQAGgEAHAAIAHABIAEADIADADIABAAIAGgGIAMAAIgJAxIgDAOIgLAAIgEgGIgBAAIgEADIgEADIgHABQgGAAgFgCgAgCgYQgDACgCAEIgEAIIgCAIIgBAHIgBAHQAAAHACAEQADAEAFAAIAFgBIADgDIAEgFIAGgjQAAgDgCgCIgDgDQgCgBgEAAQgCAAgCACg");
	this.shape_2.setTransform(-66.5,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAhIAEgTIACgNIABgGIABgFIAAgCIAAgCQAAgGgCgDQgCgCgFAAIgHABQgDACgCADIABABIAAABIAAACIAAACIAAADIgBAEIgCAGIgCAOIgDATIgQAAIADgTIADgNIABgGIABgFIAAgCIAAgCQAAgGgCgDQgDgCgEAAQgDAAgEACIgEAEIAAABIAAAAIAAABIAAABIAAACIgBAFIgCAJIgCAMIgDAVIgSAAIADgWIACgLIACgJIABgGIAAgDIAAAAQAAgEgBgCQgCgCgEAAIgCAAIABgEIANAAIAHABQADABACADIAAAAIAHgEQAFgCAHgBIAFACIAEACIAEACIACACQADgDAFgCQAFgDAIAAQAKAAAFAFQACACACAEIABAHIAAADIgBAGIgCAMIgFAag");
	this.shape_3.setTransform(-76.1,-16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAfQgGgCgDgDQgDgEgCgFQgBgEAAgGQAAgHACgHQACgFAGgIIAGgFIAGgEQAHgDAIAAIAHAAIAHABIAGADQACADAAAEIAAAFIgCAIIgDAAIAAgCIAAgCIgBgGQgCgDgCgBIgEgDIgHgBIgGABQgDABAAACQgDAEgEAGQgCAGgBAGIgBAKQAAAJADAEQAEAEAEAAQAHAAAFgDIAJgIIAFADIgFAFIgGAEIgIAEQgFABgEAAQgHAAgFgCg");
	this.shape_4.setTransform(-85,-16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmAtIgHAAIgHgDIgGgFQgCgEgCgGIgBgHIgjAAIgQAZIgHAAIA3hZIAGAAIASBHQABAGADAEQADAEAFAAIgBAEIgDAAgAALAOIgJgiIgUAiIAdAAg");
	this.shape_5.setTransform(-93.2,-17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIBMIAAghIhAAAIAAgVIA+hhIAhAAIAABeIASAAIAAAYIgSAAIAAAhgAACgdIgeAwIAkAAIAAguIABgOIgBAAg");
	this.shape_6.setTransform(85.1,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBGIAAgcQAQAJASAAQANABAFgHQAIgGAAgLQAAgXgeAAQgKAAgPACIAAhTIBSAAIAAAcIg2AAIAAAeIANgBQAWAAANANQANAKAAAVQABAXgRAPQgPAOgZAAQgWAAgQgHg");
	this.shape_7.setTransform(73.6,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBGIAAgcQAQAJASAAQANABAFgHQAIgGAAgLQAAgXgeAAQgLAAgOACIAAhTIBSAAIAAAcIg1AAIAAAeIAMgBQAWAAANANQAOAKAAAVQgBAXgQAPQgQAOgZAAQgVAAgQgHg");
	this.shape_8.setTransform(56.3,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBGIAAgcQAQAJASAAQANABAFgHQAIgGAAgLQAAgXgeAAQgLAAgOACIAAhTIBTAAIAAAcIg2AAIAAAeIAMgBQAVAAAOANQAOAKAAAVQAAAXgQAPQgQAOgaAAQgWAAgPgHg");
	this.shape_9.setTransform(44.4,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxBNIAAgaIAsgqQALgKAFgJQAGgJgBgKQAAgUgUgBQgUABgSAQIAAgeQAUgNAXAAQAXAAAOALQANANAAAUQAAAaghAaIgdAcIAAABIA8AAIAAAcg");
	this.shape_10.setTransform(26.9,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBIIAAgbQALAIASAAQAPAAAKgMQAKgMAAgWIgBgBQgKAPgTAAQgSAAgNgNQgMgLAAgVQAAgYAPgPQAPgOAWAAQAYAAAPASQAOATAAAiQAAAngRAXQgSAWgdAAQgTAAgNgGgAgNgtQgHAHAAAMQAAALAHAHQAFAGAIAAQAIAAAFgGQAGgGAAgKQAAgMgGgIQgFgIgIAAQgIAAgFAHg");
	this.shape_11.setTransform(14.9,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBdQAegpAAg0QAAgxgegrIAbAAQAhApAAAzQgBA3ggAmg");
	this.shape_12.setTransform(-0.8,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBNIAAgaIAtgqQALgKAFgJQAGgJAAgKQAAgUgWgBQgTABgSAQIAAgeQAUgNAXAAQAXAAAOALQAMANAAAUQAAAagfAaIgeAcIAAABIA8AAIAAAcg");
	this.shape_13.setTransform(-9.7,10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjBMIA1h7IhGAAIAAgcIBpAAIAAAQIg1CHg");
	this.shape_14.setTransform(-21.5,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguBNIAAgbIAfAAIAAhcIggAHIAAgcIBAgNIAAB+IAfAAIAAAbg");
	this.shape_15.setTransform(-33.2,10.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjBMIA1h7IhGAAIAAgcIBpAAIAAAQIg1CHg");
	this.shape_16.setTransform(-45.3,10.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADBdQgggmAAg3QAAgzAggpIAbAAQgeArAAAxQAAA0AeApg");
	this.shape_17.setTransform(-54.3,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjBMIA1h7IhGAAIAAgcIBpAAIAAAQIg1CHg");
	this.shape_18.setTransform(-70,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAzIAAgoIgpAAIAAgUIApAAIAAgpIATAAIAAApIApAAIAAAUIgpAAIAAAog");
	this.shape_19.setTransform(-83.3,11.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC4281").s().p("AvTCiIAAlDIenAAIAAFDg");
	this.shape_20.setTransform(0.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.7,-26.5,197.6,53.1);


(lib.alabtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2ACQAAgmAPgVQAPgUAaAAQA1AAAABNQAAAlgPAVQgOAUgaAAQg2AAAAhMgAgUABQAAA0AUAAQAVAAAAg1QAAg0gVAAQgUAAAAA1g");
	this.shape.setTransform(85.2,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBNIAAgaIAfAAIAAheIggAIIAAgcIBAgNIAAB/IAfAAIAAAag");
	this.shape_1.setTransform(73.6,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2ACQAAgmAPgVQAPgUAaAAQA1AAAABNQAAAlgPAVQgOAUgaAAQg2AAAAhMgAgUABQAAA0AUAAQAVAAAAg1QAAg0gVAAQgUAAAAA1g");
	this.shape_2.setTransform(56,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDQgPgLAAgTQAAgcAfgLIAAAAQgagLAAgYQAAgSAOgLQAOgLAUAAQAXAAAOAKQANALAAARQAAAZgdAMIAAAAQAQADAIAKQAJALAAANQAAAUgPAMQgPALgZAAQgXAAgOgLgAgVAjQAAAIAHAGQAGAFAIAAQAKAAAGgFQAGgFAAgJQAAgSgWgIQgVAJAAARgAgLgwQgFAEAAAIQAAAOAQAIQASgIAAgOQAAgIgEgFQgFgEgJAAQgGAAgFAFg");
	this.shape_3.setTransform(44.1,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBNIAAgaIAsgqQALgKAFgJQAGgJgBgJQAAgWgUAAQgUABgSAPIAAgdQAUgNAXAAQAXAAAOAMQANALAAAUQAAAbghAaIgdAcIAAABIA8AAIAAAcg");
	this.shape_4.setTransform(26.9,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBHIAAgdQAQAKASgBQANABAFgHQAIgGAAgLQAAgXgeAAQgLAAgOACIAAhTIBTAAIAAAbIg2AAIAAAfIAMgBQAVAAAOANQAOAKAAAVQgBAXgQAPQgPAOgaAAQgVAAgQgGg");
	this.shape_5.setTransform(15.3,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBHIAAgeQAPAMAVAAQALAAAHgGQAHgFAAgKQAAgLgJgFQgHgGgPAAIgOAAIAAgXIANAAQAbAAAAgUQAAgTgVAAQgPAAgOAKIAAgbQAQgIAVAAQAVAAAOAKQANALAAAQQAAAegfAIIAAAAQAQACAKAIQAJAKAAAOQAAAWgQAMQgPAMgaAAQgXAAgPgHg");
	this.shape_6.setTransform(3.2,10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeBdQAfgpAAg0QAAgxgfgrIAcAAQAhApgBAzQAAA3ghAmg");
	this.shape_7.setTransform(-12.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBMIA1h7IhGAAIAAgcIBpAAIAAAQIg1CHg");
	this.shape_8.setTransform(-21.5,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBNIAAgaIAsgqQALgKAGgJQAGgJAAgJQAAgWgWAAQgTABgSAPIAAgdQAUgNAXAAQAXAAANAMQANALAAAUQAAAbgfAaIgeAcIAAABIA8AAIAAAcg");
	this.shape_9.setTransform(-33.5,10.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjBMIA1h7IhGAAIAAgcIBpAAIAAAQIg1CHg");
	this.shape_10.setTransform(-45.3,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADBdQggglAAg4QAAgzAggpIAbAAQgeAqAAAyQAAA0AeApg");
	this.shape_11.setTransform(-54.3,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjBMIA1h7IhGAAIAAgcIBpAAIAAAQIg1CHg");
	this.shape_12.setTransform(-70,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAzIAAgoIgpAAIAAgUIApAAIAAgpIATAAIAAApIApAAIAAAUIgpAAIAAAog");
	this.shape_13.setTransform(-83.3,11.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC4281").s().p("A1tDmIAAnLMArbAAAIAAHLg");
	this.shape_14.setTransform(0.7,10.4,0.705,0.705);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcAgQgFAAgDgCQgCgCAAgGIAAgBIAAgDIABgFIACgKIADgNIADgVIASAAIgDAVIgDAMIgCAJIgBAFIAAADIAAABQAAADACADQABACAFAAIABAAIAAAEgAgaAgIgSAAIADgVIADgMIACgJIAAgGIABgCIAAgBQAAgEgCgCQgCgCgEAAIgCAAIABgEIARAAQAFAAADACQACACAAAFIAAACIgBADIAAAFIgBAHIAJAAIAKABIAGADQAHACAAAIQAAAGgDAEQgCAEgEADQgEADgFABQgGACgGAAgAgUAAIgFAZIADABIADAAIAFgBIAFgCIADgGQACgDAAgFQAAgGgDgCQgDgBgEAAIgDAAg");
	this.shape_15.setTransform(-47.6,-16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAZAhIADgTIADgNIABgGIABgFIAAgCIAAgCQAAgGgCgDQgDgCgDAAIgIABQgDACgCADIABABIAAABIAAACIAAACIAAADIgCAEIgBAGIgCAOIgDATIgQAAIADgTIACgNIABgGIACgFIAAgCIAAgCQAAgGgDgDQgCgCgEAAQgDAAgDACIgGAEIAAABIABAAIAAABIAAABIgBACIgBAFIgBAJIgCAMIgEAVIgSAAIAEgWIACgLIACgJIABgGIAAgDIAAAAQAAgEgCgCQgBgCgEAAIgCAAIABgEIANAAIAIABQACABABADIABAAIAHgEQAFgCAGgBIAGACIAEACIAEACIACACQADgDAFgCQAFgDAIAAQAJAAAGAFQACACACAEIABAHIAAADIgBAGIgDAMIgEAag");
	this.shape_16.setTransform(-58.4,-16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAfQgEgCgDgDQgDgDgBgFQgCgEAAgGQAAgHACgFQADgIAEgGQADgEAJgGQAGgEAHAAIAHABIAEADIADADIABAAIAGgGIAMAAIgJAxIgDAOIgLAAIgEgGIgBAAIgEADIgEADIgHABQgGAAgFgCgAgCgYQgDACgCAEIgEAIIgCAIIgBAHIgBAHQAAAHACAEQADAEAFAAIAFgBIADgDIAEgFIAGgjQAAgDgCgCIgDgDQgCgBgEAAQgCAAgCACg");
	this.shape_17.setTransform(-67.7,-16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVAdQgDgCgBgEQgCgDAAgFIABgCIAAgFIACgIIACgPIgaAuIgEAAIgQgvIgIAvIgHAAIALg/IARAAIANAoIAYgpIASAAIgFAcIgDANIgBAIIAAADQAAAFACADQABADAEABIgBADQgMAAgGgFg");
	this.shape_18.setTransform(-76.2,-16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAgIgEAAIABgEQAEgBADgCQAEgCADgFQADgFADgIQADgHACgNIABgFQAAgEgCgCQgCgCgFAAIABgEIA8AAIgMA/IgRAAIAKg5IgUAAIgBALQgBAOgDAHQgEAKgEAGQgEAGgFACQgFADgFAAg");
	this.shape_19.setTransform(-85,-16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmAtIgHAAIgHgDIgGgFQgCgEgCgGIgBgHIgjAAIgQAZIgHAAIA3hZIAGAAIASBHQABAGADAEQADAEAFAAIgBAEIgDAAgAALAOIgJgiIgUAiIAdAAg");
	this.shape_20.setTransform(-93.2,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.7,-26.5,197.6,53.2);


(lib.Е3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol50();
	this.instance.setTransform(-8.9,16.5);

	this.instance_1 = new lib.Symbol49();
	this.instance_1.setTransform(0,-3);

	this.instance_2 = new lib.Symbol48();
	this.instance_2.setTransform(-23.2,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-33.2,75.4,61.5);


(lib.txtsp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.setTransform(-19.9,13.5);

	this.instance_1 = new lib.Symbol46();
	this.instance_1.setTransform(0,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-27.9,131.5,55.8);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(124.2,0);

	this.instance_1 = new lib.Symbol22();
	this.instance_1.setTransform(113.3,0);

	this.instance_2 = new lib.Symbol21();
	this.instance_2.setTransform(102.7,0);

	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(92.2,0);

	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(81.3,0);

	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(69.3,0);

	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(57.9,0);

	this.instance_7 = new lib.Symbol16();
	this.instance_7.setTransform(45,0);

	this.instance_8 = new lib.Symbol15();
	this.instance_8.setTransform(30,0);

	this.instance_9 = new lib.Symbol14();
	this.instance_9.setTransform(16.6,0);

	this.instance_10 = new lib.Symbol13();
	this.instance_10.setTransform(-1,0);

	this.instance_11 = new lib.Symbol12();
	this.instance_11.setTransform(-11.6,0);

	this.instance_12 = new lib.Symbol11();
	this.instance_12.setTransform(-22.6,0);

	this.instance_13 = new lib.Symbol10();
	this.instance_13.setTransform(-34,0);

	this.instance_14 = new lib.Symbol9();
	this.instance_14.setTransform(-47.2,0);

	this.instance_15 = new lib.Symbol8();
	this.instance_15.setTransform(-60.7,0);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(-72.5,0);

	this.instance_17 = new lib.Symbol6();
	this.instance_17.setTransform(-84.3,0);

	this.instance_18 = new lib.Symbol5();
	this.instance_18.setTransform(-100.9,0);

	this.instance_19 = new lib.Symbol4();
	this.instance_19.setTransform(-110.9,0);

	this.instance_20 = new lib.Symbol3();
	this.instance_20.setTransform(-123.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.3,-14.1,264.7,28.2);


(lib.tc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.setTransform(0,10.5);

	this.instance_1 = new lib.Symbol44();
	this.instance_1.setTransform(0,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-21.1,187.3,42.3);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol52();
	this.instance.setTransform(0.2,8);

	this.instance_1 = new lib.Symbol51();
	this.instance_1.setTransform(0,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-18.4,211.1,37);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol56();
	this.instance.setTransform(-60.3,8.7);

	this.instance_1 = new lib.Symbol55();
	this.instance_1.setTransform(0.3,-8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.6,-18.8,203.3,37.6);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.setTransform(100.6,0);

	this.instance_1 = new lib.Symbol42();
	this.instance_1.setTransform(84.1,0);

	this.instance_2 = new lib.Symbol41();
	this.instance_2.setTransform(74.9,0);

	this.instance_3 = new lib.Symbol40();
	this.instance_3.setTransform(65.7,0);

	this.instance_4 = new lib.Symbol39();
	this.instance_4.setTransform(56.2,0);

	this.instance_5 = new lib.Symbol38();
	this.instance_5.setTransform(46.7,0);

	this.instance_6 = new lib.Symbol37();
	this.instance_6.setTransform(36.3,0);

	this.instance_7 = new lib.Symbol36();
	this.instance_7.setTransform(22.1,0);

	this.instance_8 = new lib.Symbol35();
	this.instance_8.setTransform(13.4,0);

	this.instance_9 = new lib.Symbol34();
	this.instance_9.setTransform(4.3,0);

	this.instance_10 = new lib.Symbol33();
	this.instance_10.setTransform(-6.8,0);

	this.instance_11 = new lib.Symbol32();
	this.instance_11.setTransform(-17.8,0);

	this.instance_12 = new lib.Symbol31();
	this.instance_12.setTransform(-27.2,0);

	this.instance_13 = new lib.Symbol30();
	this.instance_13.setTransform(-36.3,0);

	this.instance_14 = new lib.Symbol29();
	this.instance_14.setTransform(-49.4,0);

	this.instance_15 = new lib.Symbol28();
	this.instance_15.setTransform(-58.4,0);

	this.instance_16 = new lib.Symbol27();
	this.instance_16.setTransform(-67.3,0);

	this.instance_17 = new lib.Symbol26();
	this.instance_17.setTransform(-75.8,0);

	this.instance_18 = new lib.Symbol25();
	this.instance_18.setTransform(-84.3,0);

	this.instance_19 = new lib.Symbol24();
	this.instance_19.setTransform(-100.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-11.2,220.4,22.5);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-0.1,0,1.223,1.223,0,0,0,69.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-15.3,170.1,30.6);


(lib.shdw = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol53();
	this.instance.setTransform(0,0,12.433,1);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-14,-12,28,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.2,-12,306,28);


(lib.search = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.logo = new lib.Symbol54();
	this.logo.setTransform(-65.3,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Layer 1
	this.st = new lib.text();
	this.st.setTransform(-20.7,-1.1);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.1,0,1,1,0,0,0,168.8,24.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6WD0IAAnoMA0tAAAIAAHogA6KDoMA0UAAAIAAnPMg0UAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.st}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-24.5,337.5,49);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.txt = new lib.tc();
	this.txt.setTransform(0,3.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhoQnIgGBOQAAABgFAFIgBBHQBAABABAAQAAABAFAiQAHAtAMA7IAFAFQAGAFAGAAQAEAAA7gDQA7gEABABIABACQACACAGAAQAFAAABgBQADgEAEgDQAAABAGAKQAFALACAFQAFgBAGgDQAAAGACABIgFACIACABQAAAIgGAKQgDAFgHALIAGACQAJAFAQASQAMAOATAAQAEAAAFgCQAEgCAHABQABgBAAgBQABgDAAgGQAAgDgFgEQgGgEAAgSQAAgFABgCQACgCAAgEIACABQAEgHAPgRQAPgRAHgDQAjgOgRgVQAUgQALAAQAFAAADgCQADgBAFAAQAAAAAAgBQgCgBAAgGQAAgHAmgRQAUgJAbgNQAOgJAQgaQAMgUAOAAQAFAAADAFQADAHACABIADABQATgJADgQQABgKARAEIABgDQACgDAGgEQgGgEgHgHQAGgGADgEQABgBAAgHQAAgFADgBQADgCAJAAIACgBIABgEQgHgHgBgHQAKgHAOgQQAHgIAMAAQABAAAGgFQAFgEAHABIADACQADADAGAAQAKAAAOgHQAHgEAGgDIACAEQAEAFAXAFQACAAACgBQADgBAFAAQAaAAAQAHQAdAMADABQABABAJAJQAHAKALABQAcADAKAFQAIAEAYAMQAEAIAAgKQAAgFgGgLQgHgLAAgFQAAgHADgGQABgDAJgUQgCgFAAgKQAAgGAHgKQAMgQAWgKQADgBACgEQAEgEAIgGQACgCADACQAEADAFAAQAVAAAAgFQgDgGAAgEQALAHA8AnQBBAkA1AAQABAAAMgMQANgMAFAAQAFAAAgAFQAfAFAFAAQAdAAAQgJQAQgKAKAAQAOAAAJAHQAJAHAEAAQAXAAAPABQARAAAfACQAKAAAjAFQAEABAIgCQAJgBAFAAQAFAAAjALQAeAJAYgEQADAHABAFQADAEAQARQAUAWAHADQABAAASAAQAfAAASAVQAJALAMAQQADgBADgBQACgBAAgGQAAgFgDgQQgEgQAAgFQAAgFgFgIQgFgIAAgFQAAgbAXgIQAegLACgDQgJgEgFgDQgKgFgDgGQALgKAIgEQANgGASACQABAAAEAAQADgCAAgGQAAgFgJgMQgJgNgCgCQAJgPAAgJQgmhZgFgRQgHgXAAgwQAAgcAIgLQABgBAMgJIABgCQgMgIgMgCQgRgEgpgBQgEgEAAgKQAAgDAJgKQALgMAOgFQAGgCAdAAQADAAADgEQAEgEAMgDQAjgHAFADQASAABagpIAKACQACAEAJARQAKAOAGAAQAFAAAPgIQAOgIAFAAQAEAAAIAGQAEAEAOAMQAGgBAIgRQAHgPAAgJQAAgQgDgDQgHgIgeABQgFAAAAgKQAAgEAghkQAghmAIgUQATgxABgQQACgWABgDQAAAAACgCQADgBAGAAIAPAJQAUALAVAJQA9AcAIgEQADgBAEgFQAGgFAPAAQAhAAAcAGQABAFgBAIQgCAJAAAEQAAAGAAgBQACgCABAAQAPgFAagUQAWgQALgBQAagCABgHQACgPAEgDQAQgPAAgMQgFgLgFgTQgLgoAAgxQAAgMAIggQAMgsAPgFQAPgGAXABQAUABACgCQAGgGAFgBQACgBAMgCQAMgCAPgQQAMgPACgIQAGgRAAgKQAAgBgLgUQAAgOAOgIQALgHAKAAQAKAAAIgHIAcAJQgGgggUgDQgXgFgFgLQgGgQgFgJQgKgRgSAAIgBgBQgCgBAAgGQAAgNAMgCQAMgCAAgFQAAgEgCgFQgCgDACgFQgOgDgGAAQgBAAg4BDQgDgGgCgDQgDgEgGAAQgGAAgEAFQgDAEgBABQgBgBgBgEQgBgEABgGQgDgBgEACQgGACgFAAQgFAAgEgCQgEgDgFAAQgGAAgBgFQgCgGgBgBQgIAHgIABIgbAAQgJgEgRgiQgPgeAAgDQAAgMABgBQAHgDACgCQgNgPgHAAQgDABgEgFQgFgEgCgBQgEgBgHgDQgHgEgEgCQgdgNAAACQAAAGgCAAQgEAAgGgHQgGgIAAgHQAAgFgDgOQgDgNAAgFQgig+gNgLQgEgEgegNQgegOgEAAQgOAAgOACQABAYgXgBQgZgEgDAAQgCAKgIAMQgLARgMAAQgFAAgEgEQgFgEgFAAQgCAAgGAGQgHAFgJAAQgEAAgYgJIgZgJQgDAAgIAFQgKAGgQABQgDgOACgDQACgBAAgEQAAgFgEgJQgFgIAAgEQgJAAgKACQgMADgEAAIgHgBIgDgDQACgIAGgRQAFgRABgDQgBgBgCAAQgEABgFAAQgOAAgHgXQgBAAgBACQgBADgGAAQgFAAgCgBQgHgFgHgDQAAAAgFAKQgEAHgHAEQgLAEgDABQgGACAAAIQAAAFAEAGQAEAFAAAFQAAARgMAEQgNACgCABQgDABgQATQgKgHgDACIAJASQgIAAgIgMQAAgFgPghQgehChMiQQhnjDhAhPQgug5h0hgQgDgCgEgMQgGgQgHgMQABgBANACQAQACAEAAQAGAAALgPQAKgPAAgMQAAgCgDgDQgGgEgDgDQABAAAEgCQAGgDAJgHIABgFQAFgDgKAAQgUAAgKARQgJAPgtgFQgCABgDAHQgDAHACAGIhMAjQgGgBgKAAQgGAAgDACQgDAEgEADIAKAQIg2AoQgBAAgLgDQgLgEgGAAQgLAAgDARQgCASgggBQgBAEACAIQACAJAAAFQAAALgJAMQgJgGgFgIQgFgKgDgFQAAgBgKAAQgGAAAAAEQAAABABADQgEgDgDgJQgBgFgRAAQgKAAgBAEQgCADgVgBQgDAJAAACQAAACgeAbQgCgKAAgKQAAgFgKgFQgJgFABgEQgFACAAgKQAAgGAEgCQACgBAGAAIAFgXQAGABAAgKQAAgLAFAAQADABAJAEQAUAGAJgzQgJgBgBgBQAAgCgCAAQgGAFAAAFQAAABgCAAQgEAAgHASQgDAAgEgDQgFgDgDAAQAAABABADQABAEgGAAQgpAAgGgWQgGgWgsAAQgGAAgBACQgCADgDADIgEALQABABADgBQAGgBAFAAQAKAAgEADIACAGQADAIAAAFQgBAAgGgCQgGgDgGAAQgHAJgKAIIgEgBQgCgCADgHQACgKAAgFQAAgGgDgDQgEgEgBgCQACAAAFgDQAEgDAEAAIACgFIgYgKQAFgDAAgKQAAgIgRgLQgQgKgIgCQAAADAJAJQAAABgBAFQgDAHAAAFQAAAEAGADQAHAEAEAIIgCAEQADACgKAAQAAAAgLgKQgMgLgZgGQgGAGgBAXQgBAAgBABQgBABgGAAQgDAAgIgBQgFgBgFACQgCgHgIgHQgHgHgDAAQgKAOgJAJQgMgNgDgJQgBgCAAgJQAAgDgCgBQgEgBgFgIQAKgDAHABQAIAAADgBQgGgtAAgKQAAgJAIgDQAIgDAAgFQAAgPgSgDQgTgDgEgdQAAgGABgJQACgKAAgIQAAgJgSglQgNgbALAKQgDgEgKAAQgJAAgIADQgIACgJAAQgDAAgKANQgOASgGAFQgVgFghgdQgcgYghAAQgGAAgFAGQgHAHgBABQAAgIgDgFQgGgKgZgCQgBAAgBgBQgBgBAAAGQAAAJAEADQAFADABAKQAAAGgFACQgGgIgagMQgKAegDAFQgCADghAAQgJAAgDAAIgIAFQACAEgDAGQAAAGASAHQgJAVgCACQgLAAgiAAQgCAAgEAGQgGAJgMAIQgFAEgUgBQgVgBgFAAQgFAFgIAFQgPAKgQACQgXACgIAFQgPAJhTASQgDgSgCgCQgKAJgGAFQgLAKgCAAQgFAAgLgEQgKgEgFAAQgGAAABAGQAAAEABAHQgZAHgBABQgSANANAiIgPABQgBgFgBgGQgDgLgTAAQgFAAgIAIQgHAIgFAAQgFAAgEgGQgFgGgFAAQgFAAgNAEQgOADgFAAQgFAAgIAEQgIADgFAAQgEAAgDACQgCABgDgCQgEAFAHAJIgRAOQgCAAgXgNQgPAAgHAGQgKAJgJADQgXgCgNAAQAAACABARQgugBgLACQgOADAAAYQAAAFgDAGQgDAFAAAFIgDABQgRgPAAgFQAAgFAEgBQAEgBAAgFQAAgGgCABIgDACQgNABgOABQgbACAAADIABAOQgVACgDgGQgBgHgBgDIgDgBQgGAAgCABQgBABAAAAQgOACAAACQgBAEgDACQgLgPgEgEQgGgHgLAAQgFAAgFAFQgFAFgEAAQAAABADAFQACAFAAAGQAAAGAAAAQgCABAAABQgGgDgCgFQgBgDgJAAIgKACQAAAAgCAFQgCAEAAADQAEACAJAAQAKADAIALQgLAUgEAGQgLALgRAFQAEAEAaAFQADACgBAFQACAEATAAQAFAAAYgLQACABACAFQADAGAAAHQAAAGgIAEQgJAEgCABQgDgCgHgHQgFgGgFgBQgMALgCACQgCADAAATQAAAGAPALQASAOAQAAQAFAAAEgEQADgEAFAAQAGAAADAFQAFAJACACIAJADQALADASAEQAIAEAAAMQAAALgFAHQgGAHgJAAQgTgHgNAAQgCAAgEACQgDACgGAAQgFAAgFgIQgFgIgFAAQgGAAgFAFQgFAEgBAAQgBAAgFgDQgFgEgGAAQgFAAgJAFQgJAEgFAAIALALQgXAWgVAMQgHADAAAPQAAAEAFAFQAFAFAHgDQACAVAGAEQADACAFACQACADAAAIQABALAMAMQglAggLAJQgagJgNAZQgOAagjgKIgCAHIABATQADAAACACQADACAFAAQAFAAgCgEQgCgEAFAAQAGAAACADQAGAGAEADIAMAEQANAEACADQgCAGgCABQgFADgHAJQgGAFAIADIARAHQA4ACAAADQAAAXAOACQARACAZACQAHABAMAVQAMATAJABQgkAYAMAYQANAbgbAYQhMAbgKAAQhAAAgLgOQgCgTgGgKQgRAJgGAOQgDAIgCAPQgGAXgMAEQgPABgMAFQgIgGgCgDQgGgEAFgCQAMgDAEgDQgMgHgJgBQgKAAgGAAQgGAAgBgDIgBgFQgBgBgVgCQgUgCgCgCQgGgFgGgJQgDgFgLgBQgHgBAAgNQABgJgJAHQgCgFADgHQADgIAAgEQAAgEgFgBQgKgDgPgLQgDgCgDgHQgCgHgBAAQgCAFgBACQgCAEgNAIQgLgMAAABQgBAHgPAAQgGAAgGgDQgGgFgEgCQgGAFgBAGQgEAKAEAYQgOgCgKAAQgKAMgEAAQgJAAgPgXQgNgYgCgDQgaAFgBAAQgSACgHgDQgFAEgDAEQgEAGADAJQgKgCgFgFQgGgHgGgHQgHAQgGALQgLAUgSgNQgFANAAAIQABAGgHALQgBACg2AmQgRgQgNgFQgLgEgFgDQgggUgCgNQAEgJgEgDQgVgGgHgKQgMgOgMAAQgGAAgFACIgEACQAAAOgEADQAWAHAAA5QAAAKgDAFQgEAAgFACQgFACgGAAQgIAAgFgJQgCgGAAgEQAAgFAGgRQAHgUABgDQgogYgFgJQgIgRgGgIQgKgPgOAAQgWAAgGgOQgDgHAAgSQAAgSgdgIQgdgEgBAAQgcANgCAAQgEAAgIgFQgIgGgBAAQgBAAgFAFQgGAGgDAAQgQAAgDgFQgLgYgRgmQgcAYgKAAQgHgEgHAAIgOAIQgMAMAJATQgLAIgGABQgEgOgBgCIgFgCQgPAKgLAEQgPgHgBgBQAAgBgCgFQAQgGACgCIABgFQgIgRgFAAQgIACgHAAQgkAAgEgHIgGgLIgHgBQgEAFAIAXQgGAIgHAFQgGgBAGgJIgPgFQAAABgEAOQgDAJAAAGQAAALgLADQgLADgCAGQAAAEACAHQgBAGgTAHQgdAMgRAPQgFAFgvAAQgCAAgGAKQgHALAAAKQAAAFAFAEQAFADAAAFQAAACgIADQgNAFgQALIgRAUQgTATgKAAIgYgBQAHAOAHAcQAJAkAAAQQAAAGAHAGQAHAFAAAGQAAAGgNAKQgPAMgaAJQAAABAAADQgBADgGAAQgEAAgIgFIgIgGQgUgegVgeQgqg8gIAAQgDAAgHAJQgEAFgIAKQgBABgGADQgGADAAABQAAABgEAJQgCAGAAAGQAAAFAFAHQAEAGAAAFQAAAUgMAEQgRACgJAEQgmANADBrQASgCAKAPQAHALAAANQAAAOgFAEQgDADgKAFQgbAUgdBiQA5AWAZAJQAFADgJAHQAAABAFAKQAGAKAFAFQgDAFgRALQAOATAAAHQAAAGgFACQABADAgAWQADgBABgcQAHAAAWAGQAWAHAiAAQAMAAAWAhQAMAQALASQACACAJAaQAOAlAsA8QgFAHgKAFQgJAFgHAAQgBAAgFgJQgFgIgIAAQgDAAgGAFQgHAHgGAJQAOAJgCABIAVALQAPAHAFAFQAJAHAnAXQAAgJgHgEIAAgCQAAgBAGACQAGABACABIACgBQgGgKgCgDIgBgBQADACADADQADAEAKAGIAAgEQgDgLgJgJIAAgBQABAAAGAHIAIACQgBgDgFgIQgFgIAAgCQAOAKACgEQACACABADQABACABACIAFACQgEgIgBgHEglcgGaQAAgKgDgBIgCADQADADACAFgEgjrAF8IAAADQADADAGADQAEADACAGQACgDABgCQACgDAAgFQAAgFALAOIgBgHQABgBADADQACABACABIAAgGQACAAAGAFQADgDAKgIQANgMAagUQABABgBAEIAAACQAIgPAEgEQAFgCAEgDIgBAJQAGgOABgCIABgBQAOAEAFgBQABADgEAGIACABQAIgOAAgFQAAgCADACQAKAAADgJQABABgEAJQABAGAEgLQAGgQAHgBQAWgBAJgIQAIgHAHAAQAOAAASAMQAOAJADAFQACgBACgEQADgHACgCIAFAAQAAABgBAEQgCAEAAAGQAAAFAIADQAJADAJgDQADABgBAEQgBADgDAAQABABACABQACABAGAAQAGAAABgEIABgIQABABAEANQAHANATgBIABgCQgCgGgGgCIgBgDQAVgCACgBQAGgDAEgQQgCAAAAgBQAAgBAGAAQAEAAALAFQAKAFAKAAQATAAADABQADABAKAIQAGAEABgBQABAAAGATQADAIADABQAFACADAFQgBAFgFAFQgFAEgCAAQAAAAAEAOQACALgPgQIgGAOQABACADAAQAEgBAEgDQgBACACACQABADAAAFQAAgGgDAAQgEACgCAAQAKALADAGQADAGAAAIQAAAFgEAWQgFAWAAAFQAAAJgXAgQgXAgAAAOQAAADAcAQQAeARAMAAQgJAMgMAAQgOAAgWgKQgXgLgaAAQgFAAgdAEQgdAEgFAAQgCAAgJgGQgKgHgDgEQgFAEgHALQgHAIgMAAQgGAAgEgEQgDgFgBgBQgEAZgPAKQgIAFAKAZIgBADQgBAAgCgEQgBgEgGAAQgLAAgFAEQgDADgOAMQACAIgEAJQgBAGASAHQADACAMAPQAOARAFADQAYABAIAKIABADQAHACgKAAQgFAAgMgEQgMgFgFACQgGACgGAFIgGAFQgTAAgDgLQgDgLgbAAQgcgBgfgKQAAABgDAJQgBAHgFgDIgBABQgBADAAAGQAAASACAMQADATAdgDQAigDAOAUQACADgBANQAAANAAABQABABAFABQAEAGADAEQACACADAHQAFANADARQAEANANAJQAGADAGAKQAGALAAAIQAAAKgIAoQAhAAASgFQABABASAkQANAbAFAAQAFAAAKgFQAJgFAFAAQAGAAAGAIQAHAKAAAAQABgFAAgBQABgCAGAAQAbAAAXAfQAAAGgBACQAAACgCACIgBABQgIgLgCgDQgDgFgFgKQAAgCAAAAQgBgBAAAGQAAAEAHAMQAHALAAAEQAAARgkBBQAAAEAGAJQAGAJAAAMQAAAKgHANQAAADArgqIAcgYQAUgHAIgFIA0gNQA2gNAGAAQAIAAAOAIQARAKA0AiIAZAYQAAABAAAIQABAIABADQAkA7AGAFQAEAEAKAGQADADAEAJQAEAIAHAAQAFAAAUgGQAUgGAQABIAAqSIFPhpIAGACIFCDYQAFAFACARQABAIB0CDIAGACQAVgEA8gKQBDgMAGAAQAKAACWAOQAGAAgBAAQgBgBABAAQALgIANgHQAagQAGAAQAEAAAHALQAOAUAZAZQALALASARQAQAUAXAwIAoAAIABAAIAAgUIgBAU");
	this.shape.setTransform(0,0,0.448,0.448);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-66.6,242,133.4);


(lib.logosq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(2,0,1.223,1.223,0,0,0,69.5,12.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvzD0IAAnnIfnAAIAAHngAvnDpIfOAAIAAnQI/OAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.2,-24.5,202.5,49);


(lib.hc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// v3
	this.v3 = new lib.vt3();
	this.v3.setTransform(23,-11,1,1,0,0,0,-13,-7);

	this.timeline.addTween(cjs.Tween.get(this.v3).wait(1));

	// can
	this.instance = new lib.can_1();
	this.instance.setTransform(-10.9,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// v1
	this.v1 = new lib.vt2();
	this.v1.setTransform(27,-62,1,1,0,0,0,-9,7);

	this.timeline.addTween(cjs.Tween.get(this.v1).wait(1));

	// v2
	this.v2 = new lib.vt1();
	this.v2.setTransform(-59.5,-17,1,1,0,0,0,22,4);

	this.timeline.addTween(cjs.Tween.get(this.v2).wait(1));

	// h2
	this.instance_1 = new lib.h2();
	this.instance_1.setTransform(4.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-100.5,234,204);


(lib.hand_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.wht = new lib.wht();
	this.wht.setTransform(14.2,-95.9);
	this.wht.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get(this.wht).wait(1));

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-40.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-190.8,189.9,293.4);


(lib.drsp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DzQgbgGgVgLQgWgKgRgPIghggIAVgVIAfAeIAiAVQAhAQAgAAQAVAAARgHQASgGAOgOQANgPAIgWQAIgWAAgfQAAgdgHgVQgHgWgNgOQgNgMgRgGQgRgHgRAAIgfACIgYAFIgWAGIgRgbIDFi7IiBAAQgVAAgSAFQgQAGgMAKQgYAVAAAnIgWAAIAAg3IADgWQACgKAHgIQAHgIAMgFQAMgGATAAID1AAIAAAhIi0CrIARgCIANAAIAPgBQAZAAAcAIQAcAIAYARQAYAPAQAcQAQAcAAAoQAAAXgFATQgFATgKAOQgSAegcAQQgaAQgeAHQgeAGgUAAQghAAgcgFg");
	this.shape.setTransform(-4.9,-0.3);

	this.instance = new lib.drop();
	this.instance.setTransform(0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-41.9,91.9,83.1);


(lib.cupdr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZA0QgLgEgIgIQgIgIgEgKQgEgLAAgLQAAgLAEgKQAEgLAIgHQAIgIALgFQAMgEANAAQAOAAAMAEQALAFAIAIQAHAGAFAMQAEAKAAALQAAALgEALQgFAMgHAGQgHAIgMAEQgMAFgOAAQgNAAgMgFgAgWgZQgJAKAAAPQAAAQAJAJQAKAKAMAAQANAAAJgKQAKgJAAgQQAAgPgKgKQgIgJgOgBQgMABgKAJg");
	this.shape.setTransform(26.2,-2.5,0.817,0.817);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BeQgXggAAg+QAAg/AagfQAZgeAwAAQAOAAAIACIATAEIAQAGIgCAKIgggFIgQgBQgZAAgQAWQgQAWAAAuIANgJIAQgGQAIgDALAAQAVAAAOAGQAPAGAJALQAIAKAFAOQAEAQAAARQAAAPgGAQQgFANgLANQgKALgQAHQgRAGgUAAQgrAAgWgfgAgNgRIgNAGIgIAHIgDADQAAAcADAVQACATAGAQQAFAOAIAGQAIAGAHAAQAJAAAGgFQAHgFAFgJQAFgKACgLQACgKAAgPQAAgggJgPQgIgQgVAAQgHAAgGACg");
	this.shape_1.setTransform(12.1,3.1,0.817,0.817);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaB3QgNgCgMgGQgHgDgMgJIgQgQIAKgLQARASAPAHQAQAIAQAAQALAAAHgDQAJgCAHgIQAHgHADgLQAEgKAAgQQAAgPgDgKQgEgLgGgGQgGgGgJgDQgIgDgIAAIgPABIgMADIgKACIgJgNIBghcIg+AAQgWAAgLALQgMAKAAATIgLAAIAAgbIABgLQACgFADgEQAEgEAFgCQAHgDAJAAIB3AAIAAAQIhXBVIANgCIAIAAQAMAAAOAEQAOAEALAIQAMAGAIAOQAIAOAAAUQAAAXgKAOQgJAPgNAHQgPAJgNADQgOADgLAAQgPAAgNgDg");
	this.shape_2.setTransform(-4.3,3.4,0.817,0.817);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBjQgOgNAAgaIAAhmIgWAAIAAgQIAWAAIAAggIASgWIAaAAIAAA2IAoAAIAAAQIgoAAIAABoQAAAUAFAHQAFAHAJAAIALgBIAJgDIAJgFIAFAKIgMAIIgOAFQgJADgMAAQgXAAgNgOg");
	this.shape_3.setTransform(-21.5,3.8,0.817,0.817);

	this.instance = new lib.drop();
	this.instance.setTransform(0.2,0.2,0.828,0.828,0,53.5,-126.5,1.3,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-50,98,100.1);


(lib.cup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.drop = new lib.cupdr();
	this.drop.setTransform(2.5,7.6,0.796,0.796,0,0,0,-40.3,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.drop).wait(1));

	// FlashAICB
	this.instance = new lib.water();
	this.instance.setTransform(-100.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-84,201,168);


(lib.cl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cl();
	this.instance.setTransform(1375.2,-65.2,1,1,-20.2);

	this.instance_1 = new lib.cl();
	this.instance_1.setTransform(1141.3,6.5,1,1,180);

	this.instance_2 = new lib.cl();
	this.instance_2.setTransform(847.6,-100.6,1,1,159.8);

	this.instance_3 = new lib.cl();
	this.instance_3.setTransform(1046.2,-197.2,1,1,-20.2);

	this.instance_4 = new lib.cl();
	this.instance_4.setTransform(454.3,-147.7,1,1,180);

	this.instance_5 = new lib.cl();
	this.instance_5.setTransform(223.3,-235.2);

	this.instance_6 = new lib.cl();
	this.instance_6.setTransform(-58.3,-200.2,1,1,159.8);

	this.instance_7 = new lib.cl();
	this.instance_7.setTransform(210.2,-38.4,1,1,-20.2);
	this.instance_7.alpha = 0.449;

	this.instance_8 = new lib.cl();
	this.instance_8.setTransform(-154.6,6.5,1,1,180);
	this.instance_8.alpha = 0.66;

	this.instance_9 = new lib.cl();
	this.instance_9.setTransform(-317.6,-60.5);
	this.instance_9.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-464.6,-339.2,2010.2,439.7);


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ok = new lib.ch();
	this.ok.setTransform(1.8,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.ok).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AiEiEIEJAAIAAEJIkJAAg");
	this.shape.setTransform(-0.9,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-14.8,29.6,30.7);


(lib.cans = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// can
	this.instance = new lib.can_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// can
	this.instance_1 = new lib.can_1();
	this.instance_1.setTransform(54.1,-5.6,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// can
	this.instance_2 = new lib.can_1();
	this.instance_2.setTransform(-57.2,-5.6,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-82,192.9,164);


(lib.alaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn = new lib.alabtn();
	this.btn.setTransform(-1.4,-8.1);

	this.shd = new lib.shdw();
	this.shd.setTransform(0,27.7,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shd},{t:this.btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-34.6,216,75.3);


(lib.ala = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn = new lib.astbtn();
	this.btn.setTransform(-1.4,-7.6);

	this.shd = new lib.shdw();
	this.shd.setTransform(0,27.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shd},{t:this.btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-34.1,216,74.3);


(lib.spoon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spoon.png
	this.instance = new lib.spoon();
	this.instance.setTransform(-123,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.txt = new lib.txtsp();
	this.txt.setTransform(-55.5,47,0.838,0.838);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// drop
	this.drop = new lib.drsp();
	this.drop.setTransform(-52.6,20.9,0.838,0.838,0,0,0,46.5,43.1);

	this.timeline.addTween(cjs.Tween.get(this.drop).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.8,-101,234.8,171.4);


(lib.smll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shd = new lib.shdw();
	this.shd.setTransform(0,18.1,0.7,0.7);

	this.btn = new lib.sml();
	this.btn.setTransform(-1,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.shd}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-37.4,216,68.5);


// stage content:
(lib._250x250_saumal_feb = function(mode,startPosition,loop) {
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
		
		var repeated = false;
		
		var tl = new TimelineMax({repeat: -1, repeatDelay: 0, onRepeat: function(){
			repeated = true;
		}});
		
		var st = g(this.search.st);
		var cans = g(this.cans).reverse();
		var t1 = g(this.t1);
		var t2 = g(this.t2);
		var t3 = g(this.t3);
		var t4 = g(this.t4);
		
		
		var spt = g(this.spoon.txt);
		var vits = [this.hc.v1, this.hc.v2, this.hc.v3]
		
		
		var sp2 = this.spoon2;
		sp2.visible = false;
		
		function shb(btn, shd, cng){
			if (!cng) {
				chng = ''
			}
			tl
			.from(btn, 1, {y:'-=50', ease: Expo.easeOut}, cng)
			.from(btn, .3, {alpha:0}, '-=.9')
			.from(shd, .3, {aplha: 0, scaleX: 0, scaleY:0, ease: Back.easeOyt}, '-=.9')
			
			return tl
		}
		
		tl
		.from(this.search, 1, {alpha:0})
		.staggerFrom(st, .2, {alpha:0, y:'-=2', ease: Expo.easeOut}, .07)
		
		.to(this.search.st, .5, {alpha:0}, '+=.7')
		.from(this.search.logo, 1, {alpha:0, scaleX:'-=.2', scaleY:'-=.2', ease: Back.easeOut}, '-=.3')
		.from(this.hand, .7, {y:'+=200', ease:Expo.easeOut},'+=.3')
		.add('click', '+=.1')
		.to(this.hand, .4, {scaleX:'+=.05', scaleY:'+=.05'}, 'click')
		.from(this.hand.wht, .4, {alhpa: 0, scaleX:'0', scaleY:'0', ease:Back.easeOut}, 'click')
		.to(this.search, .4, {scaleX:'+=.05', scaleY:'+=.05'}, 'click')
		.to([this.search, this.hand], .5, {scaleX:'+=.2', scaleY:'+=.2', alpha:0, ease:Back.easeIn}, '-=.2')
		.add('slide2')
		//.seek('slide2')
		.staggerFrom(cans, .7, {scaleX:'0', scaleY:'0', ease: Back.easeOut}, .1, 'slide2')
		.staggerFrom(t1, .6, {y:'+=20', alpha:0, ease: Back.easeOut}, .03, '-=.5')
		.staggerTo(cans, .4, {x:0, ease: Back.easeIn}, .1, '+=1')
		.to(this.t1, .5, {alpha:0}, '-=.4')
		.from(this.check, .5, {alpha:0}, '-=.2')
		.staggerFrom(t2, .7, {x:'+=100',alpha:0, ease: Expo.easeOut}, .1, '-=.3')
		.from(this.check.ok, .3, { alpha:0}, '-=.6')
		.from(this.check.ok, .6, {scaleX:'+=.7', scaleY:'+=.7', ease:Back.easeOut}, '-=.4')
		.staggerTo([this.cans, this.check, this.t2], .5, {scaleX:'+=.2', scaleY:'+=.2', alpha:0, ease:Back.easeIn},.07, '+=.5')
		.add('slide3')
		//.seek('slide3')
		.to(this.cl, .7, {alpha:.2}, 'slide3')
		.from(this.spoon, .7, {y:'+=200', alpha:0, ease:Expo.easeOut}, 'slide3')
		.from(this.spoon.drop, 1, {scaleX:'0', scaleY:'0',  rotation:'-=95', ease: Back.easeOut}, '-=.6')
		.staggerFrom(spt, 1, {x:'+=100',alpha:0, ease: Expo.easeOut}, .1, '-=.4')
		.to(this.spoon, .9, {x: sp2.x, y: sp2.y, scaleX: sp2.scaleX, scaleY: sp2.scaleY, ease: Back.easeInOut}, '-=.5')
		.from(this.cup, .7, {x:'+=100',alpha:0, ease: Expo.easeOut}, '-=.6')
		.from(this.cup.drop, .8, {scaleX:'0', scaleY:'0',  rotation:'-=95', ease: Back.easeOut}, '-=.4')
		.from(this.plus, .4, {scaleX:'+=.5', scaleY:'+=.5', alpha:0, ease: Back.easeOut}, '-=1')
		.staggerFrom(t3, .7, {x:'+=100',alpha:0, ease: Expo.easeOut}, .1, '-=.5')
		.staggerTo([this.t3, this.spoon, this.plus, this.cup], .4, {x: '-=200', alpha:0, ease: Expo.easeIn}, .1, '+=1')
		.add('slide4')
		//.seek('slide4')
		.from(this.hc, .7, {x:'+=200',alpha:0, ease: Expo.easeOut}, 'slide4')
		.staggerFrom(vits, 1.4, {scaleX:'0', scaleY:'0', x:0, ease: Elastic.easeOut.config(1, .55)}, .2, '-=.2')
		.staggerFrom(t4, .7, {y:'+=20', alpha:0, ease: Back.easeOut}, .1, '-=.5')
		.staggerTo([this.t4, this.hc], .4, {x: '+=200', alpha:0, ease: Expo.easeIn},.2, '+=1')
		.add('slide5')
		//.seek('slide5')
		.to(this.cl, .7, {alpha:.5}, 'slide5')
		.from(this.logosq, 1, {scaleX:'0', scaleY:'0', ease: Elastic.easeOut.config(1, .55)}, 'slide5')
		shb(this.ast.btn, this.ast.shd, '-=.6')
		shb(this.ala.btn, this.ala.shd, '-=.7')
		
		.staggerTo([this.logosq, this.ast, this.ala], .4, {x: '-=200', alpha:0, ease: Expo.easeIn}, .1, '+=2')
		.add('slide6')
		//.seek('slide6')
		.from(this.map, 1, {scaleX:'0', scaleY:'0', ease: Elastic.easeOut.config(1, .55)}, 'slide6')
		shb(this.sml.btn, this.sml.shd, '-=.6')
		.staggerTo([this.map, this.sml], .4, {scaleX:'+=.2', scaleY:'+=.2', alpha:0, ease:Back.easeIn}, .1, '+=3')
		.to(this.cl, tl.duration(), {x:'0', ease: Linear.easeNone}, 0);
		
		console.log(tl.duration())
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// map
	this.map = new lib.map();
	this.map.setTransform(125,84.7);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	// sml
	this.sml = new lib.smll();
	this.sml.setTransform(129,128.3,1,1,0,0,0,4,-83);

	this.timeline.addTween(cjs.Tween.get(this.sml).wait(1));

	// ala
	this.ala = new lib.alaa();
	this.ala.setTransform(127.5,196.5);

	this.timeline.addTween(cjs.Tween.get(this.ala).wait(1));

	// ast
	this.ast = new lib.ala();
	this.ast.setTransform(127.5,129.2);

	this.timeline.addTween(cjs.Tween.get(this.ast).wait(1));

	// logosq
	this.logosq = new lib.logosq();
	this.logosq.setTransform(125.1,53.5,0.591,0.591,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logosq).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(125,223.1);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// hc
	this.hc = new lib.hc();
	this.hc.setTransform(134,105.5);

	this.timeline.addTween(cjs.Tween.get(this.hc).wait(1));

	// plus
	this.plus = new lib.plus();
	this.plus.setTransform(125,105.5);

	this.timeline.addTween(cjs.Tween.get(this.plus).wait(1));

	// cup
	this.cup = new lib.cup();
	this.cup.setTransform(174.5,98);

	this.timeline.addTween(cjs.Tween.get(this.cup).wait(1));

	// t3
	this.t3 = new lib.Е3();
	this.t3.setTransform(64,50.3);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// spoon2
	this.spoon2 = new lib.spoon_1();
	this.spoon2.setTransform(115.6,176.6,0.806,0.806,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.spoon2).wait(1));

	// spoon
	this.spoon = new lib.spoon_1();
	this.spoon.setTransform(136.5,146.4);

	this.timeline.addTween(cjs.Tween.get(this.spoon).wait(1));

	// check
	this.check = new lib.check();
	this.check.setTransform(124.9,119.6,1,1,0,0,0,100.4,-99.3);

	this.timeline.addTween(cjs.Tween.get(this.check).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(125,119.1,1,1,0,0,0,-18.9,-101);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(125,215.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// cans
	this.cans = new lib.cans();
	this.cans.setTransform(126.6,109,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.cans).wait(1));

	// search
	this.search = new lib.search();
	this.search.setTransform(125,125,0.615,0.615,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.search).wait(1));

	// hand
	this.hand = new lib.hand_1();
	this.hand.setTransform(134.2,127,1,1,0,0,0,15.3,-96.9);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// cl1
	this.cl = new lib.cl1();
	this.cl.setTransform(2287.6,188.7,1,1,0,0,0,1572.9,-76);
	this.cl.alpha = 0.98;

	this.timeline.addTween(cjs.Tween.get(this.cl).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,181,235,0)","#1F5E8D"],[0,1],0,39.1,0,0,39.1,189.7).s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(125,125);
	this.instance.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,50.5,2260.2,439.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;