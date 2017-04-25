(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,428);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,96);// helper functions:

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


(lib.wht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wht, new cjs.Rectangle(-168,-140,336,280), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BiIAAjDIBuAAIAAARIhbAAIAABIIBKAAIAAAQIhKAAIAABJIBgAAIAAARg");
	this.shape.setTransform(92.6,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABbBiIg1heIgdAAIAABeIgSAAIAAheIgcAAIg1BeIgXAAIA7hmIAAAAIg2hdIAVAAIAyBVIAcAAIAAhVIASAAIAABVIAdAAIAyhVIAVAAIg3BdIAAAAIA8Bmg");
	this.shape_1.setTransform(72.1,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5BiIAAiMQAAgLACgQIAAAAIgRAbIhjCMIgTAAIAAjDIATAAIAACMIgBAbIAAAAIARgcIBjiLIATAAIAADDg");
	this.shape_2.setTransform(49.6,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5BiIAAhaIhxAAIAABaIgTAAIAAjDIATAAIAABaIBxAAIAAhaIATAAIAADDg");
	this.shape_3.setTransform(28.7,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhAIIAAgPIDDAAIAAAPg");
	this.shape_4.setTransform(-0.6,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABCBiIAAjDIAUAAIAADDgAhUBiIAAjDIATAAIAABPIAsAAQAMAAAKAEQALAEAHAHQAIAHAFAKQAEAMAAAOQAAAOgEALQgEAKgIAIQgIAIgKADQgJAEgMAAgAhBBRIArAAQAJAAAHgDQAGgCAGgGQAFgFADgHQACgIAAgKQAAgKgCgHQgEgIgFgFQgFgGgHgCQgHgDgIAAIgrAAg");
	this.shape_5.setTransform(-30.9,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA5BiIAAhaIhxAAIAABaIgTAAIAAjDIATAAIAABaIBxAAIAAhaIATAAIAADDg");
	this.shape_6.setTransform(-52.7,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BiIAAjDIBuAAIAAARIhbAAIAABIIBKAAIAAAQIhKAAIAABJIBgAAIAAARg");
	this.shape_7.setTransform(-70.2,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABCB2IAAgnIiVAAIAAjEIATAAIAACyIBqAAIAAiyIAUAAIAACyIAWAAIAAA5g");
	this.shape_8.setTransform(-88.4,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-101.7,-9,203.5,37.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BnIAAjNIB6AAIAAAgIhUAAIAAA2IBDAAIAAAgIhDAAIAAA3IBZAAIAAAgg");
	this.shape.setTransform(134.3,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah5BnIAAjNIAlAAIAACtIBCAAIAAitIAlAAIAACtIBCAAIAAitIAlAAIAADNg");
	this.shape_1.setTransform(110.7,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBBnIAAjNIAlAAIAADNgAhlBnIAAjNIAlAAIAABIIAnAAQAOAAALAFQAMAFAIAIQAJAKAEALQAFANAAAPQAAAOgFANQgEAMgIAIQgJAKgMAEQgKAFgOAAgAhABHIAhAAQAIAAAFgDQAGgCAFgEQAEgFACgHQABgGAAgHQAAgJgBgGQgCgGgEgFQgFgFgGgCQgGgCgHgBIghAAg");
	this.shape_2.setTransform(83.3,-10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBnIAAjNIBJAAQAOAAALAEQAMADAJAHQAIAHAFAKQAEAKAAAMQAAAOgGAMQgHAMgMAGIAAABQAJACAGAEQAGAFAFAGQAEAHACAIQACAIAAAHQAAAPgGAMQgFALgLAIQgJAHgNAEQgNADgOAAgAgiBHIAnAAQAHAAAFgDQAGgCAEgDQAEgFACgFQACgGAAgGQAAgHgCgFQgDgGgDgEQgEgDgGgDQgFgCgHAAIgnAAgAgigSIAjAAQAMAAAHgHQAGgIAAgLQAAgMgGgGQgHgIgNAAIgiAAg");
	this.shape_3.setTransform(62,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhsAOIAAgbIDZAAIAAAbg");
	this.shape_4.setTransform(32.1,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBoQgLgBgKgFQgJgEgJgFQgIgHgIgHQgHgHgGgJQgFgIgEgKQgEgKgCgLQgCgKgBgKQABgLACgLQACgKAEgKQAEgJAFgJQAGgIAHgHQAIgHAIgGQAJgFAJgEQAKgEALgDQAKgCAKAAQALAAALACQALADAKAEQAJAEAJAFQAIAGAHAHQAIAHAFAIQAGAJADAJQAFAKACAKQACALAAALQAAAKgCAKQgCALgFAKQgDAKgGAIQgFAJgIAHQgHAHgIAHQgJAFgJAEQgKAFgLABQgLADgLAAQgKAAgKgDgAgahCQgMAFgJAKQgJAKgGANQgEANAAAPQAAAOAEAOQAGANAJAKQAJAKAMAFQANAHANAAQAOAAANgHQAMgFAJgKQAKgKAFgNQAFgOAAgOQAAgPgFgNQgFgNgKgKQgJgKgMgFQgNgFgOAAQgNAAgNAFg");
	this.shape_5.setTransform(0.1,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBnIAAjNIBJAAQAOAAALAEQAMADAJAHQAIAHAFAKQAEAKAAAMQAAAOgGAMQgHAMgMAGIAAABQAJACAGAEQAGAFAFAGQAEAHACAIQACAIAAAHQAAAPgGAMQgFALgLAIQgJAHgNAEQgNADgOAAgAgiBHIAnAAQAHAAAFgDQAGgCAEgDQAEgFACgFQACgGAAgGQAAgHgCgFQgDgGgDgEQgEgDgGgDQgFgCgHAAIgnAAgAgigSIAjAAQAMAAAHgHQAGgIAAgLQAAgMgGgGQgHgIgNAAIgiAAg");
	this.shape_6.setTransform(-20.4,-10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBnIAAitIhDAAIAAggICrAAIAAAgIhDAAIAACtg");
	this.shape_7.setTransform(-39.2,-10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJBoQgLgBgKgFQgKgEgIgFQgJgGgHgIQgHgGgFgJQgGgJgDgKQgEgJgCgLQgCgLAAgKQAAgLACgLQACgKAEgKQAEgJAFgJQAGgIAHgHQAHgHAIgGQAJgFAJgEQAKgFALgCQAKgCALAAIAVACQAKACAKAEQAKADAJAFQAJAGAHAHIgSAbQgLgJgPgGQgQgGgOAAQgQAAgNAFQgNAGgJAKQgIAJgFAOQgEAMAAAPQAAANAEAOQAFANAJAKQAJAKAMAGIAOAFIAPACQAIAAAJgCIAPgGQALgEARgPIAUAbQgUASgOAGQgKAFgMACQgMADgNAAQgMAAgKgDg");
	this.shape_8.setTransform(-58.3,-10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BnIAAjNIB6AAIAAAgIhVAAIAAA2IBEAAIAAAgIhEAAIAAA3IBaAAIAAAgg");
	this.shape_9.setTransform(-76.6,-10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBnIAAhQIABgKIgBAAQgeANgUABQgQgBgMgEQgMgEgIgIQgIgIgEgKQgDgMAAgOIAAhEIAmAAIAAA7QAAAJABAHQADAHAEAEQAEAFAGACQAHACAJAAQARABAYgMIAAhUIAmAAIAADNg");
	this.shape_10.setTransform(-95.6,-10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA2BnIgSg1IhHAAIgSA1IgmAAIBIjNIAnAAIBIDNgAAbATIgTg1IgIggIAAAAIgHAgIgTA1IA1AAg");
	this.shape_11.setTransform(-114,-10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBnIgxhaIgbAAIAABaIglAAIAAjNIAlAAIAABUIAbAAIAvhUIApAAIg6BiIAAAAIA9Brg");
	this.shape_12.setTransform(-131.6,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-144,-29,288,38.8), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWB+QgLgDgJgFQgIgEgHgIQgHgGgFgJQgHgMgJgdQgEgWAAgcQAAgbAEgWIAGgWQAEgLAGgIQAFgJAHgHQAHgHAIgEQAJgFALgDQALgDALAAQANAAALADQAKADAJAFQAIAEAHAHQAHAHAGAJQAFAIAEALIAGAWQAEAWAAAbQAAAcgEAWQgIAdgHAMQgGAJgHAGQgHAIgIAEQgJAFgKADQgLADgNAAQgLAAgLgDgAgUhPQgIAGgFAMQgFALgDARQgCAPAAASQAAATACAPQADAQAFAMQAFAMAIAGQAJAHALAAQAMAAAJgHQAJgGAFgMQAFgMACgQQACgPAAgTQAAgSgCgPQgCgRgFgLQgFgMgJgGQgJgHgMAAQgLAAgJAHg");
	this.shape.setTransform(-0.1,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-13,-46,26.2,46), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9EcQgZgGgXgJQgYgKgVgOQgVgOgSgTIA2hOQAWAYAdAPQAiASAkAAQAUAAATgGQATgIAPgMQAPgNAIgSQAJgSAAgWQAAgVgIgTQgJgSgPgNQgQgNgUgHQgUgGgYAAQgXAAgXAFQgXAHgTAKIg6gTIAakgIErAAIAABZIjRAAIgJBdQgBAPgDALIACAAQAYgMAlAAQAtAAAmAOQAkAOAbAbQAaAZANAhQAOAiAAAnQAAApgQAkQgPAjgcAbQgbAbgmAOQgmAPgqAAQgaAAgZgFg");
	this.shape.setTransform(0,-50.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-24.9,-100,49.8,100), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0EgQgggGgZgNIAehYIAkANQAXAFAVAAQAhAAAagNQAYgMAUgWQASgVANgcQALgZAFgfIgCAAQgNARggAMQgeALgdAAQgpAAgkgPQgggPgZgbQgXgagNghQgNgjAAgmQAAgnANgkQANgiAZgaQAZgaAjgPQAigPAqAAIArAFIApANQATAJASANQARAOAPARQAPARAMAVQANAWAIAYQAIAaAFAcQAEAdAAAgQgFBKgLAlQgbBIgWAeQgQAYgUASQgVATgZAOQgZAOgcAHQgcAIggAAQgfAAgcgGgAgyi+QgQAHgLANQgLANgGARQgGARAAAVQAAAWAHASQAHAUANAOQANAPATAIQAUAHAYAAQAnAAAbgRQAcgSAAgaQAAgagJgZQgJgZgQgUQgQgUgTgLQgWgMgUAAQgUAAgQAIg");
	this.shape.setTransform(-0.5,-51.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-26.2,-100,52.5,100), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4EcQgagFgXgKQgZgJgXgOQgVgPgTgSIA1hQQAYAaAhAPQAkARAkAAQAVAAATgGQATgHANgLQANgMAIgPQAIgQAAgSQAAgWgKgQQgJgRgRgLQgQgLgXgFQgUgGgZAAIgoAAIgWg0IBnh6QAVgbATgRIAAgBQgRACggAAIipAAIAAhZIFZAAIAABBIiKCgQAdAFAbAMQAdAOAVAUQAXAVAMAbQANAeAAAkQAAAlgOAhQgNAigaAaQgaAbglAOQgmAQgtAAQgaAAgZgFg");
	this.shape.setTransform(-0.5,-50.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-25,-100,50,100), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FC33D").s().p("AgIAyIAAhTIgkAAIAAgQIBZAAIAAAQIgjAAIAABTg");
	this.shape.setTransform(6.2,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7FC33D").s().p("AgUAxQgKgEgHgHQgIgHgFgKIgDgKIAAgLQAAgHADgOQAFgJAIgHQAHgHAKgEQAKgEAKAAQALAAAKAEQAKAEAHAHQAIAHAEAJQAEAOAAAHIAAALIgEAKQgEAKgIAHQgHAHgKAEQgKAEgLAAQgKAAgKgEgAgNggQgGACgFAFQgEAEgDAHQgDAHAAAHQAAAHADAHQADAHAEAFQAFAFAGACQAHADAGAAQAHAAAGgDQAGgCAGgFQAFgFACgHQADgHAAgHQAAgHgDgHQgCgHgFgEQgGgFgGgCQgGgEgHAAQgGAAgHAEg");
	this.shape_1.setTransform(-5,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-13.3,-28,26.6,28), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANBZIgEg6IABgSIgBAAIgGAPIgVAvIgWAAIgUgvIgHgPIAAAAIAAASIgEA6IgZAAIAJhrIAeAAIAXA2IAFAPIAAAAIAGgPIAXg2IAdAAIAKBrgAAxgOIAAgGQAAgGABgDIAEgIIAMgKIALgJIAFgEQABgCAAgDIgBgFIgDgDIgDgBIgFgBQgDAAgEACIgGAGIgJgGIAEgGIAFgEIAHgEIAIgBQAFAAAEACQAEABADADQAEADABAEQACADAAAGIgBAIIgDAFIgGAHIgGAEQgQAKAAAGIAhAAIAAAMg");
	this.shape.setTransform(0,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-9.7,-17.7,19.5,17.7), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBTIA0ilIAXAAIg0Clg");
	this.shape.setTransform(0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-3.8,-16.5,7.7,16.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBTIAAhoIgxAAIAAgXIB7AAIAAAXIgwAAIAABogAg9g7IAAgXIB7AAIAAAXg");
	this.shape.setTransform(0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-6.2,-16.5,12.5,16.6), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("AAAi4IAAFx");
	this.shape.setTransform(0,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-37.9,2,38.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("AFdAAIq5AA");
	this.shape.setTransform(-34.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-70.7,-1,71.8,2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("AAADSIAAmj");
	this.shape.setTransform(0,17.5,1,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,2,37), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("AAADSIAAmj");
	this.shape.setTransform(0,-17.5,1,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-36,2,37), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("AxfAAMAi/AAA");
	this.shape.setTransform(-112,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-225,-1,226,2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("ARgAAMgi/AAA");
	this.shape.setTransform(-112,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-225,-1,226,2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7FC33D").ss(1.5,2,0,3).p("AAAolIAARL");
	this.shape.setTransform(0,-45,1,0.818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-91,2,92), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg3();
	this.instance.parent = this;
	this.instance.setTransform(-168,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-168,0,336,428), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-76,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-76,-48,152,96), null);


(lib.lnsb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C3C3C3").ss(0.1,2,0,3).p("AYzoII4uYtAY8n+I4uYtAZDn0I4uYtAeFlQI4uYtAd+laI4uYtAd1lkI4uYtAeSk8I4uYtAeIlGI4uYtAebkyI4uYtAdLlbI4uYtAdFllI4uYtAaInzI4uYtAaCn9I4uYtAZvoQI4uYtAZ4oHI4uYtAaVnfI4uYtAaMnpI4uYtAafnVI4uYtAalnMI4uYtAb8mZI4uYtAb1mjI4uYtAbim2I4uYtAbsmtI4uYtAbPnUI4uYtAbFneI4uYtAbYnKI4uYtAbfnBI4uYtAdrltI4uYtAcyl4I4uYtAc7lvI4uYtAcemWI4uYtAcVmgI4uYtAcomMI4uYtAcumDI4uYtAeikpI4uYtAhdxDI4uYtAhjxNI4uYtAhtxXI4uYtAhQwvI4uYtAhZw5I4uYtAhGwlI4uYtAhAwcI4uYtAiWxOI4uYtAidxYI4uYtAgBwkI4uYtAgUw4I4uYtAgKwuI4uYtAlZzmI4uYtAlgzwI4uYtAlz0DI4uYtAlpz6I4uYtAlMzSI4uYtAlWzcI4uYtAlDzII4uYtAk8y/I4uYtAjmyMI4uYtAjsyWI4uYtAj/ypI4uYtAj2ygI4uYtAkTzHI4uYtAkczRI4uYtAkJy9I4uYtAkDy0I4uYtAh2xgI4uYtAiwxrI4uYtAimxiI4uYtAjDyJI4uYtAjNyTI4uYtAi6x/I4uYtAizx2I4uYtAAFwbI4tYtAASwHI4tYtAAJwQI4uYtAAcv9I4uYtAAivzI4tYtAB5vBI4uYtAByvKI4tYtABfveI4tYtABpvUI4uYtABMv8I4uYtABCwFI4tYtABVvyI4tYtABcvoI4uYtADouVI4tYtACvugI4uYtAC4uWI4tYtACbu+I4tYtACSvHI4uYtAClu0I4uYtACruqI4tYtAECt4I4uYtAD7uBI4tYtADyuLI4uYtAEPtkI4uYtAEFttI4tYtAEYtaI4tYtAEftQI4uYtADIuDI4tYtADCuMI4uYtAH5vmI4uYtAHyvwI4tYtAHfwDI4tYtAHpv6I4uYtAIGvSI4uYtAH8vcI4tYtAIPvII4tYtAIWu/I4uYtAJsuMI4tYtAJmuWI4uYtAJTupI4uYtAJcugI4tYtAI/vHI4tYtAI2vRI4uYtAJJu9I4uYtAJPu0I4tYtALctgI4uYtAKitrI4tYtAKstiI4uYtAKPuJI4uYtAKFuTI4tYtAKYt/I4tYtAKft2I4uYtAL1tDI4tYtALvtNI4uYtALltXI4tYtAMCsvI4tYtAL5s5I4uYtAMMslI4uYtAMSscI4tYtAK8tOI4uYtAK1tYI4tYtASwrQI4tYtASqraI4uYtASgrkI4tYtAS9q8I4tYtAS0rGI4uYtATHqyI4uYtATNqpI4tYtAR3rbI4uYtARwrlI4tYtAO0tzI4uYtAOtt9I4tYtAOauQI4tYtAOkuHI4uYtAPBtfI4uYtAO3tpI4tYtAPKtVI4tYtAPRtMI4uYtAQnsZI4tYtAQhsjI4uYtAQOs2I4uYtAQXstI4tYtAP6tUI4tYtAPxteI4uYtAQEtKI4uYtAQKtBI4tYtASXrtI4uYtARdr4I4tYtARnrvI4uYtARKsWI4uYtARAsgI4tYtARTsMI4tYtARasDI4uYtAUpq/I4tYtAUjrII4uYtAUQrcI4uYtAUZrSI4tYtAU2qrI4tYtAUtq0I4uYtAVAqhI4uYtAVGqXI4tYtAWdplI4uYtAWWpuI4tYtAWDqCI4tYtAWNp4I4uYtAVwqgI4uYtAVmqpI4tYtAV5qWI4tYtAWAqMI4uYtAYMo5I4tYtAXTpEI4uYtAXco6I4tYtAW/piI4tYtAW2prI4uYtAXJpYI4uYtAXPpOI4tYtAYmocI4uYtAYfolI4tYtAYWovI4uYtAYpoRI4tYtAXsonI4tYtAXmowI4uYt");
	this.shape.setTransform(0,-128.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lnsb, new cjs.Rectangle(-196.7,-258.2,393.5,259.7), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,75,55,0.8)").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");
	this.shape.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-168,0,336,280), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.667)","rgba(0,36,0,0)"],[0,1],-1,92.1,0,-1,92.1,364.3).s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");
	this.shape.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-168,0,336,280), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(-168,-140,336,280), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(-168,-140,336,280), null);


(lib.ыье = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(13,-8.8,1,1,0,0,0,0,-8.8);

	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-8.3,1,1,0,0,0,0,-8.3);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.5,-8.3,1,1,0,0,0,0,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ыье, new cjs.Rectangle(-22.7,-17.7,45.5,17.7), null);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(0.5,6.6,0.75,0.75,0,0,0,0,1.9);

	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(0,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-144,-35.2,288,61.9), null);


(lib.lines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(42.2,54.8);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112,17.9);

	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-112,-36.1);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-112,54.6);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(112,-36.1);

	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(112,55);

	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(112,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-113,-37.1,226,93.2), null);


(lib.bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(105.4,-68.1,0.876,0.876,0,0,0,0,-23);

	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.3,-68.1,0.876,0.876,0,0,0,0.1,-23);

	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.6,-68.1,0.876,0.876,0,0,0,0,-23);

	this.instance_3 = new lib.Symbol15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.1,-50,0.934,0.934,0,0,0,0.1,-50);

	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-21.5,-50,0.934,0.934,0,0,0,0,-50);

	this.instance_5 = new lib.Symbol13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-66.5,-50,0.934,0.934,0,0,0,0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bt, new cjs.Rectangle(-89.8,-96.7,206.8,93.4), null);


(lib.price = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.lines = new lib.lines();
	this.lines.parent = this;
	this.lines.setTransform(0,-55);

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	// Layer 9
	this.frm = new lib.Symbol12();
	this.frm.parent = this;
	this.frm.setTransform(-112.6,-47.6,1,1,0,0,0,-0.1,-14);

	this.timeline.addTween(cjs.Tween.get(this.frm).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxdHFIAAuJMAi7AAAIAAIaIq4AAIAAFvg");
	mask.setTransform(0,-45.6);

	// bt
	this.bt = new lib.bt();
	this.bt.parent = this;
	this.bt.setTransform(-10.6,-41.8,1,1,0,0,0,0,-50);

	var maskedShapeInstanceList = [this.bt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlbC3IAAltIK3AAIAAFtg");
	mask_1.setTransform(77.5,-18.7);

	// smt
	this.smt = new lib.ыье();
	this.smt.parent = this;
	this.smt.setTransform(77.9,-17.4,1,1,0,0,0,0,-8.8);

	var maskedShapeInstanceList = [this.smt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.smt).wait(1));

	// Layer 3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AxeHHIAAuNMAi9AAAIAAONg");
	mask_2.setTransform(0,-45.4);

	// bg
	this.bg = new lib.lnsb();
	this.bg.parent = this;
	this.bg.setTransform(-6.8,-46.3,1,1,0,0,0,0,-128.4);
	this.bg.alpha = 0.512;

	var maskedShapeInstanceList = [this.bg];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.price, new cjs.Rectangle(-125.8,-92.1,238.8,93.2), null);


// stage content:
(lib._336x280_exclusive = function(mode,startPosition,loop) {
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
		
		var tl = new TimelineMax({repeat: -1, repeatDelay: .3, onRepeat: function(){
			repeated = true;
		}});
		
		var l2 = this.logo2;
		var w2 = this.wht2;
		var tx2 = this.txt2;
		
		l2.visible = false;
		w2.visible = false;
		tx2.visible = false;
		
		var txt = g(this.txt)
		var ln = g(this.price.lines)
		var bt = g(this.price.bt).concat(g(this.price.smt));
		
		tl
		
		.from(this.logo, .9, {scaleX: '+=.5', scaleY: '+=.5', alpha: 0, ease: Expo.easeOut})
		.add('move', '+=.6')
		.to(this.wht, .8, {x: w2.x, y:w2.y, scaleX: w2.scaleX, scaleY: w2.scaleY, ease: Expo.easeInOut}, 'move')
		.to(this.logo, .8, {x: l2.x, y:l2.y, scaleX: l2.scaleX, scaleY: l2.scaleY, ease: Expo.easeInOut}, 'move')
		.from(this.bg1, 3, {scaleX:'+=.2', scaleY: '+=.2', ease: Linear.easeNone}, 'move')
		
		.add('text', '-=1')
		.from([this.grad, this.green], .8, {alpha:0}, 'text')
		.staggerFrom(txt, 1, {x: '+= 150', alpha: 0, ease: Expo.easeOut}, .01, 'text')
		.from(this.txt.t1, 4, {scaleX:'-=.5', scaleY: '-=.5', ease: Linear.easeNone}, 'text')
		.from(this.txt.t2, 4, {scaleX:'+=.5', scaleY: '+=.5', ease: Linear.easeNone}, 'text')
		
		.from(this.bg2, 3, {scaleX:'+=.2', scaleY: '+=.2', ease: Linear.easeNone}, 'text+=1')
		.from(this.bg2, .5, {alpha:0}, 'text+=1')
		.to(this.txt, .8, {x: tx2.x, y:tx2.y, scaleX: tx2.scaleX, scaleY: tx2.scaleY, ease: Expo.easeInOut}, '-=.5')
		
		.add('bg3', '-=1')
		.from(this.bg3, 4, {scaleX:'+=.2', scaleY: '+=.2', ease: Linear.easeNone}, 'bg3')
		.from(this.bg3, .5, {alpha:0}, 'bg3')
		.add('price', 'bg3+=.5')
		.staggerFrom(ln, .3, {scaleX: 0, scaleY:0, ease: Sine.easeOut}, .15, 'price')
		.from(this.price.bg, .6, {alpha:0}, 'price+=.8')
		.from(this.price.frm, .6, {alpha:0}, 'price+=1.3')
		.staggerFrom(bt, .6, {y: '+=150', ease: Expo.easeOut}, .1, 'price+=1.5')
		
		.from(this.wht3, .6, {alpha:0}, '+=1')
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 18
	this.wht3 = new lib.wht();
	this.wht3.parent = this;
	this.wht3.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.wht3).wait(1));

	// logo2
	this.logo2 = new lib.logo_1();
	this.logo2.parent = this;
	this.logo2.setTransform(66.1,48.1,0.618,0.618,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// wht2
	this.wht2 = new lib.wht();
	this.wht2.parent = this;
	this.wht2.setTransform(-34.9,-42);

	this.timeline.addTween(cjs.Tween.get(this.wht2).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// wht
	this.wht = new lib.wht();
	this.wht.parent = this;
	this.wht.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.wht).wait(1));

	// Layer 9
	this.price = new lib.price();
	this.price.parent = this;
	this.price.setTransform(173,175.1,1,1,0,0,0,0,-55);

	this.timeline.addTween(cjs.Tween.get(this.price).wait(1));

	// txt2
	this.txt2 = new lib.txt();
	this.txt2.parent = this;
	this.txt2.setTransform(233.5,51,0.573,0.573,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.parent = this;
	this.txt.setTransform(165.5,183);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// green
	this.green = new lib.green();
	this.green.parent = this;
	this.green.setTransform(168,140,1,1,0,0,0,0,140);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// grad
	this.grad = new lib.grad();
	this.grad.parent = this;
	this.grad.setTransform(168,140,1,1,0,0,0,0,140);
	this.grad.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.grad).wait(1));

	// bg3
	this.bg3 = new lib.Symbol1();
	this.bg3.parent = this;
	this.bg3.setTransform(168,-148);

	this.timeline.addTween(cjs.Tween.get(this.bg3).wait(1));

	// bg2
	this.bg2 = new lib.bg2_1();
	this.bg2.parent = this;
	this.bg2.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(1));

	// bg1
	this.bg1 = new lib.bg1_1();
	this.bg1.parent = this;
	this.bg1.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-42,564.6,494.2);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1493087711541", id:"bg1"},
		{src:"images/bg2.jpg?1493087711541", id:"bg2"},
		{src:"images/bg3.jpg?1493087711541", id:"bg3"},
		{src:"images/logo.png?1493087711541", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;