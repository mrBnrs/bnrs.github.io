(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,116);


(lib.plane1 = function() {
	this.initialize(img.plane1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,177);


(lib.plane2 = function() {
	this.initialize(img.plane2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,203);// helper functions:

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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgMBBIAAgaIAZAAIAAAagAgGAdIgHg8IAAggIAbAAIAAAgIgIA8g");
	this.shape.setTransform(46.3,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_1.setTransform(37.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AgxBBIgHgCIAAgZIACABIADABIACAAIACAAIAFAAIADgDIADgHIACgLIABgQIABgYIAAgsIBZAAIAACAIgbAAIAAhqIglAAIAAAUIAAAeIgDAXQgCAKgDAHQgCAHgEAEQgEAEgFACQgFACgGAAg");
	this.shape_2.setTransform(24.2,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("Ag0BBIAAiAIA+AAQAHAAAGABIALAEIAHAGQAEADABAEIACAHIABAHIgBAJIgCAHIgFAGIgIAFQAHADAEACQAEAEACAEIADAJIABAIQAAAJgEAHQgDAHgHAGQgGAEgIADQgKACgLABgAgbAqIAhAAIAIgBQAEgBACgCQADgCACgEQACgDAAgFQAAgFgDgEQgBgDgDgBQgDgCgEgBIgIAAIggAAgAgbgNIAgAAIAHgBIAGgCIAEgFQABgCAAgEQAAgFgBgCQgBgDgCgCIgGgCIgHgBIghAAg");
	this.shape_3.setTransform(11.9,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_4.setTransform(-0.6,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AhIBBIAAiAIAZAAIAABpIAjAAIAAhpIAZAAIAABpIAjAAIAAhpIAYAAIAACAg");
	this.shape_5.setTransform(-15.4,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_6.setTransform(-29.5,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB009B").s().p("AApBOIAAgbIhRAAIAAAbIgXAAIAAgyIALAAIAEgLIAEgMIADgOIADgSIACgWIABgcIBXAAIAABpIAMAAIAAAygAgMguIAAAMIgCAOIgCAQIgDAQIgGAQIAyAAIAAhTIglAAg");
	this.shape_7.setTransform(-42.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-51.1,-11,102.3,22), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape.setTransform(36.7,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AgMBBIAAhrIgoAAIAAgVIBpAAIAAAVIgnAAIAABrg");
	this.shape_1.setTransform(24.8,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAaBSIAAhXIAAAAIgyBXIgcAAIAAiAIAaAAIAABWIABAAIAyhWIAbAAIAACAgAgWg8QgJgHAAgNIAUAAIABAEIADAFIAEACIAFABIAGgBIAFgCQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgEIAVAAQAAANgJAHQgIAGgRABQgQgBgIgGg");
	this.shape_2.setTransform(12.9,-3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgcAAIAuiAIAdAAIAuCAgAAQAPIgQgxIgPAxIAfAAg");
	this.shape_3.setTransform(-0.1,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AgMBBIAAhrIgoAAIAAgVIBpAAIAAAVIgnAAIAABrg");
	this.shape_4.setTransform(-12.1,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_5.setTransform(-23.2,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB009B").s().p("AgxBBIgHgCIAAgZIACABIADABIACAAIACAAIAFAAIADgDIADgHIACgLIABgQIABgYIAAgsIBZAAIAACAIgbAAIAAhqIglAAIAAAUIAAAeIgDAXQgCAKgDAHQgCAHgEAEQgEAEgFACQgFACgGAAg");
	this.shape_6.setTransform(-36.3,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-44.5,-11,89.1,22), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AhDAJIAAgSICIAAIAAASg");
	this.shape.setTransform(30,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAtBBIAAiAIAbAAIAACAgAgOBBIg5AAIAAiAIAbAAIAAAyIAaAAIAHAAIAKABQAEABAFADQAFACAFAFQAEADADAHQACAHAAAKQAAAJgCAHQgDAGgEAFQgEAEgFACIgJAEIgIACgAgsAqIAXAAIAHgBIAIgCIAFgFQABgEAAgFQAAgGgBgEQgCgDgDgCIgIgCIgIAAIgWAAg");
	this.shape_1.setTransform(7.7,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAZBBIAAg6IgyAAIAAA6IgbAAIAAiAIAbAAIAAAwIAyAAIAAgwIAbAAIAACAg");
	this.shape_2.setTransform(-7.4,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_3.setTransform(-19.5,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAkBOIAAgbIheAAIAAiAIAbAAIAABpIAyAAIAAhpIAbAAIAABpIANAAIAAAyg");
	this.shape_4.setTransform(-32,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-41.1,-11,82.4,22), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape.setTransform(44.1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AgNBBIAAhrIgnAAIAAgVIBpAAIAAAVIgoAAIAABrg");
	this.shape_1.setTransform(32.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAaBBIAAhXIAAAAIgyBXIgcAAIAAiAIAaAAIAABWIABAAIAyhWIAcAAIAACAg");
	this.shape_2.setTransform(20.3,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AAZBBIAAg6IgyAAIAAA6IgbAAIAAiAIAbAAIAAAwIAyAAIAAgwIAbAAIAACAg");
	this.shape_3.setTransform(7.4,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("Ag1BBIAAiAIA+AAQAIAAAHABIAKAEIAIAGQADADABAEIADAHIABAHIgBAJIgDAHIgFAGIgHAFQAGADAEACQAEAEACAEIADAJIAAAIQAAAJgDAHQgEAHgFAGQgHAEgJADQgJACgKABgAgbAqIAhAAIAIgBQAEgBACgCQAEgCABgEQACgDgBgFQAAgFgBgEQgCgDgDgBQgDgCgEgBIgIAAIggAAgAgbgNIAhAAIAHgBIAFgCIAEgFQABgCABgEQgBgFgBgCQgBgDgDgCIgFgCIgHgBIghAAg");
	this.shape_4.setTransform(-5.2,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgcAAIAuiAIAdAAIAuCAgAAQAPIgQgxIgPAxIAfAAg");
	this.shape_5.setTransform(-18.5,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB009B").s().p("AgxBBIAAiAIA6AAQAKAAAIACQAIADAFAGQAEAFADAHQACAIAAAJQAAAKgCAHQgEAHgFAFQgFAGgJADQgHADgKAAIgdAAIAAAvgAgWgDIAZAAQAJAAAFgEQAFgFAAgLQAAgEgBgEIgEgGQgDgCgDgCIgIgBIgZAAg");
	this.shape_6.setTransform(-30.6,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB009B").s().p("AgXA/QgLgFgHgJQgIgIgDgNQgFgNAAgPQAAgLADgKQACgJAEgIQAEgIAFgFQAGgFAHgEQAHgEAGgBQAIgCAGAAQALAAAIACQAIACAGAEQAGAEAFAEIAHAKIAEAKIABAKIgbAAIgBgEIgCgGIgDgEIgFgFIgIgCIgKgBIgFAAIgHACIgGAFQgEADgDAFQgCAFgCAHQgCAHAAAJQAAAKADAJQACAIAEAFQAEAHAGACQAFAEAHAAQAIAAAGgEQAFgCADgDQAEgFACgDIACgIIAaAAQgBANgGAIQgFAJgHAGQgHAGgKADQgJADgKAAQgNAAgMgFg");
	this.shape_7.setTransform(-43.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-52,-11,104,22), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgMBBIAAgaIAZAAIAAAagAgGAdIgHg8IAAggIAbAAIAAAgIgIA8g");
	this.shape.setTransform(37.1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAaBBIAAhXIAAAAIgyBXIgcAAIAAiAIAaAAIAABWIABAAIAyhWIAbAAIAACAg");
	this.shape_1.setTransform(27.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AgqBBIAAiAIBVAAIAAAVIg7AAIAABrg");
	this.shape_2.setTransform(16.2,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AAHBBIg4AAIAAiAIAbAAIAAAyIAZAAIAHAAIAKABQAGABAEADQAFACAFAFQAEADADAHQACAHAAAKQAAAJgCAHQgDAGgEAFQgEAEgFACIgKAEIgIACgAgWAqIAWAAIAIgBIAHgCIAFgFQACgEAAgFQAAgGgCgEQgCgDgDgCIgHgCIgIAAIgWAAg");
	this.shape_3.setTransform(4.8,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAZBBIAAg6IgxAAIAAA6IgbAAIAAiAIAbAAIAAAwIAxAAIAAgwIAbAAIAACAg");
	this.shape_4.setTransform(-8.1,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_5.setTransform(-20.2,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB009B").s().p("AApBOIAAgbIhRAAIAAAbIgXAAIAAgyIALAAIAEgLIAEgMIADgOIADgSIACgWIABgcIBXAAIAABpIAMAAIAAAygAgMguIAAAMIgCAOIgCAQIgDAQIgGAQIAyAAIAAhTIglAAg");
	this.shape_6.setTransform(-33.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-41.8,-11,83.8,22), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAaBBIAAhXIAAAAIgyBXIgbAAIAAiAIAZAAIAABWIABAAIAyhWIAbAAIAACAg");
	this.shape.setTransform(-0.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-8.6,-11,17.2,22), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAeBBIAAg0IgYAAIgKABQgGAAgDACQgEACgCAEQgDAFAAAIIgBAMIgBAIIgBAEIgBADIgBADIgcAAIADgFIABgEIABgEIAAgGIABgNIACgKQABgFACgDQACgEADgCQAEgDAGgCIgGgCQgDgCgDgCQgEgEgDgHQgCgGAAgGIABgJIADgIIAEgHIAFgFIAJgGIAKgCIAKgBIAKAAIA2AAIAACAgAgJgpIgEABIgDACIgEAEIgCAEIgBAGQAAAFABADIADAEIAFAEIAFABIAFABIAEAAIAeAAIAAgjIgeAAIgCAAIgDAAg");
	this.shape.setTransform(25.5,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAmBBIAAhrIgBAAIgZBrIgZAAIgXhrIAAAAIAABrIgZAAIAAiAIAnAAIAWBjIAAAAIAWhjIApAAIAACAg");
	this.shape_1.setTransform(11.9,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_2.setTransform(-1.2,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AgwBBIAAiAIA5AAQAKAAAIACQAHADAGAGQAEAFADAHQACAIABAJQAAAKgDAHQgDAHgGAFQgFAGgJADQgHADgKAAIgdAAIAAAvgAgWgDIAZAAQAJAAAFgEQAFgFABgLQgBgEgBgEIgEgGQgDgCgDgCIgIgBIgZAAg");
	this.shape_3.setTransform(-13.1,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("Ag1BBIAAiAIA+AAQAJAAAGABIAKAEIAIAGQACADACAEIACAHIABAHIgBAJIgCAHIgFAGIgHAFQAGADAEACQAEAEACAEIADAJIABAIQgBAJgDAHQgDAHgHAGQgGAEgIADQgKACgKABgAgbAqIAhAAIAIgBQAEgBACgCQADgCACgEQABgDABgFQAAgFgCgEQgCgDgDgBQgDgCgEgBIgIAAIggAAgAgbgNIAhAAIAGgBIAGgCIAEgFQACgCAAgEQAAgFgCgCQgBgDgDgCIgFgCIgHgBIghAAg");
	this.shape_4.setTransform(-25.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-34.5,-11,69.1,22), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape.setTransform(21.7,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AhIBBIAAiAIAaAAIAABpIAjAAIAAhpIAYAAIAABpIAiAAIAAhpIAZAAIAACAg");
	this.shape_1.setTransform(6.9,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgdAAIAviAIAeAAIAuCAgAAQAPIgQgxIgQAxIAgAAg");
	this.shape_2.setTransform(-8,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("Ag1BBIAAiAIA+AAQAIAAAHABIAKAEIAIAGQADADABAEIACAHIACAHIgCAJIgCAHIgFAGIgHAFQAGADAEACQAEAEACAEIADAJIAAAIQAAAJgDAHQgDAHgGAGQgHAEgIADQgKACgKABgAgbAqIAhAAIAIgBQAEgBACgCQAEgCABgEQABgDAAgFQAAgFgBgEQgCgDgDgBQgDgCgEgBIgIAAIggAAgAgbgNIAhAAIAGgBIAGgCIAEgFQACgCAAgEQAAgFgCgCQgBgDgDgCIgFgCIgHgBIghAAg");
	this.shape_3.setTransform(-20.6,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-29.5,-11,59.1,22), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAmBBIAAhrIgBAAIgZBrIgZAAIgXhrIAAAAIAABrIgZAAIAAiAIAnAAIAWBjIAAAAIAWhjIApAAIAACAg");
	this.shape.setTransform(53.8,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAbBBIAAhXIgBAAIgyBXIgbAAIAAiAIAaAAIAABWIAAAAIAyhWIAcAAIAACAg");
	this.shape_1.setTransform(39.8,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAmBBIAAhrIgBAAIgZBrIgZAAIgXhrIAAAAIAABrIgZAAIAAiAIAnAAIAWBjIAAAAIAWhjIApAAIAACAg");
	this.shape_2.setTransform(25.9,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AgaA/QgMgGgIgJQgHgJgEgMQgEgNAAgOQAAgOAEgMQAEgNAHgJQAIgIAMgGQAMgFAOAAQAOAAAMAFQALAGAJAIQAHAJAFANQAEAMAAAOQAAAOgEANQgFAMgHAJQgJAJgLAGQgMAFgOAAQgOAAgMgFgAgOgoQgGADgEAGQgGAGgCAIQgCAIAAAJQAAAJACAJQACAIAGAGQAEAGAGADQAHAEAHAAQAIAAAHgEQAHgDAEgGQAEgGACgIQADgJAAgJQAAgJgDgIQgCgIgEgGQgEgGgHgDQgHgEgIABQgHgBgHAEg");
	this.shape_3.setTransform(11.4,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAZBBIAAg6IgyAAIAAA6IgbAAIAAiAIAbAAIAAAwIAyAAIAAgwIAbAAIAACAg");
	this.shape_4.setTransform(-2.1,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AgaA/QgMgGgIgJQgIgJgDgMQgEgNAAgOQAAgOAEgMQADgNAIgJQAIgIAMgGQAMgFAOAAQAPAAALAFQALAGAIAIQAJAJAEANQAEAMAAAOQAAAOgEANQgEAMgJAJQgIAJgLAGQgLAFgPAAQgOAAgMgFgAgNgoQgHADgFAGQgEAGgCAIQgDAIAAAJQAAAJADAJQACAIAEAGQAFAGAHADQAGAEAHAAQAIAAAHgEQAGgDAFgGQAFgGACgIQACgJAAgJQAAgJgCgIQgCgIgFgGQgFgGgGgDQgHgEgIABQgHgBgGAEg");
	this.shape_5.setTransform(-15.6,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB009B").s().p("AAXBBIgng5IgNAMIAAAtIgbAAIAAiAIAbAAIAAA0IAwg0IAjAAIg1A0IA4BMg");
	this.shape_6.setTransform(-28.3,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB009B").s().p("AgWBAQgJgEgIgFQgGgHgFgIQgEgIgCgJIAbAAIAEAHIAEAIIAIAEQAFADAFAAQAIAAAFgDQAGgDAEgEQAEgEADgHQACgGAAgHIgqAAIAAgUIApAAIAAgHIgCgIIgFgHIgGgHIgIgEQgGgCgFABQgFAAgFABQgEACgEAEIgEAGIgDAGIgbAAQABgJAFgJQAEgIAHgGQAIgFAIgDQAKgDAMAAQAIAAAJACQAIADAGAEQAIAFAEAGQAFAHADAHIAFAQQACAIAAAJQAAANgCALQgEAKgFAIQgEAHgGAGQgHAEgGAEQgHACgGABIgLACQgMAAgJgEg");
	this.shape_7.setTransform(-42,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB009B").s().p("AgWA/QgLgFgIgJQgHgIgEgNQgFgNAAgPQAAgLACgKQADgJAEgIQAEgIAFgFQAGgFAHgEQAGgEAHgBQAIgCAGAAQALAAAIACQAIACAGAEQAGAEAEAEIAIAKIAEAKIACAKIgbAAIgBgEIgDgGIgDgEIgFgFIgIgCIgKgBIgFAAIgHACIgHAFQgDADgCAFQgDAFgCAHQgBAHgBAJQAAAKACAJQADAIAEAFQAEAHAGACQAGAEAGAAQAIAAAGgEQAFgCADgDQAEgFACgDIACgIIAbAAQgDANgFAIQgFAJgHAGQgHAGgJADQgKADgKAAQgNAAgLgFg");
	this.shape_8.setTransform(-54.9,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-63.4,-11,126.9,22), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAtBBIAAiAIAbAAIAACAgAgOBBIg5AAIAAiAIAbAAIAAAyIAaAAIAHAAIAKABQAEABAFADQAFACAFAFQAEADADAHQACAHAAAKQAAAJgCAHQgDAGgEAFQgEAEgFACIgJAEIgIACgAgsAqIAXAAIAHgBIAIgCIAFgFQABgEAAgFQAAgGgBgEQgCgDgDgCIgIgCIgIAAIgWAAg");
	this.shape.setTransform(7.6,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAmBBIAAhrIgBAAIgYBrIgaAAIgXhrIgBAAIAABrIgYAAIAAiAIAnAAIAWBjIAAAAIAWhjIAoAAIAACAg");
	this.shape_1.setTransform(-8.5,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-18,-11,36.1,22), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgLBCIAAgaIAZAAIAAAagAgLAcQAAgPADgGQACgFAIgHIAHgFIAFgEQADgFAAgGQAAgHgDgGQgFgFgJAAQgKAAgEAHQgEAGAAAIIgaAAQABgZARgLQAKgGAQgBQASAAAOAKQANAKgBASQABALgHAJQgDAEgJAGIgHAGQgEADgCAGIgBAKg");
	this.shape.setTransform(37.4,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAYBBIgYgtIgZAtIggAAIAqhBIgng/IAgAAIAWApIAYgpIAfAAIgoA9IAqBDg");
	this.shape_1.setTransform(25.9,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgcAAIAuiAIAdAAIAuCAgAAQAPIgQgxIgPAxIAfAAg");
	this.shape_2.setTransform(13.4,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AgMBBIAAhrIgoAAIAAgVIBpAAIAAAVIgnAAIAABrg");
	this.shape_3.setTransform(1.4,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAaBSIAAhXIAAAAIgyBXIgcAAIAAiAIAaAAIAABWIABAAIAyhWIAbAAIAACAgAgWg8QgJgHAAgNIAUAAIABAEIADAFIAEACIAFABIAGgBIAFgCQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgEIAVAAQAAANgJAHQgIAGgRABQgQgBgIgGg");
	this.shape_4.setTransform(-10.5,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgcAAIAuiAIAdAAIAuCAgAAQAPIgQgxIgPAxIAfAAg");
	this.shape_5.setTransform(-23.5,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB009B").s().p("AgXA/QgKgFgIgJQgIgIgEgNQgDgNAAgPQAAgLACgKQACgJAEgIQAEgIAGgFQAFgFAHgEQAGgEAIgBQAGgCAHAAQAKAAAJACQAIACAGAEQAHAEADAEIAIAKIAEAKIABAKIgbAAIgBgEIgCgGIgDgEIgGgFIgHgCIgKgBIgEAAIgHACIgIAFQgDADgDAFQgDAFgBAHQgBAHAAAJQAAAKACAJQACAIAEAFQAEAHAGACQAGAEAGAAQAIAAAGgEQAFgCAEgDQADgFABgDIADgIIAaAAQgCANgEAIQgGAJgHAGQgIAGgJADQgIADgLAAQgNAAgMgFg");
	this.shape_6.setTransform(-36.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-44.9,-11,90,22), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAZBBIgZgtIgZAtIgfAAIAphBIgng/IAgAAIAWApIAYgpIAfAAIgnA9IApBDg");
	this.shape.setTransform(33.4,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAtBBIAAiAIAbAAIAACAgAgOBBIg5AAIAAiAIAbAAIAAAyIAaAAIAHAAIAKABQAEABAFADQAFACAFAFQAEADADAHQACAHAAAKQAAAJgCAHQgDAGgEAFQgEAEgFACIgJAEIgIACgAgsAqIAXAAIAHgBIAIgCIAFgFQABgEAAgFQAAgGgBgEQgCgDgDgCIgIgCIgIAAIgWAAg");
	this.shape_1.setTransform(19.1,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAZBBIAAg6IgxAAIAAA6IgbAAIAAiAIAbAAIAAAwIAxAAIAAgwIAbAAIAACAg");
	this.shape_2.setTransform(4,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AgNBDQgHAAgFgCIgLgGQgGgDgDgEQgEgEgCgHQgCgGAAgIIAZAAQAAADACADQABAEADADQADADAGACQAFACAIAAQAHgBAFgBQAFgCADgDQAEgDACgEQABgDAAgEQAAgGgCgDQgCgEgEgCQgCgCgFAAIgGgBIgWAAIAAgTIAVAAIAHgBIAGgDQADgCABgEQABgDAAgEQAAgFgCgDQgCgEgDgCIgHgDIgIgBQgFAAgEACIgHACIgEAEIgEAFIgBADIgBAEIgZAAIABgHIADgJIAFgJQAEgEAGgEQAGgDAIgDQAIgCALAAQANAAAJAEQAJADAFAFQAGAFADAHQACAGAAAFIAAAIIgDAHQgCAEgFADQgDADgHACIAAAAIAFABIAFADIAGADIAEAGQACADACAEQABAFAAAHQAAAIgEAHQgEAIgGAGQgHAFgKAEQgKADgNAAg");
	this.shape_3.setTransform(-8.7,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgdAAIAviAIAeAAIAuCAgAAQAPIgQgxIgQAxIAgAAg");
	this.shape_4.setTransform(-21.1,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AgwBBIAAiAIA5AAQAKAAAIACQAHADAGAGQAFAFACAHQADAIAAAJQAAAKgEAHQgDAHgFAFQgGAGgHADQgIADgKAAIgdAAIAAAvgAgWgDIAZAAQAJAAAFgEQAGgFAAgLQAAgEgCgEIgEgGQgDgCgDgCIgIgBIgZAAg");
	this.shape_5.setTransform(-33.1,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-41.6,-11,83.2,22), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAgBBIgIgbIgvAAIgJAbIgcAAIAuiAIAdAAIAuCAgAAQAPIgQgxIgPAxIAfAAg");
	this.shape.setTransform(6.4,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AAaBBIAAg6IgyAAIAAA6IgbAAIAAiAIAbAAIAAAwIAyAAIAAgwIAbAAIAACAg");
	this.shape_1.setTransform(-6.5,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-15,-11,30.1,22), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AAtBBIAAiAIAbAAIAACAgAgOBBIg5AAIAAiAIAbAAIAAAyIAaAAIAHAAIAKABQAEABAFADQAFACAFAFQAEADADAHQACAHAAAKQAAAJgCAHQgDAGgEAFQgEAEgFACIgJAEIgIACgAgsAqIAXAAIAHgBIAIgCIAFgFQABgEAAgFQAAgGgBgEQgCgDgDgCIgIgCIgIAAIgWAAg");
	this.shape.setTransform(31,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AgNBBIAAhrIgnAAIAAgVIBpAAIAAAVIgoAAIAABrg");
	this.shape_1.setTransform(16.9,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape_2.setTransform(5.7,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AgxBBIgHgCIAAgZIACABIADABIACAAIACAAIAFAAIADgDIADgHIACgLIABgQIABgYIAAgsIBZAAIAACAIgbAAIAAhqIglAAIAAAUIAAAeIgDAXQgCAKgDAHQgCAHgEAEQgEAEgFACQgFACgGAAg");
	this.shape_3.setTransform(-7.4,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAbBBIAAhXIgBAAIgyBXIgbAAIAAiAIAaAAIAABWIAAAAIAyhWIAcAAIAACAg");
	this.shape_4.setTransform(-20,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB009B").s().p("AAKBBIg+AAIAAiAIBdAAIAAAVIhCAAIAAAdIAfAAIAIAAIAJABIALAEQAFACAEAFQAEADADAHQADAHAAAKQAAAJgDAHQgDAGgEAFQgEAEgFACIgKAEIgIACgAgZAqIAcAAIAIgBIAHgCQADgCACgDQADgEAAgFQAAgGgDgEQgCgDgDgCIgHgCIgJAAIgbAAg");
	this.shape_5.setTransform(-32.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-41.4,-11,83,22), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB009B").s().p("AgwBBIAAiAIBeAAIAAAVIhEAAIAAAdIA+AAIAAAWIg+AAIAAAgIBHAAIAAAYg");
	this.shape.setTransform(27.3,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB009B").s().p("AgMBBIAAhrIgoAAIAAgVIBpAAIAAAVIgnAAIAABrg");
	this.shape_1.setTransform(15.5,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB009B").s().p("AAaBBIAAhXIAAAAIgyBXIgbAAIAAiAIAZAAIAABWIABAAIAyhWIAbAAIAACAg");
	this.shape_2.setTransform(3.5,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB009B").s().p("AA4BOIAAgbIiGAAIAAiAIAZAAIAABpIAjAAIAAhpIAYAAIAABpIAjAAIAAhpIAZAAIAABpIANAAIAAAyg");
	this.shape_3.setTransform(-11.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB009B").s().p("AAbBBIAAhXIgBAAIgyBXIgcAAIAAiAIAbAAIAABWIAAAAIAyhWIAcAAIAACAg");
	this.shape_4.setTransform(-26.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-35.2,-11,70.4,22), null);


(lib.pli2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane2();
	this.instance.parent = this;
	this.instance.setTransform(-157,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pli2, new cjs.Rectangle(-157,-101.5,314,203), null);


(lib.pli1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane1();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pli1, new cjs.Rectangle(-137.5,-88.5,275,177), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B398D").s().p("AG0CXIAAjpIhPAAIAAgzQAAgHAFgFQAFgEAHAAIDYAAIAAAzQABAGgGAFQgFAFgGAAIg/AAIAADYQAAAHgFAFQgEAFgIAAgABgCXIAAkcQABgHAEgFQAFgFAHAAIDLABIAAAyQAAAHgFAFQgFAFgHAAIiAAAIAAAxICGAAIAAAyQAAAHgFAFQgFAFgHAAIh1AAIAAAxICRAAIAAAzQAAAHgFAFQgFAFgGAAgAASCXQgRAAgKgNIhahiIAABeQAAAHgEAFQgGAFgHAAIg6AAIAAkcQAAgHAFgFQAFgFAHAAIA6AAIAAByIBWhlQAKgNAQAAIAmAAIAAAkQAAARgLANIhHBVIBLBUQAMANAAAQIAAAlgAlcCXQgnAAgdgcQgbgcAAgnIAAhvQAAgnAbgcQAdgcAnABICDAAIAAAzQAAAGgFAFQgFAFgHAAIhiAAQgPAAgKAKQgLALAAAPIAABdQAAAPALALQAKAKAPAAIBiAAQAHAAAFAFQAFAFAAAGIAAA0gAo4CXIAAkcQAAgHAFgFQAFgFAGAAIA7AAIAAEcQAAAHgFAFQgFAFgGAAgAsBCXIAAjpIhQAAIAAgzQAAgHAGgFQAFgEAGAAIDZAAIAAAzQAAAGgFAFQgEAFgIAAIg+AAIAADYQAAAHgFAFQgEAFgIAAgAJ0CWIAAgzQAAgGAFgFQAFgFAHAAIBtAAQALAAAGgHQAIgHAAgKIAAgRIhtgZQgUgFgOgPQgMgQAAgVIAAgmQgBgeAWgVQAVgUAdAAICQAAIAAAzQgBAGgFAFQgEAFgHAAIhpAAQgJAAgHAHQgHAHAAAKIAAAJIBtAZQAUAFANAQQANAQABAUIAAAuQAAAegWAUQgUAVgeAAg");
	this.shape.setTransform(-28,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB2376").s().p("AhBCXQgRAAgLgNIhahiIAABeQAAAHgFAFQgEAFgHAAIg7AAIAAkcQAAgHAFgFQAFgFAHAAIA6AAIAAByIBWhlQAKgNARAAIAmAAIAAAkQAAARgLANIhJBVIBNBUQALANAAAQIAAAlgAAOCWIAAg1QAAgGACgFIACgEICDikIiIAAIAAgzQAAgHAFgFQAFgEAHAAIDlAAIAAAzQAAAIgHAIIiDClICKAAIAAAzQAAAHgFAEQgFAFgGAAg");
	this.shape_1.setTransform(87,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-112.9,-15,225.9,30.2), null);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(391.8,-14.4,0.746,0.746,180);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.2,-111);

	this.instance_2 = new lib.cloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-176.2,-14.4,0.746,0.746,180);

	this.instance_3 = new lib.cloud();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-566.2,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(-566.2,-111,958,175), null);


(lib.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(162.8,-66,1.138,1.138);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.8,60.6,0.746,0.746,180);

	this.instance_2 = new lib.cloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-405.2,-66,1.138,1.138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(-405.2,-66,810.4,132), null);


(lib.е1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(42.1,11);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.2,11);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.6,-11);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.2,-11);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-57.2,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.е1, new cjs.Rectangle(-92.4,-22,185,44), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(45.1,11);

	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.4,11);

	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.5,-11);

	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-35.4,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-95.9,-22,195.6,44), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(44,11);

	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.2,11);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.1,11);

	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.4,-11);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.3,-11);

	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-93.6,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-111.7,-22,223.6,44), null);


(lib.plane2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.inner = new lib.pli2();
	this.inner.parent = this;
	this.inner.setTransform(-157,101.5);

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane2_1, new cjs.Rectangle(-314,0,314,203), null);


(lib.plane1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.inner = new lib.pli1();
	this.inner.parent = this;
	this.inner.setTransform(-137.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane1_1, new cjs.Rectangle(-275,0,275,177), null);


// stage content:
(lib._240x400_ticketskz = function(mode,startPosition,loop) {
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
		
		function fl(plane, diff){
			var tl = new TimelineMax({repeat: -1, paused: true});
			var tl2 = new TimelineMax({repeat: -1, paused: true});
			
			tl.to(plane.inner, 1*diff, {y:"+=8", ease: Sine.easeInOut})
			tl.to(plane.inner, 1*diff, {y:"-=8", ease: Sine.easeInOut})
			
			tl2.to(plane.inner, 2*diff, {x:"+=20", ease: Sine.easeInOut})
			tl2.to(plane.inner, 2*diff, {x:"-=20", ease: Sine.easeInOut})
			return {
				tl: tl, 
				tl2: tl2, 
				play: function(){ this.tl.play(); this.tl2.play()},
				stop: function(){ this.tl.stop(); this.tl2.stop()},
				};
		}
		
		var repeated = false;
		
		
		
		var tl = new TimelineMax({repeat: -1, repeatDelay: .3, onRepeat: function(){
			repeated = true;
		}});
		
		tl.textHide = function(txt, live){
			var tl = this;
		
			tl.staggerTo(txt, .6, {x: '-=150', alpha: 0, ease: Sine.easeIn}, .05, live)
		
			return tl
		}
		tl.text = function(txt, live, delay){
			var tl = this;
			
			tl.staggerFrom(txt, 1.2, {y: '+=150', alpha: 0, ease: Expo.easeOut}, .1, delay || '+=0');
			
			if(live) {
				tl.textHide(txt, "+="+live);
			}
			return tl
		}
		
		
		
		
		//console.log(tl.duration());
		
		var pl = fl(this.plane1, 1);
		var pl2 = fl(this.plane2, 1.1);
		
		var t1 = g(this.t1);
		var t2 = g(this.t2);
		var t3 = g(this.t3);
		
		function check(){
			if (repeated) {
				tl.stop();
				pl.stop();
				pl2.stop();
			}
		}
		
		
		tl
		.add('start')
		
		.from(this.plane1, 2, {x: w, y: h, scaleX:'+=.1', scaleY:'+=.1', ease: Sine.easeOut, onStart: function(){pl.play()}})
		.from(this.plane2, 2, {x: w, y: h, scaleX:'+=.1', scaleY:'+=.1', ease: Sine.easeOut, onStart: function(){pl2.play()}}, '-=.5')
		
		.text(t1, 2, '-=1.3')
		.text(t2, 2, '-=.3')
		.text(t3, false ,'-=.3');
		
		var dur = tl.duration() + 3;
		
		tl.set(this, {onStart: check});
		
		tl
		.add('hide', '+=3')
		.to(this.plane1, .6, {x: '+=300', ease: Sine.easeIn, onComplete:  function(){pl.stop()}}, 'hide')
		.textHide(t3, 'hide+=.2') 
		.to(this.plane2, .8, {x: '+=300', ease: Sine.easeIn, onComplete:  function(){pl2.stop()}}, '-=0')
		
		tl.from(this.clouds, dur, {x:0, ease: Linear.easeNone}, 'start');
		tl.from(this.clouds2, dur+1, {x:0, ease: Linear.easeNone}, 'start');
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(121.6,34.9,0.842,0.842,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(120,357);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(120,357);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.е1();
	this.t1.parent = this;
	this.t1.setTransform(120,357);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// plane2.png
	this.plane2 = new lib.plane2_1();
	this.plane2.parent = this;
	this.plane2.setTransform(255.8,114.5,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.plane2).wait(1));

	// plane1.png
	this.plane1 = new lib.plane1_1();
	this.plane1.parent = this;
	this.plane1.setTransform(267.8,58.4,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.plane1).wait(1));

	// cloud.png
	this.clouds2 = new lib.cloud2();
	this.clouds2.parent = this;
	this.clouds2.setTransform(-1143.5,257,1,1,0,0,0,-763,-3);

	this.clouds = new lib.clouds();
	this.clouds.parent = this;
	this.clouds.setTransform(-1496.5,136.2,1,1,0,0,0,-963.8,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clouds},{t:this.clouds2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-978.9,222.1,1366.8,356.9);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#B8D8FE",
	opacity: 1.00,
	manifest: [
		{src:"images/cloud.png?1498234729149", id:"cloud"},
		{src:"images/plane1.png?1498234729149", id:"plane1"},
		{src:"images/plane2.png?1498234729149", id:"plane2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;