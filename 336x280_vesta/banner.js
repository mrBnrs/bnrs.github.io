(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banner_atlas_P_", frames: [[0,259,111,21],[113,259,111,15],[226,259,25,19],[0,0,359,257]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.back_v = function() {
	this.initialize(img.back_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.logo = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo__line = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo__n = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.vesta = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(3);
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


(lib.црууд = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai/DAQhQhQAAhwQAAhvBQhQQBQhQBvAAQBwAABQBQQBQBQAABvQAABwhQBQQhQBQhwAAQhvAAhQhQg");

	// Layer 1
	this.instance = new lib.vesta();
	this.instance.parent = this;
	this.instance.setTransform(-346.4,-180.6,1.571,1.038,0,0,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.црууд, new cjs.Rectangle(-27.1,-27.1,54.3,54.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52606B").s().p("AA6CQIgOhAIhYAAIgPBAIgRAAIA/kfIAaAAIBAEfgAApBAIgpi5IgqC5IBTAAg");
	this.shape.setTransform(31.1,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52606B").s().p("AgICQIAAkNIg7AAIAAgSICHAAIAAASIg6AAIAAENg");
	this.shape_1.setTransform(14.6,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52606B").s().p("AgbCNQgMgGgHgJQgIgKgDgNQgEgNAAgQIAAgOIASAAIAAAPQAAAXAKAQQAFAHAIAEQAJADALAAQAMAAAIgDQAIgEAFgHQAKgQAAgXQAAgRgHgMQgIgNgMgJIgYgUQgNgHgMgMQgLgLgIgOQgIgOAAgTQAAghAPgTQAHgKAMgFQAMgFAPAAQAQAAALAFQAMAGAHAJQAIAKADANQAEANAAAQIAAAGIgSAAIAAgHQAAgMgDgKQgCgJgFgIQgFgHgIgEQgJgEgLAAQgLAAgIAEQgIAEgFAHQgKAPAAAXQAAARAIANQAHANAMAJIAYAUIAZATQAMAKAHAOQAIAOAAAUQAAAQgDANQgEANgIAKQgHAJgMAGQgLAFgRAAQgPAAgMgFg");
	this.shape_2.setTransform(-0.5,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52606B").s().p("Ag3CQIAAkfIBvAAIAAASIhdAAIAAB0IBOAAIAAAQIhOAAIAAB4IBdAAIAAARg");
	this.shape_3.setTransform(-15.1,-4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#52606B").s().p("AgMCQIhAkfIAUAAIA5EIIA6kIIASAAIg+Efg");
	this.shape_4.setTransform(-31.3,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-42.2,-22.5,84.4,45), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52606B").s().p("AAiCQIgIg1Ig3AAIgIA1IgpAAIAukfIBBAAIAuEfgAATA1IgUiQIgWCQIAqAAg");
	this.shape.setTransform(23.6,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52606B").s().p("AhECQIAAkfIBGAAQARABANAEQAMAEAJAKQAIAIAEAOQAEANAAASIAACPQAAASgEANQgEANgIAKQgJAJgMAEQgNAEgRABgAgXBmIAYAAQALAAAGgFQAGgIAAgPIAAiTQAAgPgGgIQgGgFgLAAIgYAAg");
	this.shape_1.setTransform(7.1,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52606B").s().p("AAhCQIgIg1Ig2AAIgIA1IgpAAIAukfIBBAAIAuEfgAAUA1IgWiQIgVCQIArAAg");
	this.shape_2.setTransform(-9.8,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52606B").s().p("Ag6CQIAAkfIAtAAIAAD1IBIAAIAAAqg");
	this.shape_3.setTransform(-24.4,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-34,-22.5,68.1,45), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgMA+QgFgBgEgFQgDgEgDgGQgCgGAAgHIAAhBQAAgIACgFQADgGADgEQAEgEAFgCQAGgDAGAAQAIAAAFADQAGACADAEQAEAEACAGQABAFABAIIAAAMIgTAAIAAgNQAAgGgDgDQgCgEgFAAQgFAAgCAEQgDADAAAGIAABDQAAAGADADQACAEAFAAQAFAAACgEQADgDAAgGIAAgSIATAAIAAARQgBAHgBAGQgCAGgEAEQgDAFgGABQgFADgIAAQgGAAgGgDg");
	this.shape.setTransform(8.1,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#103B7A").s().p("AgaA/IAAh9IA1AAIAAASIghAAIAAAjIAaAAIAAARIgaAAIAAAlIAhAAIAAASg");
	this.shape_1.setTransform(1.4,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#103B7A").s().p("AAXA/IAAhaIgOBaIgSAAIgOhYIAABYIgRAAIAAh9IAbAAIANBYIAOhYIAbAAIAAB9g");
	this.shape_2.setTransform(-6.8,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-13.7,-11,27.4,22), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AggA/IAwh9IARAAIgwB9g");
	this.shape.setTransform(-0.1,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-5.5,-11,11.1,22), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgZA/IAAh9IAzAAIAAASIggAAIAABrg");
	this.shape.setTransform(3.2,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#103B7A").s().p("AgJA/IAAhrIgUAAIAAgSIA8AAIAAASIgVAAIAABrg");
	this.shape_1.setTransform(-3.3,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-8.5,-11,17.2,22), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgTBhQgJgDgGgHQgFgGgEgJQgDgKAAgLIAAhlQAAgLADgKQAEgJAFgGQAGgHAJgDQAJgDAKAAQALAAAJADQAIADAHAHQAGAGADAJQADAKAAALIAABlQAAALgDAKQgDAJgGAGQgHAHgIADQgJADgLAAQgKAAgJgDgAgKhDQgFAFAAAKIAABpQAAAKAFAFQADAFAHgBQAIABADgFQAFgFAAgKIAAhpQAAgKgFgFQgDgEgIAAQgHAAgDAEg");
	this.shape.setTransform(0,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-7.6,-16,15.3,32), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgTBhQgJgDgHgHQgGgGgDgJQgDgKAAgLIAAgQQAAgOAFgKQAEgLAKgEQgKgGgEgKQgFgJAAgPIAAgGQAAgLADgKQADgJAGgGQAHgHAJgDQAJgDAKAAQAMAAAJADQAJADAGAHQAGAGADAJQADAKAAALIAAAGQAAAOgEAKQgFAKgKAGQAKAEAFALQAEAKAAAOIAAAQQAAALgDAKQgDAJgGAGQgGAHgJADQgJADgMAAQgKAAgJgDgAgMAPQgEAGAAALIAAASQAAANAFAFQAEAEAHAAQAIAAAEgEQAFgFAAgNIAAgSQAAgLgEgGQgEgFgJAAQgHAAgFAFgAgLhCQgFAFAAAMIAAALQAAALAFAGQAEAEAHAAQAIAAAFgEQAEgGAAgLIAAgLQAAgMgEgFQgFgFgIAAQgHAAgEAFg");
	this.shape.setTransform(-0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-7.6,-16,15.3,32), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgTBhQgJgDgHgHQgGgGgDgJQgDgKAAgLIAAgQQAAgOAFgKQAEgLAKgEQgKgGgEgKQgFgJAAgPIAAgGQAAgLADgKQADgJAGgGQAHgHAJgDQAJgDAKAAQAMAAAJADQAJADAGAHQAGAGADAJQADAKAAALIAAAGQAAAOgEAKQgFAKgKAGQAKAEAFALQAEAKAAAOIAAAQQAAALgDAKQgDAJgGAGQgGAHgJADQgJADgMAAQgKAAgJgDgAgMAPQgEAGAAALIAAASQAAANAFAFQAEAEAHAAQAIAAAEgEQAFgFAAgNIAAgSQAAgLgEgGQgEgFgJAAQgHAAgFAFgAgLhCQgFAFAAAMIAAALQAAALAFAGQAEAEAHAAQAIAAAFgEQAEgGAAgLIAAgLQAAgMgEgFQgFgFgIAAQgHAAgEAFg");
	this.shape.setTransform(-0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-7.6,-16,15.3,32), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgdBiIAsinIg8AAIAAgcIBbAAIAAAbIgtCog");
	this.shape.setTransform(-0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-7.6,-16,15.3,32), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgtBjIAAgYQAAgLADgJQACgIAFgHQAFgLAPgQQAPgQAGgKQAFgHABgJQADgJAAgKQAAgNgEgEQgDgFgIAAQgIAAgDAEQgFAFAAAKIAAAVIgdAAIAAgTQAAgMADgJQADgJAGgGQAGgHAIgDQAJgDAKAAQALAAAJADQAIADAHAHQAFAGADAJQADAJAAAMQAAALgCAKQgDAKgFAJIgJAPIgLANQgfAfAAARIABAEIA5AAIAAAcg");
	this.shape.setTransform(0.1,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-7.6,-16,15.3,32), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgJA/IAAhrIgVAAIAAgSIA8AAIAAASIgUAAIAABrg");
	this.shape.setTransform(3.5,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#103B7A").s().p("AgMA+QgGgBgDgFQgEgEgCgGQgCgGAAgHIAAhBQAAgIACgFQACgGAEgEQADgEAGgCQAGgDAGAAQAHAAAGADQAFACAEAEQAFAEABAGQACAFAAAIIAABBQAAAHgCAGQgBAGgFAEQgEAFgFABQgGADgHAAQgGAAgGgDgAgHgqQgCADAAAGIAABDQAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAhDQAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(-3.3,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-8.8,-11,17.7,22), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AgJA/IAAhrIgUAAIAAgSIA7AAIAAASIgUAAIAABrg");
	this.shape.setTransform(18.5,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#103B7A").s().p("AAOA/IAAhYIgIAeIgQA6IgUAAIAAh9IASAAIAABPIAHgbIAPg0IAWAAIAAB9g");
	this.shape_1.setTransform(11.5,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#103B7A").s().p("AAVBIIAAgSIgqAAIAAASIgTAAIAAgjIAIAAQADgDAAgEIACgKIAEhbIA3AAIAABsIAIAAIAAAjgAgHAUQgBAHgCAEQgBADgCADIAZAAIAAhaIgQAAg");
	this.shape_2.setTransform(3.3,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#103B7A").s().p("AgaA/IAAh9IA1AAIAAASIghAAIAAAjIAaAAIAAARIgaAAIAAAlIAhAAIAAASg");
	this.shape_3.setTransform(-4.3,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#103B7A").s().p("AgdA/IAAh9IAdAAQAIAAAFACQAGACADAEQADAEADAGQACAFAAAIIAAARQAAAHgCAGQgDAEgDAEQgDAFgGABQgFACgIAAIgJAAIAAAwgAgJgCIAJAAQAFABACgDQADgDAAgGIAAgTQAAgGgDgDQgCgDgFAAIgJAAg");
	this.shape_4.setTransform(-10.8,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#103B7A").s().p("AANA/IgTgyIgGALIAAAnIgUAAIAAh9IAUAAIAAA3IAZg3IAUAAIgcA4IAcBFg");
	this.shape_5.setTransform(-17.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-23.9,-11,47.8,22), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103B7A").s().p("AAOBNIAAhYIgIAeIgQA6IgUAAIAAh9IASAAIAABPIAGgcIAQgzIAWAAIAAB9gAgIg6QgDgBgDgDQgCgCgCgEIgBgIIAMAAQABAEABACQACACADAAQAEAAADgCQACgCAAgEIAMAAQAAAFgBADQgBAEgDACQgDADgEABQgEACgFAAQgEAAgEgCg");
	this.shape.setTransform(18.1,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#103B7A").s().p("AAOA/IAAhYIgIAeIgQA6IgUAAIAAh9IASAAIAABPIAGgbIAQg0IAWAAIAAB9g");
	this.shape_1.setTransform(10.4,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#103B7A").s().p("AANA/IgTgyIgGALIAAAnIgUAAIAAh9IAUAAIAAA3IAZg3IAUAAIgcA4IAcBFg");
	this.shape_2.setTransform(3.1,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#103B7A").s().p("AgZA/IAAh9IAzAAIAAASIggAAIAABrg");
	this.shape_3.setTransform(-4.1,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#103B7A").s().p("AgaA/IAAh9IA1AAIAAASIghAAIAAAjIAaAAIAAARIgaAAIAAAlIAhAAIAAASg");
	this.shape_4.setTransform(-10.6,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#103B7A").s().p("AAQA/IAAhrIgRAAIgCBLIgCAPQgCAGgDAEQgDADgGACQgFACgIAAIgDAAIAAgSQAIAAACgCQACgCABgJIADheIA3AAIAAB9g");
	this.shape_5.setTransform(-18.4,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-24.1,-11,48.3,22), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52606B").s().p("AgeBJIAAiSIA+AAIAAAVIgoAAIAAAqIAfAAIAAATIgfAAIAAArIAoAAIAAAVg");
	this.shape.setTransform(25.5,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52606B").s().p("AAdBJIAAiSIAXAAIAACSgAgzBJIAAiSIAXAAIAAA3IALAAQAIABAHACQAFACAFAFQAEAFACAFQACAHAAAJIAAATQAAAJgCAHQgCAGgEAFQgFAFgFACQgHACgIAAgAgcA0IALAAQAFAAADgCQADgEAAgIIAAgWQAAgHgDgDQgDgDgFgBIgLAAg");
	this.shape_1.setTransform(15.3,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52606B").s().p("AgjBJIAAiSIAjAAQAIAAAHACQAGACAEAFQAEAEACAGQACAHAAAJIAAAEQAAAMgDAHQgEAHgIAEIAIAEIAGAHQAEAHAAAMIAAAMQAAAJgDAGQgCAHgEAEQgFAFgGACQgHACgJAAgAgMA0IAMAAQAHAAACgCQADgEAAgIIAAgNQAAgKgDgEQgDgDgHgBIgLAAgAgMgMIAJAAQAGAAADgEQAEgDAAgJIAAgJQAAgHgDgEQgCgEgGAAIgLAAg");
	this.shape_2.setTransform(5,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52606B").s().p("AghBJIAAiSIAhAAQAIABAHACQAGACAFAFQAEAFACAGQACAHAAAJIAAATQAAAJgCAHQgCAFgEAFQgFAEgGADQgHACgIAAIgKAAIAAA3gAgKgBIAKAAQAFgBADgDQADgDAAgIIAAgVQAAgJgDgCQgDgEgFAAIgKAAg");
	this.shape_3.setTransform(-3.1,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#52606B").s().p("AgeBJIAAiSIA+AAIAAAVIgoAAIAAAqIAfAAIAAATIgfAAIAAArIAoAAIAAAVg");
	this.shape_4.setTransform(-11.2,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#52606B").s().p("AAMBJIAAh9IgYAAIAAB9IgYAAIAAiSIBIAAIAACSg");
	this.shape_5.setTransform(-19.7,-2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#52606B").s().p("AgjBJIAAiSIAjAAQAIAAAHACQAGACAEAFQAEAEACAGQACAHAAAJIAAAEQAAAMgDAHQgEAHgIAEIAIAEIAGAHQAEAHAAAMIAAAMQAAAJgDAGQgCAHgEAEQgFAFgGACQgHACgJAAgAgMA0IAMAAQAHAAACgCQADgEAAgIIAAgNQAAgKgDgEQgDgDgHgBIgLAAgAgMgMIAJAAQAGAAADgEQAEgDAAgJIAAgJQAAgHgDgEQgCgEgGAAIgLAAg");
	this.shape_6.setTransform(-28.4,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-34.8,-12.5,69.7,25), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52606B").s().p("AhoAJIAAgSIDRAAIAAASg");
	this.shape.setTransform(50.5,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52606B").s().p("AAQBaIAAhnIgKAjIgSBEIgXAAIAAiSIAUAAIAABcIAJghIASg7IAZAAIAACSgAgJhDQgEgBgDgDQgEgDgBgFIgCgKIAPAAQAAAGADACQABACAFAAQAEAAACgCQAEgCAAgGIAOAAQAAAGgCAEQgBAEgDAEQgDADgFABQgFABgFAAQgGAAgEgBg");
	this.shape_1.setTransform(32.1,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52606B").s().p("AgOBIQgHgBgEgGQgEgEgCgHQgDgHAAgJIAAhLQAAgJADgHQACgHAEgEQAEgFAHgDQAHgCAHAAQAJAAAGACQAGADAFAFQAEAEADAHQACAHAAAJIAABLQAAAJgCAHQgDAHgEAEQgFAGgGABQgGADgJAAQgHAAgHgDgAgIgyQgDADAAAJIAABOQAAAHADAEQADADAFAAQAGAAADgDQADgEAAgHIAAhOQAAgJgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_2.setTransform(23.3,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52606B").s().p("AAMBJIAAg/IgZAAIAAA/IgWAAIAAiSIAWAAIAAA/IAZAAIAAg/IAZAAIAACSg");
	this.shape_3.setTransform(14.6,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#52606B").s().p("AgfBJIAAiSIA+AAIAAAVIgmAAIAAAqIAeAAIAAATIgeAAIAAArIAmAAIAAAVg");
	this.shape_4.setTransform(6.3,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#52606B").s().p("AATBUIAAgVIg7AAIAAiSIAWAAIAAB9IAZAAIAAh9IAZAAIAAB+IAJAAIAAApg");
	this.shape_5.setTransform(-2.3,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#52606B").s().p("AAQBaIAAhnIgKAjIgSBEIgYAAIAAiSIAVAAIAABcIAJghIASg7IAZAAIAACSgAgJhDQgEgBgDgDQgEgDgBgFIgCgKIAOAAQABAGADACQABACAFAAQAEAAACgCQAEgCAAgGIAOAAQAAAGgCAEQgBAEgDAEQgDADgFABQgEABgGAAQgGAAgEgBg");
	this.shape_6.setTransform(-15.3,-3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#52606B").s().p("AgOBIQgGgBgFgGQgEgEgCgHQgDgHAAgJIAAhLQAAgJADgHQACgHAEgEQAFgFAGgDQAHgCAHAAQAIAAAHACQAGADAFAFQAEAEADAHQACAHAAAJIAABLQAAAJgCAHQgDAHgEAEQgFAGgGABQgHADgIAAQgHAAgHgDgAgIgyQgDADAAAJIAABOQAAAHADAEQAEADAEAAQAGAAADgDQADgEAAgHIAAhOQAAgJgDgDQgDgDgGAAQgEAAgEADg");
	this.shape_7.setTransform(-24,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#52606B").s().p("AAOBJIgVg6IgHANIAAAtIgXAAIAAiSIAXAAIAABAIAdhAIAXAAIggBCIAgBQg");
	this.shape_8.setTransform(-32.3,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#52606B").s().p("AARBJIgEgaIgbAAIgEAaIgVAAIAXiSIAhAAIAXCSgAAKAbIgKhJIgLBJIAVAAg");
	this.shape_9.setTransform(-41.3,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#52606B").s().p("AgKBJIAAh9IgZAAIAAgVIBHAAIAAAVIgYAAIAAB9g");
	this.shape_10.setTransform(-49.4,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#52606B").s().p("AgOBIQgGgBgFgGQgEgEgDgHQgBgHAAgJIAAhLQAAgJABgHQADgHAEgEQAFgFAGgDQAHgCAHAAQAIAAAHACQAGADAFAFQAEAEACAHQADAHAAAJIAAAOIgXAAIAAgPQAAgJgCgDQgDgDgGAAQgFAAgDADQgEADAAAJIAABOQAAAIAEADQADADAFAAQAGAAADgDQACgDAAgIIAAgWIAXAAIAAAUQAAAJgDAHQgCAHgEAEQgFAGgGABQgHADgIAAQgHAAgHgDg");
	this.shape_11.setTransform(-60.5,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-66.6,-12.5,133.3,25), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52606B").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(69.5,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52606B").s().p("AAMBJIAAg/IgZAAIAAA/IgWAAIAAiSIAWAAIAAA/IAZAAIAAg/IAYAAIAACSg");
	this.shape_1.setTransform(63,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52606B").s().p("AARBJIgEgaIgbAAIgEAaIgVAAIAXiSIAhAAIAXCSgAAKAbIgKhJIgLBJIAVAAg");
	this.shape_2.setTransform(54.1,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52606B").s().p("AAYBUIAAgVIgwAAIAAAVIgWAAIAAgpIAJAAQADgEABgFIABgKIAGhrIA/AAIAAB+IAKAAIAAApgAgJAYQAAAHgCAFQgCAEgDADIAeAAIAAhpIgTAAg");
	this.shape_3.setTransform(44.6,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#52606B").s().p("AgfBJIAAiSIA+AAIAAAVIgmAAIAAAqIAeAAIAAATIgeAAIAAArIAmAAIAAAVg");
	this.shape_4.setTransform(35.8,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#52606B").s().p("AgOBIQgGgBgFgGQgEgEgDgHQgBgHAAgJIAAhLQAAgJABgHQADgHAEgEQAFgFAGgDQAHgCAHAAQAIAAAHACQAGADAFAFQAEAEACAHQADAHAAAJIAAAOIgXAAIAAgPQAAgJgCgDQgDgDgGAAQgFAAgDADQgEADAAAJIAABOQAAAIAEADQADADAFAAQAGAAADgDQACgDAAgIIAAgWIAXAAIAAAUQAAAJgDAHQgCAHgEAEQgFAGgGABQgHADgIAAQgHAAgHgDg");
	this.shape_5.setTransform(27.7,-2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#52606B").s().p("AAQBaIAAhnIgJAjIgTBEIgXAAIAAiSIAUAAIAABcIAIghIASg7IAaAAIAACSgAgJhDQgEgBgDgDQgDgDgCgFIgCgKIAPAAQAAAGACACQADACAEAAQAFAAACgCQADgCAAgGIAOAAQAAAGgCAEQgBAEgDAEQgEADgEABQgFABgFAAQgFAAgFgBg");
	this.shape_6.setTransform(15.6,-3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#52606B").s().p("AAdBJIAAiSIAXAAIAACSgAgzBJIAAiSIAXAAIAAA3IALAAQAIABAHACQAFACAFAFQAEAFACAFQACAHAAAJIAAATQAAAJgCAHQgCAGgEAFQgFAFgFACQgHACgIAAgAgcA0IALAAQAFAAADgCQADgEAAgIIAAgWQAAgHgDgDQgDgDgFgBIgLAAg");
	this.shape_7.setTransform(4.9,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#52606B").s().p("AANBJIAAg/IgZAAIAAA/IgYAAIAAiSIAYAAIAAA/IAZAAIAAg/IAXAAIAACSg");
	this.shape_8.setTransform(-5.7,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#52606B").s().p("AgKBJIAAh9IgZAAIAAgVIBHAAIAAAVIgYAAIAAB9g");
	this.shape_9.setTransform(-14,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#52606B").s().p("AghBJIAAiSIAhAAQAIABAHACQAGACAFAFQAEAFACAGQACAHAAAJIAAATQAAAJgCAHQgCAFgEAFQgFAEgGADQgHACgIAAIgKAAIAAA3gAgKgBIAKAAQAFgBADgDQADgDAAgIIAAgVQAAgJgDgCQgDgEgFAAIgKAAg");
	this.shape_10.setTransform(-21.5,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#52606B").s().p("AgOBIQgGgBgFgGQgFgEgBgHQgDgHAAgJIAAhLQAAgJADgHQABgHAFgEQAFgFAGgDQAGgCAIAAQAIAAAHACQAGADAFAFQAEAEADAHQACAHAAAJIAABLQAAAJgCAHQgDAHgEAEQgFAGgGABQgHADgIAAQgIAAgGgDgAgIgyQgDADAAAJIAABOQAAAHADAEQADADAFAAQAGAAADgDQADgEAAgHIAAhOQAAgJgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_11.setTransform(-30,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#52606B").s().p("AgKBJIAAgQIgJAAQgJAAgGgDQgHgCgEgFQgEgEgDgHQgCgHAAgJIAAgnQAAgJACgGQADgHAEgFQAEgEAHgDQAGgCAJAAIAJAAIAAgSIAVAAIAAASIAJAAQAJAAAGACQAGADAEAEQAFAFACAHQADAGgBAJIAAAnQABAJgDAHQgCAHgFAEQgEAFgGACQgGADgJAAIgJAAIAAAQgAALAlIAJAAQAFAAADgDQAEgEAAgIIAAgqQAAgIgEgDQgDgDgFgBIgJAAgAgcgfQgCADAAAIIAAAqQAAAIACAEQADADAGAAIAJAAIAAhIIgJAAQgGABgDADg");
	this.shape_12.setTransform(-40.3,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#52606B").s().p("AAbBJIAAhoIgQBoIgVAAIgRhmIAABmIgUAAIAAiSIAgAAIAQBoIAQhoIAfAAIAACSg");
	this.shape_13.setTransform(-52.2,-2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#52606B").s().p("AgOBIQgHgBgEgGQgFgEgCgHQgCgHAAgJIAAhLQAAgJACgHQACgHAFgEQAEgFAHgDQAGgCAIAAQAJAAAGACQAHADAEAFQAFAEACAHQACAHAAAJIAABLQAAAJgCAHQgCAHgFAEQgEAGgHABQgGADgJAAQgIAAgGgDgAgIgyQgDADAAAJIAABOQAAAHADAEQADADAFAAQAGAAADgDQADgEAAgHIAAhOQAAgJgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_14.setTransform(-62.1,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#52606B").s().p("AAOBJIgVg6IgHANIAAAtIgXAAIAAiSIAXAAIAABAIAdhAIAXAAIggBCIAgBQg");
	this.shape_15.setTransform(-70.4,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-77,-12.5,154.1,25), null);


(lib.over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.over, new cjs.Rectangle(-168,-140,336,280), null);


(lib.n1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo__n();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.n1, new cjs.Rectangle(-12.5,-9.5,25,19), null);


(lib.logo__line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo__line();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo__line_1, new cjs.Rectangle(-55.5,-7.5,111,15), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52606A").s().p("ArNAFIAAgJIWbAAIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-71.8,-0.5,143.7,1.1), null);


(lib.blick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.471)","rgba(255,255,255,0.459)","rgba(255,255,255,0.157)","rgba(255,255,255,0)"],[0,0.412,0.525,0.733,1],-64.5,0,64.5,0).s().p("AqEeFMAAAg8JIUJAAMAAAA8Jg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blick, new cjs.Rectangle(-64.5,-192.5,129,385), null);


(lib.wheel_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.inner = new lib.црууд();
	this.inner.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel_in, new cjs.Rectangle(-346.4,-180.6,563,300.8), null);


(lib.t4444 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(23.4,0);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4444, new cjs.Rectangle(-47.3,-11,94.6,22), null);


(lib.t555 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(49.2,2.5);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.2,2.5);

	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.3,2.5);

	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.5,0);

	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.5,0);

	this.instance_5 = new lib.Symbol9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-12.5,0);

	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-27.9,0);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-38.9,0);

	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-54,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t555, new cjs.Rectangle(-62.8,-16,125.8,32), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-42.2,22);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.4,0);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-77,-34.5,154.1,69), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo__n.png
	this.n1 = new lib.n1();
	this.n1.parent = this;
	this.n1.setTransform(49,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.n1).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao1BnIAhjNIRKAAIAADNg");
	mask.setTransform(-0.7,21.6);

	// logo__line.png
	this.line = new lib.logo__line_1();
	this.line.parent = this;
	this.line.setTransform(54.6,12.1,1,1,0,0,0,55.6,-7.4);

	var maskedShapeInstanceList = [this.line];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-61.5,-27,123,54), null);


(lib.blick_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blick_wrap, new cjs.Rectangle(-64.5,-192.5,129,385), null);


(lib.car = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al+KeQgigMAAABQABABmNgfQmNgeABABQABABglAGQglAGAAABQABABgugRIgtgQIAAgeIAAgdQABACgvi8QABACANgUQANgTAAABQABACAGgtIAHgrQABABAKgzIAMgyQABACAlhYQAmhWABABQABACAlgvQAmguABABQABABA3gWQA4gVABABQABABBTgTQBTgTAAABQABABAvgRQAvgRABABQgLgwACADQABABAKgcQALgdAAABQABACAtgGQAsgGABABQABACARgGQASgGAAABQABACAfgPQAfgPAAABQABABCMhcQCMhbAAABQABABCiglQCjgmAAABQABACA5gIQA7gIAAABQABABAvgDQAvgEAAABQABACB1gGQB1gGABABQABACB5ABQB6ABAAABQABABBqATQBqATAAABQABACBYApIBYArIBkCEICDCDIBWBoQABACAGBAIAHBCQABACARBpIgSgGQgWgJgKACQgLABgeAYQgcAWABADQABABgVBBQgVBAAAABQABACgOAcQgOAcAAABQABABkBBMQkABMAAABQgYiLgRghQgFgLgahLQgWhAgKgJQgNgMgbgHQgcgIgSAFQgPAEgYAgQgfArgHAHQgRAQggA8QgeA5ACADQABABgcBOQgcBOABABQABACgWA3QgVA3ABABQABACg1AcQg1AcABABQABAChpAQQhoARAAABQABACifADQifAEAAABIAAAAQgCAAgggMg");
	mask.setTransform(-8.7,-27.6);

	// Layer 2
	this.blick = new lib.blick_wrap();
	this.blick.parent = this;
	this.blick.setTransform(-189.7,84.1,1,1,-33.8,0,0,-0.1,-0.1);

	var maskedShapeInstanceList = [this.blick];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Layer 4
	this.wh = new lib.wheel_in();
	this.wh.parent = this;
	this.wh.setTransform(42.1,25.4,0.662,1);

	this.timeline.addTween(cjs.Tween.get(this.wh).wait(1));

	// Layer 1
	this.instance = new lib.vesta();
	this.instance.parent = this;
	this.instance.setTransform(-179.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(-187.1,-155.2,372.5,300.8), null);


// stage content:
(lib._336x280_vesta = function(mode,startPosition,loop) {
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
		
		var repeated = 0;
		
		function check(){
			if (repeated >= 2) {
				tl.stop();
			}
		}
		
		var t3 = g(this.t3);
		var t4 = g(this.t4);
		var t5 = g(this.t5);
		
		var blick = g(this.car.blick);
		
		var tl = new TimelineMax({repeat: -1,  onRepeat: function(){
			repeated += 1;
		}});
		
		tl
			.to(this.over, .5, {alpha: 0})
			.from(this.car, 1.2, {scaleX: 0, scaleY:0, x:'+=200', ease: Expo.easeOut}, 'car')
			.from(this.car.wh.inner, 1.2, {rotation: '+=360', ease: Expo.easeOut}, 'car')
			
			.from(this.t1, .8, {x:'-=150', alpha: 0, ease: Expo.easeOut}, '-=.5')
			.from(this.t2, .6, {alpha: 0}, '-=.5')
			.from(this.line, .8, {scaleX: 0, ease: Expo.easeInOut}, '-=.5')
			.from(this.logo, .5, {alpha:0}, '-=.3')
			.fromTo(blick, 1.6, {x: 0, alpha: .7}, {x: 400, alpha: 1, ease: Sine.easeInOut}, 'blick')
			.staggerFrom(t3, .7, {x:'-=150', alpha: 0, ease: Expo.easeInOut}, .4, 'blick')
			
			.staggerFrom(t4, .7, {x:'+=150', alpha: 0, ease: Expo.easeOut}, .2, '+=.3')
			.staggerFrom(t5, .5, {y:'+=10', alpha: 0, ease: Back.easeOut}, .1, '-=.3')
			.fromTo(blick, 1.6, {x: 0, alpha: .7}, {x: 400, alpha: 1, ease: Sine.easeInOut}, 'blick2')
			
			
			.from(this.logo.line, .6, {x: -112, y: 33, ease: Expo.easeOut}, '-=.4')
			.from(this.logo.n1, .6, {scaleX: '+=1', scaleY:'+=1', alpha: 0, ease: Expo.easeOut, onComplete: check}, '-=.3')
			.add('car2', '+=1')
			.to(this.car, .7, {scaleX: "+=.3", scaleY:'+=.2', x:'-=200', ease: Expo.easeIn}, 'car2')
			.to(this.car.wh.inner, .7, {rotation: '-=360', ease: Expo.easeIn}, 'car2')
			.to(this.over, .5, {alpha: 1}, 'car2+=.2')
			
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// over
	this.over = new lib.over();
	this.over.parent = this;
	this.over.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.over).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(51.2,255.8,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t5
	this.t5 = new lib.t555();
	this.t5.parent = this;
	this.t5.setTransform(252.8,49.4);

	this.t4 = new lib.t4444();
	this.t4.parent = this;
	this.t4.setTransform(237.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t4},{t:this.t5}]}).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(90.3,94.9);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(121.2,36.3);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(47.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// car
	this.car = new lib.car();
	this.car.parent = this;
	this.car.setTransform(351.6,175.1,1,1,0,0,0,124.5,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// line
	this.line = new lib.line();
	this.line.parent = this;
	this.line.setTransform(88.7,53.8);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

	// back
	this.instance = new lib.back_v();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,140,535.5,463.7);
// library properties:
lib.properties = {
	id: 'ECE7BC966F244EB1A1BD09AB5D940EB9',
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"back_v.jpg", id:"back_v"},
		{src:"banner_atlas_P_.png", id:"banner_atlas_P_"}
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
an.compositions['ECE7BC966F244EB1A1BD09AB5D940EB9'] = {
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