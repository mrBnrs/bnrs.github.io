(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/B1.png", id:"B1"},
		{src:"images/B12.png", id:"B12"},
		{src:"images/back.jpg", id:"back"},
		{src:"images/C.png", id:"C"},
		{src:"images/cal.png", id:"cal"},
		{src:"images/can.png", id:"can"},
		{src:"images/D.png", id:"D"},
		{src:"images/H.png", id:"H"},
		{src:"images/logo_1l.png", id:"logo_1l"},
		{src:"images/P.png", id:"P"},
		{src:"images/table.jpg", id:"table"},
		{src:"images/va.png", id:"va"},
		{src:"images/ve.png", id:"ve"},
		{src:"images/wo_w.png", id:"wo_w"},
		{src:"images/wom.png", id:"wom"}
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



(lib.B1 = function() {
	this.initialize(img.B1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.B12 = function() {
	this.initialize(img.B12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,43);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,374);


(lib.C = function() {
	this.initialize(img.C);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.cal = function() {
	this.initialize(img.cal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,118);


(lib.can = function() {
	this.initialize(img.can);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,150);


(lib.D = function() {
	this.initialize(img.D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.H = function() {
	this.initialize(img.H);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.logo_1l = function() {
	this.initialize(img.logo_1l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,55);


(lib.P = function() {
	this.initialize(img.P);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,79);


(lib.va = function() {
	this.initialize(img.va);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.ve = function() {
	this.initialize(img.ve);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.wo_w = function() {
	this.initialize(img.wo_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,699,90);


(lib.wom = function() {
	this.initialize(img.wom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,300);


(lib.wom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wom();
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-150,239,300);


(lib.wht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bThMAAAgnBMAu3AAAMAAAAnBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-124.9,300,250);


(lib.table_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.table();
	this.instance.setTransform(-230,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-34,460,79);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgVAvQgGgCgEgEQgJgHAAgMQAAgIACgFQADgFAFgEQAHgDAKgBQAKgCAPAAIADAAQAAgKgCgFQgBgHgCgDQgFgIgHAAIgHABIgFADIgFAFQgCAEgBAFIgLAAIABgKQAAgFAEgEQADgFAJgBQAIgBAIgBQAJABAIACQAIACAFAGQAGAFACAIQADAIAAALIAAA0IgRAAIgHgJIgBAAIgGAFQgCACgFACQgDABgGABQgIAAgHgCgAgHAGQgGAFAAALQAAAIADAEQAEAFAGAAQACAAADgCIAGgFIAEgGIAAgZIgDAAQgMgBgHAGg");
	this.shape.setTransform(73,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAdApQgFgGgDgHQgCgHAAgKIAAghIgaBDIgHAAIgjhFIAABFIgKAAIAAhcIAZAAIAdA6IAYg8IAaAAIAAA8QAAARADAHQADAJAJABIAAAFQgWAAgJgJg");
	this.shape_1.setTransform(62.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AgkBDIAAhpIAAgIIgCgGIgEgEQgDgCgEABIgDAAIAAgHIAVAAQAGAAAEACQAEACADAFIAEgDIAGgEIAFgDIAKgBQAKAAAIAEQAIAEAFAHQAFAHADAIQADAKgBAJQABAKgDAIQgDAIgFAHQgGAHgHADQgJAFgLAAIgJgBIgEgCIgGgEIAAArgAgDg2IgIAGIABACIAAAEIAAADIAAA2IAGAEIAEACIAFABQAGAAAEgDQAEgDACgGQACgFABgGIABgQIgBgPQgBgIgCgFQgCgFgEgEQgEgDgFAAQgGAAgDADg");
	this.shape_2.setTransform(48.9,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AgTAsQgJgDgGgHQgGgHgDgIQgDgKgBgJQABgIADgKQADgIAGgHQAGgHAJgEQAKgEAJAAQALAAAJAEQAIAEAHAHQAGAHADAIQAEAKAAAIQAAAJgEAKQgDAIgGAHQgHAHgIADQgJAFgLAAQgJAAgKgFgAgIgkQgEAEgCAFIgEANQgBAHAAAHQAAAIABAHIAEANQACAGAEADQAFADADAAQAFAAAEgDQAEgDACgGIAFgNIABgPIgBgOIgFgNQgCgFgEgEQgEgDgFAAQgDAAgFADg");
	this.shape_3.setTransform(38.1,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AgMBVIAAgkQgLgCgKgDQgJgEgGgHQgHgGgDgIQgDgKgBgJQABgIADgKQADgIAHgGQAGgHAJgEQAKgDALgCIAAgJQAAgKgCgFIgEgEQgDgBgFAAIgCAAIAAgHIAZAAQADABADABQAEABABADQADADABAFIABANIAAAJQAMACAIADQAKAEAHAHQAGAGADAIQADAKAAAIQAAAJgDAKQgDAIgGAGQgHAHgKAEQgIADgMACIAAAkgAAMApQAEAAAFgDQAEgEADgEQADgGACgHQACgIAAgJQAAgIgCgIQgCgIgDgFQgDgFgEgDQgFgCgEgBgAgUglQgEADgDAFQgDAFgCAIQgCAIgBAIQABAJACAIQACAHADAGQADAEAEAEQAFADAEAAIAAhRQgEABgFACg");
	this.shape_4.setTransform(25.6,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AgsAvIgFgBIAAgFQAFgBAEgFQAFgDADgGIAMgVQgLgCgHgEQgFgHgBgKQAAgIAEgGQADgFAGgEQAGgDAIgBQAIgCAJAAIAzAAIAAAGIgBAAQgKAAgCAFQgDAGAAAJIAABCIgaAAIAAgnIgJAAIgKAYIgEAIIgGAFQgDADgEABIgKABgAgEgmIgHADQgCADgCADQgCADAAAGQAAALAGAEQAGAFAFAAIAHgBIACAAIAAgkIgCgBIgHgBg");
	this.shape_5.setTransform(8.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AgVAvQgGgCgFgEQgIgHAAgMQAAgIACgFQACgFAHgEQAGgDAKgBQALgCAOAAIADAAQAAgKgBgFQgBgHgDgDQgFgIgHAAIgHABIgGADIgEAFQgCAEgBAFIgLAAIAAgKQABgFAEgEQAEgFAHgBQAJgBAIgBQAJABAIACQAIACAFAGQAFAFADAIQADAIAAALIAAA0IgRAAIgHgJIgBAAIgGAFQgDACgEACQgDABgGABQgIAAgHgCgAgHAGQgGAFAAALQAAAIAEAEQADAFAGAAQADAAADgCIAFgFIAEgGIAAgZIgDAAQgNgBgGAGg");
	this.shape_6.setTransform(-2.1,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AAhAvIgJgBQgDgCgCgDQgCgDgBgFIgBgMIAAgRIgdAAIAAArIgaAAIAAhDQgBgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAFABADABQADABACADQACADACAFIABAMIAAARIAdAAIAAgrIAaAAIAABDQABAIACAGQABACADACQADABAFAAIACAAIAAAHg");
	this.shape_7.setTransform(-12.6,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223249").s().p("AgRBCQgJgCgGgHQgMgNAAgYIAAgGQgBgNADgQQADgNAEgIQAFgHAGgEQAHgEAIgBIAagHIANgEQAEgCABgEIAHAAIAAAQQAAAEgDADQgCAFgIABIgeAIQgHABgFADQgFADgEAEQgEAFgCAHQgDAIgBAHIABAAIAGgJIAIgIQAIgHAMAAQAJAAAIADQAIADAGAFQAFAGAEAGQACAIAAAMQAAALgCAJQgEAIgGAGQgGAFgJADQgIADgKAAQgJAAgIgEgAgFgHIgGAFQgDADgCAGQgBAIAAAKQAAALABAHQACAHADAEQADAEADABIAFACIAGgCQADgBADgEQADgEACgHQABgHAAgLQAAgKgBgIQgCgGgDgDIgGgFIgGgCIgFACg");
	this.shape_8.setTransform(-23.8,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223249").s().p("AgSAsQgKgDgFgHQgGgHgEgIQgEgKAAgJQAAgIAEgKQAEgIAGgHQAFgHAKgEQAIgEAKAAQALAAAJAEQAIAEAHAHQAGAHAEAIQACAKAAAIQAAAJgCAKQgEAIgGAHQgHAHgIADQgJAFgLAAQgKAAgIgFgAgHgkQgFAEgCAFIgEANQgCAHAAAHQAAAIACAHIAEANQACAGAFADQADADAEAAQAFAAAEgDQAEgDADgGIADgNIABgPIgBgOIgDgNQgDgFgEgEQgEgDgFAAQgEAAgDADg");
	this.shape_9.setTransform(-34.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#223249").s().p("AAuA+IgDgQIgEgKQgDgDgEgBQgEgBgEAAIgvAAQgEAAgEABQgEABgDADQgDAFgCAFQgBAGgBAKIgKAAIAAgiQAAgDACgBQACgCADAAIAHAAQAHgQADgOQACgQAAgNIAAgIIgCgGIgFgDQgDgCgFABIAAgHIBXAAIAABUIAGAAQADAAACACQACABAAADIAAAigAgKgdIgBAUIgEAPIgFAQIAlAAIAAhLIgaAAg");
	this.shape_10.setTransform(-46.1,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#223249").s().p("AgcBDIAAgHIAKgBIAIgCQADgCADgFQADgDABgGIADgKIgihOQgGgOgMgCIAAgEIARAAQAJABAHAEQAHAEADAIIAVAyIAZhBIAKAAIgoBpQgDAJgEAFIgFAIQgEADgEABIgKABg");
	this.shape_11.setTransform(-57.1,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#223249").s().p("AAYAvIAAhEIgiBEIgYAAIAAhDQAAgJgCgFQgCgDgCgBQgDgCgEABIgCAAIAAgHIAXAAQAFABAEABQAEABACADQABADABAFIABAMIAAAqIAihEIAZAAIAABdg");
	this.shape_12.setTransform(-73.1,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.2,-12.8,160.6,25.7);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgPAtQgJgEgGgHQgGgGgEgJQgCgJAAgKQAAgKADgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAFAEQAHAGADAHQAEAIAAAIIAAAFIgBADIAAADIg6AAQgBAKACAHQABAHAEAEQAGAJAHAAQALAAAGgGQAHgEAFgHIAGAFIgFAGQgDAFgEACQgFAEgGACQgGACgJAAQgIgBgIgDgAARgEQAAgKgCgHQgBgGgDgEQgBgEgDgCIgHgCQgCABgDABQgDACgDAEQgCAEgBAGQgCAHABAKIAgAAIAAAAg");
	this.shape.setTransform(91.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAZAvIAAhEIgiBEIgZAAIAAhDQABgJgDgFQgBgDgEgBQgCgCgEABIgDAAIAAgHIAYAAQAFABAEABQAEABACADQACADAAAFIABAMIAAAqIAihEIAZAAIAABdg");
	this.shape_1.setTransform(80.2,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AAhAvIgJgBQgDgCgCgDQgCgDgBgFIgBgMIAAgRIgdAAIAAArIgaAAIAAhDQgBgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAEABAEABQADABACADQACADACAFIABAMIAAARIAdAAIAAgrIAaAAIAABDQABAIACAGQABACADACQADABAFAAIACAAIAAAHg");
	this.shape_2.setTransform(69.4,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AgPAtQgJgEgGgHQgGgGgDgJQgDgJAAgKQgBgKAEgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAFAEQAGAGAEAHQADAIAAAIIAAAFIAAADIgBADIg5AAQAAAKABAHQABAHADAEQAHAJAHAAQALAAAHgGQAGgEAFgHIAGAFIgFAGQgDAFgEACQgFAEgHACQgGACgHAAQgJgBgIgDgAAQgEQAAgKgBgHQgBgGgCgEQgCgEgEgCIgGgCQgCABgDABQgDACgDAEQgCAEgBAGQgBAHAAAKIAfAAIAAAAg");
	this.shape_3.setTransform(58.6,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AAhAvIgJgBQgDgCgCgDQgCgDgBgFIgBgMIAAgRIgdAAIAAArIgaAAIAAhDQgBgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAFABADABQADABACADQACADACAFIABAMIAAARIAdAAIAAgrIAaAAIAABDQABAIACAGQABACADACQADABAFAAIACAAIAAAHg");
	this.shape_4.setTransform(47.7,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AgVAvQgGgCgFgEQgIgHAAgMQAAgIACgFQADgFAFgEQAHgDAKgBQAKgCAPAAIADAAQAAgKgCgFQAAgHgDgDQgFgIgHAAIgGABIgHADIgEAFQgCAEgBAFIgLAAIAAgKQABgFAEgEQADgFAJgBQAIgBAIgBQAKABAHACQAIACAFAGQAFAFADAIQADAIAAALIAAA0IgRAAIgHgJIgBAAIgGAFQgDACgEACQgDABgGABQgJAAgGgCgAgHAGQgGAFAAALQAAAIAEAEQADAFAGAAQACAAADgCIAGgFIAEgGIAAgZIgDAAQgMgBgHAGg");
	this.shape_5.setTransform(36.7,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AgkBDIAAhpIAAgIIgCgGIgEgEQgDgCgEABIgDAAIAAgHIAVAAQAGAAAEACQAEACADAFIAEgDIAGgEIAFgDIAKgBQAKAAAIAEQAIAEAFAHQAFAHADAIQADAKgBAJQABAKgDAIQgDAIgFAHQgGAHgHADQgJAFgLAAIgJgBIgEgCIgGgEIAAArgAgDg2IgIAGIABACIAAAEIAAADIAAA2IAGAEIAEACIAFABQAGAAAEgDQAEgDACgGQACgFABgGIABgQIgBgPQgBgIgCgFQgCgFgEgEQgEgDgFAAQgGAAgDADg");
	this.shape_6.setTransform(26,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AAeAvQgKAAgGgFQgFgEgFgHIgIgRIgaAhIgOAAIAigqIgTgfQgEgGgFgFQgFgDgEgBIAAgFIASAAQALABAFAEQAGAEAEAHIAIARIAaghIANAAIghAqIATAeQAEAHAFAFQAFADAFABIAAAFg");
	this.shape_7.setTransform(15.7,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223249").s().p("AgQAtQgIgEgGgHQgGgGgDgJQgDgJgBgKQAAgKAEgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAGAEQAFAGAEAHQAEAIgBAIIAAAFIAAADIgBADIg6AAQAAAKACAHQABAHADAEQAHAJAIAAQAKAAAHgGQAGgEAFgHIAGAFIgFAGQgDAFgFACQgEAEgHACQgFACgIAAQgJgBgJgDgAAQgEQABgKgCgHQgBgGgCgEQgCgEgEgCIgGgCQgCABgDABQgDACgDAEQgCAEgBAGQgCAHAAAKIAgAAIAAAAg");
	this.shape_8.setTransform(0.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223249").s().p("AgSAsQgJgDgHgHQgFgHgEgIQgEgKABgJQgBgIAEgKQAEgIAFgHQAHgHAJgEQAIgEAKAAQALAAAJAEQAIAEAHAHQAGAHADAIQADAKAAAIQAAAJgDAKQgDAIgGAHQgHAHgIADQgJAFgLAAQgKAAgIgFgAgIgkQgDAEgDAFIgEANQgBAHAAAHQAAAIABAHIAEANQADAGADADQAFADADAAQAFAAAEgDQAEgDADgGIADgNIABgPIgBgOIgDgNQgDgFgEgEQgEgDgFAAQgDAAgFADg");
	this.shape_9.setTransform(-9.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#223249").s().p("AAiAvIgJgBQgEgCgCgDQgCgDgBgFIAAgMIAAgRIgfAAIAAArIgaAAIAAhDQAAgJgCgFQgCgDgCgBQgDgCgEABIgCAAIAAgHIAXAAQAFABAEABQAEABACADQABADABAFIABAMIAAARIAfAAIAAgrIAaAAIAABDQAAAIACAGQABACADACQADABAEAAIACAAIAAAHg");
	this.shape_10.setTransform(-21.1,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#223249").s().p("AgfAvIAAhDQAAgJgDgFQgBgDgDgBQgDgCgFABIgBAAIAAgHIAXAAQAGABADABQADABACADQACADABAFIABAMIAAAMIANAAQAKABAHACQAHABAGADQAMAGAAAOQAAAHgEAFQgCAFgGAEQgGADgHABQgHADgKAAgAgBAAIgFAAIAAAlIAFABIACABIAIgBQAEgBACgDQADgCABgEQADgDAAgGQAAgGgDgEQgBgEgDgCQgCgCgEgBIgIAAg");
	this.shape_11.setTransform(-32.2,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#223249").s().p("AgrAvIgGgBIAAgFQAGgCAEgDQAFgCADgIQAEgHACgMQACgKAAgUIgBgHQAAgDgCgDIgFgDQgDgCgEAAIAAgGIBYAAIAABcIgaAAIAAhTIgbAAIAAAPQAAAUgCAMQgDAOgEAJQgFAIgGAEQgGAEgIAAg");
	this.shape_12.setTransform(-43.3,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#223249").s().p("AgPAtQgJgEgGgHQgGgGgEgJQgCgJAAgKQgBgKAEgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAFAEQAGAGAEAHQAEAIAAAIIAAAFIgBADIgBADIg5AAQgBAKACAHQACAHACAEQAGAJAIAAQALAAAGgGQAHgEAFgHIAGAFIgFAGQgDAFgEACQgFAEgHACQgGACgHAAQgJgBgIgDgAARgEQAAgKgCgHQgBgGgDgEQgBgEgEgCIgGgCQgCABgDABQgDACgDAEQgCAEgBAGQgCAHABAKIAgAAIAAAAg");
	this.shape_13.setTransform(-53.4,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#223249").s().p("AgLAvIAAhUIgGAAQgJAAgFAGQgFAEAAAMIgGAAIAAgPIABgGIACgEIAEgEQADgBAFgBIBGAAIAAAJIgeAAIAABUg");
	this.shape_14.setTransform(-63,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#223249").s().p("AAYAvIAAhEIgiBEIgXAAIAAhDQgBgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAFABADABQADABACADQACADACAFIABAMIAAAqIAihEIAXAAIAABdg");
	this.shape_15.setTransform(-74.1,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#223249").s().p("AgrAvIgGgBIAAgFQAGgCAEgDQAFgCADgIQAEgHACgMQACgKAAgUIgBgHQAAgDgCgDIgFgDQgDgCgEAAIAAgGIBYAAIAABcIgaAAIAAhTIgbAAIAAAPQAAAUgCAMQgDAOgEAJQgFAIgGAEQgGAEgIAAg");
	this.shape_16.setTransform(-85.4,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#223249").s().p("AA5BUQgBgLgCgHQgCgHgDgFQgEgEgEgCQgEgBgFAAIg/AAQgFAAgEABQgFACgDAEQgDAFgCAHQgCAHgBALIgKAAIAAgnQAAgDACgCQACgCADAAIAHAAIAIgWQAEgMABgKQAEgYAAgbQAAgJgCgFQgCgDgDgCQgCgBgFAAIgCAAIAAgGIBoAAIAAB5IAHAAQADAAACACQACACAAADIAAAngAgQglIgDAeIgFAYQgDALgEAKIA6AAIAAhwIgqAAg");
	this.shape_17.setTransform(-97.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-12.8,212.7,25.7);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-3.8,-33.8,4.8,33.7).s().p("AgwFOIgygIIgugNIADgbIBXAJIArgBQBGgGAkg9QAjg9gPh6IgiAZIgoATQgYAJgcACQg5AEgogNQgpgNgbgbQgagbgQglQgQgngGgxQgGgqAKgoQAJgnAYggQAZghAogUQAogVA4gEQA5gEAwARQAwASAjApQAjAnAXA+QAXA9AKBTQALBVgIBBQgJBBgdAqQgcAqgwAXQgwAYhCAFgAglkiQgXACgQAPQgRAPgJAYQgJAYgCAgQgCAfAEAjQALBVAdAqQAOAVAVAKQAVAKAZgCQAVgBASgIIAfgTIAVgTQAGgFACgDQgKhOgPg4QgPg4gTgjQgTgjgXgQQgSgNgVAAIgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-33.5,48.8,67.1);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-5.1,-31.9,3,31.9).s().p("Ag9FLQgsgGgjgSQgkgSgXgeQgXgdgFgsQgFgiAKgbQAKgcAUgWQATgXAbgSIA5giIg5gaQgbgOgVgSQgWgSgNgXQgOgYgEgeQgGgvAOggQANgiAagVQAbgUAngLQAmgLAsgDQAsgEAmAGQApAEAgAQQAfAQAVAdQAUAcAGAsQAEAcgHAYQgIAXgPAVQgPATgWAQIgvAfIA+AeQAeAOAYAVQAYAUAQAbQARAbAEAjQAGAwgOAiQgPAigeAXQgeAWgpANQgsANgxADIgkACQgdAAgbgEgAhYBNQgSAjAIBBQAEAfALAXQAKAWASAOQARAOAUAFQATAGAYgBQAZgCATgJQATgIANgQQAbgegHg3QgEgegNgWQgPgXgVgSQgWgRgbgOIg3gbQgiAVgSAkgAhLkaQgOAFgMANQgLANgGAUQgFAUAEAeQADAXAMASQAMATATARIAqAcIAxAYQAXgVAJgdQAJgdgHg1QgEgggLgWQgLgVgPgLQgMgMgQgEIgegDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-33.5,50.1,67.1);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-0.8,-31.5,7.3,32.2).s().p("ABgkSIihALQgeACgVAJQgWAIgNAPQgbAdAHAzIgdACIgKhIIAAgcQABgOAJgMQAHgLAPgHQAPgIAYgCIFZgZIAFArIilJaIhyAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-32.7,42.3,65.5);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-4.7,-32.4,3.6,32.7).s().p("AiQEIQgkgogXg+QgXg+gKhTQgWiqA5hVQA6hWCFgJQAegCAdADIAyAIIAuANIgCAaIiCgHQgiADgbARQgcAQgRAfQgjA9APB6IAhgaIApgSQAXgJAdgCQA4gEAoANQApANAbAbQAbAcAQAkQAPAoAHAwQAFAqgJAoQgKAngYAhQgZAggnAUQgoAUg4AEIgXABQhmAAg/hHgAgIg0QgWABgSAJIggATIgUASIgHAHQAKBPAPA5QAPA4ASAjQATAiAXAPQAVAQAYgCQAXgCARgPQAQgPAKgZQAIgXADggQADgfgFgkQgLhUgcgpQgbgpgvAAIgIABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-33.5,48.8,67.1);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-4.5,-32.8,4,34).s().p("AgtFIQgggGgdgLQgagLgZgRIgwgpIAZgaQAVAVAXAOQAWAPAYAJQAwARApgDQAagCAXgLQAXgKAPgUQAQgUAHgeQAFgfgFgqQgFglgNgbQgNgagWgRQgtgfhFAFIgpAGIhMAWIgrgiIgbkgIFzgaIAGAqIkEATIATDdIBTgLQAkgDAsAGQAtAGAoASQAnATAdAiQAdAjAHA4QAEAegDAZQgDAagKAUQgVApgiAZQgjAZgpAMQgpALgiADIgZABQgYAAgVgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-33.1,49.2,66.3);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-5.6,-30.3,2.3,32.1).s().p("AAyCcIkwAWIgGgmIEUnDIBjgGIA2GnIBWgHIAGArIhXAGIAVCiIh8AIgAjCCDIDvgRIgok3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-31.9,52.2,63.8);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-4.7,-32,3.6,33.5).s().p("AgnFJQglgFgegMQgdgLgagSIgwgnIAYgeIAuAlIAvAYQAvASApgDQAagCAXgKQAYgKAPgUQAQgUAGgeQAHgegFgnQgFgngNgbQgNgcgTgRQgUgRgXgFQgWgGgYACIgoAFIg7ARIgbggIDkkHIiqAMQgcACgVAJQgWAIgNAPQgcAdAGAzIgcACIgKhIIAAgcQACgOAHgMQAIgLAQgHQAOgIAZgCIFCgXIAFArIjQDwIA7gIQAhgCAlAHQAmAIAjAUQAiAUAaAiQAZAjAHA0QAEAegEAZQgCAZgKAUQgVAoggAYQghAYglALQgnAKgaACIgnABQgVAAgVgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-33.2,48.8,66.4);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-4.6,-32.8,3.6,31.6).s().p("Ai5EOICci+QAcgnATgoQAVgmALgnQAMgngFglQgEglgNgaQgMgZgRgRQgPgQgUgHQgUgHgUACQgeACgYAMQgZAMgSAVQgSAVgJAhQgKAhgBAsIgiACIgHhKQgCgmAPgXQAVghAwgbQAYgMAagIQAcgHAegDQAggCAmAEQAoAEAkASQAjASAaAjQAbAiAIA6QAFAtgQAtQgQAugbAqQgdAtgkAoIisC1IDEgOQA5gEAcgeQAOgOAFgTQAFgVgDgZIAdgCIAJBHIAAAdQgBAOgIALQgIALgPAIQgPAHgZACIlaAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-33.2,48.3,66.4);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],-4.7,-30.1,3.1,31).s().p("AgpjEIhNA7IgbgcICCiTIBRgGIBQJ0Ih8AJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-31.9,29.4,63.9);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAYAvIAAhEIghBEIgZAAIAAhDQAAgJgCgFQgCgDgCgBQgDgCgEABIgCAAIAAgHIAXAAQAFABAEABQAEABACADQABADABAFIABAMIAAAqIAihEIAZAAIAABdg");
	this.shape.setTransform(39.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAZAvIAAhEIgiBEIgZAAIAAhDQABgJgDgFQgBgDgEgBQgCgCgEABIgDAAIAAgHIAYAAQAFABAEABQAEABACADQACADAAAFIABAMIAAAqIAihEIAZAAIAABdg");
	this.shape_1.setTransform(28.5,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AAhAvIgJgBQgDgCgCgDQgCgDgBgFIgBgMIAAgRIgdAAIAAArIgaAAIAAhDQgBgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAEABAEABQADABACADQACADACAFIABAMIAAARIAdAAIAAgrIAaAAIAABDQABAIACAGQABACADACQADABAFAAIABAAIAAAHg");
	this.shape_2.setTransform(17.6,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AgPAtQgJgEgGgHQgGgGgDgJQgDgJAAgKQgBgKAEgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAFAEQAGAGAEAHQADAIAAAIIAAAFIAAADIgBADIg5AAQAAAKABAHQABAHADAEQAGAJAIAAQALAAAHgGQAGgEAFgHIAGAFIgFAGQgDAFgEACQgFAEgHACQgGACgHAAQgJgBgIgDgAAQgEQAAgKgBgHQgBgGgCgEQgCgEgEgCIgGgCQgCABgDABQgDACgDAEQgCAEgBAGQgBAHAAAKIAfAAIAAAAg");
	this.shape_3.setTransform(6.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AAXAvIAAgkIgIACIgKABQgGABgIgCQgHgBgEgFQgGgDgCgEQgDgGgBgHIAAgHQAAgJgCgFQgBgDgDgBQgDgCgEABIgCAAIAAgHIAXAAQAGABADABQAEABACADQABADABAFIABAMIAAAHQAAALAFADQADAEAHAAIAHAAIAHgCIAAgxIAaAAIAABdg");
	this.shape_4.setTransform(-4.4,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AgQAtQgIgEgGgHQgGgGgEgJQgDgJAAgKQABgKADgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAJAAAIADQAIAEAFAEQAHAGADAHQADAIABAIIAAAFIgBADIAAADIg7AAQABAKABAHQACAHADAEQAFAJAJAAQAKAAAGgGQAHgEAFgHIAGAFIgFAGQgDAFgFACQgEAEgGACQgHACgIAAQgIgBgJgDgAARgEQgBgKgBgHQgBgGgDgEQgCgEgCgCIgHgCQgCABgDABQgDACgCAEQgDAEgBAGQgBAHgBAKIAhAAIAAAAg");
	this.shape_5.setTransform(-14.4,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AgrAvIgGgBIAAgFQAGgCAEgDQAFgCADgIQAEgHACgMQACgKAAgUIgBgHQAAgDgCgDIgFgDQgDgCgEAAIAAgGIBYAAIAABcIgaAAIAAhTIgbAAIAAAPQAAAUgCAMQgDAOgEAJQgFAIgGAEQgGAEgIAAg");
	this.shape_6.setTransform(-25.7,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AghAvIAAhDQABgJgDgFQgBgDgEgBQgCgCgEABIgBAAIAAgHIAzAAQAJABAHABQAHACAGADQALAFAAANQABAJgIAEQgCAEgGABIgKACQAMABAJAFQAEADACAEQACADAAAGQAAAGgDAFQgCAFgHADQgLAGgVABgAgHAlIAFABIACABQAJgBAHgEQAFgFAAgIQAAgFgCgEQgBgDgDgDIgHgDIgIgBIgHAAgAgCglIgFABIAAAfIAHAAQAGAAAFgFQAHgEgBgHQAAgEgBgEIgEgEIgFgEIgHgBg");
	this.shape_7.setTransform(-41.4,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-12.8,96.6,25.7);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AggAvIAAhDQABgJgDgFQgBgDgEgBQgCgCgEABIgDAAIAAgHIAYAAQAFABAEABQADABADADQACADABAFIAAAMIAAAMIAOAAQAIABAIACQAIABAFADQALAGAAAOQAAAHgCAFQgDAFgGAEQgFADgIABQgIADgIAAgAgBAAIgFAAIAAAlIAFABIADABIAHgBQAEgBADgDQACgCACgEQABgDAAgGQAAgGgBgEQgCgEgCgCQgDgCgEgBIgHAAg");
	this.shape.setTransform(36.3,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("ABDA+QgBgKgCgGQgBgFgDgFQgDgDgEgBQgEgBgFAAIhnAAIAAhDQAAgJgDgFQgBgDgDgBQgCgCgFABIgCAAIAAgHIAYAAQAFABADABQAEABACADQACADABAFIABAMIAAA6IAXAAIAAhUIAYAAIAABUIAXAAIAAhUIAaAAIAABUIAGAAQADAAACACQACABAAADIAAAig");
	this.shape_1.setTransform(23.6,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AgSAsQgJgDgHgHQgFgHgEgIQgEgKABgJQgBgIAEgKQAEgIAFgHQAHgHAJgEQAJgEAJAAQALAAAJAEQAJAEAGAHQAGAHADAIQADAKAAAIQAAAJgDAKQgDAIgGAHQgGAHgJADQgJAFgLAAQgJAAgJgFgAgIgkQgDAEgDAFIgEANQgCAHABAHQgBAIACAHIAEANQADAGADADQAEADAEAAQAFAAAEgDQAEgDADgGIADgNIABgPIgBgOIgDgNQgDgFgEgEQgEgDgFAAQgEAAgEADg");
	this.shape_2.setTransform(10.5,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AAcApQgEgGgDgHQgCgHAAgKIAAghIgaBDIgHAAIgjhFIAABFIgKAAIAAhcIAZAAIAdA6IAYg8IAaAAIAAA8QAAARADAHQADAJAJABIAAAFQgWAAgKgJg");
	this.shape_3.setTransform(-1.1,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AgSAsQgJgDgHgHQgFgHgEgIQgEgKABgJQgBgIAEgKQAEgIAFgHQAHgHAJgEQAJgEAJAAQALAAAJAEQAJAEAGAHQAGAHADAIQADAKAAAIQAAAJgDAKQgDAIgGAHQgGAHgJADQgJAFgLAAQgJAAgJgFgAgIgkQgDAEgDAFIgEANQgCAHABAHQgBAIACAHIAEANQADAGADADQAEADAEAAQAFAAAEgDQAEgDADgGIADgNIABgPIgBgOIgDgNQgDgFgEgEQgEgDgFAAQgEAAgEADg");
	this.shape_4.setTransform(-13.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AAXAvIAAhUIgeAAIAABUIgaAAIAAhDQAAgJgDgFQgBgDgDgBQgCgCgFABIgBAAIAAgHIBhAAIAABdg");
	this.shape_5.setTransform(-25.4,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AAYAvIAAhEIgiBEIgYAAIAAhDQAAgJgCgFQgCgDgCgBQgDgCgEABIgCAAIAAgHIAXAAQAFABAEABQAEABACADQABADABAFIABAMIAAAqIAihEIAZAAIAABdg");
	this.shape_6.setTransform(-41.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-12.8,97.5,25.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgVAvQgGgCgEgEQgJgHAAgMQAAgIACgFQADgFAGgEQAGgDAKgBQALgCAOAAIADAAQAAgKgBgFQgBgHgDgDQgFgIgHAAIgHABIgGADIgEAFQgCAEgBAFIgLAAIAAgKQABgFAEgEQAEgFAHgBQAJgBAIgBQAJABAIACQAIACAFAGQAGAFACAIQADAIAAALIAAA0IgRAAIgHgJIgBAAIgGAFQgDACgEACQgDABgGABQgIAAgHgCgAgHAGQgGAFAAALQAAAIAEAEQADAFAGAAQADAAADgCIAFgFIAEgGIAAgZIgDAAQgNgBgGAGg");
	this.shape.setTransform(60.1,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAWAsQgHgDgHgKIgRgZIAAAoIgaAAIAAhDQAAgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAYAAQAFABAEABQADABACADQACADABAFIABAMIAAATIAWgdIAGgHIAGgEIAIgEIAJgBIAEAAIAAAGQgGgBgFADQgFADgEAFIgTAYIAaAgQAFAIAFADQAFADAEABIAAAGIgGABIgIABQgIgBgIgDg");
	this.shape_1.setTransform(50.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AAZAvIAAhEIgiBEIgZAAIAAhDQAAgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAEABAEABQAEABABADQADADABAFIABAMIAAAqIAihEIAYAAIAABdg");
	this.shape_2.setTransform(38.6,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AgLAvIAAhUIgGAAQgJAAgFAGQgFAEAAAMIgGAAIAAgPIAAgGIADgEIAEgEQADgBAFgBIBGAAIAAAJIgeAAIAABUg");
	this.shape_3.setTransform(29,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AAWAsQgHgDgHgKIgRgZIAAAoIgaAAIAAhDQAAgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAYAAQAFABAEABQADABACADQACADABAFIABAMIAAATIAWgdIAGgHIAGgEIAIgEIAJgBIAEAAIAAAGQgGgBgFADQgFADgEAFIgTAYIAaAgQAFAIAFADQAFADAEABIAAAGIgGABIgIABQgIgBgIgDg");
	this.shape_4.setTransform(19,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AgVAvQgGgCgEgEQgJgHAAgMQAAgIACgFQADgFAFgEQAHgDAKgBQAKgCAPAAIADAAQAAgKgCgFQgBgHgCgDQgFgIgHAAIgHABIgFADIgFAFQgCAEgBAFIgLAAIABgKQAAgFAEgEQADgFAJgBQAIgBAIgBQAJABAIACQAIACAFAGQAGAFACAIQADAIAAALIAAA0IgRAAIgHgJIgBAAIgGAFQgCACgFACQgDABgGABQgIAAgHgCgAgHAGQgGAFAAALQAAAIADAEQAEAFAGAAQACAAADgCIAGgFIAEgGIAAgZIgDAAQgMgBgHAGg");
	this.shape_5.setTransform(8.6,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AgrAvIgGgBIAAgFQAGgCAEgDQAFgCADgIQAEgHACgMQACgKAAgUIgBgHQAAgDgCgDIgFgDQgDgCgEAAIAAgGIBYAAIAABcIgaAAIAAhTIgbAAIAAAPQAAAUgCAMQgDAOgEAJQgFAIgGAEQgGAEgIAAg");
	this.shape_6.setTransform(-2.3,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AAZAvIAAhEIgiBEIgYAAIAAhDQgBgJgCgFQgCgDgDgBQgCgCgFABIgCAAIAAgHIAZAAQAEABAEABQADABACADQACADACAFIABAMIAAAqIAihEIAXAAIAABdg");
	this.shape_7.setTransform(-13.7,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223249").s().p("AgLBVIAAgkQgMgCgKgDQgJgEgGgHQgHgGgDgIQgEgKAAgJQAAgIAEgKQADgIAHgGQAGgHAJgEQAKgDAMgCIAAgJQgBgKgCgFIgEgEQgDgBgFAAIgCAAIAAgHIAZAAQADABADABQADABACADQADADABAFIABANIAAAJQALACAJADQAKAEAHAHQAGAGADAIQAEAKgBAIQABAJgEAKQgDAIgGAGQgHAHgKAEQgJADgLACIAAAkgAAMApQAEAAAFgDQAEgEADgEQADgGACgHQACgIAAgJQAAgIgCgIQgCgIgDgFQgDgFgEgDQgFgCgEgBgAgUglQgEADgDAFQgEAFgBAIQgDAIAAAIQAAAJADAIQABAHAEAGQADAEAEAEQAFADAEAAIAAhRQgEABgFACg");
	this.shape_8.setTransform(-25.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223249").s().p("AgSAsQgKgDgGgHQgFgHgEgIQgDgKAAgJQAAgIADgKQAEgIAFgHQAGgHAKgEQAIgEAKAAQALAAAJAEQAIAEAHAHQAGAHAEAIQACAKAAAIQAAAJgCAKQgEAIgGAHQgHAHgIADQgJAFgLAAQgKAAgIgFgAgHgkQgEAEgDAFIgEANQgBAHAAAHQAAAIABAHIAEANQADAGAEADQAEADADAAQAFAAAEgDQAEgDADgGIADgNIABgPIgBgOIgDgNQgDgFgEgEQgEgDgFAAQgDAAgEADg");
	this.shape_9.setTransform(-38.3,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#223249").s().p("AgkBDIAAhpIAAgIIgCgGIgEgEQgDgCgFABIgCAAIAAgHIAUAAQAIAAADACQAEACACAFIAFgDIAFgEIAGgDIAJgBQALAAAIAEQAHAEAGAHQAGAHACAIQACAKAAAJQAAAKgCAIQgCAIgGAHQgFAHgJADQgHAFgMAAIgJgBIgEgCIgFgEIAAArgAgDg2IgIAGIABACIABAEIAAADIAAA2IAEAEIAFACIAGABQAFAAAEgDQAEgDACgGQACgFACgGIAAgQIAAgPQgCgIgCgFQgCgFgDgEQgEgDgFAAQgHAAgDADg");
	this.shape_10.setTransform(-49.8,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#223249").s().p("AAhBCIAAh6IgyAAIAAB6IgZAAIAAhoQAAgKgDgFIgEgEQgDgBgFAAIgBAAIAAgHIB1AAIAACDg");
	this.shape_11.setTransform(-62.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-12.8,141.8,25.7);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],0,-20.6,0,20.7).s().p("AhGC/QgdgPgSgbQgMgSgPgvQgIgmAAguQAAgtAIgmQAJgmASgbQAJgNALgLQAMgKAPgIQAdgPApAAQAqAAAdAPQAPAIAMAKQALALAJANQASAbAJAmQAIAmAAAtQAAAugIAmQgPAvgMASQgJANgLALQgMALgPAHQgdAPgqAAQgpAAgdgPgAg1iHQgQArAABcQAAAuAEAiQAEAiAIAWQARAsAkAAQAlAAARgsQAIgWAEgiQAEgiAAguQAAhcgQgrQgRgrglAAQgkAAgRArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-20.6,30.7,41.3);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40B8D7","#6061AC"],[0,1],0.1,-19.6,0.1,19.6).s().p("AAdDCIAAhkIi7AAIAAgYIDLkHIA9AAIAAEEIA1AAIAAAbIg1AAIAABkgAh1BDICSAAIAAi/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-19.4,31.9,39);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ve();
	this.instance.setTransform(-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,25,25);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.B1();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.H();
	this.instance.setTransform(-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,25,25);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.D();
	this.instance.setTransform(-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,25,25);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.B12();
	this.instance.setTransform(-21.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.C();
	this.instance.setTransform(-13,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,26,26);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.P();
	this.instance.setTransform(-12.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,25,25);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.va();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AghAvIAAhDQAAgIgCgGQgBgDgDgBQgDgBgEgBIgBAAIAAgGIAzAAQAJAAAHACQAIACAFACQALAGAAAMQABAJgIAGQgDACgEACIgLACQANABAIAFQAEADACAEQADAEAAAFQAAAGgEAFQgCAFgHADQgLAHgVAAgAgHAlIAFABIACABQAKgBAFgEQAGgEABgJQAAgFgDgEQgBgEgDgCIgHgDIgIgBIgHAAgAgCglIgFABIAAAfIAHAAQAGAAAGgFQAFgEAAgIQABgEgCgDIgEgEIgFgEIgHgBg");
	this.shape.setTransform(35.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AgTAtQgIgEgGgHQgHgHgDgIQgEgKAAgJQAAgIAEgKQADgIAHgHQAGgHAIgDQAKgFAJAAQALAAAJAFQAJADAGAHQAGAHAEAIQADAKgBAIQABAJgDAKQgEAIgGAHQgGAHgJAEQgJADgLABQgJgBgKgDgAgHgkQgEADgDAGIgEANQgCAHAAAHQAAAIACAHIAEANQADAFAEAEQADACAEAAQAFAAAEgCQAEgEACgFIAFgNIAAgPIAAgOIgFgNQgCgGgEgDQgEgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(25.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AgLAvIAAhUIgGAAQgJABgFAFQgFAEAAAMIgGAAIAAgPIABgGIACgEIAFgEQADgCAEAAIBGAAIAAAJIgeAAIAABUg");
	this.shape_2.setTransform(15.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AAhAvIgJgBQgDgCgCgDQgCgDgBgFIgBgMIAAgSIgdAAIAAAsIgaAAIAAhDQAAgIgDgGQgBgDgDgBQgDgBgFgBIgBAAIAAgGIAYAAQAFAAADACQADABACADQACADABAFIACAMIAAAQIAdAAIAAgqIAbAAIAABDQAAAJACAFQABACADACQADACAFgBIACAAIAAAHg");
	this.shape_3.setTransform(4.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AgQAtQgIgEgGgHQgGgGgDgJQgDgJgBgKQAAgKAEgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAGAEQAFAGAEAHQAEAIgBAJIAAAEIAAADIgBADIg6AAQAAAKACAHQABAHADAEQAHAIAIAAQAKABAHgGQAGgEAFgHIAGAFIgFAGQgDAFgFACQgEADgHADQgFABgIABQgJgBgJgDgAAQgEQABgKgCgHQgBgGgCgEQgCgEgEgCIgGgCQgCABgDABQgDACgDAEQgCAEgBAGQgCAHAAAKIAgAAIAAAAg");
	this.shape_4.setTransform(-6,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AAhAvIgJgBQgDgCgCgDQgCgDgBgFIgBgMIAAgSIgeAAIAAAsIgZAAIAAhDQAAgIgDgGQgBgDgDgBQgDgBgFgBIgBAAIAAgGIAXAAQAGAAADACQADABACADQACADABAFIABAMIAAAQIAeAAIAAgqIAbAAIAABDQgBAJADAFQABACADACQADACAEgBIADAAIAAAHg");
	this.shape_5.setTransform(-16.9,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AgTAtQgIgEgGgHQgHgHgDgIQgEgKAAgJQAAgIAEgKQADgIAHgHQAGgHAIgDQAKgFAJAAQALAAAJAFQAJADAGAHQAGAHAEAIQACAKAAAIQAAAJgCAKQgEAIgGAHQgGAHgJAEQgJADgLABQgJgBgKgDgAgHgkQgEADgDAGIgEANQgCAHAAAHQAAAIACAHIAEANQADAFAEAEQADACAEAAQAFAAAEgCQAEgEACgFIAFgNIAAgPIAAgOIgFgNQgCgGgEgDQgEgDgFAAQgEAAgDADg");
	this.shape_6.setTransform(-28.2,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AAXAvIAAhUIgeAAIAABUIgaAAIAAhDQAAgIgCgGQgCgDgDgBQgDgBgEgBIgBAAIAAgGIBhAAIAABdg");
	this.shape_7.setTransform(-39.8,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223249").s().p("AAdApQgFgGgDgHQgCgHAAgKIAAghIgaBDIgHAAIgjhFIAABFIgKAAIAAhcIAZAAIAdA6IAYg8IAaAAIAAA8QAAARADAHQADAJAJABIAAAFQgWAAgJgJg");
	this.shape_8.setTransform(-50.8,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223249").s().p("AgSAtQgKgEgGgHQgFgHgEgIQgDgKAAgJQAAgIADgKQAEgIAFgHQAGgHAKgDQAIgFAKAAQALAAAJAFQAIADAHAHQAGAHAEAIQACAKAAAIQAAAJgCAKQgEAIgGAHQgHAHgIAEQgJADgLABQgKgBgIgDgAgHgkQgEADgDAGIgEANQgBAHAAAHQAAAIABAHIAEANQADAFAEAEQAEACADAAQAFAAAEgCQAEgEADgFIADgNIABgPIgBgOIgDgNQgDgGgEgDQgEgDgFAAQgDAAgEADg");
	this.shape_9.setTransform(-63.5,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#223249").s().p("AAWAsQgHgDgHgKIgRgZIAAAoIgaAAIAAhDQAAgIgCgGQgCgDgDgBQgCgBgFgBIgCAAIAAgGIAYAAQAFAAAEACQADABACADQACADABAFIABAMIAAATIAWgdIAGgHIAGgEIAIgEIAJgBIAEAAIAAAGQgGgBgFADQgFADgEAEIgTAZIAaAhQAFAGAFAEQAFADAEABIAAAGIgGABIgIABQgIgBgIgDg");
	this.shape_10.setTransform(-74.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-15,163,25.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAeAvQgKgBgGgEQgGgEgEgHIgIgRIgaAhIgNAAIAhgrIgTgdQgEgHgFgFQgFgDgFgBIAAgFIATAAQAKAAAGAFQAGAEAEAHIAIARIAaghIAOAAIgiAqIATAfQAEAGAFAFQAFADAEABIAAAFg");
	this.shape.setTransform(56,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAZAvIAAhEIgjBEIgYAAIAAhDQAAgIgCgGQgCgDgCgBQgDgBgEgBIgCAAIAAgGIAXAAQAFAAAEACQAEABACADQACADAAAFIABAMIAAApIAihDIAZAAIAABdg");
	this.shape_1.setTransform(44.8,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223249").s().p("AAWAsQgHgDgHgKIgRgZIAAAoIgaAAIAAhDQAAgIgCgGQgCgDgDgBQgCgBgFgBIgCAAIAAgGIAYAAQAFAAAEACQADABACADQACADABAFIABAMIAAATIAWgdIAGgHIAGgEIAIgEIAJgBIAEAAIAAAGQgGgBgFADQgFADgEAEIgTAZIAaAhQAFAGAFAEQAFADAEABIAAAGIgGABIgIABQgIgBgIgDg");
	this.shape_2.setTransform(34.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223249").s().p("AgPAtQgJgFgGgGQgGgHgDgIQgDgKAAgJQAAgIADgKQADgIAGgHQAGgGAJgEQAJgFAKAAQAMABAHABQAJACADAEQAEAEABAFIAAASIgGAAQAAgGgCgFQgCgEgEgEQgHgGgMgBQgFABgDACQgEADgDAEQgEAFgBAIQgCAIAAAIQAAATAGALQAHAKAKgBQAKABAHgGQAGgEAGgHIAGAFIgFAGQgEAFgEACQgEADgHADQgGABgJABQgKgBgJgDg");
	this.shape_3.setTransform(24.3,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223249").s().p("AgPAtQgJgEgGgHQgGgGgEgJQgCgJAAgKQAAgKADgKQADgJAGgGQAGgGAIgEQAIgDAIAAQAIAAAJADQAIAEAFAEQAHAGADAHQAEAIAAAJIAAAEIgBADIAAADIg6AAQgBAKACAHQABAHAEAEQAGAIAHAAQALABAGgGQAHgEAFgHIAGAFIgFAGQgDAFgEACQgFADgGADQgGABgJABQgIgBgIgDgAARgEQAAgKgCgHQgBgGgDgEQgBgEgDgCIgHgCQgCABgDABQgDACgDAEQgCAEgBAGQgCAHABAKIAgAAIAAAAg");
	this.shape_4.setTransform(14.2,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223249").s().p("AAXAvIAAgkIgIACIgKABQgHABgHgCQgGgCgFgEQgFgDgEgEQgCgGAAgHIAAgHQAAgIgDgGQgBgDgDgBQgDgBgFgBIgBAAIAAgGIAYAAQAFAAADACQADABACADQACADABAFIACAMIAAAHQgBALAFADQACAEAIAAIAHgBIAHgBIAAgxIAaAAIAABdg");
	this.shape_5.setTransform(3,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223249").s().p("AAYAvIAAhEIgiBEIgYAAIAAhDQAAgIgCgGQgBgDgDgBQgDgBgEgBIgCAAIAAgGIAXAAQAGAAADACQAEABACADQABADABAFIABAMIAAApIAihDIAYAAIAABdg");
	this.shape_6.setTransform(-8.2,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AgZAvIAAhDQAAgIgDgGQgBgDgDgBQgDgBgFgBIAAAAIAAgGIBDAAQADAAADACIAGAEIABAEIABAGIAAAPIgFAAQAAgGgCgEQgBgEgDgCQgEgFgKgBIgQAAIAABUg");
	this.shape_7.setTransform(-17.9,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223249").s().p("AgSAtQgKgEgFgHQgGgHgEgIQgEgKAAgJQAAgIAEgKQAEgIAGgHQAFgHAKgDQAIgFAKAAQALAAAJAFQAIADAHAHQAGAHAEAIQACAKAAAIQAAAJgCAKQgEAIgGAHQgHAHgIAEQgJADgLABQgKgBgIgDgAgHgkQgFADgCAGIgEANQgCAHAAAHQAAAIACAHIAEANQACAFAFAEQADACAEAAQAFAAAEgCQAEgEADgFIADgNIABgPIgBgOIgDgNQgDgGgEgDQgEgDgFAAQgEAAgDADg");
	this.shape_8.setTransform(-27.6,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223249").s().p("AgrAwIgGgCIAAgFQAGgBAEgEQAFgCADgIQAEgHACgMQACgLAAgTIgBgHQAAgDgCgDIgFgDQgDgCgEAAIAAgGIBYAAIAABcIgaAAIAAhTIgbAAIAAAPQAAAUgCAMQgDAOgEAJQgFAIgGAEQgGAEgIAAg");
	this.shape_9.setTransform(-39.3,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#223249").s().p("AgSAtQgJgEgHgHQgFgHgEgIQgEgKABgJQgBgIAEgKQAEgIAFgHQAHgHAJgDQAIgFAKAAQALAAAJAFQAIADAHAHQAGAHADAIQADAKAAAIQAAAJgDAKQgDAIgGAHQgHAHgIAEQgJADgLABQgKgBgIgDgAgIgkQgDADgDAGIgEANQgBAHAAAHQAAAIABAHIAEANQADAFADAEQAFACADAAQAFAAAEgCQAEgEADgFIADgNIABgPIgBgOIgDgNQgDgGgEgDQgEgDgFAAQgDAAgFADg");
	this.shape_10.setTransform(-49.9,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#223249").s().p("AAYAvIAAhEIgiBEIgXAAIAAhDQAAgIgDgGQgBgDgDgBQgDgBgFgBIgBAAIAAgGIAXAAQAGAAADACQADABACADQACADABAFIABAMIAAApIAihDIAYAAIAABdg");
	this.shape_11.setTransform(-61.7,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#223249").s().p("AgqBCIAAhpQAAgJgDgFIgDgEQgDgCgFABIgCAAIAAgHIBWAAQAFABADABIAGAEQACACAAACIABAHIAAARIgGAAQAAgHgCgEQgBgFgDgDQgHgFgMgBIgeAAIAAAvIAQAAIAWACQAKACAJADQAHACAGAIQAFAHAAANQAAAFgBAGQgCAEgCAEQgGAIgHADQgJAEgKACQgLABgLABgAgIAAIgEAAIgEAAIAAA4IAEABIAKABIABAAQAQAAAIgIQAEgDACgGQACgGAAgHQAAgJgCgFQgCgGgEgEQgEgDgGgBQgHgBgHAAIgBAAg");
	this.shape_12.setTransform(-73.2,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-15,163,25.7);


(lib.Symbol42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgYAAgOgPgAgXgeQgJAKAAAUQAAAVAJALQAIAKAPAAQAQAAAIgKQAJgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgIALg");
	this.shape_1.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol41_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAWA5Igtg5IAAA5IgTAAIAAhxIATAAIAAA3IAsg3IAUAAIgsA3IAuA6g");
	this.shape_1.setTransform(0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,15,25.8);


(lib.Symbol40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgYAAgOgPgAgXgeQgJAKAAAUQAAAVAJALQAIAKAPAAQAQAAAIgKQAJgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgIALg");
	this.shape_1.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol39_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AgxA4IAAgQQAFACAEAAQAGAAADgHQADgHAEgXIAJg+IBBAAIAABxIgTAAIAAhhIgfAAQgGAwgDATQgEASgHAGQgHAIgLgBQgFAAgGgBg");
	this.shape_1.setTransform(-1.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-12.9,16.3,25.8);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgZAAgNgPgAgYgeQgIAKAAAUQAAAVAIALQAJAKAPAAQAQAAAJgKQAIgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgJALg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223249").s().p("AAoA5IAAg5IABgUIABgRIgBAAIgiBeIgPAAIghheIgBAAIACAmIAAA4IgRAAIAAhxIAaAAIAfBZIAAAAIAghZIAaAAIAABxg");
	this.shape_8.setTransform(-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-12.9,19.5,25.8);


(lib.Symbol36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223249").s().p("AgfA5IAAhxIA/AAIAAAQIgsAAIAAAfIApAAIAAAOIgpAAIAAAjIAsAAIAAARg");
	this.shape_7.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.9,13.6,25.8);


(lib.Symbol35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#223249").s().p("AgmA5IAAhxIATAAIAAAuIAQAAQATABAMAIQALAHAAAQQAAARgLAJQgLAJgUAAgAgTApIAPAAQALAAAHgEQAGgFAAgKQAAgJgGgEQgHgFgNAAIgNAAg");
	this.shape_12.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,14.9,25.8);


(lib.Symbol34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AgxA4IAAgQQAFACAEAAQAGAAADgHQADgHAEgXIAJg+IBBAAIAABxIgTAAIAAhhIgfAAQgGAwgDATQgEASgHAGQgHAIgLgBQgFAAgGgBg");
	this.shape_1.setTransform(-1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-12.9,16.3,25.8);


(lib.Symbol33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223249").s().p("AAkA5IAAhxIATAAIAABxgAg2A5IAAhxIATAAIAAAuIANAAQAWABAJAIQALAHAAAQQAAARgLAJQgJAJgVAAgAgjApIANAAQAMAAAHgEQAEgFAAgKQAAgJgEgEQgGgFgPAAIgLAAg");
	this.shape_1.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-12.9,18.8,25.8);


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AglA5IAAhxIBEAAIAAAQIgxAAIAAAeIANAAQArAAAAAgQAAAigqABgAgSApIANAAQALAAAHgEQAGgFAAgKQAAgKgGgDQgHgFgNAAIgLAAg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-12.9,14.7,25.8);


(lib.Symbol31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgYAAgOgPgAgXgeQgJAKAAAUQAAAVAJALQAIAKAPAAQAQAAAIgKQAJgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgIALg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAWA5Igtg5IAAA5IgTAAIAAhxIATAAIAAA3IAsg3IAUAAIgsA3IAuA6g");
	this.shape.setTransform(0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-12.9,15,25.8);


(lib.Symbol29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgfA5IAAhxIA/AAIAAAQIgsAAIAAAfIApAAIAAAOIgpAAIAAAjIAsAAIAAARg");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.9,13.6,25.8);


(lib.Symbol28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgZAAgNgPgAgYgeQgIAKAAAUQAAAVAIALQAJAKAPAAQAQAAAJgKQAIgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgJALg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAbA5IgbgvIgcAvIgUAAIAmg6Igkg3IAVAAIAZArIAagrIAUAAIgjA3IAmA6g");
	this.shape.setTransform(-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-12.9,14.7,25.8);


(lib.Symbol26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgrA3IAAgRQAHADAIAAQAHAAAGgDQAEgEAEgJIgqhRIAUAAIAcA4IADAKIAAAAIACgHIAag7IAUAAIgkBPQgHAPgFAGQgEAHgHADQgIADgKAAQgJAAgHgCg");
	this.shape.setTransform(-0.3,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,14.9,25.8);


(lib.Symbol25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgcArQgOgPAAgcQAAgQAHgOQAGgNANgHQAMgHAPAAQARAAAPAHIgHAQIgMgFQgGgCgIAAQgOAAgJALQgJAMAAASQAAAVAJALQAJAKAOAAQAIAAAGgBIAPgEIAAAQQgOAFgRAAQgXAAgNgPg");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,14.8,25.8);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAoA5IAAg5IABgUIABgRIgBAAIgiBeIgPAAIghheIgBAAIACAmIAAA4IgRAAIAAhxIAaAAIAfBZIAAAAIAghZIAaAAIAABxg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-12.9,19.5,25.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAgA5IgLggIgqAAIgLAgIgTAAIAqhxIATAAIArBxgAAQAJIgLgdIgDgKIgCgKIgFAVIgKAcIAfAAg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-12.9,15.3,25.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAWA5Igtg5IAAA5IgTAAIAAhxIATAAIAAA3IAsg3IAUAAIgsA3IAuA6g");
	this.shape.setTransform(0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,15,25.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgYAAgOgPgAgXgeQgJAKAAAUQAAAVAJALQAIAKAPAAQAQAAAIgKQAJgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgIALg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgIA5IAAhhIghAAIAAgQIBTAAIAAAQIghAAIAABhg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.9,13.8,25.8);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgcArQgOgPAAgcQAAgQAHgOQAGgNANgHQAMgHAPAAQARAAAPAHIgHAQIgMgFQgGgCgIAAQgOAAgJALQgJAMAAASQAAAVAJALQAJAKAOAAQAIAAAGgBIAPgEIAAAQQgOAFgRAAQgXAAgNgPg");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,14.8,25.8);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAeA5IAAg6IACggIgBAAIg4BaIgWAAIAAhxIARAAIAAA6IgBATIAAAMIAAAAIA5hZIAWAAIAABxg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.4,25.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAWA5Igtg5IAAA5IgTAAIAAhxIATAAIAAA3IAsg3IAUAAIgsA3IAuA6g");
	this.shape.setTransform(0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.9,15,25.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgfA5IAAhxIA/AAIAAAQIgsAAIAAAfIApAAIAAAOIgpAAIAAAjIAsAAIAAARg");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.9,13.6,25.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAfA5IAAg6IABggIAAAAIg5BaIgWAAIAAhxIARAAIAAA6IAAATIgBAMIABAAIA4hZIAWAAIAABxg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-12.9,17.4,25.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAaA5IAAg0IgzAAIAAA0IgTAAIAAhxIATAAIAAAvIAzAAIAAgvIASAAIAABxg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-12.9,16.7,25.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgfA5IAAhxIA/AAIAAAQIgsAAIAAAfIApAAIAAAOIgpAAIAAAjIAsAAIAAARg");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.9,13.6,25.8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AA6BIIAAgfIiFAAIAAhwIATAAIAABgIAoAAIAAhgIARAAIAABgIApAAIAAhgIATAAIAABgIAPAAIAAAvg");
	this.shape.setTransform(0.2,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-12.9,21.9,25.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AAhA5IgMggIgpAAIgMAgIgUAAIArhxIASAAIArBxgAAQAJIgKgdIgEgKIgCgKIgFAVIgKAcIAfAAg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-12.9,15.3,25.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgkA5IAAhxIAhAAQATAAALAJQAKAJAAARQAAARgLAIQgMAKgUAAIgLAAIAAArgAgRAAIAJAAQANAAAHgFQAGgFAAgLQAAgKgGgEQgGgFgLAAIgMAAg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-12.9,14.5,25.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgnA5IAAhxIAiAAQAVABAKAGQALAHAAAPQAAAKgFAGQgFAHgKACIAAAAQAMACAGAFQAFAHAAALQAAAQgKAJQgLAJgTAAgAgVApIAUAAQAKAAAGgEQAGgFAAgKQAAgJgHgEQgGgEgKgBIgTAAgAgVgJIASAAQAKAAAGgDQAEgEAAgJQABgIgGgEQgGgDgKAAIgRAAg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-12.9,15.3,25.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgoA0IAAgQQAHADAKACQAJACAIAAQAcAAAAgTQAAgJgJgFQgJgFgQAAIgNAAIAAgNIAMAAQAhAAAAgSQAAgHgGgFQgGgEgJAAQgIAAgHACQgIADgIAFIgIgNQARgMAXAAQARAAALAIQAKAHAAANQAAALgHAIQgIAHgNACIAAAAQAPABAIAGQAIAHAAALQAAAQgMAJQgNAJgUAAQgXAAgNgGg");
	this.shape.setTransform(-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-12.9,14.5,25.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgmArQgOgPAAgcQAAgbAOgPQAOgPAYAAQAZAAAOAPQAOAQAAAaQAAAbgOAQQgOAPgZAAQgZAAgNgPgAgYgeQgIAKAAAUQAAAVAIALQAJAKAPAAQAQAAAJgKQAIgLAAgVQAAgUgIgKQgJgLgQAAQgPAAgJALg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-12.9,17.3,25.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223249").s().p("AgnA5IAAhxIAiAAQAVABAKAGQALAHAAAPQAAAKgFAGQgFAHgKACIAAAAQAMACAGAFQAFAHAAALQAAAQgKAJQgLAJgTAAgAgVApIAUAAQAKAAAGgEQAGgFAAgKQAAgJgHgEQgGgEgKgBIgTAAgAgVgJIASAAQAKAAAGgDQAEgEAAgJQABgIgGgEQgGgDgKAAIgRAAg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-12.9,15.3,25.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_1l();
	this.instance.setTransform(-142,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-28,284,55);


(lib.can1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.can();
	this.instance.setTransform(-71,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-75,141,150);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.setTransform(-302,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302,-187,604,374);


(lib.vits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.setTransform(-65.5,26.5);

	this.instance_1 = new lib.Symbol31();
	this.instance_1.setTransform(65,-25.4);

	this.instance_2 = new lib.Symbol30();
	this.instance_2.setTransform(-105.2,-3.3);

	this.instance_3 = new lib.Symbol29();
	this.instance_3.setTransform(3.6,-28.9);

	this.instance_4 = new lib.Symbol28();
	this.instance_4.setTransform(27.5,12.1);

	this.instance_5 = new lib.Symbol27();
	this.instance_5.setTransform(-27.2,3.6);

	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(90.3,19.5);

	this.instance_7 = new lib.Symbol25();
	this.instance_7.setTransform(-67.4,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.7,-41.4,220.5,80.5);


(lib.tp0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42_1();
	this.instance.setTransform(32.2,11.9);

	this.instance_1 = new lib.Symbol41_1();
	this.instance_1.setTransform(20.3,11.9);

	this.instance_2 = new lib.Symbol40_1();
	this.instance_2.setTransform(8.4,11.9);

	this.instance_3 = new lib.Symbol39_1();
	this.instance_3.setTransform(-4.1,11.9);

	this.instance_4 = new lib.Symbol38();
	this.instance_4.setTransform(-16.7,11.9);

	this.instance_5 = new lib.Symbol37_1();
	this.instance_5.setTransform(-30.8,11.9);

	this.instance_6 = new lib.Symbol36_1();
	this.instance_6.setTransform(65.3,-11.9);

	this.instance_7 = new lib.Symbol35_1();
	this.instance_7.setTransform(55.3,-11.9);

	this.instance_8 = new lib.Symbol34_1();
	this.instance_8.setTransform(43.9,-11.9);

	this.instance_9 = new lib.Symbol33_1();
	this.instance_9.setTransform(30.6,-11.9);

	this.instance_10 = new lib.Symbol32_1();
	this.instance_10.setTransform(18.1,-11.9);

	this.instance_11 = new lib.Symbol31_1();
	this.instance_11.setTransform(6.3,-11.9);

	this.instance_12 = new lib.Symbol30_1();
	this.instance_12.setTransform(-5.6,-11.9);

	this.instance_13 = new lib.Symbol29_1();
	this.instance_13.setTransform(-20.3,-11.9);

	this.instance_14 = new lib.Symbol28_1();
	this.instance_14.setTransform(-31.5,-11.9);

	this.instance_15 = new lib.Symbol27_1();
	this.instance_15.setTransform(-43.3,-11.9);

	this.instance_16 = new lib.Symbol26_1();
	this.instance_16.setTransform(-53.8,-11.9);

	this.instance_17 = new lib.Symbol25_1();
	this.instance_17.setTransform(-64.5,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-24.8,144,49.6);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol50();
	this.instance.setTransform(104.5,0);

	this.instance_1 = new lib.Symbol49();
	this.instance_1.setTransform(-78.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.7,-12.8,369.5,25.7);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.setTransform(116.7,0);

	this.instance_1 = new lib.Symbol36();
	this.instance_1.setTransform(22.7,0);

	this.instance_2 = new lib.Symbol35();
	this.instance_2.setTransform(-94,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-12.8,329.8,25.7);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(0,9.5);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(0,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-24.4,163,44.6);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.setTransform(17.6,0);

	this.instance_1 = new lib.Symbol33();
	this.instance_1.setTransform(-17,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-20.6,65.9,41.3);


(lib.Symbol38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.vits = new lib.vits();
	this.vits.setTransform(440.5,156.5);

	this.timeline.addTween(cjs.Tween.get(this.vits).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.7,115.1,220.5,80.5);


(lib.nums = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();

	this.instance_1 = new lib.Symbol46();

	this.instance_2 = new lib.Symbol45();

	this.instance_3 = new lib.Symbol44();

	this.instance_4 = new lib.Symbol43();

	this.instance_5 = new lib.Symbol42();

	this.instance_6 = new lib.Symbol41();

	this.instance_7 = new lib.Symbol40();

	this.instance_8 = new lib.Symbol39();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-33.5,52.2,67.1);


(lib.tp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(41.8,11.9);

	this.instance_1 = new lib.Symbol22();
	this.instance_1.setTransform(28.6,11.9);

	this.instance_2 = new lib.Symbol21();
	this.instance_2.setTransform(17.7,11.9);

	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(5.8,11.9);

	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(-5.5,11.9);

	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(-15.5,11.9);

	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(-27.4,11.9);

	this.instance_7 = new lib.Symbol16();
	this.instance_7.setTransform(-44,11.9);

	this.instance_8 = new lib.Symbol15();
	this.instance_8.setTransform(59.8,-11.8);

	this.instance_9 = new lib.Symbol14();
	this.instance_9.setTransform(48.5,-11.8);

	this.instance_10 = new lib.Symbol13();
	this.instance_10.setTransform(35.7,-11.8);

	this.instance_11 = new lib.Symbol12();
	this.instance_11.setTransform(24.7,-11.8);

	this.instance_12 = new lib.Symbol11();
	this.instance_12.setTransform(11.2,-11.8);

	this.instance_13 = new lib.Symbol10();
	this.instance_13.setTransform(-3.1,-11.8);

	this.instance_14 = new lib.Symbol9();
	this.instance_14.setTransform(-13.8,-11.8);

	this.instance_15 = new lib.Symbol8();
	this.instance_15.setTransform(-24.5,-11.8);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(-35.2,-11.8);

	this.instance_17 = new lib.Symbol6();
	this.instance_17.setTransform(-46.8,-11.8);

	this.instance_18 = new lib.Symbol5();
	this.instance_18.setTransform(-58.9,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-24.7,133.1,49.6);


(lib.logoh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tp0 = new lib.tp0();
	this.tp0.setTransform(-256.8,0,0.919,0.919);
	this.tp0.alpha = 0.551;

	this.tp = new lib.tp();
	this.tp.setTransform(254.3,0,0.919,0.919);
	this.tp.alpha = 0.551;

	this.logo = new lib.logo();
	this.logo.setTransform(1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo},{t:this.tp},{t:this.tp0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.8,-27.5,638.3,55);


(lib.cal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.nums = new lib.nums();
	this.nums.setTransform(65.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.nums).wait(1));

	// Layer 1
	this.instance = new lib.cal();
	this.instance.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-59,183,118);


// stage content:
(lib._728x90_saumal = function(mode,startPosition,loop) {
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
		
		
		var t0 = g(this.t0);
		var t1 = g(this.t1);
		var t2 = g(this.t2);
		var t3 = g(this.t3);
		var tp = g(this.holder.tp);
		var tp0 = g(this.holder.tp0);
		
		var r = false;
		var tl = new TimelineMax();
		tl.to(this.wht, 1, {alpha: 0, ease: Sine.easeIn});
		
		var vits = g(this.vl.vits);
		var lines = g(this.vl.lines);
		var nums = g(this.cal.nums);
		var nums2 = nums.slice(0, nums.length-1);
		nums.splice(0,1);
		
		tl.add('vits', 1.6);
		
		
		tl.from(this.can1, 1, {x:"+=300", ease: Expo.easeOut});
		
		
		tl.staggerFrom(t0, 1, {scaleX:0, scaleY:0 , ease: Expo.easeOut}, .23, '-=.6');
		tl.staggerFrom(t1, 1.3, {x:'+=100', alpha: 0, ease: Expo.easeOut}, .23, '-=.6');
		
		tl.staggerFrom(vits, 3, {scaleX: 0, scaleY: 0, x: 0, y: 0, rotation: '+=95', ease: Elastic.easeOut.config(1, .45)}, .25, 'vits');
		tl.staggerFrom(lines, 3, {scaleX: 0, scaleY: 0, ease: Elastic.easeOut.config(1, .45)}, .25, 'vits');
		
		
		tl.add('slide', '-=1');
		tl.from(this.bg, 1.5, {scaleX:'+=.2', scaleY: '+=.2', ease: Expo.easeInOut}, 'slide');
		tl.to([this.table, this.vl, this.can1], 1, {y:'+=300', ease: Expo.easeInOut}, 'slide');
		tl.to([this.t0, this.t1], 1, {alpha:0}, 'slide');
		
		tl.from(this.wom, 1.4, {scaleX:'+=.3', scaleY: '+=.3', x: w, ease: Expo.easeOut}, 'slide+=.5');
		tl.staggerFrom(t2, 1.3, {x:'+=100', alpha: 0, ease: Expo.easeOut}, .23, '-=.6');
		
		
		tl.to(this.t2 , 1, {alpha: 0}, "+=2");
		tl.to(this.wom, .7, {scaleX:'+=.3', scaleY: '+=.3', x: w, ease: Expo.easeIn}, '-=1.2');
		tl.to(this.bg, 1.2, {scaleX:'+=.2', scaleY: '+=.2', ease: Expo.easeInOut}, '-=.9');
		tl.to(this.table, 1, {y:h, ease:Expo.easeOut}, '-=1');
		tl.from(this.cal, 1, {x:"+=300", ease: Expo.easeOut}, 'slide2');
		tl.staggerFrom(t3, 1.3, {x:'+=100', alpha: 0, ease: Expo.easeOut}, .23, '-=.6');
		
		tl.staggerTo(nums2, .15, {y:'-=20', alpha:0, ease:Sine.easeIn}, .4, 'nums-=.6');
		tl.staggerFrom(nums, .15, {y:'+=20',alpha:0}, .4, 'nums-=.5');
		
		tl.from(this.can2, 1, {x:"+=300", ease: Expo.easeOut}, 'slide2+=.3');
		
		
		
		
		tl.to(this.wht, 1, {alpha: 1, ease: Sine.easeIn}, "-=1.2");
		tl.from(this.holder.logo, 1.2, {scaleX: "-=.4", scaleY: "-=.4", alpha: 0, ease: Back.easeOut}, '-=.4');
		tl.staggerFrom(tp0, .8, {y:'+=10', alpha: 0, ease: Expo.easeOut}, .04, '-=.7');
		tl.staggerFrom(tp, .8, {y:'+=10', alpha: 0, ease: Expo.easeOut}, .04, '-=.7');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.holder = new lib.logoh();
	this.holder.setTransform(364,44.3);

	this.timeline.addTween(cjs.Tween.get(this.holder).wait(1));

	// wht
	this.wht = new lib.wht();
	this.wht.setTransform(364,45.1,2.427,0.36,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.wht).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(269.7,45,1.264,1.264);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// cal
	this.cal = new lib.cal_1();
	this.cal.setTransform(593.5,45.6,0.639,0.639,0,0,0,91.5,0);

	this.timeline.addTween(cjs.Tween.get(this.cal).wait(1));

	// can2
	this.can2 = new lib.can1();
	this.can2.setTransform(677.1,44.4,0.543,0.543,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.can2).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(254,46.4,1.33,1.33,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// wom
	this.wom = new lib.wom_1();
	this.wom.setTransform(545,66.1,0.582,0.582);

	this.timeline.addTween(cjs.Tween.get(this.wom).wait(1));

	// t1
	this.t0 = new lib.t0();
	this.t0.setTransform(52.8,45.5);

	this.t1 = new lib.t1();
	this.t1.setTransform(173.3,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t0}]}).wait(1));

	// can1
	this.can1 = new lib.can1();
	this.can1.setTransform(647,44.3,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.can1).wait(1));

	// vits
	this.vl = new lib.Symbol38_1();
	this.vl.setTransform(-48.4,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.vl).wait(1));

	// wo
	this.instance = new lib.wo_w();
	this.instance.setTransform(-20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// table
	this.table = new lib.table_1();
	this.table.setTransform(630.1,86);

	this.timeline.addTween(cjs.Tween.get(this.table).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.setTransform(622.1,42.1,0.483,0.483,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,-3.3,880.1,201.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;