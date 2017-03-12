(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,144);


(lib.bp = function() {
	this.initialize(img.bp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,98);


(lib.im2 = function() {
	this.initialize(img.im2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,499,280);


(lib.nbook = function() {
	this.initialize(img.nbook);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,177);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,142);


(lib.plane1 = function() {
	this.initialize(img.plane1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,137);


(lib.plane2 = function() {
	this.initialize(img.plane2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,78);// helper functions:

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


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AgcB0IAAhCQAAgKADgFQACgFAGgFIAsgpQAGgFADgHQADgIAAgKIgBgSQgBgIgEgDQgDgEgIgCQgHgBgOAAQgPAAgIABQgJACgEAEQgEADgBAIIgBASQAAAFgDADQgCACgGAAIgWAAIAAgVQAAgQADgJQAEgMAIgGQAIgIAPgDQAPgDAWgBQAWABAOADQAOAEAIAIQAIAIAEANQAEAMAAAUQAAATgGAMQgEALgMAKIgxAtIAAA2QAAAFgDADQgBACgGABg");
	this.shape.setTransform(80.2,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AgSBUIAAiJIgmAAIAAgUQAAgFADgDQACgCAGAAIBmAAIAAATQAAAFgCADQgDADgGAAIgeAAIAAB+QAAAGgCADQgDACgGAAg");
	this.shape_1.setTransform(64.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AANBWQgegCgLgEQgHgDgGgEQgGgEgFgGQgHgJgEgRQgDgOABgVQAAgYADgRQAEgRAIgKQAIgJANgGQANgDARAAQARAAAMACQAMAFAJAHQAHAJAEANQAFAOAAAUIAAAQQAAAFgDACQgDADgFAAIhYAAQAAAQACAIQACAJAFAFQAGADAJABIAaACIAhAAQAFAAADADQACACAAAGIAAATgAgPg2QgHACgEAEQgEADgBAJIgBAWIBCAAIAAgGIgBgSQgBgHgEgDQgDgEgGgCQgHgBgLAAg");
	this.shape_2.setTransform(49.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AA0BUQgGAAgCgCQgDgDAAgGIAAh+IgrAAIgKBjQgDAVgHAGQgFAGgJACQgJADgOAAIgQAAIAAgTQAAgFACgDQADgDAGAAIAOAAIAOh+QAAgHADgCQADgCAEAAIBcAAQAKAAAAAKIAACdg");
	this.shape_3.setTransform(31.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AgiBTQgOgEgIgJQgIgJgDgSQgDgPAAgcQAAgaADgQQADgSAIgJQAIgJAOgEQANgEAVAAQAWAAANAEQAOAEAIAJQAHAJAEASQADAQAAAaQAAAcgDAPQgEASgHAJQgIAJgOAEQgNAEgWAAQgVAAgNgEgAgUg3QgIACgDAGQgEAFgBAMIgBAeIABAfQABALAEAGQADAFAIACQAGACAOAAQAOAAAHgCQAHgCAEgFQAEgGABgLIABgfIgBgeQgBgMgEgFQgEgGgHgCQgHgBgOAAQgOAAgGABg");
	this.shape_4.setTransform(14.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AA/BUQgGAAgDgCQgCgDAAgGIAAhjIgnBBQgFAGgIAAQgIAAgDgGIgohBIAABjQAAAGgCADQgDACgFAAIgZAAIAAidQAAgFADgDQACgCAGAAIAbAAIAwBSIAxhSIAbAAQAGAAADACQACADAAAFIAACdg");
	this.shape_5.setTransform(-5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E8E6").s().p("AglBTQgLgCgGgGQgHgGgDgLQgDgKAAgRIAAgIQAAgMACgJQADgHAFgFQAFgFAJgCQAIgDAMAAQAbAAAeADQAAgNgCgHQgCgIgEgEQgEgDgIgCIgSgBIgpAAQgGAAgDgCQgCgDAAgGIAAgTIA0AAQAVAAANADQAPADAIAIQAIAIAEAPQADAOAAAXIAABeIgTAAQgGAAgCgDQgCgCgBgGIgDgNIgGANQgEAIgJADQgJADgTAAQgQAAgJgDgAggALQgFAEAAAQQAAARAFAFQAFAFAUAAQALAAAJgCQAIgCAFgEQAFgEACgGQACgGAAgIIAAgTIgvAAQgPAAgFAEg");
	this.shape_6.setTransform(-24.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9E8E6").s().p("AAeBUQgdAAgPgDIgQgFQgHgDgFgEQgFgFgDgGQgDgGgDgJQgDgPAAgcQAAgaADgQQADgIADgHQADgGAGgFQAFgEAGgDIAQgFQAPgDAdAAIAeAAIAAATQAAAFgDADQgCADgGAAIgTAAIgeABQgMABgFAFQgGAFgCAMQgBAJgBAUQABAVABAJQACALAGAGQAFAFAMABQAJACAVAAIATAAQAGAAACACQADADAAAFIAAATg");
	this.shape_7.setTransform(-39.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9E8E6").s().p("AglBTQgLgCgGgGQgHgGgDgLQgDgKAAgRIAAgIQAAgMACgJQADgHAFgFQAFgFAJgCQAIgDAMAAQAbAAAeADQAAgNgCgHQgCgIgEgEQgEgDgIgCIgSgBIgpAAQgGAAgDgCQgCgDAAgGIAAgTIA0AAQAVAAANADQAPADAIAIQAIAIAEAPQADAOAAAXIAABeIgTAAQgGAAgCgDQgCgCgBgGIgDgNIgGANQgEAIgJADQgJADgTAAQgQAAgJgDgAggALQgFAEAAAQQAAARAFAFQAFAFAUAAQALAAAJgCQAIgCAFgEQAFgEACgGQACgGAAgIIAAgTIgvAAQgPAAgFAEg");
	this.shape_8.setTransform(-64,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9E8E6").s().p("AApBUQgFAAgDgCQgDgDAAgGIAAg+Ig7AAIAABJIgYAAQgGAAgDgCQgDgDAAgGIAAicIAZAAQAFAAADACQADADAAAFIAAA3IA7AAIAAhBIAZAAQAFAAAEACQACADAAAFIAACdg");
	this.shape_9.setTransform(-80.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-91.4,-18,182.8,36), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("ABABUQgLAAAAgLIAAicIAYAAQAGAAACACQAEADAAAFIAACdgAhMBUQgFAAgEgCQgDgDAAgGIAAicIAaAAQAFAAADACQACADAAAFIAAAyIAbAAQARAAAJACQAMACAGAGQAHAGADAKQACAKAAARQABAQgEALQgEAKgHAGQgHAGgKADQgKACgPAAgAg0A2IAbAAQARAAADgEQAFgEAAgQQAAgRgFgEQgEgEgQAAIgbAAg");
	this.shape.setTransform(42.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AgSBUIAAiJIgmAAIAAgUQAAgFADgDQACgCAGAAIBmAAIAAATQAAAFgCADQgDADgGAAIgeAAIAAB+QAAAGgCADQgDACgGAAg");
	this.shape_1.setTransform(24.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAMBWQgdgCgKgEQgJgDgGgEQgFgEgFgGQgHgJgEgRQgCgOAAgVQgBgYAEgRQAEgRAIgKQAIgJANgGQAMgDASAAQARAAAMACQAMAFAJAHQAHAJAFANQADAOAAAUIAAAQQAAAFgCACQgDADgFAAIhZAAQABAQACAIQACAJAFAFQAFADAKABIAaACIAhAAQAFAAADADQADACAAAGIAAATgAgPg2QgHACgEAEQgDADgCAJIgCAWIBDAAIAAgGIgBgSQgBgHgEgDQgDgEgGgCQgGgBgMAAg");
	this.shape_2.setTransform(9.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AA0BUQgGAAgCgCQgDgDAAgGIAAh+IgrAAIgKBjQgDAVgHAGQgFAGgJACQgJADgOAAIgQAAIAAgTQAAgFACgDQADgDAGAAIAOAAIAOh+QAAgHADgCQADgCAEAAIBcAAQAKAAAAAKIAACdg");
	this.shape_3.setTransform(-8.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AAvBUQgGAAgDgCQgDgDAAgGIAAheIhLBpIgTAAQgFAAgDgCQgDgDAAgGIAAicIAZAAQALAAAAAKIAABfIBLhpIATAAQAGAAACACQADADAAAFIAACdg");
	this.shape_4.setTransform(-26,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AggBzQgNgDgJgKQgJgIgFgRQgCgLgCggIAAgwQAAghACgRIAFgSQACgIAEgHQAFgFAGgEQAFgEAJgDQALgDAdgBIAxAAIAAASQgBAGgCADQgCACgGAAIgmAAQgOABgIABQgJACgEAEQgFAGgBAKQgCAKAAASIAAAFIAEgKQAFgJAJgDQAGgBAWAAQASAAAMADQAMAEAIAKQAHAJAEARQADAPAAAcQAAAbgDAPQgEASgIAJQgJAKgOAEQgOADgWAAQgTABgMgEgAgWgWQgHADgDAGQgDAGgBAJIgBAaIAAAGQAAARACAKQABAKAEAHQAEAFAHADQAHACALABQANgBAHgBQAHgBAFgGQAEgFACgMQABgLAAgUQAAgWgBgKQgCgMgEgFQgFgFgHgCQgHgBgNAAQgNAAgIADg");
	this.shape_5.setTransform(-43.8,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-55,-18,110.2,36), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AANBWQgegCgLgEQgHgDgGgEQgGgEgFgGQgHgJgEgRQgDgOABgVQAAgYADgRQAEgRAIgKQAIgJANgGQANgDARAAQARAAAMACQAMAFAJAHQAHAJAEANQAFAOAAAUIAAAQQAAAFgDACQgDADgFAAIhYAAQAAAQACAIQACAJAFAFQAGADAJABIAaACIAhAAQAFAAADADQACACAAAGIAAATgAgPg2QgHACgEAEQgEADgBAJIgBAWIBCAAIAAgGIgBgSQgBgHgEgDQgDgEgGgCQgHgBgLAAg");
	this.shape.setTransform(38.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AgSBUIAAiJIgmAAIAAgUQAAgFADgDQACgCAGAAIBmAAIAAATQAAAFgCADQgDADgGAAIgeAAIAAB+QAAAGgCADQgDACgGAAg");
	this.shape_1.setTransform(23.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAMBWQgdgCgKgEQgIgDgHgEQgFgEgFgGQgIgJgDgRQgDgOAAgVQAAgYAEgRQAEgRAIgKQAIgJANgGQANgDARAAQASAAALACQANAFAHAHQAIAJAFANQADAOAAAUIAAAQQABAFgDACQgDADgFAAIhZAAQABAQABAIQADAJAFAFQAFADALABIAZACIAgAAQAGAAACADQAEACAAAGIAAATgAgPg2QgHACgDAEQgEADgCAJIgCAWIBDAAIAAgGIgBgSQgBgHgEgDQgCgEgHgCQgGgBgMAAg");
	this.shape_2.setTransform(8.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("ABWBkQgGAAgCgCQgDgDAAgFIAAgWIitAAQgGAAgCgDQgDgDAAgFIAAicIAZAAQAFAAADACQACADAAAFIAAB/IAvAAIAAiJIAYAAQAEAAADACQADADAAAFIAAB/IAuAAIAAh/QAAgFADgDQADgCAFAAIAYAAIAACJIAMAAQAFAAADACQACAEAAAFIAAAzg");
	this.shape_3.setTransform(-12.4,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AA/ByQgGAAgDgCQgCgDAAgGIAAiqIhUCtQgCAFgDABQgDACgIAAIgmAAIAAjjIAYAAQAGAAADACQACADAAAGIAACqIBTitQACgFADgBQAEgCAIAAIAmAAIAADjg");
	this.shape_4.setTransform(-36,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-48.8,-18,97.7,36), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AgcB0IAAhCQAAgKADgFQACgFAGgFIAsgpQAGgFADgHQADgIAAgKIgBgSQgBgIgEgDQgDgEgIgCQgHgBgOAAQgPAAgIABQgJACgEAEQgEADgBAIIgBASQAAAFgDADQgCACgGAAIgWAAIAAgVQAAgQADgJQAEgMAIgGQAIgIAPgDQAPgDAWgBQAWABAOADQAOAEAIAIQAIAIAEANQAEAMAAAUQAAATgGAMQgEALgMAKIgxAtIAAA2QAAAFgDADQgBACgGABg");
	this.shape.setTransform(104.3,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AANBWQgegCgLgEQgHgDgGgEQgGgEgFgGQgHgJgEgRQgDgOABgVQAAgYADgRQAEgRAIgKQAIgJANgGQANgDARAAQARAAAMACQAMAFAJAHQAHAJAEANQAFAOAAAUIAAAQQAAAFgDACQgDADgFAAIhYAAQAAAQACAIQACAJAFAFQAGADAJABIAaACIAhAAQAFAAADADQACACAAAGIAAATgAgPg2QgHACgEAEQgEADgBAJIgBAWIBCAAIAAgGIgBgSQgBgHgEgDQgDgEgGgCQgHgBgLAAg");
	this.shape_1.setTransform(87.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAvBUQgGAAgDgCQgDgDAAgGIAAheIhLBpIgTAAQgFAAgDgCQgDgDAAgGIAAicIAZAAQALAAAAAKIAABfIBLhpIATAAQAGAAACACQADADAAAFIAACdg");
	this.shape_2.setTransform(69.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AhCBUIAAidQAAgFADgDQADgCAFAAIBBAAQAPAAAKACQAKADAGAFQAFAGADAJQACAIAAANQAAAQgFAIQgFAIgOAEQAIABAGACQAFADAEAFQADAFACAHIACAQQAAALgDAJQgDAIgHAGQgGAGgKADQgKADgNAAgAgeA2IAtAAQAMAAAEgEQADgFAAgNQAAgMgDgDQgEgEgMAAIgtAAgAgegNIAoAAQALAAAEgEQAEgEAAgMQAAgMgEgEQgEgEgLAAIgoAAg");
	this.shape_3.setTransform(52.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AgSBUIAAiJIgmAAIAAgUQAAgFADgDQACgCAGAAIBmAAIAAATQAAAFgCADQgDADgGAAIgeAAIAAB+QAAAGgCADQgDACgGAAg");
	this.shape_4.setTransform(37.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AAeBUQgdAAgQgDIgPgFQgHgDgFgEQgFgFgDgGQgDgGgCgJQgEgPAAgcQAAgaAEgQQACgIADgHQAEgGAEgFQAGgEAGgDIAQgFQAPgDAdAAIAeAAIAAATQAAAFgDADQgDADgFAAIgTAAIgeABQgMABgFAFQgGAFgCAMQgCAJABAUQgBAVACAJQACALAGAGQAFAFAMABQAIACAWAAIATAAQAFAAADACQADADAAAFIAAATg");
	this.shape_5.setTransform(23.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E8E6").s().p("AANBWQgegCgLgEQgHgDgGgEQgHgEgDgGQgJgJgDgRQgCgOgBgVQABgYADgRQAEgRAIgKQAIgJANgGQANgDARAAQARAAAMACQANAFAHAHQAJAJADANQAFAOAAAUIAAAQQgBAFgCACQgCADgGAAIhYAAQAAAQABAIQADAJAFAFQAGADAKABIAZACIAgAAQAGAAADADQACACAAAGIAAATgAgPg2QgHACgDAEQgEADgCAJIgBAWIBCAAIAAgGIgBgSQgBgHgDgDQgEgEgGgCQgGgBgMAAg");
	this.shape_6.setTransform(7.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9E8E6").s().p("AhXBUQgGAAgCgCQgDgDAAgGIAAicIAYAAQAGAAACACQADADAAAFIAAB/IAuAAIAAiJIAYAAQAFAAADACQADADAAAFIAAB/IAuAAIAAh/QAAgFADgDQADgCAFAAIAYAAIAACcQAAALgKAAg");
	this.shape_7.setTransform(-12.4,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9E8E6").s().p("AAMBWQgdgCgKgEQgJgDgGgEQgFgEgFgGQgHgJgEgRQgCgOAAgVQgBgYAEgRQAEgRAIgKQAIgJANgGQAMgDASAAQARAAAMACQAMAFAJAHQAHAJAEANQAEAOAAAUIAAAQQAAAFgCACQgDADgFAAIhZAAQABAQACAIQACAJAFAFQAFADAKABIAaACIAhAAQAFAAADADQADACAAAGIAAATgAgPg2QgHACgEAEQgDADgCAJIgCAWIBDAAIAAgGIgBgSQgBgHgEgDQgDgEgGgCQgGgBgMAAg");
	this.shape_8.setTransform(-32.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9E8E6").s().p("AgSBUIAAiJIgmAAIAAgUQAAgFADgDQACgCAGAAIBmAAIAAATQAAAFgCADQgDADgGAAIgeAAIAAB+QAAAGgCADQgDACgGAAg");
	this.shape_9.setTransform(-47.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9E8E6").s().p("Ag8B1IAAgTQAAgGACgDQADgCAGAAIAfAAQAOgBAEgCQAFgDABgLIAEgSIgOABQgKABgGgDQgHgDgEgFQgEgFgDgIIgGgQIgbhhQgDgIAAgPIAAgKIAWAAQAHAAAEACQACADACAGIAdCCIAXAAIAXiAQABgHADgEQAEgCAHAAIAWAAIAAAKQAAALgDAOIgkCeQgCALgEAIQgEAHgGAEQgGAFgIADQgIACgMAAg");
	this.shape_10.setTransform(-63.3,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E9E8E6").s().p("AAnBUQgGAAgDgCQgDgDAAgGIAAh+Ig1AAIAAB+QAAAGgDADQgCACgGAAIgZAAIAAidQAAgFADgDQADgCAGAAIBmAAQAGAAACACQADADAAAFIAACdg");
	this.shape_11.setTransform(-80.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9E8E6").s().p("AhCBUIAAidQAAgFADgDQADgCAFAAIBBAAQAPAAAKACQAKADAGAFQAFAGADAJQACAIAAANQAAAQgFAIQgFAIgOAEQAIABAGACQAFADAEAFQADAFACAHIACAQQAAALgDAJQgDAIgHAGQgGAGgKADQgKADgNAAgAgeA2IAtAAQAMAAAEgEQADgFAAgNQAAgMgDgDQgEgEgMAAIgtAAgAgegNIAoAAQALAAAEgEQAEgEAAgMQAAgMgEgEQgEgEgLAAIgoAAg");
	this.shape_12.setTransform(-104.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-115.4,-18,230.9,36), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AgvBUQgGAAgDgCQgDgDAAgGIAAicIAZAAQAFAAADACQADADgBAFIAAAyIAbAAQARAAAKACQAMACAFAGQAIAGACAKQADAKAAARQAAAQgEALQgDAKgIAGQgHAGgKADQgLACgOAAgAgYA2IAbAAQARAAADgEQAEgEABgQQgBgRgEgEQgEgEgQAAIgbAAg");
	this.shape.setTransform(83.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AAeBUQgdAAgPgDIgQgFQgHgDgFgEQgEgFgEgGQgDgGgDgJQgDgPAAgcQAAgaADgQQADgIADgHQADgGAGgFQAFgEAGgDIAQgFQAPgDAdAAIAeAAIAAATQAAAFgDADQgCADgGAAIgTAAIgeABQgMABgFAFQgGAFgCAMQgBAJgBAUQABAVABAJQACALAGAGQAFAFAMABQAJACAVAAIATAAQAGAAACACQADADAAAFIAAATg");
	this.shape_1.setTransform(68.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAMBWQgdgCgKgEQgIgDgHgEQgFgEgEgGQgJgJgDgRQgDgOAAgVQAAgYAEgRQAEgRAIgKQAIgJANgGQANgDARAAQASAAALACQANAFAHAHQAIAJAFANQADAOAAAUIAAAQQABAFgDACQgDADgFAAIhZAAQABAQABAIQADAJAFAFQAFADALABIAZACIAgAAQAGAAACADQAEACAAAGIAAATgAgPg2QgHACgDAEQgEADgCAJIgCAWIBDAAIAAgGIgBgSQgBgHgEgDQgCgEgHgCQgGgBgMAAg");
	this.shape_2.setTransform(53,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AgSBUIAAiJIgmAAIAAgUQAAgFADgDQACgCAGAAIBmAAIAAATQAAAFgCADQgDADgGAAIgeAAIAAB+QAAAGgCADQgDACgGAAg");
	this.shape_3.setTransform(37.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AANBWQgegCgLgEQgHgDgGgEQgHgEgDgGQgJgJgDgRQgCgOgBgVQABgYADgRQAEgRAIgKQAIgJANgGQAMgDASAAQARAAAMACQAMAFAIAHQAJAJADANQAFAOAAAUIAAAQQgBAFgCACQgCADgGAAIhYAAQAAAQACAIQACAJAFAFQAGADAJABIAaACIAgAAQAGAAADADQACACAAAGIAAATgAgPg2QgHACgEAEQgEADgBAJIgBAWIBCAAIAAgGIgBgSQgBgHgDgDQgEgEgGgCQgGgBgMAAg");
	this.shape_4.setTransform(22.9,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AglBTQgLgCgGgGQgHgGgDgLQgDgKAAgRIAAgIQAAgMACgJQADgHAFgFQAFgFAJgCQAIgDAMAAQAbAAAeADQAAgNgCgHQgCgIgEgEQgEgDgIgCIgSgBIgpAAQgGAAgDgCQgCgDAAgGIAAgTIA0AAQAVAAANADQAPADAIAIQAIAIAEAPQADAOAAAXIAABeIgTAAQgGAAgCgDQgCgCgBgGIgDgNIgGANQgEAIgJADQgJADgTAAQgQAAgJgDgAggALQgFAEAAAQQAAARAFAFQAFAFAUAAQALAAAJgCQAIgCAFgEQAFgEACgGQACgGAAgIIAAgTIgvAAQgPAAgFAEg");
	this.shape_5.setTransform(6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E8E6").s().p("Ag+B2QgFAAgDgDQgDgCAAgGIAAjeIAUAAQAFAAADADQACACAAAGIADATIAHgPQAFgKAIgEQAJgDATAAQATAAAMADQANAEAHAKQAIAJADARQAEARAAAbQAAAagEAQQgDARgIAKQgHAJgNAEQgMAEgTAAQgTAAgJgEQgGgDgEgIIgHgPIAABcgAgThVQgHACgEAGQgEAGgBALQgCAKAAARIAAAFQAAAQACAKQABAKAEAGQAEAGAHADQAGADALAAQAOAAAGgCQAIgBAFgGQAEgFABgMQACgJAAgVQAAgWgCgKQgBgMgEgGQgFgFgIgBQgGgCgOAAQgLAAgGADg");
	this.shape_6.setTransform(-11.3,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9E8E6").s().p("AAvBUQgGAAgDgCQgDgDAAgGIAAheIhLBpIgTAAQgFAAgDgCQgDgDAAgGIAAicIAZAAQALAAAAAKIAABfIBLhpIATAAQAGAAACACQADADAAAFIAACdg");
	this.shape_7.setTransform(-29.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9E8E6").s().p("AggBzQgOgDgIgKQgKgIgDgRQgDgLgDggIAAgwQAAghAEgRIAEgSQACgIAFgHQAEgFAGgEQAGgEAHgDQALgDAegBIAwAAIAAASQAAAGgCADQgDACgFAAIgmAAQgPABgHABQgJACgEAEQgFAGgBAKQgCAKAAASIAAAFIAFgKQAEgJAIgDQAIgBAUAAQAUAAALADQANAEAHAKQAHAJAEARQAEAPAAAcQAAAbgEAPQgEASgIAJQgIAKgQAEQgNADgXAAQgSABgMgEgAgVgWQgIADgDAGQgDAGgBAJIgBAaIAAAGQAAARACAKQABAKAEAHQAEAFAHADQAGACALABQAOgBAGgBQAJgBAEgGQAEgFABgMQADgLAAgUQAAgWgDgKQgBgMgEgFQgEgFgJgCQgGgBgOAAQgNAAgGADg");
	this.shape_8.setTransform(-47.3,-3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9E8E6").s().p("AgiBTQgOgEgIgJQgIgJgDgSQgDgPAAgcQAAgaADgQQADgSAIgJQAIgJAOgEQANgEAVAAQAWAAANAEQAOAEAIAJQAHAJAEASQADAQAAAaQAAAcgDAPQgEASgHAJQgIAJgOAEQgNAEgWAAQgVAAgNgEgAgUg3QgIACgDAGQgEAFgBAMIgBAeIABAfQABALAEAGQADAFAIACQAGACAOAAQAOAAAHgCQAHgCAEgFQAEgGABgLIABgfIgBgeQgBgMgEgFQgEgGgHgCQgHgBgOAAQgOAAgGABg");
	this.shape_9.setTransform(-65.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9E8E6").s().p("AAxByQgvgBgPgCQgNgDgJgDQgJgEgHgGQgGgGgEgIQgFgJgCgLQgDgPgBgrIAAgFQAAgYAEgiQACgMAFgIQAEgIAGgGQAHgGAJgEQAJgDANgCQAPgDAvgBIAYAAIAAAWQAAAFgCADQgDACgFAAIgIAAQglAAgPACIgPADQgHADgEADQgFAEgDAGQgCAFgCAJQgCANAAAfIAAAFQAAAfACANQACAJACAFQADAGAFAEQAEAEAHACIAPADQAPACAlAAIAIAAQAFAAADACQACADAAAGIAAAVg");
	this.shape_10.setTransform(-82.4,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-93.3,-18,186.6,36), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAaAyQgFAAgCgEIghgpIgBAAIAAAmQAAAEgCACQgBABgEAAIgPAAIAAhcQAAgEACgCQACgBADAAIAPAAIAAAoIABAAIAhgmQACgCADAAIALAAIAAALQAAAFgCADIgfAdIAhAhQADACAAAFIAAALg");
	this.shape.setTransform(19.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AASAyQgRAAgJgCIgJgCIgHgGIgFgGIgDgJQgDgIAAgRQAAgPADgJIADgJIAFgHIAHgFIAJgCQAJgCARAAIASAAIAAALQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABIgLAAIgSAAQgGABgEADQgDAEgBAGIgBARIABASQABAGADAEQAEADAGAAIASABIALAAQADABACABQACACAAADIAAALg");
	this.shape_1.setTransform(10.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAcAyQgEAAgCgBQgBgCAAgEIAAg3IgsA+IgLAAQgEAAgCgBQgBgCAAgEIAAhcIAOAAQAHAAAAAHIAAA3IAsg+IALAAQAEAAABABQACACAAAEIAABcg");
	this.shape_2.setTransform(0.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AgUAxQgIgCgEgGQgFgFgCgLQgCgIAAgRQAAgPACgKQACgKAFgFQAEgGAIgDQAIgBAMAAQAOAAAHABQAIADAFAGQAFAFACAKQABAKAAAPQAAARgBAIQgCALgFAFQgFAGgIACQgHACgOAAQgMAAgIgCgAgMggQgEABgCADQgCAEgBAGIAAASIAAASQABAHACAEQACADAEABIAMABIANgBQAEgBACgDQACgEABgHIABgSIgBgSQgBgGgCgEQgCgDgEgBIgNgBIgMABg");
	this.shape_3.setTransform(-9.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AAXAyQgEAAgBgBQgBgCAAgEIAAhKIggAAIAABKQAAAEgBACQgCABgEAAIgOAAIAAhcQAAgEACgCQABgBADAAIA9AAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQABACAAAEIAABcg");
	this.shape_4.setTransform(-19.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-26.3,-11.5,52.8,23), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAcBKQgEAAgBgBQgCgCAAgDIAAg5IgsA/IgLAAQgEAAgCgBQgBgCAAgDIAAhdIAOAAQAHAAAAAHIAAA3IAsg+IALAAQAEAAACACQABABAAAEIAABcgAgNgqQgFgCgDgCQgDgDgBgEIgCgLIAAgJIAKAAQADAAACABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAIACACQADABAFAAQAFAAACgBQACgDAAgHQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABgBADAAIAKAAIAAAJQAAAGgBAFQgBAEgDADQgEACgEACQgGABgGAAQgHAAgFgBg");
	this.shape.setTransform(32,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AAmAyQgGAAAAgHIAAhcIAOAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQABACAAAEIAABcgAgtAyQgDAAgCgBQgBgCAAgEIAAhcIAOAAQAEAAABABQACACAAAEIAAAdIAQAAQAKgBAFACQAHACADADQAEADACAGQACAGAAAJQAAALgCAFQgDAHgEADQgEAEgGACQgFABgJAAgAgeAgIAQAAQAKAAACgCQACgDAAgKQAAgJgCgDQgCgCgKAAIgQAAg");
	this.shape_1.setTransform(20.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AgkBGQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAiEIAMAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIACAFIACALIAEgJQADgGAFgCQAFgCALAAQALAAAHACQAIACAEAGQAFAFACAKQACAKAAAQQAAAQgCAJQgCAKgFAGQgEAFgIADQgHACgLAAQgMAAgFgCQgDgCgCgFIgFgJIAAA3gAgLgyQgEABgDAEQgCADgBAHIgBAQIAAADIABAPQABAFACAEQADAEAEABQAEACAGAAIAMgBQAEgBADgDQADgDAAgHIABgSIgBgTQAAgHgDgDQgDgDgEgBIgMgBQgGAAgEACg");
	this.shape_2.setTransform(8.6,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AgKAyIAAhRIgXAAIAAgLQAAgEABgCQACgBAEAAIA8AAIAAALQAAADgCACQgBABgEABIgSAAIAABKQAAAEgBACQgCABgDAAg");
	this.shape_3.setTransform(-0.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AASAyQgRAAgJgCIgJgCIgHgGIgFgGIgDgJQgDgIAAgRQAAgPADgJIADgJIAFgHIAHgFIAJgCQAJgCARAAIASAAIAAALQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABIgLAAIgSAAQgGABgEADQgDAEgBAGIgBARIABASQABAGADAEQAEADAGAAIASABIALAAQADABACABQACACAAADIAAALg");
	this.shape_4.setTransform(-9.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AAmAyQgGAAAAgHIAAhcIAOAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQABACAAAEIAABcgAgtAyQgDAAgCgBQgBgCAAgEIAAhcIAOAAQAEAAABABQACACAAAEIAAAdIAQAAQAKgBAFACQAHACADADQAEADACAGQACAGAAAJQAAALgCAFQgDAHgEADQgEAEgGACQgFABgJAAgAgeAgIAQAAQAKAAACgCQACgDAAgKQAAgJgCgDQgCgCgKAAIgQAAg");
	this.shape_5.setTransform(-20.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E8E6").s().p("AgSBFQgJgDgFgFQgGgFgCgKQgBgHgBgTIAAgcQgBgTACgLIACgKIAFgJQACgDADgCQAEgDAFgBQAGgCARgBIAdAAIAAALQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIgXAAIgMABQgGABgCADQgDADgBAHIgBAQIAAADIADgGQADgFAFgCQAEgBAMAAQALAAAHACQAHADAFAFQAEAGACAKQACAJABAQQgBAQgCAKQgCAKgEAFQgGAGgJACQgIACgMAAQgMAAgGgBgAgNgNQgEACgBAEQgDADAAAGIgBAPIAAADIABAQQACAHACADQACAEAEABQAEACAHAAIALgBQAFgBACgDQADgDAAgHIABgTIgBgTQAAgGgDgDQgCgDgFgBIgLgBQgIAAgFABg");
	this.shape_6.setTransform(-31.7,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-39.2,-11.5,78.5,23), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAbAyQgDAAgBgBQgCgCAAgEIAAg3IgsA+IgMAAQgDAAgBgBQgCgCAAgEIAAhcIAOAAQAHAAAAAHIAAA3IAsg+IALAAQAEAAACABQABACAAAEIAABcg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-7.4,-11.5,14.9,23), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAbBKQgDAAgBgBQgCgCAAgDIAAg5IgtA/IgLAAQgDAAgBgBQgCgCAAgDIAAhdIAPAAQAGAAAAAHIAAA3IAsg+IALAAQADAAADACQABABAAAEIAABcgAgNgqQgFgCgDgCQgDgDgCgEIAAgLIAAgJIAJAAQAEAAABABQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAAIABACQACABAHAAQAEAAACgBQACgDAAgHQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQACgBAEAAIAJAAIAAAJQAAAGgBAFQgCAEgDADQgCACgGACQgFABgFAAQgIAAgFgBg");
	this.shape.setTransform(33.4,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AAmAyQgGAAAAgHIAAhcIAOAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQABACAAAEIAABcgAgtAyQgDAAgCgBQgBgCAAgEIAAhcIAOAAQAEAAABABQACACAAAEIAAAdIAQAAQAKgBAFACQAHACADADQAEADACAGQACAGAAAJQAAALgCAFQgDAHgEADQgEAEgGACQgFABgJAAgAgeAgIAQAAQAKAAACgCQACgDAAgKQAAgJgCgDQgCgCgKAAIgQAAg");
	this.shape_1.setTransform(21.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAZAyQgEAAgCgBQgBgCAAgEIAAglIgjAAIAAAsIgPAAQgCAAgCgBQgCgCAAgEIAAhcIAOAAQAEAAACABQABACAAAEIAAAfIAjAAIAAgmIAOAAQAEAAABABQACACAAAEIAABcg");
	this.shape_2.setTransform(10.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AgTBFQgIgDgFgFQgFgFgDgKQgBgHgBgTIAAgcQAAgTABgLIACgKIAEgJQADgDADgCQAEgDAFgBQAGgCASgBIAcAAIAAALQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgCABgDAAIgWAAIgNABQgGABgCADQgCADgCAHIAAAQIAAADIACgGQADgFAFgCQAEgBAMAAQALAAAHACQAHADAFAFQAEAGACAKQACAJAAAQQAAAQgCAKQgBAKgGAFQgFAGgIACQgJACgNAAQgLAAgHgBgAgMgNQgFACgCAEQgCADAAAGIAAAPIAAADIAAAQQABAHACADQADAEAEABQAEACAGAAIAMgBQAEgBADgDQADgDABgHIABgTIgBgTQgBgGgDgDQgDgDgEgBIgMgBQgHAAgEABg");
	this.shape_3.setTransform(-0.1,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AgUAxQgIgCgEgGQgFgFgCgLQgCgIAAgRQAAgPACgKQACgKAFgFQAEgGAIgDQAIgBAMAAQAOAAAHABQAJADAEAGQAEAFACAKQACAKAAAPQAAARgCAIQgCALgEAFQgEAGgJACQgHACgOAAQgMAAgIgCgAgMggQgEABgCADQgCAEgBAGIgBASIABASQABAHACAEQACADAEABIAMABIAMgBQAFgBACgDQACgEABgHIABgSIgBgSQgBgGgCgEQgCgDgFgBIgMgBIgMABg");
	this.shape_4.setTransform(-10.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AgzAyIAAgLQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgCAEAAIAIAAIAIhLQABgGAEAAIAyAAQAEAAACAGIAHBLIAMAAIAAALQAAAEgBACQgCABgEAAgAAVAgIgBgDIgGg8IgYAAIgGA8IgBADIAmAAg");
	this.shape_5.setTransform(-21.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E8E6").s().p("AgmBEIAAgNQAAgDACgCQABgCAEAAIATAAQAHAAADgCQACgCACgGIACgJIgLABQgGAAgDgBQgEgCgDgDQgDgEgDgLIgPg4IgCgKIAAgKIAMAAQAEAAACACQACACABAGIAQBGIASAAIAUhJQABgEABgBQACgCAFAAIAJAAIAAAKQAAAGgBAFIgYBRQgFAUgFAFQgEAEgGACQgFACgJAAg");
	this.shape_6.setTransform(-33.1,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-40.7,-11.5,81.4,23), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAkBCQgEAAgCgCQgCgDAAgEIAAhJIg7BSIgPAAQgEAAgCgCQgCgCAAgFIAAh6IATAAQAIAAAAAIIAABKIA7hSIAPAAQAEAAACACQACACAAAEIAAB7g");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-9.1,-14.5,18.3,29), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAyBCQgJAAAAgJIAAh6IATAAQAFAAACACQACACAAAEIAAB7gAg7BCQgEAAgDgCQgCgDAAgEIAAh6IATAAQAEAAADACQABACAAAEIAAAnIAWAAQANAAAIACQAIACAFAEQAFAFACAHQACAIAAANQAAANgDAIQgCAIgGAFQgFAFgIACQgHACgMAAgAgpAqIAWAAQANAAADgDQADgDAAgNQAAgNgDgDQgEgDgMAAIgWAAg");
	this.shape.setTransform(33,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AgOBCIAAhsIgeAAIAAgPQAAgEACgCQADgCAEAAIBQAAIAAAPQAAAEgCACQgDACgEAAIgXAAIAABjQAAAFgCACQgCACgFAAg");
	this.shape_1.setTransform(19.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AAKBDQgXgBgJgEQgFgCgFgDQgFgDgDgEQgHgIgCgMQgCgMAAgRQAAgSADgNQADgNAGgIQAGgHAKgFQALgDANAAQAOAAAIADQAKACAGAHQAGAGAEALQADAKAAAQIAAAMQAAAFgCACQgCABgEAAIhFAAQAAANABAHQACAGAFAEQADACAIABIAUABIAZAAQAFABACACQACACAAAEIAAAPgAgMgpQgFABgDACQgCADgCAHIgBARIA0AAIAAgEIgBgOQgBgGgDgDQgCgCgGgBIgNgBg");
	this.shape_2.setTransform(7.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AAoBCQgEAAgCgCQgCgCAAgFIAAhjIghAAIgIBOQgCAQgGAFQgEAEgGADQgIACgKAAIgOAAIAAgPQAAgFACgCQADgCAEAAIALAAIALhiQABgFACgCQACgCADAAIBIAAQAHAAAAAIIAAB7g");
	this.shape_3.setTransform(-6.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AAkBCQgEAAgCgCQgCgDAAgEIAAhJIg7BSIgPAAQgEAAgCgCQgCgCAAgFIAAh6IATAAQAIAAAAAIIAABKIA7hSIAPAAQAEAAACACQACACAAAEIAAB7g");
	this.shape_4.setTransform(-20.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AgZBaQgKgDgIgHQgGgHgEgNQgCgJgBgYIAAgmQAAgZACgOIADgOQACgGAEgFQACgFAGgDQAEgDAGgCQAJgCAWgBIAnAAIAAAOQAAAFgDACQgBACgFAAIgeAAIgRABQgGABgEAEQgDAEgBAIQgCAIAAAOIAAAEIAEgIQADgHAHgCQAFgCAQAAQAPAAAJADQAKADAGAIQAGAHACAOQADAMAAAUQAAAWgDAMQgCAOgHAHQgGAIgMADQgLACgRAAQgPAAgJgCgAgRgRQgFACgDAFQgDAFAAAHIgBAUIAAAFQAAANACAIQABAIACAEQADAFAGACQAFACAJAAIAPgBQAGgBAEgEQADgEABgKQACgIAAgRQAAgQgCgIQgBgJgDgEQgEgEgGgBIgPgBQgKAAgGACg");
	this.shape_5.setTransform(-34.2,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-43.5,-14.5,87.1,29), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E8E6").s().p("AAJBDQgWgBgIgEQgGgCgFgDQgFgDgDgEQgGgIgDgMQgCgMAAgRQAAgSADgNQADgNAGgIQAHgHAKgFQAKgDANAAQANAAAJADQAKACAHAHQAFAGAEALQADAKAAAQIAAAMQAAAFgCACQgCABgEAAIhGAAQABANACAHQACAGADAEQAFACAIABIATABIAaAAQAEABACACQACACAAAEIAAAPgAgMgpQgFABgDACQgDADgBAHIgCARIA0AAIAAgEIgBgOQAAgGgCgDQgDgCgFgBIgOgBg");
	this.shape.setTransform(46.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E8E6").s().p("AAyBCQgJAAABgJIAAh6IATAAQAEAAACACQACACAAAEIAAB7gAg7BCQgFAAgCgCQgCgDAAgEIAAh6IATAAQAFAAABACQACACAAAEIAAAnIAWAAQAOAAAGACQAJACAFAEQAFAFACAHQADAIAAANQAAANgEAIQgCAIgGAFQgFAFgIACQgIACgLAAgAgpAqIAWAAQANAAADgDQADgDAAgNQAAgNgDgDQgDgDgNAAIgWAAg");
	this.shape_1.setTransform(31.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E8E6").s().p("AgzBCIAAh7QAAgEACgCQACgCAFAAIAxAAQAMAAAIACQAIACAFAEQAEAFACAHQACAGAAAKQAAAMgFAHQgEAGgKADQAGABAFABQAEADADAEQACAEABAFIACANQAAAJgCAGQgCAHgGAEQgEAFgIACQgIADgKAAgAgXAqIAjAAQAJAAADgDQACgEAAgKQAAgJgCgDQgDgDgJAAIgjAAgAgXgKIAeAAQAJAAAEgDQADgDgBgKQABgJgDgDQgEgEgJAAIgeAAg");
	this.shape_2.setTransform(16.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E8E6").s().p("AAKBDQgXgBgJgEQgGgCgEgDQgFgDgDgEQgHgIgCgMQgCgMAAgRQAAgSADgNQADgNAGgIQAHgHAJgFQAKgDAOAAQAOAAAJADQAJACAGAHQAHAGADALQADAKAAAQIAAAMQAAAFgCACQgCABgEAAIhGAAQABANABAHQADAGAEAEQAEACAHABIAUABIAZAAQAFABACACQACACAAAEIAAAPgAgLgpQgGABgCACQgEADgBAHIgCARIA1AAIAAgEIgBgOQgBgGgDgDQgCgCgFgBIgOgBg");
	this.shape_3.setTransform(3.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E6").s().p("AhEBCQgEAAgCgCQgCgCgBgFIAAh6IAUAAQAEAAACACQACACAAAEIAABjIAkAAIAAhrIATAAQADAAACACQACACABAEIAABjIAkAAIAAhjQAAgEACgCQACgCAFAAIATAAIAAB6QAAAJgJAAg");
	this.shape_4.setTransform(-12.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E8E6").s().p("AAJBDQgWgBgIgEQgHgCgEgDQgFgDgDgEQgGgIgDgMQgCgMAAgRQAAgSADgNQADgNAGgIQAHgHAKgFQAJgDAOAAQANAAAKADQAJACAHAHQAGAGADALQADAKAAAQIAAAMQAAAFgCACQgCABgEAAIhGAAQABANABAHQADAGADAEQAEACAIABIAUABIAaAAQAEABACACQACACAAAEIAAAPgAgLgpQgGABgCACQgDADgCAHIgCARIA0AAIAAgEIgBgOQAAgGgCgDQgDgCgFgBIgOgBg");
	this.shape_5.setTransform(-27.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E8E6").s().p("AhUBZIAAgRQAAgEACgCQADgCAEAAIASAAIAKiQQAAgEACgCQACgCAEAAIBUAAQAEAAACACQACACAAAEIAKCQIAWAAIAAARQAAAEgCACQgCACgEAAgAAlBAIgCgPIgHhwIgyAAIgIBwIgCAPIBFAAg");
	this.shape_6.setTransform(-43.5,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-54.9,-14.5,109.8,29), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#302B74").s().p("AyvEtIAApZMAlfAAAIAAJZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-120,-30.1,240,60.3), null);


(lib.plane2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane2();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane2_1, new cjs.Rectangle(-97.5,-39,195,78), null);


(lib.plane1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane1();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane1_1, new cjs.Rectangle(-77.5,-68.5,155,137), null);


(lib.phone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(-41,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_1, new cjs.Rectangle(-41,-71,82,142), null);


(lib.nb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nbook();
	this.instance.parent = this;
	this.instance.setTransform(-147,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nb, new cjs.Rectangle(-147,-89,294,177), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB2376").s().p("AjeESIAAhgQAAgLAEgKIAEgHIDuksIj3AAIAAhdQAAgMAJgJQAJgJAMAAIGhAAIAABdQAAAPgNAOIjuEuID7AAIAABdQAAAMgJAJQgJAJgMAAg");
	this.shape.setTransform(100.7,0,0.549,0.549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB2376").s().p("ACOETQgfAAgUgXIijizIAACsQAAAMgJAJQgIAJgNAAIhrAAIAAoGQAAgNAJgJQAJgJANAAIBqAAIAADQICbi4QATgYAfAAIBFAAIAABCQAAAfgUAXIiECcICLCZQAVAXAAAeIAABDg");
	this.shape_1.setTransform(72.6,0,0.549,0.549);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjHjzQAAgNAJgJQAIgJANAAIFxABIAABcQAAANgJAJQgJAJgNAAIjnAAIAABZIDyAAIAABcQAAANgJAJQgJAIgNAAIjTAAIAABaIEGAAIAABdQAAANgJAIQgJAJgMAAIlxABg");
	this.shape_2.setTransform(-7.4,0,0.549,0.549);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACOETQgfAAgUgXIiiizIAACsQAAAMgKAJQgJAJgMAAIhrAAIAAoGQAAgNAJgJQAJgJAMAAIBsAAIAADQICai4QATgYAfAAIBFAAIAABCQAAAfgUAXIiECcICLCZQAVAXAAAeIAABDg");
	this.shape_3.setTransform(-34,0,0.549,0.549);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjFESIAAhdQAAgMAJgJQAJgJAMAAIDIAAQASAAANgNQANgNAAgRIAAgfIjFguQglgJgYgdQgYgdAAgmIAAhFQAAg2AmgmQAngmA1AAIEFAAIAABdQAAAMgJAJQgJAJgMAAIi9AAQgSAAgNANQgMANAAARIAAASIDFAtQAlAJAYAdQAXAdABAmIAABUQAAA1gmAmQgmAmg2AAg");
	this.shape_4.setTransform(45.6,0,0.549,0.549);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghETQhHAAgygzQgzgzAAhHIAAjKQAAhIAzgzQAygzBHABIDvAAIAABcQAAANgJAJQgJAJgMAAIizAAQgbAAgTATQgTATAAAbIAACrQAAAbATATQATATAbAAICzAAQAMAAAJAJQAJAIAAANIAABeg");
	this.shape_5.setTransform(-61.1,0,0.549,0.549);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEETIAAoGQABgNAIgJQAJgJANAAIBqAAIAAIHQgBAMgIAJQgJAJgNAAg");
	this.shape_6.setTransform(-81.2,0,0.549,0.549);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEESIAAmoIiQAAIAAheQAAgMAJgJQAJgJANAAIGKAAIAABdQAAANgJAJQgJAIgNABIhyAAIAAGLQAAAMgJAJQgIAJgNgBg");
	this.shape_7.setTransform(19.4,0,0.549,0.549);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEESIAAmoIiQAAIAAheQAAgMAJgJQAJgJAMAAIGLAAIAABdQAAANgJAJQgJAIgNABIhyAAIAAGLQAAAMgJAJQgIAJgNgBg");
	this.shape_8.setTransform(-101.3,0,0.549,0.549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-112.9,-15,225.9,30.2), null);


(lib.im2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.im2();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im2_1, new cjs.Rectangle(-249.5,-140,499,280), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9E8E6","#E9E9E8","#DCDBD9","#E2E1DF","#D1CFCB","#E9E9E7","#F9F9F9","#E9E8E6"],[0,0.094,0.294,0.631,0.702,0.749,0.804,1],3.5,-33,3.5,119).s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-120,-150,240,300), null);


(lib.bp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bp();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bp_1, new cjs.Rectangle(-119.5,-49,239,98), null);


(lib.blick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blick, new cjs.Rectangle(-125.5,-72,251,144), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(88.3,19);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,19);

	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.1,19);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-73.7,19);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.5,-10.6);

	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(45.8,-10.6);

	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-54.6,-10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-114.4,-25.1,229.1,55.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(0.1,19);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-115.3,-37,230.9,74), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(0.1,19);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.8,-19);

	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56.9,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-105.7,-37,211.7,74), null);


(lib.bps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bp_1();
	this.instance.parent = this;
	this.instance.setTransform(4,3.1);

	this.instance_1 = new lib.bp_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bps, new cjs.Rectangle(-128.9,-86,257.9,172), null);


// stage content:
(lib._240x400_tickets = function(mode,startPosition,loop) {
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
		
		var t1 = g(this.t1);
		var t2 = g(this.t2);
		var t3 = g(this.t3);
		var bps = g(this.bps);
		
		
		var tl = new TimelineMax({repeat: -1, repeatDelay: .3, onRepeat: function(){
			repeated = true;
		}});
		
		
		tl
		
		.add('sl1')
		
		.staggerFrom(bps, .9, {scaleX:'+=1', scaleY:'+=1', rotation:'-=30', alpha:0,  ease: Expo.easeOut}, .3, 'sl1')
		.staggerFrom(t1, .8, {y: '+=50', alpha:0, ease: Expo.easeOut}, .15, 'sl1+=1')
		.from(this.plane1, 1.3, {rotation:'-=90', alpha:0, ease: Expo.easeOut}, 'sl1+=.7')
		
		.to(this.plane1, 1, {rotation:'+=90', alpha:0, ease: Expo.easeIn})
		.staggerTo(t1, .8, {x: '-=150', alpha:0, ease: Expo.easeIn}, .05, '-=.5')
		.staggerTo(bps, .6, {x: '-=150', alpha:0, ease: Expo.easeIn}, .05, '-=1')
		
		.add('sl2')
		
		.from(this.im, .4, {alpha:0}, 'sl2')
		.to(this.im, 3, {scaleX:'+=.1', scaleY:'+=.1', ease: Linear.easeNone}, 'sl2')
		.staggerFrom(t2, .8, {y: '+=50', alpha:0, ease: Expo.easeOut}, .15, 'sl2+=.5')
		
		
		.staggerTo(t2, .8, {x: '-=150', alpha:0, ease: Expo.easeIn}, .05, '-=1.2')
		.to(this.im, .4, {alpha:0}, '-=.6')
		
		.add('sl3')
		
		.from(this.nb, .9, {x: '+=250', alpha:0, ease: Expo.easeOut}, 'sl3')
		.from(this.ph, .9, {x: '-=250', alpha:0, ease: Expo.easeOut}, 'sl3+=.3')
		
		.from(this.plane2, 1.3, {scaleX:0, scaleY:0, x:"-=50", y: '+=20', alpha:0, ease: Expo.easeOut}, 'sl3+=1')
		.from(this.blick, 1.3, {scaleX:0, scaleY:0, alpha:0, ease: Expo.easeOut}, 'sl3+=1')
		
		
		
		.staggerFrom(t3, .8, {y: '+=50', alpha:0, ease: Expo.easeOut}, .05, 'sl3+=1')
		
		
		.staggerTo(t3, .8, {x: '-=150', alpha:0, ease: Expo.easeIn,  onStart: check}, .05, '+=1')
		
		.to(this.plane2, 1, {scaleX:'+=1', scaleY:'+=1', x:"+=50", y: '-=20', ease: Expo.easeIn}, '-=.5')
		.to([this.blick, this.plane2], .3, { alpha:0, ease: Expo.easeIn}, '-=.3')
		.to(this.nb, .6, {x: '+=250', alpha:0, ease: Expo.easeIn}, '-=.6')
		.to(this.ph, .6, {x: '-=250', alpha:0, ease: Expo.easeIn}, '-=.5')
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// plane2
	this.plane2 = new lib.plane2_1();
	this.plane2.parent = this;
	this.plane2.setTransform(144.5,115,1,1,0,0,0,11,30);

	this.timeline.addTween(cjs.Tween.get(this.plane2).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(121.5,24.8,0.973,0.973);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(120.5,350.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(120.5,353.9);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(120.5,353.9);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// blue
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,353.5,1,1.543);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,25.1,1,0.834);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// im
	this.im = new lib.im2_1();
	this.im.parent = this;
	this.im.setTransform(174.5,92.1,1,1,0,0,0,95,-86.9);

	this.timeline.addTween(cjs.Tween.get(this.im).wait(1));

	// ph
	this.ph = new lib.phone_1();
	this.ph.parent = this;
	this.ph.setTransform(36,208);

	this.timeline.addTween(cjs.Tween.get(this.ph).wait(1));

	// blick
	this.blick = new lib.blick();
	this.blick.parent = this;
	this.blick.setTransform(138.5,114,1,1,0,0,0,-3,-16);
	this.blick.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 8.97, 46.8, 97.89, 0)];
	this.blick.cache(-127,-74,255,148);

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// nb
	this.nb = new lib.nb();
	this.nb.parent = this;
	this.nb.setTransform(154.5,170);

	this.timeline.addTween(cjs.Tween.get(this.nb).wait(1));

	// plane1
	this.plane1 = new lib.plane1_1();
	this.plane1.parent = this;
	this.plane1.setTransform(324.1,423.6,1,1,0,0,0,234.6,223.1);

	this.timeline.addTween(cjs.Tween.get(this.plane1).wait(1));

	// bps
	this.bps = new lib.bps();
	this.bps.parent = this;
	this.bps.setTransform(140.5,161.2);

	this.timeline.addTween(cjs.Tween.get(this.bps).wait(1));

	// grad
	this.instance_3 = new lib.grad();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,200,499,400);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blik.png?1489297335905", id:"blik"},
		{src:"images/bp.jpg?1489297335905", id:"bp"},
		{src:"images/im2.jpg?1489297335905", id:"im2"},
		{src:"images/nbook.png?1489297335905", id:"nbook"},
		{src:"images/phone.png?1489297335905", id:"phone"},
		{src:"images/plane1.png?1489297335905", id:"plane1"},
		{src:"images/plane2.png?1489297335905", id:"plane2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;