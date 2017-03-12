(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#E2F3FB",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1481786977715", id:"bg"},
		{src:"images/can.png?1481786977715", id:"can"},
		{src:"images/cross.png?1481786977715", id:"cross"},
		{src:"images/ct.png?1481786977715", id:"ct"},
		{src:"images/map.png?1481786977715", id:"map"},
		{src:"images/snow.png?1481786977715", id:"snow"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.can = function() {
	this.initialize(img.can);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,171);


(lib.cross = function() {
	this.initialize(img.cross);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,41);


(lib.ct = function() {
	this.initialize(img.ct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,147);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,270);


(lib.snow = function() {
	this.initialize(img.snow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,43);


(lib.ыты = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0085C8").s().p("AgBAXIAAgQIgFAAIAAAGIgGAAIAAgHIAGAAIAAgDIgQAAIAAgEIAQAAIAAgFIgGAAIAAgGIAGAAIAAAGIAFAAIAAgQIADAAIAAAQIAEAAIAAgGIAHAAIAAAGIgGAAIAAAFIAQAAIAAAEIgQAAIAAADIAGAAIAAAHIgHAAIAAgGIgEAAIAAAQgAgBADIADAAIAAgEIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.4,4.7,4.8);


(lib.year = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AgMAUIgEgEIgDgFIgBgGIACgHQABgFADgEQAEgFADgBQAFgDACAAIAFABIADACIABACIABAAIAEgEIAHAAIgHAnIgHAAIgDgEIAAAAIgEAEIgFABgAAAgOIgEADIgCAFIgCAJIAAAEQgBAEACADQACADACAAIADgBIACgCIACgDIAFgVIgCgDIgCgCIgEgBIgBACg");
	this.shape.setTransform(28.2,1.4,1.675,1.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AgLAcIgFgDQgDgDAAgDIgBgGQAAgGABgEIAFgGQADgDAFgCQAEgCAEgBIAHACQAEACAAADIABgBIAAgCIgBgHIgCgEIgEgEIgHgBIgBAAIgEABIgDABIgCABIgBgEIACAAIAEgCIAIgCQAGAAACACQAEACACADQADADAAAEIABAJQAAAHgBAGQgCAGgDAFQgCADgGAFQgGACgEAAgAgCgFIgDAFIgDAHIgBAHQAAAHACABQACADADAAQACAAADgEQADgEACgIIAAgJIgBgEIgCgCIgDAAQgCAAgCABg");
	this.shape_1.setTransform(20.1,0,1.675,1.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AgKAUQgEgCgBgCQgDgDgBgCIgBgHIACgIQACgFADgDQADgEAFgCQAFgCADAAIAIACQACAAADADQADADAAACQACADAAAEIgCAIQgDAFgDADQgDAEgEACQgEACgEAAgAgCgNIgDAGIgDAHIAAAGQAAAFABADQACADADAAQACAAACgDIAEgGIACgIIABgFQAAgFgCgDQgBgDgEAAQgCAAgCADg");
	this.shape_2.setTransform(12,1.4,1.675,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AgNASQgFgCABgFIABgFQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAIAEgDIAKgDIAFgEQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgEgBQgEAAgDADIgFAHIgDAAIACgGIADgFIAFgCIAHgBQAFAAAFADQAFACAAAFQgBAFgDADIgKAEIgFACIgFADQgCACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFABQAEAAADgDQADgCACgFIADAAIgCAGQAAADgDACIgFACIgHABQgGAAgFgDg");
	this.shape_3.setTransform(4.5,1.4,1.675,1.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AgQAZQgFgFABgKIAAgJIAGgQIAGgIIAIgEQAEgCAEAAIAGAAIAIADIgBACIgMgBQgHAAgCAFQgFAFgCAMIAEgCIAHgCIAHABQACAAADACIACAEIABAEIgCAKQgBAFgDADQgEAEgEACQgFACgDAAQgJAAgEgFgAgBgDIgDABIgDACIgBAAIgBAHIAAAGQAAAHABADQACADAEAAQACAAABgDIAEgFIACgIIAAgHQABgDgCgBQgBgCgFgBg");
	this.shape_4.setTransform(-6,0,1.675,1.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AgIAcIAIgtIgIAFIgCgDIANgMIAIAAIgKA3g");
	this.shape_5.setTransform(-12.3,0,1.675,1.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AgMAcQgEgBgCgCIgDgGIgBgJIAAgJIADgHIADgJQADgEADgDIAHgFQAEgCAEAAQAFAAADACIAGADQADADAAAEIABAIIgBAJIgCAHIgDAJIgGAHIgHAFQgEACgEAAQgFAAgDgCgAAAgXIgDAFIgDAHIgCAJIgBAHIgBAJQAAAFACAEQABADAEAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIADgFIAEgIIADgJIABgPQAAgMgHAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAg");
	this.shape_6.setTransform(-19.3,0,1.675,1.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("AgWAdIABgGIAVgRIAEgGIAFgHQACgDAAgFQAAgFgCgCQgEgCgCAAQgDAAgFADQgEADgDAKIgDAAIACgHIACgGIAIgFIAJgCIAFAAIAGADQADABABACQACADAAAEQAAAFgCAEIgGAHIgIAIIgVARIAQAAQAFAAAEgDQADgCABgGIADAAIgCAKIgCACIgCACIgEAAg");
	this.shape_7.setTransform(-27.9,-0.2,1.675,1.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-5.1,63.6,10.2);


(lib.wgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyBGQgQgRAAgiIAAg6IgwB1IgMAAIg7h4IAAB4IgSAAIAAigIAqAAIAzBmIArhqIAuAAIAABpQAAAeAGANQAFAOAOACIAAAJQglAAgRgRg");
	this.shape.setTransform(12.5,9.9,0.277,0.277);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBGQgQgRgBgiIAAg6IgvB1IgLAAIg9h4IAAB4IgRAAIAAigIAqAAIAzBmIArhqIAtAAIAABpQAAAdAGAOQAFAOAPACIAAAJQgmAAgQgRg");
	this.shape_1.setTransform(6.1,9.9,0.277,0.277);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BHQgPgNAAgVQAAgLAEgLQAEgJALgGQAKgFASgEQASgDAaAAIAFAAQAAgggIgMQgJgMgNAAIgMABQgGACgEADQgDADgFAHQgDAHgCAIIgTAAIABgSQABgKAHgGQAGgIAOgCQAMgCARAAQAjAAASASQASASAAAkIAABcIgdAAIgMgQIgCAAQgEAGgGAEQgDADgJADQgGADgLAAQgdAAgPgNgAgNAKQgKAJAAATQAAAOAGAIQAGAHAKAAQAGAAAFgDQAGgEADgEQAFgEACgHIAAgsIgFAAQgWAAgMAJg");
	this.shape_2.setTransform(0.1,9.9,0.277,0.277);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BzIAAi1IgCgOQAAgGgDgFQgDgFgEgCQgGgDgGAAIgEAAIAAgKIAiAAQAMAAAGADQAHADAFAJIAGgGIAKgGIAMgFQAHgBAKAAQASAAANAGQANAHAKALQAJAMAEAPQAFAQAAARQAAASgFAOQgEAPgJAMQgJALgPAHQgPAGgRAAQgKAAgFgBIgKgEQgEgBgFgEIAABIgAgHheQgIAEgFAFIACAKIABAHIAABfIAHAFQAEACAFACQAEACAHAAQAJAAAHgGQAHgFAEgJQAEgJABgLQACgNAAgPQAAgOgCgNQgBgLgEgLQgFgLgFgEQgGgFgJAAQgNAAgGAFg");
	this.shape_3.setTransform(-5,10.7,0.277,0.277);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBRIAAh0QAAgPgFgKQgEgKgPAAIgCAAIAAgKIB1AAQAJAAAEADQAGACACAEQADAEABAFQABAEAAAGIAAAYIgKAAQAAgUgJgIQgIgIgQAAIgdAAIAACRg");
	this.shape_4.setTransform(-9.8,9.9,0.277,0.277);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFC9QgdgOgTgbQgRgbgIgmQgIglAAguQAAgtAIglQAIgnARgZQATgbAdgPQAcgPApAAQAqAAAcAPQAeAPARAbQASAbAIAlQAJAngBArQABAsgJAnQgHAlgTAcQgRAageAPQgcAPgqAAQgpAAgcgPgAg0iGQgRAqAABcQAABdARAqQAQArAkAAQAkAAARgrQAQgrAAhcQAAhbgQgrQgRgrgkAAQgkAAgQArg");
	this.shape_5.setTransform(10.9,0,0.277,0.277);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFC9QgdgOgSgbQgSgbgIgmQgJglABguQgBgtAJglQAIgnASgZQASgbAdgPQAcgPApAAQApAAAeAPQAdAPARAbQASAaAJAmQAHAoABAqQgBArgHAoQgIAlgTAcQgRAagdAPQgeAPgpAAQgpAAgcgPgAg0iGQgRAqAABcQAABdARAqQAQArAkAAQAkAAARgrQAQgrAAhcQAAhbgQgrQgRgrgkAAQgkAAgQArg");
	this.shape_6.setTransform(1.1,0,0.277,0.277);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyDCQgUgFgPgIQgRgJgMgLQgMgKgOgQIARgPQAVAaAdAOQAcAMAZAAQARAAANgFQAOgGALgLQAMgMAGgSQAGgSAAgaQAAgtgYgWQgYgUgrAAQgNAAgMACQgKABgNAEIgZAEIgXgWIAGivIDiAAIAAAZIieAAIgFCHIARgBIARgBIARgBQATAAAcAGQAcAFAVANQAXANAPAVQAPAXAAAiQAAAmgQAXQgQAYgWAOQgVANgcAGQgaAFgSAAQgYAAgUgEg");
	this.shape_7.setTransform(-8.1,0.1,0.277,0.277);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("AmXLpQgSh+hNiEQgphGhRhoQhRhpgfgzQhzjAAcj4QAbjtCPi4QBniGCShRQCMhQChgUQCfgUCcApQCiArCFBnQDCCWBQDlQBPDggzDnQhWGCmQEuQlbEGmtBeQBDiCgViXg");
	this.shape_8.setTransform(0,5.5,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23,46.1,57.1);


(lib.tx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgLAqQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIACgDIACgCIAEgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAADIAAADIgDACIgEABQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAgHAVIAIhAIANAAIgOBAg");
	this.shape.setTransform(100.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AggAfIgDgBIAAgDQAFgBADgDIAHgGIAKgOQgFgBgEgCQgEgDAAgGQAAgGADgEQADgEAEgDQAEgCAFgBIAJgBIAfAAIAAACQgGAAgCAEQgDAEgBAGIgIAsIgMAAIAFgbIgJAAIgKAQQgEAGgEADQgFADgFAAgAAAgZQgDABgCACIgEAFIgBAIQAAAFADACQAEACAEAAIAFAAIAEgBIAEgXIgEgBIgEgBIgGABg");
	this.shape_1.setTransform(95.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AgYAeIADgUIACgMIACgJIABgFIABgCIAAgCQAAgDgDgCQgBgCgEAAIgCAAIABgDIALAAQAFAAACACQACACABAEIAAACIgBADIgBAFIgBAHIAIAAIAKABIAHACQADACACABQACADAAAEQAAAHgDAEQgCAFgFACQgEACgFABIgKABgAgDAAIgEAAIgFAZIAFABIAEAAIAFgBIAGgDQACgCACgDQACgEgBgEQAAgGgDgCQgEgBgGAAg");
	this.shape_2.setTransform(89.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgOAeIgMAAIAEgUIACgMIABgJIABgFIAAgCIAAgCQABgDgCgCQgCgCgEAAIgBAAIAAgDIAfAAIAIABIAIADQADABABACQACADAAAEQAAANgQADQAHAAADACQADAEAAAFQABAFgDAEQgDAEgEADIgKACIgJABgAgNAZIADABIAFAAIAFgBIAGgDQAGgDAAgIQAAgKgOAAIgHAAgAAAgYIgEAAIgEAVIAHAAQAFABAFgEQADgCABgCQABgCABgEQgBgFgDgCQgDgCgFAAg");
	this.shape_3.setTransform(82.7,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgPAeQgEgCgDgDQgDgDgCgFIgBgKQAAgHACgFQADgHAEgGQAEgEAHgFIAHgDIAGgBQAGAAAFACQAEACADADQADADABAFIACAKQAAAGgDAGQgCAIgFAFQgGAHgFACQgGAEgGAAQgGAAgFgCgAgDgWQgFAEgCAFIgFAMIgBAJIABAHIADAGQACAGAHAAIADgBIAFgDQAEgEACgGQADgFABgGIABgIQAAgJgCgFIgFgEQgCgCgDABQgEgBgDAEg");
	this.shape_4.setTransform(75.8,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgfAsIAGgfIADgTIADgOIABgHIAAgDIAAgBQAAgEgBgCQgCgCgEAAIgDAAIABgCIAMAAQAFAAACABQACACABADIAAAAIAFgFQAFgDAIAAQAEAAAEACQAEACACADQACADABAEQACAFAAAFQAAAGgCAHQgCAGgEAGQgEAGgGAEIgGADIgIABQgEAAgDgBIgHgDIgFAcgAAAgjQgDADgCADIgIAoIAGADIAGABQAEAAAEgEQAFgEACgGQADgDABgHIABgMQAAgHgDgFQgCgEgGAAQgGAAgCACg");
	this.shape_5.setTransform(68.6,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgOAeQgFgCgDgDQgDgDgCgFIgBgKQAAgHACgFQACgHAFgGQADgEAJgFIAGgDIAGgBQAGAAAEACQAFACADADQADADACAFIABAKQAAAGgCAGQgDAIgEAFQgHAHgEACQgHAEgGAAQgGAAgEgCgAgDgWQgFAEgDAFIgDAMIgCAJIABAHIACAGQAEAGAGAAIADgBIAEgDQAEgEADgGQADgFABgGIABgIQAAgJgDgFIgDgEQgDgCgDABQgEgBgDAEg");
	this.shape_6.setTransform(61.7,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AgPArQgFgCgDgEQgDgDgBgEQgCgFAAgFQAAgFADgKQACgFAEgGQAGgEAGgEQAHgDAFAAQAFAAAFADQAFADABAEIABgCIAAgDQAAgGgBgFQgCgEgDgEQgCgDgEgBQgDgCgFAAIgEAAIgFACIgEABIgDABIgBgEIAJgFQAFgBAFAAQAHgBAEADQAGADADAEQADAFACAHQACAGAAAJQAAAKgCAJQgDALgFAGQgFAIgGADQgIAFgGAAQgGAAgEgCgAgDgJQgEACgDAGQgDACgCAHQgCAFABAIQAAAIACAFQAEAFAGAAQAEAAADgDQAFgEACgFIAEgLIACgMQgBgGgDgFIgDgDIgGgCQgDAAgDADg");
	this.shape_7.setTransform(54.7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AgMAfIgGgCIgEgDIgDgFIADgCIACADIADACIAEACIAHABIAGgBIAFgDQAGgDAAgJQAAgEgEgDQgEgCgHAAIgGAAIACgEIAFAAIAGgBIAGgDQADgBABgDIABgGQAAgFgDgCQgEgDgEABIgFABIgFACIgFAFQgCACAAADIgDAAQABgFACgFQABgDADgCQACgCAFgBIAIgBIAIABIAHACIAFAEQACADAAAEIgBAGQgCADgCADQgFAEgGABQAGAAADADQAEADgBAFQAAAHgCADIgHAHQgFACgFABIgIABIgIgBg");
	this.shape_8.setTransform(47.9,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("AgOAeQgFgCgDgDQgDgDgCgFIgBgKQAAgHACgFQACgHAFgGQADgEAJgFIAGgDIAGgBQAGAAAEACQAFACADADQADADACAFIABAKQAAAGgCAGQgDAIgEAFQgHAHgEACQgHAEgGAAQgGAAgEgCgAgEgWQgEAEgDAFIgDAMIgCAJIABAHIACAGQAEAGAFAAIAEgBIAEgDQAEgEADgGQADgFABgGIABgIQAAgJgDgFIgDgEQgDgCgDABQgEgBgEAEg");
	this.shape_9.setTransform(38.3,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4281").s().p("AgTAcIgEgFQgCgDAAgDQAAgFACgCQACgEADgDIAGgDIAIgCIAGgDQAGgDAEgDQADgDAAgDQAAgEgDgDQgDgBgGAAIgFABIgGACQgFAEgCAGIgDAAIADgJQABgDADgCIAIgEIAKgBQAIAAAFAEQAGADAAAIIgCAHQgBACgCADQgGAEgIACIgHADQgHADgDADQgEADAAAFQAAADADADQADACAHAAIAGgBIAGgDQAFgEACgHIADAAIgDAJQgBAEgDADIgIADIgKABQgJAAgGgEg");
	this.shape_10.setTransform(31.8,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4281").s().p("AgOAeQgEgCgDgDQgDgDgBgFIgCgJQABgHACgGQACgGAEgGIAFgGIAGgEQAGgEAGAAQAMAAAFAFQAFAEABAGQAAAGgDAEQgCAEgEACQgEABgFABQgFACgFAAIgOAAIAAADIgBADIABAGIADAFQAEAGAGAAQAFgBAFgCIAJgIIACACQgGAIgGACIgGADIgGABQgFAAgFgCgAgGgSQgFAGgCAMIANAAQAGAAAFgEIADgFIABgGQAAgFgDgDQgDgDgFABQgEgBgGAIg");
	this.shape_11.setTransform(26.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4281").s().p("AgCAdQgEgCgCgFQgDAEgHADQgFACgGAAIgGgBQgCAAgCgCQgCgCgCgDQgBgDAAgFIAAgBIAAgDIABgEIACgHIACgMIADgSIAMAAIgEASIgBAMIgCAGIAAAFIgBADIAAABQAAAGACACQADACAEAAIADgBIAEgCIAFgCIACgDIABgDIABgHIACgMIAEgZIAKAAIgDASIgCAMIgBAGIgBAFIAAADIAAABQAAAGACACQACACAEAAQAEAAADgCIAHgFIAJgwIAMAAIgLA8IgHAAIgDgGIgBAAIgIAFQgEACgGAAQgFAAgCgCg");
	this.shape_12.setTransform(17.9,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4281").s().p("AgSAeQgEgCgCgDQgCgDgBgEIgBgJIABgMQACgHAEgGQAEgGAGgEQAGgEAGgBQAHAAAEACIAEAFIABAAIAGgGIAGAAIgIAxIgCALIgHAAIgEgFIAAAAIgHAEQgDADgHAAQgFAAgEgCgAgEgWQgEAFgDAFQgDAGgBAGIgBAKQAAAHADAFQACAEAGABQAFgBADgCIAGgFIAGgkIgBgEIgCgCIgDgCIgFAAQgEAAgEADg");
	this.shape_13.setTransform(9.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC4281").s().p("AgWArIgLAAIAMhFIAAgDIABgDQAAgEgCgBQgCgDgEAAIgDAAIABgCIAgAAIALAAQAFABAFACQAFACADAEQADAEAAAFQAAAFgBAEIgFAHQgDACgEACIgIAEQALAAAEAEIADAFIABAGIgBAGQgBAEgCADQgDAFgGADQgGAEgHACQgGABgHAAgAgVAkIAHACIAGAAIAIgBQAFgBAEgDQAEgDADgDQACgFAAgGQAAgHgFgEQgGgDgJgBIgMAAgAgCglIgFABIgGAiIAMAAIAHgBQAEgBAEgDQADgDACgEQADgEAAgFQAAgDgCgEIgFgEIgHgCIgHgBg");
	this.shape_14.setTransform(1.9,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC4281").s().p("AggAfIgDgBIAAgDQAFgBADgDIAHgGIAKgOQgFgBgEgCQgEgDAAgGQAAgGADgEQADgEAEgDQAEgCAFgBIAJgBIAfAAIAAACQgGAAgCAEQgDAEgBAGIgIAsIgMAAIAFgbIgJAAIgKAQQgEAGgEADQgFADgFAAgAAAgZQgDABgCACIgEAFIgBAIQAAAFADACQAEACAEAAIAFAAIAEgBIAEgXIgEgBIgEgBIgGABg");
	this.shape_15.setTransform(-9.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC4281").s().p("AggAfIgDgBIABgDQADAAAEgCQADgCADgEQADgFADgIQAEgHACgNIAAgDIAAgDQAAgEgBgCQgCgCgFAAIABgCIAzAAIgKA8IgMAAIAKg3IgXAAIAAALIgGAWQgDAJgEAFQgEAFgDACQgFACgDAAg");
	this.shape_16.setTransform(-16.5,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC4281").s().p("AgQArQgEgCgDgEQgDgDgCgEQgBgFAAgFQAAgFACgKQADgFAEgGQAFgEAHgEQAGgDAGAAQAGAAAEADQAFADACAEIAAgCIAAgDQAAgGgBgFQgCgEgDgEQgDgDgDgBQgEgCgEAAIgDAAIgGACIgEABIgDABIgCgEIAJgFQAGgBAGAAQAGgBAEADQAFADAEAEQAEAFABAHQACAGAAAJQAAAKgDAJQgCALgFAGQgFAIgHADQgGAFgHAAQgGAAgFgCgAgDgJQgEACgDAGQgDACgCAHQgCAFAAAIQAAAIAEAFQADAFAGAAQAEAAAEgDQADgEAEgFIADgLIABgMQAAgGgCgFIgFgDIgFgCQgDAAgDADg");
	this.shape_17.setTransform(-23.1,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC4281").s().p("AgdADIAAgGIA8AAIAAAGg");
	this.shape_18.setTransform(-34,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC4281").s().p("AgIAuIgJgDQgJgDgGgHQgHgGgDgJQgDgIAAgKQAAgJADgIQADgJAHgGQAGgHAJgDIAJgCIAIgBIAJABIAJACQAJADAGAHQAGAGAEAJIACAJIABAIIgBAJIgCAJQgEAJgGAGQgGAHgJADIgJADIgJAAIgIAAgAgHgoIgIADIgIADIgGAGIgEAFIgEAHIgCAJIgBAHIABAIIACAIQADAIAFAFQAGAGAIADIAIACIAHABIAIgBIAIgCIAHgDIAGgGIAFgFIAEgIIACgIIABgIQAAgHgDgJIgEgHIgFgFIgGgGIgHgDQgIgDgIAAIgHAAgAAQAbIgDgCIgEgEIgDgGIgHgOIgHAAIAAAaIgHAAIAAgsIgBgHQgBgCgEAAIgCAAIAAgCIAWAAIAFABIAHACIAFAEQADAEAAAEQAAAEgCADIgDAEIgEACIgFAAIAJAPIAGAHQADADADAAIAAACIgGABgAgFgZIgDABIAAAXIADAAIAEABIACgBIAEgDIAEgDQABgDAAgDQAAgDgBgCIgEgEIgEgCIgCgBg");
	this.shape_19.setTransform(-46.5,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC4281").s().p("AgWArIAAhFQAAgGgBgEIgDgDIgFgBIgDAAIAAgCIAMAAIAGAAQAAABABAAQABAAAAAAQABABAAAAQAAABABAAQABABABAEIAAAIIAAA/IAtAAIAAAGg");
	this.shape_20.setTransform(-55,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC4281").s().p("AAfArIgGgCIgGgGQgDgDgCgGIgDgIIgjAAIgLAZIgGAAIAlhVIAEAAIAbBEIADAHIADAEIAEACIAFABIAAADIgGAAgAAIAMIgOgkIgQAkIAeAAg");
	this.shape_21.setTransform(-62.6,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC4281").s().p("AAlAsQgEgCgDgDQgDgDgBgFIgBgOIAAgwIgfBHIgDAAIgihJIAABJIgFAAIAAhVIAMAAIAgBDIAdhDIAMAAIAAA+IAAALIADAIQABAEADACQACABADAAIAAADQgHAAgFgCg");
	this.shape_22.setTransform(-72.2,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC4281").s().p("AgJApQgGgCgEgFIgDgGIgDgGQgBgIAAgJIAAggQAAgGgCgEIgDgCIgEgBIgDAAIAAgDIAMAAIAGABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQACACAAADIABAIIAAAkIABAMQABAGADADQADAEAEACQACACAHAAQAIAAAFgCQAFgCADgEQADgEABgGQACgHAAgIIAAgwIAFAAIAAAwQAAAJgBAIIgCAGIgEAGQgDAFgHACQgGADgLAAQgHAAgHgDg");
	this.shape_23.setTransform(-83.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC4281").s().p("AAfArIgGgCIgGgGQgDgDgCgGIgDgIIgjAAIgLAZIgGAAIAlhVIAEAAIAbBEIADAHIADAEIAEACIAFABIAAADIgGAAgAAIAMIgOgkIgQAkIAeAAg");
	this.shape_24.setTransform(-90.9,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC4281").s().p("AgIAsIgJgDQgFgCgCgDQgDgDAAgEIAAgOIADAAQACAOAGAFQADADAFABQAEACAEAAIAGgBIAGgDIAEgDQABgDAAgDQAAgHgEgDQgDgFgHgDIgPgJQgIgFgEgEIgCgGIgBgHQAAgFACgEQACgFADgDIAIgEQAFgCAFABIAIABIAKACIAGAGQADADAAAEIAAANIgDAAQgCgNgGgGQgDgCgFgCIgIgBIgFABQgDABgCACIgEADIgBAGIABAFIADAFIAEADIAHAFIAOAIIAHAEIAFAFIADAGIABAGQAAAGgCAEQgBAEgEADQgEAEgFACQgFABgGABIgJgCg");
	this.shape_25.setTransform(-98.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-7.8,206.2,15.6);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhpCKIAAg7QARALARAAQAYAAASgnIhdjDIBJAAIAvByQADANACALIAAAAQADgMAEgLIAuhzIBDAAIhZDCQgZA3gUATQgWAVgjAAQgXAAgOgHg");
	this.shape.setTransform(53,0.1,0.47,0.47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AA7COIAAh0Ih0AAIAAB0IhAAAIAAkbIBAAAIAAByIB0AAIAAhyIBAAAIAAEbg");
	this.shape_1.setTransform(40.2,0,0.47,0.47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("ABGCOIgUhAIhjAAIgVBAIhFAAIBokbIBKAAIBlEbgAgFhBIgfBfIBHAAIgehfQgEgJgBgQIAAAAQAAAKgFAPg");
	this.shape_2.setTransform(26.7,0,0.47,0.47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AgfCOIAAjmIhQAAIAAg1IDgAAIAAA1IhRAAIAADmg");
	this.shape_3.setTransform(16.1,0,0.47,0.47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AhIBsQgmgmAAhAQAAhDArgqQAqgrBBAAQAqAAAcALIAAA9QgdgRgjAAQgpAAgWAaQgZAZAAApQAAApAXAZQAWAYAnAAQAmAAAegSIAAA7QgeAPgyAAQhAAAgmgng");
	this.shape_4.setTransform(5,0,0.47,0.47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AA3COIgwhdQgEgEgCgPIgBAAIgFAUIgxBcIhNAAIBbiOIhTiNIBPAAIAoBVQAEAJACAQIABAAIAJgZIAthVIBIAAIhVCNIBYCOg");
	this.shape_5.setTransform(-6.3,0,0.47,0.47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("ABGCOIgUhAIhkAAIgUBAIhFAAIBokbIBKAAIBlEbgAgFhBIgeBfIBGAAIgehfQgEgKgBgPIAAAAQgBAOgEALg");
	this.shape_6.setTransform(-18.8,0,0.47,0.47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("AhhCDIAAg4QAiAXArAAQAzAAABgnQAAgng6AAIgkAAIAAguIAjAAQAzAAgBglQAAgigqAAQggAAglAUIAAg0QAlgRAsAAQAtAAAaAUQAZATAAAhQAAAagOASQgPATgbAGIAAABQAfAEARAQQARASAAAaQAAAqgeAWQgdAXg3AAQg1AAgcgQg");
	this.shape_7.setTransform(-30.3,0,0.47,0.47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("ABHCOIgVhAIhjAAIgUBAIhGAAIBokbIBKAAIBlEbgAgFhBIgeBfIBHAAIgfhfQgDgJgCgQIAAAAQAAAKgFAPg");
	this.shape_8.setTransform(-41.8,0,0.47,0.47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AAlCOIhRh7IgIgRIgBAAIAACMIhAAAIAAkbIBAAAIAACHIABAAIAIgQIBNh3IBMAAIhjCIIBsCTg");
	this.shape_9.setTransform(-53.2,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.7,-6.9,117.6,13.9);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhpCKIAAg7QARALARAAQAYAAASgnIhdjCIBJAAIAvByQADALACAMIAAAAQADgMAEgLIAuhyIBDAAIhZDBQgZA2gUAUQgWAUgjAAQgXAAgOgGg");
	this.shape.setTransform(93,-1.6,0.47,0.47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("ABiCOIAAipQAAgXADgmIgCAAQgFAcgEAKIhCDAIgzAAIhEi+QgDgHgGghIgCAAQADAkAAAmIAACcIg6AAIAAkbIBeAAIA6CnQAIAWABATIABAAIALgqIA6imIBcAAIAAEbg");
	this.shape_1.setTransform(78.4,-1.7,0.47,0.47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AhUCOIAAkbICjAAIAAA0IhiAAIAABAIBbAAIAAAyIhbAAIAABBIBoAAIAAA0g");
	this.shape_2.setTransform(65.2,-1.7,0.47,0.47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AhIBsQgmgmABhAQAAhDAqgqQAqgrBBAAQAqAAAcALIAAA+QgcgSgkAAQgpAAgWAaQgZAaAAAoQAAAqAYAYQAUAYAoAAQAmAAAegSIAAA7QgeAPgzAAQg/AAgmgng");
	this.shape_3.setTransform(54.2,-1.7,0.47,0.47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AhpCOIAAkbIBnAAQAuAAAZASQAaARAAAgQAAAXgQARQgPARgZAHIAAABQAfADASARQASATAAAbQAAAngcAXQgcAXgwAAgAgpBfIAiAAQAVAAAMgLQANgKAAgSQAAgRgNgKQgNgKgUAAIgiAAgAgpgaIAcAAQASAAALgKQALgKAAgQQAAgggtAAIgXAAg");
	this.shape_4.setTransform(43.2,-1.7,0.47,0.47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AhjBrQgngnAAhBQAAhBAngqQAngqA+AAQA+AAAlAoQAmAoAABBQAABCgnApQgmApg+AAQg9AAgmgogAgzhBQgUAZABAoQgBAqAUAZQAUAYAfAAQAhAAATgYQAUgXgBgrQAAgqgSgZQgUgZggAAQggAAgUAag");
	this.shape_5.setTransform(25.2,-1.7,0.47,0.47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AA6COIAAjjIh0AAIAADjIhAAAIAAkbID1AAIAAEbg");
	this.shape_6.setTransform(11.2,-1.7,0.47,0.47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("ABHCOIgVhAIhkAAIgUBAIhFAAIBokbIBKAAIBlEbgAgFhBIgeBeIBHAAIggheQgCgKgCgPIAAAAQgBANgEAMg");
	this.shape_7.setTransform(-7,-1.7,0.47,0.47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("AAlCOIhRh8IgIgQIgBAAIAACMIhAAAIAAkbIBAAAIAACHIABAAIAIgQIBNh3IBMAAIhjCIIBsCTg");
	this.shape_8.setTransform(-18.4,-1.7,0.47,0.47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AhqCOIAAkbIBoAAQAvAAAZASQAZARAAAgQAAAXgPARQgQARgZAHIAAABQAfADASARQATAUAAAaQAAAngcAXQgdAXgwAAgAgqBfIAjAAQAVAAAMgLQANgKAAgSQAAgRgNgKQgMgKgVAAIgjAAgAgqgaIAcAAQATAAALgKQALgKAAgQQAAgggsAAIgZAAg");
	this.shape_9.setTransform(-30.6,-1.7,0.47,0.47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4280").s().p("ABGCOIgUhAIhkAAIgUBAIhFAAIBokbIBJAAIBmEbgAgFhBIgeBeIBGAAIgfheQgEgNAAgMIAAAAQgBANgEAMg");
	this.shape_10.setTransform(-43.4,-1.7,0.47,0.47);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4280").s().p("AgfCOIAAjnIhRAAIAAg0IDhAAIAAA0IhSAAIAADng");
	this.shape_11.setTransform(-54,-1.7,0.47,0.47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4280").s().p("AhIBsQglgmAAhAQgBhCArgrQAqgrBBAAQAqAAAdALIAAA+QgegSgkAAQgoAAgXAaQgYAZAAApQAAAqAXAYQAVAYAoAAQAlAAAggSIAAA7QggAPgyAAQg/AAgmgng");
	this.shape_12.setTransform(-65,-1.7,0.47,0.47);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4280").s().p("AhkBrQgmgoAAhAQAAhBAngqQAogqA+AAQA9AAAmAoQAlAoAABBQAABCgnApQgnApg9AAQg9AAgngogAgyhBQgVAaAAAnQAAApAVAaQATAYAfAAQAhAAATgYQATgXAAgrQAAgqgSgZQgTgZghAAQgfAAgUAag");
	this.shape_13.setTransform(-77.7,-1.7,0.47,0.47);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC4280").s().p("ABaC1IAAhOIizAAIAABOIg4AAIAAiDIAaAAQA4hgAFiGICkAAIAADmIAoAAIAACDgAgVgmQgNAxgSAnIBdAAIAAixIgvAAQgCAogNAxg");
	this.shape_14.setTransform(-91.9,0.1,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.8,-8.6,197.6,17.3);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhaADQAAg/AYgiQAZgiAsAAQBYAAAACAQAAA+gYAhQgZAigqAAQhaAAAAh+gAghACQAABVAhAAQAiAAAAhXQAAhWghAAQgiAAAABYg");
	this.shape.setTransform(88.2,-1.7,0.638,0.638);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AAOB9IAAg1IhsAAIAAgkIBoigIA3AAIAACcIAdAAIAAAoIgdAAIAAA1gAAEgxIg0BRIA+AAIAAhlIgBAAIgJAUg");
	this.shape_1.setTransform(75.6,-1.7,0.638,0.638);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AhaADQABg/AYgiQAYgiAsAAQBYAAgBCAQABA+gYAhQgYAigrAAQhaAAAAh+gAghACQAABVAhAAQAiAAAAhXQAAhWgiAAQghAAAABYg");
	this.shape_2.setTransform(57.6,-1.7,0.638,0.638);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AhABuQgYgSABgfQgBguAzgTIAAAAQgrgSAAgoQAAgcAXgUQAXgSAjAAQAlAAAWARQAXASAAAcQAAApgwATIAAABQAZAFAPASQAOARAAAVQAAAigZATQgYATgrAAQglAAgYgTgAgjA6QAAANALAJQAKAJAOAAQAQAAALgJQAJgIABgPQAAgcglgOQgkAPABAcgAgThRQgJAJAAAMQAAAXAdAMQAdgMAAgYQABgLgJgJQgHgIgOAAQgLAAgJAIg");
	this.shape_3.setTransform(45.1,-1.7,0.638,0.638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AhSB/IAAgrIBIhFQARgQALgQQAJgPAAgQQAAgigkAAQgfAAgeAZIAAgwQAggVAnAAQAnAAAWATQAWAUgBAgQAAAsg0AtIgyAuIAAABIBkAAIAAAug");
	this.shape_4.setTransform(27,-1.8,0.638,0.638);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AhNB0IAAgvQAZAQAeAAQAVAAALgLQAMgLAAgRQAAglgzAAQgQAAgZADIAAiKICJAAIAAAtIhaAAIAAAyIAVgBQAlAAAWAUQAVASAAAjQAAAmgaAYQgaAYgqAAQgjAAgagLg");
	this.shape_5.setTransform(14.8,-1.5,0.638,0.638);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AhPB0IAAgwQAZATAjAAQATAAALgJQANgJAAgRQAAgRgQgJQgMgJgZAAIgXAAIAAgoIAVAAQAvAAAAghQAAgegkAAQgZAAgYAQIAAgtQAbgNAiAAQAmAAAVARQAVASAAAbQAAAxgyANIAAAAQAbAEAPAOQAQAPAAAYQgBAjgZAVQgaAUgrAAQgmAAgagNg");
	this.shape_6.setTransform(2.2,-1.7,0.638,0.638);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("AgyCaQA0hEAAhVQAAhTg0hHIAtAAQA4BEAABWQAABZg4BAg");
	this.shape_7.setTransform(-14.4,0.1,0.638,0.638);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("Ag6B9IBXjMIhzAAIAAgtICtAAIAAAaIhXDfg");
	this.shape_8.setTransform(-23.7,-1.7,0.638,0.638);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AhSB/IAAgrIBIhFQATgSAJgOQAJgPAAgQQAAgigjAAQghAAgdAZIAAgwQAggVAnAAQAnAAAWATQAVAUAAAgQAAAtg0AsIgyAuIAAABIBkAAIAAAug");
	this.shape_9.setTransform(-36.2,-1.8,0.638,0.638);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4280").s().p("Ag6B9IBXjMIhzAAIAAgtICtAAIAAAaIhXDfg");
	this.shape_10.setTransform(-48.6,-1.7,0.638,0.638);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4280").s().p("AAFCaQg2g/AAhaQAAhWA2hEIAtAAQgzBHAABTQAABVAzBEg");
	this.shape_11.setTransform(-58,0.1,0.638,0.638);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4280").s().p("Ag6B9IBXjMIhzAAIAAgtICtAAIAAAaIhXDfg");
	this.shape_12.setTransform(-74.5,-1.7,0.638,0.638);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4280").s().p("AgQBVIAAhEIhEAAIAAghIBEAAIAAhEIAhAAIAABEIBEAAIAAAhIhEAAIAABEg");
	this.shape_13.setTransform(-88.5,-0.2,0.638,0.638);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-9.9,187.9,19.9);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AAvA1QgJAAgEgEQgEgEAAgIIAAgCIAPhXIAdAAIgOBTIAAACQAAAGACADQADAEAIAAIACAAIgBAHgAhKA1IAPhUIAAgCQAAgFgDgEQgDgDgHAAIgCAAIABgHIAbAAQAJAAAEADQAEAEAAAIIgBAJIgDATIAPAAQASAAAKAHQALAEAAANQAAAKgEAGQgEAHgHAFQgGAEgIADQgLADgKAAgAgjAAIgHAqIAFABIAFAAIAIgBQAEgBAEgEQAEgDACgGQACgEAAgKQAAgJgFgDQgFgCgHAAg");
	this.shape.setTransform(24,1.2,0.638,0.638);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AAqA2IANhLIAAgCQAAgKgEgFQgEgEgGAAQgGAAgGACIgJAHIABAEIAAAHIgNBMIgcAAIANhLIAAgCQAAgKgEgFQgEgEgFAAQgFAAgGADQgHAEgBACIAAAFIgPBSIgdAAIAPhUIAAgBQAAgGgDgDQgDgEgHAAIgCAAIABgGIAXAAQAGAAAFABQAFACABAFIABAAQAFgEAHgDQAJgEAJAAQAHAAAEACIAHADIAGAFIADADQAGgFAIgEQAIgEANAAQAQAAAJAHQAIAHABAQIgOBNg");
	this.shape_1.setTransform(12.7,1.1,0.638,0.638);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AghA0QgHgDgFgFQgGgGgCgIQgCgGAAgKQAAgMAEgKQAFgOAGgJQAHgJAMgIQAMgGALAAQAHAAAEACIAHAEQACACAEAFIABAAIAKgKIATAAIgTBoIgTAAIgGgLIgBAAIgIAHIgHAEQgEACgIAAQgKAAgHgDgAgEgoIgIAJIgGANIgEAOIgDAYQAAALAEAHQADAHAJAAQAEAAAFgDIAFgEIAHgIIALg7IgEgIIgGgEQgDgCgFAAQgFgBgEAEg");
	this.shape_2.setTransform(2.8,1.2,0.638,0.638);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AAkAxQgKgIAAgQIAAgDIAIgvIgsBMIgIAAIgZhOIgOBOIgLAAIAThoIAbAAIAVBCIAohFIAeAAIgOBTIAAAFQAAARAMACIgBAGQgWAAgIgIg");
	this.shape_3.setTransform(-6.2,1.3,0.638,0.638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("Ag7A2IgGgCIABgGQAHgBAGgEQAFgDAGgIQAFgJAEgNQAFgMAEgWIABgIQAAgFgDgEQgEgEgIAAIABgGIBlAAIgTBoIgeAAIARheIgfAAIgDARQgDAYgFAMQgGARgGAJQgHAKgJAEQgHAEgIAAg");
	this.shape_4.setTransform(-15.4,1.3,0.638,0.638);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("ABABLIgMgBQgFgBgGgEQgGgDgEgFQgEgGgDgKIgDgNIg6AAIgaAqIgMAAIBbiUIALAAIAdB3QACAKAFAGQAFAGAIABIgBAGIgGABgAgfAXIAyAAIgPg6g");
	this.shape_5.setTransform(-24.1,-0.1,0.638,0.638);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-4.9,57.8,9.9);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AAOB9IAAg1IhrAAIAAgkIBnigIA2AAIAACcIAeAAIAAAoIgeAAIAAA1gAAEgxIgzBRIA9AAIABhlIgBAAg");
	this.shape.setTransform(88,-1.7,0.638,0.638);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AhNB0IAAgvQAaAQAcAAQAWAAALgLQAMgLAAgRQAAglgzAAQgQAAgZADIAAiKICJAAIAAAtIhaAAIAAAyIAVgBQAlAAAVAUQAWASAAAjQAAAmgaAYQgaAYgqAAQgjAAgagLg");
	this.shape_1.setTransform(75.9,-1.6,0.638,0.638);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AhNB0IAAgvQAaAQAdAAQAWAAAKgLQAMgLAAgRQAAglgzAAQgQAAgZADIAAiKICJAAIAAAtIhaAAIAAAyIAVgBQAlAAAWAUQAVASAAAjQAAAmgaAYQgaAYgqAAQgjAAgagLg");
	this.shape_2.setTransform(57.8,-1.6,0.638,0.638);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AhOB0IAAgvQAbAQAcAAQAWAAAKgLQANgKAAgSQAAglgyAAQgSAAgYADIAAiKICJAAIAAAtIhaAAIAAAyIAVgBQAlAAAVAUQAXATAAAiQAAAlgbAZQgaAYgrAAQgiAAgbgLg");
	this.shape_3.setTransform(45.3,-1.6,0.638,0.638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AhSB/IAAgrIBIhFQARgQALgQQAJgPAAgQQAAgigkAAQgfAAgeAZIAAgwQAggVAnAAQAnAAAWATQAWAUgBAgQAAAsg0AtIgyAuIAAABIBkAAIAAAug");
	this.shape_4.setTransform(27,-1.8,0.638,0.638);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AhIB3IAAgtQAUANAbAAQAbAAAQgUQAQgTAAglIgBAAQgRAYggAAQgfAAgUgVQgUgTAAgjQAAgoAZgYQAZgYAlAAQAoAAAYAeQAYAeAAA5QAABCgdAlQgdAlgxAAQgfAAgWgKgAgXhLQgKAMAAASQAAAUAJAKQAKALAOAAQAOAAAJgKQAJgKAAgQQAAgUgKgNQgJgNgNAAQgOAAgJALg");
	this.shape_5.setTransform(14.4,-1.7,0.638,0.638);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AgxCaQAzhFAAhUQAAhTgzhHIAtAAQA2BDAABXQAABZg3BAg");
	this.shape_6.setTransform(-2,0.1,0.638,0.638);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("AhSB/IAAgrIBIhFQASgQAKgQQAJgOAAgRQAAgigjAAQggAAgeAZIAAgwQAhgVAnAAQAmAAAWATQAVAUAAAgQAAAtg0AsIgyAuIAAABIBkAAIAAAug");
	this.shape_7.setTransform(-11.4,-1.8,0.638,0.638);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("Ag6B9IBXjMIhzAAIAAgtICtAAIAAAaIhXDfg");
	this.shape_8.setTransform(-23.7,-1.7,0.638,0.638);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AhNB/IAAgsIA0AAIAAiaIg2AMIAAgtIBrgWIAADRIAzAAIAAAsg");
	this.shape_9.setTransform(-35.9,-1.8,0.638,0.638);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4280").s().p("Ag6B9IBXjMIhzAAIAAgtICtAAIAAAaIhXDfg");
	this.shape_10.setTransform(-48.7,-1.7,0.638,0.638);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4280").s().p("AAFCaQg2g/AAhaQAAhWA2hEIAtAAQgzBHAABTQAABVAzBEg");
	this.shape_11.setTransform(-58.1,0.1,0.638,0.638);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4280").s().p("Ag6B9IBXjMIhzAAIAAgtICtAAIAAAaIhXDfg");
	this.shape_12.setTransform(-74.5,-1.7,0.638,0.638);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4280").s().p("AgQBVIAAhEIhEAAIAAghIBEAAIAAhEIAhAAIAABEIBEAAIAAAhIhEAAIAABEg");
	this.shape_13.setTransform(-88.6,-0.2,0.638,0.638);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-9.9,188.1,19.9);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AghA0QgIgEgEgEQgGgGgCgIQgCgIAAgIQAAgKAEgMQAFgOAHgJQAHgKALgHQAMgGALAAQAHAAAFACIAHAEQABACAEAFIABAAIAJgKIAUAAIgTBoIgTAAIgGgLIgCAAIgGAHIgHAEQgFACgIAAQgJAAgIgDgAgDgoQgEADgFAGIgGANIgEAOIgCANIgBALQAAAKAEAIQADAHAJAAQAFAAAEgDIAGgEIAGgIIALg7IgEgIIgFgEQgEgCgFAAQgFgBgDAEg");
	this.shape.setTransform(22.8,1.3,0.638,0.638);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AAdA1QgJAAgEgEQgEgDAAgJIABgJIAEgYIgjAAIgIAxIgdAAIAOhUIAAgCQAAgGgDgDQgCgDgIAAIgCAAIABgHIAbAAQAKAAADADQAEAEAAAIIAAAEIgFAdIAiAAIAJgwIAeAAIgPBTIgBACQAAAGADADQAEAEAHAAIACAAIgBAHg");
	this.shape_1.setTransform(14.5,1.3,0.638,0.638);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AghA0QgIgEgEgEQgGgGgCgIQgCgIAAgIQAAgKAEgMQADgMAJgLQAHgKALgHQAMgGALAAQAHAAAFACIAHAEIAFAHIABAAIAJgKIAUAAIgTBoIgTAAIgGgLIgCAAIgGAHIgHAEQgFACgIAAQgJAAgIgDgAgEgoIgIAJQgEAHgCAGIgHAbIAAALQAAAMAEAGQADAHAJAAQAFAAAEgDIAGgEIAGgIIALg7IgEgIIgFgEQgEgCgFAAQgFgBgEAEg");
	this.shape_2.setTransform(6.4,1.3,0.638,0.638);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AAqA2IANhMIAAgBQAAgKgEgFQgEgEgGAAQgGAAgGADIgJAGIABAEIAAAHIgNBMIgbAAIAMhMIAAgBQAAgKgDgFQgEgEgGAAQgGAAgFADQgHAEgBACIAAAFIgPBSIgdAAIAOhUIAAgBQAAgGgCgDQgDgEgHAAIgCAAIABgGIAWAAQAIAAAEABQAFACABAFIABAAQAFgEAIgDQAJgEAJAAIAKACIAHADIAGAEIADAEQAFgFAJgEQAJgEAMAAQAQAAAJAHQAIAHABAQIgOBNg");
	this.shape_3.setTransform(-3.6,1.2,0.638,0.638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AgYAzQgJgDgFgGQgGgEgDgJQgCgGAAgLQAAgMAEgMQAEgLAJgLQAJgJAMgGQALgFAOAAIALABQAFAAAHACQAFABAEAEQAEACAAAIIAAAKIgCAMIgHAAIAAgGQAAgMgHgGQgGgFgNAAQgKgBgFAHQgGAGgFAKQgEAKgDALIgCARQAAAcAVAAQALAAAJgGQAHgEAIgJIAGAFIgHAIIgKAIQgFAEgIACQgHACgJAAQgMAAgIgEg");
	this.shape_4.setTransform(-13.1,1.3,0.638,0.638);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("ABABLIgMgBQgFgBgGgEQgGgCgEgHQgEgEgDgLIgDgMIg6AAIgaApIgMAAIBbiUIALAAIAdB3QACAKAFAGQAFAGAIABIgBAGIgGABgAgfAXIAyAAIgPg6g");
	this.shape_5.setTransform(-21.6,-0.1,0.638,0.638);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-4.8,52.9,9.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("Ag3CYQgYgMgOgWQgKgOgLgmQgHgeAAgkQAAgkAHgdQAHgfAOgVQAHgLAKgJQAJgIAMgGQAXgMAgAAQAiAAAXAMQALAGAKAIQAJAJAHALQAPAVAGAfQAHAdAAAkQAAAkgHAeQgLAmgKAOQgHALgJAIQgKAJgLAGQgXAMgiAAQggAAgXgMgAgphrQgOAiAABJQAAAlAEAaQADAcAHARQANAjAcAAQAdAAAOgjQAGgRAEgcQADgaAAglQAAhJgNgiQgOgjgdAAQgcAAgNAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-16.4,24.5,32.9);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AguChIgYgFIgVgIIACgNIA/AIQAiAAAVgdQAVgdAAg7IgSAKIgVAJQgLADgOAAQgcAAgSgIQgTgIgLgOQgMgOgFgSQgFgTgBgZQABgUAGgTQAIgTANgPQAOgPAVgIQAVgJAbAAQAcAAAVAKQAXALAOAUQAPAVAHAfQAIAfAAAnQgBAqgHAfQgJAggRAUQgQATgZAKQgZAKgeAAgAgWiHQgJAGgGAMQgGALgDAQQgDAPAAARQAAArAMAUQAFAKAJAGQAKAFANABQAJgBAJgDIARgIIALgIIAEgFQAAgkgEgcQgDgcgIgSQgHgRgKgJQgKgIgKAAQgLAAgJAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-16.4,22.8,32.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AgsCgQgVgFgQgKQgQgKgKgPQgJgQAAgVQAAgRAHgMQAGgOALgKQAKgKAOgJIAfgMIgagQQgMgIgKgJQgJgJgFgMQgFgNgBgOQAAgYAJgPQAIgQAPgJQAOgJATgEQAUgEAUAAQAVAAATADQATAEAPAKQAPAIAIAOQAIAPAAAWQAAAOgFALQgFAMgIAIQgJAKgMAHIgYAOIAcAOQANAJALALQAKALAGANQAHAOAAASQAAAXgJAQQgKAQgQAKQgPALgWAEQgWAFgXAAQgXAAgVgEgAgqAjQgLAQAAAgQAAAPAEAMQAEALAIAHQAHAIAKADQAJAEALAAQALAAAKgDQAKgEAHgHQAPgOABgbQgBgOgFgMQgGgMgJgJQgJgKgNgHIgYgQQgRAKgMARgAgNiMQgHADgGAFQgHAHgEAJQgEAKAAAPQAAAKAFAKQAFAKAIAIIATAQIAVANQANgJAFgOQAGgOABgaQAAgQgFgLQgDgKgHgHQgGgGgHgDIgOgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-16.4,23.5,32.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhECbIBzkfIhOAAQgOAAgKADQgLADgIAHQgPANAAAZIgOAAIAAgjIABgOQACgHAEgFQAFgFAIgDQAHgEANAAICnAAIAAAWIhzEfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-15.5,21,31.1);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhTB7QgPgVgHgfQgIgfAAgoQABhTAggpQAignA/AAQAQAAAOACIAYAGIAVAIIgCANIg/gIQgSAAgMAIQgOAGgKAOQgWAeAAA7IASgLIAVgIQAKgDAPAAQAbAAATAHQAUAJAKAOQAMAOAFASQAFATABAYQgBAVgGATQgIATgNAPQgOAOgVAJQgUAJgcAAQg4AAgegpgAgRgXIgRAJIgLAIIgEAEQAAAlAEAcQAEAcAGARQAIASAKAJQAKAIAKAAQAMAAAJgHQAIgHAGgMQAGgLADgQQADgPAAgRQAAgpgLgVQgLgWgbAAQgJAAgJADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-16.4,22.8,32.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AgoCcQgPgDgNgHQgNgHgKgJIgVgWIAOgLQAJAKAJAJQALAHAKAFQAXAKAUAAQAOABAKgFQAMgEAIgKQAJgJAFgOQAFgPAAgVQAAgSgFgOQgEgNgLgJQgTgPghAAIgUABIgnAHIgTgRIAFiOIC1AAIAAAWIh+AAIgEBsIAogDQARAAAWAFQAVAEASAKQASALAMARQAMASAAAcQAAAPgEAMQgCALgHAKQgMAUgSALQgSALgVAEQgVAFgPAAQgTgBgQgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-16,22.7,32);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AAXCbIAAhQIiUAAIAAgTICgjSIAxAAIAADQIAqAAIAAAVIgqAAIAABQgAhdA2IB0AAIAAiYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-15.5,25.4,31.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AgjCcQgSgDgOgIQgNgGgLgKIgWgVIAOgNIAUATIAVANQAXALATAAQAOABAKgFQAMgEAJgKQAIgIAGgPQAFgOAAgUQAAgTgFgOQgEgNgJgJQgIgIgLgEQgLgEgKAAIgUABIgeAHIgLgRIB+h4IhSAAQgOAAgLADQgLAEgHAGQgQANAAAZIgNAAIAAgjIABgNQACgIAEgEQAEgGAIgDQAIgDAMgBICdAAIAAAWIhzBuIAcgCQARAAARAFQATAFAPALQAPAJALASQAJATABAZQAAAPgEAMQgCAMgHAJQgMATgSALQgRALgTADQgTAFgNAAQgUgBgSgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-16,22.8,32);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhoCfIAAgeIBXhYQAQgSALgSQANgRAIgTQAIgTAAgSQAAgSgEgNQgFgNgHgJQgHgIgJgEQgIgEgJAAQgPAAgNAFQgMAFgLAKQgKAKgHAPQgGAQgEAVIgQAAIABgkQABgTAJgLQANgPAZgLQAMgGAOgDQANgCAPAAQANAAAUADQATADAQAKQAQAKALASQALASAAAcQAAAWgLAWQgLAWgPATQgRAUgUATIheBSIBfAAQAcAAAPgNQAIgHAEgJQADgKAAgMIAPAAIAAAjIgCAOQgBAGgFAGQgEAFgJADQgHADgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-16,21.1,32);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AgDCfIAAkFIgpAaIgLgPIBGhDIApAAIAAE9g");
	this.shape.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-15.5,11.4,32);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AARAyIAAgnIgHAAQgIAAgDANIgLAaIgbAAIAOgeQAGgNAKgDIAAAAQgWgEAAgUQAAgOAKgIQAKgHAQAAIAjAAIAABjgAgHgSQAAAGAEAEQADAEAHAAIAKAAIAAgcIgKAAQgOAAAAAOg");
	this.shape.setTransform(82.3,-2.2,1.675,1.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AgjAyIAAhjIAjAAQAlAAAAAgQgBAQgKAHQgMAJgQAAIgLAAIAAAjgAgNAAIAJAAQAQAAAAgQQAAgQgQAAIgJAAg");
	this.shape_1.setTransform(69.4,-2.2,1.675,1.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AglAyIAAhjIBAAAIAAATIgpAAIAAAWIASAAQARAAAIAHQAJAGAAANQAAAQgKAIQgIAIgSAAgAgOAiIAOAAQAOAAAAgOQAAgOgOAAIgOAAg");
	this.shape_2.setTransform(54.7,-2.2,1.675,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AAZAyIgHgWIgiAAIgIAWIgZAAIAlhjIAZAAIAkBjgAgBgWIgLAgIAYAAIgKggIgCgJIAAAAIgBAJg");
	this.shape_3.setTransform(38.5,-2.2,1.675,1.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AANAyIgcgsIgCgFIgBAAIAAAxIgXAAIAAhjIAXAAIAAAwIABAAIACgGIAagqIAcAAIgkAwIAnAzg");
	this.shape_4.setTransform(24,-2.2,1.675,1.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AgdAyIAAhjIA5AAIAAASIgiAAIAAAXIAfAAIAAARIgfAAIAAAXIAkAAIAAASg");
	this.shape_5.setTransform(9.8,-2.2,1.675,1.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AAgBAIAAgcIg/AAIAAAcIgUAAIAAguIAKAAQATghADgwIA4AAIAABRIAPAAIAAAugAgGgMQgFAPgHAPIAhAAIAAg+IgQAAQAAAMgFAUg");
	this.shape_6.setTransform(-6.2,0.1,1.675,1.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("AgfAzIAAgSIAWAAIAAg9IgWAFIAAgTIAqgIIAABTIAVAAIAAASg");
	this.shape_7.setTransform(-27.2,-2.3,1.675,1.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("AgfAvIAAgUQAKAIAOgBQAHABAEgEQAFgDAAgHQAAgGgGgEQgFgFgJAAIgKAAIAAgPIAJAAQASABAAgNQAAgNgNAAQgLAAgJAGIAAgSQAKgFAPAAQAOAAAIAHQAJAGAAAMQgBAUgTAFIAAAAQAJABAIAFQAGAIAAAIQAAAPgLAHQgLAJgPAAQgPAAgLgFg");
	this.shape_8.setTransform(-40.6,-2.2,1.675,1.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AgjAmQgNgOAAgYQAAgVAOgQQAOgOAVAAQAWAAANAOQANAPAAAWQAAAXgOAOQgNAPgWAAQgUAAgPgOgAgRgWQgHAJAAANQAAAOAHAJQAHAJAKAAQAMAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgMAAQgKAAgHAJg");
	this.shape_9.setTransform(-62.3,-2.2,1.675,1.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4280").s().p("AAfBAIAAgcIg+AAIAAAcIgUAAIAAguIAKAAQATgiACgvIA5AAIAABRIAPAAIAAAugAgGgMQgHATgFALIAgAAIAAg+IgPAAQgBAPgEARg");
	this.shape_10.setTransform(-80.3,0.1,1.675,1.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-10.9,178.2,21.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("Ak1ANQAAjcBTh1QBTh1CaAAQErAAAAG0QAADYhSBzQhRB0iWAAQkyAAAAmtgAh1AIQAAEiB2AAQB1AAAAkqQAAkphzAAQh4AAAAExg");
	this.shape.setTransform(0,0,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-19.5,27.4,39.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AkcGzIAAiUID1jqQBHhDAfgyQAegwAAg1QAAh2h9AAQhvAAhkBXIAAilQBvhJCKAAQCEAABJBCQBKBDAABvQAACWi0CeIitCdIAAADIFZAAIAACdg");
	this.shape.setTransform(0,0,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-19.2,25.3,38.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ACOGlIAAlIIgyAAQhGAAgrBrIhcDdIjbAAIB2j8QAzhqBQgaIAAgCQi6gqAAisQAAhyBSg/QBShACUAAIEiAAIAANJgAhEikQAAA1AkAgQAjAhA8AAIBPAAIAAjlIhPAAQiDAAAABvg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-15.2,24.1,30.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ADHGlIAAnNQAAhQAGg5IgDAAQgPAcgcArIlZIPIi/AAIAAtJICzAAIAAHQQAABWgFAeIACAAQADgHApg+IFMn/IDLAAIAANJg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-15.2,27.5,30.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AEBH4IAAinIqoAAIAAtIIC+AAIAAKmIFaAAIAAqmIC/AAIAAKmIB4AAIAAFJg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-18.2,30.8,36.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ABuGlIjzluQgIgMgPgiIgDAAIAAGcIi9AAIAAtJIC9AAIAAGOIADAAQAGgNASgiIDnlfIDiAAIkmGSIE/G3g");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-15.2,25.4,30.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ADRGlIg9i8IkpAAIg8C8IjNAAIEytJIDfAAIEsNJgAgRjEIhcEcIDWAAIhbkaQgKghgDgqIgDAAQgDAlgMAkg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15.2,30.1,30.5);


(lib.snow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snow();
	this.instance.setTransform(-127,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-21.5,254,43);


(lib.shad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0.608)","rgba(0,0,0,0)"],[0,0,1],-13.4,0.4,0,-0.3,0.4,13.1).s().p("AiCAqQg2gRAAgZQAAgYA2gRQA2gSBMAAQBNAAA2ASQA2ARAAAYQAAAZg2ARQg2AShNAAQhMAAg2gSg");
	this.shape.setTransform(14.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-6,37.1,12);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AqVSMQjQAAiSiTQiTiTAAjSIAA0pQAAjQCTiTQCSiTDQAAIUsAAQDRAACSCTQCSCTgCDQIAAUsQAADQiSCSQiTCTjQAAgAo2rPIh+B9Qg6A7gHBPQgFA6ANBDQALA0AYBHQAtB5BIByQA/BoBaBuQDnEVFCCdQBUAmBBAVQBRAZBKAFQB0AIBMhTQAUgXAkgkIA6g5QApgrAAgxQAAgwgpgoIjIjJQgogpgxAAQgwAAgqApIh9B+QgOARgUgKQgNgIgcgNQgbgOgOgIQishyiJipQhQhmgfhPQgDgJABgGQABgHAJgJQAzgwBKhLQArgrAAgwQAAgxgrgrIiViWQgfgfgUgTQgogogwAAQgxAAgpAog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-116.4,232.6,232.9);


(lib.map_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.map();
	this.instance.setTransform(-117,-67,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-67,234,135);


(lib.flake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AggA5QgYgOgHgaQgHgZAOgYQANgYAbgHQAZgHAYAOQAXAOAIAaQAHAZgOAYQgOAYgaAHQgJACgIAAQgQAAgQgJg");
	this.shape.setTransform(5.6,11.2,0.362,0.362);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AgPBAQgbgHgOgYQgOgYAIgZQAGgaAYgOQAYgOAZAHQAaAHAOAYQAOAYgHAZQgIAagYAOQgPAJgRAAQgGAAgJgCg");
	this.shape_1.setTransform(-5.6,11.2,0.362,0.362);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AgWAoQgQgKgFgSQgFgRAJgRQAKgQATgFQAQgFARAJQAQAKAFATQAFAQgJARQgKAQgSAFQgHACgFAAQgLAAgLgGg");
	this.shape_2.setTransform(20.1,-13.8,0.362,0.362);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AgKAsQgTgFgJgQQgKgRAFgQQAFgTARgKQAQgJARAFQASAFAKAQQAJARgFARQgFASgQAKQgLAGgMAAQgEAAgGgCg");
	this.shape_3.setTransform(-20,-13.8,0.362,0.362);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AAwDQIABgDIAPgaIgyAdIgbAAIgygdIAPAaIAAADIgPAAIgZgrIgJgFIgnAKQAAAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBAAIgDgEQAAgDABgCQACgDACgBIAYgGIgegRIiPAmIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQgBgCACgCQABgDADgBICCgiIgngXIiQAmIgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgDABgDQACgCADgBICBgjIgggTIhBASIgCAAIgEgCIgDgEQAAgDABgCQACgDADgBIAygNIhEgnQgEACgFABQgFAAgEgCQgGgEgCgHQgCgHAEgFQAEgEAGgDQAHgBAGADQAEADACACQADAEgBAFIBEAoIgNgxQgBgDABgDQACgCADAAQADgCACACQADACAAACIASA/IAgATIgiiAQgBgDABgCQACgCADgCQACAAADABQADACAAADIAnCNIAnAWIgjh/QgBgDACgDQABgDADAAQADgBACABQADACABADIAmCNIAeARIgGgXQgBgDABgDQACgCADAAQADgBACABQADABAAADIAKAlIAJAGIAyAAIAZgsIAAgKIgbgbQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACIARARIAAgjIhohnQgCgCAAgCQAAgDACgDQACgBADgBQADABACABIBeBdIAAgrIhohpQgCgCAAgCQAAgDACgDQACgCADAAQADAAACACIBeBfIAAgmIgvgvQgCgCAAgCQAAgDACgDQACgCADAAQADAAACACIAlAlIAAhOQgEgCgDgEQgCgFAAgEQAAgHAFgGQAFgEAFAAQAGAAAFAEQAFAGAAAHQAAAEgDAFQgCAEgEACIAABOIAlglQACgCADAAQADAAACACQACADAAADQAAACgCACIgvAvIAAAmIBehfQACgCAEAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACADAAADQAAACgCACIhoBpIAAArIBehdQACgBAEgBQAAABABAAQABAAAAAAQABAAAAAAQABABAAAAQACADAAADQAAACgCACIhoBnIAAAjIARgRQACgCADAAQADAAACACQACACAAADQAAADgCACIgbAbIAAAKIAZAsIAyAAIAJgGIAKglQAAgDADgBQADgBACABQADAAACACQABADgBADIgGAXIAegRIAniNQAAgDADgCQACgBADABQADAAABADQACADgBADIgjB/IAngWIAniNQABgDACgCQADgBACAAQADACACACQABACAAADIgjCAIAggTIASg/QAAgCADgCQADgCACACQADAAACACQABADgBADIgNAxIBEgoQAAgFACgEQACgCAEgDQAGgDAHABQAHADADAEQAEAFgCAHQgCAHgGAEQgEACgFAAQgFgBgEgCIhEAnIAzANQACABACADQABACAAADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgCAAIhAgSIghATICBAjQADABACACQABADAAADIgDADQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgCAAIiPgmIgnAXICBAiQADABACADIAAAEQgBAGgGAAIgBAAIiQgmIgeARIAYAGQADABABADQACACgBADQgCAFgFAAIgngKIgJAFIgZArgAAHDEIAygdIgeAAQgDAAgDgEIgOgagAgGDEIAAg7IgOAaQgDAEgEAAIgdAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-20.9,72.8,41.8);


(lib.dl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AARAyIAAgnIgGAAQgJAAgDANIgLAaIgbAAIAPgeQAGgNAJgDQgWgEAAgUQAAgOAKgIQAKgHAQAAIAjAAIAABjgAgHgTQAAAHAEAEQADAEAHAAIAKAAIAAgcIgKAAQgOAAAAANg");
	this.shape.setTransform(71.5,-2.2,1.675,1.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AgkAyIAAhjIAkAAQAlAAAAAgQAAAPgLAIQgMAJgQAAIgLAAIAAAjgAgNAAIAJAAQAQAAAAgQQAAgQgQAAIgJAAg");
	this.shape_1.setTransform(58.6,-2.2,1.675,1.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AglAyIAAhjIA/AAIAAASIgoAAIAAAWIASAAQAPAAAKAIQAJAGAAANQAAAPgJAJQgKAIgRAAgAgOAhIANAAQAOAAABgOQAAgNgOAAIgOAAg");
	this.shape_2.setTransform(43.9,-2.2,1.675,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AAZAyIgIgWIgiAAIgHAWIgZAAIAlhjIAaAAIAkBjgAgBgWIgLAgIAYAAIgLggIgBgJIAAAAg");
	this.shape_3.setTransform(27.7,-2.2,1.675,1.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AANAyIgcgsIgDgGIAAAAIAAAyIgWAAIAAhjIAWAAIAAAwIAAAAIAEgGIAagqIAbAAIgkAwIAmAzg");
	this.shape_4.setTransform(13.2,-2.2,1.675,1.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("AgdAyIAAhjIA5AAIAAASIgiAAIAAAXIAfAAIAAAQIgfAAIAAAYIAkAAIAAASg");
	this.shape_5.setTransform(-1,-2.2,1.675,1.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AAgBAIAAgcIg/AAIAAAcIgUAAIAAguIAKAAQAUgiABgvIA5AAIAABRIAPAAIAAAugAgGgNQgGATgGAMIAgAAIAAg+IgPAAQgBAPgEAQg");
	this.shape_6.setTransform(-16.9,0.1,1.675,1.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("AgdAwIAAgSQAIAFAMAAQAKAAAGgIQAGgIAAgOIAAAAQgGAKgMAAQgNAAgIgKQgIgGAAgOQAAgQAKgKQAKgKAOAAQAQAAAJANQAKAMAAAXQAAAZgLAPQgMAPgTAAQgNAAgJgEgAgJgdQgDAEAAAIQAAAIADAEQAEAEAFAAQAFAAAEgDQAEgGAAgFQAAgIgEgGQgEgFgFAAQgFAAgEAFg");
	this.shape_7.setTransform(-38.5,-2.2,1.675,1.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("AgeAzIAAgSIAVAAIAAg9IgWAFIAAgSIAqgJIAABTIAVAAIAAASg");
	this.shape_8.setTransform(-51.3,-2.3,1.675,1.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AgZAnQgNgOAAgXQAAgXAPgPQAPgPAWAAQAOAAALAEIAAAWQgKgGgNAAQgOAAgHAJQgJAJAAANQAAAPAIAJQAHAJAOAAQAMgBAMgGIAAAVQgKAFgTAAQgVAAgOgNg");
	this.shape_9.setTransform(-71.5,-2.2,1.675,1.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-11,156.4,22);


(lib.cur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhRCbQgYgKgQgRQgQgPgJgaQgJgWAAgeQAAglANgjQANgkAYgcQAZgcAigRQAigRAqAAQA8AAAhAVQAhAXAAAmQAAAdgOAUQgNAUgWAMQgVALgcAGQgdAGgZAAIhFAAQgEAUAAASQAAAkAQATQAQASAaAAQAhAAAZgQQAagRAUgXIASAQIgWAXQgKAMgTAMQgQAKgXAHQgVAGgaAAQgfAAgYgJgAAAh+QgNAGgLAPQgLAPgJAZQgKAagGAiIBFAAQANAAALgHQAKgIAHgMQAHgKAEgOQAEgOAAgOQAAgagNgLQgMgMgQAAQgMAAgMAHg");
	this.shape.setTransform(35.1,0,0.442,0.442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AhvCRQgjgSAAgmQAAgUAIgRQAHgPAPgOQAOgNAWgKQATgKAbgKIAqgRQAagLAPgNQAQgMgBgYQAAgPgLgLQgNgKgZAAQgnAAgZAXQgZAWgKAhIgXAAQAFgcAHgYQAIgTAQgOQAPgNAZgFQAZgFAoAAQAyAAAgATQAfASAAAlQAAAngdAaQgcAYgvATIglAPQgeAMgTAOQgUAOAAAXQAAARANAKQANAKAhAAQAnAAAZgWQAYgXAMghIAXAAQgFAdgIAWQgIAWgQAMQgOAMgaAGQgZAFgnAAQg3AAgigTg");
	this.shape_1.setTransform(20.2,0,0.442,0.442);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("ABWCeQgagBgNgJQgLgLAAgaIAAgKIAOhYIhpAAIgZCRIhXAAIArkBQAAgRgJgKQgIgKgWAAIgGAAIADgUIBRAAQAZAAANAKQALAJAAAaIAAAKIgOBVIBqAAIAZiMIBXAAIgsD/QAAASAJAKQAIALAWgBIAHAAIgDAVg");
	this.shape_2.setTransform(5.2,0,0.442,0.442);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AhQCbQgYgKgRgRQgPgPgKgaQgJgXAAgdQAAgkAOgkQAMgkAZgcQAXgbAkgSQAigRApAAQA9AAAgAVQAhAXAAAmQAAAdgNAUQgOAUgWAMQgVALgcAGQgcAGgaAAIhEAAQgFAWAAAQQAAAkAQATQAQASAbAAQAhAAAYgQQAbgSATgWIATAQIgWAXQgNANgQALQgRAKgWAHQgVAGgbAAQgeAAgYgJgAAAh+QgNAGgLAPQgLAPgJAZQgJAWgGAmIBEAAQAOAAAKgHQALgIAHgMQAHgMAEgMQADgRAAgLQAAgagMgLQgNgMgPAAQgNAAgMAHg");
	this.shape_3.setTransform(-10.7,0,0.442,0.442);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("AB+ChIAgjAIAEgXIACgSQAAgegMgNQgNgNgRAAQgTAAgQAIQgSAIgJAKIADAOIABASIgoDnIhUAAIAmjjIAAgGQAAgegMgNQgNgNgRAAQgQAAgQAKQgPAIgKAJIAAAEIABADIAAAKIgqD1IhXAAIArj8IAAgGQAAgRgIgKQgIgJgWAAIgGAAIADgUIBCAAQAVAAAOAGQANAFAGAOIADAAQAMgKAYgLQAXgLAfAAQARAAAQAEQANAFAKAGQAJAFAIAHIAKALQARgPAXgLQAZgMAlAAQAxAAAaAVQAZAVAAAvIgBALIglDdg");
	this.shape_4.setTransform(-30.8,-0.1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-7.2,84,14.6);


(lib.ct_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ct();
	this.instance.setTransform(-130.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-73.5,261,147);


(lib.cross_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cross();
	this.instance.setTransform(-51,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-20.5,102,41);


(lib.can_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.can();
	this.instance.setTransform(-55.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-85.5,111,171);


(lib.arr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0085C8").s().p("AAFATIgOgRQgDgCADgBIAOgQQADgDACADQADADgDACIgLAMIALANQADADgDADIgCABg");
	this.shape.setTransform(-11.8,0,1.675,1.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0085C8").s().p("AhGAEQgEAAAAgEQAAgDAEAAICNAAQAEAAAAADQAAAEgEAAg");
	this.shape_1.setTransform(0.3,0.1,1.675,1.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0085C8").s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADAAQAJAAAAAIQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_2.setTransform(12.3,0,1.675,1.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-3.3,27.7,6.8);


(lib.adr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AhJBOIAAgKIBXiCIgmAAQgVAAgJAHQgJAIAAAQIgKAAIAAgTIACgKQABgFADgEQAEgEAFgCQAGgDAIABIB2AAIheCNIBWAAIAAAOg");
	this.shape.setTransform(54.3,1.5,0.505,0.505);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AAmBqQgMgGgMgPIgegrIAABCIgrAAIAAivQAAgOgEgLQgFgJgPAAIgDAAIAAgKIAoAAQAJAAAGACQAFACAEAFQADAEACAJIABBzIAxg7QAFgFAFgCQAFgEAHgCQAGgBAKAAIAHAAIAAAJQgMAAgGADQgHADgJAKIggAmIAsA7QAJAMAIAGQAHAGAHABIAAAIIgJADIgOABQgOAAgMgGg");
	this.shape_1.setTransform(45.5,0,0.505,0.505);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4280").s().p("AgOAOQgFgGAAgIQAAgHAFgHQAFgFAJAAQAKAAAFAFQAFAGAAAIQAAAJgFAFQgFAGgKAAQgIAAgGgGg");
	this.shape_2.setTransform(39.5,4.7,0.505,0.505);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4280").s().p("AgHBuIAAiwQAAgOgEgKQgEgJgPAAIgEAAIAAgKIAnAAQAJAAAFACQAGACAEAFQAEAHAAAGQACAJAAAMIAACwg");
	this.shape_3.setTransform(34.7,-0.1,0.505,0.505);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4280").s().p("Ag2BFQgOgNAAgUQAAgLAEgKQADgJALgGQAJgFATgEQAUgDAWAAIAGAAQAAgegJgMQgIgMgNAAIgLABQgGACgEADQgEADgEAGQgDAHgCAIIgSAAIABgRQABgJAGgHQAGgHAOgCQAMgDAQAAQAiAAARARQASASAAAkIAABYIgcAAIgMgPIgCAAQgDAFgGAFQgEADgJADQgFADgLAAQgbAAgQgNgAgMAKQgLAJAAASQAAANAGAIQAGAIAKAAQAFAAAGgEIAJgHQAEgFADgHIAAgqIgGAAQgWAAgKAJg");
	this.shape_4.setTransform(28.8,1.5,0.505,0.505);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4280").s().p("ABVBQIAAhiQAAgYgIgLQgHgKgMAAQgKAAgHADQgHAEgFAFIADAIIACAKIABBxIgqAAIAAhiQAAgZgIgKQgHgKgMAAQgIAAgHAEQgIAGgDADIACALIABAHIAABwIgsAAIgBh+IgDgLQgDgEgEgCQgFgDgHAAIgEAAIAAgKIAiAAQAKAAAHADQAIADADAHIABAAQAJgHAIgEQAKgFAQAAQAKAAAHACIAMAFIAJAGIAGAGQAHgIALgFQAJgGAVAAQAcAAAPAPQAQANAAAiIAABhg");
	this.shape_5.setTransform(17.3,1.4,0.505,0.505);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4280").s().p("AgrBCQgPgPAAghIAAg1QAAgQgEgJQgFgJgOAAIgEAAIAAgKIApAAQAHAAAHACQAGADADAEQAEAHACAHIABBLQAAAZAHALQAHAKAMAAQAGAAAIgDIAJgIIAIgLIAAh6IArAAIAACcIgdAAIgLgPIgCAAIgLAJQgFAEgIACQgIADgKAAQgdAAgQgOg");
	this.shape_6.setTransform(5.4,1.6,0.505,0.505);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4280").s().p("Ag2BFQgOgNAAgUQAAgLAEgKQADgJALgGQAJgFATgEQAUgDAWAAIAFAAQAAgfgIgLQgJgMgMAAIgLABQgGACgEADQgEADgEAGQgDAHgCAIIgTAAIACgRQABgJAGgHQAGgHAOgCQAMgDAQAAQAiAAARARQASASAAAkIAABYIgcAAIgMgPIgCAAQgDAFgGAFQgEADgJADQgFADgLAAQgbAAgQgNgAgMAKQgLAJAAASQAAANAGAIQAGAIAKAAQAFAAAGgEIAJgHQAEgGACgGIAAgqIgFAAQgWAAgKAJg");
	this.shape_7.setTransform(-3.2,1.5,0.505,0.505);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4280").s().p("AgjBOQgNgDgHgHQgGgGgBgLIgBgXIAMAAQADARAJAKQALAMAUAAQARAAAIgHQAHgGAAgKQAAgKgJgGQgHgFgNgHIgRgHQgUgJgLgJQgMgLAAgQQAAgMAFgIQAEgHAJgHQAKgGALgCQAJgDAQAAQAUAAAMAEQANADAHAHQAHAGAAAKIABAYIgMAAQgCgRgLgLQgJgLgWAAQgMAAgHAHQgHAHAAAJQAAAJAHAGQAGAFAKAFIATAIQAWAKANAJQAMAKAAASQAAALgFAIQgGAIgJAGQgHAFgOAEQgNADgNAAQgUAAgOgEg");
	this.shape_8.setTransform(-11.1,1.5,0.505,0.505);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4280").s().p("AgOAOQgFgFAAgJQAAgIAFgGQAGgFAIAAQAKAAAFAFQAFAHAAAHQAAAIgFAGQgFAGgKAAQgIAAgGgGg");
	this.shape_9.setTransform(-17,4.7,0.505,0.505);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4280").s().p("AA0BSIgrhdIglBdIgPAAIg3h5QgIgSgHgJQgHgHgJgBIAAgGIACAAIAOgBQAMAAAHACQAJACAHAFQAHAEAGAJQAFAFAHAPIAeA+IAWg0IgEgKQgJgTgGgHQgIgIgHgBIAAgGIAGgBIAaACQAJACAHAFQAIAEAHAJQAGAGAGAOIAfBCIAphpIASAAIg+Cgg");
	this.shape_10.setTransform(-25.2,1.5,0.505,0.505);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4280").s().p("AA1BSIgshdIglBdIgPAAIg3h5QgIgSgHgJQgHgHgJgBIAAgGIADAAIAEgBIAJAAQAMAAAHACQAIACAIAFQAHAEAHAJQAHAIAEAMIAdA+IAYg0IgGgKQgIgTgGgHQgHgIgIgBIAAgGIAGgBIAbACQAJACAGAFQAIAEAHAJQAGAGAHAOIAeBCIAqhpIARAAIg+Cgg");
	this.shape_11.setTransform(-38.4,1.5,0.505,0.505);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4280").s().p("AA1BSIgshdIglBdIgPAAIg2h5QgIgQgIgLQgIgHgIgBIAAgGIADAAIAFgBIAIAAQALAAAJACQAHACAJAFQAGAEAHAJQAGAIAGAMIAdA+IAWg0IgEgKQgJgUgHgGQgGgIgIgBIAAgGIAGgBIAbACQAIACAHAFQAIAEAHAJQAGAGAGAOIAgBCIAohpIASAAIg+Cgg");
	this.shape_12.setTransform(-51.5,1.5,0.505,0.505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-5.7,116.2,11.5);


(lib.tels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.setTransform(0.9,33.2);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(-65.1,13.3);

	this.instance_2 = new lib.Symbol35();
	this.instance_2.setTransform(0.9,-18.2);

	this.instance_3 = new lib.Symbol34();
	this.instance_3.setTransform(-67.5,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-43.1,189,86.3);


(lib.td = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(0,13.2);

	this.instance_1 = new lib.dl1();
	this.instance_1.setTransform(0.2,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-24.1,178.2,48.3);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.setTransform(0.6,10.7);

	this.instance_1 = new lib.Symbol40();
	this.instance_1.setTransform(0,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.8,-17.5,197.6,35.2);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(11.7,0.5);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-13.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-16,47.8,32.9);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(12.2,-0.3);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(-6.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-16,35.7,32.1);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(12.4,0);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(-13.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-16.4,49.3,32.9);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(11.9,0);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-12.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-16.4,46.6,32.9);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(11.7,0);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-12.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-16.4,46.9,32.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.setTransform(12.3,0.1);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-12.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-15.9,45.7,32);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(11.9,0);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-12.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-16.4,46.6,32.9);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(11.9,0);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-12.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-16,46.5,32);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(11.2,0.1);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-13.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-15.9,47.8,32);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(11.9,0);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-12.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-16,46.6,32);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.setTransform(11.3,0.1);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-11.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-15.9,43.7,32);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(12.5,-0.4);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-7.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-16,36.3,32);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(7.5,-0.1);

	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(-13.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-16.6,37.8,32.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.shadow = new cjs.Shadow("#7D2344",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.shad();
	this.instance_1.setTransform(-2.3,16.5,1,1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-21.5,46.6,46);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.shadow = new cjs.Shadow("#7D2344",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.shad();
	this.instance_1.setTransform(-2.3,16.5,1,1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-21.2,45.5,46);


(lib.snowss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ыты();
	this.instance.setTransform(94.8,0.1);

	this.instance_1 = new lib.ыты();
	this.instance_1.setTransform(-94.8,0.1);

	this.instance_2 = new lib.ыты();
	this.instance_2.setTransform(85.4,0.1);

	this.instance_3 = new lib.ыты();
	this.instance_3.setTransform(-85.3,0.1);

	this.instance_4 = new lib.ыты();
	this.instance_4.setTransform(75.8,0.1);

	this.instance_5 = new lib.ыты();
	this.instance_5.setTransform(-75.8,0.1);

	this.instance_6 = new lib.ыты();
	this.instance_6.setTransform(66.4,0.1);

	this.instance_7 = new lib.ыты();
	this.instance_7.setTransform(-66.3,0.1);

	this.instance_8 = new lib.ыты();
	this.instance_8.setTransform(56.8,0.1);

	this.instance_9 = new lib.ыты();
	this.instance_9.setTransform(-56.8,0.1);

	this.instance_10 = new lib.ыты();
	this.instance_10.setTransform(47.4,0.1);

	this.instance_11 = new lib.ыты();
	this.instance_11.setTransform(-47.4,0.1);

	this.instance_12 = new lib.ыты();
	this.instance_12.setTransform(37.8,0.1);

	this.instance_13 = new lib.ыты();
	this.instance_13.setTransform(-37.9,0.1);

	this.instance_14 = new lib.ыты();
	this.instance_14.setTransform(28.4,0.1);

	this.instance_15 = new lib.ыты();
	this.instance_15.setTransform(-28.4,0.1);

	this.instance_16 = new lib.ыты();
	this.instance_16.setTransform(19,0.1);

	this.instance_17 = new lib.ыты();
	this.instance_17.setTransform(-18.9,0.1);

	this.instance_18 = new lib.ыты();
	this.instance_18.setTransform(9.5,0.1);

	this.instance_19 = new lib.ыты();
	this.instance_19.setTransform(-9.5,0.1);

	this.instance_20 = new lib.ыты();
	this.instance_20.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-2.3,194.3,4.8);


(lib.promo_letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(64.6,-3);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(35,-3);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(0.9,0);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(-30,-3);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(-61.5,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-18.2,153.3,36.6);


(lib.oldprice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.cross = new lib.cross_1();
	this.cross.setTransform(1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.cross).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0085C8").s().p("AhRCbQgYgKgQgRQgQgPgJgaQgJgWAAgeQAAglANgjQANgkAYgcQAZgcAigRQAigRAqAAQA8AAAhAVQAhAXAAAmQAAAdgOAUQgNAUgWAMQgVALgcAGQgdAGgZAAIhFAAQgEAUAAASQAAAkAQATQAQASAaAAQAhAAAZgQQAagRAUgXIASAQIgWAXQgKAMgTAMQgQAKgXAHQgVAGgaAAQgfAAgYgJgAAAh+QgNAGgLAPQgLAPgJAZQgKAagGAiIBFAAQANAAALgHQAKgIAHgMQAHgKAEgOQAEgOAAgOQAAgagNgLQgMgMgQAAQgMAAgMAHg");
	this.shape.setTransform(46.1,-13.7,0.299,0.299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0085C8").s().p("AhvCRQgjgSAAgmQAAgUAIgRQAHgPAPgOQAOgNAWgKQATgKAbgKIAqgRQAagLAPgNQAQgMgBgYQAAgPgLgLQgNgKgZAAQgnAAgZAXQgZAWgKAhIgXAAQAFgcAHgYQAIgTAQgOQAPgNAZgFQAZgFAoAAQAyAAAgATQAfASAAAlQAAAngdAaQgcAYgvATIglAPQgeAMgTAOQgUAOAAAXQAAARANAKQANAKAhAAQAnAAAZgWQAYgXAMghIAXAAQgFAdgIAWQgIAWgQAMQgOAMgaAGQgZAFgnAAQg3AAgigTg");
	this.shape_1.setTransform(36,-13.7,0.299,0.299);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0085C8").s().p("ABWCeQgagBgNgJQgLgLAAgaIAAgKIAOhYIhpAAIgZCRIhXAAIArkBQAAgRgJgKQgIgKgWAAIgGAAIADgUIBRAAQAZAAANAKQALAJAAAaIAAAKIgOBVIBqAAIAZiMIBXAAIgsD/QAAASAJAKQAIALAWgBIAHAAIgDAVg");
	this.shape_2.setTransform(25.8,-13.7,0.299,0.299);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0085C8").s().p("AhQCbQgYgKgRgRQgPgPgKgaQgJgXAAgdQAAgkAOgkQAMgkAZgcQAXgbAkgSQAigRApAAQA9AAAgAVQAhAXAAAmQAAAdgNAUQgOAUgWAMQgVALgcAGQgcAGgaAAIhEAAQgFAWAAAQQAAAkAQATQAQASAbAAQAhAAAYgQQAbgSATgWIATAQIgWAXQgNANgQALQgRAKgWAHQgVAGgbAAQgeAAgYgJgAAAh+QgNAGgLAPQgLAPgJAZQgJAWgGAmIBEAAQAOAAAKgHQALgIAHgMQAHgMAEgMQADgRAAgLQAAgagMgLQgNgMgPAAQgNAAgMAHg");
	this.shape_3.setTransform(15.1,-13.7,0.299,0.299);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0085C8").s().p("AB+ChIAgjAIAEgXIACgSQAAgegMgNQgNgNgRAAQgTAAgQAIQgSAIgJAKIADAOIABASIgoDnIhUAAIAmjjIAAgGQAAgegMgNQgNgNgRAAQgQAAgQAKQgPAIgKAJIAAAEIABADIAAAKIgqD1IhXAAIArj8IAAgGQAAgRgIgKQgIgJgWAAIgGAAIADgUIBCAAQAVAAAOAGQANAFAGAOIADAAQAMgKAYgLQAXgLAfAAQARAAAQAEQANAFAKAGQAJAFAIAHIAKALQARgPAXgLQAZgMAlAAQAxAAAaAVQAZAVAAAvIgBALIglDdg");
	this.shape_4.setTransform(1.4,-13.8,0.299,0.299);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0085C8").s().p("Ak1ANQAAjdBTh0QBSh1CbAAQErAAAAG0QAADXhSB0QhRB0iWAAQkyAAAAmtgAh1AIQAAEhB2AAQB1AAAAkpQAAkphzAAQh4AAAAExg");
	this.shape_5.setTransform(42.6,9.3,0.299,0.299);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0085C8").s().p("Ak1ANQAAjdBTh0QBSh1CbAAQErAAAAG0QAADXhSB0QhRB0iWAAQkyAAAAmtgAh1AIQAAEhB2AAQB0AAAAkpQAAkphyAAQh4AAAAExg");
	this.shape_6.setTransform(22.7,9.3,0.299,0.299);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0085C8").s().p("Ak1ANQAAjdBTh0QBSh1CbAAQErAAAAG0QAADXhSB0QhRB0iWAAQkyAAAAmtgAh1AIQAAEhB2AAQB0AAAAkpQAAkphyAAQh4AAAAExg");
	this.shape_7.setTransform(2.8,9.3,0.299,0.299);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0085C8").s().p("Ak1ANQAAjdBTh0QBTh1CaAAQErAAAAG0QAADYhSBzQhRB0iWAAQkyAAAAmtgAh1AIQAAEhB2AAQB1AAAAkpQAAkphzAAQh4AAAAExg");
	this.shape_8.setTransform(-20.1,9.3,0.299,0.299);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0085C8").s().p("AkPGPIAAikQBWA+BzAAQBGAAAogfQAogfAAg3QAAg5gygfQgvgfhYAAIhNAAIAAiPIBHAAQCmAAAAhvQAAhoh/AAQhVAAhSA3IAAiaQBbgtB3AAQCCAABIA7QBKA8gBBdQABCoirAqIAAADQBbALA0A1QA1A3AABPQAAB4hYBGQhXBGiZAAQiDAAhUgrg");
	this.shape_9.setTransform(-39.8,9.3,0.299,0.299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-18.6,102,49.7);


(lib.np_nums = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(60.6,0);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(31.1,0);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(2.5,0);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(-32.1,0);

	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(-61.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-21.5,167.6,46);


(lib.newprice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lrs = new lib.np_nums();
	this.lrs.setTransform(0,-10.2);

	this.cur = new lib.cur();
	this.cur.setTransform(30.7,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cur},{t:this.lrs}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-31.8,167.6,61.6);


(lib.flakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flake();
	this.instance.setTransform(0,62.6,1,1,0,180,0);

	this.instance_1 = new lib.flake();
	this.instance_1.setTransform(0,-62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-83.5,72.8,167);


(lib.days = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Symbol 32
	this.instance = new lib.Symbol32();
	this.instance.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 31
	this.instance_1 = new lib.Symbol31();
	this.instance_1.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 30
	this.instance_2 = new lib.Symbol30();
	this.instance_2.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 29
	this.instance_3 = new lib.Symbol29();
	this.instance_3.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 28
	this.instance_4 = new lib.Symbol28();
	this.instance_4.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Symbol 27
	this.instance_5 = new lib.Symbol27();
	this.instance_5.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Symbol 26
	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Symbol 25
	this.instance_7 = new lib.Symbol25();
	this.instance_7.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Symbol 24
	this.instance_8 = new lib.Symbol24();
	this.instance_8.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Symbol 23
	this.instance_9 = new lib.Symbol23();
	this.instance_9.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Symbol 22 copy
	this.instance_10 = new lib.Symbol22();
	this.instance_10.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Symbol 22
	this.instance_11 = new lib.Symbol33();
	this.instance_11.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Symbol 21
	this.instance_12 = new lib.Symbol21();
	this.instance_12.setTransform(0.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-15.2,49.3,32.9);


(lib.can1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.can = new lib.can_1();

	this.timeline.addTween(cjs.Tween.get(this.can).wait(1));

	// wgh
	this.wgh = new lib.wgh();
	this.wgh.setTransform(72.3,-86.4,1.174,1.174);

	this.timeline.addTween(cjs.Tween.get(this.wgh).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-113.5,154.9,199);


(lib.cal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlvF7QgxAAgjgjQgjgiAAgxIAAp/IPNAAIAAJ/QAAAxgjAiQgjAjgxAAg");
	mask.setTransform(0,15.2);

	// Layer 2
	this.days = new lib.days();
	this.days.setTransform(0,6.6);

	this.days.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.days).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ABxA5IAMhFIAAgEQAAgEgBgBQgCgCgDAAIgCAAIABgEIAMAAIAHACQADAAAAAEIAIgFIAFgCIAHAAQAGAAAEACQAEACACADQADACACAFIABAKQAAAFgCAIQgDAGgEAGQgEAFgHAFQgGADgIAAIgKgCIgDgCIgFAbgACUgUIgGADIAAAFIgHAkIAEACIAHACIAHgCIAFgGIADgHIAEgPIAAgGQAAgIgCgDQgCgDgFAAQgGAAgCACgAizA4IgBgPIgCgFQAAAAgBgBQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFgBIgxABQgEACgBACIgFAHIgEALIgGAAIAEgZIACgDIADgBIAFAAQAIgMAFgQQAGgPADgSIABgEIAAgCIgCgGQgCgCgEAAIgBAAIAAgEIBGAAIgPBPIAFAAIADABIABADIAAADIgEAWgAjWgWIgFAUIgGAPIgIAOIAoAAIANhJIgdAAgAC3AhIABgDQADAAAEgEIAGgGIAKgOQgFAAgFgEQgCgCAAgEQAAgGACgFQAEgFADgCQAFgDAFAAIANgCIAiAAIgBAEIgBAAQgFAAgDAEIgDAJIgIArIgRAAIAFgaIgGAAIgKAQIgJAIQgEAEgHAAgADegVIgJAHIgBAIQAAAFADABQAEACAEAAIAEgBIABAAIAFgWIgCAAIgDgBgAA1AcQgHgHAAgLQAAgLACgKQAFgMAEgGQAEgGAGgFIAMgFIAbgHQAEgDAAgBIAFAAIgCAKIgDAFQgDADgDABIgXAEIgIAEIgHAFIgGAHIgDALIABAAQAEgIAGgFQAIgEAIAAIAKABIAGAEQAEADABAEIACAKQAAAIgDAHQgEAHgEAEQgGAGgFAAQgHADgHAAQgNAAgFgGgABIgOIgFAKIgEAJIAAAJIAAAGIADAFIACACIAEABQAFAAADgDIAFgKIAEgKIAAgIIAAgGIgDgFIgCgCIgEgBQgFAAgDADgAgNAgQgEgBgDgEQgCgCgCgFIgCgKIADgMQAEgKACgCQAFgGAFgEQAGgEAIAAIAGABIAEADIADADIABAAIAGgGIAKAAIgKA8IgLAAIgEgGIgFAEIgFACIgFABgAABgUIgCAFIgDAHIgEAPIAAAHIABAKQADAEAEAAIAEgBIAEgDIAEgEIAGgiIgFgHIgFgBQgFAAgCACgAgpAiQgFAAgFgDQgCAAgFgHIgKgRIgFAaIgQAAIAHgpIAAgEIABgCIAAgCIgCgFIgGgCIgBAAIABgEIAPAAIAIACQACACAAAFIAAACIAAADIgDANIAYgVIAFgDIAFgCIAJgBIgBADIgIACQgCABgEAEIgQAPIANAWQAFAIAGACIgBADIgDABgAiOAgQgCAAgHgFIgFgIIgBgKQAAgIACgEQADgIAFgFQAGgHAFgBQAGgEAKAAQAMAAAFAEQAHAFAAAHQAAAGgDADIgGAFIgKADIgZABIgBAIQAAAHAEAEQACADAGAAQAIAAAEgDIAIgIIAEADIgKAKIgHADIgKABgAh/gVIgEAEQgEADgBAFIgDAJIAOAAIAFAAIADgDIACgFIABgFQAAgFgCgCQgCgCgEAAg");
	this.shape.setTransform(-0.3,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4280").s().p("AmQJnQhJAAg2g0Qg0gzgDhKIAAsnQAAhLA1g1QA2g1BLAAIAACnQABAeAVAVQAVAVAfAAQAdAAAWgVQAVgVAAgeIAAinIH8AAIAACnQAAAeAWAVQAVAVAeAAQAeAAAWgVQAVgVAAgeIAAinIABAAQBMAAA1A1QA1A1AABLIAAMhQAABMg1A1Qg1A2hMAAgAnmGdQAAAxAjAiQAiAjAxAAILgAAQAxAAAigjQAjgiAAgxIAAp/IvMAAgAhflpIADABQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAgQABAJABAGQADAJAHADQAJAFALgCQAMgBAGgIQAFgGAAgPIAAgdIABgEIAGgBIAAgDIgGAAIgNAAIgEAAQAAABgBAAQAAABAAAAQABABAAAAQABAAABABIADAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAAAXQAAAQgCAFQgCAGgHADQgEABgGgBQgJgCgCgHQgDgFAAgLIAAgcIABgEIAEAAQABgBAAAAQABAAAAgBQAAAAAAgBQgBAAAAgBIgBAAIgXAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAgAi+k4IAAALQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQAJADAJgCQAIgCAEgHQAGgHgDgKQgDgFgEgCIgOgNQgEgEAAgBQgCgGADgEQADgCAFAAQAIABABACQABABABAGQACADACgEIAAgMQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQgKgCgEABQgHABgEAEQgKAKAJAMQABACAOAMQAFAFABADQACAFgCAEQgDAFgGAAQgHAAgDgEQgCgCgBgEIgBgDIgCAAgACGlsQgBABAAAAQAAABAAAAQABABAAAAQABAAAAABIAFAAQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAAAwIgBAHQgCABgEAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAIAmAAIADgDIABgJIAAgDQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAIgCABIgCAFQAAABgGACIgLgBIgDgDIAAg0IABgBIAEAAQAEgCgDgCIgEAAIgRAAgABqlCIAIAUIgCADQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAIAQAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgFgBQgCAAgDgFIgYg5QAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAgBABIgCAEIgUA0QgBAFgDACQgCABgEAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIAVAAIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIgFgBIABgHIAFgNgAAqkuIgCABIACADIAFAAIANABIACgBQAAgBABAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgHAAQgCgCAAgGIgHg1QAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgDABIgYAzIgYgzQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBABAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABIgHA5QAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgEABQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAIASAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgSIACgUIAUArQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIABgEIAUgogAhylCIAIAUQAAABgBAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAIAPAAQABAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFAAQgEgEgCgGIgUgxIgBgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBABIgVA4QgCAGgDABIgFAAIgBADIACACIATAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQgCgCgDAAQgBgBADgHIAEgMgACzlpQgEAHAGADQADADAFgEIgCgBQgGAEgBgGQgDgEAEgDQAFgDADAFQACADgCADIACAAQADgGgGgDQgDgCgCAAQgDAAgBAEgABalIIAGgTIABAAIAHATgAiClIIAHgTIAHATgAEplhQgNgLAAgTIAAi8QAAgSANgMQAMgNASAAQAQAAAPANQAMAMAAASIAAC8QAAASgMAMQgNANgSAAQgSAAgMgNgAlmlhQgMgMAAgSIAAi8QAAgSAMgMQANgNATAAQARAAANANQANALAAATIAAC8QAAASgNAMQgNANgRAAQgSAAgOgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-61.5,116.7,123.1);


(lib.arrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(69.5,0.1,1,1,0,0,180,-126.5,0.1);

	this.instance_1 = new lib.arr();
	this.instance_1.setTransform(-69.2,0.1,1,1,0,0,0,-126.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-3.3,141.7,6.8);


(lib.arr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(48.4,0.1,1,1,0,0,180,-126.5,0.1);

	this.instance_1 = new lib.arr();
	this.instance_1.setTransform(-48,0.1,1,1,0,0,0,-126.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-3.3,184.1,6.8);


(lib.tppp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txt = new lib.tx();
	this.txt.setTransform(0,-8);

	this.url = new lib.adr();
	this.url.setTransform(-0.2,10.1);

	this.arrows = new lib.arr2();
	this.arrows.setTransform(-0.3,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrows},{t:this.url},{t:this.txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-15.8,206.2,31.7);


(lib.promo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// letters
	this.letters = new lib.promo_letters();
	this.letters.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get(this.letters).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ArgGlIkImmIEImjIXBAAIEIGjIkIGmgAvTgBID9GVIWtAAID9mVIj9mRI2tAAgAIMFeIglgkQgCgDAAgEQAAgDACgDIAlgkQACgDAEAAQAEAAACADQADACAAAEQAAADgDADIgWAWICsAAIAEgGQAGgHAJAAQAJAAAGAHQAGAGAAAIQAAAJgGAGQgGAGgJAAQgJAAgGgGIgEgGIirAAIAVAWQADACAAAEQAAAEgDACQgDADgDAAQgEAAgCgDgAoTFeQgDgCAAgEQAAgEADgCIAVgWIivAAIgEAGQgGAGgJAAQgJAAgFgGQgHgGAAgJQAAgIAHgGQAFgHAJAAQAJAAAGAHIAFAGICuAAIgVgWQgDgDAAgDQAAgEADgCQACgDAEAAQADAAADADIAkAkQADADAAADQAAAEgDADIgkAkQgDADgDAAQgEAAgCgDgAGXFIIAAgOIgDAAIAAAFIgGAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAGAAIAAAGIADAAIAAgOIAFAAIAAAOIAEAAIAAgGIAFAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgFAAIAAgFIgEAAIAAAOgAGXE2IAFAAIAAgFIgFAAgAFFFIIAAgOIgDAAIAAAFIgGAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAGAAIAAAGIADAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAFFE2IAFAAIAAgFIgFAAgADzFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgADzE2IAFAAIAAgFIgFAAgAChFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAChE2IAFAAIAAgFIgFAAgABPFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgABPE2IAFAAIAAgFIgFAAgAgBFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIADAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAgBE2IADAAIAAgFIgDAAgAhTFIIAAgOIgDAAIAAAFIgGAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAGAAIAAAGIADAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAhTE2IAFAAIAAgFIgFAAgAilFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAilE2IAFAAIAAgFIgFAAgAj3FIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAj3E2IAFAAIAAgFIgFAAgAlJFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAlJE2IAFAAIAAgFIgFAAgAmbFIIAAgOIgEAAIAAAFIgFAAIAAgGIAFAAIAAgDIgOAAIAAgFIAOAAIAAgEIgFAAIAAgGIAFAAIAAAGIAEAAIAAgOIAFAAIAAAOIADAAIAAgGIAGAAIAAAGIgFAAIAAAEIAOAAIAAAFIgOAAIAAADIAFAAIAAAGIgGAAIAAgFIgDAAIAAAOgAmbE2IAFAAIAAgFIgFAAgAGJjoIgkglQgDgCAAgEQAAgEADgCIAkglQADgCAEAAQADAAADACQACADAAADQAAAEgCADIgWAVIEuAAIAEgGQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgJAAgGgGIgEgGIkuAAIAWAVQACADAAAEQAAADgCADQgDADgDAAQgEAAgDgDgAmVjoQgCgDAAgDQAAgEACgDIAWgVIktAAIgFAGQgGAGgJAAQgJAAgFgGQgHgGAAgJQAAgJAHgGQAFgGAJAAQAJAAAGAGIAFAGIEtAAIgWgVQgCgDAAgEQAAgDACgDQADgCAEAAQADAAADACIAkAlQADACAAAEQAAAEgDACIgkAlQgDADgDAAQgEAAgDgDgAkmjoIgDgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAgIIABgIQAAgFACgBIACgBIABABIABACIAAACQABAHAEAEQAFAFAKAAQAFAAADgCQAEgCACgEQAEgGgDgIQgCgFgIgHIgMgKQgHgGgEgGQgGgIAAgKQABgKAHgHQAFgGALgCQAKgCAMADIAEAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAKIAAAKQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIAAgGIgDgFQgEgEgJgBQgIAAgEAEQgDADgBAEQgBADACAEQABAEAFAFIAMAJIAMALQAGAGACAGQACAGAAAHQgBAIgEAFQgGALgMADIgNABQgIAAgIgCgAh4jrQgMgHgEgOQgCgIAAgOIAAghIgBgQQgBgDgEAAIgDgBIgCAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAFgBIATABIAKgBIAEACIAAADIgCABIgHABIgBADIAAAEIAAAtQAAAQADAIQACAFAFAEQAEAEAGABQAJACAIgDQAGgBAEgEQAEgEABgGQADgGAAgKIAAgQIAAgkIAAgDQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgHgBIgCgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABgCAEAAIAWAAIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgEABIgEABQgBACAAAFIAAAuQgBAVgIALQgFAGgIAEQgHAEgIABIgHAAQgOAAgKgFgAECjnIgZgBIgRAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEgBQABgEAAgHIABgUQAAglgBgSQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgBIgEAAIgCgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABgCAFAAQASABAJgBIADAAIAEABIAAADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgHABIgCADQgBACAAALIAAAkIABASIABAOQABADAFABIAPABIAFgBIAFgCQACgCABgHIACgCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAEIgCAPQgCADgDAAIgIABIgIAAgABnjoQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAFgBIAFgBQACgCACgDIADgGIAehRIACgEIACgDQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABIACACIAIAUIAWA2IADAJIAEAHQADAHAFABIAEAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgZAAIgEAAIgCgCQAAgBAAAAQAAAAAAgBQAAAAABgBQAAgBABAAIgJgYIgEgIIgcAAIgHAUQgCAJAAACIAEABIADABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgJAAIgLAAIgGABIgFgBgACOkXIAVAAIgLgeIAAAAIgKAegAjcjoIgJAAIgMAAIgCAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAEAAIAEgBIAEgFIADgFIAfhUIADgFIACgBIADACIACAGIAfBNQAEAKAFAEQACACAGAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgYAAIgDAAIgDgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAIgMggIgaAAIgCAAIgHATQgDAIABAFIAEAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgCABIgEABIgFgBgAjEkuIgIAXIAVAAIgKgeIgDAHgAgajoIgHAAIgHAAIgCgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAEAAIACgFIALhaQABgFADgBQACAAACAEIAmBOIAnhOQAAgBABgBQAAAAABgBQAAAAAAgBQABAAAAAAQAEAAAAAEIAKBUIABAGQABAEADACIAFABIAGABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACIgEABIgUAAIgJgBIgCgBIAAgCIACgDIgGg/IgMAYIgTAnIgDAGIgDABIgCgBIgFgHIgcg8IgDAgIgBAOIgBAOQAAABAFABQAFAAAAADIgBACIgCABIgEAAIgLAAgAEck8QgEgCgBgFQgBgEACgEQADgEAEgCQAGgBADADQAEADABAEQABAEgCAEIgDgBQADgFgDgEQgCgDgDgBQgEgBgDACQgCACgBADQgBADABADQABADAEABQADACADgCIACAAIACABQgCACgEABQgEAAgDgCgAEllAIgCgDIgCgCIAAAFIgDAAIAAgJIAAgCIgBAAIAHAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAACIgBACIgBABQACAEAEACQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAEhlGQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AriOQIAAnsIXFAAIAAHsgArimjIAAnsIXFAAIAAHsg");
	mask.setTransform(0.2,0.1);

	// Layer 2
	this.flakes = new lib.flakes();
	this.flakes.setTransform(0,0.5);

	this.flakes.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.flakes).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.1,-83,200.3,167);


(lib.dates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.year = new lib.year();
	this.year.setTransform(0.1,28.6);

	this.txt = new lib.td();
	this.txt.setTransform(0,-9.5);

	this.arrows = new lib.arrows();
	this.arrows.setTransform(0.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrows},{t:this.txt},{t:this.year}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-33.6,178.2,67.3);


// stage content:
(lib._250x250_saumal_gruden = function(mode,startPosition,loop) {
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
		var s2 = this.snow2;
		
		
		var ctx = this.ct.x;
		var cty = this.ct.y;
		
		var repeated = false;
		
		var tl = new TimelineMax({repeat: 0, repeatDelay: 3.5, onRepeat: function(){
			repeated = true;
		}});
		
		var dt = g(this.dates.txt);
		var da = g(this.dates.arrows);
		
		
		var pa = g(this.tp.arrows);
		var nums = g(this.cal.days);
		
		
		var pl = g(this.promo.letters);
		var pf = g(this.promo.flakes);
		var npl = g(this.newp.lrs);
		var nps = g(this.newp.sh);
		
		
		var sns1 = g(this.sns1);
		var sns2 = g(this.sns2);
		var tels = g(this.tels);
		var t3 = g(this.t3);
		var map = g(this.map);
		
		
		tl.from(this.promo, 2, {scaleX: 0, scaleY: 0, ease: Elastic.easeOut.config(1, .55)})
		.staggerFrom(pl, 1, {scaleX: 0, scaleY: 0, ease:Back.easeOut}, .1, '-=1.8')
		.staggerFrom(pf, 1, {x: 0, y: 0, ease: Expo.easeOut}, .1, '-=1')
		
		.to(this.promo, .7, {scaleX: "+=1", scaleY: "+=1", alpha: 0, ease: Back.easeIn})
		
		.from(this.ct, 1, {x:0, y:0, scaleX: "+=1", scaleY: "+=1", ease: Expo.easeOut}, '-=.4')
		.from(this.can1, 1, {x:'+='+w, scaleX: "+=.2", scaleY: "+=.2", ease: Expo.easeOut}, '-=.7')
		.from(this.can1.wgh, .7, {x:0, y:0, rotation: 90, ease: Back.easeOut}, '-=.8')
		
		.from(this.oldp, 1, {x:'+='+w, scaleX: "+=.2", scaleY: "+=.2", ease: Expo.easeOut}, '-=.9')
		.from(this.oldp.cross, 1, {scaleX: "+=1", scaleY: "+=1", alpha: 0,  ease: Expo.easeOut}, '-=.2')
		.add('np', '-=.6')
		.staggerFrom(npl, .2, {alpha:0}, .15, 'np')
		.staggerFrom(npl, .5, {y:'-=20',  ease: Bounce.easeOut}, .15, 'np')
		.staggerFrom(nps, .5, {scaleX: 0, scaleY: 0,  ease: Bounce.easeOut}, .15, 'np')
		.from(this.newp.cur, 1, {x: "+=100", alpha: 0, ease: Expo.easeOut}, '-=1')
		
		.staggerTo([this.can1, this.oldp, this.newp], .6, {x:'-=200', alpha: 0, ease: Back.easeIn}, .12, '+=.7')
		.to(this.ct, .5, {x: 0, y: 0}, '-=.5')
		.staggerFrom(dt, .8, {x:'+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=.5')
		.staggerFrom(da, .8, {x:0, alpha: 0, ease: Expo.easeOut}, .02, '-=.5')
		.from(this.dates.year, .3, {alpha:0}, '-=.8')
		
		
		.from(this.cal, 1,  {x:'+='+w, ease: Expo.easeOut}, '-=.7')
		.add('nums', '-=1')
		.staggerFrom(nums, .015, {alpha:0}, .2, 'nums')
		.staggerTo(nums, .01, { alpha:0}, .2, 'nums+=.2')
		
		.staggerTo([this.dates, this.cal], .6, {x:'-=200', alpha: 0, ease: Back.easeIn}, .12, '-=.7')
		.from(this.phone, 1, {x:'+='+w, ease: Expo.easeOut})
		.from(this.snow3, 1, {x:'+='+w, ease: Expo.easeOut}, '-=1.1')
		.staggerFrom(tels, .8, {x:'+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=.5')
		.staggerFrom(sns1, .5, { alpha: 0}, .05, '-=2')
		
		.staggerTo([this.tels, this.sns1], .6, {x:'-=200', alpha: 0, ease: Back.easeIn}, .12, '+=.7')
		
		.to(this.phone, .6, {scaleX: 0, scaleY: 0, x: this.map.x, y: this.map.y}, '-=.6')
		.from(this.map, 1, {scaleX: 0, scaleY: 0, ease: Expo.easeOut}, '-=.7')
		
		.staggerFrom(sns2, .5, { alpha: 0}, .05, '-=.2')
		.staggerFrom(t3, .8, {y:'+=50', alpha: 0, ease: Expo.easeOut}, .2, '-=1.5')
		
		
		.staggerTo([this.map, this.sns2, this.t3], .6, {x:'-=200', alpha: 0, ease: Back.easeIn}, .12, '+=.7')
		.staggerTo([this.snow, this.snow2, this.snow3], .5, {alpha: 0}, .04, '-=1.6')
		.to(this.ct, .5, {x: ctx, y: cty}, '-=.5')
		.from(this.can, 1, {x:'+='+w, ease: Expo.easeOut})
		.from(this.snowp, .5, {alpha:0}, '-=1.1')
		
		.from(this.tp.txt, 1, {alpha: 0}, '-=.5')
		.staggerFrom(pa, .8, {x:0, alpha: 0, ease: Expo.easeOut}, .02, '-=.5')
		.from(this.tp.url, .3, {alpha:0}, '-=.8')
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sns2
	this.sns2 = new lib.snowss();
	this.sns2.setTransform(125,12);

	this.timeline.addTween(cjs.Tween.get(this.sns2).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(125,40.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// map
	this.map = new lib.map_1();
	this.map.setTransform(125,161);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	// promo
	this.promo = new lib.promo();
	this.promo.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// snow3
	this.snow3 = new lib.snow_1();
	this.snow3.setTransform(186,238.5);

	this.timeline.addTween(cjs.Tween.get(this.snow3).wait(1));

	// sns1
	this.sns1 = new lib.snowss();
	this.sns1.setTransform(125,57.2);

	this.timeline.addTween(cjs.Tween.get(this.sns1).wait(1));

	// tels
	this.tels = new lib.tels();
	this.tels.setTransform(125,57.6);

	this.timeline.addTween(cjs.Tween.get(this.tels).wait(1));

	// pnone
	this.phone = new lib.phone();
	this.phone.setTransform(125,168,0.493,0.493);

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(1));

	// snow2
	this.snow2 = new lib.snow_1();
	this.snow2.setTransform(61,233.5);

	this.timeline.addTween(cjs.Tween.get(this.snow2).wait(1));

	// cal
	this.dates = new lib.dates();
	this.dates.setTransform(125,62);

	this.cal = new lib.cal();
	this.cal.setTransform(125,166.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cal},{t:this.dates}]}).wait(1));

	// snow
	this.snow = new lib.snow_1();
	this.snow.setTransform(42,218.5);

	this.timeline.addTween(cjs.Tween.get(this.snow).wait(1));

	// price
	this.oldp = new lib.oldprice();
	this.oldp.setTransform(183.9,130.4);

	this.newp = new lib.newprice();
	this.newp.setTransform(163.9,202.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.newp},{t:this.oldp}]}).wait(1));

	// can1
	this.can1 = new lib.can1();
	this.can1.setTransform(25.8,203.5,1,1,0,0,0,-35.7,78);

	this.timeline.addTween(cjs.Tween.get(this.can1).wait(1));

	// tp
	this.tp = new lib.tppp();
	this.tp.setTransform(124.6,223.2);

	this.timeline.addTween(cjs.Tween.get(this.tp).wait(1));

	// sn
	this.snowp = new lib.snow_1();
	this.snowp.setTransform(85.9,209);

	this.timeline.addTween(cjs.Tween.get(this.snowp).wait(1));

	// can
	this.can = new lib.can_1();
	this.can.setTransform(125,115);

	this.timeline.addTween(cjs.Tween.get(this.can).wait(1));

	// ct
	this.ct = new lib.ct_1();
	this.ct.setTransform(262.6,146.6,1,1,0,0,0,131,74);

	this.timeline.addTween(cjs.Tween.get(this.ct).wait(1));

	// bg
	this.instance = new lib.bg();
	this.instance.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,124.1,398,260.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;