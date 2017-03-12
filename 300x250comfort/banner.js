(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/h1.png?1484627294560", id:"h1"},
		{src:"images/h2.png?1484627294560", id:"h2"},
		{src:"images/im1.jpg?1484627294560", id:"im1"},
		{src:"images/im2.jpg?1484627294560", id:"im2"},
		{src:"images/im3.jpg?1484627294560", id:"im3"},
		{src:"images/logo.png?1484627294560", id:"logo"},
		{src:"images/must.png?1484627294560", id:"must"},
		{src:"images/perbody.png?1484627294560", id:"perbody"},
		{src:"images/pp.png?1484627294560", id:"pp"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.h1 = function() {
	this.initialize(img.h1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,81);


(lib.h2 = function() {
	this.initialize(img.h2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,79);


(lib.im1 = function() {
	this.initialize(img.im1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.im2 = function() {
	this.initialize(img.im2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.im3 = function() {
	this.initialize(img.im3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,88);


(lib.must = function() {
	this.initialize(img.must);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,12);


(lib.perbody = function() {
	this.initialize(img.perbody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,291);


(lib.pp = function() {
	this.initialize(img.pp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,55);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAsFlIhLgJQACABgigGQgvg2ADABIjxiwQABABg+i9Qg9i+ABAAQABABBXg0QBXgzABAAQABABB5ACIB5ACIG/DSIAcAnQAaAmADgBQATAMgDAwQgCAlgXA8QgYA7gWAVQgTASgjBEQghBAADACQACABhjAZIhhAaIAAABIhNgKg");
	mask.setTransform(11.2,-63.9);

	// perbody.png
	this.instance = new lib.perbody();
	this.instance.setTransform(-152,-145.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-100.6,94.2,73.4);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBHIgJgeIgqAAIgJAeIgkAAIAxiNIAjAAIAwCNgAANANIgHgaIgGgYIAAAAIgFAYIgIAaIAaAAg");
	this.shape.setTransform(86.3,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsA0QgLgKgFgOQgFgNAAgPQAAgPAFgNQAGgNAKgLQAVgUAfAAQAIgBAHACQAHABAHACQAPAGAKAKIgQAaQgIgGgJgEQgKgEgJgBQgKABgGADQgHACgFAHQgLAMAAAQQAAAHADAIQADAHAFAGQAKANASABQAUAAASgSIASAaQgXAXgjAAQggABgUgWg");
	this.shape_1.setTransform(72.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape_2.setTransform(59.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBHIAAg4IgyAAIAAA4IgkAAIAAiNIAkAAIAAA5IAyAAIAAg5IAjAAIAACNg");
	this.shape_3.setTransform(45.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBEQgNgFgKgLIASgYQAHAHAIAFQAHADAIAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgEgEgHAAIgRAAIAAgaIAOAAQAGAAAEgEQAFgFAAgFQAAgHgFgEQgEgFgGAAQgPABgPAMIgNgZQAUgRAcAAQALAAAKADQAFACAEAEQAFAEADAFQAHAJAAANQAAAUgSALIAAABIAJACIAHAHQAGAJAAALQAAAVgPALQgOAMgWAAQgNABgOgGg");
	this.shape_4.setTransform(32,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBHIAAhCIABgXIAAAAQgHAPgFAIIgmBCIgjAAIAAiNIAjAAIAABDIgCAWIABAAQAGgPAGgHIAlhDIAkAAIAACNg");
	this.shape_5.setTransform(18.9,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIBcAAIAAAeIg5AAIAAAWIAXAAQAKAAAJADQAIAEAHAGQANALgBAUQABAUgNANQgOAMgUAAgAgRApIARAAQAHAAAGgEQAEgEAAgHQAAgHgFgEQgEgFgIAAIgRAAg");
	this.shape_6.setTransform(5.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBEQgNgFgLgLQgLgLgFgNQgGgOAAgOQABgeAVgWQALgKANgFQANgFAPAAQAgAAAVAUQAWAWgBAeQAAAOgFAOQgGANgKALQgVAVggAAQgPABgNgGgAgagcQgFAGgDAGQgDAIAAAIQAAAHADAJQADAHAFAGQALANAPAAQAHAAAHgEQAIgDAFgGQALgMAAgRQAAgIgCgIQgEgGgFgGQgFgHgIgCQgHgDgHgBQgPAAgLANg");
	this.shape_7.setTransform(-15.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqBHIAAiNIBVAAIAAAeIgyAAIAABvg");
	this.shape_8.setTransform(-28.1,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape_9.setTransform(-39.6,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhXBHIAAiNIAjAAIAABvIAkAAIAAhvIAhAAIAABvIAkAAIAAhvIAjAAIAACNg");
	this.shape_10.setTransform(-56.2,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBHIgJgeIgrAAIgJAeIgkAAIAxiNIAjAAIAxCNgAANANIgIgaIgFgYIAAAAIgEAYIgJAaIAaAAg");
	this.shape_11.setTransform(-73.4,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA0AAQAVAAANAJQAGAGAEAHQADAHAAAIQAAAJgEAJQgFAIgHAFQAFACAFABQAEADACAEQAGAKAAAKQAAAWgQALQgPAKgWAAgAgRApIATAAQAHAAAEgFQAEgEAAgGQAAgHgDgDQgFgEgHgBIgTAAgAgRgPIARAAQAFAAADgDQADgEAAgGQAAgFgDgDQgDgEgFAAIgRAAg");
	this.shape_12.setTransform(-86.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-14,190.4,28);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B875").s().p("AAgBrIAAhJIgTAAIgmBJIg7AAIAphFIAIgNIAAgBQgigTAAgqQAAgYALgQQAKgRASgHQAOgFAaAAIBLAAIAADVgAgJg3QgHAGAAAOQAAAOAHAHQAHAHAMAAIAWAAIAAg2IgRAAQgQAAgIAGg");
	this.shape.setTransform(92.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1B875").s().p("AAlBrIAAhkIADgjIgBAAQgJAXgJAMIg5BkIg1AAIAAjVIA0AAIAABkIgCAjIAAAAQAKgWAJgNIA5hkIA1AAIAADVg");
	this.shape_1.setTransform(72.3,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1B875").s().p("AAnBrIAAhUIhMAAIAABUIg1AAIAAjVIA1AAIAABWIBMAAIAAhWIA0AAIAADVg");
	this.shape_2.setTransform(49.4,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B875").s().p("AhEBrIAAjVICFAAIAAAtIhQAAIAAAnIA/AAIAAArIg/AAIAAApIBUAAIAAAtg");
	this.shape_3.setTransform(29.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1B875").s().p("ABjCAIAAgqIjzAAIAAjVIA0AAIAACoIA2AAIAAioIAyAAIAACoIA2AAIAAioIA1AAIAACoIAbAAIAABXg");
	this.shape_4.setTransform(4.8,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1B875").s().p("AhEBrIAAjVICFAAIAAAtIhQAAIAAAnIA/AAIAAArIg/AAIAAApIBUAAIAAAtg");
	this.shape_5.setTransform(-20.4,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B875").s().p("ABABrIgHhhIgBgOIABgOIAAgGIgBAAIgLAiIgXA+IgrAAIgWg+IgMgiIgBAAQABAUgBAOIgGBhIg1AAIASjVIA4AAIAgBbIAJAhIAAAAIAKghIAghbIA5AAIASDVg");
	this.shape_6.setTransform(-42.8,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1B875").s().p("AgrBmQgUgIgQgQQgQgQgIgUQgIgUAAgWQAAguAgggQAQgQAUgHQAUgIAXAAQAvAAAhAfQAgAgAAAuQAAAWgJAUQgHAUgQAQQghAggvAAQgXAAgUgIgAgogsQgIAJgEALQgFALAAANQAAAMAFALQAEAMAIAJQARASAXAAQALAAALgEQAKgFAIgJQARgTAAgZQAAgNgEgLQgEgLgJgJQgIgJgKgEQgLgEgLAAQgXAAgRARg");
	this.shape_7.setTransform(-68.4,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1B875").s().p("AAlBrIAAioIhKAAIAACoIg0AAIAAjVICzAAIAADVg");
	this.shape_8.setTransform(-92.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-20,211.2,40);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B875").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape.setTransform(79.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1B875").s().p("AAZBHIAAhCIABgXIAAAAQgHAPgFAIIgmBCIgjAAIAAiNIAjAAIAABDIgCAWIABAAQAGgPAGgHIAlhDIAkAAIAACNg");
	this.shape_1.setTransform(66,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1B875").s().p("AATBHIgbg6IgPAAIAAA6IgjAAIAAiNIAjAAIAAA3IAPAAIAbg3IAlAAIgmBFIAAAAIApBIg");
	this.shape_2.setTransform(52.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B875").s().p("AgsA0QgLgKgFgOQgFgNAAgPQAAgPAFgNQAGgNAKgLQAVgUAfAAQAIgBAHACQAHABAHACQAPAGAKAKIgQAaQgIgGgJgEQgKgEgJgBQgKABgGADQgHACgFAHQgLAMAAAQQAAAHADAIQADAHAFAGQAKANASABQAUAAASgSIASAaQgXAXgjAAQggABgUgWg");
	this.shape_3.setTransform(37.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1B875").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape_4.setTransform(24.7,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1B875").s().p("AAVBHIAAg0IABgGIgBAAIgRAFQgHACgJAAQgKAAgJgDQgIgCgGgHQgMgJAAgWIAAgvIAkAAIAAAoQAAAKAFAFQAFAGAKAAQAMgBAKgGIAAg2IAkAAIAACNg");
	this.shape_5.setTransform(11.2,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B875").s().p("AgzBHIAAiNIA5AAQAUAAAOAOQAMAOAAAVQAAAVgMANQgHAHgIAEQgIADgLAAIgWAAIAAAsgAgQgBIAQAAQAIAAAEgGQAFgFAAgJQAAgJgFgFQgEgFgIAAIgQAAg");
	this.shape_6.setTransform(-1.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1B875").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape_7.setTransform(-13.7,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1B875").s().p("AAqBHIgEhAIAAgJIAAgKIAAgEIAAAAIgIAXIgPApIgcAAIgPgpIgIgXIgBAAQABAOgBAJIgEBAIgjAAIALiNIAmAAIAVA9IAGAVIAAAAIAHgVIAVg9IAmAAIALCNg");
	this.shape_8.setTransform(-28.7,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1B875").s().p("AAqBHIgEhAIAAgJIAAgKIAAgEIAAAAIgIAXIgPApIgcAAIgPgpIgIgXIgBAAQABAOgBAJIgEBAIgjAAIALiNIAmAAIAVA9IAGAVIAAAAIAHgVIAVg9IAmAAIALCNg");
	this.shape_9.setTransform(-46.4,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1B875").s().p("AgcBEQgNgFgLgLQgKgLgGgNQgFgOgBgOQAAgeAWgWQALgKANgFQAOgFAOAAQAfAAAWAUQAVAWABAeQgBAOgFAOQgGANgKALQgWAVgfAAQgOABgOgGgAgagcQgGAGgDAGQgCAIAAAIQAAAHACAJQADAHAGAGQAMANAOAAQAIAAAGgEQAIgDAFgGQALgMAAgRQAAgIgDgIQgDgGgFgGQgFgHgIgCQgGgDgIgBQgOAAgMANg");
	this.shape_10.setTransform(-63.5,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1B875").s().p("AATBHIgbg6IgPAAIAAA6IgjAAIAAiNIAjAAIAAA3IAPAAIAbg3IAlAAIgmBFIAAAAIApBIg");
	this.shape_11.setTransform(-77.9,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-14,175,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape.setTransform(63.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBHIAAhvIgrAAIAAgeIB3AAIAAAeIgrAAIAABvg");
	this.shape_1.setTransform(50.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBHIAAiNIA5AAQAUAAANAOQANAOAAAVQAAAVgNANQgGAHgIAEQgIADgLAAIgWAAIAAAsgAgQgBIAQAAQAIAAAEgGQAFgFAAgJQAAgJgFgFQgEgFgIAAIgQAAg");
	this.shape_2.setTransform(38.3,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBEQgNgFgLgLQgLgLgFgNQgGgOAAgOQABgeAVgWQALgKANgFQANgFAPAAQAgAAAVAUQAWAWAAAeQgBAOgFAOQgGANgKALQgVAVggAAQgPABgNgGgAgagcQgFAGgDAGQgDAIAAAIQAAAHADAJQADAHAFAGQALANAPAAQAHAAAHgEQAIgDAFgGQALgMAAgRQAAgIgCgIQgEgGgFgGQgFgHgIgCQgHgDgHgBQgPAAgLANg");
	this.shape_3.setTransform(23.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBMIAAgSQgcAAgSgSQgJgIgEgLQgFgLAAgLQAAgNAFgKQAEgLAJgIQASgRAcAAIAAgPIAhAAIAAAPQAcAAASARQAJAIAFALQAEAKAAANQAAAYgSARQgSASgcAAIAAASgAARAcQAGAAAFgCQAFgCAEgFQAEgEACgGQACgGAAgEQABgNgJgIQgEgFgFgCQgFgCgGAAgAgkgWQgFAEgCAFQgCAGAAAGQAAAEACAGQACAGAFAEQAIAJAMAAIAAg7QgMAAgIAJg");
	this.shape_4.setTransform(6.1,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqBHIgEhAIAAgJIAAgKIAAgEIAAAAIgIAXIgPApIgcAAIgPgpIgIgXIgBAAQABAOgBAJIgEBAIgjAAIALiNIAmAAIAVA9IAGAVIAAAAIAHgVIAVg9IAmAAIALCNg");
	this.shape_5.setTransform(-11.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBEQgNgFgLgLQgLgLgFgNQgGgOAAgOQABgeAVgWQALgKANgFQANgFAPAAQAgAAAVAUQAWAWgBAeQAAAOgFAOQgGANgKALQgVAVggAAQgPABgNgGgAgagcQgFAGgDAGQgDAIAAAIQAAAHADAJQADAHAFAGQALANAPAAQAHAAAHgEQAIgDAFgGQALgMAAgRQAAgIgCgIQgEgGgFgGQgFgHgIgCQgHgDgHgBQgPAAgLANg");
	this.shape_6.setTransform(-28.6,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBHIgcg6IgOAAIAAA6IgjAAIAAiNIAjAAIAAA3IAOAAIAcg3IAlAAIgmBFIAAAAIApBIg");
	this.shape_7.setTransform(-43.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA0AAQAVAAANAJQAGAGAEAHQADAHAAAIQAAAJgEAJQgFAIgHAFQAFACAFABQAEADACAEQAGAKAAAKQAAAWgQALQgPAKgWAAgAgRApIATAAQAHAAAEgFQAEgEAAgGQAAgHgDgDQgFgEgHgBIgTAAgAgRgPIARAAQAFAAADgDQADgEAAgGQAAgFgDgDQgDgEgFAAIgRAAg");
	this.shape_8.setTransform(-62,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-14,141.8,28);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxA6QgLgMgFgOQgHgPABgRQgBgQAHgPQAFgOAMgMQAXgXAiAAQAIAAAJACIAQAEQAPAGALALIgRAdQgJgHgKgFQgLgEgKAAQgLAAgHADQgHADgGAHQgMANAAASQAAAIAEAIQACAJAGAHQALAOAUAAQAWAAAUgUIATAdQgZAagmAAQgjAAgXgXg");
	this.shape.setTransform(65.7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBOIAAibIBgAAIAAAhIg6AAIAAAdIAuAAIAAAfIguAAIAAAdIA9AAIAAAhg");
	this.shape_1.setTransform(51.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBOIAAg9Ig3AAIAAA9IgmAAIAAibIAmAAIAAA/IA3AAIAAg/IAnAAIAACbg");
	this.shape_2.setTransform(36.2,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBLQgPgGgLgMIAUgZQAIAHAIAEQAIAEAJAAQAIAAAGgEQAFgFAAgIQAAgIgFgEQgFgEgHAAIgTAAIAAgcIAQAAQAGAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgHAAQgQAAgQANIgPgbQAWgTAfAAQAMAAALAFIALAGIAIAJQAIAKAAAPQAAAWgUAMIAKAEIAIAIQAGAJAAAMQAAAXgQANQgQANgYAAQgPAAgOgGg");
	this.shape_3.setTransform(21.2,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBOIAAhJIABgZIAAAAQgHARgHAIIgqBJIgmAAIAAibIAmAAIAABJIgBAZQAHgQAHgJIAphJIAnAAIAACbg");
	this.shape_4.setTransform(6.7,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BOIAAibIBlAAIAAAhIg+AAIAAAYIAZAAQALAAAJAEQAKADAHAHQAOAMAAAXQAAAWgOANQgPAOgWAAgAgSAtIASAAQAJAAAFgEQAFgFAAgHQAAgIgGgFQgFgFgIAAIgSAAg");
	this.shape_5.setTransform(-8.2,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhgBOIAAibIAnAAIAAB6IAnAAIAAh6IAlAAIAAB6IAnAAIAAh6IAnAAIAACbg");
	this.shape_6.setTransform(-33,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBOIgKghIgvAAIgKAhIgnAAIA2ibIAlAAIA2CbgAAPAOIgJgcIgGgbIAAAAIgFAbIgJAcIAdAAg");
	this.shape_7.setTransform(-51.8,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5BOIAAibIA5AAQAXAAAOALQAIAFADAIQAEAHAAAKQAAAKgFAJQgFAJgIAGQAGACAFABQAEAEADAFQAGAKAAALQAAAYgQAMQgRALgZAAgAgTAtIAVAAQAIAAAFgEQAEgFAAgHQAAgHgEgFQgEgEgIAAIgWAAgAgTgQIATAAQAGAAADgEQAEgEAAgHQAAgGgEgDQgDgEgGAAIgTAAg");
	this.shape_8.setTransform(-66,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-15.2,151.2,30.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBrIAAjVIA1AAIAABDIAiAAQAgAAASAUQAUATAAAhQAAAggUAVQgSAVggAAgAgZA+IAZAAQAMAAAHgIQAGgIABgNQgBgNgGgIQgIgJgLAAIgZAAg");
	this.shape.setTransform(42.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBrIAAioIhBAAIAAgtIC1AAIAAAtIhBAAIAACog");
	this.shape_1.setTransform(22.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBPQgQgQgHgUQgIgUAAgXQAAgXAIgTQAIgUAQgQQAggfAvAAQALAAALACQALABALAEQAUAIAQAPIgYAoQgLgKgPgGQgOgGgOAAQgPAAgKAEQgKAFgJAJQgPARAAAaQAAALAFALQADAMAIAJQAQATAbAAQAfAAAagaIAbAmQgjAkgzAAQgyAAgegfg");
	this.shape_2.setTransform(2.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNBcIAXgnQAGAFAGADQAGADAFAAQANAAAFgLIhTihIA5AAIAkBOIAKAdIAAAAIAJgdIAahOIA3AAIg/CfIgJAUQgFAJgHAJQgIAJgJAGQgLAEgNAAQgaABgXgRg");
	this.shape_3.setTransform(-18.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBrIAAioIhKAAIAACoIg0AAIAAjVICzAAIAADVg");
	this.shape_4.setTransform(-39.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-20,105.9,40);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7ACIACgQQALARARgBQAKgBATgJQAWgLAKgBQARAAALATIgCARQgRgbgpAUQgVALgKAAIgCABQgQAAgKgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-2.1,12.1,4.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBrIAAgYIAWAAIAAAYgAgSA0IAAgOQAAgNAFgLQAGgLAHgFIAOgOQAHgHAGgJQAFgJAAgLQAAgHgDgHQgCgGgGgFQgLgKgPAAQgUAAgQANIgMgPQAJgHANgFQANgFAOAAQAXAAASAPQARAPAAAXQAAAOgGALQgFALgIAHIgQANQgIAGgFAKQgGAJAAALIAAANg");
	this.shape.setTransform(29.7,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBrIAAioIhBAAIAAgtIC1AAIAAAtIhBAAIAACog");
	this.shape_1.setTransform(13.3,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBrIAAjVICFAAIAAAtIhQAAIAAAnIA/AAIAAArIg/AAIAAApIBUAAIAAAtg");
	this.shape_2.setTransform(-4.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBrIAAhUIhLAAIAABUIg1AAIAAjVIA1AAIAABWIBLAAIAAhWIA1AAIAADVg");
	this.shape_3.setTransform(-25.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-20,77.6,40);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBHIAAgwIgMAAIgZAwIgoAAIAcguIAFgIIAAgBQgXgNABgcQAAgPAGgLQAIgLAMgEQAJgEARAAIAxAAIAACNgAgFgkQgFAEAAAJQAAAKAFAEQAEAFAHAAIAPAAIAAgkIgLAAQgKAAgFAEg");
	this.shape.setTransform(61.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBHIAAhCIABgXIAAAAQgGAPgGAIIgmBCIgjAAIAAiNIAjAAIAABDIgCAWIABAAQAGgPAGgHIAlhDIAkAAIAACNg");
	this.shape_1.setTransform(48.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBHIAAg4IgyAAIAAA4IgjAAIAAiNIAjAAIAAA5IAyAAIAAg5IAiAAIAACNg");
	this.shape_2.setTransform(33,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape_3.setTransform(19.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCBVIAAgcIiiAAIAAiNIAjAAIAABvIAkAAIAAhvIAhAAIAABvIAkAAIAAhvIAjAAIAABvIASAAIAAA6g");
	this.shape_4.setTransform(3.1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIBYAAIAAAeIg1AAIAAAaIAqAAIAAAcIgqAAIAAAbIA4AAIAAAeg");
	this.shape_5.setTransform(-13.7,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqBHIgEhAIAAgJIAAgKIAAgEIAAAAIgIAXIgPApIgcAAIgPgpIgIgXIgBAAQABAOgBAJIgEBAIgjAAIALiNIAmAAIAVA9IAGAVIAAAAIAHgVIAVg9IAmAAIALCNg");
	this.shape_6.setTransform(-28.7,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBEQgNgFgLgLQgKgLgGgNQgFgOgBgOQABgeAVgWQALgKANgFQANgFAPAAQAfAAAWAUQAWAWAAAeQgBAOgFAOQgGANgKALQgWAVgfAAQgPABgNgGgAgagcQgFAGgDAGQgDAIAAAIQAAAHADAJQADAHAFAGQALANAPAAQAIAAAGgEQAIgDAFgGQALgMAAgRQAAgIgCgIQgDgGgGgGQgFgHgIgCQgGgDgIgBQgPAAgLANg");
	this.shape_7.setTransform(-45.8,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBHIAAhvIgxAAIAABvIgjAAIAAiNIB3AAIAACNg");
	this.shape_8.setTransform(-61.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-14,142.7,28);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBLQgPgGgLgMQgMgMgGgOQgGgPAAgQQAAgiAYgXQALgLAPgGQAPgGAQAAQAjAAAXAXQAYAXAAAiQAAAQgGAPQgGAOgMAMQgXAYgjAAQgQAAgPgGgAgdgfQgGAGgDAIQgDAIAAAJQAAAJADAIQADAIAGAHQANAOAQAAQAIAAAIgEQAHgDAHgHQAMgNAAgTQAAgJgDgIQgDgIgGgGQgHgHgHgDQgIgDgIAAQgQAAgNANg");
	this.shape.setTransform(56.4,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDAtQAKgCAHgGQAGgGAFgQIACgRIABgYIAAg0IBoAAIAACbIgmAAIAAh6IgeAAIAAAUQAAA2gQAZQgJANgMAGQgNAGgRAAg");
	this.shape_1.setTransform(38.7,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBOIAAibIBgAAIAAAhIg6AAIAAAdIAuAAIAAAfIguAAIAAAdIA9AAIAAAhg");
	this.shape_2.setTransform(25.3,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBeIAAgfIhZAAIAAAfIgkAAIAAhAIARAAQAKgRAFgUQAFgWAAgaIAAgmIBoAAIAAB7IASAAIAABAgAgGg0QAAAVgEAXQgEAVgJARIAvAAIAAhaIgeAAg");
	this.shape_3.setTransform(9.6,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBkIAAicIBgAAIAAAhIg6AAIAAAbIAuAAIAAAhIguAAIAAAeIA9AAIAAAhgAAIhEIAAgfIAcAAIAAAfgAgkhEIAAgfIAcAAIAAAfg");
	this.shape_4.setTransform(-10.4,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBLQgPgGgLgMQgMgMgGgOQgGgPAAgQQAAgiAYgXQALgLAPgGQAPgGAQAAQAjAAAXAXQAYAXAAAiQAAAQgGAPQgGAOgMAMQgXAYgjAAQgQAAgPgGgAgdgfQgGAGgDAIQgDAIAAAJQAAAJADAIQADAIAGAHQANAOAQAAQAIAAAIgEQAHgDAHgHQAMgNAAgTQAAgJgDgIQgDgIgGgGQgHgHgHgDQgIgDgIAAQgQAAgNANg");
	this.shape_5.setTransform(-26.3,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BOIAAibIA5AAQAXAAAOALQAIAFADAIQAEAHAAAKQAAAKgFAJQgFAJgIAGQAGACAFABQAEAEADAFQAGAKAAALQAAAYgQAMQgRALgZAAgAgTAtIAVAAQAIAAAFgEQAEgFAAgHQAAgHgEgFQgEgEgIAAIgWAAgAgTgQIATAAQAGAAADgEQAEgEAAgHQAAgGgEgDQgDgEgGAAIgTAAg");
	this.shape_6.setTransform(-42.2,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA6QgLgMgFgOQgHgPAAgRQAAgQAHgPQAFgOAMgMQAXgXAiAAQAIAAAIACIARAEQAPAGALALIgRAdQgJgHgKgFQgLgEgKAAQgLAAgHADQgHADgGAHQgMANAAASQABAIADAIQACAJAGAHQALAOAUAAQAXAAASgUIAUAdQgZAagmAAQgjAAgXgXg");
	this.shape_7.setTransform(-57.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-15.2,135.3,30.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBrIAAjVIA0AAIAABDIAjAAQAfAAAUAUQATATAAAhQAAAggTAVQgUAVgfAAgAgaA+IAaAAQAMAAAGgIQAIgIgBgNQABgNgIgIQgGgJgMAAIgaAAg");
	this.shape.setTransform(29.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBrIAAioIhBAAIAAgtIC1AAIAAAtIhBAAIAACog");
	this.shape_1.setTransform(10,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBPQgPgQgIgUQgIgUAAgXQAAgXAIgTQAIgUAQgQQAggfAuAAQAMAAALACQAKABALAEQAWAIAPAPIgZAoQgKgKgOgGQgPgGgOAAQgPAAgJAEQgLAFgJAJQgPARABAaQAAALADALQAEAMAIAJQAQATAbAAQAeAAAbgaIAbAmQgjAkg0AAQgxAAgegfg");
	this.shape_2.setTransform(-10.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBrIAAjVICFAAIAAAtIhQAAIAAAnIA/AAIAAArIg/AAIAAApIBUAAIAAAtg");
	this.shape_3.setTransform(-29.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-20,93.7,40);


(lib.sh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnARQgrgHAAgKQAAgJArgHQArgHA8AAQA9AAAsAHQAqAHAAAJQAAAKgqAHQgsAHg9AAQg8AAgrgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-2.4,29.6,5);


(lib.pp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pp();
	this.instance.setTransform(-29,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-27.5,58,55);


(lib.must_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.must();
	this.instance.setTransform(-10,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-6,20,12);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-84,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-44,168,88);


(lib.im3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.im3();
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.im2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.im2();
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.h2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h2();
	this.instance.setTransform(-27.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-39.5,55,79);


(lib.h1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h1();
	this.instance.setTransform(-28,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-40.5,56,81);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.arr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBgQgKgagUghQAMACAJAGQAIAFAOAOIAAjoIAOAAIAADnQANgOAJgFQAJgHAKAAQgSAdgLAdQgMAdgIAtQgHgrgMgeg");
	this.shape.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,10,34);


(lib.tilds3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-32,-0.4,1,1,0,0,0,-66.4,-0.4);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(30.8,0.8,1,1,0,0,0,65.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-2.1,81,4.2);


(lib.tilds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-36.7,-0.4,1,1,0,0,0,-66.4,-0.4);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(35.5,0.8,1,1,0,0,0,65.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-2.1,71.6,4.2);


(lib.TI2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-24.7,-0.4,1,1,0,0,0,-66.4,-0.4);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(23.1,0.8,1,1,0,0,0,65.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-2.1,96,4.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.ртв = new lib.Symbol15();
	this.ртв.setTransform(40.8,14,1,1,0,0,0,52,-50);

	this.timeline.addTween(cjs.Tween.get(this.ртв).to({rotation:-2.7,x:40.9},15).to({rotation:0,x:40.8},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.2,-81.5,304,291);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tilds = new lib.tilds3();
	this.tilds.setTransform(0,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBJIAAg+IggAAIgkA+IgQAAIAjg6IAEgGIAAAAQgIgCgFgEQgGgDgEgEQgHgLAAgQQAAgHABgFQACgGADgFQADgFAEgDIAJgGQAJgEAQAAIArAAIAACRgAgKg4QgHADgEAHQgEAHAAAIQAAAOAIAJQAIAIALAAIAhAAIAAg7IgbAAQgMAAgGADg");
	this.shape.setTransform(13.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5A8QAUgCAHgaQAJgagBgyIAAgdIBPAAIAACRIgOAAIAAiEIgyAAIAAARQgBAigCAMQgBAUgGAQQgFAQgKAKQgFAEgGACQgGACgIABg");
	this.shape_1.setTransform(0.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2BYIAAgeIhrAAIAAAeIgOAAIAAgrIAPAAQAPgTAEgaQAGgZAAgiIAAgcIBPAAIAACEIAQAAIAAArgAgOg6QABBHgXAgIBJAAIAAh3IgzAAg");
	this.shape_2.setTransform(-13.8,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.tilds}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-14.6,81,29.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tilds = new lib.TI2();
	this.tilds.setTransform(-0.3,0.5,1,1,0,0,0,-0.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBJIAAiEIg1AAIAAgNIB3AAIAAANIg1AAIAACEg");
	this.shape.setTransform(26.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBJIAAiRIBRAAIAAANIhCAAIAAA1IA2AAIAAALIg2AAIAAA3IBGAAIAAANg");
	this.shape_1.setTransform(14.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3BYIAAgeIhsAAIAAAeIgOAAIAAgrIAPAAQAPgTAEgaQAFgZABgiIAAgcIBPAAIAACEIAQAAIAAArgAgOg6QAABHgWAgIBJAAIAAh3IgzAAg");
	this.shape_2.setTransform(-0.2,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBBIAIgKQAJAHAIAAQAGAAAEgGQAEgEADgKIg6hzIAQAAIApBQIAHATIAAAAIAGgTIAfhQIAPAAIgwB5QgKAagRAAQgMABgNgKg");
	this.shape_3.setTransform(-13.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBJIAAiRIBSAAIAAANIhEAAIAAAwIAiAAQATAAAMALQAGAEADAIQADAIAAAKQAAAKgDAIQgDAIgGAFQgFAGgIADQgIADgJAAgAgfA8IAhAAQAHAAAFgCQAGgCAEgEQAIgIAAgOQAAgHgDgFQgCgGgEgEQgEgEgFgCQgGgCgGAAIghAAg");
	this.shape_4.setTransform(-25.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.tilds}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-14.6,96,29.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.tilds = new lib.tilds();
	this.tilds.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.tilds).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBGQgNgFgLgMQgLgLgFgOQgFgNAAgPQAAgPAFgOQAFgNALgLQAWgWAeAAQAPAAANAGQAOAFALALQAKALAGANQAFANABAQQgBAfgVAWQgLAMgOAFQgNAGgPAAQgOAAgOgGgAgpgrQgRARAAAaQAAAZARATQARASAYAAQAMAAALgFQALgEAIgJQASgTAAgZQAAgagSgRQgIgJgLgFQgLgEgMAAQgYAAgRASg");
	this.shape.setTransform(7.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBJIAAhDIhUAAIAABDIgOAAIAAiRIAOAAIAABDIBUAAIAAhDIAPAAIAACRg");
	this.shape_1.setTransform(-8.8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-14.6,71.6,29.2);


(lib.per = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// must.png
	this.must = new lib.must_1();
	this.must.setTransform(-35,31.5);

	this.timeline.addTween(cjs.Tween.get(this.must).wait(1));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4IXbMAAAgu1MAwRAAAMAAAAu1gAALjrQBPAKgCgBQgBgBBcgZQBcgagBgBQgBgBAYhHQAWhGAHgOQAXg3ARgkQAKgUAXgeQAUgdAFgNQASgogRgLQgDAAgaglIgcgnIm/jSIh6gDQh4gBgBgBQgCgBhWA0QhXA0gCgBQAAgBA9C/QA+C/gBgBIDwCwQgCgCAvA2QAiAHgCgCIAAAAIBLAKg");
	mask.setTransform(14.5,-1.5);

	// perbody.png
	this.instance = new lib.perbody();
	this.instance.setTransform(-152,-142.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.hand = new lib.Symbol16();
	this.hand.setTransform(0,3.1,1,1,0,0,0,-11.2,64);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// h2.png
	this.h2 = new lib.h2_1();
	this.h2.setTransform(80.5,-107);

	this.timeline.addTween(cjs.Tween.get(this.h2).wait(1));

	// h1.png
	this.h1 = new lib.h1_1();
	this.h1.setTransform(80,-108);

	this.timeline.addTween(cjs.Tween.get(this.h1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-148.5,304,297);


(lib.im1_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// pp
	this.pp = new lib.pp_1();
	this.pp.setTransform(99,56.5,0.483,0.483);

	this.timeline.addTween(cjs.Tween.get(this.pp).wait(1));

	// Layer 2
	this.sh = new lib.sh();
	this.sh.setTransform(100.5,56.2,1,1,0,0,0,0.2,-10.4);
	this.sh.alpha = 0.648;
	this.sh.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.sh.cache(-17,-4,34,9);

	this.timeline.addTween(cjs.Tween.get(this.sh).wait(1));

	// Layer 1
	this.instance = new lib.im1();
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(0,49.6);

	this.tno = new lib.Symbol13();
	this.tno.setTransform(-0.2,18.4);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(0,-15.9);

	this.instance_2 = new lib.Symbol11();
	this.instance_2.setTransform(0,-48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.tno},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-62.8,211.2,126.4);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txt = new lib.txt();

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-62.8,211.2,126.4);


(lib.t2t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(0,31.2);

	this.tno = new lib.Symbol9();
	this.tno.setTransform(-0.2,0);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(0,-31.8);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(0,-61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.tno},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-81.9,151.2,127.1);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arr = new lib.arr();
	this.arr.setTransform(0,56);

	this.timeline.addTween(cjs.Tween.get(this.arr).wait(1));

	// Layer 1
	this.txt = new lib.t2t();

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-81.9,151.2,171.9);


(lib.t1i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(0,62);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(0,31.2);

	this.tno = new lib.Symbol3();

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(0,-31.8);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(0,-61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.tno},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-81.9,142.7,164);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txt = new lib.t1i();

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-81.9,142.7,164);


// stage content:
(lib._300x250comfort = function(mode,startPosition,loop) {
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
		
		var tl = new TimelineMax({repeat: -1, repeatDelay: .3, onRepeat: function(){
			repeated = true;
		}});
		
		var t1a = g(this.t1.txt);
		var t1t = g(this.t1.txt.tno.tilds);
		
		var t2a = g(this.t2.txt);
		var t2t = g(this.t2.txt.tno.tilds);
		
		var t3a = g(this.t3.txt);
		var t3t = g(this.t3.txt.tno.tilds);
		
		tl.to(this.bo, .6, {alpha:0});
		
		tl.add('sl1');
		
		tl.from(this.i1, 4, {scaleX:'+=.3', scaleY:'+=.3'}, 'sl1')
		tl.staggerFrom(t1a, .7, {x:'+=20', alpha:0, ease:Elastic.easeOut.config(1, .55)}, .3, 'sl1');
		tl.staggerFrom(t1t, 1, {x:0,  alpha:0, ease:Expo.easeOut}, .1, 'sl1+=1.1');
		tl.add('pp', 'sl1+=1')
		tl.from(this.i1.pp, 4, {x:"-=400", scaleX:1.3, scaleY: 1.3, rotation: "-=360"}, "pp");
		tl.from(this.i1.pp, 4, {y:"-=50", ease: Bounce.easeOut}, "pp");
		tl.from(this.i1.sh, 4, {x:"-=400" }, "pp");
		tl.from(this.i1.sh, 4, {alpha:0, scaleX:1.3, scaleY: 1.3, y:"+=50", ease: Bounce.easeOut}, "pp");
		
		tl.add('sl2', '-=.7');
		tl.to(this.i2, 4, {scaleX:'+=.3', scaleY:'+=.3'}, 'sl2-=.1')
		tl.from(this.i2, .5, {alpha:0}, 'sl2-=.1')
		tl.from(this.per.h2, .1, {alpha:0}, 'sl2');
		tl.to(this.per.h1, .1, {alpha:0}, 'sl2');
		tl.from(this.per.must, .3, {alpha:0}, 'sl2');
		
		tl.staggerFrom(t2a, .7, {y:'-=20', alpha:0, ease:Elastic.easeOut.config(1, .55)}, .3, 'sl2+=.3');
		tl.staggerFrom(t2t, 1, {x:0,  alpha:0, ease:Expo.easeOut}, .1, 'sl2+=1.1');
		tl.from(this.t2.arr, .7, {scaleX: 0, scaleY: 0, ease:Back.easeOut}, 'sl2+=1.2');
		tl.from(this.l1, .7, {alpha:0}, 'sl2+=1.4');
		
		
		tl.add('sl3', '+=.5');
		tl.from(this.i3, 4, {scaleX:'+=.3', scaleY:'+=.3'}, 'sl3')
		tl.from(this.i3, .5, {alpha:0}, 'sl3')
		
		tl.from(this.black, 1, {alpha:0}, "sl3+=.7")
		tl.from(this.l2, .7, {alpha:0}, 'sl3+=1');
		
		tl.staggerFrom(t3a, .7, {y:'+=30', alpha:0, ease:Expo.easeOut}, .15, 'sl3+=1.2');
		tl.staggerFrom(t3t, 1, {x:0,  alpha:0, ease:Expo.easeOut, onComplete:check}, .1, 'sl3+=2');
		
		tl.to(this.bo, .6, {alpha:1}, '+=2');
		var cont = this;
		function check(){
			if(repeated){
				tl.stop();
				cont.per.hand.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 11
	this.bo = new lib.black();
	this.bo.setTransform(150,125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.bo).wait(1));

	// Layer 10
	this.t3 = new lib.t3();
	this.t3.setTransform(150.4,173.9,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// Layer 9
	this.l2 = new lib.logo_1();
	this.l2.setTransform(150.5,59.9,0.893,0.893,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(1));

	// black
	this.black = new lib.black();
	this.black.setTransform(150,125,0.893,0.893);
	this.black.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// im3.jpg
	this.i3 = new lib.im3_1();
	this.i3.setTransform(150,125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.i3).wait(1));

	// Layer 4
	this.per = new lib.per();
	this.per.setTransform(188.4,156.7,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.per).wait(1));

	// Layer 8
	this.l1 = new lib.logo_1();
	this.l1.setTransform(76.8,199.1,0.723,0.723,0,0,0,0.1,0.1);

	this.t2 = new lib.t2();
	this.t2.setTransform(80,79.4,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.l1}]}).wait(1));

	// im2.jpg
	this.i2 = new lib.im2_1();
	this.i2.setTransform(150,125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.i2).wait(1));

	// Layer 1
	this.t1 = new lib.t1();
	this.t1.setTransform(80,79.4,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// im1.jpg
	this.i1 = new lib.im1_1();
	this.i1.setTransform(150,125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.i1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,339.3,289.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;