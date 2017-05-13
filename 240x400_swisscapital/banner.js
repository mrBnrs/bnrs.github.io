(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.im1 = function() {
	this.initialize(img.im1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,182);


(lib.im2 = function() {
	this.initialize(img.im2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,207);


(lib.im3 = function() {
	this.initialize(img.im3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.im4 = function() {
	this.initialize(img.im4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,344);// helper functions:

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
	this.shape.graphics.f("#0063D0").s().p("AggArIAAgKIAvg/IgvAAIAAgNIBBAAIAAALIgwBAIAwAAIAAALg");
	this.shape.setTransform(52.4,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0063D0").s().p("AAVA8IgegnIgPAOIAAAZIgNAAIAAh3IANAAIAABOIAtgtIARAAIgmAmIAmAwg");
	this.shape_1.setTransform(44,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0063D0").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(36.8,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0063D0").s().p("AgLA9QgEgCgFgDQgFgCgDgEIgGgIQgGgJgCgLQgDgLAAgLQAAgKADgLQACgLAGgJQAGgJAIgFIAJgFQAGgBAFAAQAGAAAGABQAFACAEADQAJAFAFAJQAGAJACALQADALAAAKQAAALgDALQgCALgGAJIgGAIQgDAEgFACQgEADgFACIgMABIgLgBgAgNgsQgGAFgDAGQgEAHgCAKQgBAIgBAIIACASQACAIAEAIQADAHAGAEQAFAEAIAAQAJAAAFgEQAGgEAEgHQADgIACgIIACgSQgBgIgBgIQgCgKgDgHQgEgGgGgFQgFgDgJAAQgIAAgFADg");
	this.shape_3.setTransform(29.3,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0063D0").s().p("AgKA9QgFgCgFgDQgEgCgEgEIgGgIQgGgJgDgLQgCgLAAgLQAAgKACgLQADgLAGgJQAFgJAJgFIAKgFQAFgBAFAAQAGAAAGABQAFACAEADQAJAFAFAJQAGAJACALQADALAAAKQAAALgDALQgCALgGAJIgGAIQgEAEgEACQgEADgFACIgMABIgKgBgAgNgsQgGAFgDAGQgFAHgBAKQgCAIABAIQgBAJACAJQABAIAFAIQADAHAGAEQAFAEAIAAQAJAAAGgEQAFgEAEgHQAEgIABgIIACgSQAAgIgCgIQgBgKgEgHQgEgGgFgFQgGgDgJAAQgIAAgFADg");
	this.shape_4.setTransform(18.3,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0063D0").s().p("AgKA9QgFgCgFgDQgEgCgEgEIgGgIQgGgJgDgLQgCgLAAgLQAAgKACgLQADgLAGgJQAGgJAIgFIAKgFQAFgBAFAAQAGAAAFABQAGACAEADQAJAFAGAJQAFAJADALQACALAAAKQAAALgCALQgDALgFAJIgHAIQgDAEgFACQgEADgGACIgLABIgKgBgAgOgsQgFAFgEAGQgEAHgBAKQgBAIAAAIIABASQABAIAEAIQAEAHAFAEQAHAEAHAAQAJAAAGgEQAFgEAEgHQADgIACgIIABgSQAAgIgBgIQgCgKgDgHQgEgGgFgFQgGgDgJAAQgHAAgHADg");
	this.shape_5.setTransform(7.3,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0063D0").s().p("AgNA9IgMgFIgKgGIgHgHIAJgKQAFAHAJAFIAKACQAEACAFAAQAGAAAFgCQAGgBADgDQAEgDACgEQACgEAAgFQAAgGgCgEQgCgFgEgCQgEgDgGAAQgFgCgGAAIgHAAIgFAAIAAgNIAFABIAHAAQAFAAAFgBQAFgCAEgCIAGgGQACgEAAgFQAAgFgCgEQgCgEgEgDQgEgCgFgBIgJgBQgKAAgHADQgIAEgHAHIgIgKQAHgHAKgFIALgFQAGgBAGAAQAJAAAHACQAIACAFAEQAGAFADAFQADAHAAAHQAAAHgDAFQgCAEgEAEIgIAFIgJADIAJABQAFADAEADQAEADADAGQADAGAAAHQAAAHgDAHQgDAGgGAFQgFAEgIADQgIACgKAAQgGAAgHgBg");
	this.shape_6.setTransform(-3.5,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0063D0").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_7.setTransform(-10.3,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0063D0").s().p("AAXArIgXhFIgWBFIgNAAIgchWIAOAAIAWBFIAWhFIALAAIAWBFIAWhFIAOAAIgcBWg");
	this.shape_8.setTransform(-18.9,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0063D0").s().p("AAXArIgXhFIgVBFIgOAAIgchWIAOAAIAVBFIAYhFIAKAAIAWBFIAWhFIAOAAIgcBWg");
	this.shape_9.setTransform(-32.1,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0063D0").s().p("AAXArIgXhFIgWBFIgNAAIgchWIAOAAIAVBFIAXhFIALAAIAXBFIAVhFIAOAAIgcBWg");
	this.shape_10.setTransform(-45.3,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0063D0").ss(1,2,0,3).p("AobAAIQ3AA");
	this.shape_11.setTransform(3.6,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.url, new cjs.Rectangle(-77.5,0,155,26.6), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAiIAAgaIgSAAIgQAaIgMAAIASgbIgHgCIgFgEIgEgFIgBgIQAAgFABgDQACgEACgDQADgDAEgBQAEgCAFAAIAjAAIAABDgAgNgUQgDADAAAFQAAAFACADQADADAGAAIAXAAIAAgWIgXAAQgFAAgDADg");
	this.shape.setTransform(46.7,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAiIAAg0IgjA0IgKAAIAAhDIAKAAIAAAzIAjgzIAKAAIAABDg");
	this.shape_1.setTransform(39.2,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAiIAAgeIgjAAIAAAeIgKAAIAAhDIAKAAIAAAcIAjAAIAAgcIAKAAIAABDg");
	this.shape_2.setTransform(31.5,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgFgDgGQgCgHAAgIQAAgGACgGQADgHAEgFQAFgFAGgDQAGgDAHAAQAHAAAGADQAGADAFAFQAEAFACAHQACAHAAAGIAAACIg2AAQABAGACADQABAFADADIAHAFQAFACAEAAQAGAAAGgCQAFgDAEgEIAFAIQgEAEgHADQgHACgIABQgHgBgHgCgAAWgDIgBgIQgBgEgDgDQgCgEgFgCQgEgCgFAAQgFAAgEACQgFACgCAEQgDADgBAEIgCAIIArAAIAAAAg");
	this.shape_3.setTransform(23.7,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAaQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIAEgFQADgHACgOIAEghIAuAAIAABDIgKAAIAAg5IgbAAIgDAYIgDAQQgCAGgDAFQgDAEgDACQgEABgFABg");
	this.shape_4.setTransform(15.5,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAiIAAg0IgWA0IgDAAIgWg0IAAA0IgKAAIAAhDIANAAIAUAxIAVgxIANAAIAABDg");
	this.shape_5.setTransform(7.6,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAwIAAhdIALAAIAAAKQADgFAGgDIAHgDIAGgBQAGAAAGADQAFACAEAFQAEAEADAHQACAHAAAIQAAAIgCAGQgDAGgEAFQgEAFgFACQgGACgGAAQgGAAgGgDQgGgDgEgGIAAAlgAgMgiQgFADgDAFIAAAdQADAFAFADQAGADAGAAQAEAAAEgCQAEgCADgDQADgEABgEQACgFAAgFQAAgGgCgEQgBgFgDgEQgDgDgEgCQgEgCgEAAQgGAAgGADg");
	this.shape_6.setTransform(-0.7,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgFgEQgEgFgCgHQgDgGAAgIQAAgGADgGQACgHAEgFQAFgFAGgDQAGgDAHAAQAIAAAGADQAGADAFAFQAEAFACAHQACAGABAGQgBAIgCAGQgCAHgEAFQgFAEgGADQgGACgIABQgHgBgGgCgAgJgXQgEACgDAEQgDAEgBAFQgBAEAAAEQAAAFABAFQABAFADADQADAEAEACQAEACAFAAQAGAAADgCQAEgCAEgEQADgDABgFQACgFAAgFQAAgEgCgEQgBgFgDgEIgIgGQgDgCgGAAQgFAAgEACg");
	this.shape_7.setTransform(-8.9,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFA8IAAgkQgDAFgEADQgFADgGAAQgFAAgFgCQgEgCgEgFQgDgFgBgGQgCgHAAgIQAAgHACgHQABgGADgFQAEgFAEgCQAFgDAFAAQAGAAAEAEQAGADACAFIAAgkIAKAAIAAAkQADgFAFgDQAEgEAHAAQAFAAAEADQAEACAEAFQADAEACAHQACAHAAAHQAAAIgCAHQgCAGgDAFQgEAFgEACQgEACgFAAQgGAAgFgDQgEgDgEgGIAAAlgAALgWQgEADgCAFIAAAdQACAFAEADQAFADAEAAQAFAAACgCIAGgFIADgJIABgKIgBgJIgDgJIgGgFQgCgCgFAAQgEAAgFADgAgbgXQgDACgCADQgCAEgBAFIgBAJIABAKQABAFACAEQACADADACQADACAEAAQAFAAAFgDQADgDACgFIAAgdQgCgFgDgDQgFgDgFAAQgEAAgDACg");
	this.shape_8.setTransform(-18.5,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgEgEQgFgFgCgHQgCgGAAgIQAAgGACgGQACgHAFgFQAEgFAGgDQAHgDAGAAQAHAAAHADQAGADAEAFQAFAFACAHQACAGAAAGQAAAIgCAGQgCAHgFAFQgEAEgGADQgHACgHABQgGgBgHgCgAgJgXQgEACgDAEQgCAEgCAFQgCAEABAEQgBAFACAFQACAFACADQADAEAEACQAFACAEAAQAFAAAEgCQAFgCACgEQADgDACgFQABgFABgFQgBgEgBgEQgCgFgDgEIgHgGQgEgCgFAAQgEAAgFACg");
	this.shape_9.setTransform(-28.1,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAhQgFgCgFgFQgFgFgDgGQgCgHAAgIQAAgGACgGQADgHAFgFQAEgFAGgDQAGgDAHAAQAHAAAGADQAGADAEAFQAFAFACAHQACAHAAAGIAAACIg2AAQABAGABADQACAFADADIAIAFQAEACAFAAQAFAAAGgCQAGgDADgEIAGAIQgGAEgHADQgGACgIABQgHgBgHgCgAAWgDIgBgIQgBgEgDgDQgDgEgEgCQgEgCgFAAQgFAAgFACQgEACgCAEQgDADgBAEIgCAIIArAAIAAAAg");
	this.shape_10.setTransform(-36,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAwIAAhdIALAAIAAAKQADgFAGgDIAHgDIAGgBQAGAAAGADQAFACAEAFQAEAEADAHQACAHAAAIQAAAIgCAGQgDAGgEAFQgEAFgFACQgGACgGAAQgGAAgGgDQgGgDgEgGIAAAlgAgMgiQgFADgDAFIAAAdQADAFAFADQAGADAGAAQAEAAAEgCQAEgCADgDQADgEABgEQACgFAAgFQAAgGgCgEQgBgFgDgEQgDgDgEgCQgEgCgEAAQgGAAgGADg");
	this.shape_11.setTransform(-43.7,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAhQgFgCgFgFQgFgFgDgGQgCgHAAgIQAAgGACgGQADgHAFgFQAEgFAGgDQAGgDAGAAQAIAAAGADQAGADAEAFQAEAFADAHQACAHAAAGIAAACIg2AAQAAAGACADQACAFADADIAIAFQAEACAFAAQAFAAAGgCQAGgDADgEIAGAIQgGAEgHADQgGACgIABQgHgBgHgCgAAXgDIgCgIQgBgEgDgDQgDgEgEgCQgEgCgGAAQgEAAgFACQgEACgCAEQgDADgBAEIgCAIIAsAAIAAAAg");
	this.shape_12.setTransform(-51.8,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAiIAAg5IgjAAIAAA5IgKAAIAAhDIA3AAIAABDg");
	this.shape_13.setTransform(-59.6,9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAiIAAg0IgjA0IgKAAIAAhDIAKAAIAAAzIAjgzIAKAAIAABDg");
	this.shape_14.setTransform(-70.9,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAiIAAg0IgjA0IgKAAIAAhDIAKAAIAAAzIAjgzIAKAAIAABDg");
	this.shape_15.setTransform(67.2,-7.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAiIAAg0IgjA0IgKAAIAAhDIAKAAIAAAzIAjgzIAKAAIAABDg");
	this.shape_16.setTransform(59.5,-7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAhQgGgDgFgFQgEgFgDgGQgCgGAAgIQAAgGACgHQADgGAEgFQAFgFAGgDQAGgCAHAAQAJgBAGAEQAFAEAEAEIgHAHQgDgEgEgDQgFgCgFAAQgFAAgEACQgEACgDAEQgDADgCAFQgBAEAAAFQAAAGABAFQACAEADAEQADADAEACQAEACAFABQALgBAGgIIAHAGQgEAFgFADQgGADgJABQgHAAgGgDg");
	this.shape_17.setTransform(52.3,-7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAhQgGgDgFgFQgEgFgDgGQgCgGAAgIQAAgGACgHQADgGAEgFQAFgFAGgDQAGgCAHAAQAJgBAGAEQAFAEAEAEIgHAHQgDgEgEgDQgFgCgFAAQgFAAgEACQgEACgDAEQgDADgCAFQgBAEAAAFQAAAGABAFQACAEADAEQADADAEACQAEACAFABQALgBAGgIIAHAGQgEAFgFADQgGADgJABQgHAAgGgDg");
	this.shape_18.setTransform(45.4,-7.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAiIAAg0IgjA0IgKAAIAAhDIAKAAIAAAzIAjgzIAKAAIAABDg");
	this.shape_19.setTransform(38,-7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAYAiIAAg0IgWA0IgDAAIgWg0IAAA0IgKAAIAAhDIANAAIAUAxIAVgxIANAAIAABDg");
	this.shape_20.setTransform(29.6,-7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgFgFQgEgFgCgGQgCgGgBgIQABgGACgHQACgGAEgFQAFgFAGgDQAGgCAHAAQAIAAAGACQAGADAFAFQAEAFACAGQADAHAAAGQAAAIgDAGQgCAGgEAFQgFAFgGADQgGADgIAAQgHAAgGgDgAgIgXQgFADgDADQgDADgBAGQgCAEAAAEQAAAGACAEQABAFADAEQADADAFACQADADAFAAQAGAAADgDQAFgCADgDQADgEABgFQABgEAAgGQAAgEgBgEQgBgGgDgDIgIgGQgDgCgGAAQgFAAgDACg");
	this.shape_21.setTransform(21.1,-7.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQAiIgXgfIgLALIAAAUIgLAAIAAhDIALAAIAAAjIAigjIAOAAIgeAfIAeAkg");
	this.shape_22.setTransform(14,-7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAiIgVgcIgUAcIgLAAIAagiIgZghIAMAAIASAaIATgaIAMAAIgZAhIAbAig");
	this.shape_23.setTransform(3,-7.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdAiIAAhDIAKAAIAABDgAgmAiIAAhDIAKAAIAAAaIAaAAQAEAAAEACIAGAEQADACACAEIABAIQAAAEgCAEQgBAEgDADIgGAEQgEACgEAAgAgcAYIAZAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgZAAg");
	this.shape_24.setTransform(-5.4,-7.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAiIAAg5IgUAAIAAgKIAxAAIAAAKIgUAAIAAA5g");
	this.shape_25.setTransform(-13.2,-7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdAiIAAhDIAKAAIAABDgAgmAiIAAhDIAKAAIAAAaIAaAAQAEAAAEACIAGAEQADACACAEIABAIQAAAEgCAEQgBAEgDADIgGAEQgEACgEAAgAgcAYIAZAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgZAAg");
	this.shape_26.setTransform(-21,-7.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfAwIAAhdIALAAIAAAKQADgFAGgDIAHgDIAGgBQAGAAAGADQAFACAEAFQAEAEADAHQACAHAAAIQAAAIgCAGQgDAGgEAFQgEAFgFACQgGACgGAAQgGAAgGgDQgGgDgEgGIAAAlgAgMgiQgFADgDAFIAAAdQADAFAFADQAGADAGAAQAEAAAEgCQAEgCADgDQADgEABgEQACgFAAgFQAAgGgCgEQgBgFgDgEQgDgDgEgCQgEgCgEAAQgGAAgGADg");
	this.shape_27.setTransform(-29.7,-6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQAiIgXgfIgLALIAAAUIgLAAIAAhDIALAAIAAAjIAigjIAOAAIgeAfIAeAkg");
	this.shape_28.setTransform(-37.1,-7.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIAhQgGgDgFgFQgEgFgDgGQgCgGAAgIQAAgGACgHQADgGAEgFQAFgFAGgDQAGgCAHAAQAJgBAGAEQAFAEAEAEIgHAHQgDgEgEgDQgFgCgFAAQgFAAgEACQgEACgDAEQgDADgCAFQgBAEAAAFQAAAGABAFQACAEADAEQADADAEACQAEACAFABQALgBAGgIIAHAGQgEAFgFADQgGADgJABQgHAAgGgDg");
	this.shape_29.setTransform(-44.4,-7.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAgQgKgEgDgEIAFgGQAFAEAHACQAGADAHAAIAIgBQADgBADgCIAEgDQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgDgCgCIgFgEIgGgCIgIAAIgPAAIAAgIIAPAAIAHAAIAGgDQADgBACgCQABgCAAgDIgBgFIgEgDIgHgCIgGgBQgPAAgIAJIgGgHQAFgFAHgCIAIgDIAIAAIAMABQAFABAEACQAFADACADQACADAAAFQAAADgCADIgEAFIgGAEIgGABIAGAAIAHADIAFAFQACADAAAFQAAAEgCADQgDAEgEADQgEADgFABQgGABgHAAQgKAAgHgDg");
	this.shape_30.setTransform(-55.3,-7.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMAhQgFgDgFgEQgFgFgDgHQgCgGAAgIQAAgGACgHQADgGAFgFQAEgFAGgDQAGgCAGAAQAIAAAGACQAGADAEAFQAEAFADAHQACAHAAAGIAAACIg2AAQAAAFACAEQACAFADADIAIAFQAEACAFAAQAFAAAGgCQAGgCADgEIAGAGQgGAGgHACQgGADgIAAQgHAAgHgDgAAXgDIgCgIQgBgEgDgDQgDgDgEgCQgEgCgGAAQgEAAgFACQgEACgCADQgDADgBAEIgCAIIAsAAIAAAAg");
	this.shape_31.setTransform(-62.6,-7.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAvIAAhdIA7AAIAAALIgwAAIAAAaIAZAAQAHAAAGADQAFACAEAEQAEADABAFQACAFAAAGQAAAFgCAFQgBAGgEADQgEAEgFACQgGADgHAAgAgVAkIAYAAIAHgBIAGgDQAFgFAAgIIgBgIIgEgFQgCgDgEgBQgDgBgEAAIgYAAg");
	this.shape_32.setTransform(-70.4,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-76.8,-19,153.6,38.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA4QgFgFAAgHQAAgHAFgEQAFgGAGAAQAHAAAFAGQAFAEAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFgAgLARIgFhNIAgAAIgEBNg");
	this.shape.setTransform(36.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARArIgRgaIgQAaIgeAAIAdgrIgcgqIAfAAIAOAXIAPgXIAeAAIgcAqIAeArg");
	this.shape_1.setTransform(29.8,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAsQgFgCgEgDQgFgEgCgFQgDgGAAgHQAAgHADgGQACgEAFgEQAEgDAFgCQAFgBAGAAQAIAAAHACQAHADAEAFIAAgLQAAgFgFgEQgFgDgHAAQgHAAgGACQgGADgGAFIgKgSQAGgFANgFQAKgEAKAAQAIAAAHACQAIACAFADQAGAFADAGQADAIAAAJIAAA1IgbAAIAAgIQgEAEgIADQgGADgIAAQgGAAgFgBgAgKAKQgEACAAAFQAAAFAEADQAEACAGAAIAIgBQAFgCACgDIAAgHQgCgDgFgCIgIgCQgGABgEACg");
	this.shape_2.setTransform(19.9,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAqQgJgDgGgGQgGgGgEgJQgEgIAAgKQAAgJAEgJQAEgIAGgGQAGgGAJgDQAIgEAKAAQAHAAAFACQAGABAEADQAHADAHAHIgSARQgDgEgEgCQgEgCgGAAIgHABIgHAFIgDAGQgCAEAAAEIACAJIADAGQADADAEACIAHABQAGAAAEgCQAEgCADgEIASARQgFAGgJAFQgEACgGABQgFABgHAAQgKAAgIgDg");
	this.shape_3.setTransform(10.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQA8QgIgDgHgGQgGgGgEgIIgCgJIgBgKQAAgKADgIQADgHAGgHQAHgGAIgDQAJgEAJAAQAJAAAJAEQAIADAGAGQAGAHADAIQADAJAAALIAAAGIg9AAQACAGAFAEQADADAEABQADABAEAAQAFAAAGgCQAHgCAEgDIALARIgHAFIgJAEQgJACgLAAQgJAAgJgDgAATAJQgBgGgEgDQgCgDgDgBQgEgBgEAAIgHABIgFAEQgEADgBAGIAjAAIAAAAgAALgmQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAEgGAAQgFAAgEgEgAgbgmQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_4.setTransform(1.4,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtAWQAEAAADgGQAEgFABgNIAHgpIBJAAIAABVIgcAAIAAg+IgWAAIgDAVQgBALgCAIQgEAIgEAFQgGAGgGADQgIACgIAAg");
	this.shape_5.setTransform(-9.2,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAsIgJgCQgJgEgGgGQgGgGgDgJQgDgIAAgJQAAgIADgJQADgIAGgGQAGgHAJgDIAJgDIAKgBQAHAAANAEQAJADAGAHQAGAGADAIQADAJAAAIQAAAJgDAIQgDAJgGAGQgGAGgJAEQgNADgHAAgAgHgTIgGAFIgEAHIgBAHIABAIIAEAHIAGAFIAHABQAEAAAEgBQAEgCACgDIAEgHQABgDAAgFQAAgDgBgEIgEgHQgCgDgEgCQgEgBgEAAIgHABg");
	this.shape_6.setTransform(-19.4,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKArIgSgeIgIAKIAAAUIgcAAIAAhVIAcAAIAAAiIAZgiIAiAAIggAnIAiAug");
	this.shape_7.setTransform(-28.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAsQgFgCgEgDQgFgEgCgFQgDgGAAgHQAAgHADgGQACgEAFgEQAEgDAFgCQAFgBAGAAQAIAAAHACQAHADAEAFIAAgLQAAgFgFgEQgFgDgHAAQgHAAgGACQgGADgGAFIgKgSQAGgFANgFQAKgEAKAAQAIAAAHACQAIACAFADQAGAFADAGQADAIAAAJIAAA1IgbAAIAAgIQgEAEgIADQgGADgIAAQgGAAgFgBgAgKAKQgEACAAAFQAAAFAEADQAEACAGAAIAIgBQAFgCACgDIAAgHQgCgDgFgCIgIgCQgGABgEACg");
	this.shape_8.setTransform(-44.2,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQArIAAggIgeAAIAAAgIgcAAIAAhVIAcAAIAAAeIAeAAIAAgeIAbAAIAABVg");
	this.shape_9.setTransform(-54.2,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQArIAAguIggAuIgaAAIAAhVIAcAAIAAAsIAdgsIAcAAIAABVg");
	this.shape_10.setTransform(-69.5,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-76.8,-12.9,153.6,25.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARArIgRgaIgQAaIgeAAIAdgrIgcgqIAfAAIAOAXIAPgXIAeAAIgcAqIAeArg");
	this.shape.setTransform(66.7,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAsQgFgCgEgDQgFgEgCgFQgDgGAAgHQAAgHADgGQACgEAFgEQAEgDAFgCQAFgBAGAAQAIAAAHACQAHADAEAFIAAgLQAAgFgFgEQgFgDgHAAQgHAAgGACQgGADgGAFIgKgSQAGgFANgFQAKgEAKAAQAIAAAHACQAIACAFADQAGAFADAGQADAIAAAJIAAA1IgbAAIAAgIQgEAEgIADQgGADgIAAQgGAAgFgBgAgKAKQgEACAAAFQAAAFAEADQAEACAGAAIAIgBQAFgCACgDIAAgHQgCgDgFgCIgIgCQgGABgEACg");
	this.shape_1.setTransform(56.9,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghArIAAhVIBDAAIAAAXIgnAAIAAA+g");
	this.shape_2.setTransform(48.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrArIAAhVIAcAAIAAAcIAcAAQAHAAAGACQAGACAEAEQAEAEACAFQACAFAAAGQAAAGgCAFQgCAGgEADQgFAFgFACQgGADgHgBgAgPAVIAWAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgWAAg");
	this.shape_3.setTransform(39.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQArIAAggIgeAAIAAAgIgcAAIAAhVIAcAAIAAAeIAeAAIAAgeIAbAAIAABVg");
	this.shape_4.setTransform(28.5,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAqQgIgCgHgHQgGgFgEgJIgCgJIgBgKQAAgIADgJQADgIAGgGQAHgHAIgDQAJgEAJAAQAJAAAJAEQAIADAGAHQAGAGADAJQADAJAAAKIAAAGIg9AAQACAGAFAFQADACAEABQADACAEgBQAFAAAGgBQAHgDAEgDIALARIgHAFIgJAEQgJACgLAAQgJAAgJgDgAATgIQgBgGgEgEQgCgCgDgBQgEgCgEAAIgHABIgFAEQgEAEgBAGIAjAAIAAAAg");
	this.shape_5.setTransform(18.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYA3IAAgXIgvAAIAAAXIgbAAIAAgtQAFgBADgEIADgGIACgLIAGgpIBJAAIAAA+IAJAAIAAAugAgKgLIgDALQgCAFgDAEIAgAAIAAgnIgWAAg");
	this.shape_6.setTransform(8,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQArIAAguIggAuIgaAAIAAhVIAcAAIAAAsIAdgsIAcAAIAABVg");
	this.shape_7.setTransform(-7.4,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtA9IAAh3IAcAAIAAAKQAFgGAHgDQAFgDAIAAQAIAAAHADQAHADAFAFQAFAHADAIQADAJAAALQAAALgDAHQgDAIgFAHQgFAFgHADQgHADgIAAQgIAAgFgDQgHgDgFgGIAAArgAgKghQgEACgDADIAAAbQADACAEACQAFACAFAAQADABADgCQAEgBACgDIAEgFIACgJQAAgFgCgEIgEgHIgGgEQgDgBgDAAQgFAAgFACg");
	this.shape_8.setTransform(-17.8,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQArIAAg+IgeAAIAAA+IgcAAIAAhVIBVAAIAABVg");
	this.shape_9.setTransform(-28.7,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAqQgIgCgHgHQgGgFgEgJIgCgJIgBgKQAAgIADgJQADgIAGgGQAHgHAIgDQAJgEAJAAQAJAAAJAEQAIADAGAHQAGAGADAJQADAJAAAKIAAAGIg9AAQACAGAFAFQADACAEABQADACAEgBQAFAAAGgBQAHgDAEgDIALARIgHAFIgJAEQgJACgLAAQgJAAgJgDgAATgIQgBgGgEgEQgCgCgDgBQgEgCgEAAIgHABIgFAEQgEAEgBAGIAjAAIAAAAg");
	this.shape_10.setTransform(-43.5,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNArIAAg+IgXAAIAAgXIBKAAIAAAXIgYAAIAAA+g");
	this.shape_11.setTransform(-52.4,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgrArIAAhVIAcAAIAAAcIAcAAQAHAAAGACQAGACAEAEQAEAEACAFQACAFAAAGQAAAGgCAFQgCAGgEADQgEAFgGACQgHADgGgBgAgPAVIAWAAQAFAAACgCQACgCAAgDQAAgDgCgCQgCgCgFAAIgWAAg");
	this.shape_12.setTransform(-61.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYA3IAAgXIgvAAIAAAXIgbAAIAAgtQAFgBADgEIADgGIACgLIAGgpIBJAAIAAA+IAJAAIAAAugAgKgLIgDALQgCAFgDAEIAgAAIAAgnIgWAAg");
	this.shape_13.setTransform(-72.1,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA8IAEgZQADACAEAAIAHgBQAEgCABgCIACgFIgjhXIAdAAIATA3IAUg3IAdAAIgnBiQgDAHgEAEQgDAFgEACQgFADgFABIgMABIgMgBg");
	this.shape_14.setTransform(-82.2,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyA8IAAh3IBdAAIAAAbIg+AAIAAAPIAdAAQAKAAAIADQAHADAGAGQAFAFACAGQADAHAAAIQAAAIgDAHQgCAHgFAFQgGAGgHADQgIADgKAAgAgTAhIAZAAQAGAAAEgDQADgEAAgFQAAgGgDgDQgEgDgGAAIgZAAg");
	this.shape_15.setTransform(-92.3,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-100.5,-12.9,201,25.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBPQgFgEAAgGQAAgGAFgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAGgEAEQgDADgGAAQgEAAgEgDgAgMAbQgCgFAAgGQAAgHADgGIAIgJIAKgIIALgIQAEgEAEgEQADgFAAgHQAAgIgHgHQgEgDgFgCQgGgCgGABIgMABIgKADQgJAGgGAJIgNgNQAFgFAFgFIAMgIQANgGARAAQALAAAIACQAIAEAHAEQAGAFADAHQAEAHgBAIQABAJgEAHQgEAGgEAFIgMAJIgLAIIgJAIQgDAEAAAGIABAGQACADAEACIgOAHQgFgEgDgFg");
	this.shape.setTransform(38.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA6IAAhjIgiAAIAAgQIBVAAIAAAQIgiAAIAABjg");
	this.shape_1.setTransform(28.3,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeA6IAAg0Ig7AAIAAA0IgSAAIAAhzIASAAIAAAwIA7AAIAAgwIASAAIAABzg");
	this.shape_2.setTransform(16.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA4QgLgFgHgIQgIgIgEgMQgDgLAAgMQAAgLADgLQAEgMAIgIQAHgIALgFQALgFAMAAQANAAALAFQAKAFAIAIQAHAIAEAMQAEALAAALQAAAMgEALQgEAMgHAIQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHAEgFAGQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAHQAFAFAHAEQAIAEAIAAQAJAAAHgEQAHgEAFgFQAFgHADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgGgHgEQgHgEgJAAQgIAAgIAEg");
	this.shape_3.setTransform(3.4,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApA6IAAhaIgmBaIgFAAIgmhaIAABaIgSAAIAAhzIAXAAIAjBVIAjhVIAYAAIAABzg");
	this.shape_4.setTransform(-11.1,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA5QgLgFgHgIQgIgIgEgMQgFgLAAgNQAAgLAFgLQAEgMAHgIQAIgIAKgFQALgFAMAAQANAAAKAFQALAFAGAIQAIAIADAMQAFAMAAAMIAAAEIheAAQABAIADAIQADAGAGAGQAFAFAHAEQAHADAJAAQAKAAAJgEQAKgEAHgGIAIALQgJAJgLAFQgMAEgNAAQgMAAgMgEgAAngGQgBgGgCgIQgCgGgFgGQgEgFgIgEQgHgEgKAAQgIAAgHAEQgHAEgFAFQgFAGgCAGQgCAHgBAHIBMAAIAAAAg");
	this.shape_5.setTransform(-25.5,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BRIAAifIASAAIAAASQAGgJAKgFIALgFQAGgBAFgBQALABAKAEQAJAEAHAIQAHAIAEALQADALAAAPQAAANgDALQgEALgHAIQgHAIgJAEQgKAFgLAAQgLAAgKgGQgKgFgHgKIAAA9gAgVg7QgJAFgFAIIAAA0QAFAHAJAGQAKAFAKABQAIgBAHgDQAHgDAFgHQAFgGACgGQADgJAAgJQAAgKgDgIQgCgJgFgGQgFgFgHgEQgHgDgIAAQgKAAgKAFg");
	this.shape_6.setTransform(-38.8,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA7QgIgDgGgFQgFgFgEgHQgEgHABgJQgBgKAEgHQAEgHAFgEQAGgFAIgCQAGgCAIAAQALgBAKAEQAJAEAIAHIAAgUQAAgMgJgGQgEgDgFgBQgGgCgGAAQgJAAgJAEQgIAEgJAIIgIgMQASgUAcAAQAJAAAIADQAIACAGAEQAGAFAEAHQAEAIAAAKIAABPIgSAAIAAgNQgPAQgXAAQgIAAgGgCgAgMAAQgFABgEAEQgIAGAAAMQAAALAIAHQAEAEAFABQAFACAGAAQAJAAAIgEQAJgDAGgIIAAgVQgGgIgJgDQgIgCgJgBQgGABgFABg");
	this.shape_7.setTransform(-58.8,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeA6IAAg0Ig7AAIAAA0IgSAAIAAhzIASAAIAAAwIA7AAIAAgwIASAAIAABzg");
	this.shape_8.setTransform(-71.4,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-80,-16.6,160,33.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBPQgEgEgBgGQABgGAEgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAGgEAEQgDADgGAAQgFAAgDgDgAgLAbQgDgFAAgGQAAgHAEgGIAIgJIAJgIIALgIQAFgEADgEQADgFAAgHQAAgIgHgHQgEgDgFgCQgGgCgHABIgLABIgKADQgJAGgGAJIgNgNQAFgFAFgFIAMgIQANgGAQAAQALAAAJACQAJAEAGAEQAGAFADAHQADAHAAAIQAAAJgDAHQgEAGgFAFIgLAJIgLAIIgIAIQgEAEAAAGIABAGQACADAEACIgOAHQgFgEgCgFg");
	this.shape.setTransform(48.6,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBRIgGgBIADgQIAEABIAGABQAFgBAFgCQAEgCADgIIAHgSIgwh0IATAAIAmBfIAmhfIAUAAIg6CLQgEAMgJAGQgJAGgLAAg");
	this.shape_1.setTransform(37.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBMQgKgFgIgIQgHgJgFgNQgDgMAAgOQAAgUADgPIAGgOQACgGAEgGQAIgJALgGQALgGAPgCIAPgCIAKgEIAFgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIARAAQAAAHgDAFQgFAEgHADQgHADgHABIgQADQgMACgIADQgJAEgGAFQgFAFgEAGIgDAPIAHgKQAEgEAGgEIAMgFQAGgCAHgBQAMAAALAGQAJAFAIAHQAGAJAEALQAEAKAAAMQAAAMgEAMQgDALgIAJQgHAHgLAFQgKAFgOABQgMgBgLgFgAgQgUQgHAEgEAGQgFAGgDAIQgDAIABAIQgBAJADAJQADAHAFAHQAEAGAHADQAIAFAIAAQAJAAAIgFQAHgDAEgGQAFgHADgHQACgJAAgJQAAgIgCgIQgDgIgFgGQgEgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_2.setTransform(24.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA6IAAhzIASAAIAAAtIArAAQAJAAAGACQAHADAEAFQAFAEADAHQACAGAAAIQAAAGgCAHQgDAGgFAGQgEAFgHACQgGADgJAAgAgeAqIApAAQAKAAAEgGQAGgFgBgIQABgJgGgGQgEgFgKAAIgpAAg");
	this.shape_3.setTransform(11.8,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsBJIAAgeIhXAAIAAAeIgSAAIAAgtQAEAAADgDQAEgCACgEQADgFACgIIAEgVIAIg5IBPAAIAABjIAOAAIAAAugAgVgMQgCAPgEAKQgEAJgHAFIBEAAIAAhTIguAAg");
	this.shape_4.setTransform(-1.7,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA7QgIgDgGgFQgFgFgEgHQgDgHgBgJQABgKADgHQAEgHAFgEQAGgFAIgCQAGgCAIAAQALgBAKAEQAJAEAIAHIAAgUQAAgMgJgGQgEgDgFgBQgGgCgGAAQgJAAgJAEQgJAEgHAIIgJgMQASgUAcAAQAJAAAIADQAIACAGAEQAGAFAEAHQADAIABAKIAABPIgSAAIAAgNQgPAQgXAAQgIAAgGgCgAgMAAQgFABgEAEQgIAGAAAMQAAALAIAHQAEAEAFABQAFACAGAAQAJAAAIgEQAJgDAGgIIAAgVQgGgIgJgDQgIgCgJgBQgGABgFABg");
	this.shape_5.setTransform(-14.9,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxA6IAAhzIA/AAQAIAAAGACQAGACAFAFQAIAHAAAOQAAALgGAGQgFAHgIACIAJADQAEACACAEIAFAJQABAEAAAFQAAAHgCAHQgCAFgFAFQgEADgGADQgGACgJAAgAgfAqIArAAQAJAAAEgEQAGgGAAgIQgBgGgEgGQgFgFgJgBIgrAAgAgfgJIArAAQAHABAFgFQAFgFAAgGQAAgIgFgFQgFgEgHAAIgrAAg");
	this.shape_6.setTransform(-27.4,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA4QgKgEgJgJQgHgIgEgLQgEgLAAgNQAAgMAEgLQAEgLAHgIQAJgJAKgEQALgFALAAQAQAAALAGQAKAGAGAJIgMAKQgGgHgHgEQgHgEgKAAQgIAAgHAEQgIADgEAGQgGAGgDAIQgCAJAAAIQAAAKACAIQADAIAGAGQAEAGAIADQAHAEAIAAQATAAALgPIAMALQgGAJgKAFQgLAGgQAAQgLAAgLgFg");
	this.shape_7.setTransform(-39.9,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVA7QgIgDgGgFQgFgFgEgHQgEgHABgJQgBgKAEgHQAEgHAFgEQAGgFAIgCQAGgCAIAAQALgBAKAEQAJAEAIAHIAAgUQAAgMgJgGQgEgDgFgBQgGgCgGAAQgJAAgJAEQgIAEgJAIIgIgMQASgUAcAAQAJAAAIADQAIACAGAEQAGAFAEAHQAEAIAAAKIAABPIgSAAIAAgNQgPAQgXAAQgIAAgGgCgAgMAAQgFABgEAEQgIAGAAAMQAAALAIAHQAEAEAFABQAFACAGAAQAJAAAIgEQAJgDAGgIIAAgVQgGgIgJgDQgIgCgJgBQgGABgFABg");
	this.shape_8.setTransform(-58.8,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeA6IAAg0Ig7AAIAAA0IgSAAIAAhzIASAAIAAAwIA7AAIAAgwIASAAIAABzg");
	this.shape_9.setTransform(-71.4,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-80,-16.6,160,33.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBPQgDgEAAgGQAAgGADgDQAFgEAEAAQAGAAADAEQAEADAAAGQAAAGgEAEQgDADgGAAQgEAAgFgDgAgLAbQgCgFAAgGQAAgHADgGIAIgJIAJgIIAKgIQAGgEACgEQAEgFAAgHQAAgIgHgHQgDgDgGgCQgFgCgIABIgLABIgKADQgJAGgHAJIgLgNQAEgFAFgFIAMgIQANgGARAAQAKAAAJACQAIAEAHAEQAGAFADAHQADAHABAIQgBAJgDAHQgDAGgGAFIgLAJIgLAIIgJAIQgDAEAAAGIACAGQABADADACIgNAHQgFgEgCgFg");
	this.shape.setTransform(31.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA6Igpg0IgTATIAAAhIgSAAIAAhzIASAAIAAA9IA8g9IAXAAIgzA1IAzA+g");
	this.shape_1.setTransform(21,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA4QgLgEgIgJQgHgIgEgLQgEgLAAgNQAAgMAEgLQAEgLAHgIQAIgJALgEQALgFALAAQAQAAAKAGQALAGAGAJIgMAKQgFgHgIgEQgHgEgKAAQgIAAgHAEQgIADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAIADQAHAEAIAAQATAAALgPIAMALQgGAJgLAFQgKAGgQAAQgLAAgLgFg");
	this.shape_2.setTransform(8.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBRIgGgBIADgQIAEABIAGABQAFgBAFgCQAEgCADgIIAHgSIgwh0IATAAIAmBfIAmhfIAUAAIg6CLQgEAMgJAGQgJAGgLAAg");
	this.shape_3.setTransform(-3.7,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeA6IAAhjIg7AAIAABjIgSAAIAAhzIBfAAIAABzg");
	this.shape_4.setTransform(-16.1,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIA6IAAhjIgiAAIAAgQIBVAAIAAAQIgiAAIAABjg");
	this.shape_5.setTransform(-27.5,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXA4QgLgFgHgIQgIgIgEgMQgDgLAAgMQAAgLADgLQAEgMAIgIQAHgIALgFQALgFAMAAQANAAALAFQAKAFAIAIQAHAIAEAMQAEALAAALQAAAMgEALQgEAMgHAIQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHAEgFAGQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAHQAFAFAHAEQAIAEAIAAQAJAAAHgEQAHgEAFgFQAFgHADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgGgHgEQgHgEgJAAQgIAAgIAEg");
	this.shape_6.setTransform(-39.2,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA7QgIgDgGgFQgFgFgEgHQgEgHABgJQgBgKAEgHQAEgHAFgEQAGgFAIgCQAGgCAIAAQALgBAKAEQAJAEAIAHIAAgUQAAgMgJgGQgEgDgFgBQgGgCgGAAQgJAAgJAEQgIAEgJAIIgIgMQASgUAcAAQAJAAAIADQAIACAGAEQAGAFAEAHQAEAIAAAKIAABPIgSAAIAAgNQgPAQgXAAQgIAAgGgCgAgMAAQgFABgEAEQgIAGAAAMQAAALAIAHQAEAEAFABQAFACAGAAQAJAAAIgEQAJgDAGgIIAAgVQgGgIgJgDQgIgCgJgBQgGABgFABg");
	this.shape_7.setTransform(-58.8,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeA6IAAg0Ig7AAIAAA0IgSAAIAAhzIASAAIAAAwIA7AAIAAgwIASAAIAABzg");
	this.shape_8.setTransform(-71.4,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-80,-16.6,160,33.3), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D82333").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-120,-199.9,240,400), null);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvKeIAA07MAlfAAAIAAU7g");
	this.shape.setTransform(0,-67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate, new cjs.Rectangle(-120,-134,240,134), null);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D82333").s().p("Ag5CMQgJAAgHgGQgGgIAAgJIAAjpQAAgJAGgHQAHgHAJAAIByAAQAKAAAGAHQAHAHAAAJIAADpQAAAJgHAIQgGAGgKAAgAgHBhQgDAEgBAEQABAFADAEQADADAEAAQAFAAADgDQADgEAAgFQAAgEgDgEQgDgEgFAAQgEAAgDAEgAg5BSIByAAIAAijIhyAAgAgWhtQAAAFAFAAIAiAAQAFAAABgFQgBgHgFAAIgiAAQgFAAAAAHg");
	this.shape.setTransform(-43.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADkBMQgWgeAAguQAAgtAWgeQAZgiAsAAQAtAAAZAiQAWAeAAAtQAAAugWAeQgZAigtAAQgsAAgZgigAEGAAQAAA+AjAAQAkAAAAg+QAAg9gkAAQgjAAAAA9gAAdBMQgXgeAAguQAAgtAXgeQAZgiAsAAQAsAAAZAiQAWAeAAAtQAAAugWAeQgZAigsAAQgsAAgZgigAA+AAQAAA+AkAAQAkAAAAg+QAAg9gkAAQgkAAAAA9gAiqBMQgWgeAAguQAAgtAWgeQAZgiAsAAQAsAAAZAiQAXAeAAAtQAAAugXAeQgZAigsAAQgsAAgZgigAiJAAQAAA+AkAAQAkAAAAg+QAAg9gkAAQgkAAAAA9gAlhBlQgWgJgNgPIAcgmQAKALARAGQAQAGAPAAQARAAAKgGQAJgGAAgJQAAgKgIgEQgJgEgVAAIgdAAIAAgwIAdABQAiAAAAgRQAAgJgKgGQgKgFgQAAQgdAAgYAVIgagjQAfgiA2AAQAoAAAXAQQAWAQAAAaQAAASgOAOQgNANgUADQATACAPAMQAQAPAAAVQAAAcgYASQgYARgoAAQgdAAgYgJg");
	this.shape_1.setTransform(12.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone, new cjs.Rectangle(-51.6,-14,103.3,28), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1918").s().p("AgQBgIAAi/IAhAAIAAC/g");
	this.shape.setTransform(61,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1918").s().p("AgxA0QgUgWAAgdQABggASgUQASgVAaAAQALAAALAFQAKAEAKAKIAAgPIAiAAIAACJIgiAAIAAgOQgKAJgKAEQgKAFgKAAQgaAAgTgVgAgZgdQgKAMAAARQAAASAKALQALAMAOAAQAQAAALgMQAKgLAAgSQAAgRgKgMQgLgKgQgBQgOABgLAKg");
	this.shape_1.setTransform(50.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1918").s().p("AgRBfIAAhsIgRAAIAAgdIARAAIAAgzIAgAAIAAAzIAVAAIAAAdIgVAAIAABsg");
	this.shape_2.setTransform(40.2,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1918").s().p("AgQBiIAAiJIAgAAIAACJgAgOg7QgGgGAAgJQAAgKAGgGQAGgGAIgBQAJABAGAGQAHAHAAAJQAAAKgHAGQgHAGgIAAQgIABgGgIg");
	this.shape_3.setTransform(34.5,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1918").s().p("AhEBhIAAi8IAhAAIAAAOQAKgJAKgEQALgGAKAAQAbAAASAVQASAUAAAhQAAAdgTAVQgSAWgbgBQgKABgKgFQgLgFgJgJIAABCgAgag0QgLALAAASQAAATALAKQALAMAPAAQAPAAAKgMQALgLAAgSQAAgRgLgMQgKgLgPAAQgPAAgLALg");
	this.shape_4.setTransform(24.7,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1918").s().p("AgyA0QgSgVAAgeQAAggASgUQASgVAbAAQAKAAALAFQAKAEAKAKIAAgPIAhAAIAACJIghAAIAAgOQgKAJgKAEQgKAFgLAAQgaAAgTgVgAgYgdQgLAMAAARQAAASALALQAKAMAPAAQAPAAALgMQAKgLAAgSQAAgRgKgMQgLgKgQgBQgPABgJAKg");
	this.shape_5.setTransform(8.7,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1918").s().p("AgwAzQgUgWAAgcQAAgUAJgQQAKgRASgKQASgKAUAAQATAAARAJQAQAIAKAPIgcAQQgJgKgHgCQgHgDgLgBQgRAAgNAMQgLANAAAQQAAASALALQAMALARAAQAWAAANgQIAaATQgVAdgnAAQgiAAgVgWg");
	this.shape_6.setTransform(-6.3,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D82332").s().p("AC0BeQgLgFgGgKIALgMQAOAPAOAAQAKAAAHgGQAIgHAAgJQAAgJgFgGQgFgEgRgKQgSgKgHgJQgGgLAAgKQAAgPAKgLQALgLAQAAQASABATASIgLANQgNgOgOgBQgIABgHAFQgGAGAAAHQAAAHAFAGQAGAGAPAIQAUAKAGAKQAHAKAAAMQAAAQgLAMQgMAMgRAAQgMABgLgGgABfBeQgLgFgHgKIALgMQAOAPAOAAQAKAAAIgGQAHgHAAgJQAAgJgEgGQgHgGgPgIQgTgKgGgJQgGgKAAgLQAAgQAKgKQAKgLAQAAQATABATASIgLANQgOgOgOgBQgHABgHAFQgGAGAAAHQAAAIAFAFQAFAGAQAIQATAKAHAKQAHAKAAAMQAAAQgMAMQgMAMgRAAQgLABgLgGgAjhBeQgLgFgGgKIALgMQAOAPAOAAQAKAAAHgGQAIgHAAgJQAAgJgFgGQgFgEgRgKQgSgKgHgJQgGgLAAgKQAAgPAKgLQALgLAQAAQASABATASIgLANQgNgOgOgBQgIABgHAFQgGAGAAAHQAAAHAFAGQAGAGAPAIQAUAKAGAKQAHAKAAAMQAAAQgLAMQgMAMgRAAQgMABgLgGgAAyBgIAAiJIARAAIAACJgAgQBgIgrhiIgrBiIgDAAIg5iJIASAAIApBjIArhjIADAAIArBjIAphjIASAAIg6CJgAAwhJQgEgEAAgHQAAgGAEgEQAEgFAGAAQAHAAADAFQAEAEAAAGQAAAHgEAEQgEADgGAAQgFAAgFgDg");
	this.shape_7.setTransform(-38.4,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-62.7,-12.3,125.5,24.6), null);


(lib.im4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.im4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im4_1, new cjs.Rectangle(-150,-172,300,344), null);


(lib.im3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bM/IAA59MAu3AAAIAAZ9g");
	mask.setTransform(0,17);

	// Layer 1
	this.instance = new lib.im3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-100);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im3_1, new cjs.Rectangle(-150,-66,300,166.1), null);


(lib.im2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3WMEIAA4HMAutAAAIAAYHg");
	mask.setTransform(-0.4,0);

	// Layer 1
	this.instance = new lib.im2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-103.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im2_1, new cjs.Rectangle(-150,-77.2,299.1,154.4), null);


(lib.im1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.im1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im1_1, new cjs.Rectangle(-150,-91,300,182), null);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA6IAAhZIg8BZIgRAAIAAhzIASAAIAABYIA7hYIASAAIAABzg");
	this.shape.setTransform(72.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoA6IAAhzIBQAAIAAAQIg+AAIAABjg");
	this.shape_1.setTransform(61.4,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwA6IAAhzIASAAIAAAtIArAAQAIAAAHACQAHADAFAFQAEAEACAHQADAGAAAIQAAAGgDAHQgCAGgEAGQgFAFgHACQgHADgIAAgAgeAqIAoAAQALAAAEgGQAFgFABgIQgBgJgFgGQgEgFgLAAIgoAAg");
	this.shape_2.setTransform(49.8,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeA6IAAg0Ig7AAIAAA0IgSAAIAAhzIASAAIAAAwIA7AAIAAgwIASAAIAABzg");
	this.shape_3.setTransform(36.5,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVA5QgKgFgIgIQgIgIgEgMQgEgLgBgNQABgLAEgLQAEgMAHgIQAIgIAKgFQALgFAMAAQANAAAKAFQALAFAGAIQAIAIAEAMQADAMAAAMIAAAEIhdAAQAAAIAEAIQADAGAGAGQAFAFAHAEQAHADAJAAQAKAAAJgEQAKgEAHgGIAIALQgJAJgLAFQgMAEgOAAQgMAAgLgEgAAngGQgBgGgCgIQgCgGgFgGQgEgFgIgEQgHgEgKAAQgIAAgHAEQgHAEgFAFQgEAGgDAGQgDAHAAAHIBMAAIAAAAg");
	this.shape_4.setTransform(23.2,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAsBJIAAgeIhXAAIAAAeIgSAAIAAgtQAEAAADgDQAEgCACgEQADgFACgIIAEgVIAIg5IBPAAIAABjIAOAAIAAAugAgVgMQgCAPgEAKQgEAJgHAFIBEAAIAAhTIguAAg");
	this.shape_5.setTransform(9.5,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAxA6IAAhzIASAAIAABzgAhDA6IAAhzIASAAIAAAtIAsAAQAIAAAGACQAHADAFAFQAFAEACAHQACAGAAAIQAAAGgCAHQgDAGgEAGQgFAFgHACQgGADgIAAgAgxAqIAqAAQAJAAAFgGQAFgFAAgIQAAgJgFgGQgFgFgJAAIgqAAg");
	this.shape_6.setTransform(-11.7,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeA6IAAg0Ig7AAIAAA0IgSAAIAAhzIASAAIAAAwIA7AAIAAgwIASAAIAABzg");
	this.shape_7.setTransform(-26.9,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA7A6Igqg0IgIAIIAAAsIgRAAIAAgsIgIgIIgqA0IgXAAIA0g+Ig0g1IAXAAIAyAzIAAgzIARAAIAAAzIAygzIAXAAIg0A1IA0A+g");
	this.shape_8.setTransform(-42,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoBRIgGgBIADgQIAEABIAGABQAFgBAFgCQAEgCADgIIAHgSIgwh0IATAAIAmBfIAmhfIAUAAIg6CLQgEAMgJAGQgJAGgLAAg");
	this.shape_9.setTransform(-56.4,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAuBQIAAhJIhcAAIAABJIgUAAIAAifIAUAAIAABFIBcAAIAAhFIAUAAIAACfg");
	this.shape_10.setTransform(-70.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(-81.3,-16.6,162.8,33.3), null);


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


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-23.7,21.9);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.7,-6.1);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-100.5,-40.9,201,81.9), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(0,115.7);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.8);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-115.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-80,-132.3,160,264.7), null);


(lib.images = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.im1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-122.1,0.767,0.767);

	this.instance_1 = new lib.im2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,5.4,0.767,0.767);

	this.instance_2 = new lib.im3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,115.3,0.767,0.767);
	this.instance_2.filters = [new cjs.ColorFilter(0.67, 0.67, 0.67, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-152,-68,304,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.images, new cjs.Rectangle(-115,-191.9,230.4,383.9), null);


// stage content:
(lib._240x400_swisscapital = function(mode,startPosition,loop) {
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
		
		var tl = new TimelineMax({repeat: -1, onRepeat: function(){
			repeated = true;
		}});
		
		var t1  = g(this.t1);
		var t2  = g(this.t2);
		var imgs  = g(this.imgs).reverse();
		
		tl
		.from(this.plate, 1, {y:0, ease: Expo.easeOut}, '+=.2')
		.from(this.header, .7, {y:'-=50', alpha: 0, ease: Expo.easeOut}, '-=.5')
		.add('fr1', '-=.3')
		.staggerFrom(t1, .7, {x: '+=250', alpha: 0, ease: Expo.easeOut}, .2,  'fr1')
		.staggerFrom(imgs, .9, {x: '+='+w,  ease: Expo.easeOut}, .2, 'fr1+=.3')
		
		.add('fr1e', '+=1.3')
		.staggerTo(t1, .5, {x: '-=150', alpha: 0, ease: Expo.easeOut}, .1,  'fr1e')
		.staggerTo(imgs, .6, {x: '-='+w,  ease: Expo.easeOut}, .1, 'fr1e+=.15')
		.to(this.header, .5, {alpha:0}, 'fr1e+=.3') 
		.from(this.logo, .5, {alpha:0}, 'fr1e+=.6') 
		
		.add('fr2', '-=.3')
		.staggerFrom(t2, .7, {x: '+=150', alpha: 0, ease: Expo.easeOut}, .2,  'fr2')
		.from(this.img1, 3, {scaleX:'+=.3', scaleY:'+=.3', ease: Linear.easeNone}, 'fr2+=.7')
		.from(this.img1, .3, {alpha:0}, 'fr2+=.7')
		
		.add('fr1e', '-=.5')
		.staggerTo([this.t2, this.img1], .5, {alpha:0}, .1, 'fr2e')
		
		.to(this.logo, .5, {y: '-=50', alpha:0}, 'fr2e+=.3') 
		.to(this.plate, .5, {y: 0}, 'fr2e+=.6') 
		
		.to(this.red, .7, {alpha:0}, '-=.2')
		.staggerFrom([this.logo2, this.phone, this.url], .7, {y:'-=50', alpha: 0, ease: Expo.easeOut}, .15, '-=.2')
		.from(this.cur, .6, {y: h, ease: Expo.easeOut})
		.to(this.cur, .3, {scaleX: '-=.15', scaleY: '-=.15'})
		.to(this.cur, .5, {scaleX: '+=.15', scaleY: '+=.15'})
		
		
		.to(this.red, .7, {alpha: 1}, '+=2')
		
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(77.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// header
	this.header = new lib.header();
	this.header.parent = this;
	this.header.setTransform(92.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.header).wait(1));

	// plate
	this.plate = new lib.plate();
	this.plate.parent = this;
	this.plate.setTransform(120,45.1);

	this.timeline.addTween(cjs.Tween.get(this.plate).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(20,2,0,3).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(121.5,340.9);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// img
	this.img1 = new lib.im4_1();
	this.img1.parent = this;
	this.img1.setTransform(120,217);

	this.timeline.addTween(cjs.Tween.get(this.img1).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(101,251.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// imgs
	this.imgs = new lib.images();
	this.imgs.parent = this;
	this.imgs.setTransform(120.1,210.9,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.imgs).wait(1));

	// red
	this.red = new lib.red();
	this.red.parent = this;
	this.red.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// cur
	this.cur = new lib.cur();
	this.cur.parent = this;
	this.cur.setTransform(119.7,351);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// url
	this.url = new lib.url();
	this.url.parent = this;
	this.url.setTransform(114.5,350,1,1,0,0,0,0,13.1);

	this.timeline.addTween(cjs.Tween.get(this.url).wait(1));

	// logo2
	this.logo2 = new lib.logo();
	this.logo2.parent = this;
	this.logo2.setTransform(120,151.6,1.228,1.209,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// phone
	this.phone = new lib.phone();
	this.phone.parent = this;
	this.phone.setTransform(120,210);

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(1));

	// back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,111.1,300,499);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/im1.jpg?1494699923826", id:"im1"},
		{src:"images/im2.jpg?1494699923826", id:"im2"},
		{src:"images/im3.jpg?1494699923826", id:"im3"},
		{src:"images/im4.jpg?1494699923826", id:"im4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;