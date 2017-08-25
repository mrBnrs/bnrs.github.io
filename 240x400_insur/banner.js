(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,86);


(lib.home = function() {
	this.initialize(img.home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,55);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,124);


(lib.ppl = function() {
	this.initialize(img.ppl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,60);


(lib.smc = function() {
	this.initialize(img.smc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,16);


(lib.sph = function() {
	this.initialize(img.sph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,25);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,25);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.url = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AggAsIAAgLIAuhAIguAAIAAgMIBAAAIAAALIgvBAIAwAAIAAAMg");
	this.shape.setTransform(61.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAVA8IgegnIgPAOIAAAZIgNAAIAAh3IANAAIAABPIAtguIARAAIgmAmIAmAwg");
	this.shape_1.setTransform(53.1,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(45.9,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSArQgJgEgGgHIAGgKQAFAFAIAEQAHADAIABQAKAAAFgFQAGgEAAgGQAAgGgFgCQgDgDgHgCIgLgDIgOgEQgFgCgFgFQgDgFAAgHQAAgGACgEQACgFAEgDQAFgEAGgCQAFgBAHAAIALAAQAEABAFACQAHAEAGAFIgHAJQgEgEgHgEQgGgDgJAAQgIAAgFAFQgFAEAAAFQAAAEAEADIAKAFIAMADQAHABAGADQAGACAEAFQAEAFgBAIQAAAGgBAEQgDAFgEAEQgEAEgHACQgGACgJAAQgJgBgJgCg");
	this.shape_3.setTransform(39.5,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgGA7IAAhWIANAAIAABWgAgFgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_4.setTransform(33.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_5.setTransform(29.4,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgRAqQgIgDgGgGQgFgHgDgIQgDgJAAgJQAAgIADgJQADgIAFgHQAGgFAIgEQAIgDAJAAQAKAAAIADQAIAEAFAFQAGAHADAIQADAJAAAIQAAAJgDAJQgDAIgGAHQgFAGgIADQgIADgKABQgJgBgIgDgAgMgeQgFADgEAEQgDAFgCAHQgCAGAAAFQAAAHACAFQACAHADAFQAEAEAFADQAGADAGAAQAHAAAFgDQAFgDAEgEQAEgFACgHQABgFABgHQgBgFgBgGQgCgHgEgFQgEgEgFgDQgFgCgHgBQgGABgGACg");
	this.shape_6.setTransform(22.3,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgoA9IAAh3IAOAAIAAANQAEgGAIgFIAIgDIAIgBQAJAAAHADQAHADAFAGQAFAGADAIQADAJAAAKQAAALgDAIQgDAIgFAGQgFAGgHADQgHADgJAAQgIAAgHgEQgIgEgFgHIAAAugAgQgsQgHAEgDAGIAAAmQADAGAHAEQAIAEAIAAQAFAAAFgCQAGgDADgFQAEgEACgFQACgGAAgIQAAgHgCgGQgCgGgEgEQgDgFgGgDQgFgCgFAAQgIAAgIAEg");
	this.shape_7.setTransform(12.3,8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgGA7IAAhWIANAAIAABWgAgFgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_8.setTransform(4.8,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgRAqQgIgDgGgGQgFgHgDgIQgDgJAAgJQAAgIADgJQADgIAFgHQAGgFAIgEQAIgDAJAAQAKAAAIADQAIAEAFAFQAGAHADAIQADAJAAAIQAAAJgDAJQgDAIgGAHQgFAGgIADQgIADgKABQgJgBgIgDgAgLgeQgGADgDAEQgEAFgCAHQgCAGAAAFQAAAHACAFQACAHAEAFQADAEAGADQAFADAGAAQAHAAAFgDQAGgDADgEQAEgFACgHQACgFgBgHQABgFgCgGQgCgHgEgFQgDgEgGgDQgFgCgHgBQgGABgFACg");
	this.shape_9.setTransform(-2.3,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAuAtIAAg7QAAgIgEgEQgEgGgIAAQgHAAgHAFQgGAEgDAFIAAA/IgNAAIAAg7QAAgIgEgEQgDgGgJAAQgHAAgGAFQgGAEgEAFIAAA/IgNAAIAAhXIANAAIAAANIAEgFIAHgFIAIgDQAEgCAFABQAKAAAGAEQAFAFACAHIAFgGIAGgGIAJgDQAEgCAFABQAMAAAGAGQAGAHAAANIAAA+g");
	this.shape_10.setTransform(-14.7,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(-24,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAXAsIgXhGIgWBGIgNAAIgchXIAOAAIAWBFIAWhFIALAAIAXBFIAVhFIAOAAIgcBXg");
	this.shape_12.setTransform(-32.6,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAXAsIgXhGIgVBGIgOAAIgchXIAOAAIAWBFIAWhFIALAAIAWBFIAWhFIAOAAIgcBXg");
	this.shape_13.setTransform(-45.8,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAXAsIgXhGIgVBGIgOAAIgchXIAOAAIAVBFIAYhFIAKAAIAXBFIAVhFIAOAAIgcBXg");
	this.shape_14.setTransform(-59,6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1,2,0,3).p("AqSAAIUlAA");
	this.shape_15.setTransform(0,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.url, new cjs.Rectangle(-77.5,-7.5,155,25.9), null);


(lib.t23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAsIAAhDIgtBDIgNAAIAAhWIANAAIAABBIAthBIANAAIAABWg");
	this.shape.setTransform(81.2,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAsIgegoIgPAPIAAAZIgNAAIAAhWIANAAIAAAtIAtgtIARAAIgmAnIAmAvg");
	this.shape_1.setTransform(72.2,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAvAAQAGgBAEACQAFABADAEQAHAGgBAKQABAHgFAGQgEAFgFACIAGACIAEAEIAEAGIABAIQAAAFgCAFQgBADgDAEIgJAFQgEACgGAAgAgWAfIAfAAQAGABAFgEQADgDAAgHQAAgFgDgEQgEgEgHAAIgfAAgAgWgGIAeAAQAHAAADgDQADgEABgFQgBgGgDgDQgDgDgHgBIgeAAg");
	this.shape_2.setTransform(62.1,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAqQgIgDgGgHQgFgGgDgIQgDgJAAgJQAAgIADgJQADgIAFgHQAGgFAIgEQAIgEAJABQAKgBAIAEQAIAEAFAFQAGAHADAIQADAJAAAIQAAAJgDAJQgDAIgGAGQgFAHgIADQgIADgKABQgJgBgIgDgAgMgeQgFADgEAEQgDAFgCAGQgCAHAAAFQAAAHACAFQACAHADAEQAEAFAFADQAGACAGAAQAHAAAFgCQAFgDAEgFQAEgEACgHQABgFABgHQgBgFgBgHQgCgGgEgFQgEgEgFgDQgFgCgHgBQgGABgGACg");
	this.shape_3.setTransform(52,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAsIgagkIgZAkIgQAAIAigsIgggqIAQAAIAXAhIAYghIAQAAIggAqIAiAsg");
	this.shape_4.setTransform(42.5,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAsQgGgCgDgDQgFgFgDgEQgCgGAAgHQAAgHACgGQADgEAFgEQADgEAGgBQAFgCAGAAQAIAAAIADQAGADAGAFIAAgOQAAgKgGgEQgEgCgDgCQgEgBgFAAQgHAAgHADQgGADgGAGIgGgJQAOgOATAAQAIAAAGABQAGACAFADQAEADADAGQADAGAAAIIAAA7IgOAAIAAgLQgLAMgRABIgLgCgAgJAAQgEAAgCADQgGAFgBAJQABAJAGAEQACADAEACQAEABAFAAQAGAAAGgDQAHgDAEgFIAAgQQgEgFgHgDQgGgCgGAAQgFAAgEABg");
	this.shape_5.setTransform(33.2,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA9IAAh3IAOAAIAAANQAEgHAIgEIAIgDIAIgBQAJAAAHADQAHADAFAGQAFAGADAIQADAJAAAKQAAALgDAHQgDAJgFAGQgFAGgHADQgHADgJAAQgIAAgHgEQgIgEgFgHIAAAugAgQgsQgHAEgDAGIAAAmQADAGAHAEQAIAEAIAAQAFAAAFgCQAGgDADgEQAEgFACgFQACgGAAgIQAAgHgCgGQgCgGgEgEQgDgFgGgCQgFgDgFAAQgIAAgIAEg");
	this.shape_6.setTransform(23.8,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAsIAAhLIgZAAIAAgLIA/AAIAAALIgZAAIAABLg");
	this.shape_7.setTransform(14.8,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgGgHQgFgFgEgJQgDgIAAgKQAAgJADgIQAEgIAFgHQAGgFAIgEQAIgEAJABQAMAAAHADQAIAFAEAGIgJAJQgEgGgFgDQgGgCgGgBQgHABgFACQgFACgFAFQgDAFgCAFQgCAHAAAGQAAAHACAGQACAHADAEQAFAEAFADQAFACAHAAQAOABAHgMIAJAIQgEAHgIAEQgHAFgMAAQgJgBgIgDg");
	this.shape_8.setTransform(6.9,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXAsIAAhDIgtBDIgNAAIAAhWIANAAIAABBIAthBIANAAIAABWg");
	this.shape_9.setTransform(-7.2,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAsIAAhLIgZAAIAAgLIA/AAIAAALIgZAAIAABLg");
	this.shape_10.setTransform(-15.8,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgGgHQgFgFgEgJQgDgIAAgKQAAgJADgIQAEgIAFgHQAGgFAIgEQAIgEAJABQAMAAAHADQAIAFAEAGIgJAJQgEgGgFgDQgGgCgGgBQgHABgFACQgFACgFAFQgEAFgBAFQgCAHAAAGQAAAHACAGQABAHAEAEQAFAEAFADQAFACAHAAQAOABAHgMIAJAIQgEAHgIAEQgHAFgMAAQgJgBgIgDg");
	this.shape_11.setTransform(-23.7,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAqQgIgDgFgHQgGgGgDgIQgDgJAAgJQAAgIADgJQADgIAGgHQAFgFAIgEQAIgEAJABQAKgBAIAEQAIAEAGAFQAFAHADAIQADAJAAAIQAAAJgDAJQgDAIgFAGQgGAHgIADQgIADgKABQgJgBgIgDgAgMgeQgFADgEAEQgDAFgCAGQgCAHAAAFQAAAHACAFQACAHADAEQAEAFAFADQAGACAGAAQAHAAAGgCQAEgDAFgFQADgEACgHQACgFAAgHQAAgFgCgHQgCgGgDgFQgFgEgEgDQgGgCgHgBQgGABgGACg");
	this.shape_12.setTransform(-33.4,23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfAsIAAhEIgcBEIgEAAIgdhEIAABEIgNAAIAAhWIASAAIAZA/IAag/IASAAIAABWg");
	this.shape_13.setTransform(-44.3,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXAsIAAhDIgtBDIgNAAIAAhWIANAAIAABBIAthBIANAAIAABWg");
	this.shape_14.setTransform(-55,23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAqQgIgDgFgHQgGgGgDgIQgDgJAAgJQAAgIADgJQADgIAGgHQAFgFAIgEQAIgEAJABQAKgBAIAEQAIAEAGAFQAFAHADAIQADAJAAAIQAAAJgDAJQgDAIgFAGQgGAHgIADQgIADgKABQgJgBgIgDgAgLgeQgGADgDAEQgEAFgCAGQgCAHAAAFQAAAHACAFQACAHAEAEQADAFAGADQAFACAGAAQAHAAAGgCQAEgDAFgFQADgEACgHQABgFAAgHQAAgFgBgHQgCgGgDgFQgFgEgEgDQgGgCgHgBQgGABgFACg");
	this.shape_15.setTransform(-65.1,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAsIAAhLIgZAAIAAgLIA/AAIAAALIgZAAIAABLg");
	this.shape_16.setTransform(-73.8,23.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgGgHQgFgFgEgJQgDgIAAgKQAAgJADgIQAEgIAFgHQAGgFAIgEQAIgEAJABQAMAAAHADQAIAFAEAGIgJAJQgEgGgFgDQgGgCgGgBQgHABgFACQgFACgFAFQgEAFgBAFQgCAHAAAGQAAAHACAGQABAHAEAEQAFAEAFADQAFACAHAAQAOABAHgMIAJAIQgEAHgIAEQgHAFgMAAQgJgBgIgDg");
	this.shape_17.setTransform(-81.7,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFArIAAhJIgaAAIAAgMIA/AAIAAAMIgZAAIAABJg");
	this.shape_18.setTransform(64.5,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgGgFQgFgHgDgJQgDgHAAgKQAAgIADgJQADgIAFgGQAGgHAIgDQAIgEAJAAQAKAAAIAEQAIADAFAHQAGAGADAIQADAJAAAIQAAAKgDAHQgDAJgGAHQgFAFgIAEQgIADgKAAQgJAAgIgDgAgLgeQgGADgDAFQgEAEgCAGQgCAGAAAGQAAAGACAHQACAGAEAEQADAFAGADQAFADAGgBQAHABAFgDQAGgDADgFQAEgEACgGQACgHgBgGQABgGgCgGQgCgGgEgEQgDgFgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_19.setTransform(55.8,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUA8QgGgCgEgEQgDgEgCgGQgDgFAAgGQAAgHADgFQACgGADgEQAEgEAGgCQAFgCAGAAQAHAAAFACQAFACAEAEQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEIgJAGQgFACgHAAQgGAAgFgCgAAYAOIgGAEQgFAGAAAJIABAIIAEAGQACADAEACQADABAEAAQAEAAAEgBQADgCACgDIAEgGIACgIQAAgJgGgGIgFgEQgEgCgEAAQgEAAgDACgAgqA8IBMh3IAKAAIhMB3gAgqgEQgFgCgEgEIgGgJQgCgGAAgGQAAgGACgGIAGgKQAEgDAFgDQAFgCAHAAQAGAAAGACQAFADAEADQAEAFACAFQACAGAAAGQAAAGgCAGQgCAFgEAEQgEAEgFACQgGACgGABQgHgBgFgCgAgmgyQgDABgCADQgDADgBAEQgBADAAAFQAAAEABAEQABAEADACQAFAHAIAAQAEgBADgBIAGgFQACgCACgEIABgIQAAgJgFgGQgDgDgDgBQgDgBgEgBQgEABgEABg");
	this.shape_20.setTransform(39.4,-0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA9QgEgBgFgEQgFgCgDgEIgGgIQgGgJgCgLQgDgLAAgLQAAgKADgLQACgLAGgJQAFgJAJgFIAJgFQAGgBAFAAQAGAAAGABQAFACAEADQAJAFAFAJQAGAJACALQADALAAAKQAAALgDALQgCALgGAJIgGAIQgDAEgFACQgEAEgFABIgMABIgLgBgAgNgsQgGAFgDAGQgFAHgBAJQgBAJgBAIIACASQABAIAFAIQADAGAGAEQAFAFAIAAQAJAAAFgFQAGgEAEgGQAEgIABgIIACgSQgBgIgBgJQgBgJgEgHQgEgGgGgFQgFgDgJAAQgIAAgFADg");
	this.shape_21.setTransform(27.4,-0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNA9IgMgFIgKgGIgHgHIAJgKQAFAHAJAEIAKADQAEACAFAAQAGAAAFgCQAGgBADgDQAEgDACgFQACgEAAgEQAAgGgCgEQgCgEgEgDQgEgDgGAAQgFgCgGAAIgHAAIgFAAIAAgNIAFABIAHAAQAFAAAFgCQAFgBAEgCIAGgGQACgEAAgFQAAgFgCgEQgCgEgEgDQgEgCgFgBIgJgBQgKgBgHAEQgIAEgHAHIgIgKQAHgHAKgFIALgFQAGgBAGAAQAJAAAHACQAIADAFADQAGAEADAGQADAHAAAHQAAAHgDAEQgCAFgEAEIgIAGIgJACIAJABQAFACAEAEQAEADADAGQADAGAAAGQAAAIgDAHQgDAGgGAFQgFAEgIADQgIACgKAAQgGAAgHgBg");
	this.shape_22.setTransform(16.6,-0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgFgFQgGgHgDgJQgDgHAAgKQAAgIADgJQADgIAGgGQAFgHAIgDQAIgEAJAAQAKAAAIAEQAIADAGAHQAFAGADAIQADAJAAAIQAAAKgDAHQgDAJgFAHQgGAFgIAEQgIADgKAAQgJAAgIgDgAgMgeQgFADgEAFQgDAEgCAGQgCAGAAAGQAAAGACAHQACAGADAEQAEAFAFADQAGADAGgBQAHABAGgDQAEgDAFgFQADgEACgGQACgHAAgGQAAgGgCgGQgCgGgDgEQgFgFgEgDQgGgCgHAAQgGAAgGACg");
	this.shape_23.setTransform(2.2,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAhA3IAAgXIhBAAIAAAXIgNAAIAAghQADgBACgCIAFgFIADgKIADgPIAGgqIA7AAIAABKIAKAAIAAAigAgPgJQgCALgDAIQgDAHgFAEIAzAAIAAg+IgiAAg");
	this.shape_24.setTransform(-8.1,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfA9IgGgBIADgVIAEABIAEABQAEAAADgCQADgBACgDIADgIIgjhXIAYAAIAWA8IAWg8IAZAAIgpBkQgFAMgHAFQgIAEgMAAg");
	this.shape_25.setTransform(-22.2,3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANArIgWghIgKALIAAAWIgWAAIAAhVIAWAAIAAAmIAggmIAcAAIgiAnIAjAug");
	this.shape_26.setTransform(-31,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASArIAAhBIgjAAIAABBIgXAAIAAhVIBRAAIAABVg");
	this.shape_27.setTransform(-41.6,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfA9IgGgBIADgVIAEABIAEABQAEAAADgCQADgBACgDIADgIIgjhXIAYAAIAWA8IAWg8IAZAAIgpBkQgFAMgHAFQgIAEgMAAg");
	this.shape_28.setTransform(-51.4,3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOArIgXghIgKALIAAAWIgXAAIAAhVIAXAAIAAAmIAggmIAcAAIgiAnIAkAug");
	this.shape_29.setTransform(-60.2,1.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAsIgJgCQgJgEgGgGQgGgGgDgJQgDgHAAgKQAAgIADgJQADgIAGgGQAGgGAJgEIAJgDIAJgBIAKABIAJADQAJAEAGAGQAGAGADAIQADAJAAAIQAAAKgDAHQgDAJgGAGQgGAGgJAEIgJACIgKABgAgJgWQgEACgDADIgEAIQgBAFAAAEQAAAFABAFQACAEACADIAHAGQAEACAFAAQAFAAAEgCQAFgCACgEQADgDACgEIABgKQAAgEgBgFQgCgEgDgEQgCgDgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_30.setTransform(-70.8,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASArIAAhBIgjAAIAABBIgXAAIAAhVIBRAAIAABVg");
	this.shape_31.setTransform(-81.1,1.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAsQgFgCgFgEQgEgDgDgGQgCgEAAgIQAAgIACgFQADgEAEgEQAFgDAFgCQAGgBAFAAQAIAAAHACQAHADAEAFIAAgLQAAgHgFgEQgFgEgIAAQgOAAgLAKIgJgPIAJgGIAJgFQAKgDAJAAQAIABAGABQAHABAGAFQAFADADAHQADAGAAAKIAAA3IgXAAIAAgJQgEAFgHADQgHACgIAAIgLgBgAgMAIQgEADAAAGQAAAGAEAEQAFADAHAAQAFAAAEgCQAFgCADgDIAAgLQgDgEgFgCQgEgBgFAAQgHAAgFADg");
	this.shape_32.setTransform(76.4,-20.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYAqIgJgFIgHgFIAKgPQAGAGAIACQAIADAIgBQAIABAFgDQAEgDAAgEQAAgFgFgDQgFgCgIAAIgSAAIAAgQIASAAQARAAAAgKQAAgDgFgDQgFgCgHgBQgIABgHACQgHADgFAEIgLgNQAGgGAKgFIAKgDIALgBQATABALAGQAGADADAFQACADAAAHQAAAEgBADQgCADgEADIgHAFIgIACIAIAAIAIAFQADACADAEQACAEAAAEQAAAHgDAEQgDAFgFADQgGAEgHACQgIACgJgBQgNAAgLgDg");
	this.shape_33.setTransform(67.1,-20.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPArQgJgEgGgGQgHgGgDgIQgDgJAAgKQAAgJADgIQADgIAGgHQAGgGAIgDQAJgDAJgBQAJABAIADQAIADAGAGQAGAHADAJQADAJAAAJIAAAGIhAAAQACAHAGAGQAGAHALgBIAFAAIAHgCIAGgCIAFgEIAKAPQgHAGgJADQgKACgKAAQgJAAgIgCgAAWgHIgBgHIgEgGIgHgFQgEgCgFAAQgFAAgEACQgEACgCADIgEAGIgCAHIAqAAg");
	this.shape_34.setTransform(53.2,-20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AASAsIAAg2IgkA2IgWAAIAAhXIAXAAIAAA0IAjg0IAXAAIAABXg");
	this.shape_35.setTransform(43,-20.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAsIAAgjIgjAAIAAAjIgXAAIAAhXIAXAAIAAAhIAjAAIAAghIAXAAIAABXg");
	this.shape_36.setTransform(32.6,-20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPArQgJgEgGgGQgHgGgDgIQgDgJAAgKQAAgJADgIQADgIAGgHQAGgGAIgDQAJgDAJgBQAJABAIADQAIADAGAGQAGAHADAJQADAJAAAJIAAAGIhAAAQACAHAGAGQAGAHALgBIAFAAIAHgCIAGgCIAFgEIAKAPQgHAGgJADQgKACgKAAQgJAAgIgCgAAWgHIgBgHIgEgGIgHgFQgEgCgFAAQgFAAgEACQgEACgCADIgEAGIgCAHIAqAAg");
	this.shape_37.setTransform(22.5,-20.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaA2IAAgVIg0AAIAAAVIgWAAIAAgoIAEgCIAEgEIADgIIACgLIAGgrIBFAAIAABDIAKAAIAAApgAgMgKQgBAIgDAFQgCAGgEAEIAnAAIAAgvIgaAAg");
	this.shape_38.setTransform(12.2,-19.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAnAsIgXgiIgFAFIAAAdIgVAAIAAgdIgFgFIgXAiIgcAAIAjgvIgigoIAcAAIAbAgIAAggIAVAAIAAAgIAbggIAdAAIgjAoIAkAvg");
	this.shape_39.setTransform(0.2,-20.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAsQgFgCgFgEQgEgDgDgGQgCgEAAgIQAAgIACgFQADgEAEgEQAFgDAFgCQAGgBAFAAQAIAAAHACQAHADAEAFIAAgLQAAgHgFgEQgFgEgIAAQgOAAgLAKIgJgPIAJgGIAJgFQAKgDAJAAQAIABAGABQAHABAGAFQAFADADAHQADAGAAAKIAAA3IgXAAIAAgJQgEAFgHADQgHACgIAAIgLgBgAgMAIQgEADAAAGQAAAGAEAEQAFADAHAAQAFAAAEgCQAFgCADgDIAAgLQgDgEgFgCQgEgBgFAAQgHAAgFADg");
	this.shape_40.setTransform(-11.7,-20.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgrA9IAAh3IAWAAIAAALQAFgGAHgDQAHgEAHAAQAJAAAHADQAHADAFAGQAFAFADAJQADAJAAALQAAAKgDAIQgDAIgFAGQgFAGgHADQgHADgJAAQgGAAgHgDQgHgDgGgHIAAAsgAgMglQgGADgDAEIAAAeQADAEAGADQAGADAFAAQAJAAAGgHQAGgHABgKQgBgMgGgHQgDgDgEgCQgDgCgFABQgFgBgGADg");
	this.shape_41.setTransform(-21.2,-19.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghAsIAAhXIBDAAIAAAUIgsAAIAABDg");
	this.shape_42.setTransform(-30.4,-20.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAsQgFgCgFgEQgEgDgDgGQgCgEAAgIQAAgIACgFQADgEAEgEQAFgDAFgCQAGgBAFAAQAIAAAHACQAHADAEAFIAAgLQAAgHgFgEQgFgEgIAAQgOAAgLAKIgJgPIAJgGIAJgFQAKgDAJAAQAIABAGABQAHABAGAFQAFADADAHQADAGAAAKIAAA3IgXAAIAAgJQgEAFgHADQgHACgIAAIgLgBgAgMAIQgEADAAAGQAAAGAEAEQAFADAHAAQAFAAAEgCQAFgCADgDIAAgLQgDgEgFgCQgEgBgFAAQgHAAgFADg");
	this.shape_43.setTransform(-40.1,-20.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AASAsIAAgjIgjAAIAAAjIgXAAIAAhXIAXAAIAAAhIAjAAIAAghIAXAAIAABXg");
	this.shape_44.setTransform(-49.9,-20.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAqIgJgFIgHgFIAKgPQAGAGAIACQAIADAIgBQAIABAFgDQAEgDAAgEQAAgFgFgDQgFgCgIAAIgSAAIAAgQIASAAQARAAAAgKQAAgDgFgDQgFgCgHgBQgIABgHACQgHADgFAEIgLgNQAGgGAKgFIAKgDIALgBQATABALAGQAGADADAFQACADAAAHQAAAEgBADQgCADgEADIgHAFIgIACIAIAAIAIAFQADACADAEQACAEAAAEQAAAHgDAEQgDAFgFADQgGAEgHACQgIACgJgBQgNAAgLgDg");
	this.shape_45.setTransform(-59.8,-20.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJAsIgJgCQgJgDgGgHQgGgGgDgJQgDgIAAgJQAAgIADgJQADgIAGgGQAGgGAJgEIAJgDIAJgBIAKABIAJADQAJAEAGAGQAGAGADAIQADAJAAAIQAAAJgDAIQgDAJgGAGQgGAHgJADIgJACIgKABgAgJgWQgEACgDADIgEAIQgBAFAAAEIABAKQACAFACACIAHAHQAEACAFAAQAFAAAEgCQAFgDACgEQADgCACgFIABgKQAAgEgBgFQgCgEgDgEQgCgDgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_46.setTransform(-69.3,-20.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgxA8IAAh3IA+AAQAJAAAGACQAHADAEAEQAEAEACAGQADAFAAAGQAAAHgCAEQgCAEgCAEIgHAGIgIADQAFABAEACIAIAGQACADACAGQACAFAAAGQAAAGgCAGQgDAGgEAEQgEAFgHACQgGADgJAAgAgYAmIAhAAQAHAAAEgEQAEgEAAgGQAAgGgEgEQgEgEgHAAIghAAgAgYgLIAgAAQAGAAAEgEQADgDAAgGQAAgGgDgDQgEgEgGAAIggAAg");
	this.shape_47.setTransform(-80.1,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t23, new cjs.Rectangle(-88.3,-34.8,176.7,69.7), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASA8IAAg3IgkA3IgWAAIAAhWIAXAAIAAAzIAjgzIAXAAIAABWgAgRgnQgIgEgGgHIAKgJQAEAFAFAEQAGADAGgBQAHABAFgDQAGgEADgFIAKAJQgFAHgIAEQgEADgFAAIgJABQgJABgIgFg");
	this.shape.setTransform(83.8,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAsIAAg2IgkA2IgWAAIAAhWIAXAAIAAAzIAjgzIAXAAIAABWg");
	this.shape_1.setTransform(73.4,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAsIAAgjIgjAAIAAAjIgXAAIAAhWIAXAAIAAAfIAjAAIAAgfIAXAAIAABWg");
	this.shape_2.setTransform(63,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAsQgFgCgFgDQgEgEgDgFQgCgFAAgIQAAgHACgGQADgFAEgDQAFgDAFgBQAGgCAFgBQAIABAHADQAHACAEAFIAAgMQAAgGgFgEQgFgEgIAAQgOAAgLALIgJgQIAJgGIAJgFQAKgCAJAAQAIAAAGABQAHABAGAEQAFAFADAGQADAGAAAJIAAA4IgXAAIAAgJQgEAEgHADQgHAEgIAAIgLgCgAgMAIQgEADAAAHQAAAFAEAEQAFADAHAAQAFAAAEgBQAFgCADgFIAAgKQgDgEgFgCQgEgBgFgBQgHAAgFAEg");
	this.shape_3.setTransform(52.6,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAsIAAhDIgjAAIAABDIgXAAIAAhWIBRAAIAABWg");
	this.shape_4.setTransform(42.8,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAsIAAg4IgXA4IgJAAIgYg4IAAA4IgWAAIAAhWIAeAAIAUAzIAVgzIAeAAIAABWg");
	this.shape_5.setTransform(31.4,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAtIgJgDQgJgDgGgHQgGgGgDgIQgDgJAAgJQAAgIADgIQADgJAGgGQAGgGAJgEIAJgCIAJgBIAKABIAJACQAJAEAGAGQAGAGADAJQADAIAAAIQAAAJgDAJQgDAIgGAGQgGAHgJADIgJADIgKABgAgJgWQgEACgDAEIgEAIQgBAEAAAEIABAKQACAEACAEIAHAFQAEACAFABQAFgBAEgCQAFgCACgDQADgEACgEIABgKQAAgEgBgEQgCgFgDgDQgCgEgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_6.setTransform(20,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAsIgXgiIgKALIAAAXIgWAAIAAhWIAWAAIAAAmIAggmIAcAAIgiAnIAjAvg");
	this.shape_7.setTransform(10.6,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgTAeIgZAAIAfgsIgdgqIAZAAIARAbIASgbIAaAAIgeAqIAfAsg");
	this.shape_8.setTransform(-3.9,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjAsIAAhWIAYAAIAABWgAg5AsIAAhWIAWAAIAAAdIAeAAQAGAAAGACQAGADADAEQAFAEACAEQABAFAAAGQAAAGgCAFQgCAFgEAEQgDAEgHACQgFADgGAAgAgjAYIAaAAQAFAAADgDQACgCAAgEQAAgEgCgDQgDgDgFAAIgaAAg");
	this.shape_9.setTransform(-15.4,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpAsIAAhWIA2AAQAHAAAFABQAFACADAEIAFAGQACAFAAAEQAAAIgEAFQgFAFgGACQAHAAAFAGQAFAGAAAIQAAAKgHAHQgEADgFACQgFACgGAAgAgSAZIAbAAQAEAAADgDQACgCAAgDQAAgDgCgDQgCgCgFAAIgbAAgAgSgJIAbAAQADAAADgCQACgCAAgDQAAgDgCgDQgDgCgDAAIgbAAg");
	this.shape_10.setTransform(-27.6,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAtIgJgDQgJgDgGgHQgGgGgDgIQgDgJAAgJQAAgIADgIQADgJAGgGQAGgGAJgEIAJgCIAJgBIAKABIAJACQAJAEAGAGQAGAGADAJQADAIAAAIQAAAJgDAJQgDAIgGAGQgGAHgJADIgJADIgKABgAgJgWQgEACgDAEIgEAIQgBAEAAAEIABAKQACAEACAEIAHAFQAEACAFABQAFgBAEgCQAFgCACgDQADgEACgEIABgKQAAgEgBgEQgCgFgDgDQgCgEgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_11.setTransform(-38,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgTAeIgZAAIAfgsIgdgqIAZAAIARAbIASgbIAaAAIgeAqIAfAsg");
	this.shape_12.setTransform(-47.7,23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAsQgFgCgFgDQgEgEgDgFQgCgFAAgIQAAgHACgGQADgFAEgDQAFgDAFgBQAGgCAFgBQAIABAHADQAHACAEAFIAAgMQAAgGgFgEQgFgEgIAAQgOAAgLALIgJgQIAJgGIAJgFQAKgCAJAAQAIAAAGABQAHABAGAEQAFAFADAGQADAGAAAJIAAA4IgXAAIAAgJQgEAEgHADQgHAEgIAAIgLgCgAgMAIQgEADAAAHQAAAFAEAEQAFADAHAAQAFAAAEgBQAFgCADgFIAAgKQgDgEgFgCQgEgBgFgBQgHAAgFAEg");
	this.shape_13.setTransform(-57.4,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrA9IAAh3IAXAAIAAALQAFgGAGgDQAIgEAHAAQAIAAAHADQAHADAFAFQAGAHACAIQADAIAAALQAAALgDAIQgCAJgGAFQgFAGgHADQgHADgIAAQgHAAgHgDQgHgDgFgHIAAAsgAgMglQgFADgDAEIAAAeQADAEAFADQAGADAFAAQAJAAAHgHQAFgHAAgLQAAgLgFgHQgEgEgEgBQgEgCgEAAQgFAAgGADg");
	this.shape_14.setTransform(-66.9,24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAsIAAhDIgZAAIAAgTIBHAAIAAATIgYAAIAABDg");
	this.shape_15.setTransform(-76.3,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAqQgJgDgHgGQgFgGgEgIQgDgJAAgKQAAgJADgIQAEgJAFgGQAHgGAJgEQAHgCAKAAQANAAAIAEQAJAFAEAGIgOAOQgEgEgFgDQgEgCgGAAQgFAAgDABQgFACgDAEQgEADgBAFQgBAFgBAEQABAGABAEQABAFAEAEQAHAGAJABQAGAAAEgDQAFgDAEgEIAOAOQgEAGgJAFQgIAEgNABQgKAAgHgEg");
	this.shape_16.setTransform(-84.5,23.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUArIgUgdIgTAdIgZAAIAfgrIgdgqIAZAAIARAbIASgbIAaAAIgeAqIAfArg");
	this.shape_17.setTransform(75.5,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASArIAAg1IgkA1IgWAAIAAhVIAXAAIAAAzIAjgzIAXAAIAABVg");
	this.shape_18.setTransform(65.8,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag+ArIAAhVIAXAAIAABBIAcAAIAAhBIAWAAIAABBIAcAAIAAhBIAYAAIAABVg");
	this.shape_19.setTransform(53.2,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASArIAAggQgFACgGACQgGACgIgBQgIABgHgCQgGgCgFgEQgHgIAAgMIAAgfIAXAAIAAAXQAAAJAFAEQAEADAIAAIAKAAIAIgDIAAgkIAXAAIAABVg");
	this.shape_20.setTransform(40.6,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfA9IgGgBIADgVIAEABIAEABQAEAAADgCQADgBACgDIADgIIgjhXIAYAAIAWA8IAWg8IAZAAIgpBkQgFAMgHAFQgIAEgMAAg");
	this.shape_21.setTransform(31,3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsAaQAFAAAEgGQADgHACgPIAFgpIBGAAIAABVIgXAAIAAhBIgbAAIgCAYQgCAKgDAJQgCAIgFAGQgIALgRgBg");
	this.shape_22.setTransform(20.8,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGArIAAhJIgZAAIAAgMIA/AAIAAAMIgZAAIAABJg");
	this.shape_23.setTransform(7.8,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgGgFQgFgHgDgJQgDgHAAgKQAAgIADgJQADgIAFgGQAGgHAIgDQAIgEAJAAQAKAAAIAEQAIADAGAHQAFAGADAIQADAJAAAIQAAAKgDAHQgDAJgFAHQgGAFgIAEQgIADgKAAQgJAAgIgDgAgMgeQgFADgEAFQgDAEgCAGQgCAGAAAGQAAAGACAHQACAGADAEQAEAFAFADQAGADAGgBQAHABAGgDQAFgDAEgFQADgEACgGQACgHAAgGQAAgGgCgGQgCgGgDgEQgEgFgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_24.setTransform(-0.9,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAlArIAAhVIAOAAIAABVgAgyArIAAhVIAOAAIAAAhIAhAAQAGAAAFACQAEACAEAEQAEADABAEQACAFAAAGQAAAFgCAFQgBAFgEADQgEAEgEADQgFABgGAAgAgkAgIAfAAQAGAAAFgFQADgEAAgGQAAgHgDgEQgFgEgGAAIgfAAg");
	this.shape_25.setTransform(-17,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGArIAAhJIgZAAIAAgMIA/AAIAAAMIgZAAIAABJg");
	this.shape_26.setTransform(-27,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVArIgegmIgPANIAAAZIgNAAIAAhVIANAAIAAAtIAtgtIARAAIgmAnIAmAug");
	this.shape_27.setTransform(-34.7,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdA9IgGgBIADgMIADABIAEAAQAFAAADgCQADgCACgFIAGgNIglhXIAPAAIAcBGIAdhGIAOAAIgrBoQgDAJgHAEQgGAEgJAAg");
	this.shape_28.setTransform(-44.3,3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAhA3IAAgXIhBAAIAAAXIgNAAIAAghQADgBACgCIAFgFIADgKIADgPIAGgqIA7AAIAABKIAKAAIAAAigAgPgJQgCALgDAIQgDAHgFAEIAzAAIAAg+IgiAAg");
	this.shape_29.setTransform(-53.8,2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgFgFQgGgHgDgJQgDgHAAgKQAAgIADgJQADgIAGgGQAFgHAIgDQAIgEAJAAQAKAAAIAEQAIADAGAHQAFAGADAIQADAJAAAIQAAAKgDAHQgDAJgFAHQgGAFgIAEQgIADgKAAQgJAAgIgDgAgLgeQgGADgDAFQgEAEgCAGQgCAGAAAGQAAAGACAHQACAGAEAEQADAFAGADQAFADAGgBQAHABAFgDQAGgDADgFQAEgEACgGQACgHgBgGQABgGgCgGQgCgGgEgEQgDgFgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_30.setTransform(-63.8,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoA9IAAh3IAOAAIAAANQAEgGAIgFIAIgDIAIgBQAJAAAHADQAHADAFAGQAFAGADAJQADAIAAALQAAAKgDAHQgDAJgFAGQgFAGgHADQgHADgJAAQgIAAgHgEQgIgEgFgHIAAAugAgQgsQgHAEgDAGIAAAmQADAGAHAEQAIAEAIAAQAFAAAFgDQAGgCADgEQAEgFACgFQACgHAAgGQAAgIgCgGQgCgGgEgFQgDgEgGgDQgFgCgFAAQgIAAgIAEg");
	this.shape_31.setTransform(-73.8,2.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAXArIAAhJIgtAAIAABJIgNAAIAAhVIBHAAIAABVg");
	this.shape_32.setTransform(-84.2,1.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPArQgIgEgGgGQgGgGgDgJQgEgIABgKQAAgJACgIQAEgIAFgHQAHgGAHgDQAIgDAJgBQAJABAIADQAIAEAFAGQAFAGAEAJQACAIAAAJIAAAEIhGAAQABAGADAFQACAGADAEQAFADAFADQAGACAGABQAIAAAGgDQAIgEAFgEIAHAJQgHAGgJAEQgJACgKAAQgJAAgIgCgAAdgFIgCgKQgBgFgEgEQgDgEgGgCQgFgEgIAAQgGAAgFAEQgGACgDAEQgEAEgBAFIgDAKIA5AAIAAAAg");
	this.shape_33.setTransform(28.4,-20.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAlAsIAAhXIANAAIAABXgAgyAsIAAhXIAOAAIAAAiIAgAAQAGAAAGACQAFADADADQADADACAFQACAEAAAGQAAAFgCAFQgCAFgDADQgDAEgFADQgGACgGAAgAgkAgIAfAAQAGgBAEgEQAEgEAAgGQAAgGgEgEQgEgFgGAAIgfAAg");
	this.shape_34.setTransform(16.9,-20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAvAAQAFABAFABQAEACAEADQAGAGAAAKQAAAIgEAEQgEAGgFACIAFABIAGAGIADAFIABAIQAAAFgCAEQgBAEgDAEIgIAFQgFABgGABgAgWAgIAfAAQAGAAAEgEQAEgEAAgGQAAgFgEgEQgDgEgHAAIgfAAgAgWgHIAeAAQAHAAADgCQAEgEAAgFQAAgGgEgDQgDgDgHAAIgeAAg");
	this.shape_35.setTransform(5.6,-20.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgFgFQgGgHgDgJQgDgIAAgJQAAgJADgIQADgIAGgHQAFgGAIgDQAIgDAJgBQAKABAIADQAIADAGAGQAFAHADAIQADAIAAAJQAAAJgDAIQgDAJgFAHQgGAFgIAEQgIADgKAAQgJAAgIgDgAgMgeQgFADgEAEQgDAFgCAHQgCAFAAAGQAAAGACAGQACAHADAFQAEAEAFADQAGACAGABQAHgBAGgCQAEgDAFgEQADgFACgHQACgGAAgGQAAgGgCgFQgCgHgDgFQgFgEgEgDQgGgDgHAAQgGAAgGADg");
	this.shape_36.setTransform(-4.6,-20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaAsIgagkIgZAkIgQAAIAigsIgggrIAQAAIAXAiIAYgiIAQAAIggArIAiAsg");
	this.shape_37.setTransform(-14.1,-20.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAsQgFgCgEgEQgFgDgCgGQgDgFgBgHQABgHADgFQACgFAFgEQAEgDAFgCQAGgCAFAAQAIAAAIADQAGADAGAFIAAgPQAAgIgHgFQgDgCgDgCQgFgBgEAAQgHAAgHADQgGADgGAGIgGgJQAOgPAUAAQAGABAGABQAHACAEADQAFADACAGQADAGABAHIAAA8IgOAAIAAgKQgLAMgRgBQgFABgGgCgAgJAAQgDABgDACQgHAFAAAJQAAAJAHAEQADAEADABQAEABAFAAQAGAAAHgDQAGgCAEgGIAAgQQgEgGgGgDQgHgBgGAAQgFAAgEABg");
	this.shape_38.setTransform(-23.4,-20.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoA9IAAh3IAOAAIAAANQAEgGAIgFIAIgDIAIgBQAJAAAHADQAHADAFAGQAFAGADAIQADAJAAALQAAAKgDAIQgDAIgFAGQgFAGgHADQgHADgJAAQgIAAgHgEQgIgEgFgHIAAAugAgQgsQgHAEgDAGIAAAmQADAGAHAEQAIAEAIAAQAFAAAFgDQAGgCADgFQAEgEACgFQACgHAAgGQAAgIgCgGQgCgGgEgEQgDgFgGgDQgFgCgFAAQgIAAgIAEg");
	this.shape_39.setTransform(-32.7,-19.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAsIAAhKIgaAAIAAgNIA/AAIAAANIgZAAIAABKg");
	this.shape_40.setTransform(-41.7,-20.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAqQgIgEgGgFQgFgHgEgIQgCgJAAgJQAAgJACgIQAEgIAFgHQAGgGAIgDQAIgDAJgBQAMAAAHAEQAIAFAEAHIgJAIQgDgGgGgDQgGgDgGAAQgHAAgFADQgGADgEAEQgDAEgDAHQgCAFAAAHQAAAHACAHQADAGADAEQAEAFAGACQAFACAHABQANAAAIgMIAJAIQgEAHgIAFQgHADgMAAQgJAAgIgDg");
	this.shape_41.setTransform(-49.6,-20.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgPArQgIgEgGgGQgGgGgDgJQgEgIAAgKQAAgJAEgIQADgIAGgHQAFgGAIgDQAIgDAIgBQALABAHADQAIAEAGAGQAEAGADAJQAEAIAAAJIAAAEIhGAAQAAAGACAFQADAGAEAEQAEADAFADQAGACAGABQAHAAAHgDQAHgEAGgEIAGAJQgGAGgJAEQgJACgLAAQgIAAgIgCgAAcgFIgBgKQgCgFgDgEQgEgEgFgCQgFgEgIAAQgGAAgFAEQgGACgDAEQgDAEgCAFIgCAKIA3AAIAAAAg");
	this.shape_42.setTransform(-63.8,-20.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLAqQgIgEgFgFQgGgHgDgIQgDgJgBgJQABgJADgIQADgIAGgHQAFgGAIgDQAIgDAJgBQALAAAIAEQAHAFAGAHIgJAIQgFgGgFgDQgFgDgIAAQgGAAgFADQgGADgDAEQgEAEgDAHQgCAFAAAHQAAAHACAHQADAGAEAEQADAFAGACQAFACAGABQAOAAAJgMIAJAIQgGAHgHAFQgIADgLAAQgJAAgIgDg");
	this.shape_43.setTransform(-73.2,-20.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgsA8IAAh3IA1AAQAHAAAHACQAGADAEADQAFAEACAGQACAGAAAGQAAAHgBAEIgFAIQgDADgEADIgIADQAFABAEACQAFACADAEQADAEACAFQACAFAAAGQAAAHgDAGQgCAGgEAEQgFAEgGACQgHADgIAAgAgdAvIAkAAIAJgBQAFgCACgDQADgCACgEQABgEAAgFIgBgIIgEgHQgDgCgEgCQgEgCgGAAIgkAAgAgdgHIAjAAQAFAAAEgBQAEgCADgDQAFgFAAgIQAAgJgFgFQgDgDgEgBIgJgBIgjAAg");
	this.shape_44.setTransform(-83.3,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-91.1,-34.8,182.3,69.7), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXA7IAAhCIgtBCIgNAAIAAhWIANAAIAABCIAthCIANAAIAABWgAgRgpQgIgEgGgHIAHgGQAEAGAGADQAHAEAHAAQAIAAAGgEQAHgDAEgGIAGAGQgFAHgIAEIgJADIgJABQgJAAgIgEg");
	this.shape.setTransform(78.1,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXAsIAAhDIgtBDIgNAAIAAhWIANAAIAABBIAthBIANAAIAABWg");
	this.shape_1.setTransform(68.2,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgGgHQgFgFgEgJQgCgIAAgKQAAgJACgIQAEgIAFgHQAGgFAIgEQAIgEAJABQAMAAAHADQAIAFAEAGIgJAJQgDgGgGgDQgGgCgGgBQgHABgFACQgFACgFAFQgDAFgCAFQgDAHAAAGQAAAHADAGQACAHADAEQAFAEAFADQAFACAHAAQAOABAHgMIAJAIQgEAHgIAEQgHAFgMAAQgJgBgIgDg");
	this.shape_2.setTransform(58.9,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgGgHQgFgFgEgJQgCgIAAgKQAAgJACgIQAEgIAFgHQAGgFAIgEQAIgEAJABQAMAAAHADQAIAFAEAGIgJAJQgEgGgFgDQgGgCgGgBQgHABgFACQgGACgEAFQgDAFgCAFQgCAHgBAGQABAHACAGQACAHADAEQAEAEAGADQAFACAHAAQAOABAHgMIAJAIQgEAHgIAEQgHAFgMAAQgJgBgIgDg");
	this.shape_3.setTransform(50,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAsIAAhDIgtBDIgNAAIAAhWIANAAIAABBIAthBIANAAIAABWg");
	this.shape_4.setTransform(40.5,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfAsIAAhEIgcBEIgEAAIgdhEIAABEIgNAAIAAhWIASAAIAZA/IAag/IASAAIAABWg");
	this.shape_5.setTransform(29.7,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAqQgIgDgGgHQgFgGgDgIQgDgJAAgJQAAgIADgJQADgIAFgHQAGgFAIgEQAIgEAJABQAKgBAIAEQAIAEAFAFQAGAHADAIQADAJAAAIQAAAJgDAJQgDAIgGAGQgFAHgIADQgIADgKABQgJgBgIgDgAgLgeQgGADgDAEQgEAFgCAGQgCAHAAAFQAAAHACAFQACAHAEAEQADAFAGADQAFACAGAAQAHAAAFgCQAGgDADgFQAEgEACgHQACgFgBgHQABgFgCgHQgCgGgEgFQgDgEgGgDQgFgCgHgBQgGABgFACg");
	this.shape_6.setTransform(18.9,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAsIgegoIgPAPIAAAZIgNAAIAAhWIANAAIAAAtIAtgtIARAAIgmAnIAmAvg");
	this.shape_7.setTransform(9.6,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAqQgIgDgGgGQgGgGgDgIQgDgJAAgKQAAgIADgJQADgIAGgHQAFgFAIgEQAIgEAIABQAKgBAIAEQAIADAGAHQAEAGAEAJQACAJAAAIIAAADIhGAAQABAHACAFQADAFADAFQAFAEAFACQAGADAGAAQAIgBAGgDQAIgCAFgGIAGAJQgGAHgJADQgJAEgLAAQgIAAgIgEgAAcgFIgBgJQgCgFgDgFQgDgEgGgDQgGgCgHAAQgGAAgFACQgFADgEAEQgEAFgBAFIgDAJIA4AAIAAAAg");
	this.shape_8.setTransform(-5.1,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXAsIAAhDIgtBDIgNAAIAAhWIANAAIAABBIAthBIANAAIAABWg");
	this.shape_9.setTransform(-15.2,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAvAAQAFgBAFACQAEABAEAEQAGAGAAAKQAAAHgEAGQgEAFgFACIAFACIAGAEIADAGIABAIQAAAFgCAFQgBADgDAEIgIAFQgFACgGAAgAgWAfIAfAAQAGABAEgEQAEgDAAgHQAAgFgEgEQgDgEgHAAIgfAAgAgWgGIAeAAQAHAAADgDQAEgEAAgFQAAgGgEgDQgDgDgHgBIgeAAg");
	this.shape_10.setTransform(-25,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAsIAAhLIgZAAIAAgLIA/AAIAAALIgZAAIAABLg");
	this.shape_11.setTransform(-33.7,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgGgHQgFgFgEgJQgDgIAAgKQAAgJADgIQAEgIAFgHQAGgFAIgEQAIgEAJABQALAAAIADQAHAFAFAGIgJAJQgEgGgFgDQgGgCgHgBQgGABgFACQgFACgEAFQgFAFgBAFQgCAHAAAGQAAAHACAGQABAHAFAEQAEAEAFADQAFACAGAAQAPABAHgMIAJAIQgFAHgHAEQgIAFgLAAQgJgBgIgDg");
	this.shape_12.setTransform(-41.6,23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAsIAAhLIgZAAIAAgLIA/AAIAAALIgZAAIAABLg");
	this.shape_13.setTransform(-49.8,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdA9IgGgBIADgMIADABIAEAAQAFAAADgCQADgBACgGIAGgNIglhXIAPAAIAcBGIAdhGIAOAAIgrBoQgDAJgHAEQgGAEgJAAg");
	this.shape_14.setTransform(-57.8,24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAqQgIgDgFgHQgGgFgDgJQgDgIgBgKQABgJADgIQADgIAGgHQAFgFAIgEQAIgEAJABQALAAAIADQAHAFAGAGIgJAJQgFgGgFgDQgFgCgIgBQgGABgFACQgGACgDAFQgEAFgDAFQgCAHAAAGQAAAHACAGQADAHAEAEQADAEAGADQAFACAGAAQAOABAJgMIAJAIQgGAHgHAEQgIAFgLAAQgJgBgIgDg");
	this.shape_15.setTransform(-66.5,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAsIAAhLIgaAAIAAgLIA/AAIAAALIgZAAIAABLg");
	this.shape_16.setTransform(-74.7,23.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAqQgIgDgGgHQgFgGgDgIQgDgJAAgJQAAgIADgJQADgIAFgHQAGgFAIgEQAIgEAJABQAKgBAIAEQAIAEAFAFQAGAHADAIQADAJAAAIQAAAJgDAJQgDAIgGAGQgFAHgIADQgIADgKABQgJgBgIgDgAgMgeQgFADgEAEQgDAFgCAGQgCAHAAAFQAAAHACAFQACAHADAEQAEAFAFADQAGACAGAAQAHAAAFgCQAGgDADgFQAEgEACgHQABgFAAgHQAAgFgBgHQgCgGgEgFQgDgEgGgDQgFgCgHgBQgGABgGACg");
	this.shape_17.setTransform(-83.4,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXArIAAhCIgtBCIgNAAIAAhVIANAAIAABBIAthBIANAAIAABVg");
	this.shape_18.setTransform(28.8,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXArIAAhCIgtBCIgNAAIAAhVIANAAIAABBIAthBIANAAIAABVg");
	this.shape_19.setTransform(14.3,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVArIgegmIgPANIAAAZIgNAAIAAhVIANAAIAAAtIAtgtIARAAIgmAnIAmAug");
	this.shape_20.setTransform(5.3,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkArIAAhVIAvAAQAFAAAFABQAEABAEADQAGAHAAAKQAAAHgEAFQgEAGgFABIAFADIAGAEIADAHIABAHQAAAFgCAFQgBAEgDADIgIAFQgFACgGgBgAgWAgIAfAAQAGgBAEgDQAEgEAAgGQAAgFgEgEQgDgEgHAAIgfAAgAgWgGIAeAAQAHgBADgDQAEgDAAgFQAAgGgEgDQgDgDgHAAIgeAAg");
	this.shape_21.setTransform(-4.8,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgFgFQgGgHgDgJQgDgHAAgKQAAgIADgJQADgIAGgGQAFgHAIgDQAIgEAJAAQAKAAAIAEQAIADAGAHQAFAGADAIQADAJAAAIQAAAKgDAHQgDAJgFAHQgGAFgIAEQgIADgKAAQgJAAgIgDgAgMgeQgFADgEAFQgDAEgCAGQgCAGAAAGQAAAGACAHQACAGADAEQAEAFAFADQAGADAGgBQAHABAGgDQAEgDAFgFQADgEACgGQACgHAAgGQAAgGgCgGQgCgGgDgEQgFgFgEgDQgGgCgHAAQgGAAgGACg");
	this.shape_22.setTransform(-14.9,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAaArIgagjIgZAjIgQAAIAigrIgggqIAQAAIAXAgIAYggIAQAAIggAqIAiArg");
	this.shape_23.setTransform(-24.4,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAsQgFgCgEgDQgFgFgCgEQgDgGgBgHQABgIADgEQACgFAFgEQAEgDAFgCQAGgCAFAAQAIAAAIADQAGADAGAFIAAgOQAAgKgHgEQgDgDgDAAQgFgCgEAAQgHAAgHADQgGADgGAGIgGgJQAOgPAUAAQAGAAAGACQAHABAEAEQAFADACAGQADAGABAIIAAA6IgOAAIAAgKQgLAMgRAAIgLgBgAgJAAQgDAAgDADQgHAGAAAIQAAAIAHAGQADACADABQAEACAFAAQAGAAAHgDQAGgDAEgFIAAgQQgEgGgGgDQgHgBgGAAQgFAAgEABg");
	this.shape_24.setTransform(-33.7,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoA9IAAh3IAOAAIAAANQAEgGAIgFIAIgDIAIgBQAJAAAHADQAHADAFAGQAFAGADAJQADAIAAALQAAAKgDAHQgDAJgFAGQgFAGgHADQgHADgJAAQgIAAgHgEQgIgEgFgHIAAAugAgQgsQgHAEgDAGIAAAmQADAGAHAEQAIAEAIAAQAFAAAFgDQAGgCADgEQAEgFACgFQACgHAAgGQAAgIgCgGQgCgGgEgFQgDgEgGgDQgFgCgFAAQgIAAgIAEg");
	this.shape_25.setTransform(-43.1,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFArIAAhJIgaAAIAAgMIA/AAIAAAMIgZAAIAABJg");
	this.shape_26.setTransform(-52.1,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLAqQgIgEgGgFQgFgGgEgJQgCgIAAgKQAAgJACgIQAEgJAFgFQAGgHAIgDQAIgEAJAAQAMAAAHAFQAIAEAEAGIgJAJQgDgGgGgDQgGgCgGAAQgHAAgFACQgGADgEAEQgDAFgDAGQgCAFAAAHQAAAHACAHQADAFADAFQAEAEAGADQAFADAHgBQANAAAIgLIAJAJQgEAGgIAFQgHADgMAAQgJAAgIgDg");
	this.shape_27.setTransform(-60,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAsQgFgCgEgDQgFgFgCgEQgDgGAAgHQAAgIADgEQACgFAFgEQAEgDAFgCQAGgCAFAAQAIAAAIADQAGADAGAFIAAgOQAAgKgHgEQgDgDgDAAQgEgCgFAAQgHAAgHADQgGADgGAGIgGgJQAOgPAUAAQAGAAAGACQAHABAFAEQAEADACAGQAEAGAAAIIAAA6IgOAAIAAgKQgLAMgRAAIgLgBgAgJAAQgDAAgDADQgHAGAAAIQAAAIAHAGQADACADABQAEACAFAAQAGAAAGgDQAHgDAEgFIAAgQQgEgGgHgDQgGgBgGAAQgFAAgEABg");
	this.shape_28.setTransform(-74.1,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXArIAAgmIgtAAIAAAmIgNAAIAAhVIANAAIAAAkIAtAAIAAgkIANAAIAABVg");
	this.shape_29.setTransform(-83.6,1.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAjAsIAAhXIAYAAIAABXgAg5AsIAAhXIAWAAIAAAfIAeAAQAGAAAGACQAGACADAEQAFAEACAEQABAFAAAGQAAAGgCAFQgCAFgEAEQgDAEgHACQgFACgGABgAgjAZIAaAAQAFAAADgEQACgCAAgEQAAgEgCgDQgDgCgFAAIgaAAg");
	this.shape_30.setTransform(76.9,-20.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASAsIAAgjIgjAAIAAAjIgXAAIAAhXIAXAAIAAAhIAjAAIAAghIAXAAIAABXg");
	this.shape_31.setTransform(64.7,-20.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPArQgJgEgGgGQgHgGgDgIQgDgJAAgKQAAgJADgIQADgIAGgHQAGgGAIgDQAJgDAJgBQAJABAIADQAIADAGAGQAGAHADAJQADAJAAAJIAAAGIhAAAQACAHAGAGQAGAHALgBIAFAAIAHgCIAGgCIAFgEIAKAPQgHAGgJADQgKACgKAAQgJAAgIgCgAAWgHIgBgHIgEgGIgHgFQgEgCgFAAQgFAAgEACQgEACgCADIgEAGIgCAHIAqAAg");
	this.shape_32.setTransform(54.5,-20.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWA2IAAgVIhCAAIAAhXIAWAAIAABDIAjAAIAAhDIAXAAIAABDIAKAAIAAApg");
	this.shape_33.setTransform(44.7,-19.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPArQgJgEgGgGQgHgGgDgIQgDgJAAgKQAAgJADgIQADgIAGgHQAGgGAIgDQAJgDAJgBQAJABAIADQAIADAGAGQAGAHADAJQADAJAAAJIAAAGIhAAAQACAHAGAGQAGAHALgBIAFAAIAHgCIAGgCIAFgEIAKAPQgHAGgJADQgKACgKAAQgJAAgIgCgAAWgHIgBgHIgEgGIgHgFQgEgCgFAAQgFAAgEACQgEACgCADIgEAGIgCAHIAqAAg");
	this.shape_34.setTransform(29.4,-20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AASAsIAAg2IgkA2IgWAAIAAhXIAXAAIAAA0IAjg0IAXAAIAABXg");
	this.shape_35.setTransform(19.2,-20.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAOAsIgXgiIgKALIAAAXIgWAAIAAhXIAWAAIAAAnIAggnIAcAAIgiAoIAjAvg");
	this.shape_36.setTransform(9.8,-20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAqIgJgFIgHgFIAKgPQAGAGAIACQAIADAIgBQAIABAFgDQAEgDAAgEQAAgFgFgDQgFgCgIAAIgSAAIAAgQIASAAQARAAAAgKQAAgDgFgDQgFgCgHgBQgIABgHACQgHADgFAEIgLgNQAGgGAKgFIAKgDIALgBQATABALAGQAGADADAFQACADAAAHQAAAEgBADQgCADgEADIgHAFIgIACIAIAAIAIAFQADACADAEQACAEAAAEQAAAHgDAEQgDAFgFADQgGAEgHACQgIACgJgBQgNAAgLgDg");
	this.shape_37.setTransform(-0.3,-20.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AASAsIAAg2IgkA2IgWAAIAAhXIAXAAIAAA0IAjg0IAXAAIAABXg");
	this.shape_38.setTransform(-9.8,-20.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AASAsIAAgjIgjAAIAAAjIgXAAIAAhXIAXAAIAAAhIAjAAIAAghIAXAAIAABXg");
	this.shape_39.setTransform(-20.2,-20.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPArQgJgEgGgGQgHgGgDgIQgDgJAAgKQAAgJADgIQADgIAGgHQAGgGAIgDQAJgDAJgBQAJABAIADQAIADAGAGQAGAHADAJQADAJAAAJIAAAGIhAAAQACAHAGAGQAGAHALgBIAFAAIAHgCIAGgCIAFgEIAKAPQgHAGgJADQgKACgKAAQgJAAgIgCgAAWgHIgBgHIgEgGIgHgFQgEgCgFAAQgFAAgEACQgEACgCADIgEAGIgCAHIAqAAg");
	this.shape_40.setTransform(-35,-20.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAkAsIAAhXIAWAAIAABXgAg6AsIAAhXIAXAAIAAAfIAeAAQAGAAAGACQAGACAEAEQADAEACAEQACAFAAAGQAAAGgCAFQgCAFgDAEQgFAEgFACQgGACgGABgAgjAZIAbAAQAEAAADgEQACgCAAgEQAAgEgCgDQgDgCgEAAIgbAAg");
	this.shape_41.setTransform(-46.9,-20.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAcAsIAAg4IgXA4IgJAAIgYg4IAAA4IgWAAIAAhXIAeAAIAUAzIAVgzIAeAAIAABXg");
	this.shape_42.setTransform(-60.2,-20.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAsQgFgCgFgEQgEgDgDgGQgCgEAAgIQAAgIACgFQADgEAEgEQAFgDAFgCQAGgBAFAAQAIAAAHACQAHADAEAFIAAgLQAAgHgFgEQgFgEgIAAQgOAAgLAKIgJgPIAJgGIAJgFQAKgDAJAAQAIABAGABQAHABAGAFQAFADADAHQADAGAAAKIAAA3IgXAAIAAgJQgEAFgHADQgHACgIAAIgLgBgAgMAIQgEADAAAGQAAAGAEAEQAFADAHAAQAFAAAEgCQAFgCADgDIAAgLQgDgEgFgCQgEgBgFAAQgHAAgFADg");
	this.shape_43.setTransform(-71.6,-20.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFA9QgGgBgGgDQgMgEgJgIQgIgIgFgLIgEgNQgBgGAAgHQAAgGABgGQACgHACgFQAFgLAIgJQAJgIAMgFQAGgCAGgBIAMgBQAKAAAIACQAIADAGAEQAGAEAEAGQAFAFADAFIgVALQgFgIgHgEIgIgEIgJgCQgHAAgHAEQgHADgFAFQgFAFgDAHQgCAIgBAHQABAIACAIQADAHAFAGQAFAFAHADQAHACAHAAQAFABAEgCIAIgDQAHgGAFgHIAVAKIgIAMQgEAFgGAEQgGAEgIACQgIADgKAAIgMgBg");
	this.shape_44.setTransform(-82.2,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(-90.5,-34.8,181.1,69.7), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtBeIAAhLIgmAAIguBLIgcAAIAzhNQgKgBgIgDQgJgFgHgGQgHgGgEgJQgEgKAAgNQAAgNAEgKQAFgKAIgIQAHgHALgFQALgDANAAIBKAAIAAC6gAgfg+QgKAKAAAQQAAAQAKAJQALALAQgBIAxAAIAAhHIgxAAQgQAAgLAKg");
	this.shape.setTransform(-0.5,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-10.6,-19,21.2,38.1), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2BeIAAiVIhsCVIgWAAIAAi6IAXAAIAACQIBqiQIAYAAIAAC6g");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(-12,-19,24,38.1), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2BeIAAhWIhsAAIAABWIgXAAIAAi6IAXAAIAABQIBsAAIAAhQIAYAAIAAC6g");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(-12,-19,24.1,38.1), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA/BeIgQgqIhdAAIgQAqIgbAAIBMi6IAcAAIBKC6gAAoAgIgohkIgnBkIBPAAg");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-11.3,-19,22.6,38.1), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBeIAAi6IBSAAQALAAAKADQAKAEAHAGQAGAGAEAJQAEAJAAAKQAAAJgDAHQgDAIgEAFQgFAGgGADQgFAEgHABQAHACAIADQAGAEAFAGQAEAGAEAIQACAHAAAJQAAALgDAJQgEAKgHAGQgHAIgKADQgKAEgNAAgAguBIIA5AAQAIAAAGgCQAHgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgGgCgJgBIg5AAgAgugLIA3AAQAIAAAHgCQAFgCAEgFQAJgIAAgNQAAgNgJgJQgEgEgFgDQgHgCgIAAIg3AAg");
	this.shape.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-10.9,-19,21.8,38.1), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBZQgRgHgMgNQgMgNgHgSQgDgIgCgKQgCgKAAgKQAAgUAHgRQAHgSAMgNIAOgMQAHgFAIgDQASgIATAAQAVAAARAIQAJADAHAFIANAMQAMANAHASQAHARAAAUQAAAKgCAKQgBAKgEAIQgHASgMANIgNAMQgHAFgJADQgRAIgVAAQgTAAgSgIgAgbhFQgNAGgJAKQgJAKgFAOQgEAOAAAPQAAAQAEAOQAFAOAJAKQAJAKANAGQANAGAOAAQAQAAAMgGQANgGAJgKQAJgKAFgOQAFgOAAgQQAAgPgFgOQgFgOgJgKQgJgKgNgGQgMgGgQAAQgOAAgNAGg");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-12.8,-19,25.6,38.1), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA8BeIg8hQIg7BQIgcAAIBJhfIhFhbIAdAAIA2BKIA3hKIAcAAIhEBaIBJBgg");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-11.2,-19,22.5,38.1), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA/BeIgQgqIhdAAIgQAqIgbAAIBMi6IAcAAIBKC6gAAoAgIgohkIgnBkIBPAAg");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-11.3,-19,22.6,38.1), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBeIAAi6IBKAAQAOAAALAEQALAFAHAIQAIAHAEALQAEAKAAALQAAAMgEAKQgEAKgIAHQgHAHgLAFQgLAFgOgBIgzAAIAABLgAgrgBIAwAAQAJABAGgDQAHgDAFgEQALgKAAgQQAAgIgDgGQgDgHgFgFQgFgFgHgCQgGgCgJgBIgwAAg");
	this.shape.setTransform(0.6,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-10.3,-19,20.6,38.1), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBeIAAimIg7AAIAAgUICNAAIAAAUIg7AAIAACmg");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-10.1,-19,20.2,38.1), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBfQgJgCgJgDQgSgHgNgNQgGgHgFgHQgFgIgEgJQgIgRAAgWQAAgVAIgRQAEgJAFgIQAFgHAGgHQANgNASgHQAJgDAJgCQAIgCALAAQAMAAAKADQALADAJAFQAJAFAHAHQAHAGAFAIIgTALQgEgGgGgEIgMgJQgHgEgHgCQgHgCgIAAQgPAAgNAGQgNAFgKAKQgKAKgFAOQgFAOAAAQQAAARAFANQAFAPAKAKQAKAKANAFQANAGAPAAQAIAAAHgCQAHgCAHgEQAOgHAIgMIAUALQgMAQgRAKQgSALgYAAQgLAAgIgCg");
	this.shape.setTransform(0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-11.5,-19,23.1,38.1), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBBeIAAi6IAYAAIAAC6gAhYBeIAAi6IAYAAIAABKIAzAAQANAAALAFQALAEAHAHQAIAIAEAJQAEALAAALQAAAMgEAKQgEAKgIAIQgGAHgMAFQgLAFgNAAgAhABIIAwAAQAJAAAHgCQAFgCAFgFQALgKAAgQQAAgIgDgGQgDgGgFgFQgFgGgFgCQgHgDgJAAIgwAAg");
	this.shape.setTransform(0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-13.1,-19,26.3,38.1), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGBvIAAgjIiKAAIAAAjIgYAAIAAg1QAJgBAGgDQAHgDAFgIQAFgHAEgPQAEgOADgXIAMheIBxAAIAAClIARAAIAAA4gAgagOQgEAdgHAQQgHARgLAHIBrAAIAAiQIhFAAg");
	this.shape.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-12.2,-19,24.4,38.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2BeIAAiVIhsCVIgWAAIAAi6IAXAAIAACQIBqiQIAYAAIAAC6g");
	this.shape.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-12,-19,24,38.1), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBeIAAi6IBSAAQALAAAKADQAKAEAHAGQAGAGAEAJQAEAJAAAKQAAAJgDAHQgDAIgEAFQgFAGgGADQgFAEgHABQAHACAIADQAGAEAFAGQAEAGAEAIQACAHAAAJQAAALgDAJQgEAKgHAGQgHAIgKADQgKAEgNAAgAguBIIA5AAQAIAAAGgCQAHgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgGgCgJgBIg5AAgAgugLIA3AAQAIAAAHgCQAFgCAEgFQAJgIAAgNQAAgNgJgJQgEgEgFgDQgHgCgIAAIg3AAg");
	this.shape.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-10.9,-19,21.8,38.1), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BeIAAi6IB5AAIAAAUIhiAAIAAA9IBgAAIAAATIhgAAIAABAIBiAAIAAAWg");
	this.shape.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-10,-19,20.1,38.1), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBfQgJgCgJgDQgSgHgNgNQgGgHgFgHQgFgIgEgJQgIgRAAgWQAAgVAIgRQAEgJAFgIQAFgHAGgHQANgNASgHQAJgDAJgCQAIgCALAAQAMAAAKADQALADAJAFQAJAFAHAHQAHAGAFAIIgTALQgEgGgGgEIgMgJQgHgEgHgCQgHgCgIAAQgPAAgNAGQgNAFgKAKQgKAKgFAOQgFAOAAAQQAAARAFANQAFAPAKAKQAKAKANAFQANAGAPAAQAIAAAHgCQAHgCAHgEQAOgHAIgMIAUALQgMAQgRAKQgSALgYAAQgLAAgIgCg");
	this.shape.setTransform(0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-11.5,-19,23.1,38.1), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBeIAAi6IBSAAQALAAAKADQAKAEAHAGQAGAGAEAJQAEAJAAAKQAAAJgDAHQgDAIgEAFQgFAGgGADQgFAEgHABQAHACAIADQAGAEAFAGQAEAGAEAIQACAHAAAJQAAALgDAJQgEAKgHAGQgHAIgKADQgKAEgNAAgAguBIIA5AAQAIAAAGgCQAHgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgGgCgJgBIg5AAgAgugLIA3AAQAIAAAHgCQAFgCAEgFQAJgIAAgNQAAgNgJgJQgEgEgFgDQgHgCgIAAIg3AAg");
	this.shape.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-10.9,-19,21.8,38.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDE7FE").s().p("AlUL4IIZr3IoZr4ICQAAIIZL3IoZL4g");
	this.shape.setTransform(34.1,76);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,68.3,152), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0D2FD").s().p("Al0M/IJLs+IpLs/ICeAAIJLM+IpLM/g");
	this.shape.setTransform(37.3,83.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,74.7,166.3), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51ABF8").s().p("AmUOHIJ+uHIp+uGICrAAIJ+OGIp+OHg");
	this.shape.setTransform(40.5,90.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,81.1,180.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AgMBsQgFgFAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAFgHAAQgHAAgFgFgAgQAlQgDgHAAgIQAAgKAEgIQAFgGAGgGIAOgLIAOgLQAHgFAEgHQAFgGAAgJQAAgNgKgJQgFgEgHgCQgHgDgKAAQgJAAgIACQgHACgGAEQgNAHgJAMIgQgSQAGgHAHgGQAHgHAKgEQASgJAWAAQAPAAAMAEQAMAEAJAHQAIAHAFAJQAEAJAAALQAAANgFAIQgFAJgHAHIgPANIgPALQgHAEgFAGQgFAGAAAJQAAADACAFQADAEAEAEIgTAIQgHgFgDgHg");
	this.shape.setTransform(-0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-9.7,-22.1,19.4,44.2), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AhQBrQgLgFgGgHIALgXQAGAHAIAEQAHAEAJAAIAMgBQAEgBAFgFIAIgJIAIgPIAEgHIhUigIAfAAIBECHIBFiHIAfAAIhgC0IgKASQgFAIgHAGQgHAFgJADQgIADgMAAQgOAAgMgFg");
	this.shape.setTransform(-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-12.4,-22.1,24.9,44.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AAxBuIhShjIgWAZIAABKIgbAAIAAjbIAbAAIAABxIBghxIAjAAIhbBpIBiByg");
	this.shape.setTransform(0.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-12,-22.1,24,44.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AhRBuIAAjbIBhAAQAOAAALAEQAMAEAIAIQAIAHAEALQAEAJAAANQAAAKgCAJQgEAIgFAHQgGAGgHAFQgGAEgIACQAJABAIADQAHAGAGAHQAGAHADAKQAEAIAAALQAAANgFAKQgEALgIAJQgJAIgLAEQgMAEgPAAgAg2BWIBDAAQAJAAAIgDQAIgCAEgFQAGgGADgHQACgGAAgKQAAgHgCgHQgDgHgFgFQgFgFgHgDQgIgDgKgBIhDAAgAg2gNIBBAAQAKgBAGgDQAIgCAFgFQAJgKAAgPQAAgPgJgKQgFgFgIgDQgGgCgKAAIhBAAg");
	this.shape.setTransform(0.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-12.4,-22.1,25,44.2), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AgsBqQgUgJgOgQQgPgPgHgVQgEgKgCgLQgCgLAAgNQAAgYAIgUQAHgVAPgQQAHgHAJgGQAIgGAKgEQAUgJAYAAQAYAAAUAJQAKAEAJAGQAJAGAHAHQAOAQAIAVQAIAUAAAYQAAANgCALQgCALgEAKQgIAVgOAPQgHAIgJAGQgJAGgKAFQgUAIgYAAQgYAAgUgIgAghhSQgPAHgKAMQgLAMgFAQQgGARAAASQAAATAGAQQAFARALAMQAKAMAPAHQAPAGASAAQASAAAPgGQAPgHALgMQAKgMAGgRQAGgQAAgTQAAgSgGgRQgGgQgKgMQgLgMgPgHQgPgHgSAAQgSAAgPAHg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-14.7,-22.1,29.4,44.2), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("ABGBuIhGheIhFBeIghAAIBVhwIhRhrIAhAAIBBBYIBBhYIAhAAIhQBrIBWBwg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-12.8,-22.1,25.7,44.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("ABLBuIgUgxIhtAAIgTAxIgfAAIBYjbIAhAAIBYDbgAAvAkIgvh1IguB1IBdAAg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-12.9,-22.1,25.9,44.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AhOBuIAAjbIBYAAQAQAAANAFQANAFAIAJQAKAKAEALQAFAMgBAOQABAOgFALQgEANgKAIQgIAJgNAFQgNAFgQABIg9AAIAABXgAgzgBIA5AAQAKAAAIgCQAIgEAHgFQALgMAAgTQAAgJgCgIQgEgIgFgFQgHgGgIgDQgIgCgKAAIg5AAg");
	this.shape.setTransform(0.7,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-11.8,-22.1,23.6,44.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AgNBuIAAjCIhGAAIAAgZICnAAIAAAZIhGAAIAADCg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-11.5,-22.1,23,44.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AgHBwQgLgCgLgEQgVgJgPgPQgIgHgGgJQgFgJgFgLQgIgUAAgaQAAgYAIgWQAFgKAFgJQAGgIAIgIQAPgPAVgJQALgEALgBQAKgDALAAQAPAAAMAEQANADAKAGQAKAGAJAHQAIAIAHAKIgXANIgLgNIgPgLQgHgEgKgCQgIgCgKgBQgRAAgPAHQgQAHgLAMQgLALgHARQgGAQAAATQAAATAGARQAHAQALAMQALAMAQAHQAPAGARAAQAKAAAIgBQAKgDAHgFQARgJAJgNIAYAMQgOATgVAMQgUANgeAAQgLAAgKgCg");
	this.shape.setTransform(0.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-13.2,-22.1,26.5,44.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AhHBuIAAjbICPAAIAAAZIh0AAIAABHIBxAAIAAAWIhxAAIAABNIB0AAIAAAYg");
	this.shape.setTransform(0.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-11.4,-22.1,23,44.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AgNBuIAAjCIhGAAIAAgZICnAAIAAAZIhGAAIAADCg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-11.5,-22.1,23,44.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AA/BuIAAiuIh/CuIgaAAIAAjbIAbAAIAACrIB+irIAcAAIAADbg");
	this.shape.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-13.7,-22.1,27.6,44.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("ABzCCIAAgoIkAAAIAAjbIAbAAIAADCIBbAAIAAjCIAbAAIAADCIBbAAIAAjCIAcAAIAADCIATAAIAABBg");
	this.shape.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-18.2,-22.1,36.3,44.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113C64").s().p("AA/BuIAAiuIh/CuIgaAAIAAjbIAbAAIAACrIB+irIAcAAIAADbg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-13.8,-22.1,27.6,44.2), null);


(lib.sun_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(-14,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun_1, new cjs.Rectangle(-14,-12.5,28,25), null);


(lib.sph_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sph();
	this.instance.parent = this;
	this.instance.setTransform(-115,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sph_1, new cjs.Rectangle(-115,-12.5,230,25), null);


(lib.smlc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smc();
	this.instance.parent = this;
	this.instance.setTransform(-18,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smlc, new cjs.Rectangle(-18,-8,36,16), null);


(lib.ppl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ppl();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ppl_1, new cjs.Rectangle(-39.5,-30,79,60), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-99,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-99,-62,198,124), null);


(lib.ins2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2E5EE").s().p("AhACbIgKgKQgsAeg4AAQhLAAg1g1Qg0g0AAhKQAAhLA0g0QA1g1BLAAQAzAAApAZIAGgHQAmgmA1AAQAsAAAiAZQAbgPAjAAQA2AAAmAmQAMAMAIAOQAIgEAKAAQAVAAAOAPQAPAPAAAUQAAAQgJAMQAdAjAAAuQAAA2gmAmQgmAmg2AAQgXAAgUgHIgHAHQgyAyhGAAQhGAAgxgyg");
	this.shape.setTransform(35.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ins2, new cjs.Rectangle(0,0,71,41), null);


(lib.ins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhACbIgKgKQgsAeg4AAQhLAAg1g1Qg0g0AAhKQAAhLA0g0QA1g1BLAAQAzAAApAZIAGgHQAmgmA1AAQAsAAAiAZQAbgPAjAAQA2AAAmAmQAMAMAIAOQAIgEAKAAQAVAAAOAPQAPAPAAAUQAAAQgJAMQAdAjAAAuQAAA2gmAmQgmAmg2AAQgXAAgUgHIgHAHQgyAyhGAAQhGAAgxgyg");
	this.shape.setTransform(35.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ins, new cjs.Rectangle(0,0,71,41), null);


(lib.home_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.home();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.home_1, new cjs.Rectangle(-29.5,-27.5,59,55), null);


(lib.hnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-285,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hnd, new cjs.Rectangle(-285,0,285,86), null);


(lib.drop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2E5EE").s().p("AhDCUQgcgjAAgyQgBhOAuhbQAQggAQgYQAPgWADAAQADAAAPAWQARAYAQAfQAtBcAABOQAAAygcAjQgcAkgoAAQgnAAgcgkg");
	this.shape.setTransform(14.4,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.drop, new cjs.Rectangle(4.8,3.6,19.3,36.9), null);


(lib.cur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1C1C").s().p("AhBAkIAAgqIgPAAIABgdIAOAAIAAAdIAPAAIAAAcIBzAAIABgcIAOAAQABAOgBAcg");
	this.shape.setTransform(1.5,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1C1C").s().p("AAIAkIgBgdIgOAAIAAgbIgOgBIABgOIAOgBIAAAPIAOAAIAAAcIAOAAIgBAdg");
	this.shape_1.setTransform(-8.7,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1C1C").s().p("AgVgVIArAAIAAAPIgcAAIgBAbIgOABg");
	this.shape_2.setTransform(-10.2,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1C1C").s().p("AAsCCIAAgsIAOAAIAAhkIgOAAIAAgOIgOAAIgBAqIgOAAIgBg5IgbAAIAAArIgPAAIAAg5IAqAAIABAOIAdAAIAAAPIAOAAIAAAOIAPAAIAABlIgOAAIgBArgAhIAAIAAiBIAOAAIAAA5IAdAAIABAPIgeAAIAAA5g");
	this.shape_3.setTransform(5.2,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1C1C").s().p("AAABQIAAgPIgNAAIAAgOIANgBIAAiAIAOgBIAACfg");
	this.shape_4.setTransform(-6.5,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1C1C").s().p("AgOAHIABgNIAbAAIABANg");
	this.shape_5.setTransform(-3.6,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyCfIAAgrIgPAAIAAgbIABgCIgDAAIgMAAIgBgdIgOAAIgBgbIAAgBIgOgBIABgMIAAgDIgCABIgNAAIAAgrIAsAAIAAAPIACAAIAKgBIACAAIAAiBIAPgBIAAgOIAdAAIAAAPIAPAAIAAA5IAcAAIAAAPIACAAIAqAAIAAAOIAdAAIAAAPIAPAAIAAAMIAAACIAOAAIAABlIgOAAIAAArIgPAAIAAACQABAOgBAbg");
	this.shape_6.setTransform(0,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cur, new cjs.Rectangle(-12.4,0,24.9,31.9), null);


(lib.t3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(92.6,17.1);

	this.instance_1 = new lib.Symbol42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.2,17.1);

	this.instance_2 = new lib.Symbol41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.4,17.1);

	this.instance_3 = new lib.Symbol40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(35.2,17.1);

	this.instance_4 = new lib.Symbol39();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.2,17.1);

	this.instance_5 = new lib.Symbol38();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.3,17.1);

	this.instance_6 = new lib.Symbol37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-22.1,17.1);

	this.instance_7 = new lib.Symbol36();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-40.4,17.1);

	this.instance_8 = new lib.Symbol35();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-57.8,17.1);

	this.instance_9 = new lib.Symbol34();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-74,17.1);

	this.instance_10 = new lib.Symbol33();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-91.4,17.1);

	this.instance_11 = new lib.Symbol32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(58.7,-17);

	this.instance_12 = new lib.Symbol31();
	this.instance_12.parent = this;
	this.instance_12.setTransform(37.6,-17);

	this.instance_13 = new lib.Symbol30();
	this.instance_13.parent = this;
	this.instance_13.setTransform(17.6,-17);

	this.instance_14 = new lib.Symbol29();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1.1,-17);

	this.instance_15 = new lib.Symbol28();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-25.1,-17);

	this.instance_16 = new lib.Symbol27();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-42.5,-17);

	this.instance_17 = new lib.Symbol26();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-60.7,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-103,-36.1,206.2,72.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(95.1,21.1);

	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.2,21.1);

	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57,21.1);

	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(36.7,21.1);

	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(13.7,21.1);

	this.instance_5 = new lib.Symbol11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.6,21.1);

	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-31.2,21.1);

	this.instance_7 = new lib.Symbol9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-51.7,21.1);

	this.instance_8 = new lib.Symbol8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-70.8,21.1);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-91.4,21.1);

	this.instance_10 = new lib.Symbol6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(48.9,-21.1);

	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(30.2,-21.1);

	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(9.1,-21.1);

	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-18.6,-21.1);

	this.instance_14 = new lib.Symbol2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-46.4,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-104.6,-43.2,209.5,86.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drop();
	this.instance.parent = this;
	this.instance.setTransform(5.2,132.1,0.367,0.367,0,0,0,14.2,21.9);

	this.instance_1 = new lib.drop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.2,111.3,0.367,0.367,0,0,0,14.2,21.9);

	this.instance_2 = new lib.drop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.2,90.7,0.367,0.367,0,0,0,14.2,21.9);

	this.instance_3 = new lib.drop();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.2,70,0.367,0.367,0,0,0,14.2,21.9);

	this.instance_4 = new lib.drop();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.2,49.4,0.367,0.367,0,0,0,14.2,21.9);

	this.instance_5 = new lib.drop();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.2,28.7,0.367,0.367,0,0,0,14.2,21.9);

	this.instance_6 = new lib.drop();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5.2,8.1,0.367,0.367,0,0,0,14.2,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(1.8,1.3,7.1,137.6), null);


(lib.drops = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(5.2,-77.7,1,1,0,0,0,5.2,70);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.2,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.drops, new cjs.Rectangle(1.8,-146.4,7.1,285.4), null);


(lib.dpsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.drops();
	this.instance.parent = this;
	this.instance.setTransform(5.2,203,1,1,0,0,0,5.2,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,1.3,7.1,285.3);


(lib.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ins = new lib.ins2();
	this.ins.parent = this;
	this.ins.setTransform(35.5,20.5,1,1,0,0,0,35.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.ins).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(0,0,71,41), null);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ins = new lib.ins();
	this.ins.parent = this;
	this.ins.setTransform(35.5,20.5,1,1,0,0,0,35.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.ins).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(0,0,71,41), null);


(lib.cal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smlc
	this.instance = new lib.smlc();
	this.instance.parent = this;
	this.instance.setTransform(74,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// home
	this.instance_1 = new lib.home_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sun
	this.instance_2 = new lib.sun_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ppl
	this.instance_3 = new lib.ppl_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.cal, new cjs.Rectangle(-92,-42,184,84), null);


(lib.arr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(34.1,90.8,1,1,0,0,0,34.1,76);

	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.2,90.7,1,1,0,0,0,37.3,83.1);

	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.6,90.2,1,1,0,0,0,40.5,90.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arr, new cjs.Rectangle(0,0,112.1,180.5), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arr = new lib.arr();
	this.arr.parent = this;
	this.arr.setTransform(11.9,27.1,0.211,0.211,0,0,0,56.1,90.4);

	this.txt = new lib.t23();
	this.txt.parent = this;
	this.txt.setTransform(118.3,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.arr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,206.6,69.7), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arr = new lib.arr();
	this.arr.parent = this;
	this.arr.setTransform(11.9,26.7,0.211,0.211,0,0,0,56.1,90.4);

	this.txt = new lib.t22();
	this.txt.parent = this;
	this.txt.setTransform(121.1,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.arr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,212.2,69.7), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arr = new lib.arr();
	this.arr.parent = this;
	this.arr.setTransform(11.9,26.7,0.211,0.211,0,0,0,56.1,90.4);

	this.txt = new lib.t21();
	this.txt.parent = this;
	this.txt.setTransform(120.5,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.arr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,211.1,69.7), null);


(lib.dropsAll = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// dpsa
	this.instance = new lib.dpsa();
	this.instance.parent = this;
	this.instance.setTransform(173.7,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dpsa
	this.instance_1 = new lib.dpsa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dpsa
	this.instance_2 = new lib.dpsa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.9,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dpsa
	this.instance_3 = new lib.dpsa();
	this.instance_3.parent = this;
	this.instance_3.setTransform(56.4,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dpsa
	this.instance_4 = new lib.dpsa();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.5,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// dpsa
	this.instance_5 = new lib.dpsa();
	this.instance_5.parent = this;
	this.instance_5.setTransform(107.5,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// dpsa
	this.instance_6 = new lib.dpsa();
	this.instance_6.parent = this;
	this.instance_6.setTransform(89.8,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// dpsa
	this.instance_7 = new lib.dpsa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(72.4,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// dpsa
	this.instance_8 = new lib.dpsa();
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.2,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// dpsa
	this.instance_9 = new lib.dpsa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(22.9,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// dpsa
	this.instance_10 = new lib.dpsa();
	this.instance_10.parent = this;
	this.instance_10.setTransform(157,70,1,1,0,0,0,5.2,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.dropsAll, new cjs.Rectangle(1.8,1.3,175.6,285.3), null);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(132.3,29.2,1,1,180,0,0,35.5,20.5);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.5,26.2,1,1,0,0,0,35.5,20.5);

	this.instance_2 = new lib.cloud2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,18.3,0.887,0.887,0,0,0,35.5,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(0,0,167.8,49.7), null);


(lib.t2r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(103.3,187.1,1,1,0,0,0,103.3,34.9);

	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.1,111,1,1,0,0,0,106.1,34.9);

	this.instance_2 = new lib.Symbol20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105.5,34.9,1,1,0,0,0,105.5,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2r, new cjs.Rectangle(0,0,212.2,221.9), null);


(lib.hand_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hand = new lib.hnd();
	this.hand.parent = this;
	this.hand.setTransform(-152.5,43,1,1,0,0,0,-142.5,43);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Layer 1
	this.clouds = new lib.clouds();
	this.clouds.parent = this;
	this.clouds.setTransform(-109.2,-48.5,1.143,1.143,0,0,0,83.9,24.9);
	this.clouds.shadow = new cjs.Shadow("rgba(0,51,102,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFtJOIt5gKIlogyImGAAQCHkMCJkKQEUoXAMAAIIIgyIHBgyIEsAeIFUBkIDSAyICWB4IAUPTg");
	mask.setTransform(-134.7,-0.3);

	// Layer 2
	this.drops = new lib.dropsAll();
	this.drops.parent = this;
	this.drops.setTransform(-94.9,-71.2,1,1,9.7,0,0,98.4,143.8);

	var maskedShapeInstanceList = [this.drops];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.drops).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(-295,-80,292.9,166), null);


// stage content:
(lib._240x400_insur = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var w = document.getElementById('canvas').offsetWidth;
		var h = document.getElementById('canvas').offsetHeight;
		
		function g(parent){
			var i, key, arr = []; 
			// iterate over every property name in the clip  
			for (key in parent) {  
				if (parent[key] instanceof createjs.Container) {
					arr.push(parent[key]);
				}  
			}
			arr.shift();
			return arr.reverse();
		} 
		
		var repeated = false;
		
		function check(){
			if (repeated) {
				tl.stop();
			}
		}
		
		var clouds = g(this.weather.clouds);
		var cloudsIns = [];
		
		var drops = g(this.weather.drops);
		var dropsIns = [];
		
		
		
		for (var dr = 0; dr < drops.length; dr++){
			var drop = drops[dr];
			var td = new TimelineMax({repeat: -1, paused: true});
			td.to(drop, 1 + dr/20 , {y:'+=147', ease: Linear.easeNone});
			dropsIns.push(td)
			//cloudsIns = 
		}
		
		
		for (var cl = 0; cl < clouds.length; cl++){
			var ctl = new TimelineMax({repeat: -1, paused: true});
			var ins = clouds[cl].ins;
			var chng = .2*(cl+1)/2;
			ctl.to(ins, .4+chng, {scaleX: '+=.1', scaleY: '+=.1', ease: Sine.easeOut});
			ctl.to(ins, .4+chng, {scaleX: '-=.1', scaleY: '-=.1', ease: Sine.easeIn});
			cloudsIns.push(ctl);
		}
		
		function rain(){
			for (var i = 0; i < cloudsIns.length; i++) {
				cloudsIns[i].play();
			}
			for (var j = 0; j < dropsIns.length; j++) {
				dropsIns[j].play();
			}
		}
		
		function rainOff(){
			console.log('off');
			for (var i = 0; i < cloudsIns.length; i++) {
				cloudsIns[i].stop();
			}
			for (var j = 0; j < dropsIns.length; j++) {
				dropsIns[j].stop();
			}
		}
		
		var tl = new TimelineMax({repeat: -1, repeatDelay: .3, onRepeat: function(){
			repeated = true;
		}});
		
		function getTxt(txa) {
			var retArr = [];
			for (var i = 0; i < txa.length; i++) {
				var obj = {
					arrow: g(txa[i].arr),
					tx: txa[i].txt
				};
				retArr.push(obj);
			}
			return retArr;
		}
		
		
		var cal = g(this.cal);
		var cal2 = g(this.cal2);
		
		var l2 = this.logo2;
		l2.visible = false;
		
		var t1 = g(this.t1);
		var t2 = g(this.t2);
		var t3 = g(this.t3);
		
		var arrT2 = getTxt(t2)
		
		tl.showT = function(arr){
			var tml = this;
			for (var i = 0; i < arr.length; i++) {
				var obj = arr[i];
				tml
					.staggerFrom(obj.arrow, .6, {x: '-=100', alpha: 0, ease: Back.easeOut}, .1, '-=.8')
					.from(obj.tx, .9, {alpha: 0}, '-=.5')
					.to({s:1}, .5, {s:0})
			}
			return tml
		}
		
		
		
		tl
			.from(this.sph, .4, {alpha: 0, y: '+=50', ease: Expo.easeOut})
			.staggerFrom(cal, 1.1, {scaleX: 0, scaleY: 0, ease: Elastic.easeOut.config(1, .55)}, .25, '-=.4')
			.add('weather', '-=.8')
			.to({a:1}, 0, {a:0, onComplete:rain})
			.staggerFrom(clouds, 1, {scaleX: 0, scaleY: 0, ease:  Elastic.easeOut.config(1, .55)}, .1, 'weather')
			
			.staggerFrom(t1, .6, {alpha: 0, y: 0, ease: Elastic.easeOut.config(1, .55)},  .03, 'weather')
			
			.from(this.weather.hand , .9, {x: '-=250', ease: Expo.easeOut}, '-=.5')
			.staggerFrom(drops, .4, {alpha: 0}, .08, '-=.7')
			
			
			.add('sl1e', '+=1')
			
			.staggerTo([this.t1, this.cal, this.sph, this.weather], 1, {x:'-='+w, ease: Expo.easeIn}, .06, 'sl1e', rainOff)
			.from(this.logo, .9, {scaleX: 0, scaleY: 0, ease: Elastic.easeOut.config(1, .55)}, '-=.2')
			.showT(arrT2)
			
			
			.add('sl2e', '+=.6')
			
			.staggerTo(t2, .5, {x: '-=120', alpha: 0, ease: Sine.easeIn}, .05, 'sl2e')
			.to(this.logo, .6, {x: l2.x, y: l2.y, ease: Expo.easeInOut}, '-=.2')
			.staggerFrom(cal2, 1.1, {scaleX: 0, scaleY: 0, ease: Elastic.easeOut.config(1, .55)}, .25, '-=.6')
			.staggerFrom(t3, .9, {alpha: 0, y: 0, ease: Elastic.easeOut.config(1, .55)},  .05, '-=1.2')
			.from(this.url, .6, {y: '+=50', alpha: 0, ease: Expo.easeOut}, '-=1')
			.from(this.cur, .6, {y: h, ease: Expo.easeOut}, '-=.1')
			.to(this.cur, .15, {scaleX: '-=.1', scaleY: '-=.1'})
			.to(this.cur, .3, {scaleX: '+=.1', scaleY: '+=.1', onComplete:check})
			
			.add('off', '+=1')
			
			.staggerTo([this.t3, this.cal2, this.logo, this.url, this.cur], .5, {x:'-='+w, ease: Expo.easeIn}, .03, 'off')
		
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.cur = new lib.cur();
	this.cur.parent = this;
	this.cur.setTransform(173.3,359);

	this.url = new lib.url();
	this.url.parent = this;
	this.url.setTransform(120,366.6,1.09,1.09,0,0,0,0,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.url},{t:this.cur}]}).wait(1));

	// logo
	this.logo2 = new lib.logo_1();
	this.logo2.parent = this;
	this.logo2.setTransform(120,262);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// Layer 7
	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(120,47);

	this.cal2 = new lib.cal();
	this.cal2.parent = this;
	this.cal2.setTransform(120,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cal2},{t:this.t3}]}).wait(1));

	// Layer 1
	this.t2 = new lib.t2r();
	this.t2.parent = this;
	this.t2.setTransform(122.2,124.7,1,1,0,0,0,106.1,111);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(120,319);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(120,336.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 4
	this.weather = new lib.hand_1();
	this.weather.parent = this;
	this.weather.setTransform(91.5,140,1,1,0,0,0,-142.5,43);

	this.timeline.addTween(cjs.Tween.get(this.weather).wait(1));

	// cal
	this.cal = new lib.cal();
	this.cal.parent = this;
	this.cal.setTransform(117,226);

	this.timeline.addTween(cjs.Tween.get(this.cal).wait(1));

	// sph
	this.sph = new lib.sph_1();
	this.sph.parent = this;
	this.sph.setTransform(120,278.5);

	this.timeline.addTween(cjs.Tween.get(this.sph).wait(1));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#156CB7"],[0,1],-5,180,0,-5,180,339.9).s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59,69,301.8,531);
// library properties:
lib.properties = {
	id: 'C1295432D82646309E015B1D610B194E',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hand.png?1503640312311", id:"hand"},
		{src:"images/home.png?1503640312311", id:"home"},
		{src:"images/logo.png?1503640312311", id:"logo"},
		{src:"images/ppl.png?1503640312311", id:"ppl"},
		{src:"images/smc.png?1503640312311", id:"smc"},
		{src:"images/sph.png?1503640312311", id:"sph"},
		{src:"images/sun.png?1503640312311", id:"sun"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C1295432D82646309E015B1D610B194E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;