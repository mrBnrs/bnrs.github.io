(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"banner_atlas_", frames: [[0,279,315,197],[0,0,295,277]]}
];


// symbols:



(lib.car = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.keys = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA0QgDgCAAgDQAAgFADgCQACgDADABQADgBADADQACACAAAFQAAADgCACQgDADgDAAQgDAAgCgDgAgIASIgBgHQAAgFADgEIAFgGIAGgFIAHgFIAFgGQACgDAAgEQAAgGgFgFQgCgCgEgBIgIgBIgHABIgGACQgHAEgEAGIgIgJIAGgGIAIgGQAJgEALAAQAHAAAFACQAGACAEADQAEAEADAEQACAFAAAFQAAAGgCAEQgCAFgEADIgIAGIgHAFIgGAFQgCADAAAEIABAEIADAEIgIAEIgGgGg");
	this.shape.setTransform(218.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnA1IAAhXIgkBXIgFAAIgkhXIAABXIgNAAIAAhpIATAAIAgBPIAhhPIATAAIAABpg");
	this.shape_1.setTransform(208.1,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAzQgKgEgHgIQgHgHgEgKIgDgLIgBgLQAAgLAEgKQAEgKAHgHIAIgHIAJgFQAKgEAKAAQAMAAAKAEIAJAFIAIAHQAGAHAEAKQAEAKAAALIgBALIgDALQgEAKgGAHIgIAHIgJAFQgKAEgMAAQgKAAgKgEgAgPgnQgIADgFAGQgFAGgDAIQgCAIAAAIQAAAJACAIQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAHgDQAIgDAEgGQAGgGACgIQAEgIAAgJQAAgIgEgIQgCgIgGgGQgEgGgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(195.6,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiA1IAAhpIBFAAIAAALIg4AAIAABeg");
	this.shape_3.setTransform(185.4,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiA1IAAhpIBFAAIAAALIg4AAIAAAjIA3AAIAAALIg3AAIAAAkIA4AAIAAAMg");
	this.shape_4.setTransform(176.3,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA1IAAhpIBEAAIAAALIg3AAIAAAfIAdAAQAHAAAHACQAGADAEAEQAFAEACAGQACAGAAAGQAAAHgCAFQgCAGgFAFQgEAEgGADQgGACgIAAgAgYApIAbAAIAJgBQAEgBACgDQAGgGAAgJQAAgEgBgEQgCgEgDgDQgCgCgEgCQgEgBgFAAIgbAAg");
	this.shape_5.setTransform(167.3,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAzQgKgEgHgIQgHgHgEgKIgDgLIgBgLQAAgLAEgKQAEgKAHgHIAIgHIAJgFQAKgEAKAAQAMAAAJAEIAKAFIAHAHQAIAHADAKQAEAKAAALIgBALIgDALQgDAKgIAHIgHAHIgKAFQgJAEgMAAQgKAAgKgEgAgPgnQgIADgEAGQgGAGgCAIQgDAIAAAIQAAAJADAIQACAIAGAGQAEAGAIADQAHADAIAAQAJAAAIgDQAGgDAFgGQAFgGADgIQADgIAAgJQAAgIgDgIQgDgIgFgGQgFgGgGgDQgIgDgJAAQgIAAgHADg");
	this.shape_6.setTransform(156.1,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglA1IAAhpIAqAAQAIAAAGACQAGADAEAEQAFAEACAGQACAGAAAHQAAAGgCAGQgCAGgFADQgEAFgGACQgHADgHAAIgdAAIAAAqgAgYAAIAbAAQAFAAAEgBQAEgCACgDQAGgFAAgJQAAgFgBgEQgCgDgDgDQgCgDgEgBQgEgCgFAAIgbAAg");
	this.shape_7.setTransform(145.7,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfA1IAAheIg9AAIAABeIgNAAIAAhpIBXAAIAABpg");
	this.shape_8.setTransform(135,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDA2IgKgDQgKgEgIgHIgGgIQgDgEgCgGQgFgKAAgMQAAgLAFgLIAFgJIAGgIQAIgHAKgEIAKgDIAKgBQAHAAAGABQAGACAFADIAKAHIAHAIIgLAGIgGgGIgHgFIgIgDIgJgBQgIAAgHADQgIADgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAGQAFAGAIADQAHADAIAAIAJgBIAIgDQAIgEAFgHIALAGQgHAJgKAGQgJAGgPAAIgKgBg");
	this.shape_9.setTransform(120,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglA1IAAhpIANAAIAAAqIAdAAQAHAAAHACQAGADAEAEQAFAEACAGQACAGAAAGQAAAHgCAFQgCAGgFAFQgEAEgGADQgGACgIAAgAgYApIAbAAIAJgBQAEgBACgDQAGgGAAgJQAAgEgBgEQgCgEgDgDQgCgCgEgCQgEgBgFAAIgbAAg");
	this.shape_10.setTransform(106,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvAqQAFAAADgBQAEgCADgFQADgEACgJQADgIABgNIAHg1IBAAAIAABpIgNAAIAAheIgnAAIgGAqQgCASgDAKQgFANgDAEQgFAGgGABQgGACgHAAg");
	this.shape_11.setTransform(94.9,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfA1IAAhUIg9BUIgNAAIAAhpIANAAIAABSIA8hSIAOAAIAABpg");
	this.shape_12.setTransform(84,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglA1IAAhpIBEAAIAAALIg3AAIAAAfIAdAAQAHAAAHACQAGADAEAEQAFAEACAGQACAGAAAGQAAAHgCAFQgCAGgFAFQgEAEgGADQgGACgIAAgAgYApIAbAAIAJgBQAEgBACgDQAGgGAAgJQAAgEgBgEQgCgEgDgDQgCgCgEgCQgEgBgFAAIgbAAg");
	this.shape_13.setTransform(74,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAzQgJgEgHgIQgHgHgEgKIgDgLIgBgLQAAgLAEgKQAEgKAHgHIAHgHIAJgFQAKgEALAAQAMAAAJAEIAKAFIAHAHQAIAHADAKQAEAKAAALIgBALIgDALQgDAKgIAHIgHAHIgKAFQgJAEgMAAQgLAAgKgEgAgPgnQgIADgEAGQgGAGgCAIQgDAIAAAIQAAAJADAIQACAIAGAGQAEAGAIADQAHADAIAAQAJAAAIgDQAHgDAEgGQAFgGAEgIQACgIAAgJQAAgIgCgIQgEgIgFgGQgEgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_14.setTransform(62.9,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAnA1IAAhXIgkBXIgFAAIgkhXIAABXIgNAAIAAhpIATAAIAgBPIAhhPIATAAIAABpg");
	this.shape_15.setTransform(50.3,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAzQgKgEgHgIQgHgHgEgKIgDgLIgBgLQAAgLAEgKQAEgKAHgHIAIgHIAJgFQAKgEAKAAQAMAAAJAEIAKAFIAHAHQAIAHADAKQAEAKAAALIgBALIgDALQgDAKgIAHIgHAHIgKAFQgJAEgMAAQgKAAgKgEgAgPgnQgIADgEAGQgGAGgCAIQgDAIAAAIQAAAJADAIQACAIAGAGQAEAGAIADQAHADAIAAQAJAAAIgDQAGgDAFgGQAFgGADgIQADgIAAgJQAAgIgDgIQgDgIgFgGQgFgGgGgDQgIgDgJAAQgIAAgHADg");
	this.shape_16.setTransform(37.8,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA1IAAheIgjAAIAAgLIBQAAIAAALIgiAAIAABeg");
	this.shape_17.setTransform(27.1,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnA1IAAhpIAvAAQAHAAAFACQAGACAEADQAEAEACAFQACAFAAAGQAAAFgCAEQgBAEgDADIgGAFIgHADQAEABAEABIAHAGIAEAIIACAJQAAAHgCAFQgCAFgEAEQgEAEgGACQgGACgHAAgAgZApIAfAAIAJgBIAGgDIAEgGIABgIIgBgHIgEgGIgGgEQgEgBgFAAIgfAAgAgZgGIAeAAIAJgBIAFgEQAFgFAAgHQAAgIgFgFQgCgCgDgBQgEgCgFAAIgeAAg");
	this.shape_18.setTransform(17.7,11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAkA1IgKgXIg0AAIgJAXIgPAAIArhpIAPAAIArBpgAAWASIgWg5IgWA5IAsAAg");
	this.shape_19.setTransform(7.3,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,224.1,23.5), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglA1IAAhpIANAAIAAAqIAdAAQAHAAAHACQAGADAEAEQAFAEACAGQACAGAAAGQAAAHgCAFQgCAGgFAFQgEAEgGADQgGACgIAAgAgYApIAbAAIAJgBQAEgBACgDQAGgGAAgJQAAgEgBgEQgCgEgDgDQgCgCgEgCQgEgBgFAAIgbAAg");
	this.shape.setTransform(123.7,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA1IAAheIgiAAIAAgLIBQAAIAAALIgiAAIAABeg");
	this.shape_1.setTransform(114.1,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfA1IAAhUIg9BUIgNAAIAAhpIANAAIAABSIA8hSIAOAAIAABpg");
	this.shape_2.setTransform(103.9,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfA1IAAheIg9AAIAABeIgOAAIAAhpIBYAAIAABpg");
	this.shape_3.setTransform(92.6,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmA0QgGgDgDgDIAGgLIAGAFQAEACAEAAIAGAAIAEgDIAEgFIAEgHIACgEIgphMIAPAAIAhBBIAhhBIAQAAIgvBWIgEAJIgGAHIgIAEQgEABgGAAQgHAAgFgCg");
	this.shape_4.setTransform(81.9,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYA1IgogwIgKAMIAAAkIgNAAIAAhpIANAAIAAA2IAug2IAQAAIgrAyIAwA3g");
	this.shape_5.setTransform(72.6,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiA1IAAhpIBFAAIAAALIg3AAIAAAjIA2AAIAAALIg2AAIAAAkIA3AAIAAAMg");
	this.shape_6.setTransform(58.9,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA1IAAheIghAAIAAgLIBQAAIAAALIgiAAIAABeg");
	this.shape_7.setTransform(49.6,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfA1IAAhUIg9BUIgNAAIAAhpIANAAIAABSIA8hSIAOAAIAABpg");
	this.shape_8.setTransform(39.4,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA1IAAheIgiAAIAAgLIBQAAIAAALIgjAAIAABeg");
	this.shape_9.setTransform(29.2,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAzQgKgEgHgIQgHgHgEgKIgDgLIgBgLQAAgLAEgKQAEgKAHgHIAIgHIAJgFQAJgEALAAQAMAAAJAEIAKAFIAHAHQAIAHADAKQAEAKAAALIgBALIgDALQgDAKgIAHIgHAHIgKAFQgJAEgMAAQgLAAgJgEgAgPgnQgIADgEAGQgFAGgEAIQgCAIAAAIQAAAJACAIQAEAIAFAGQAEAGAIADQAHADAIAAQAJAAAIgDQAGgDAFgGQAGgGACgIQADgIAAgJQAAgIgDgIQgCgIgGgGQgFgGgGgDQgIgDgJAAQgIAAgHADg");
	this.shape_10.setTransform(18.5,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiA1IgigtIghAtIgQAAIApg1Igng0IAQAAIAfAqIAfgqIARAAIgnAzIApA2g");
	this.shape_11.setTransform(7.2,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,134.3,23.5), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D82231").s().p("Ap2B/IAAj9ITtAAIAAD9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-63,-12.7,126.2,25.4), null);


(lib.platee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB+IAAjMIhKAAIAAgvIDHAAIAAAvIhJAAIAADMg");
	this.shape.setTransform(62.4,-40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7B+IAAioIh3CoIgzAAIAAj7IA1AAIAACiIB0iiIA3AAIAAD7g");
	this.shape_1.setTransform(37.7,-40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABOCVIAAguIibAAIAAAuIg2AAIAAhaQAJgBAIgDQAIgEAFgIQAGgIAEgPQAEgQAEgYIAPiAICxAAIAADMIAXAAIAABdgAgegPQgDAYgHARQgIATgNALIB0AAIAAidIhLAAg");
	this.shape_2.setTransform(10.2,-37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYB+IAAj7ICxAAIAAAvIh8AAIAAA2IB5AAIAAAuIh5AAIAAA5IB8AAIAAAvg");
	this.shape_3.setTransform(-14.6,-40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkB+IAAj7IB0AAQAVAAAQAHQAQAGAKALQALALAGAPQAFAPAAAQQAAARgGAPQgFANgLALQgLALgPAHQgQAGgVAAIg/AAIAABagAgvgKIA4AAQAQAAALgJQAFgEADgHQACgGAAgIQAAgIgCgGQgDgGgFgFQgLgJgQAAIg4AAg");
	this.shape_4.setTransform(-36.8,-40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApB+IhLhlIgTAXIAABOIg2AAIAAj7IA2AAIAABxIBYhxIBCAAIhkB2IBrCFg");
	this.shape_5.setTransform(-60.1,-40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmCyQgSgEgQgGQgigOgZgYQgYgYgOghQgHgRgDgSQgDgTAAgTQAAgTADgSQADgTAHgQQAOghAYgZQANgMAOgJQAPgJARgHQAQgHASgDQATgEATABQAoAAAhANQARAHAOAJQAPAJAMAMQAMANAKAOQAJAPAHAQQAHAQAEATQADASAAATQAAAogOAhQgHARgJAOQgKAOgMAMQgMANgPAJQgOAJgRAHQghANgoAAQgTAAgTgDgAgrhqQgUAJgOAQQgNAPgIAVQgIAWAAAXQAAAYAIAWQAIAUANAQQAOAPAUAJQATAJAYAAQAYAAATgJQAUgJAOgPQAOgQAIgUQAHgWAAgYQAAgXgHgWQgIgVgOgPQgOgQgUgJQgTgIgYAAQgYAAgTAIg");
	this.shape_6.setTransform(50.7,-85.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkCvIAAkcIhnAAIAAhBIEXAAIAABBIhnAAIAAEcg");
	this.shape_7.setTransform(15.3,-85.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiRCvIAAldIC3AAQAaAAATAHQATAHANANQAMAMAHAQQAFARAAARQABARgFANQgFAOgJAKQgIALgLAGQgKAHgNACQAOADAMAGQAMAIAKALQAJALAFAPQAGAPgBARQAAAUgGARQgGARgOANQgNANgSAHQgUAHgYAAgAhHBvIBgAAQAVAAAMgLQAMgLAAgTQAAgRgMgMQgMgMgVAAIhgAAgAhHgiIBdAAQATAAALgLQALgKAAgRQAAgRgLgKQgLgLgTAAIhdAAg");
	this.shape_8.setTransform(-16.7,-85.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABhCvIgWg7IiVAAIgWA7IhVAAICIldIBcAAICHFdgAA3AyIg3iWIg1CWIBsAAg");
	this.shape_9.setTransform(-52.8,-85.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D82233").s().p("AsfKeIAA07IY/AAIAAU7g");
	this.shape_10.setTransform(0,-67);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.platee, new cjs.Rectangle(-80,-134,160,134), null);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA3IAGgNIAEgNIAEgNIAAgQIAAgPIgEgNQgCgJgIgRIAJgHQAFAGADAHQAEAIADAHQADAJABAIIABAQIgBARQgBAJgDAIQgDAIgEAGQgDAIgFAGg");
	this.shape.setTransform(65.9,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAuIAAguIgfAuIgOAAIAAhCIAOAAIAAAsIAfgsIAOAAIAABCgAgGgcIgHgDQgGgDgFgGIAHgFQADAEAFACQAEADAFAAQAGAAAEgDQAFgCADgEIAHAFQgFAGgGADIgHADIgHAAIgGAAg");
	this.shape_1.setTransform(60.2,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdAiIAAhDIAOAAIAABDgAgqAiIAAhDIAOAAIAAAZIAYAAQAFAAAEABQAFACADADQACACABAEQACAEAAAEQAAAFgCADIgDAHIgIAFQgEACgFAAgAgcAVIAXAAQAEAAACgDQACgCAAgEQAAgEgCgCQgCgCgEAAIgXAAg");
	this.shape_2.setTransform(51,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAiIAAgcIgfAAIAAAcIgOAAIAAhDIAOAAIAAAbIAfAAIAAgbIAOAAIAABDg");
	this.shape_3.setTransform(41.7,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAiIAAg2IgUAAIAAgNIA1AAIAAANIgUAAIAAA2g");
	this.shape_4.setTransform(34.8,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAjQgEgCgDgDQgEgDgCgEQgCgEAAgGQAAgFACgFQACgDAEgDIAHgEIAIAAQAHAAAFABQAFACAFAEIAAgJQgBgDgBgDIgDgDIgFgDIgGgBQgFAAgFADQgFABgEAFIgHgLQAEgDAKgFQAGgCAIAAQAGgBAEACQAGACADACQAFADABAEQADAGAAAGIAAAsIgOAAIAAgHQgFAEgFADQgGACgGAAIgIgBgAgKAEQgEAEAAAFQAAAGAEADQAEAEAGAAQAEAAAEgCQAFgCADgDIAAgKQgDgEgFgCQgEgBgEAAQgGgBgEADg");
	this.shape_5.setTransform(28,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAWIAEgBIADgEIAEgRIAFgiIAzAAIAABDIgPAAIAAg2IgXAAIgDAVIgDAQQgCAHgDAEQgDADgFADQgEACgGAAg");
	this.shape_6.setTransform(20.1,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAiIAAg2IgfAAIAAA2IgOAAIAAhDIA7AAIAABDg");
	this.shape_7.setTransform(12.5,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAhQgGgCgFgFQgEgFgDgHQgCgGAAgIQAAgHACgGQADgHAEgFQAFgEAGgDQAHgCAHAAIAIABIAIACQAFAEAEAEIgJAJQgGgHgKgBQgEAAgDADQgEABgDADIgEAHQgBAEAAAEQAAAFABAEQACAEACAEQADADAEABQADABAEAAQAFAAAEgCQAEgBADgFIAJAJQgEAGgFADQgEACgEABIgIABQgHgBgHgCg");
	this.shape_8.setTransform(5.1,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAhQgGgCgFgFQgFgFgCgHQgDgGAAgIQAAgGADgHQACgGAFgFQAEgFAHgDQAGgCAGAAQAIAAAGACQAGADAFAFQAEAFACAHQADAGAAAIIAAADIg0AAQABAEACADIAEAGQADADADABQAEABAEAAQAFAAAFgCQAGgCADgDIAHAKQgFAFgHACQgHACgJABQgGgBgHgCgAATgFIgBgFIgDgGIgGgFQgEgCgFAAQgDAAgEACIgGAFIgDAGIgCAFIAlAAIAAAAg");
	this.shape_9.setTransform(-2.3,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAvIgHgDQgGgCgFgFQgEgGgCgHQgDgGAAgJIACgVIADgIIAEgHIAEgEIAGgFQAHgDAIgBIAOgDQAEgCAAgCIAOAAQAAAFgDAEQgCADgFACIgJADIgKABQgFABgEACQgFABgDADIgEAGIgDAFQAEgFAHgDIAGgDIAHAAQAHAAAGACQAFADAFAFQAEAFACAGQADAGAAAHQAAAHgDAGQgCAHgFAFQgEAFgGADQgKACgFABgAgIgHQgDABgDADQgCADgBAEQgCADAAAFQAAAEACAFQABAEACADIAGAFQAEABAEAAQAEAAAEgBIAGgFIAEgHIABgJIgBgIIgEgHQgCgDgEgBQgEgDgEAAQgEAAgEADg");
	this.shape_10.setTransform(-10.2,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAiIgUgcIgJAKIAAASIgPAAIAAhDIAPAAIAAAhIAdghIASAAIgcAfIAdAkg");
	this.shape_11.setTransform(-21,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAhQgGgDgFgFQgEgFgDgGQgCgHAAgHQAAgGACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAIAAAGACQAHADAEAFQAFAFACAGQADAHAAAGQAAAHgDAHQgCAGgFAFQgEAFgHADQgGACgIABQgHgBgHgCgAgIgTIgGAEQgCAEgBAEQgCADAAAEQAAAEACAFQABAEACADIAGAFQAEABAEAAQAEAAAEgBIAGgFQADgDABgEIABgJIgBgHIgEgIIgGgEQgEgDgEAAQgEAAgEADg");
	this.shape_12.setTransform(-29.1,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAiIAAgcIgfAAIAAAcIgOAAIAAhDIAOAAIAAAbIAfAAIAAgbIAOAAIAABDg");
	this.shape_13.setTransform(-37.1,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAhQgGgDgFgFQgEgFgDgGQgCgHAAgHQAAgGACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAIAAAGACQAHADAEAFQAFAFACAGQADAHAAAGQAAAHgDAHQgCAGgFAFQgEAFgHADQgGACgIABQgHgBgHgCgAgIgTIgGAEQgCAEgBAEQgCADAAAEQAAAEACAFQABAEACADIAGAFQAEABAEAAQAEAAAEgBIAGgFQADgDABgEIABgJIgBgHIgEgIIgGgEQgEgDgEAAQgEAAgEADg");
	this.shape_14.setTransform(-45.1,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAiIAAhDIAnAAQAFAAAEACQAEABADACQACADABADQABADAAAEQABAFgEAFQgDADgFACQAFAAAEAFQAEAEAAAGQAAAEgCAEQgBADgCACQgDADgEABQgEACgFAAgAgQAVIAYAAQADAAADgCQACgCAAgEQAAgDgCgCQgDgCgDAAIgYAAgAgQgGIAXAAQAEAAABgCQABgBAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQAAgDgDgCQgBgCgEAAIgXAAg");
	this.shape_15.setTransform(-53,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAjIgIgDIgHgDIgGgEIAHgKQAFAEAGACQAGACAHAAQAHAAAFgCQAEgDAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgDQgFgCgHAAIgOAAIAAgKIAOAAQAHAAAEgCQAEgDAAgEQAAgEgEgCQgEgDgHAAQgGAAgGADQgFABgEAFIgIgJQAFgGAHgCIAIgDIAIAAIANABIALADQADADADADQACAEAAAEQAAADgBADIgFAFIgFADIgHACIAHAAIAFAEQAEACACACQABAEAAADQAAAFgCADQgCAEgEADQgFADgFABQgHABgGAAIgKAAg");
	this.shape_16.setTransform(-60.7,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAwIgGgOIgFgRIgBgRIABgQIAFgRIAGgPQADgHAFgGIAJAHQgIARgDAJQgCAHAAAGIgBAPIABAQQAAAGACAHQADAJAIARIgJAHQgFgGgDgIg");
	this.shape_17.setTransform(-65.9,23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D82233").s().p("AgdCUQgNgDgMgGQgWgNgPgWQgKgOgMgjQgIgbABgcQgBgbAIgcQAHgbAPgVQAPgWAWgNQAMgGANgDQAOgEAPAAQAQAAAOAEQANADAMAGQAWANAQAWQAOAVAHAbQAIAcgBAbQABAcgIAbQgMAjgJAOQgQAWgWANQgMAGgNADQgOAEgQAAQgPAAgOgEgAgahYQgLAIgHANQgHAMgDASQgDASAAATQAAAUADASQADARAHANQAHANALAIQALAHAPAAQAQAAAKgHQAMgIAGgNQAHgNAEgRQADgSAAgUQAAgTgDgSQgEgSgHgMQgGgNgMgIQgKgHgQAAQgPAAgLAHg");
	this.shape_18.setTransform(52.7,-5.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D82233").s().p("AgdCUQgNgDgLgGQgYgNgOgWQgKgOgNgjQgHgbAAgcQAAgbAHgcQAIgbAPgVQAOgWAYgNQALgGANgDQAOgEAPAAQAQAAAOAEQANADAMAGQAWANAPAWQAPAVAHAbQAIAcgBAbQABAcgIAbQgMAjgKAOQgPAWgWANQgMAGgNADQgOAEgQAAQgPAAgOgEgAgahYQgLAIgHANQgHAMgDASQgDASAAATQAAAUADASQADARAHANQAHANALAIQALAHAPAAQAQAAALgHQAKgIAIgNQAHgNADgRQACgSAAgUQAAgTgCgSQgDgSgHgMQgIgNgKgIQgLgHgQAAQgPAAgLAHg");
	this.shape_19.setTransform(25.4,-5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D82233").s().p("AgcCUQgOgDgLgGQgYgNgOgWQgKgOgNgjQgGgbgBgcQABgbAGgcQAIgbAPgVQAOgWAYgNQALgGAOgDQANgEAPAAQAQAAANAEQAOADALAGQAYANAOAWQAPAVAIAbQAGAcAAAbQAAAcgGAbQgNAjgKAOQgOAWgYANQgLAGgOADQgNAEgQAAQgPAAgNgEgAgahYQgLAIgHANQgHAMgDASQgDASAAATQAAAUADASQADARAHANQAHANALAIQALAHAPAAQAQAAALgHQAKgIAIgNQAGgNADgRQADgSAAgUQAAgTgDgSQgDgSgGgMQgIgNgKgIQgLgHgQAAQgPAAgLAHg");
	this.shape_20.setTransform(-1.8,-5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D82233").s().p("AglCUQgRgDgPgHQgPgHgLgIQgLgJgJgKIAhgpQAPAQAXAIQAWAJAVAAQAaAAAOgKQAHgFADgHQAEgHAAgIQAAgSgOgIQgGgEgMgCIgagCIgKAAIgLAAIgJABIgGAAIAAg4IAGABIAKAAIALAAIAJAAQAYAAAPgIQAPgHAAgRQAAgIgEgHQgEgGgIgFQgPgIgXAAQgrAAgfAeIgfgnQAIgKAMgIQAMgJAOgGQAbgOAmAAQAZAAAVAGQAUAFAPALQAOAKAHAPQAIAOAAATQABAOgGALQgGALgJAJQgJAJgLAFQgMAGgMACQALABANAEQAMAFAJAJQAKAJAHAMQAGANABAQQgBATgHAQQgJAQgPALQgPAMgVAGQgWAHgaAAQgTAAgSgEg");
	this.shape_21.setTransform(-28.8,-5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#010101").s().p("AhQC5QgKAAgGgGQgHgIAAgJIAAlDQAAgJAHgHQAGgHAKAAIChAAQAKAAAGAHQAHAHAAAJIAAFDQAAAJgHAIQgGAGgKAAgAgHCVQgEADAAAFQAAAFAEADQADAEAEAAQAFAAADgEQADgDAAgFQAAgFgDgDQgDgDgFgBQgEABgDADgAhQB/IChAAIAAkMIihAAgAgLiiQAAAFAFAAIAKAAQAFAAABgFQgBgHgFAAIgKAAQgFAAAAAHg");
	this.shape_22.setTransform(-57.9,-4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#010101").s().p("AgoAdIBFhFIAMAAIhRBRgAgoADIArgrIALAAIg2A3g");
	this.shape_23.setTransform(-62.3,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone, new cjs.Rectangle(-70.1,-33,140.2,66.3), null);


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


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keys();
	this.instance.parent = this;
	this.instance.setTransform(-295,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-295,0,295,277), null);


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


(lib.carrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-298,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.carrr, new cjs.Rectangle(-298,-65,315,197), null);


(lib.arrrow__text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA5QgDgEgBgFQABgEADgFQAEgDAEAAQAFAAAEADQADAFAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEgAgHAWIgEhSIAXAAIgEBSg");
	this.shape.setTransform(-4.4,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkA8IgJgXIg1AAIgJAXIgZAAIAwh3IAZAAIAwB3gAAVATIgVg5IgUA5IApAAg");
	this.shape_1.setTransform(-12.6,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApA8IAAhYIgkBYIgIAAIglhYIAABYIgWAAIAAh3IAfAAIAfBOIAhhOIAdAAIAAB3g");
	this.shape_2.setTransform(-26.2,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA8IAAh3IBRAAIAAASIg8AAIAAAgIA7AAIAAARIg7AAIAAAhIA8AAIAAATg");
	this.shape_3.setTransform(-38.7,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3ArQAFAAADgCQAEgCADgEQADgFACgIIAEgVIAHg9IBQAAIAAB3IgVAAIAAhlIgoAAIgGAsQgDAXgDAIIgEAKQgCAEgDADQgGAHgHACQgHACgJAAg");
	this.shape_4.setTransform(-50.9,10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA8IAAh3IBRAAIAAASIg8AAIAAAbIAfAAQAJAAAHADQAIACAFAGQAFAEACAHQADAHAAAHQAAAIgDAHQgCAGgFAGQgFAFgHADQgIADgJAAgAgYApIAcAAQAEAAAEgBIAHgDIAEgHQABgDAAgFQAAgEgBgEIgEgFIgHgFIgIgBIgcAAg");
	this.shape_5.setTransform(-62.1,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA9QgGgBgGgDQgFgCgFgDIgJgHIgHgJQgEgGgCgFIgDgMIgBgNIABgMQABgGACgGQACgFAEgFIAHgJIAJgIIAKgGIAMgDIAMgBIANABIAMADIAKAGIAJAIIAHAJQAEAFACAFQACAGABAGIABAMIgBANIgDAMQgCAFgEAGIgHAJIgJAHQgFADgFACQgGADgGABIgNABIgMgBgAgPgnQgIADgFAGQgFAGgDAIQgDAIAAAIQAAAJADAJQADAHAFAGQAFAGAIADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAFgGADgHQADgJAAgJQAAgIgDgIQgDgIgFgGQgFgGgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_6.setTransform(-74.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtA8IAAh3IA0AAQAJAAAIADQAHADAFAFQAFAFACAHQADAHAAAHQAAAIgDAHQgCAHgFAEQgFAFgIADQgHADgJAAIgfAAIAAAtgAgYgDIAcAAIAIgBIAHgDIAEgHQABgDAAgFIgBgIIgEgFQgDgDgEgBQgEgBgEgBIgcAAg");
	this.shape_7.setTransform(-86.7,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgA8IAAhlIg+AAIAABlIgVAAIAAh3IBnAAIAAB3g");
	this.shape_8.setTransform(-99.1,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA8IAAh3IBRAAIAAASIg8AAIAAAgIA7AAIAAARIg7AAIAAAhIA8AAIAAATg");
	this.shape_9.setTransform(-115.2,10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfA8IAAg0Ig9AAIAAA0IgWAAIAAh3IAWAAIAAAxIA9AAIAAgxIAWAAIAAB3g");
	this.shape_10.setTransform(-127,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvAIIAAgPIBfAAIAAAPg");
	this.shape_11.setTransform(-53.1,-9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfA8IAAhUIg+BUIgUAAIAAh3IAVAAIAABSIA8hSIAWAAIAAB3g");
	this.shape_12.setTransform(-69.6,-11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoA8IAAh3IBRAAIAAATIg8AAIAABkg");
	this.shape_13.setTransform(-80.8,-11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtA8IAAh3IAVAAIAAAtIAfAAQAJAAAHADQAIADAFAFQAFAEACAHQADAGAAAJQAAAHgDAHQgCAGgFAGQgFAFgHADQgIADgJAAgAgYApIAcAAQAEAAAEgBIAHgEIAEgGQABgEAAgDQAAgFgBgEIgEgGIgHgDIgIgBIgcAAg");
	this.shape_14.setTransform(-91.2,-11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfA8IAAg1Ig9AAIAAA1IgWAAIAAh3IAWAAIAAAxIA9AAIAAgxIAWAAIAAB3g");
	this.shape_15.setTransform(-103.5,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA8IAAh3IBRAAIAAATIg8AAIAAAeIA7AAIAAASIg7AAIAAAhIA8AAIAAATg");
	this.shape_16.setTransform(-115,-11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AApBHIAAgWIhRAAIAAAWIgVAAIAAgnQAGAAADgCQAEgBACgFQADgEACgIIAEgUIAHg+IBRAAIAABkIALAAIAAApgAgQgHQgDAQgDAGQgEAKgGAFIA+AAIAAhRIgpAAg");
	this.shape_17.setTransform(-126.9,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrrow__text, new cjs.Rectangle(-135.5,-23.9,135.6,47.8), null);


(lib.t1111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(112,31.2,1,1,0,0,0,112,11.7);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.2,11.7,1,1,0,0,0,67.2,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1111, new cjs.Rectangle(0,0,224.1,42.9), null);


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(0.4,14.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(-63,-26.3,126.2,52.8), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t = new lib.arrrow__text();
	this.t.parent = this;
	this.t.setTransform(-97.6,-0.1,1,1,0,0,0,-67.8,0);

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ANPgZQAaAagbAaIkQENQgIAGgRAAI1bAAQglAAAAglIAAoRQAAglAlAAIVbAAQASAAAIAIg");
	this.shape.setTransform(-91.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D82231").s().p("AthFYQgoAAAAgoIAApfQAAgoAoAAIWNAAQASAAAKAJIAEAEIABABIEwEsQAcAcgdAcIk1E2QgKAHgRAAg");
	this.shape_1.setTransform(-90.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-181.3,-34.3,181.3,68.8), null);


// stage content:
(lib._240x400_swisscapital_cc = function(mode,startPosition,loop) {
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
		
		var tl = new TimelineMax({repeat: 1, onRepeat: function(){
			repeated = true;
		}});
		
		var t1  = g(this.t1);
		var logo = g(this.logo1); 
		
		tl
		
			.staggerFrom(logo, .7, {y:'-=50', ease: Expo.easeOut}, .05)
			.from(this.car, 1.3, {scaleX: 0, scaleY: .2, x: '+=100', y:'-=40', ease: Expo.easeOut})
			.staggerFrom(t1, .9, {x: '-=250', alpha: 0, ease: Expo.easeOut},.3, '-=.9')
			.from(this.keys, 1.3, {x: w, y: 0, ease: Expo.easeOut}, '+=.4')
			.from(this.arrow, 1 , {x: 0, ease: Expo.easeOut}, '-=.7')
			.from(this.arrow.t, .6 , {x: '-=50', alpha:0}, '-=.9')
			.add('clean', '+=1.3')
			.to(this.car, .6, {scaleX: '+=.3', scaleY: '+=.3', x: '0', y:'+=40', ease: Expo.easeIn}, 'clean')
			.to(this.car, .2, {alpha:0}, 'clean+=.4')
			.to(this.keys, .6, {x: w, ease: Expo.easeIn}, 'clean')
			.staggerTo(t1, .5, {x: '-=250', alpha: 0, ease: Expo.easeIn},.04, 'clean+=.1')
			.to(this.arrow, .4 , {x: 0, ease: Expo.easeIn}, 'clean+=.2')
			.staggerTo(logo, .5, {y:'-=50', ease: Expo.easeIn}, .05, 'clean+=.1')
			
			.from(this.plate, .8, {y: 0, ease: Expo.easeOut})
			.staggerFrom([this.logo2, this.phone], .7, {y:'-=50', alpha: 0, ease: Expo.easeOut}, .15, '-=.2')
			.from(this.url, .6, {y: '+=50', alpha: 0, ease: Expo.easeOut}, '-=.1')
			.from(this.cur, .6, {y: h, ease: Expo.easeOut}, '+=.5')
			.to(this.cur, .15, {scaleX: '-=.15', scaleY: '-=.15'})
			.to(this.cur, .3, {scaleX: '+=.15', scaleY: '+=.15', onComplete:check})
			
			.staggerTo([this.plate, this.logo2, this.phone, this.url, this.cur], .5, {alpha:0}, .1,'+=1.5')
		
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// plate
	this.plate = new lib.platee();
	this.plate.parent = this;
	this.plate.setTransform(120,128.7);

	this.timeline.addTween(cjs.Tween.get(this.plate).wait(1));

	// cur
	this.cur = new lib.cur();
	this.cur.parent = this;
	this.cur.setTransform(119.7,351);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// url
	this.url = new lib.url();
	this.url.parent = this;
	this.url.setTransform(114.5,348,1.219,1.219,0,0,0,0,13.1);

	this.timeline.addTween(cjs.Tween.get(this.url).wait(1));

	// logo2
	this.logo2 = new lib.logo();
	this.logo2.parent = this;
	this.logo2.setTransform(120,150.6,1.228,1.209,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// phone
	this.phone = new lib.phone();
	this.phone.parent = this;
	this.phone.setTransform(120,246);

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(1));

	// logo
	this.logo1 = new lib.logo1();
	this.logo1.parent = this;
	this.logo1.setTransform(77.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(1));

	// hand
	this.keys = new lib.hand();
	this.keys.parent = this;
	this.keys.setTransform(102,268,1,1,0,0,0,-295,277);

	this.timeline.addTween(cjs.Tween.get(this.keys).wait(1));

	// car
	this.car = new lib.carrr();
	this.car.parent = this;
	this.car.setTransform(298,135);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// Layer 11
	this.arrow = new lib.arrow();
	this.arrow.parent = this;
	this.arrow.setTransform(170,358.4);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// Layer 2
	this.t1 = new lib.t1111();
	this.t1.parent = this;
	this.t1.setTransform(118,297.4,1,1,0,0,0,112,21.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.7,184.1,408.3,408.7);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"banner_atlas_.png?1501917980708", id:"banner_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;