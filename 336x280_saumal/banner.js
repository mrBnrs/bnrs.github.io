(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banner_atlas_P_", frames: [[0,151,209,118],[328,0,136,153],[351,155,73,100],[351,257,107,33],[426,155,55,68],[211,155,138,138],[0,0,326,149]]}
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



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.box = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.can = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.can_sm = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flakes = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.igr = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.phone = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.snow = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(6);
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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/ZY7MAAAgx1MA+zAAAMAAAAx1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-200.9,-159.4,402,319), null);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiaCbIAAk1IE1AAIAAE1g");
	mask.setTransform(-41,1.1);

	// Layer 1
	this.instance = new lib.flakes();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-16.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol107, new cjs.Rectangle(-53.5,-14.4,28,31), null);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqCbIAAk1IE1AAIAAE1g");
	mask.setTransform(26.8,1.1);

	// Layer 1
	this.instance = new lib.flakes();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-16.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol106, new cjs.Rectangle(22.5,-14.4,31,31), null);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjMDNIAAmZIGZAAIAAGZg");

	// Layer 1
	this.instance = new lib.flakes();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-16.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol105, new cjs.Rectangle(-20.5,-16.5,41,33), null);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AgrA1IAAgFIA7hdIgiAAQgIAAgGAFQgCACgCADIAAAKIgGAAIAAgOIABgFIACgEQABgCADgBIAHgBIBIAAIg+BiIA9AAIAAAHg");
	this.shape.setTransform(0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol104, new cjs.Rectangle(-6.8,-10.6,13.8,21.3), null);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AAiA1IgJgDIgJgGQgGgEgFgFIgZgbIAAAsIgVAAIgBhUQAAgHgCgFIgCgCQgDgCgEAAIgBAAIAAgFIATAAIAHABQADACABACIADAGIABAKIAAAfIAbgjIAFgGIAGgFQAEgDAEgBQAEgBAEgBIAMAAIAAAGQgJAAgIADQgHABgGAIIgXAdIAkAlIAHAGIAHAGIAHADIAFACIAAAEIgFABIgGABg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol103, new cjs.Rectangle(-7.6,-10.6,15.3,21.3), null);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape.setTransform(3.2,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20C9EC").s().p("AgfA1IAAhUQAAgHgCgFIgDgDQgCgBgEAAIgBAAIAAgFIATAAIAHABQADABABADIADAGIAAAKIAABNIA2AAIAAAHg");
	this.shape_1.setTransform(-3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol102, new cjs.Rectangle(-9.6,-10.6,19.3,21.3), null);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AAuA1IgIgBIgJgCQgEgCgEgFIgHgLIgEgIIgpAAIgNAcIgIAAIAvhoIAGAAIAkBUQADAIAEADQAEAFAFABIAAADIgDABgAAHAQIgQgoIgTAoIAjAAg");
	this.shape.setTransform(0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol101, new cjs.Rectangle(-7.2,-10.6,14.6,21.3), null);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AAlAwQgEgEgCgGQgCgHAAgJIAAg4IgiBTIgFAAIgrhWIAABWIgIAAIAAhoIAUAAIAmBNIAghNIAVAAIAABNQAAAKADAMQABAEACACQACACAEAAIAAAEQgSAAgHgIg");
	this.shape.setTransform(0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol100, new cjs.Rectangle(-9,-10.6,18.1,21.3), null);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AglAGIAAgmQAAgHgCgFIgCgCQgDgCgEAAIAAgFIASAAIAHABQADACABACIADAGIABAKIAAArQAAAQAGAKQAGAJAMAAQAQABAIgLQAHgJAAgVIAAg7IAJAAIAAA7QgBAMgCAIIgDAIIgEAHIgGAFIgIAFQgHADgMAAQgrAAAAgwg");
	this.shape.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol99, new cjs.Rectangle(-7.6,-10.6,15.3,21.3), null);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AAuA1IgIgBIgJgCQgEgCgEgFIgHgLIgEgIIgpAAIgNAcIgIAAIAvhoIAGAAIAkBUQADAIAEADQAEAFAFABIAAADIgDABgAAHAQIgQgoIgTAoIAjAAg");
	this.shape.setTransform(0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol98, new cjs.Rectangle(-7.3,-10.6,14.6,21.3), null);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AgOA3IgMgFQgFgCgDgDQgDgEAAgEIAAgTIAFAAQABAIACAGQADAGAEADQAEAEAFACQAFACAHgBIAHgBIAGgCQAGgFAAgHIgBgGIgDgGQgFgEgIgFIgSgLIgKgGIgGgHQgEgGAAgJQAAgGACgGQADgFAFgDQAEgEAHgBQAHgCAIAAIAMABQAGABAFACQAGADADAEQADADAAAFIAAATIgFAAQgDgRgHgHQgHgHgMAAQgIAAgFAEQgDACgBADQgBACAAAEIABAGIADAFIAGAFIAGAEIATAMQALAFAFAGQAFAGAAAJQAAAOgKAHQgLAJgSAAIgNgBg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol97, new cjs.Rectangle(-6.6,-10.6,13.2,21.3), null);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape.setTransform(5.9,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20C9EC").s().p("AAeA2IgZg9IgVA9IgGAAIgjhXQgEgJgDgEQgEgDgFgBIAAgDIADAAIAEAAIAJAAQAEABAEACQAEACAEAEIAHALIAVA2IAOgoIgFgOQgEgJgEgEQgEgDgFgBIAAgDIADAAIADAAIAJAAIAIADQAEACAEAEQADAEADAHIAXA5IAbhMIAIAAIgmBqg");
	this.shape_1.setTransform(-3.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol96, new cjs.Rectangle(-12.3,-10.6,24.7,21.3), null);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AAeA2IgZg9IgVA9IgGAAIgjhXQgEgJgDgEQgEgDgFgBIAAgDIADAAIAEAAIAJAAQAEABAEACQAEACAEAEIAHALIAVA2IAOgoIgFgOQgEgJgEgEQgEgDgFgBIAAgDIADAAIADAAIAJAAIAIADQAEACAEAEQADAEADAHIAXA5IAbhMIAIAAIgmBqg");
	this.shape.setTransform(-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol95, new cjs.Rectangle(-9.3,-10.6,18.7,21.3), null);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20C9EC").s().p("AAeA2IgZg9IgVA9IgGAAIgjhXQgEgJgDgEQgEgDgFgBIAAgDIADAAIAEAAIAJAAQAEABAEACQAEACAEAEIAHALIAVA2IAOgoIgFgOQgEgJgEgEQgEgDgFgBIAAgDIADAAIADAAIAJAAIAIADQAEACAEAEQADAEADAHIAXA5IAbhMIAIAAIgmBqg");
	this.shape.setTransform(-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol94, new cjs.Rectangle(-9.3,-10.6,18.7,21.3), null);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgHA6QgDgDAAgFQAAgFADgDQACgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgFAAgCgDgAgIAeIgDhaIAXAAIgDBag");
	this.shape.setTransform(41.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgjA7IAAheQAAgIgCgFQgCgCgDgCQgCgBgEAAIgCAAIAAgGIBOAAQAFABADABIAFADIADAFIAAAFIAAAQIgGAAQABgGgCgFQgBgEgEgCIgGgEIgKgBIgcAAIAAAtIAuAAIAAAHIguAAIAAAyIAeAAIAJgCIAIgDQAHgFAFgLIAEABIgFAPQgCAFgEAEQgDADgHAAg");
	this.shape_1.setTransform(34.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AAgA7IAAheIgzBeIgWAAIAAheQAAgIgBgFQgCgCgDgCQgCgBgEAAIgCAAIAAgGIAWAAQAFABADABQACABACADQACADACAEIAAALIAABHIAzhfIAWAAIAAB2g");
	this.shape_2.setTransform(21.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AApA7IgIgBQgDgBgCgCQgCgDgBgFIgBgLIAAgiIgvAAIAAA5IgYAAIAAheQAAgIgCgFQgBgCgDgCQgCgBgEAAIgCAAIAAgGIAWAAQAEABADABQADABACADQACADABAEIABALIAAAeIAvAAIAAg2IAYAAIAABfQAAAIACAFQABACADACIAGABIACAAIAAAFg");
	this.shape_3.setTransform(9.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AA0A8IgKgBIgJgDQgFgDgEgEQgEgFgEgHIgEgLIgvAAIgPAhIgJAAIA1h2IAHAAIApBgQACAHAGAFQAEAFAGABIAAAEIgEABgAAIASIgTguIgUAuIAnAAg");
	this.shape_4.setTransform(-2.4,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgKA7IAAhtIgNAAIgIABQgEABgDADQgFAFAAAMIgGAAIAAgQIABgFQAAgDACgCQACgCADgBQADgBAEgBIBUAAIAAAJIgmAAIAABtg");
	this.shape_5.setTransform(-13.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AAhA7IAAheIg0BeIgVAAIAAheQAAgIgDgFQgBgCgDgCQgCgBgEAAIgCAAIAAgGIAWAAQAEABADABQAEABACADQABADABAEIABALIAABHIAzhfIAWAAIAAB2g");
	this.shape_6.setTransform(-25.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AAfA7IAAhtIguAAIAABtIgXAAIAAheQAAgIgCgFQgCgCgDgCQgCgBgEAAIgCAAIAAgGIBrAAIAAB2g");
	this.shape_7.setTransform(-38.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol93, new cjs.Rectangle(-46.1,-11.7,92.2,23.5), null);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgkA7IAAheQAAgIgBgFQgCgCgDgCQgCgBgEAAIgCAAIAAgGIBOAAQAFABADABIAFADIACAFIABAFIAAAQIgGAAQAAgGgBgFQgBgEgDgCIgIgEIgJgBIgcAAIAAAtIAuAAIAAAHIguAAIAAAyIAeAAIAJgCIAIgDQAHgFAEgLIAFABIgFAPQgCAFgDAEQgEADgHAAg");
	this.shape.setTransform(48.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgXA6IgKgFIgJgIIgHgJIgFgLQgEgMAAgNQAAgMAEgMIAFgKIAHgJIAJgJIAKgFQALgFAMAAQAHAAAGABQAGACAGACQALAFAHAJQAIAHAEAMIADAMIABAMIgBANIgDAMQgEAMgIAIIgIAIIgKAFIgMAEIgNABQgMAAgLgFgAgYgoQgJAPAAAZQAAAOACAJQADALAEAGQAJAPAPAAQARAAAJgPQAEgGACgLQADgJAAgOQAAgZgJgPQgJgOgRAAQgPAAgJAOg");
	this.shape_1.setTransform(36.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AApA7IgIgBQgDgBgCgCQgCgDgBgFIgBgLIAAgiIgvAAIAAA5IgYAAIAAheQAAgIgCgFQgBgCgDgCQgCgBgEAAIgCAAIAAgGIAWAAQAEABADABQADABACADQACADABAEIABALIAAAeIAvAAIAAg2IAYAAIAABfQAAAIACAFQABACADACIAGABIACAAIAAAFg");
	this.shape_2.setTransform(23.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgbA5QgMgGgIgMIAGgEIAGAHQAEAEAEACIAKAGQAGABAHAAQAEAAAFgBQAFgCAEgEQAEgCACgGQACgEAAgGQAAgNgIgHQgIgHgNAAIgQAAIAAgIIAQAAQAFABADgCQAFgCAEgCQAEgEACgEQADgFAAgHQAAgGgCgFQgDgEgDgDQgEgDgEgBIgGgCQgNAAgIAJQgJAHgDAOIgFAAIAAgPQABgGADgFIAGgEIAJgFIAKgCIAJgBQAIAAAIABQAIACAHADQAHADAEAHIADAGIABAJQAAAFgCAEIgFAIQgEAFgFACQgFAEgHACQAJABAGABQAGADAEAFQAEAFACAFQACAFAAAFIgCAJIgDAHQgEAHgIAEQgHAEgIACIgQABQgQAAgLgGg");
	this.shape_3.setTransform(12,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgjA7IAAheQgBgIgCgFQgBgCgCgCQgDgBgEAAIgCAAIAAgGIBPAAQAEABADABIAFADIACAFIABAFIAAAQIgFAAQgBgGgBgFQgCgEgDgCIgHgEIgJgBIgcAAIAAAtIAuAAIAAAHIguAAIAAAyIAeAAIAJgCIAHgDQAHgFAGgLIAEABIgFAPQgCAFgEAEQgCADgIAAg");
	this.shape_4.setTransform(1.5,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgxA9IgFgCIAAgFQAGgBAFgFQAFgEAEgJQAEgKACgRQABgLABghQAAgIgCgFQgBgDgDgBQgCgBgEAAIgCAAIAAgGIBfAAIAAB2IgXAAIAAhtIgmAAIAAAPQAAAcgDASQgDATgFAMIgFAJIgGAGQgHAFgIAAg");
	this.shape_5.setTransform(-10.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgXA6IgKgFIgJgIIgHgJIgFgLQgEgMAAgNQAAgMAEgMIAFgKIAHgJIAJgJIAKgFQALgFAMAAQAHAAAGABQAGACAGACQALAFAHAJQAIAHAEAMIADAMIABAMIgBANIgDAMQgEAMgIAIIgIAIIgKAFIgMAEIgNABQgMAAgLgFgAgYgoQgJAPAAAZQAAAOACAJQADALAEAGQAJAPAPAAQARAAAJgPQAEgGACgLQADgJAAgOQAAgZgJgPQgJgOgRAAQgPAAgJAOg");
	this.shape_6.setTransform(-22.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AAfA7IAAhtIguAAIAABtIgYAAIAAheQAAgIgBgFQgCgCgDgCQgCgBgEAAIgCAAIAAgGIBrAAIAAB2g");
	this.shape_7.setTransform(-36,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AAhA7IAAheIg0BeIgWAAIAAheQAAgIgCgFQgBgCgCgCQgDgBgEAAIgCAAIAAgGIAWAAQAEABADABQAEABACADQACADAAAEIABALIAABHIAzhfIAWAAIAAB2g");
	this.shape_8.setTransform(-53,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol92, new cjs.Rectangle(-60.9,-11.7,121.8,23.5), null);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgjA7IAAheQgBgIgCgFQgBgCgCgCQgDgBgEAAIgCAAIAAgGIBPAAQAEABADABIAFADIACAFIABAFIAAAQIgFAAQgBgGgBgFQgCgEgDgCIgHgEIgJgBIgcAAIAAAtIAuAAIAAAHIguAAIAAAyIAeAAIAJgCIAHgDQAHgFAGgLIAEABIgFAPQgCAFgEAEQgCADgIAAg");
	this.shape.setTransform(39.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgXA6IgKgFIgJgIIgHgJIgFgLQgEgMAAgNQAAgMAEgMIAFgKIAHgJIAJgJIAKgFQALgFAMAAQAHAAAGABQAGACAGACQALAFAHAJQAIAHAEAMIADAMIABAMIgBANIgDAMQgEAMgIAIIgIAIIgKAFIgMAEIgNABQgMAAgLgFgAgYgoQgJAPAAAZQAAAOACAJQADALAEAGQAJAPAPAAQARAAAJgPQAEgGACgLQADgJAAgOQAAgZgJgPQgJgOgRAAQgPAAgJAOg");
	this.shape_1.setTransform(27.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AgmA7IAAheQAAgIgCgFQgCgCgCgCQgDgBgEAAIgCAAIAAgGIAxAAIARABQAJABAIAEQAIADAFAHQAFAFAAALIgBAIQgCAEgDADQgDAEgFACQgFADgGACQAJABAGABQAGADADAEQAEAEABAFIACAKQAAAKgFAHQgFAFgHAFQgIADgJABIgUABgAgPAyIAEACIAJABIABAAQAOAAAHgHQAIgGAAgMQAAgagdAAIgOAAgAgLgzIgEABIAAAtIAOAAQAEABAFgCQAEgBAEgCQAHgGAAgMQAAgIgDgEQgCgEgEgDIgJgEIgJgBIgEAAg");
	this.shape_2.setTransform(15.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgXA6IgKgFIgJgIIgHgJIgFgLQgEgMAAgNQAAgMAEgMIAFgKIAHgJIAJgJIAKgFQALgFAMAAQAHAAAGABQAGACAGACQALAFAHAJQAIAHAEAMIADAMIABAMIgBANIgDAMQgEAMgIAIIgIAIIgKAFIgMAEIgNABQgMAAgLgFgAgYgoQgJAPAAAZQAAAOACAJQADALAEAGQAJAPAPAAQARAAAJgPQAEgGACgLQADgJAAgOQAAgZgJgPQgJgOgRAAQgPAAgJAOg");
	this.shape_3.setTransform(3.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgiA7IAAheQAAgIgCgFQgBgCgDgCQgCgBgEAAIgCAAIAAgGIAwAAIAKABIAKACIALAEQAFACAEAEQAEAEADAGQACAFAAAJQAAAHgCAGQgDAGgEADQgEAEgFACIgJAEIgJABIgHAAIgQAAIAAAwgAgHgzIgDABIAAA2IAKAAIAIgBQAFgBADgCQAEgEACgFQACgGAAgIQAAgJgCgEQgCgGgEgDQgDgEgEgBIgJgBIgDAAg");
	this.shape_4.setTransform(-8.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgXA6IgKgFIgJgIIgHgJIgFgLQgEgMAAgNQAAgMAEgMIAFgKIAHgJIAJgJIAKgFQALgFAMAAQAHAAAGABQAGACAGACQALAFAHAJQAIAHAEAMIADAMIABAMIgBANIgDAMQgEAMgIAIIgIAIIgKAFIgMAEIgNABQgMAAgLgFgAgYgoQgJAPAAAZQAAAOACAJQADALAEAGQAJAPAPAAQARAAAJgPQAEgGACgLQADgJAAgOQAAgZgJgPQgJgOgRAAQgPAAgJAOg");
	this.shape_5.setTransform(-20.4,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AAzBMQgBgKgBgGQgCgHgDgDQgCgEgEgCQgEgBgFAAIg5AAQgFAAgEABQgEACgCAEQgDADgCAHIgCAQIgJAAIAAgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIAHAAQAFgKADgKQADgKABgKQADgWAAgZQAAgHgCgFQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgCgCgFAAIgBAAIAAgFIBeAAIAABuIAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAjgAgOgiIgDAbIgEAXIgIATIA1AAIAAhlIgmAAg");
	this.shape_6.setTransform(-33.4,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AgbA5QgMgGgIgMIAGgEIAGAHQAEAEAEACIAKAGQAGABAHAAQAEAAAFgBQAFgCAEgEQAEgCACgGQACgEAAgGQAAgNgIgHQgIgHgNAAIgQAAIAAgIIAQAAQAFABADgCQAFgCAEgCQAEgEACgEQADgFAAgHQAAgGgCgFQgDgEgDgDQgEgDgEgBIgGgCQgNAAgIAJQgJAHgDAOIgFAAIAAgPQABgGADgFIAGgEIAJgFIAKgCIAJgBQAIAAAIABQAIACAHADQAHADAEAHIADAGIABAJQAAAFgCAEIgFAIQgEAFgFACQgFAEgHACQAJABAGABQAGADAEAFQAEAFACAFQACAFAAAFIgCAJIgDAHQgEAHgIAEQgHAEgIACIgQABQgQAAgLgGg");
	this.shape_7.setTransform(-44.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol91, new cjs.Rectangle(-51.8,-11.7,103.7,23.5), null);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgGA6QgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgAgEAeIgEhaIAQAAIgDBag");
	this.shape.setTransform(57.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgaA9IAAgGIAJAAIAHgDQAEgBADgDQADgCABgEIABgFIgghJIgDgHIgFgGQgCgDgEgBQgEgCgGAAIAAgFIAVAAQAFAAADACQADACADADIAEAGIAEAHIAXA1IAhhJIAKAAIgsBmQgEAIgHAFQgCADgFABQgEACgFAAg");
	this.shape_1.setTransform(49.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AArA7IgIgBQgDAAgCgCQgCgDAAgEIgBgLIAAgkIg1AAIAAA5IgQAAIAAhfQAAgJgCgFQgCgCgCgBIgHgBIgDAAIAAgFIAQAAIAIABIAFAEQACACAAAEIABAMIAAAfIA1AAIAAg2IAQAAIAABhQAAAIADAFQAAABAAAAQABABAAAAQABABAAAAQABAAAAABQADABAEAAIADAAIAAADg");
	this.shape_2.setTransform(37.9,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AAsA7QgEgBgFgCQgEgCgEgFQgEgFgDgIIgEgLIgyAAIgPAiIgIAAIAzh2IAGAAIAmBfIAEAJIAEAFIAFAEIAGACIAAADIgHABgAAMARIgVgyIgXAyIAsAAg");
	this.shape_3.setTransform(26.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgGA7IAAhuIgQAAIgKABQgEACgDACQgDACgBAEQgCAEAAAFIgDAAIAAgNIAAgFQABgDACgCQABgCADgBQADgBAFgBIBSAAIAAAIIgoAAIAABug");
	this.shape_4.setTransform(15.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgIA+IgLgEIgJgFIgIgHQgIgJgEgLIgDgMIgBgMIABgMQACgGACgHQAEgLAIgJQAIgJAKgFQAEgCAGgCIAKgBIAOABQAHABAFACQALAFAFAFQADAFAAAHIABAPIgDAAQgEgRgJgIQgFgFgGgBQgGgCgHAAQgJAAgHACQgIADgGAHIgFAIIgEAJQgDALgBAQQABAKACAJQADAKAEAIQAFAHAJAFIAJAEIAKABQANAAAKgHIAJgIQAFgEADgHIAEAEQgEAIgGAFQgFAGgHADQgGAEgGACQgIABgIAAIgLgBg");
	this.shape_5.setTransform(3.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AArA7QgEAAgEgCQgDgBgDgDIgHgGIgEgIIgVgfIgoAzIgJAAIAtg6IgZgkIgFgHIgGgGIgHgEQgFgCgGAAIAAgFIAVAAQAFAAAEACIAGAFIAGAHIAFAGIARAbIAkgvIAJAAIgpA2IAdApIAFAHIAGAGIAHAFIAIACIAAADg");
	this.shape_6.setTransform(-8.1,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AAsA7QgFgBgEgCQgEgCgEgFQgEgFgDgIIgEgLIgyAAIgPAiIgHAAIAyh2IAGAAIAmBfIAEAJIAEAFIAFAEIAGACIAAADIgGABgAAMARIgVgyIgXAyIAsAAg");
	this.shape_7.setTransform(-19.4,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AgZA6QgGgCgEgEQgFgFgEgHIADgCIAHAHIAJAGQAEACAFACQAGABAGAAQAHAAAFgCQAGgCAEgDQAJgHAAgMQAAgNgJgHQgEgEgGgCQgHgBgIAAIgNAAIAAgHIANAAQAHAAAEgBQAGgCAEgDIAHgIQACgFAAgHQAAgGgCgFQgDgEgDgEQgEgDgFgBQgEgBgFAAQgNgBgJAIQgEAEgDAFIgFAMIgEAAIABgOQABgFADgFIAGgEIAJgFIAJgCIAKgBIANABQAIACAHADQAGAEAEAGQADADAAAEIABALQAAAEgBAEQgBAEgDADQgHAIgNAFQAJAAAFADQAGADADAEQAEAEACAFQABAEAAAGIgBAJIgEAIQgEAHgHADQgHAEgJACIgOABQgOAAgKgFg");
	this.shape_8.setTransform(-30.7,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("AArA7QgEgBgEgCQgEgCgEgFQgEgFgDgIIgFgLIgxAAIgOAiIgJAAIAzh2IAFAAIAnBfIAEAJIAEAFIAFAEIAHACIAAADIgIABgAAMARIgVgyIgWAyIArAAg");
	this.shape_9.setTransform(-41,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4281").s().p("AApA8IgJgEQgFgCgFgFQgGgDgGgIIglgmIAAA6IgQAAIAAhfQAAgJgCgFQgCgCgCgBIgHgBIgDAAIAAgFIAQAAIAIABIAFAEQACACAAAEIABAMIAAAjIAlgnIAGgGIAHgGQAEgDAEgCQAEgCAFAAIAJAAIAAAFQgHAAgGADQgFACgIAIIgiAjIApAqIAPANQAIAGAHABIAAADIgFACIgGABg");
	this.shape_10.setTransform(-53,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol90, new cjs.Rectangle(-61.3,-11.7,122.8,23.5), null);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgaA9IAAgGIAJAAIAHgDQAEgBADgDQADgCABgEIABgFIgghJIgDgHIgFgGQgCgDgEgBQgEgCgGAAIAAgFIAVAAQAFAAADACQADACADADIAEAGIAEAHIAXA1IAhhJIAKAAIgsBmQgEAIgHAFQgCADgFABQgEACgFAAg");
	this.shape.setTransform(36.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AAzA9QgGgCgEgFQgEgEgBgHQgCgIAAgKIAAhFIgsBjIgDAAIgvhkIAABkIgHAAIAAh2IARAAIAsBeIAoheIARAAIAABYIABAPIADALQACAFADACQADACAFAAIAAADQgKAAgHgCg");
	this.shape_1.setTransform(24.4,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AggA7IAAhfQAAgJgCgFQgCgCgCgBIgGgBIgEAAIAAgFIBMAAQAEABADABIAFADIACAFIABAFIAAANIgEAAIgBgJQgCgEgCgCQgHgFgKAAIghAAIAAAuIAwAAIAAAHIgwAAIAAAzIAfAAQAMAAAHgFIAGgHQAEgDACgGIADACIgGAQQgCAEgDADQgEACgFAAg");
	this.shape_2.setTransform(10.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgIA+IgLgEIgKgFIgIgHQgHgJgEgLIgCgMIgBgMIABgMQAAgGADgHQAEgLAIgJQAIgJAJgFQAGgCAFgCIAKgBIAOABQAGABAGACQALAFAEAFQAEAFABAHIAAAPIgDAAQgEgRgJgIQgFgFgGgBQgGgCgIAAQgIAAgHACQgIADgGAHIgFAIIgEAJQgEALABAQQAAAKACAJQADAKAFAIQAEAHAJAFIAJAEIAJABQAOAAAKgHIAJgIQAEgEAEgHIADAEQgEAIgFAFQgFAGgGADQgGAEgHACQgIABgIAAIgLgBg");
	this.shape_3.setTransform(-0.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgiA7IAAhfQAAgJgCgFQgBgCgDgBIgGgBIgEAAIAAgFIAvAAIAOABQAJABAHAEQAIAEAFAGQACADABAEQACAEAAAFQAAAFgCADIgEAHQgGAHgMAFQAJAAAGACQAFADAEAEQADAEACAEIABAKQAAAKgFAHQgEAGgHAEQgIADgIABIgSABgAgSAyIAJADIAJAAQAHAAAGgBQAGgCAFgDQAEgEADgEQACgFAAgGQAAgMgJgGQgEgEgHgCQgGgBgHAAIgSAAgAgLg0IgHACIAAAuIASAAIAJgBQAFgBAEgDQAEgEADgEQACgFAAgFQAAgHgDgFQgDgEgEgDQgFgEgGgBIgKgBg");
	this.shape_4.setTransform(-12.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgWA6IgKgFIgIgIQgHgIgEgMIgDgMIgBgNIABgMIADgMQAEgLAHgIIAIgJIAKgFQAKgFAMAAQANAAAKAFIAKAFIAIAJIAGAJIAFAKQAEAMAAAMQAAANgEAMIgFALIgGAJQgIAJgKAEQgKAFgNAAQgMAAgKgFgAgPgzQgHAEgFAHQgFAIgCAKQgDALAAALQAAANADAKQACAKAFAIQAFAHAHAEQAHAEAIAAQAJAAAHgEQAHgEAFgHQAEgIADgKQADgKAAgNQAAgLgDgLQgDgKgEgIQgFgHgHgEQgHgEgJABQgIgBgHAEg");
	this.shape_5.setTransform(-28.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AAjA7IAAhuIg1AAIAABuIgQAAIAAhfQAAgJgCgFQgCgCgCgBIgHgBIgDAAIAAgFIBlAAIAAB2g");
	this.shape_6.setTransform(-41.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol89, new cjs.Rectangle(-49,-11.7,98,23.5), null);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("ABeCDQgLgCgLgFQgKgGgKgKQgJgKgHgRIgKgXIhpAAIgiBJIgUAAIB3kHIARAAIBZDVQAHARALALQAKAKAOACIAAAKIgJABIgLABgAATAoIgrhnIgvBnIBaAAg");
	this.shape.setTransform(94,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("ABWCEQgLgCgMgFQgMgGgNgIQgNgJgOgQIg/hDIAABvIg0AAIgBjTQAAgSgFgLQgCgGgGgCQgGgDgJAAIgEAAIAAgMIAwAAQALAAAHADQAHACAEAHQAEAFACALIACAYIAABMIBEhWIAOgQIAQgNQAJgGAKgDQAKgEAMAAIAcAAIAAAOQgXAAgTAGQgSAGgOAQIg6BKIBbBfIARAQIARAMIAQAKIAOAFIAAAJIgMACIgRACg");
	this.shape_1.setTransform(67,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AhWCEIAAjTQAAgSgFgLQgCgGgGgCQgGgDgJAAIgEAAIAAgMIBsAAIAnACQAUACASAIQARAGALAOQAMAOAAAYQAAAIgEAJQgDAJgHAIQgHAHgKAHQgLAGgOAEQAUABANAGQANAFAIAIQAHAJAEAKQADALAAAMQAAAXgKAOQgLAPgQAHQgRAIgVAEQgVACgWAAgAgiBwIAIACQAIACAMAAIACAAQAgAAASgPQARgOAAgaQAAg3hDAAIgeAAgAgThzIgHABIgIACIAABlIAeAAQALAAAKgEQALgCAHgGQAQgLAAgdQAAgPgFgKQgGgKgJgFQgIgHgMgCQgLgDgKAAg");
	this.shape_2.setTransform(39.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("ABeCDQgLgCgLgFQgKgGgKgKQgJgKgHgRIgKgXIhpAAIgiBJIgUAAIB3kHIARAAIBZDVQAHARALALQAKAKAOACIAAAKIgJABIgLABgAATAoIgrhnIgvBnIBaAAg");
	this.shape_3.setTransform(14.7,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgXCEIAAj1IgdAAQgLAAgIADQgJACgGAGQgMAKAAAbIgMAAIAAgiIABgLQACgHADgEQAEgEAHgDQAGgDALAAIC7AAIAAASIhUAAIAAD1g");
	this.shape_4.setTransform(-10.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgvCCQgYgLgSgSQgHgKgHgKQgHgLgEgMQgJgZABgdQAAgdAKgbQAJgZASgVQASgSAXgLQANgGANgDQANgDANAAQAmAAAXAKQAXAJALANQAIALACAQIABAiIgMAAQgIgkgVgTQgTgUghAAQgTAAgPAGQgQAGgMAPQgMAOgHAZQgHAkAAAXQAAAWAFAWQAFAWAKAQQALAQAQALQAJAEAKACQAJADANAAQANAAANgEQAMgDAMgIQAYgOAOgcIAOALQgJAQgLANQgMALgNAIQgOAIgSAEQgQAEgWAAQgeAAgZgKg");
	this.shape_5.setTransform(-35.3,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("Ag1CCQgMgGgLgIQgKgHgJgKQgIgJgHgLQgHgLgFgNQgJgZAAgeQAAgdAJgZQAFgNAHgLQAHgLAIgKQAJgJAKgIQALgHAMgFQAYgLAdAAQAPAAAOADQANADAMAFQAYALASASQARATAJAaQAFAMACAOQADAOAAAOQAAAPgDANQgCAOgFANQgJAagRASQgJAKgKAHQgLAIgMAGQgMAEgNADQgOADgPAAQgdAAgYgKgAg3haQgUAgAAA6QAAAdAFAXQAFAXAKAPQAUAgAjAAQAkAAAUggQALgPAEgXQAFgXAAgdQAAg6gUggQgUgfgkAAQgjAAgUAfg");
	this.shape_6.setTransform(-63.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("ABzCpQgCgWgEgOQgEgOgHgJQgGgIgIgDQgIgEgLAAIiBAAQgKAAgJAEQgIADgGAIQgGAJgEAOQgEAOgDAWIgUAAIAAhOQAAgGAEgEQAEgEAGAAIAOAAQAKgVAHgXQAHgXADgXQAHgwAAg3QAAgSgFgLQgCgFgGgDQgGgDgJAAIgEAAIAAgMIDTAAIAAD1IAOAAQAGAAAEAEQAEAEAAAGIAABOgAgihMQgBAhgEAcQgEAagGAXQgGAXgJAUIB3AAIAAjjIhXAAg");
	this.shape_7.setTransform(-92.8,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol87, new cjs.Rectangle(-108.2,-23.6,216.5,47.3), null);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AA2AxIgJgBQgEgBgCgCQgCgDgBgFIAAgNIAAhIIASAAIAABIQAAAJADAGQABADADACQADABAFAAIADAAIAAAEgAg1AxIAAhIQAAgKgCgFQgCgDgDgCQgDgBgFAAIgDAAIAAgEIASAAIAJABQAEAAACADQACADABAFIABANIAAAOIAQAAQAIAAAIACQAGABAFAEQAGACADAGQADAFAAAJQAAAIgDAGQgDAGgGADQgFADgGACQgIABgIAAgAgbgBIgHABIAAAoIAHABIAHABQAKAAAHgFQAEgFAAgMQAAgMgEgFQgHgEgKAAg");
	this.shape.setTransform(124.3,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgHAxIAAhZIgLAAQgJAAgHAFQgDADgBAEQgCAEAAAFIgEAAIAAgNIABgGIACgFQACgDADgBQADgBAFAAIBJAAIAAAIIgjAAIAABZg");
	this.shape_1.setTransform(112.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AgRAyQgGgBgEgEQgFgDgDgGQgEgFABgJQgBgJAFgFQAEgGAIgCQAHgEAKgBIATgBIAGAAQAAgLgBgHQgCgHgDgEQgDgEgDgCIgIgBQgJAAgHAEIgEAFIgEAJIgJAAIAAgKQABgFAEgEIAFgDIAIgCIAJgCIAIgBQAIAAAHACQAGACAFAEQAFAGADAIQADAJAAAOIAAA4IgKAAIgIgKIgBAAQgDAEgHAEQgHADgLABIgJgCgAgJAHQgFADgCAEQgDAEABAEQAAAFABAEQACAEADACQADADADABIAGABQAJAAAEgEQAEgDADgGIAAgcIgGAAQgOAAgJAGg");
	this.shape_2.setTransform(101.8,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AArAxQgHgDgEgEQgEgFgCgGQgCgHAAgIIAAgsIghBLIgEAAIgkhNIAABNIgJAAIAAhhIAUAAIAgBEIAehEIATAAIAABCIABALIAEAKQACAFACACQADADAEAAIAAAEQgKAAgGgCg");
	this.shape_3.setTransform(90.8,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgrAyIgFgCIAAgFQAFAAAFgCQAFgDAEgHQAEgIACgNQACgNAAgVIAAgJIgCgGQgCgDgDgCQgDgBgEAAIAAgEIBUAAIAABhIgTAAIAAhZIgkAAIAAARQgBAbgCAKQgDAPgEAIQgEAIgGADQgGADgGAAg");
	this.shape_4.setTransform(77,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AAzBFQgFgBgFgDQgFgDgFgFQgFgFgDgJIgFgOIg6AAIgRAoIgJAAIA7iKIAGAAIAtBwIAFAJIAFAHIAGAEIAHACIAAAEIgIABgAAOAUIgYg7IgbA7IAzAAg");
	this.shape_5.setTransform(65.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgxAGIAAgLIBiAAIAAALg");
	this.shape_6.setTransform(47,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AgMBJIgKgFQgFgCgEgEIgHgIQgEgHgFgRQgDgNABgRQgBgQADgNQACgJAHgOIAHgJQAEgDAFgDIAKgEQAGgBAGAAQAHAAAGABIAKAEQAKAFAGAKQAGAJADAOQACANAAAQQAAARgCANQgFARgEAHQgGAJgKAFIgKAFIgNAAIgMAAgAgNg8QgGAEgDAIQgEAJgBAMQgBAMgBAPQABARABAMQABAMAEAIQADAIAGAFQAFADAIAAQAJAAAFgDQAGgFADgIQAEgIABgMIABgdIgBgbQgBgMgEgJQgDgIgGgEQgFgEgJAAQgIAAgFAEg");
	this.shape_7.setTransform(29.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AAOBFIAAgjIhBAAIAAgJIBEhdIAQAAIAABdIAUAAIAAAJIgUAAIAAAjgAgnAZIA1AAIAAhJg");
	this.shape_8.setTransform(17.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("AgMBJIgLgFQgEgCgFgEIgGgIQgEgHgFgRQgCgNgBgRQABgQACgNQACgJAHgOIAGgJQAFgDAEgDIALgEQAGgBAGAAQAHAAAFABIALAEQAKAFAGAKQAFAJADAOQADANAAAQQAAARgDANQgEARgEAHQgGAJgKAFIgLAFIgMAAIgMAAgAgOg8QgFAEgEAIQgDAJgBAMQgBAMAAAPQAAARABAMQABAMADAIQAEAIAFAFQAGADAIAAQAIAAAGgDQAGgFADgIQADgIACgMIABgdIgBgbQgCgMgDgJQgDgIgGgEQgGgEgIAAQgIAAgGAEg");
	this.shape_9.setTransform(0.3,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4281").s().p("AgSBIQgIgDgHgEQgHgEgEgHQgDgHAAgJQAAgIACgGQADgGAFgFQAFgEAGgEIAMgFIgKgHQgGgDgEgFQgEgDgCgGQgCgGAAgGQAAgLADgGQAEgIAGgDQAGgFAHgBQAIgCAIAAQAJAAAHACQAIABAGAEQAGAEADAHQAEAGAAAJQAAAHgCAFQgCAFgEAFIgJAHIgJAGIALAGQAGAEAEAFQAFAFADAGQACAGAAAIQAAAKgEAIQgEAGgGAFQgHAFgIACQgJABgKAAQgJAAgJgBgAgNAJIgIAHQgDAEgCAFQgBAGAAAHQAAAHACAFQACAGAEADIAJAFQAFACAFgBQAFABAGgCIAJgFQADgDADgFQACgFAAgGQAAgHgCgFIgIgJQgEgFgHgEIgLgHgAgHg/QgEABgEADQgDADgCAEQgCAFAAAGQAAAFACAFQADAEAEAEIAKAHIAKAHQAHgFAEgHQAFgGAAgMQAAgHgCgFQgCgFgEgDQgDgDgEAAIgIgCg");
	this.shape_10.setTransform(-11.6,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4281").s().p("AgtBIIAAgLIAdgcIAVgWQAIgLAFgJQAEgKAAgMQAAgHgCgGQgCgGgEgEQgEgEgFgCQgFgCgEAAQgNAAgJAJQgKAKgDARIgEAAIABgPQAAgIAEgEQAGgHALgGIALgDQAGgBAFAAIAOABQAHABAGAFQAHAEAEAIQAEAIAAAMQAAAIgBAGIgFAMQgGAKgLAKQgKALgMAMIgcAZIAuAAIALgBQAFgCADgCQAEgDABgEQACgFAAgFIAEAAIAAAOIAAAGIgDAFIgGAEQgDACgGAAg");
	this.shape_11.setTransform(-28.3,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4281").s().p("AgQBGIgLgEQgLgGgIgLIAEgDQAIAJAJAEQAJAEAMAAQAFAAAGgCQAFgCAFgEQAEgFADgGQACgHAAgJQAAgQgJgIQgEgEgGgBQgHgCgHAAIgJAAIgIABIgJABIgIgIIACg9IBOAAIAAAIIg9AAIgCA0IAHgBIAHAAIAIgBQAGAAAJACQAJACAIAEQAHAEAFAIQADAEABAFQABAFAAAGQAAAHgBAGQgCAFgCAEQgFAJgIAEQgIAFgIACIgOABIgPgBg");
	this.shape_12.setTransform(-39.3,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4281").s().p("AgaBBIgLgHIgJgJIADgEQAIAJAJAFIALADIALABQAFAAAGgCQAGgCAEgEQAEgFADgGQACgHAAgJQAAgIgCgGQgDgGgEgEQgDgEgFgBQgFgCgEAAIgIAAIgGABIgFABIgGABIgGgJIA4g1IgmAAIgLABQgFACgDACQgHAGAAALIgEAAIAAgOIABgGQAAgDACgCIAGgEQADgBAGAAIBCAAIAAAIIg4A1IAMgCIAGgBIAMACQAIACAHAEQAHAEAFAHQAFAIAAANIgBANIgEAKQgFAIgHAFQgIAEgIACIgOABQgPAAgLgGg");
	this.shape_13.setTransform(-50.4,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC4281").s().p("AgaBbQAKgJAHgKQAHgLADgMQAEgLACgNQACgNAAgMQAAgLgCgNQgCgMgEgMQgDgMgHgLQgHgKgKgJIACgEQANAKAJAKQAJAKAHALQAHAMADANQADANAAAPQAAAQgDANQgDAOgHALQgHALgJAKQgJAKgNAJg");
	this.shape_14.setTransform(-64.7,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC4281").s().p("AgZBFIA0iBIgpAAIgMABIgIAEQgHAGAAALIgEAAIAAgOIABgGIADgFIAFgEQAEgBAFAAIBJAAIAAAIIg0CBg");
	this.shape_15.setTransform(-72.5,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC4281").s().p("AgtBIIAAgLIAdgcIAVgWQAIgLAFgJQAEgKAAgMQAAgHgCgGQgCgGgEgEQgEgEgFgCQgFgCgEAAQgNAAgJAJQgKAKgDARIgEAAIABgPQAAgIAEgEQAGgHALgGIALgDQAGgBAFAAIAOABQAHABAGAFQAHAEAEAIQAEAIAAAMQAAAIgBAGIgFAMQgGAKgLAKQgKALgMAMIgcAZIAuAAIALgBQAFgCADgCQAEgDABgEQACgFAAgFIAEAAIAAAOIAAAGIgDAFIgGAEQgDACgGAAg");
	this.shape_16.setTransform(-83.3,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC4281").s().p("AgZBFIA0iBIgpAAIgMABIgIAEQgHAGAAALIgEAAIAAgOIABgGIADgFIAFgEQAEgBAFAAIBJAAIAAAIIg0CBg");
	this.shape_17.setTransform(-93.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC4281").s().p("AADBLQgJgKgGgLQgHgLgEgOQgDgNAAgQQAAgPADgNQAEgNAHgMQAGgLAJgKQAKgKAMgKIACAEQgKAJgHAKQgGALgEAMQgEAMgBAMQgCANAAALQAAANACAMQABANAEALQAEAMAGALQAHAKAKAJIgCADQgMgJgKgKg");
	this.shape_18.setTransform(-101.7,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC4281").s().p("AgZBFIA0iBIgpAAIgMABIgIAEQgHAGAAALIgEAAIAAgOIABgGIADgFIAFgEQAEgBAFAAIBJAAIAAAIIg0CBg");
	this.shape_19.setTransform(-115.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC4281").s().p("AgFAwIAAgqIgqAAIAAgLIAqAAIAAgqIALAAIAAAqIAqAAIAAALIgqAAIAAAqg");
	this.shape_20.setTransform(-125.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol81, new cjs.Rectangle(-138.8,-13.3,277.6,26.8), null);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgSAyQgFgBgFgEQgEgDgDgGQgDgFAAgJQAAgJAEgFQAFgGAHgCQAHgEAKgBIATgBIAHAAQAAgLgCgHQgCgHgDgEQgDgEgEgCIgIgBQgJAAgGAEIgEAFIgDAJIgKAAIABgKQAAgFAEgEIAGgDIAHgCIAJgCIAJgBQAHAAAGACQAHACAFAEQAFAGADAIQAEAJAAAOIAAA4IgLAAIgHgKIgBAAQgEAEgHAEQgHADgLABIgKgCgAgKAHQgEADgCAEQgCAEgBAEQAAAFACAEQACAEADACQADADADABIAGABQAJAAAEgEQAFgDADgGIAAgcIgHAAQgOAAgKAGg");
	this.shape.setTransform(118.6,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AAoAxIgJgBQgEgBgCgCQgCgDgBgFIgBgNIAAgUIgpAAIAAAtIgTAAIAAhIQAAgKgCgFQgCgDgDgCQgDgBgEAAIgEAAIAAgEIASAAIAJABQAEAAACADQADADAAAFIABANIAAAUIApAAIAAgtIATAAIAABIQAAAJADAGQABADADACQADABAFAAIADAAIAAAEg");
	this.shape_1.setTransform(108,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AgSAyQgFgBgFgEQgEgDgDgGQgEgFABgJQgBgJAFgFQAFgGAHgCQAHgEAKgBIATgBIAGAAQAAgLgBgHQgCgHgDgEQgDgEgDgCIgJgBQgJAAgGAEIgEAFIgEAJIgJAAIAAgKQABgFAEgEIAGgDIAHgCIAJgCIAIgBQAIAAAGACQAHACAFAEQAFAGADAIQADAJABAOIAAA4IgLAAIgHgKIgCAAQgDAEgHAEQgHADgLABIgKgCgAgKAHQgEADgCAEQgCAEgBAEQABAFABAEQACAEADACQADADADABIAGABQAJAAAEgEQAEgDADgGIAAgcIgGAAQgOAAgKAGg");
	this.shape_2.setTransform(96.9,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgHAxIAAhZIgLAAQgJAAgHAFQgDADgBAEQgCAEAAAFIgEAAIAAgNIABgGIACgFQACgDADgBQADgBAFAAIBJAAIAAAIIgjAAIAABZg");
	this.shape_3.setTransform(87.3,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgQAvQgJgDgFgIQgGgHgDgJQgCgJAAgLQAAgJACgKQADgJAGgHQAFgHAJgEQAJgFALAAQALAAAIADQAHABAEAEIADAFIACAEIABAIIAAAKIgFAAQAAgNgJgHQgHgGgLAAQgIAAgFAEQgFADgEAGQgEAGgCAHQgCAIABAIQgBAJACAIQACAIAEAFQAEAHAFADQAFADAIAAQALAAAHgEQAHgEAGgIIADACQgHANgJAEIgLAFIgLABQgLAAgJgFg");
	this.shape_4.setTransform(77.3,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AAzBFQgFgBgFgDQgFgDgFgFQgFgFgDgJIgFgOIg6AAIgRAoIgJAAIA7iKIAGAAIAtBwIAFAJIAFAHIAGAEIAHACIAAAEIgIABgAAOAUIgYg7IgbA7IAzAAg");
	this.shape_5.setTransform(66,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgwAGIAAgLIBiAAIAAALg");
	this.shape_6.setTransform(47.2,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AAOBFIAAgjIhBAAIAAgJIBDhdIARAAIAABdIATAAIAAAJIgTAAIAAAjgAgnAZIA1AAIAAhJg");
	this.shape_7.setTransform(29.7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AgQBGIgLgEQgLgGgIgLIAEgDQAIAJAJAEQAJAEAMAAQAFAAAGgCQAFgCAFgEQAEgFADgGQACgHAAgJQAAgQgJgIQgEgEgGgBQgHgCgHAAIgJAAIgIABIgJABIgIgIIACg9IBOAAIAAAIIg9AAIgCA0IAHgBIAHAAIAIgBQAGAAAJACQAJACAIAEQAHAEAFAIQADAEABAFQABAFAAAGQAAAHgBAGQgCAFgCAEQgFAJgIAEQgIAFgIACIgOABIgPgBg");
	this.shape_8.setTransform(18.6,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("AgQBGIgLgEQgLgGgIgLIAEgDQAIAJAJAEQAJAEAMAAQAFAAAGgCQAFgCAFgEQAEgFADgGQACgHAAgJQAAgQgJgIQgEgEgGgBQgHgCgHAAIgJAAIgIABIgJABIgIgIIACg9IBOAAIAAAIIg9AAIgCA0IAHgBIAHAAIAIgBQAGAAAJACQAJACAIAEQAHAEAFAIQADAEABAFQABAFAAAGQAAAHgBAGIgEAJQgFAJgIAEQgIAFgIACIgOABIgPgBg");
	this.shape_9.setTransform(2.2,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4281").s().p("AgQBGIgLgEQgLgGgIgLIAEgDQAIAJAJAEQAJAEAMAAQAFAAAGgCQAFgCAFgEQAEgFADgGQACgHAAgJQAAgQgJgIQgEgEgGgBQgHgCgHAAIgJAAIgIABIgJABIgIgIIACg9IBOAAIAAAIIg9AAIgCA0IAHgBIAHAAIAIgBQAGAAAJACQAJACAIAEQAHAEAFAIQADAEABAFQABAFAAAGQAAAHgBAGQgCAFgCAEQgFAJgIAEQgIAFgIACIgOABIgPgBg");
	this.shape_10.setTransform(-8.9,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC4281").s().p("AgtBIIAAgLIAdgcQANgMAIgKQAIgLAFgJQAEgKAAgMQAAgHgCgGQgCgGgEgEQgEgEgFgCQgFgCgEAAQgNAAgJAJQgKAKgDARIgEAAIABgPQAAgIAEgEQAGgHALgGIALgDQAGgBAFAAIAOABQAHABAGAFQAHAEAEAIQAEAIAAAMQAAAIgBAGIgFAMQgGAKgLAKQgKALgMAMIgcAZIAuAAIALgBQAFgCADgCQAEgDABgEQACgFAAgFIAEAAIAAAOIAAAGIgDAFIgGAEQgDACgGAAg");
	this.shape_11.setTransform(-25.4,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC4281").s().p("AgXBIIgOgFIABgEIAMABIAPABQAJAAAHgDQAHgFAEgHQAFgGACgKQACgKAAgMQgGAEgHADQgHACgLAAQgLAAgIgDQgHgEgGgFQgFgHgCgIQgDgJAAgKQAAgJADgJQADgIAGgHQAFgHAJgEQAIgDAMAAQAYgBALAUQAGAJADANQADAOAAARQAAATgDANQgDAOgHAJQgNATgagBQgKAAgIgBgAgLg9QgFADgDAGQgDAGgCAGQgCAIAAAHQAAAJACAHQACAHADAEQAHALAOAAQAIAAAGgDIALgIQAAgQgCgNQgCgNgEgJQgEgHgFgEQgFgEgFAAQgGAAgFADg");
	this.shape_12.setTransform(-36.6,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC4281").s().p("AgaBbQAKgJAHgKQAHgLADgMQAEgLACgNQACgNAAgMQAAgLgCgNQgCgMgEgMQgDgMgHgLQgHgKgKgJIACgEQANAKAJAKQAJAKAHALQAHAMADANQADANAAAPQAAAQgDANQgDAOgHALQgHALgJAKQgJAKgNAJg");
	this.shape_13.setTransform(-50.8,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC4281").s().p("AgtBIIAAgLIAdgcIAVgWQAIgLAFgJQAEgKAAgMQAAgHgCgGQgCgGgEgEQgEgEgFgCQgFgCgEAAQgNAAgJAJQgKAKgDARIgEAAIABgPQAAgIAEgEQAGgHALgGIALgDQAGgBAFAAIAOABQAHABAGAFQAHAEAEAIQAEAIAAAMQAAAIgBAGIgFAMQgGAKgLAKQgKALgMAMIgcAZIAuAAIALgBQAFgCADgCQAEgDABgEQACgFAAgFIAEAAIAAAOIAAAGIgDAFIgGAEQgDACgGAAg");
	this.shape_14.setTransform(-59.4,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC4281").s().p("AgZBFIA0iBIgpAAIgMABIgIAEQgHAGAAALIgEAAIAAgOIABgGIADgFIAFgEQAEgBAFAAIBJAAIAAAIIg0CBg");
	this.shape_15.setTransform(-69.7,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC4281").s().p("AACBFIAAh0IgTANIgDgFIAfgdIAKAAIAACJg");
	this.shape_16.setTransform(-78.8,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC4281").s().p("AgZBFIA0iBIgpAAIgMABIgIAEQgHAGAAALIgEAAIAAgOIABgGIADgFIAFgEQAEgBAFAAIBJAAIAAAIIg0CBg");
	this.shape_17.setTransform(-86.1,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC4281").s().p("AADBLQgJgKgGgLQgHgLgEgOQgDgNAAgQQAAgPADgNQAEgNAHgMQAGgLAJgKQAKgKAMgKIACAEQgKAJgHAKQgGALgEAMQgEAMgBAMQgCANAAALQAAANACAMQABANAEALQAEAMAGALQAHAKAKAJIgCADQgMgJgKgKg");
	this.shape_18.setTransform(-94.2,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC4281").s().p("AgZBFIA0iBIgpAAIgMABIgIAEQgHAGAAALIgEAAIAAgOIABgGIADgFIAFgEQAEgBAFAAIBJAAIAAAIIg0CBg");
	this.shape_19.setTransform(-107.7,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC4281").s().p("AgFAwIAAgqIgqAAIAAgLIAqAAIAAgqIALAAIAAAqIAqAAIAAALIgqAAIAAAqg");
	this.shape_20.setTransform(-118.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(-131.3,-13.3,262.6,26.8), null);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgKA+QgEgFAAgGQAAgGAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEgAgKgoQgEgEAAgGQAAgGAEgFQAFgEAFgBQAHABAEAEQAEAFAAAGQAAAGgEAEQgEAEgHABQgFgBgFgEg");
	this.shape.setTransform(73.7,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgoBCIAAhhQAAgNgEgIQgBgDgFgCQgEgCgGAAIgDAAIAAgGIBEAAQAKAAAKACQAKACAHADQAHAEAFAHQAEAGAAAKQAAALgGAIQgHAHgPADQAQACAJAIQAJAJAAAMQAAALgFAHQgEAHgIAEQgIAEgLACQgKACgNAAgAgPA1IAIACIAJABQAJAAAGgCQAHgBAEgEQAFgDACgFQACgFAAgHQAAgaglAAIgPAAgAgHg2IgIACIAAAtIAPAAQAOAAAJgHQAEgDACgEQACgEAAgGQAAgGgCgFQgCgEgEgDQgIgGgNAAg");
	this.shape_1.setTransform(62.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AgZBAQgMgGgIgKQgIgJgEgMQgEgNAAgOQAAgNAEgMQAFgNAHgKQAIgIAMgGQALgFAOgBQAOABAMAFQALAGAJAIQAHAKAFANQAEAMAAANQAAAOgEANQgFAMgHAJQgJAKgLAGQgMAEgOAAQgOAAgLgEgAgNgzQgHAEgEAHQgFAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAEAHAHAFQAGAEAHAAQAIAAAGgEQAHgFAEgHQAFgIACgKQADgLAAgMQAAgLgDgLQgCgKgFgIQgEgHgHgEQgGgFgIAAQgHAAgGAFg");
	this.shape_2.setTransform(49,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgUBDQgHgBgFgDIgLgIIgIgIIAFgFIAGAFIAIAGIAKADIAOABQAIABAGgCQAHgCAEgDQAEgDADgFQACgFAAgHQAAgagngBIgMAAIAAgKIAMAAQAQAAAKgGQAEgDADgFQACgEAAgHQAAgNgIgGQgJgGgKAAQgIAAgGACQgHACgEADQgFAFgEAFQgCAGAAAGIgHAAIABgSQABgHAGgGQAFgFAKgCQALgCANgBQAIAAAJACQAKACAGAEQAIAFAEAGQAEAIABAKQAAAMgJAIQgHAHgMAEIANADQAGADAEAEQAJAJgBAMQABALgFAHQgEAHgIAFQgIAEgJACQgLABgLAAQgJAAgIgBg");
	this.shape_3.setTransform(35.1,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgYBDQgHgCgGgFQgGgEgEgIQgFgHAAgLQABgMAGgHQAFgIAKgDQAJgFANgCQANgBAOAAIAIAAQABgPgDgKQgCgJgEgFQgEgFgGgCQgFgCgFAAQgMAAgIAFQgEADgDAEQgCAFgCAGIgNAAIABgNQABgGAGgGIAHgEIAKgDIALgCIANgBQAJAAAJACQAJADAGAGQAHAGAFAMQAEALAAAUIAABKIgPAAIgKgMIgBAAQgEAFgJAFQgKAFgPgBIgNgBgAgNAKQgGADgDAGQgDAFAAAGQAAAHADAEQABAGAEACQAEAEAEACIAJABQALAAAGgFQAGgFAEgHIAAglIgIAAQgUgBgMAJg");
	this.shape_4.setTransform(21.8,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AAiA+QgKgGgKgLIgfgoIAAA8IgZAAIAAhhQAAgNgEgIQgCgDgEgCQgEgCgGAAIgGAAIAAgGIAaAAIAMABQAFABADAFQADADABAHIABARIAAAgIAigwQAGgJAIgEQAJgFANAAIAHAAIAAAHQgGAAgHACQgHAEgFAGIgfAsIAgAnQAIAKAIAFQAHAHAKABIAAAGIgGACIgIAAQgLAAgKgFg");
	this.shape_5.setTransform(8.3,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgYBDQgHgCgGgFQgGgEgEgIQgEgHgBgLQABgMAFgHQAGgIAKgDQAJgFANgCQAMgBAPAAIAIAAQAAgPgCgKQgCgJgEgFQgEgFgGgCQgFgCgFAAQgMAAgIAFQgEADgDAEQgDAFgBAGIgNAAIABgNQABgGAFgGIAIgEIAKgDIALgCIANgBQAJAAAJACQAJADAGAGQAHAGAFAMQADALAAAUIAABKIgNAAIgLgMIgBAAQgEAFgJAFQgKAFgPgBIgNgBgAgNAKQgGADgDAGQgDAFAAAGQAAAHADAEQACAGADACQAEAEAEACIAJABQALAAAGgFQAGgFAEgHIAAglIgIAAQgUgBgMAJg");
	this.shape_6.setTransform(-5.6,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AgTBDQgIgBgGgDIgKgIIgJgIIAGgFIAGAFIAIAGIALADIANABQAIABAGgCQAHgCAEgDQAFgDACgFQACgFAAgHQAAgagmgBIgNAAIAAgKIANAAQAQAAAIgGQAFgDACgFQACgEAAgHQAAgNgHgGQgIgGgLAAQgIAAgGACQgGACgFADQgGAFgCAFQgEAGAAAGIgFAAIABgSQABgHAFgGQAFgFAKgCQAKgCAOgBQAIAAAKACQAJACAHAEQAGAFAFAGQAFAIgBAKQAAAMgHAIQgIAHgNAEIAOADQAGADAEAEQAJAJAAAMQgBALgEAHQgEAHgIAFQgHAEgLACQgKABgKAAQgKAAgHgBg");
	this.shape_7.setTransform(-18.4,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("Ag7BDIgGgCIAAgGQAEgBAEgBIAHgGIAGgHIAFgIIAQgdQgGgBgGgDQgFgDgFgDQgEgFgDgGQgDgGABgJQgBgKAFgIQAFgGAHgFQAIgEAKgCQAKgCAKAAIBCAAIAAAGQgNgBgDAIQgDAIgBANIAABhIgZAAIAAg5IgVAAIgQAiQgHAMgIAHQgHAGgNAAgAgJg3QgGACgEADQgJAHAAAOQAAAQAJAGQAJAGANAAIAKAAIAIgCIAAgzIgIgCIgKgBQgGAAgGACg");
	this.shape_8.setTransform(-38.7,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("Ag5BDIgHgCIAAgHQAHAAAGgEQAHgDAFgKQAFgKADgSQADgQAAgdIAAgMIgDgJQgCgDgEgCQgEgCgHAAIAAgGIBxAAIAACDIgZAAIAAh4IgxAAIAAAXQgBAkgCANQgEAVgGALQgGALgHADQgIAEgHAAg");
	this.shape_9.setTransform(-54.4,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4281").s().p("AA/BYQgBgNgCgHQgDgJgDgFQgDgFgFgDQgGgCgHAAIhCAAQgNAAgHAKQgDAFgDAJIgDAUIgLAAIAAgtQAAgEACgEQADgCAEAAIAJAAQAFgKADgMIAFgVIADgXIABgUQAAgNgEgHQgCgEgEgCQgEgCgGAAIAAgGIBvAAIAAB4IALAAQAEAAADACQADAEAAAEIAAAtgAgYgNQgGAggGAOIBAAAIAAhsIgwAAQAAAjgEAbg");
	this.shape_10.setTransform(-69.2,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(-82.6,-17.1,165.3,34.3), null);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AA1BCIgMgBQgFgCgDgEQgDgDgBgHIgBgRIAAgaIg3AAIAAA8IgZAAIAAhhQAAgNgEgIQgBgDgEgCQgEgCgHAAIgEAAIAAgGIAYAAIAMABQAFACADAEQADADABAHIABARIAAAaIA3AAIAAg8IAZAAIAABhQAAANAEAHQACAEADACQAFACAGAAIAEAAIAAAGg");
	this.shape.setTransform(46.1,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgZBAQgMgGgIgKQgIgJgEgMQgEgNAAgOQAAgNAEgMQAFgNAHgKQAIgIAMgGQALgFAOgBQAOABAMAFQALAGAJAIQAHAKAFANQAEAMAAANQAAAOgEANQgFAMgHAJQgJAKgLAGQgMAEgOAAQgOAAgLgEgAgNgzQgHAEgEAHQgFAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAEAHAHAFQAGAEAHAAQAIAAAGgEQAHgFAEgHQAFgIACgKQADgLAAgMQAAgLgDgLQgCgKgFgIQgEgHgHgEQgGgFgIAAQgHAAgGAFg");
	this.shape_1.setTransform(31,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AgMB3IAAgzQgQAAgNgFQgNgGgIgJQgIgJgFgMQgEgNAAgOQAAgNAEgMQAFgMAIgKQAIgJANgFQANgGAQgBIAAgQQAAgNgDgIQgCgEgEgCQgEgBgGAAIgEAAIAAgGIAXAAIAMACQAEABADADQADAFABAGIACARIAAAQQAQABANAGQAMAFAJAJQAIAKAFAMQAEAMAAANQAAAOgEANQgFAMgIAJQgJAJgMAGQgNAFgQAAIAAAzgAAMA7QAWgDAJgPQAKgQAAgZQAAgMgCgKQgDgKgFgIQgFgHgHgFQgIgFgLgBgAgeg0QgIAFgFAHQgEAIgDAKQgCAKAAAMQAAANACAKQADALAEAHQAKAPAWADIAAh1QgLABgIAFg");
	this.shape_2.setTransform(14.3,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgWBAQgLgGgHgKQgIgJgDgMQgEgNAAgOQAAgNAEgMQADgNAIgKQAHgIAKgGQALgFAMgBQAdABAOAQQAGAHAEAMQADALAAAPIgBAKIhTAAQgBAMADAKQADAJAFAHQAFAHAGAFQAHADAIAAQAOAAAKgFQAIgGAHgLIAGAEQgKARgLAGQgNAHgQgBQgOAAgLgEgAAdgGQAAgYgGgNQgIgNgPAAQgGAAgEAEQgGAEgEAGQgEAHgCAJQgDAJABALIA5AAIAAAAg");
	this.shape_3.setTransform(-1.7,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("Ag5BDIgHgCIAAgHQAHAAAGgEQAHgDAFgKQAFgKADgSQADgQAAgdIAAgMIgDgJQgCgDgEgCQgEgCgHAAIAAgGIBxAAIAACDIgZAAIAAh4IgxAAIAAAXQgBAkgCANQgEAVgGALQgGALgHADQgIAEgHAAg");
	this.shape_4.setTransform(-17.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgWBAQgLgGgHgKQgIgJgDgMQgEgNAAgOQAAgNAEgMQADgNAIgKQAHgIAKgGQALgFAMgBQAdABAOAQQAGAHAEAMQADALAAAPIgBAKIhTAAQAAAMACAKQADAJAFAHQAFAHAGAFQAHADAJAAQAOAAAIgFQAKgGAGgLIAHAEQgLARgMAGQgMAHgQgBQgOAAgLgEgAAdgGQABgYgIgNQgHgNgPAAQgFAAgFAEQgGAEgEAGQgEAHgCAJQgCAJAAALIA5AAIAAAAg");
	this.shape_5.setTransform(-30.6,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgKBdIAAitIgZAAQgJAAgHACQgGACgFADQgEAEgCAGQgCAHgBAIIgFAAIAAgVIABgIQABgEADgDQACgEAFgCQAFgCAGAAICCAAIAAAMIg/AAIAACtg");
	this.shape_6.setTransform(-45.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol78, new cjs.Rectangle(-59.4,-17.1,118.8,34.3), null);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgqBtIAAgKIAOgBQAHgCAFgDQAFgEAEgHQAFgGADgKIAGgSIgyh8QgFgMgJgGQgJgGgMgBIAAgHIAbAAQAPAAAJAHQAKAHAEAMIAkBXIAohuIAQAAIg+CrQgFANgFAIQgGAJgFAEQgFAFgHACQgIACgIAAg");
	this.shape.setTransform(88.2,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AAnBHQgMgGgLgOIgkguIAABFIgcAAIAAhvQAAgPgEgIQgDgFgEgCQgEgCgIAAIgGAAIAAgHIAdAAIAOACQAFABAEAFQACAEACAHIABAUIAAAlIAog3QAGgJAKgGQAKgGAPAAIAIAAIAAAIQgHAAgIADQgIAEgGAIIgjAxIAkAuQAJAKAJAHQAIAHALABIAAAHIgHACIgJABQgLAAgMgGg");
	this.shape_1.setTransform(72.5,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AA9BLIgPgBQgFgCgDgEQgDgEgCgIIgBgTIAAgeIg/AAIAABEIgdAAIAAhvQAAgOgEgJQgCgEgFgDQgEgCgHAAIgFAAIAAgGIAbAAIAOABQAGACADAEQAEAEAAAIIACATIAAAfIA/AAIAAhFIAdAAIAABvQAAAOADAJQACAEAFADQAFACAHAAIAFAAIAAAGg");
	this.shape_2.setTransform(55.9,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgbBMQgJgCgGgFQgIgFgEgJQgFgIAAgNQAAgNAHgJQAGgJAMgEQALgFAPgCQAOgCAPAAIAKAAQAAgRgCgKQgDgLgFgGQgEgGgGgCQgGgDgHAAQgNAAgJAGQgFADgDAFQgDAGgBAIIgPAAIABgQQABgHAGgGIAIgFIAMgEIAOgCIANAAQALAAAKACQAKADAIAHQAIAHAFANQAEANAAAWIAABVIgQAAIgLgOIgCAAQgEAGgMAGQgKAFgSAAQgGAAgIgCgAgPAKQgHAFgDAGQgEAGAAAHQAAAHADAGQACAGAEAEQAFAEAFABIALACQALAAAIgGQAGgGAFgHIAAgrIgKAAQgXAAgNAIg");
	this.shape_3.setTransform(38.9,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgaBqQgMgEgJgJQgJgKgFgOQgFgPAAgUIAAgNQAAgdACgTQADgTAFgLQAGgMAJgGQAJgGAMgDIAvgLIARgFQAGgDABgGIAHAAIAAAUQAAANgKACIg3ANQgKACgIAFQgIAEgFAIQgGAIgDANQgDANgCATIACAAQAGgXAOgKQAHgFAJgDQAKgDALAAQALAAALAFQALAEAJAJQAJAJAEAMQAFAOAAATQAAASgFAOQgFANgJAJQgJAJgMAEQgMAEgPAAQgNAAgNgEgAgNgRQgGADgFAHQgGAHgDAKQgDAMAAARQAAARADALQADAMAGAHQAFAGAGADQAHADAGAAQAHAAAHgDQAHgDAFgGQAFgHADgMQADgLAAgRQAAgRgDgMQgDgKgFgHQgFgHgHgDQgHgDgHAAQgGAAgHADg");
	this.shape_4.setTransform(23.4,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AAMBJQgMgFgIgJQgJgKgFgNQgEgNgBgQIgTAAIAABEIgdAAIAAhvQAAgOgEgJQgCgEgEgDQgFgCgHAAIgFAAIAAgGIAbAAIAOABQAGACADAEQADAEABAIIACATIAAAfIATAAQABgRAEgNQAFgNAJgKQAIgJAMgFQALgFAPAAQAOAAANAFQAMAGAIAKQAJALAEAOQAFAPAAAQQAAARgFAPQgEAPgJAKQgIAKgMAGQgNAFgOAAQgPAAgLgFgAAMgwQgEAIgDANQgDAMABAPQgBAQADANQADAMAEAIQAFAIAGAFQAHAEAIAAQAHAAAHgEQAGgFAFgIQAKgQAAghQAAgPgDgMQgCgNgFgIQgKgRgPAAQgQAAgKARg");
	this.shape_5.setTransform(-4.9,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgqBtIAAgKIAOgBQAGgCAGgDQAFgEAFgHQAEgGADgKIAGgSIgyh8QgFgMgJgGQgJgGgMgBIAAgHIAbAAQAPAAAJAHQAKAHAEAMIAkBXIAohuIAQAAIg+CrQgFANgGAIQgEAJgGAEQgGAFgGACQgIACgIAAg");
	this.shape_6.setTransform(-24.1,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AgxBrIAAisQAAgOgEgJQgCgEgFgDQgFgCgHAAIgGAAIAAgGIAdAAQAMAAAGADQAGAEADAHIABAAQAFgGAKgGQAKgFASAAQAOAAALAGQAKAGAIALQAHAKAEAOQADAPAAAQQAAAQgDAOQgEAOgIAKQgHALgLAGQgMAGgQAAQgNAAgJgDIgRgGIAABDgAAAhcIgIAEIgHAHIgGAHIAABlIAQAHQAGADAIAAQALAAAHgFQAIgGAFgIQAEgJADgLQACgMAAgOQAAgOgCgMQgCgMgFgIQgFgJgHgFQgGgGgKAAg");
	this.shape_7.setTransform(-41.1,5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AgdBIQgNgGgJgLQgJgKgFgOQgEgPAAgQQAAgPAEgPQAFgOAJgKQAJgLANgGQANgGAQAAQARAAANAGQANAGAJALQAJAKAFAOQAEAPAAAPQAAAQgEAPQgFAOgJAKQgJALgNAGQgNAGgRAAQgQAAgNgGgAgPg7QgIAFgFAJQgFAIgDAMQgDAMAAANQAAAOADAMQADAMAFAJQAFAIAIAGQAHAFAIAAQAJAAAHgFQAIgGAFgIQAFgJADgMQADgMAAgOQAAgNgDgMQgDgMgFgIQgFgJgIgFQgHgGgJAAQgIAAgHAGg");
	this.shape_8.setTransform(-57.4,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("AgLBLIAAiIIgRAAQgOAAgKAIQgFAEgCAGQgCAGgBAIIgGAAIAAgUIACgJIADgIQADgEAFgCQAEgCAHAAIBxAAIAAANIg1AAIAACIg");
	this.shape_9.setTransform(-73.2,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC4281").s().p("AguBLIAAhvQAAgOgEgJQgCgEgFgDQgFgCgGAAIgEAAIAAgGIBNAAQANAAALACQAKACAJAEQAJAFAEAHQAGAHAAALQAAAOgIAIQgIAIgRAEQATACAJAKQALAJAAAPQAAAMgFAIQgFAIgKAFQgIAEgNACQgMACgPAAgAgSA9IAKACIALABQAJAAAIgCQAHgCAFgDQAFgEADgGQADgFgBgIQAAgfgqAAIgSAAgAgIg+IgKACIAAAzIASAAQAQAAAKgGQAFgEACgFQADgFAAgHQAAgGgDgFQgCgGgFgDQgJgHgOAAg");
	this.shape_10.setTransform(-89.6,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(-99,-19.3,198.1,38.7), null);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AhEB9IAAjMQAAgRgFgKQgDgGgFgCQgFgDgJAAIgIAAIAAgIIChAAQAKAAAHAEQAGACAEAEQADAEABAGIACALIAAAdIgIAAQAAgMgDgIQgDgJgGgFQgNgKgXAAIhFAAIAABjIBmAAIAAAOIhmAAIAABqIBBAAQAaABAQgKQAHgFAFgIQAGgIAFgLIAHACIgMAjQgEAKgHAFQgGAEgMAAg");
	this.shape.setTransform(86.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgOB9IAAjqIgjAAQgLAAgJACQgJADgGAFQgGAFgDAJQgDAIAAAMIgIAAIAAgdIACgLQABgGAEgEQAEgEAGgCQAGgEAKAAICvAAIAAAQIhVAAIAADqg");
	this.shape_1.setTransform(64.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("ABOB9IAAjXIh5DXIgiAAIAAjMQAAgRgFgKQgCgGgGgCQgFgDgJAAIgHAAIAAgIIAiAAIARACQAGACAEAFQAEAFACAKIABAWIAACqIB5jYIAiAAIAAD6g");
	this.shape_2.setTransform(38.9,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("ABHB9IAAhmIgMADIgNADIgPABIgMABQgTgBgQgDQgRgCgNgJQgMgIgIgPQgHgPAAgaIAAgfQAAgRgFgKQgCgGgGgCQgFgDgIAAIgFAAIAAgIIAjAAIARACQAGACAEAFQAEAFACAKIABAWIAAAiQAAATADAMQAEALAHAHQAHAGALADQAKACAOABIAagCQANgCALgFIAAiEIAhAAIAAD6g");
	this.shape_3.setTransform(13.4,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("Ag3B/IAAgLIARgBIARgFQAHgDAGgFQAGgGADgIIAEgKIhGibIgHgPQgEgHgFgGQgGgGgIgDQgIgEgNgBIAAgHIAuAAQAJAAAHAEQAHADAFAGIAKANIAHAQIAzBxIBEibIAXAAIheDWQgIASgPALQgGAFgJADQgKACgLAAg");
	this.shape_4.setTransform(-9.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AhkB/IgJgDIAAgJQAIgBAIgDQAIgDAHgIQAHgIAFgOQAHgNADgWQAEgVADgeQACgfAAgpQAAgSgEgKQgCgFgGgDQgFgDgJAAIgEAAIAAgHIC7AAIAAD6IgiAAIAAjrIheAAIAAAfQAABAgGAoQgGApgKAXQgKAXgNAIQgNAIgPAAg");
	this.shape_5.setTransform(-34.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AgwB7QgLgFgJgIQgJgHgIgIQgPgTgJgYIgGgZIgCgbIACgaIAGgZQAJgYAPgSQAIgKAJgGQAJgIALgEQAWgLAaAAQAbAAAWALQALAEAJAIQAJAGAIAKQAIAIAGAMQAGAKAEAMQAIAZAAAaQAAAcgIAYQgEAMgGALQgGALgIAJQgPASgWAKQgWAKgbAAQgaAAgWgKgAgghtQgPAJgKAPQgLAPgFAXQgGAVAAAaQAAAbAGAWQAFAWALAPQAKAQAPAHQAOAJASAAQATAAAOgJQAPgHAKgQQALgPAFgWQAGgWAAgbQAAgagGgVQgFgXgLgPQgKgPgPgJQgOgIgTAAQgSAAgOAIg");
	this.shape_6.setTransform(-58.9,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("ABKB9IAAjqIhxAAIAADqIgiAAIAAjMQAAgRgFgKQgCgGgGgCQgFgDgJAAIgHAAIAAgIIDXAAIAAD6g");
	this.shape_7.setTransform(-86.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(-99.9,-22.6,199.9,45.2), null);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AglBiIAAgIIAMgCQAGgBAEgDQAFgEAEgFQAEgGADgKIAGgQIguhvQgEgLgIgGQgJgGgLgBIAAgGIAZAAQANABAJAFQAIAHAFAKIAgBQIAkhkIAPAAIg5CaIgJAUQgFAHgEAFQgFAFgHABQgGABgIAAg");
	this.shape.setTransform(64.2,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AAjBAQgLgFgJgMIghgrIAAA/IgaAAIAAhlQAAgNgDgIQgCgEgFgCQgDgCgHAAIgGAAIAAgGIAaAAIANACQAFABADAEQADAEABAHIABARIAAAiIAkgyQAGgIAJgGQAIgFAOAAIAIAAIAAAIQgHAAgHACQgHADgGAIIgfAtIAhApQAHAJAIAGQAJAHAJABIAAAGIgGACIgIABQgLAAgLgGg");
	this.shape_1.setTransform(50,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("AA3BEIgMgBQgGgBgCgEQgEgEgBgHIgBgSIAAgbIg5AAIAAA+IgaAAIAAhkQAAgNgEgIQgCgEgDgCQgFgCgHAAIgEAAIAAgGIAZAAIAMABQAFACADAEQADADACAHIABASIAAAbIA5AAIAAg+IAaAAIAABkQAAANAEAJQACADADACQAFACAGAAIAFAAIAAAGg");
	this.shape_2.setTransform(35,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgZBFQgHgCgGgEQgHgFgEgIQgEgIAAgMQAAgLAGgJQAGgIAKgDQAKgEANgCQANgCAOAAIAJAAQAAgPgCgKQgCgKgFgFQgEgFgFgDQgGgCgFAAQgMAAgJAGQgEACgDAFQgDAFgBAHIgNAAIABgOQAAgHAGgFIAHgEIALgEIAMgCIAMAAQAKAAAKACQAJACAHAGQAHAHAEAMQAEAMAAAUIAABNIgOAAIgKgNIgCAAQgEAGgKAEQgKAGgPAAQgGAAgIgCgAgOAJQgGAEgDAGQgDAFAAAGQAAAHACAGQADAFAEADQADADAFACIAKACQAKAAAHgFQAGgGAEgHIAAgmIgJAAQgUAAgNAHg");
	this.shape_3.setTransform(19.6,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AgXBgQgLgEgIgIQgJgJgEgNQgFgNAAgSIAAgMQAAgaACgRQADgRAFgLQAFgKAIgGQAIgFALgDIArgKIAPgFQAFgCACgGIAFAAIAAATQAAALgIACIgyAMQgKACgHAEQgHAEgFAHQgFAIgDALQgDAMgBARIACAAQAFgUANgKQAGgFAIgCQAJgCAKAAQALAAAKAEQAKADAHAIQAIAIAEAMQAFAMAAARQAAARgFAMQgEAMgIAIQgJAIgLAEQgLAEgNAAQgMAAgLgEgAgMgPQgFADgFAGQgFAGgDAJQgCALAAAPQAAAQACAKQADAKAFAHQAFAGAFACQAGADAGAAQAGAAAHgDQAGgCAEgGQAFgHADgKQACgKAAgQQAAgPgCgLQgDgJgFgGQgEgGgGgDQgHgDgGAAQgGAAgGADg");
	this.shape_4.setTransform(5.6,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AglBiIAAgIIAMgCQAGgBAEgDQAFgEAEgFQAEgGADgKIAGgQIguhvQgEgLgIgGQgJgGgLgBIAAgGIAZAAQANABAJAFQAIAHAFAKIAgBQIAkhkIAPAAIg5CaIgJAUQgFAHgEAFQgFAFgHABQgGABgIAAg");
	this.shape_5.setTransform(-17.5,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AA3BEIgNgBQgEgBgEgEQgDgEgBgHIgBgSIAAgbIg5AAIAAA+IgaAAIAAhkQAAgNgEgIQgBgEgFgCQgEgCgHAAIgDAAIAAgGIAYAAIANABQAEACAEAEQADADABAHIABASIAAAbIA5AAIAAg+IAaAAIAABkQAAANAEAJQABADAFACQAEACAHAAIADAAIAAAGg");
	this.shape_6.setTransform(-32.4,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("ABBBbIgDgVQgCgJgEgFQgEgFgFgDQgFgCgHAAIhFAAQgOAAgHAKQgDAFgDAJIgDAVIgMAAIAAgvQAAgEADgDQADgDAEAAIAJAAQAFgLADgLIAGgXIACgXIABgVQAAgNgDgIQgCgEgEgCQgFgCgGAAIAAgGIBzAAIAAB8IAMAAQAEAAADADQADADAAAEIAAAvgAgZgOQgGAigFAOIBBAAIAAhwIgyAAQAAAlgEAbg");
	this.shape_7.setTransform(-48.7,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AgaBBQgMgFgIgKQgIgKgEgMQgFgOAAgOQAAgOAFgNQAEgNAIgKQAIgJAMgFQAMgGAOAAQAPAAAMAGQAMAFAIAJQAJAKAEANQAEANAAAOQAAAOgEAOQgEAMgJAKQgIAKgMAFQgMAGgPAAQgOAAgMgGgAgOg2QgGAFgFAHQgFAIgDALQgCALAAAMQAAANACAKQADALAFAIQAFAIAGAFQAHAEAHAAQAIAAAHgEQAHgFAEgIQAFgIADgLQACgKAAgNQAAgMgCgLQgDgLgFgIQgEgHgHgFQgHgEgIgBQgHABgHAEg");
	this.shape_8.setTransform(-64.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(-74.3,-17.7,148.7,35.5), null);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AhEB9IAAjMQAAgRgFgKQgCgGgGgCQgFgDgJAAIgIAAIAAgIIChAAQALAAAFAEQAHACADAEQAEAEACAGIABALIAAAdIgIAAQAAgMgDgIQgDgJgGgFQgNgKgWAAIhGAAIAABjIBlAAIAAAOIhlAAIAABqIBBAAQAbABAPgKQAHgFAFgIQAHgIAEgLIAHACIgMAjQgEAKgGAFQgIAEgLAAg");
	this.shape.setTransform(61.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgPB9IAAjqIghAAQgLAAgKACQgIADgGAFQgHAFgDAJQgDAIAAAMIgIAAIAAgdIACgLQABgGAEgEQAEgEAFgCQAHgEAKAAICwAAIAAAQIhWAAIAADqg");
	this.shape_1.setTransform(39.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("ABOB9IAAjXIh5DXIgiAAIAAjMQAAgRgFgKQgCgGgGgCQgFgDgJAAIgHAAIAAgIIAiAAIARACQAGACAEAFQAEAFACAKIABAWIAACqIB5jYIAiAAIAAD6g");
	this.shape_2.setTransform(13.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("ABKB9IAAjqIhxAAIAADqIgiAAIAAjMQAAgRgFgKQgCgGgGgCQgFgDgJAAIgHAAIAAgIIDXAAIAAD6g");
	this.shape_3.setTransform(-12.4,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("Ag3B/IAAgLIARgBIARgFQAHgDAGgFQAGgGADgIIAEgKIhGibIgHgPQgEgHgFgGQgGgGgIgDQgIgEgNgBIAAgHIAuAAQAJAAAHAEQAHADAFAGIAKANIAHAQIAzBxIBEibIAXAAIheDWQgIASgPALQgGAFgJADQgKACgLAAg");
	this.shape_4.setTransform(-36.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("ABWB+QgIgCgKgFQgLgFgLgJQgLgJgOgOIhPhTIAAB9IgiAAIAAjMQAAgSgFgKQgCgFgGgDQgFgDgJAAIgHAAIAAgHIAiAAIARACQAGABAEAFQAEAGACAJIABAXIAABKIBPhQIAOgOIAOgNQAHgGAJgDQAJgEAMAAIATAAIAAAKQgQAAgMAFQgMAFgPAQIhKBKIBXBaQAPAQASAMQARAMAOACIAAAIIgKACIgOABg");
	this.shape_5.setTransform(-59.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(-84,-22.6,168,45.2), null);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("AhCBmIAAijQAAgOgEgJQgCgEgFgCQgEgCgHAAIgDAAIAAgJIAlAAQAIAAAGACQAFACADAEQADAFACAIIABATIAAArIAbAAQARAAAQADQARADAMAGQANAGAIAMQAIAMAAASQAAASgIAMQgIALgNAHQgMAHgRADQgQACgRAAgAgNgFIgHABIgGACIAABZIAGABQAGACAKAAIABAAQAbAAANgNQAGgGADgJQADgJAAgLQAAgMgDgJQgDgJgGgGQgHgGgKgCQgKgDgNAAIgBAAg");
	this.shape.setTransform(11.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(0,-18.8,23.6,37.6), null);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("Ag7BmIAAijQABgOgEgJQgDgEgEgCQgFgCgGAAIgEAAIAAgJIBVAAIAPAAIATADIASAHQAJAEAHAHQAHAHAFAKQADAKABAOQgBANgDAKQgFAKgHAGQgGAGgJAEIgQAGIgQADIgMAAIgcAAIAABTgAgMhYIgGABIAABeIASAAQAHAAAHgCQAJgCAFgFQAGgFAEgKQADgJAAgPQAAgOgDgJQgEgJgFgGQgHgGgHgCQgGgCgIAAIgGAAg");
	this.shape.setTransform(10.9,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(0,-18.8,22.1,37.6), null);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("AhCBmIAAijQAAgOgEgJQgCgEgFgCQgEgCgHAAIgDAAIAAgJICHAAQAIAAAFACQAFACADADQADAEABAEIABAJIAAAbIgJAAQAAgKgCgHQgDgIgFgEQgKgIgTAAIgwAAIAABIIAbAAQARAAAQADQARACAMAGQANAGAIALQAIAMAAASQAAAKgCAHQgCAIgEAFQgIAMgNAGQgMAHgRACQgQACgRAAgAgNgCIgHABIgGABIAABXIAGABQAGACAKAAIABAAQAbAAANgLQAGgGADgJQADgIAAgNQAAgMgDgJQgDgJgGgFQgHgGgKgCQgKgCgNAAIgBAAg");
	this.shape.setTransform(11.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(0,-18.8,23.9,37.6), null);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("ABYBnIgPgBQgJgCgIgEQgIgEgIgIQgHgIgFgNIgHgSIhSAAIgaA5IgQAAIBcjMIANAAIBFClQAGANAIAIQAIAJAKABIAAAHIgHACgAAOAfIghhPIgkBPIBFAAg");
	this.shape.setTransform(12.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol70, new cjs.Rectangle(0,-18.8,24.3,37.6), null);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("ABDBmQgJgBgJgEQgJgEgKgHQgLgIgKgLIgyg0IAABWIgnAAIgBijQAAgPgEgIQgCgEgFgCQgEgDgHAAIgDAAIAAgJIAmAAQAHAAAGACQAFACADAFQAEAEABAIIABAUIAAA6IA1hCIALgNIANgKQAGgFAIgCQAHgDAKAAIAWAAIAAALQgSAAgOAFQgPAEgKANIgtA5IBGBJIANANIAOAKIAMAHIALADIAAAIIgKACIgNABg");
	this.shape.setTransform(13.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(0,-18.8,25.7,37.6), null);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("Ag+BmIAAijQAAgOgEgJQgCgEgEgCQgFgCgHAAIgDAAIAAgJICIAAQAIAAAFACQAFACADADQADAEABAEIABAJIAAAbIgJAAQAAgKgCgHQgDgHgFgFQgFgEgHgCQgHgCgKAAIgwAAIAABNIBPAAIAAANIhPAAIAABVIA0AAQAIAAAHgCQAIgBAFgEQAMgIAJgUIAIADIgJAZQgEAJgFAGQgFAGgNAAg");
	this.shape.setTransform(11.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,-18.8,22.8,37.6), null);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("ABZCDQgCgRgDgLQgDgLgEgGQgGgHgGgDQgHgCgHAAIhkAAQgIAAgHACQgGADgFAHQgEAGgEALQgDALgCARIgPAAIAAg8QAAgFACgDQAEgDAFAAIAKAAQAIgRAFgRQAFgSADgSQAFglAAgqQAAgPgDgIQgCgEgEgCQgFgDgHAAIgDAAIAAgJICjAAIAAC+IALAAQAFAAADADQADADAAAFIAAA8gAgag7QgBAagDAVQgDAUgFASQgFASgGAQIBbAAIAAiwIhDAAg");
	this.shape.setTransform(12.4,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(0,-18.8,25.7,37.6), null);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("AhCBmIAAijQAAgOgEgJQgCgEgFgCQgEgCgHAAIgDAAIAAgJIAlAAQAIAAAGACQAFACADAEQADAFACAIIABATIAAArIAbAAQARAAAQADQARADAMAGQANAGAIAMQAIAMAAASQAAASgIAMQgIALgNAHQgMAHgRADQgQACgRAAgAgNgFIgHABIgGACIAABZIAGABQAGACAKAAIABAAQAbAAANgNQAGgGADgJQADgJAAgLQAAgMgDgJQgDgJgGgGQgHgGgKgCQgKgDgNAAIgBAAg");
	this.shape.setTransform(11.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(0,-18.8,23.6,37.6), null);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("AgkBlQgTgJgNgOQgHgHgFgIQgFgIgDgKQgHgTAAgXQAAgWAIgVQAIgUANgPQAOgPATgIQAJgFAKgCQALgCAKAAQAdAAASAIQARAHAJAKQAGAIABANIABAaIgJAAQgGgdgQgOQgPgPgagBQgOAAgMAGQgMAEgJAMQgKAKgFAUQgFAcAAARQAAASADARQAEAQAIANQAIAMANAIQAHAEAIACQAHACAJAAQALAAAJgDQAKgDAJgGQATgLALgWIALAJQgIANgIAJQgJAKgLAFQgKAHgOACQgNAEgQAAQgYgBgTgHg");
	this.shape.setTransform(12.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(0,-18.8,25.2,37.6), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("Ag+BmIAAijQAAgOgEgJQgCgEgEgCQgFgCgHAAIgDAAIAAgJICIAAQAIAAAFACQAFACADADQADAEABAEIABAJIAAAbIgJAAQAAgKgCgHQgDgHgFgFQgFgEgHgCQgHgCgKAAIgwAAIAABNIBPAAIAAANIhPAAIAABVIA0AAQAIAAAHgCQAIgBAFgEQAMgIAJgUIAIADIgJAZQgEAJgFAGQgFAGgNAAg");
	this.shape.setTransform(11.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(0,-18.8,22.8,37.6), null);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4180").s().p("AhCBmIAAijQAAgOgEgJQgCgEgFgCQgEgCgHAAIgDAAIAAgJIBUAAIAdABQAQACAOAFQANAGAJALQAJALAAASQAAAGgDAHQgCAHgGAGQgFAGgIAFQgIAFgLADQAPABAKAEQAKAEAGAHQAGAGADAIQACAJAAAIQAAASgIALQgIALgNAHQgNAGgQACQgRACgQAAgAgaBXIAGABQAGACAKAAIABAAQAZAAANgLQAOgLAAgVQAAgrg0AAIgXAAgAgUhYIgGABIAABOIAXAAQAJAAAHgCQAIgCAGgFQANgJAAgWQAAgLgFgIQgEgIgGgEQgHgFgJgCQgIgCgIAAIgHAAg");
	this.shape.setTransform(11.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(0,-18.8,24.2,37.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ACPGlIAAlHIgzAAQhGAAgsBrIhbDcIjbAAIB2j8QAyhqBRgZIAAgDQi6gqAAitQAAhxBSg/QBShACUAAIEiAAIAANJgAhFikQAAA1AlAfQAjAhA9AAIBPAAIAAjkIhPAAQiFAAAABvg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-12,-15.2,24.1,30.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ADIGlIAAnNQAAhRAGg4IgEAAQgOAcgcAqIlbIQIi/AAIAAtJICzAAIAAHQQAABXgEAdIACAAQADgHAog9IFOoAIDLAAIAANJg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-13.7,-15.2,27.5,30.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("AECH4IAAimIqqAAIAAtJIC+AAIAAKnIFcAAIAAqnIC+AAIAAKnIB4AAIAAFIg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-15.3,-18.2,30.8,36.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ABvGlIj1luQgHgLgPgjIgDAAIAAGcIi+AAIAAtJIC+AAIAAGOIADAAQAGgNARgiIDolfIDiAAIklGRIE+G4g");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-12.7,-15.2,25.4,30.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ADRGlIg8i8IkrAAIg7C8IjNAAIEytJIDgAAIErNJgAgSjFIhbEdIDXAAIhbkaQgLghgDgrIgDAAQgEAmgMAjg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-15,-15.2,30.1,30.5), null);


(lib.rrrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE3E7D").s().p("AghAiQgOgOAAgUQAAgTAOgNQAOgOATAAIAAAAQAUAAAOAOQAOAOAAASQAAAUgOAOQgOANgUAAQgTAAgOgNgAgZgYQgLALABAPQABAPAKAKQALAKANABQAPAAALgLQAKgLAAgPIAAgBQABgOgLgLQgKgLgPgBIgBAAQgPABgKAMgAALAZIgEgMQgBgIgHABIgFAAIAAATIgLAAIAAgvIARgBQAJgBAHAFQAFADgBAHQAAAJgJABIAAAAQAHADABAJIADAMgAgGgPIAAAOIAFAAQAKAAAAgHQAAgHgJAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rrrr, new cjs.Rectangle(-4.7,-4.7,9.6,9.5), null);


(lib.piu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("Ag2D4QgKgKgRgHIgMgDQgUgFgUgHQg+gWgxgnQgvgogbgyQgbg1AAg6QAAg5Abg2QAbgzAvgnQAxgnA+gWQA/gWBGAAQBGAABAAWQA/AWAvAnQAwAnAbAzQAbA2AAA5QAAARgCAPQgJBIgjA6QglA6hFA1Qg7AuhiAiQgxARglAHQAdg2gigdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.piu, new cjs.Rectangle(-34.5,-33.1,69.1,66.3), null);


(lib.igr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.igr();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.igr_1, new cjs.Rectangle(-27.5,-34,55,68), null);


(lib.free = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AgOB6QgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgIAAQgIAAgGgGgAgKBAIgHi/IAjAAIgHC/g");
	this.shape.setTransform(87.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("AgiBWQgQgHgKgNQgMgNgFgRQgGgQAAgUQAAgSAGgRQAFgRAMgMQAKgNAQgHQAPgIAUAAQATAAAQAIQAPAHALANQALAMAFARQAGARgBASQABAUgGAQQgFARgLANQgLANgPAHQgQAHgTAAQgUAAgPgHgAgShHQgJAHgGAKQgGAKgEAPQgDAOAAAPQAAAQADAPQAEAOAGAKQAGALAJAGQAJAGAKAAQAKAAAJgGQAJgGAGgLQAGgKADgOQAEgPAAgQQAAgPgEgOQgDgPgGgKQgGgKgJgHQgJgFgKAAQgKAAgJAFg");
	this.shape_1.setTransform(73.1,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("ABIBZIgQgBQgHgCgEgFQgEgFgBgJIgCgXIAAgkIhLAAIAABRIgjAAIAAiEQABgRgFgKQgCgFgGgDQgFgDgJAAIgFAAIAAgHIAfAAIARABQAHACAEAFQAEAFABAJIACAXIAAAkIBLAAIAAhRIAiAAIAACEQAAARAFAKQACAFAGADQAFADAIAAIAHAAIAAAHg");
	this.shape_2.setTransform(52.6,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgOBZIAAiiIgTAAQgRAAgMAKQgFAEgDAHQgDAIAAAJIgIAAIAAgXIACgLIAEgKQADgEAFgDQAGgCAJAAICGAAIAAAPIg/AAIAACig");
	this.shape_3.setTransform(33.3,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("AghBbQgJgCgJgHQgIgGgGgKQgFgLAAgPQAAgPAIgLQAIgKANgFQANgGASgCQAQgDATAAIAMAAQAAgUgDgNQgDgNgGgGQgFgHgHgDQgIgCgHAAQgQgBgLAHQgFADgEAHQgEAGgCAJIgRAAIABgSQABgIAIgIIAJgFIAOgFIAQgCIAQgBQANAAANADQALADAKAIQAJAJAGAPQAFAQAAAaIAABlIgTAAIgNgRIgCAAQgGAIgNAHQgNAGgUAAQgIAAgKgCgAgSANQgIAEgEAIQgEAGAAAJQAAAJADAHQADAHAFAFQAFAEAGACIANACQAOAAAIgHQAIgHAGgJIAAgzIgMAAQgbAAgQALg");
	this.shape_4.setTransform(14.4,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AhOBaIgJgCIAAgKQAJAAAJgEQAJgFAHgNQAHgOAEgYQAEgYAAgnIgBgPQgBgHgDgFQgCgFgGgDQgFgCgJgBIAAgHICZAAIAACxIgiAAIAAiiIhCAAIAAAeQgBAzgEASQgFAbgIAPQgHAPgLAFQgKAFgLAAg");
	this.shape_5.setTransform(-5.7,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC4281").s().p("AA2BZIAAiiIhMAAIAACiIgiAAIAAiEQAAgRgEgKQgDgFgGgDQgFgDgJAAIgEAAIAAgHICuAAIAACxg");
	this.shape_6.setTransform(-26.3,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC4281").s().p("AgeBWQgPgHgLgNQgKgNgEgRQgGgQAAgUQAAgSAGgRQAEgRAKgMQALgNAPgHQAQgIAVAAQAUAAANADQAOADAIAHIAFAIIADAKIABAOIAAASIgHAAQgCgYgNgMQgOgMgVABQgOAAgKAFQgJAHgIAKQgGAKgEAPQgDAOAAAPQAAAQADAPQAEAOAGAKQAIALAJAGQAKAGAOAAQAVAAAMgIQAMgIAKgOIAIAFQgNAWgRAJQgJAFgKACQgKACgLAAQgVAAgQgHg");
	this.shape_7.setTransform(-44.1,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC4281").s().p("AgeBWQgPgHgKgNQgKgNgFgRQgFgQAAgUQAAgSAFgRQAFgRALgMQAJgNAOgHQAOgIARAAQAnAAASAWQAKALAFAPQAEAPAAAVIgBAOIhyAAQABAPADAOQADANAHAKQAHAJAJAGQAJAFALAAQATAAANgIQAMgIAJgOIAJAFQgNAWgRAJQgSAJgVAAQgTAAgPgHgAAogIQAAgigKgRQgKgRgUAAQgHAAgIAEQgHAFgFAKQgGAIgDANQgDANAAAPIBPAAIAAAAg");
	this.shape_8.setTransform(-62.7,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC4281").s().p("AgfB+QgPgFgKgLQgLgLgGgRQgGgRAAgZIAAgPQAAgiADgXQADgWAHgOQAGgOALgHQAKgHAPgDIA4gOIAUgGQAHgEACgHIAHAAIAAAYQAAAPgLADIhCAPQgMADgJAGQgJAEgHAKQgHAKgDAPQgEAQgCAWIACAAQAHgbARgMQAIgHALgCQALgDANAAQAPAAANAEQANAGAKAKQAKALAGAPQAGAQAAAWQAAAWgGAQQgHAQgKAKQgLALgOAFQgPAFgRAAQgQAAgPgFgAgQgUQgHADgHAJQgGAIgDAMQgEAOAAAUQAAAUAEAOQADAOAGAHQAHAJAHADQAIADAIAAQAIAAAIgDQAIgDAGgJQAGgHAEgOQADgOAAgUQAAgUgDgOQgEgMgGgIQgGgJgIgDQgIgDgIgBQgIABgIADg");
	this.shape_9.setTransform(-81.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.free, new cjs.Rectangle(-94.1,-22.6,188.2,45.2), null);


(lib.can__sm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.can_sm();
	this.instance.parent = this;
	this.instance.setTransform(-36.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.can__sm, new cjs.Rectangle(-36.5,-50,73,100), null);


(lib.blick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.471)","rgba(255,255,255,0.459)","rgba(255,255,255,0.157)","rgba(255,255,255,0)"],[0,0.282,0.525,0.839,1],-64.5,0,64.5,0).s().p("AqEeFMAAAg8JIUJAAMAAAA8Jg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blick, new cjs.Rectangle(-64.5,-192.5,129,385), null);


(lib.wgh2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkAqQgFgCgEgEQgDgEgCgGQgBgGAAgGIAAgmIgdBBIgDAAIgfhDIAABDIgHAAIAAhUIARAAIAbA7IAag7IAQAAIAAA5IABAKIADAIQABAEADACQACADADAAIAAADQgIAAgGgCg");
	this.shape.setTransform(22.4,-25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkAqQgFgCgEgEQgDgEgCgGQgBgGAAgGIAAgmIgdBBIgDAAIgfhDIAABDIgHAAIAAhUIARAAIAbA7IAag7IAQAAIAAA5IABAKIADAIQABAEADACQACADADAAIAAADQgIAAgGgCg");
	this.shape_1.setTransform(10.8,-25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPArQgEgBgEgDQgEgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAGgCQAGgDAJgBIAQgBIAGAAQAAgKgCgGQgBgGgDgDQgCgDgEgCIgGgBQgIAAgFADQgDACgBADIgDAHIgIAAIAAgIQABgEADgEIAFgDIAGgCIAIgBIAHAAIAMABQAGACAEAEQAFAEACAHQADAIAAAMIAAAvIgJAAIgHgIIAAAAQgDAEgGADQgGADgKAAIgIgBgAgIAGQgEACgCAEQgCADAAAEQAAAEACADQABAEADACIAFADIAFABQAHAAAEgDIAHgIIAAgYIgGAAQgMAAgIAFg");
	this.shape_2.setTransform(-0.1,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA8IAAhgQAAgIgCgFQgBgCgCgCIgHgBIgDAAIAAgDIAPAAQAIAAADACQADACACAEIABAAQADgEAFgDQAFgDAKAAQAIAAAGADQAGAEAFAGQADAGACAIQACAIAAAJQAAAJgCAHQgCAIgEAGQgEAGgHAEQgGADgIAAQgIAAgFgCIgJgDIAAAlgAAAgzIgEACIgEAEIgDAEIAAA4IAIAEIAIACQAGAAAEgDQAFgDACgFQADgFABgGQACgGAAgIIgCgPIgEgLQgCgFgEgDQgEgDgFAAg");
	this.shape_3.setTransform(-9.4,-23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAqIAAg+QAAgIgDgFQAAgCgDgCIgHgBIgCAAIAAgDIA7AAIAGABIAFADIABAFIABAFIAAALIgDAAIgBgIQgCgDgDgDQgFgEgIAAIgTAAIAABMg");
	this.shape_4.setTransform(-17.9,-25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBqQgIgBgIgEQgGgEgGgFQgGgGgEgHQgGgKgIgYQgDgVAAgYQAAgYADgTQADgOALgUQAEgIAGgFQAGgFAGgFQAIgEAIgBQAJgCAJAAQAKAAAJACQAIABAIAEQAOAIAIAPQAKANAEAVQADAUAAAXQAAAYgDAVQgIAYgGAKQgIAPgOAHQgIAEgIABQgJADgKAAQgJAAgJgDgAgUhZQgIAGgGAMQgEAMgDASQgCASAAAXQAAAZACARQADATAEAMQAGALAIAHQAJAFALAAQAMAAAJgFQAJgHAFgLQAFgMACgTQACgRAAgZQAAgXgCgSQgCgSgFgMQgFgMgJgGQgJgGgMAAQgLAAgJAGg");
	this.shape_5.setTransform(20.3,-43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBnQgKgCgIgEQgPgJgNgPIAGgFQAMANAOAGQANAGARAAQAJAAAIgDQAIgDAHgGQAGgHAEgJQAEgKAAgNQAAgZgNgLQgHgGgJgCQgJgDgLAAIgOAAIgMABIgNACIgMgMIADhaIBzAAIAAAMIhZAAIgDBMIAKgBIAKAAIALgBQALAAANADQANACALAHQALAGAHALQAEAGACAIQACAIAAAJQAAAKgCAIQgCAIgEAGQgIANgLAGQgLAHgNADQgMACgJAAQgMAAgJgCg");
	this.shape_6.setTransform(3.1,-43.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBpIAAgPIArgpQATgTAMgPQAMgPAHgNQAHgPAAgSQAAgLgEgJQgDgIgFgHQgGgFgHgDQgHgDgIAAQgSAAgOANQgOAOgFAaIgGAAIABgXQABgKAGgIQAIgJAQgIIARgFQAIgCAJAAQAJAAALACQALACAJAHQAJAGAGAMQAHALAAASQAAALgDAIQgCAKgEAIQgKAQgPAQQgPAQgTAQIgpAmIBEAAQAKAAAHgCQAHgCAFgEQAFgEADgGQACgGAAgJIAGAAIAAAUIgBAKQgBAEgDAEQgDADgFADQgFABgIAAg");
	this.shape_7.setTransform(-13.5,-43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance = new lib.piu();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wgh2, new cjs.Rectangle(-32.3,-65.8,69.1,66.3), null);


(lib.wgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkAqQgFgCgEgEQgDgEgCgGQgBgGAAgGIAAgmIgdBBIgDAAIgfhDIAABDIgHAAIAAhUIARAAIAbA7IAag7IAQAAIAAA5IABAKIADAIQABAEADACQACADADAAIAAADQgIAAgGgCg");
	this.shape.setTransform(22.4,-25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkAqQgFgCgEgEQgDgEgCgGQgBgGAAgGIAAgmIgdBBIgDAAIgfhDIAABDIgHAAIAAhUIARAAIAbA7IAag7IAQAAIAAA5IABAKIADAIQABAEADACQACADADAAIAAADQgIAAgGgCg");
	this.shape_1.setTransform(10.8,-25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPArQgEgBgEgDQgEgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAGgCQAGgDAJgBIAQgBIAGAAQAAgKgCgGQgBgGgDgDQgCgDgEgCIgGgBQgIAAgFADQgDACgBADIgDAHIgIAAIAAgIQABgEADgEIAFgDIAGgCIAIgBIAHAAIAMABQAGACAEAEQAFAEACAHQADAIAAAMIAAAvIgJAAIgHgIIAAAAQgDAEgGADQgGADgKAAIgIgBgAgIAGQgEACgCAEQgCADAAAEQAAAEACADQABAEADACIAFADIAFABQAHAAAEgDIAHgIIAAgYIgGAAQgMAAgIAFg");
	this.shape_2.setTransform(-0.1,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA8IAAhgQAAgIgCgFQgBgCgCgCIgHgBIgDAAIAAgDIAPAAQAIAAADACQADACACAEIABAAQADgEAFgDQAFgDAKAAQAIAAAGADQAGAEAFAGQADAGACAIQACAIAAAJQAAAJgCAHQgCAIgEAGQgEAGgHAEQgGADgIAAQgIAAgFgCIgJgDIAAAlgAAAgzIgEACIgEAEIgDAEIAAA4IAIAEIAIACQAGAAAEgDQAFgDACgFQADgFABgGQACgGAAgIIgCgPIgEgLQgCgFgEgDQgEgDgFAAg");
	this.shape_3.setTransform(-9.4,-23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAqIAAg+QAAgIgDgFQAAgCgDgCIgHgBIgCAAIAAgDIA7AAIAGABIAFADIABAFIABAFIAAALIgDAAIgBgIQgCgDgDgDQgFgEgIAAIgTAAIAABMg");
	this.shape_4.setTransform(-17.9,-25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBqQgIgBgIgEQgGgEgGgFQgGgGgEgHQgGgKgIgYQgDgVAAgYQAAgYADgTQADgOALgUQAEgIAGgFQAGgFAGgFQAIgEAIgBQAJgCAJAAQAKAAAJACQAIABAIAEQAOAIAIAPQAJANAFAVQADAUAAAXQAAAYgDAVQgHAYgHAKQgIAPgOAHQgIAEgIABQgJADgKAAQgJAAgJgDgAgUhZQgJAGgFAMQgFAMgCASQgCASAAAXQAAAZACARQACATAFAMQAFALAJAHQAJAFALAAQAMAAAJgFQAIgHAGgLQAEgMADgTQACgRAAgZQAAgXgCgSQgDgSgEgMQgGgMgIgGQgJgGgMAAQgLAAgJAGg");
	this.shape_5.setTransform(21.1,-43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBqQgIgBgIgEQgHgEgFgFQgGgGgFgHQgFgKgIgYQgDgVAAgYQAAgYADgTQAEgOAJgUQAFgIAGgFQAFgFAHgFQAIgEAIgBQAJgCAJAAQALAAAIACQAIABAIAEQAOAIAIAPQAJANAFAVQADAUAAAXQAAAYgDAVQgHAYgHAKQgIAPgOAHQgIAEgIABQgIADgLAAQgJAAgJgDgAgUhZQgJAGgFAMQgEAMgDASQgCASAAAXQAAAZACARQADATAEAMQAFALAJAHQAJAFALAAQAMAAAJgFQAIgHAGgLQAEgMACgTQADgRAAgZQAAgXgDgSQgCgSgEgMQgGgMgIgGQgJgGgMAAQgLAAgJAGg");
	this.shape_6.setTransform(3,-43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBnQgKgCgIgEQgPgJgNgPIAGgFQAMANAOAGQANAGARAAQAJAAAIgDQAIgDAHgGQAGgHAEgJQAEgKAAgNQAAgZgNgLQgHgGgJgCQgJgDgLAAIgOAAIgMABIgNACIgMgMIADhaIBzAAIAAAMIhZAAIgDBMIAKgBIAKAAIALgBQALAAANADQANACALAHQALAGAHALQAEAGACAIQACAIAAAJQAAAKgCAIQgCAIgEAGQgIANgLAGQgLAHgNADQgMACgJAAQgMAAgJgCg");
	this.shape_7.setTransform(-14.2,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance = new lib.piu();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wgh, new cjs.Rectangle(-32.3,-65.8,69.1,66.3), null);


(lib.turl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol104();
	this.instance.parent = this;
	this.instance.setTransform(62.7,0);

	this.instance_1 = new lib.Symbol103();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.4,0);

	this.instance_2 = new lib.Symbol102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.8,0);

	this.instance_3 = new lib.Symbol101();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,0);

	this.instance_4 = new lib.Symbol100();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.9,0);

	this.instance_5 = new lib.Symbol99();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.5,0);

	this.instance_6 = new lib.Symbol98();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6.2,0);

	this.instance_7 = new lib.Symbol97();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-15.9,0);

	this.instance_8 = new lib.Symbol96();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-28.1,0);

	this.instance_9 = new lib.Symbol95();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-45.6,0);

	this.instance_10 = new lib.Symbol94();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-60,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.turl, new cjs.Rectangle(-69.4,-10.6,139,21.3), null);


(lib.tph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol81();
	this.instance.parent = this;
	this.instance.setTransform(0,13.4);

	this.instance_1 = new lib.Symbol80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tph, new cjs.Rectangle(-138.8,-26.7,277.6,53.5), null);


(lib.tp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol90();
	this.instance.parent = this;
	this.instance.setTransform(46.9,22.5);

	this.instance_1 = new lib.Symbol89();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.3,22.5);

	this.instance_2 = new lib.Symbol87();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tp1, new cjs.Rectangle(-108.3,-34.2,216.6,68.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol79();
	this.instance.parent = this;
	this.instance.setTransform(0,15.2);

	this.instance_1 = new lib.Symbol78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.5,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-82.6,-32.3,165.3,64.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol77();
	this.instance.parent = this;
	this.instance.setTransform(0,16.5);

	this.instance_1 = new lib.Symbol76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-99.9,-35.8,199.9,71.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol75();
	this.instance.parent = this;
	this.instance.setTransform(0,16.5);

	this.instance_1 = new lib.Symbol74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-84,-34.2,168,68.5), null);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol73();
	this.instance.parent = this;
	this.instance.setTransform(103,0,1,1,0,0,0,11.8,0);

	this.instance_1 = new lib.Symbol72();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.4,0,1,1,0,0,0,11,0);

	this.instance_2 = new lib.Symbol71();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.6,0,1,1,0,0,0,11.9,0);

	this.instance_3 = new lib.Symbol70();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45.8,0,1,1,0,0,0,12.1,0);

	this.instance_4 = new lib.Symbol69();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25,0,1,1,0,0,0,12.8,0);

	this.instance_5 = new lib.Symbol68();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5,0,1,1,0,0,0,11.4,0);

	this.instance_6 = new lib.Symbol67();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-15.1,0,1,1,0,0,0,12.8,0);

	this.instance_7 = new lib.Symbol66();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-43.2,0,1,1,0,0,0,11.8,0);

	this.instance_8 = new lib.Symbol65();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-63.4,0,1,1,0,0,0,12.6,0);

	this.instance_9 = new lib.Symbol64();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-83.2,0,1,1,0,0,0,11.4,0);

	this.instance_10 = new lib.Symbol63();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-102.5,0,1,1,0,0,0,12.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t0, new cjs.Rectangle(-114.6,-18.8,229.4,37.6), null);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rrrr();
	this.instance.parent = this;
	this.instance.setTransform(76.4,-14.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4281").s().p("AhGCEIAAjXQAAgSgFgLQgCgFgHgDQgFgDgJAAIgIAAIAAgIIAkAAIASACQAGACAEAFQAEAFADAKIABAYIAADHICNAAIAAAQg");
	this.shape.setTransform(66,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC4281").s().p("ABgCEQgJgCgKgGQgIgFgKgLQgJgKgGgRIgLgaIhuAAIggBMIgSAAIBwkHIAMAAIBWDVIAKATQAEAIAFAFQAFAEAGADIAPADIAAAIIgQACgAAaAnIgvhzIgyBzIBhAAg");
	this.shape_1.setTransform(43,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC4281").s().p("ABzCIQgOgFgJgKQgIgLgDgQQgEgRAAgWIAAiZIhjDdIgIAAIhojhIAADhIgQAAIAAkHIAmAAIBgDPIBdjPIAkAAIAADDQAAASACAPQADAOAEALQAEAJAIAGQAHAFAKAAIAAAIQgWAAgOgFg");
	this.shape_2.setTransform(13.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC4281").s().p("AgeB+QgTgGgMgQQgGgHgEgJIgHgUQgFgXAAgdIAAhlQAAgSgFgLQgCgFgGgDQgGgDgJAAIgIAAIAAgIIAkAAIARACQAHACAFAFQAEAFABAKIACAYIAABxQAAAVAEARQAEAQAHAMQAJAMAOAGQAMAGAUAAQAWAAARgGQAPgGAJgMQAKgNAEgUQAEgSAAgbIAAiVIAQAAIAACVQAAAdgEAXIgGAUQgEAJgGAHQgMAQgUAGQgTAIgfAAQgcAAgUgIg");
	this.shape_3.setTransform(-20,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC4281").s().p("ABgCEQgJgCgKgGQgJgFgJgLQgJgKgGgRIgLgaIhuAAIggBMIgSAAIBwkHIAMAAIBXDVIAJATQAEAIAGAFQAFAEAFADIAPADIAAAIIgQACgAAaAnIgvhzIgyBzIBhAAg");
	this.shape_4.setTransform(-44.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC4281").s().p("AgbCIQgRgEgNgGQgNgGgIgKQgIgJAAgLIAAgrIAIAAQAHApATARQAKAJAOAFQANAEAQAAQAKAAAJgCQAKgDAHgFQAHgGAEgHQAFgIAAgKQAAgRgLgNQgLgMgWgNIgwgcQgagPgLgQQgFgIgDgJQgCgKAAgLQAAgPAFgNQAGgMAKgJQAKgJAPgFQAOgFARAAQAOAAAQADQAPADAMAHQANAGAIAJQAIAJAAALIAAArIgIAAQgHgogTgSQgKgIgNgFQgNgEgQAAQgJAAgIADQgIADgHAFQgGAFgEAIQgEAHAAAJQAAAJADAHQADAHAFAGIAOAMIAUAMIAwAdIAWAOQAJAHAGAIQAGAHADAJQADAJAAALQAAARgGAOQgFANgLAKQgLAKgPAFQgQAFgTAAQgPAAgQgDg");
	this.shape_5.setTransform(-68.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(-81.1,-23.6,162.4,47.3), null);


(lib.promo_letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(64.6,-3);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,-3);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.9,0);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-30,-3);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-61.5,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.promo_letters, new cjs.Rectangle(-76.6,-18.2,153.3,36.6), null);


(lib.promo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// letters
	this.letters = new lib.promo_letters();
	this.letters.parent = this;
	this.letters.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get(this.letters).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC4280").s().p("ArhGmIkHmnIEHmkIXDAAIEHGkIkHGngAvTgBID8GVIWvAAID8mVIj8mSI2vAAgAIMFfIgkglQgDgCAAgEQAAgEADgCIAkglQADgDAEAAQADAAADADQACADAAADQAAAEgCADIgWAVICsAAIAEgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAIgGAHQgGAGgJAAQgIAAgGgGIgEgGIisAAIAWAVQACADAAAEQAAADgCADQgDACgEAAQgDAAgDgCgAoUFfQgDgDAAgDQAAgEADgDIAVgVIiuAAIgEAGQgHAGgIAAQgJAAgGgGQgGgHAAgIQAAgJAGgGQAGgGAJAAQAIAAAHAGIAEAGICvAAIgWgVQgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADIAlAlQADACAAAEQAAAEgDACIglAlQgCACgEAAQgDAAgDgCgAGXFIIAAgOIgDAAIAAAFIgGAAIAAgFIAGAAIAAgDIgOAAIAAgGIAOAAIAAgDIgGAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAGXE3IAGAAIAAgGIgGAAgAFFFIIAAgOIgDAAIAAAFIgGAAIAAgFIAGAAIAAgDIgOAAIAAgGIAOAAIAAgDIgGAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAFFE3IAGAAIAAgGIgGAAgADzFIIAAgOIgDAAIAAAFIgGAAIAAgFIAGAAIAAgDIgPAAIAAgGIAPAAIAAgDIgGAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgADzE3IAGAAIAAgGIgGAAgAChFIIAAgOIgDAAIAAAFIgGAAIAAgFIAGAAIAAgDIgPAAIAAgGIAPAAIAAgDIgGAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAChE3IAGAAIAAgGIgGAAgABPFIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgOAAIAAgGIAOAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgABPE3IAGAAIAAgGIgGAAgAgCFIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgOAAIAAgGIAOAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAFAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIANAAIAAAGIgNAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAgCE3IAFAAIAAgGIgFAAgAhUFIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgNAAIAAgGIANAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAhUE3IAGAAIAAgGIgGAAgAimFIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgNAAIAAgGIANAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAimE3IAGAAIAAgGIgGAAgAj4FIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgOAAIAAgGIAOAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAj4E3IAGAAIAAgGIgGAAgAlKFIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgOAAIAAgGIAOAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAlKE3IAGAAIAAgGIgGAAgAmcFIIAAgOIgDAAIAAAFIgGAAIAAgFIAFAAIAAgDIgOAAIAAgGIAOAAIAAgDIgFAAIAAgGIAGAAIAAAFIADAAIAAgOIAGAAIAAAOIADAAIAAgFIAGAAIAAAGIgFAAIAAADIAOAAIAAAGIgOAAIAAADIAFAAIAAAFIgGAAIAAgFIgDAAIAAAOgAmcE3IAGAAIAAgGIgGAAgAGKjpIglgkQgCgDAAgDQAAgEACgDIAlgkQACgDAEAAQAEAAACADQADACAAAEQAAAEgDACIgVAWIEuAAIAEgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgIAAgGgGIgEgGIkvAAIAWAWQADACAAAEQAAAEgDACQgCADgEAAQgEAAgCgDgAmVjpQgDgCAAgEQAAgEADgCIAWgWIkuAAIgEAGQgHAGgIAAQgJAAgGgGQgGgGAAgIQAAgJAGgGQAGgGAJAAQAIAAAHAGIAEAGIEtAAIgVgWQgDgCAAgEQAAgEADgCQACgDAEAAQAEAAACADIAlAkQACADAAAEQAAADgCADIglAkQgCADgEAAQgEAAgCgDgAkmjpIgEgCQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgIIAAgIQAAgFACgBIACAAIACABIAAACIABACQAAAHAEADQAGAGAKgBQAEAAAEgCQAEgCACgDQAEgGgDgIQgCgFgIgHIgNgLQgHgGgEgFQgGgIABgKQAAgLAHgHQAGgGAKgBQAKgCANADIADAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAJIgBAKQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgFIgCgFQgEgFgKAAQgHAAgFADQgCADgBAEQgBAEABAEQABADAGAFIAMAKIALAKQAGAGACAGQADAHgBAHQAAAHgEAGQgGAKgNADIgMACQgIAAgIgDgAh4jsQgMgGgEgOQgDgIAAgOIAAghIgBgRQAAgCgFgBIgDAAIgCgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEAAIAUAAIAJAAIAEABIAAADIgCACIgGABIgBADIgBADIAAAtQAAAQAEAIQACAGAEADQAFAEAGABQAJACAIgCQAFgCAEgEQAEgEACgFQACgHAAgJIABgRIgBgkIAAgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgHgBIgCgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABgBAFAAIAVAAIAEAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgDABIgEABQgCABAAAFIAAAuQgBAWgHALQgFAGgIAEQgIAEgIAAIgGABQgPAAgJgGgAEDjoIgagBIgRABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEgBQACgEAAgIIAAgTQABglgBgTQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAAAIgEgBIgEAAIgCgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQACgBAFAAQARABAJgBIAEAAIADABIABADQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgHABIgBACQgBADAAALIAAAjIAAASIACAPQABADAEABIAQAAIAFAAIAEgDQACgCACgGIABgDQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQACABgBAEIgCAPQgBACgDABIgIAAIgIAAgABojoQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAIAFgBIAEgBQADgBABgEIADgGIAfhRIABgDIACgEQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIACADIAJAUIAVA2IAEAIIADAIQAEAGAFABIADABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgZgBIgDAAIgDgCQAAAAAAgBQAAAAAAAAQABgBAAgBQABAAAAgBIgJgXIgEgIIgbgBIgHAVQgDAIABADIADABIAEABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgJAAIgLAAIgHAAIgEAAgACOkYIAVAAIgKgdIgBAAIgKAdgAjdjoIgIgBIgMABIgDgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAEgBIAEgBIAFgEIACgGIAghTIACgFIADgBIACABIADAGIAfBOQAEAKAEAEQADABAGABQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgYgBIgDAAIgCgBQgBgBAAAAQAAgBABAAQAAgBAAgBQABAAABgBIgNgfIgZgBIgDABIgGASQgDAJAAAEIAEABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgDACIgDAAIgGAAgAjFkuIgHAWIAVAAIgLgeIgDAIgAgajpIgHABIgHAAIgCgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgBIADgFIALhaQABgEACgBQACAAACADIAoBOIAmhOQABgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQADAAAAAEIALBTIABAHQABADACACIAFABIAGABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBADIgDABIgUgBIgJgBIgCgBIgBgCIADgDIgHg+IgLAXIgUAnIgDAGIgCABIgDgBIgEgHIgdg7IgEAfIgBAOIgBAOQABACAEAAQAFABAAACIgBADIgCABIgEAAIgKgBgAEdk8QgEgCgBgFQgCgFADgEQACgEAFgBQAFgBAEADQADACABAEQABAEgCAEIgCAAQACgGgCgDQgCgEgEAAQgDgBgDACQgDABgBADQgBAEACADQABADADABQAEABADgBIACgBIACABQgDADgDAAQgEAAgDgBgAEmlBIgDgCIgCgDIAAAGIgCAAIAAgKIgBgBIgBgBIAHAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIABACIgBABIgCABQACAEAEADQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAEhlGQABAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.promo, new cjs.Rectangle(-100.1,-42.2,200.3,84.4), null);


(lib.flakes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flakes.png copy 2
	this.instance = new lib.Symbol105();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flakes.png copy
	this.instance_1 = new lib.Symbol106();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// flakes.png
	this.instance_2 = new lib.Symbol107();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.flakes_1, new cjs.Rectangle(-57,-20.9,110,41), null);


(lib.can2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.igr = new lib.igr_1();
	this.igr.parent = this;
	this.igr.setTransform(-104,46);

	this.timeline.addTween(cjs.Tween.get(this.igr).wait(1));

	// bln
	this.bln = new lib.wgh2();
	this.bln.parent = this;
	this.bln.setTransform(-8.2,-31.1,0.811,0.811,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bln).wait(1));

	// box.png
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-104.5,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnaKUIAA0nIO1AAIAAUng");
	mask.setTransform(-44,-23.3);

	// can
	this.can = new lib.can__sm();
	this.can.parent = this;
	this.can.setTransform(-46,-25.3);

	var maskedShapeInstanceList = [this.can];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.can).wait(1));

}).prototype = getMCSymbolPrototype(lib.can2, new cjs.Rectangle(-131.5,-84.6,236,169.3), null);


(lib.can_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.bln = new lib.wgh();
	this.bln.parent = this;
	this.bln.setTransform(67.3,-40.8,1.042,1.042,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bln).wait(1));

	// Layer 1
	this.instance = new lib.can();
	this.instance.parent = this;
	this.instance.setTransform(-68,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.can_1, new cjs.Rectangle(-68,-109.5,173.5,173.5), null);


(lib.blick_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blick_wrap, new cjs.Rectangle(-64.5,-192.5,129,385), null);


(lib.tp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93();
	this.instance.parent = this;
	this.instance.setTransform(108.6,25.5);

	this.instance_1 = new lib.Symbol92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.8,25.5);

	this.instance_2 = new lib.Symbol91();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-102.8,25.5);

	this.instance_3 = new lib.Symbol85();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.1,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tp2, new cjs.Rectangle(-154.6,-37.2,309.3,74.5), null);


(lib.phone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmhGhQisisAAj1QAAj0CsisQCuitDzAAQD0AACtCtQCtCsAAD0QAAD1itCsQitCtj0AAQjzAAiuitg");
	mask.setTransform(-1,0.1);

	// Layer 2
	this.blick = new lib.blick_wrap();
	this.blick.parent = this;
	this.blick.setTransform(-127.2,-67.6,0.787,0.833,30.9,0,0,-0.5,-0.3);
	this.blick.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.blick];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Layer 1
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(-69,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_1, new cjs.Rectangle(-69,-69,138,138), null);


// stage content:
(lib._336x280_saumal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var w = document.getElementById('canvas').offsetWidth;
		var h = document.getElementById('canvas').offsetHeight;
		
		var repeated = false;
		
		var tl = new TimelineMax({repeat: 0, onRepeat: function(){
			repeated = true;
		}});
		
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
		
		function check(){
			if (repeated) {
				tl.stop();
			}
		}
		
		var can2 = this.can2;
		can2.visible = false;
		
		var can_s2 = this.can_s2;
		can_s2.visible = false;
		
		var pl = g(this.promo.letters);
		var t0 = g(this.t0)
		var t1 = g(this.t1)
		var t2 = g(this.t2);
		t2.push(this.free);
		var t3 = g(this.t3)
		var tph = g(this.tph)
		
		var tp1 = g(this.tp1)
		var tp2 = g(this.tp2)
		var turl = g(this.turl)
		var flakes = g(this.flakes)
		
		
		
		
		tl
		.from(this, .5, {alpha:0})
		.from(this.promo, 2, {scaleX: 0, scaleY: 0, ease: Elastic.easeOut.config(1, .55)})
		.staggerFrom(pl, 1, {scaleX: 0, scaleY: 0, ease:Back.easeOut}, .1, '-=1.8')
		.staggerFrom(t0, .6, { scaleX: 0, scaleY: 0, x: 0, ease: Back.easeOut}, .08, '-=.3')
		
		.staggerTo([this.promo, this.t0], .5, {x: '-=150', alpha: 0, ease: Back.easeIn}, .3 ,'+=1')
		
		.from(this.can, .8, {x: '+='+w, ease: Expo.easeOut})
		.from(this.can.bln, .8, {scaleX: 0, scaleY: 0, rotation: '+=45', ease: Elastic.easeOut.config(.95, .55)}, '-=.5')
		.staggerFrom(t1, .8, {x: '+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=1')
		
		.staggerTo(t1, .5, {x: '-=150', alpha: 0, ease: Sine.easeIn}, .1, '+=1')
		.to(this.can, .5, {x: '-='+w, ease: Sine.easeIn}, '-=.5')
		
		.from(this.can_s, .8, {x: '+='+w, ease: Expo.easeOut})
		.from(this.can_s.can, .7, {y: '+=60', ease: Back.easeOut})
		.from(this.can_s.bln, .8, {scaleX: 0, scaleY: 0, rotation: '+=45', ease: Elastic.easeOut.config(.95, .55)}, '-=.3')
		
		.staggerFrom(t2, .8, {x: '+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=1.7')
		
		
		.add('collect', '+=.8')
		.to(this.can, .5, {x: can2.x, y: can2.y, scaleX: can2.scaleX, scaleY: can2.scaleY, ease: Power2.easeOut}, 'collect')
		.to(this.can_s, .4, {x: can_s2.x, y: can_s2.y, scaleX: can_s2.scaleX, scaleY: can_s2.scaleY, ease: Back.easeIn}, 'collect-=.1')
		
		
		.staggerTo(t2, .5, {x: '-=150', alpha: 0, ease: Sine.easeIn}, .1, '+=1.5')
		.staggerTo([this.can, this.can_s], .5, {x: '-=150', alpha: 0, ease: Back.easeIn}, .1, '-=.5')
		
		.from(this.wht, .5, {alpha:0}, '-=.3')
		.staggerFrom(t3, .8, {x: '+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=.5')
		.from(this.phone, .9, {scaleX: 0, scaleY:0, ease: Elastic.easeOut.config(.95, .55)}, '-=.5')
		.staggerFrom(tph, .8, {x: '+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=.5')
		
		.fromTo(g(this.phone.blick), 2, {x: 0}, {x: 350})
		
		.add('clean', '+=.7')
		.staggerTo(t3, .5, {x: '-=150', alpha: 0, ease: Sine.easeIn}, .1, 'clean')
		.staggerTo(tph, .5, {x: '-=150', alpha: 0, ease: Sine.easeIn}, .1, 'clean')
		.staggerTo([this.phone], .5, {x: '-=150', alpha: 0, ease: Back.easeIn}, .1, 'clean')
		
		
		.staggerFrom(flakes, .6, { scaleX: 0, scaleY: 0, x: 0, ease: Back.easeOut}, .1)
		.staggerFrom(tp1, .8, {x: '+=150', alpha: 0, ease: Expo.easeOut}, .2, '-=.5')
		.staggerFrom(tp2, .8, {y: '+=50', alpha: 0, ease: Expo.easeOut}, .2, '-=.5')
		.staggerFrom(turl, .6, { scaleX: 0, scaleY: 0, x: 0, ease: Back.easeOut}, .07, '-=.3')
		
		
		console.log(tl.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tp2
	this.tp2 = new lib.tp2();
	this.tp2.parent = this;
	this.tp2.setTransform(168,200.1);

	this.timeline.addTween(cjs.Tween.get(this.tp2).wait(1));

	// tp1
	this.tp1 = new lib.tp1();
	this.tp1.parent = this;
	this.tp1.setTransform(168,60.2);

	this.timeline.addTween(cjs.Tween.get(this.tp1).wait(1));

	// turl
	this.turl = new lib.turl();
	this.turl.parent = this;
	this.turl.setTransform(167,259);

	this.timeline.addTween(cjs.Tween.get(this.turl).wait(1));

	// flakes
	this.flakes = new lib.flakes_1();
	this.flakes.parent = this;
	this.flakes.setTransform(168,132);

	this.timeline.addTween(cjs.Tween.get(this.flakes).wait(1));

	// tph
	this.tph = new lib.tph();
	this.tph.parent = this;
	this.tph.setTransform(168,248.6);

	this.timeline.addTween(cjs.Tween.get(this.tph).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(171.6,42.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// phone
	this.phone = new lib.phone_1();
	this.phone.parent = this;
	this.phone.setTransform(168,147);

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(1));

	// wht
	this.wht = new lib.white();
	this.wht.parent = this;
	this.wht.setTransform(168,140,0.836,0.878);
	this.wht.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.wht).wait(1));

	// free
	this.free = new lib.free();
	this.free.parent = this;
	this.free.setTransform(168,253.4);

	this.timeline.addTween(cjs.Tween.get(this.free).wait(1));

	// snow
	this.instance = new lib.snow();
	this.instance.parent = this;
	this.instance.setTransform(-23,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// can2
	this.can2 = new lib.can_1();
	this.can2.parent = this;
	this.can2.setTransform(79.3,198);

	this.timeline.addTween(cjs.Tween.get(this.can2).wait(1));

	// can_s2
	this.can_s2 = new lib.can2();
	this.can_s2.parent = this;
	this.can_s2.setTransform(260.5,178.4,0.796,0.796);

	this.timeline.addTween(cjs.Tween.get(this.can_s2).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(168,45.9);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// can_s
	this.can_s = new lib.can2();
	this.can_s.parent = this;
	this.can_s.setTransform(214.5,168.4);

	this.timeline.addTween(cjs.Tween.get(this.can_s).wait(1));

	// can
	this.can = new lib.can_1();
	this.can.parent = this;
	this.can.setTransform(149.3,198);

	this.timeline.addTween(cjs.Tween.get(this.can).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(168,44.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t0
	this.t0 = new lib.t0();
	this.t0.parent = this;
	this.t0.setTransform(168,217);

	this.timeline.addTween(cjs.Tween.get(this.t0).wait(1));

	// promo
	this.promo = new lib.promo();
	this.promo.parent = this;
	this.promo.setTransform(168,140,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// bg
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.1,56,428.6,364);
// library properties:
lib.properties = {
	id: '0CC513161FF94BE884C7B4F0085907BB',
	width: 336,
	height: 280,
	fps: 24,
	color: "#E2F3FB",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"back.jpg", id:"back"},
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
an.compositions['0CC513161FF94BE884C7B4F0085907BB'] = {
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