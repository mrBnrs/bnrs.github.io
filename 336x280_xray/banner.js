(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_P_", frames: [[0,206,144,257],[146,206,111,21],[146,229,111,15],[259,206,25,19],[0,0,380,204]]}
];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.elky = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo__line = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo__n = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.xray = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(4);
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
	this.instance = new lib.xray();
	this.instance.parent = this;
	this.instance.setTransform(-292,-150,1.516,1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.црууд, new cjs.Rectangle(-27.1,-27.1,54.3,54.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FA2A4").s().p("ABPCKIgVg3Ih0AAIgVA3IhDAAIBxkTIBCAAIByETgAAmAdIgkhoIgEAAIglBoIBNAAg");
	this.shape.setTransform(60.8,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FA2A4").s().p("Ah8CJIAAkRIBlAAQARAAAPACQAPACAOAFQAOAGAMAHQAMAHAJAJQAJAJAIALQAIALAFAMQAFANACAOQADAOAAAOQAAAPgDAOQgDANgEANQgFANgJALQgHALgKAJQgKAJgLAHQgMAHgOAFQgOAFgPADQgPACgRAAgAg/BSIAnAAQASAAAQgGQAQgFAMgLQALgKAIgQQAGgQABgSQgBgTgFgPQgGgQgMgKQgKgLgRgFQgPgFgWAAIgnAAg");
	this.shape_1.setTransform(34.1,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FA2A4").s().p("ABPCKIgVg3Ih0AAIgVA3IhDAAIBxkTIBCAAIByETgAAmAdIglhoIgDAAIgkBoIBMAAg");
	this.shape_2.setTransform(6.1,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9FA2A4").s().p("AhoCJIAAkRIA9AAIAADZICUAAIAAA4g");
	this.shape_3.setTransform(-18.3,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-34,-22.5,117.7,45), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4B1BD").s().p("AgeBJIAAgOQAKAAAEgDQAFgDACgJIAEgJIgihsIAQAAIAPAzIAJAkIAIgkIAOgzIARAAIggByIgEAPQgDAGgDAEQgEAEgHACIgMACIgFgBg");
	this.shape.setTransform(22.8,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4B1BD").s().p("AAeBUIAAgVIg7AAIAAAVIgQAAIAAgjIAJAAQAEgEACgFIABgNIAFhuIA7AAIAACEIALAAIAAAjgAgNAbIgCAOQgCAEgDAEIAmAAIAAh0IgaAAg");
	this.shape_1.setTransform(13.1,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4B1BD").s().p("AgOBIQgGgCgEgFQgEgFgDgHQgCgGAAgJIAAhLQAAgJACgGQADgHAEgFQAEgFAGgDQAHgCAHAAQAIAAAHACQAGADAEAFQAFAFACAHQACAGAAAJIAABLQAAAJgCAGQgCAHgFAFQgEAFgGACQgHADgIAAQgHAAgHgDgAgMg2QgEAGAAAKIAABNQAAAKAEAFQAEAGAIAAQAJAAAEgGQAEgFAAgKIAAhNQAAgKgEgGQgEgFgJAAQgIAAgEAFg");
	this.shape_2.setTransform(3.8,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4B1BD").s().p("AgcBJIAAiSIA5AAIAAAQIgpAAIAACCg");
	this.shape_3.setTransform(-4,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4B1BD").s().p("AAfBJIAAiSIAQAAIAACSgAguBJIAAiSIAQAAIAAA6IAOAAQAJAAAHADQAFACAEAEQAFAFACAGQABAGAAAJIAAARQAAAJgBAGQgDAHgEAFQgEAEgFADQgGACgJAAgAgeA7IAPAAQAJgBAFgFQACgEAAgLIAAgTQABgLgEgEQgEgEgKAAIgOAAg");
	this.shape_4.setTransform(-13.4,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4B1BD").s().p("AghBJIAAiSIAhAAQAIAAAGACQAGADAEAEQADADACAHQACAGAAAIIAAAHQAAAMgEAHQgCADgDADQgDADgFABQAFABAEADQAEACACAFIAEAJIABAKIAAANQAAAJgCAFQgDAHgEAEQgEAFgGACQgGACgJAAgAgQA7IAQAAQAJgBAEgFQAEgEAAgLIAAgNIgBgJQgBgFgDgDQgCgCgEgBIgIgBIgOAAgAgQgKIAMAAQAJAAAFgEIAEgGIABgJIAAgJQAAgKgEgFQgEgFgHABIgQAAg");
	this.shape_5.setTransform(-23.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-29.3,-12.5,58.8,25), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4B1BD").s().p("AAEBIQgGgCgEgFQgEgFgCgHQgCgGAAgJIAAgfIgVAAIAABCIgQAAIAAiSIAQAAIAABCIAVAAIAAgeQAAgJACgGQACgHAEgFQAEgFAGgDQAHgCAIAAQAIAAAGACQAHADAEAFQAEAFACAHQACAGABAJIAABLQgBAJgCAGQgCAHgEAFQgEAFgHACQgGADgIAAQgIAAgHgDgAAFg2QgDAGAAAKIAABNQAAAKADAFQAFAGAJAAQAIAAAFgGQAEgFAAgKIAAhNQAAgKgEgGQgFgFgIAAQgJAAgFAFg");
	this.shape.setTransform(10.6,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4B1BD").s().p("AgOBIQgGgCgEgFQgEgFgDgHQgCgGAAgJIAAhLQAAgJACgGQADgHAEgFQAEgFAGgDQAHgCAHAAQAIAAAHACQAGADAEAFQAFAFACAHQACAGAAAJIAABLQAAAJgCAGQgCAHgFAFQgEAFgGACQgHADgIAAQgHAAgHgDgAgMg2QgEAGAAAKIAABNQAAAKAEAFQAEAGAIAAQAJAAAEgGQAEgFAAgKIAAhNQAAgKgEgGQgEgFgJAAQgIAAgEAFg");
	this.shape_1.setTransform(0.3,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4B1BD").s().p("AghBJIAAiSIAhAAQAIAAAGACQAGADAEAEQADADACAHQACAGAAAIIAAAHQAAAMgEAHQgCADgDADQgDADgFABQAFABAEADQAEACACAFIAEAJIABAKIAAANQAAAJgCAFQgDAHgEAEQgEAFgGACQgGACgJAAgAgQA7IAQAAQAJgBAEgFQAEgEAAgLIAAgNIgBgJQgBgFgDgDQgCgCgEgBIgIgBIgOAAgAgQgKIAMAAQAJAAAFgEIAEgGIABgJIAAgJQAAgKgEgFQgEgFgHABIgQAAg");
	this.shape_2.setTransform(-7.9,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4B1BD").s().p("AgOBIQgGgCgEgFQgEgFgCgHQgCgGAAgJIAAhLQAAgJACgGQACgHAEgFQAEgFAGgDQAHgCAHAAQAIAAAHACQAGADAEAFQAEAFACAHQACAGAAAJIAAANIgQAAIAAgOQAAgKgEgGQgEgFgJAAQgHAAgFAFQgEAGAAAKIAABNQAAAKAEAFQAFAGAHAAQAJAAAEgGQAEgFAAgKIAAgTIAQAAIAAASQAAAJgCAGQgCAHgEAFQgEAFgGACQgHADgIAAQgHAAgHgDg");
	this.shape_3.setTransform(-16.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-22.1,-12.5,44.3,25), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4B1BD").s().p("AAUBYIAAh0IgPAtIgVBHIgRAAIAAiSIAOAAIAABtIANgrIAXhCIASAAIAACSgAgHhEQgFgBgDgEQgCgCgCgEIgCgIIAKAAQABAFAEADQADACAEAAQAGAAADgCQADgDAAgFIAKAAQAAAEgBAEQgBAEgDACQgEAEgDABQgFABgFAAQgEAAgEgBg");
	this.shape.setTransform(15.5,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4B1BD").s().p("AAYBJIgGgdIgkAAIgFAdIgQAAIAciSIAXAAIAcCSgAAQAeIgQhUIgQBUIAgAAg");
	this.shape_1.setTransform(6.7,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4B1BD").s().p("AASBJIAAhCIgjAAIAABCIgRAAIAAiSIARAAIAABCIAjAAIAAhCIARAAIAACSg");
	this.shape_2.setTransform(-2.1,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4B1BD").s().p("AgNBIQgHgCgEgFQgEgFgCgHQgCgGAAgJIAAgOIAPAAIAAAPQAAAKAFAFQAEAGAIAAQAIAAAFgGQAEgFAAgMIAAgLQAAgKgFgHIgGgDQgEgCgDAAIgHAAIAAgOIAIAAQAHAAAFgFQAFgFAAgJIAAgIQAAgLgEgGQgFgFgIAAQgIAAgEAFQgFAGAAAKIAAAKIgOAAIAAgJQAAgJABgHQACgGAEgFQAEgFAHgDQAFgCAIAAQAIAAAHACQAGADAEAFQAEAFACAHQACAGAAAJIAAADIgBAMQgBAEgDAEQgBAEgEADIgIAEQAFABADACIAGAHQAEAIAAALIAAAMQAAAJgCAGQgCAHgEAFQgEAFgGACQgHADgIAAQgHAAgGgDg");
	this.shape_3.setTransform(-10.5,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4B1BD").s().p("AgeBJIAAgOQAKAAAEgDQAFgDACgJIADgJIghhsIAQAAIAPAzIAJAkIAJgkIANgzIARAAIgfByIgFAPQgDAGgDAEQgFAEgGACIgMACIgFgBg");
	this.shape_4.setTransform(-19,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-25.4,-12.5,50.9,25), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E29C23").s().p("AgrBfIAAi9IAeAAIAABIIANAAQAKAAAJACQAIADAGAGQAFAHADAHQADAJAAALIAAAZQAAALgDAJQgDAIgFAHQgGAFgIAEQgJACgKABgAgNBDIANAAQAHAAAEgDQADgFAAgJIAAgcQAAgKgDgFQgEgDgHAAIgNAAg");
	this.shape.setTransform(33.4,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E29C23").s().p("AgrBfIAAi9IArAAQALAAAIADQAJAEAFAFQAFAHADAIQADAJAAALIAAAZQAAALgDAJQgDAHgFAHQgFAGgJADQgIACgLAAIgOAAIAABIgAgOgDIAOAAQAHAAADgDQAEgFAAgKIAAgcQAAgJgEgFQgDgEgHAAIgOAAg");
	this.shape_1.setTransform(23.3,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E29C23").s().p("AgtBfIAAi9IBTAAIAAAbIg1AAIAAAxIAQAAQALAAAJADQAIADAFAGQAGAGADAHQADAJAAAMIAAAUQAAALgDAJQgDAIgGAHQgFAFgIAEQgJACgLABgAgPBDIAQAAQAIAAADgDQAEgFAAgJIAAgZQAAgJgEgEQgDgEgIAAIgQAAg");
	this.shape_2.setTransform(12.3,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E29C23").s().p("AAWBfIgFgjIgjAAIgGAjIgbAAIAei9IAqAAIAfC9gAANAiIgNheIgPBeIAcAAg");
	this.shape_3.setTransform(1.1,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E29C23").s().p("AASBfIgchMIgJASIAAA6IgdAAIAAi9IAdAAIAABTIAnhTIAdAAIgpBUIApBpg");
	this.shape_4.setTransform(-9.5,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E29C23").s().p("AgoBfIAAi9IBQAAIAAAbIgyAAIAAA1IAnAAIAAAaIgnAAIAAA3IAyAAIAAAcg");
	this.shape_5.setTransform(-20.3,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E29C23").s().p("AAfBrIAAgZIg+AAIAAAZIgdAAIAAg0IAMAAQADgEACgGQACgGAAgIIAHiJIBSAAIAAChIANAAIAAA0gAgMAeQAAAKgDAGQgBAGgEADIAmAAIAAiGIgZAAg");
	this.shape_6.setTransform(-32.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-40.6,-15.5,81.3,31), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E29C23").s().p("AgrBfIAAi9IAdAAIAABIIAOAAQAKAAAJACQAIADAGAGQAFAHADAHQADAJAAALIAAAZQAAALgDAJQgDAIgFAHQgGAFgIAEQgJACgKABgAgOBDIAOAAQAHAAAEgDQADgFAAgJIAAgcQAAgKgDgFQgEgDgHAAIgOAAg");
	this.shape.setTransform(13.7,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E29C23").s().p("AgSBeQgJgDgFgHQgGgGgDgJQgCgIAAgMIAAhhQAAgMACgIQADgJAGgHQAFgFAJgEQAIgCAKAAQALAAAIACQAIAEAGAFQAFAHADAJQADAIAAAMIAAASIgcAAIAAgUQAAgKgEgFQgEgDgHAAQgHAAgEADQgEAFAAAKIAABlQAAAKAEAEQAEAFAHgBQAHABAEgFQAEgEAAgKIAAgbIAcAAIAAAZQAAAMgDAIQgDAJgFAGQgGAHgIADQgIACgLAAQgKAAgIgCg");
	this.shape_1.setTransform(3.1,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E29C23").s().p("AgnBfIAAi9IBQAAIAAAbIgzAAIAAA1IAoAAIAAAaIgoAAIAAA3IAzAAIAAAcg");
	this.shape_2.setTransform(-6.9,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E29C23").s().p("AgtBfIAAi9IAtAAQAKABAJACQAIADAFAFQAGAGACAIQADAIAAALIAAAHQAAAPgFAIQgEAKgKAFQAGACAEADQAEAEADAFQAFAKAAAPIAAAQQAAALgDAIQgDAIgGAGQgFAFgJAEQgIACgLABgAgPBDIAQAAQAIAAADgDQAEgFAAgKIAAgRQAAgNgEgFQgFgEgJAAIgNAAgAgPgQIALAAQAIAAAEgFQAFgFAAgLIAAgKQAAgKgDgFQgEgEgHgBIgOAAg");
	this.shape_3.setTransform(-17.4,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-25,-15.5,50.2,31), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E29C23").s().p("AAVBfIAAiFIgNAuIgYBXIgeAAIAAi9IAaAAIAAB3IALgoIAYhPIAgAAIAAC9g");
	this.shape.setTransform(28.6,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E29C23").s().p("AATBfIgdhMIgJASIAAA6IgdAAIAAi9IAdAAIAABTIAnhTIAdAAIgpBUIApBpg");
	this.shape_1.setTransform(17.7,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E29C23").s().p("AAfBrIAAgZIg+AAIAAAZIgdAAIAAg0IAMAAQADgEACgGQACgGAAgIIAHiJIBSAAIAAChIANAAIAAA0gAgMAeQAAAKgDAGQgBAGgEADIAmAAIAAiGIgZAAg");
	this.shape_2.setTransform(5,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E29C23").s().p("AAVBfIAAiFIgNAuIgXBXIgfAAIAAi9IAaAAIAAB3IALgoIAXhPIAhAAIAAC9g");
	this.shape_3.setTransform(-7.2,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E29C23").s().p("AATBfIgchMIgJASIAAA6IgeAAIAAi9IAeAAIAABTIAlhTIAeAAIgpBUIApBpg");
	this.shape_4.setTransform(-18.1,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E29C23").s().p("AgSBeQgJgDgFgHQgGgGgDgJQgCgIAAgMIAAhhQAAgMACgIQADgJAGgHQAFgFAJgEQAIgCAKAAQALAAAIACQAIAEAGAFQAFAHADAJQADAIAAAMIAAASIgcAAIAAgUQAAgKgEgFQgEgDgHAAQgHAAgEADQgEAFAAAKIAABlQAAAKAEAEQAEAFAHgBQAHABAEgFQAEgEAAgKIAAgbIAcAAIAAAZQAAAMgDAIQgDAJgFAGQgGAHgIADQgIACgLAAQgKAAgIgCg");
	this.shape_5.setTransform(-29.3,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-36.5,-15.5,73.1,31), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FA2A4").s().p("AhECVQgMgDgJgHIAQgvIANAFIAMABQAUAAAGgRIADgJIhmjgIBFAAIA7CcIAEAAIAuicIBBAAIheD0QgFAOgHALQgHAMgJAIQgHAIgLAEQgLAEgNAAQgOAAgMgEg");
	this.shape.setTransform(1.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-13.6,-23.8,27.3,47.8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FA2A4").s().p("AhABvQgPgEgKgKQgLgJgFgOQgFgOgBgSQABgRAGgOQAHgNANgJQALgIAUgGQAUgEAUAAIAWACIAUAEIAAgHQAAgOgJgJQgKgIgSAAQgSAAgRAFQgRAEgRAIIgWgtQAXgPAVgFQAXgGAYAAQAYAAATAHQARAHAMAMQANANAEARQAGAQgBAWIAABDQAAAIAEAEQADAFAGAAIAHgBIAFAxIgMADIgPACQgRAAgMgIQgMgJgDgSQgGAJgHAHQgIAGgJAFQgJAEgJACIgXACQgTAAgOgFgAgqAVQgJAHAAALQAAALAIAGQAGAHAQAAQAYAAANgMQANgMAAgPIAAgFQgUgFgVAAQgUAAgKAHg");
	this.shape.setTransform(2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-12.6,-23.8,25.3,47.8), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FA2A4").s().p("AheByIAAjeIAvAAIAEAkQAFgKAHgHQAHgHAJgGQAJgFAKgDQALgCAOAAQATgBASAIQARAHAMAMIgiAwQgHgIgNgFQgMgEgNgBQgSAAgNAMQgOAMgGATIAAB/g");
	this.shape.setTransform(2.8,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-11.4,-23.8,22.9,47.8), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FA2A4").s().p("AA/CSIg9hwIgEAAIg8BwIhPAAIBgiXIhYiMIBNAAIA4BoIAEAAIA2hoIBMAAIhYCQIBgCTg");
	this.shape.setTransform(1.9,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-15.7,-23.8,31.4,47.8), null);


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


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AANAaIAAgnIgYAnIgLAAIAAgzIAJAAIAAAnIABAAIAYgnIALAAIAAAzg");
	this.shape.setTransform(60.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AANAaIAAgnIgYAnIgLAAIAAgzIAJAAIAAAnIABAAIAYgnIALAAIAAAzg");
	this.shape_1.setTransform(54.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAQAhIAAgNIgoAAIAAg0IAKAAIAAAsIAXAAIAAgsIAJAAIAAAsIAGAAIAAAVg");
	this.shape_2.setTransform(48.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgNAbIgGgDIgDgFQgCgDAAgDQAAgEACgDIADgFIAFgCIAGgCIAOgBIADgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgEgDgCQgDgCgFAAQgGAAgDACQgCADgBAFIgIAAQAAgFACgDQABgEADgCQADgCAEgBIAIgBIAHABQADABADACQADABABADQACADAAAEIAAAdIABACIACABIABAAIACAAIAAAGIgCABIgDAAIgEAAIgDgCIgCgCIAAgEIgEAEIgEACIgEACIgHABIgFgBgAAIABIgEABIgEAAIgDABIgFABIgDACIgDACIgBADIABAEIACADIADACIAEABIADgBIACgBIAEgBIADgDIACgDIABgEIAAgIg");
	this.shape_3.setTransform(43,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgIAbIgGgEIgFgGIgCgHIAJAAIACAFIADADIAEACIADAAQAHAAADgCQADgDAAgEIAAgDIgDgDIgDgBIgGgBIgBAAIgBAAIgBAAIgBABIAAgHIADAAIAEAAIADgCIADgCIABgEIgBgDIgCgCIgCgCIgFgBIgDABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgDADIgCAFIgJAAIACgGIADgFIAEgDIADgCIAFgBIADgBIAHABIAGADQADACABADQACACAAAEIgBAEIgCAEIgCACIgCABIAAABIACAAIADACIADADIABAGQAAAEgCADQgCAEgDACIgHADIgIABIgIgBg");
	this.shape_4.setTransform(37.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AANAaIAAgnIgYAnIgLAAIAAgzIAJAAIAAAnIABAAIAYgnIALAAIAAAzg");
	this.shape_5.setTransform(32.3,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgWAaIgCAAIAAgJIADABIACAAIACgCIACgCIABgFIABgHIABgJIAAgTIAlAAIAAA0IgJAAIAAgsIgTAAIgBAMIgBAPQgBAHgDADQgCAFgCABQgDACgEAAg");
	this.shape_6.setTransform(26.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AANAaIAAgnIgYAnIgLAAIAAgzIAJAAIAAAnIABAAIAYgnIALAAIAAAzg");
	this.shape_7.setTransform(20.8,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgDAaIAAgrIgSAAIAAgIIAsAAIAAAIIgSAAIAAArg");
	this.shape_8.setTransform(15.4,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgNAlIgDAAIgCgBIAAgIIACABIADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgIIgTg1IAKAAIANAqIAOgqIAKAAIgUA2IgDAHIgCAFIgCAEIgCACIgEABg");
	this.shape_9.setTransform(10.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgIAaQgFgCgDgDQgDgEgCgFQgCgFAAgHIABgIIADgHIAEgFIAFgEIAFgCIAFgBQAFAAAFACIAHAFQADADACAFQACAFAAAHIAAADIglAAIABAHIADAFIAEAEIAFABIAGgBIAEgCIADgEIACgDIAIAAIgCAGIgFAGIgHAEQgEACgEAAQgFAAgEgCgAAPgDIgBgHIgDgFIgFgDIgGgBIgEABIgFAEIgDAFQgBADAAADIAcAAIAAAAg");
	this.shape_10.setTransform(2.3,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AASAaIAAgpIgOApIgHAAIgOgpIAAApIgJAAIAAgzIANAAIANAqIAOgqIANAAIAAAzg");
	this.shape_11.setTransform(-3.8,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AASAaIAAgpIgOApIgHAAIgOgpIAAApIgJAAIAAgzIANAAIANAqIAOgqIANAAIAAAzg");
	this.shape_12.setTransform(-10.4,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgNAbIgGgDIgDgFQgCgDAAgDQAAgEACgDIADgFIAFgCIAGgCIAOgBIADgCQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgEgDgCQgDgCgFAAQgGAAgDACQgCADgBAFIgIAAQAAgFACgDQABgEADgCQADgCAEgBIAIgBIAHABQADABADACQADABABADQACADAAAEIAAAdIABACIACABIABAAIACAAIAAAGIgCABIgDAAIgEAAIgDgCIgCgCIAAgEIgEAEIgEACIgEACIgHABIgFgBgAAIABIgEABIgEAAIgDABIgFABIgDACIgDACIgBADIABAEIACADIADACIAEABIADgBIACgBIAEgBIADgDIACgDIABgEIAAgIg");
	this.shape_13.setTransform(-16.4,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgWAlIAAhIIAJAAIAAAIIAAAAIACgEIAEgDIAEgBIAFgBQAEAAAEABIAGAFIAFAIQACAFAAAHQAAAIgCAEQgBAGgDAEQgDADgEACQgEABgGAAIgEAAIgDgCIgEgDIgCgCIAAAAIAAAagAgFgbIgFAEIgDAHIAAAIIAAAIIADAFQACADADABQACACADAAQADAAADgCQADgBACgDIACgFIABgIIgBgIIgCgHIgFgEQgDgBgDAAQgDAAgCABg");
	this.shape_14.setTransform(-21.9,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgPAaIAAgzIAfAAIAAAIIgWAAIAAArg");
	this.shape_15.setTransform(-26.6,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgJAaQgFgCgDgEQgDgDgCgFQgBgGAAgGQAAgFABgFQACgGADgDQADgEAFgCQAEgCAFAAQAGAAAEACQAFACADAEQADADACAGQABAFAAAFQAAAGgBAGQgCAFgDADQgDAEgFACQgEACgGAAQgFAAgEgCgAgGgRIgEAEQgCACgBAEIgBAHIABAIIADAGIAEAFQADABADAAQAEAAADgBQADgCABgDIADgGIABgIIgBgHQgBgEgCgCQgBgDgDgBQgDgCgEAAQgDAAgDACg");
	this.shape_16.setTransform(-31.6,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgWAlIAAhIIAJAAIAAAIIAAAAIADgEIADgDIAEgBIAEgBQAFAAAEABIAHAFIAEAIQACAFAAAHQAAAIgCAEQgBAGgDAEQgDADgEACQgEABgGAAIgEAAIgDgCIgEgDIgCgCIAAAAIAAAagAgGgbIgDAEIgEAHIAAAIIAAAIIAEAFQABADACABQADACADAAQAEAAADgCQACgBABgDIADgFIABgIIgBgIIgDgHIgDgEQgDgBgEAAQgDAAgDABg");
	this.shape_17.setTransform(-37,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAMAaIAAgrIgXAAIAAArIgJAAIAAgzIApAAIAAAzg");
	this.shape_18.setTransform(-42.7,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgJAaQgFgCgDgEQgDgDgCgFQgBgGAAgGQAAgFABgFQACgGADgDQADgEAFgCQAEgCAFAAQAGAAAEACQAFACADAEQADADACAGQABAFAAAFQAAAGgBAGQgCAFgDADQgDAEgFACQgEACgGAAQgFAAgEgCgAgGgRIgEAEQgCACgBAEIgBAHIABAIIADAGIAEAFQADABADAAQAEAAADgBQADgCABgDIADgGIABgIIgBgHQgBgEgCgCQgBgDgDgBQgDgCgEAAQgDAAgDACg");
	this.shape_19.setTransform(-51,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAMAaIAAgrIgXAAIAAArIgJAAIAAgzIApAAIAAAzg");
	this.shape_20.setTransform(-56.6,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AAAAFIgFAJIgFgDIAGgJIgKgDIACgFIAKAEIAAgLIAFAAIAAAKIAKgDIACAFIgKADIAGAJIgFADg");
	this.shape_21.setTransform(-61.3,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-65.2,-7,130.4,14), null);


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

}).prototype = getMCSymbolPrototype(lib.wheel_in, new cjs.Rectangle(-292,-150,576.1,204), null);


(lib.t555 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(62,2.3);

	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,2.3);

	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-61,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t555, new cjs.Rectangle(-97.5,-13.2,200.2,31), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(39.1,0);

	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.2,0);

	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-77,-12.5,145.6,25), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0,1,1,0,0,0,-33,0);

	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,0,1,1,0,0,0,-10.8,0);

	this.instance_2 = new lib.Symbol25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.1,0,1,1,0,0,0,11.5,0);

	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.2,0.7,1,1,0,0,0,32.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-48,-23.8,94.3,47.8), null);


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


(lib.elky_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjVPeQgYgYAAgiQAAgiAYgYQAYgXAiAAQAiAAAXAXQAYAYAAAiQAAAigYAYQgXAYgiAAQgiAAgYgYgAAyNeQgUgVAAgdQAAgeAUgVQAVgUAeAAQAdAAAVAUQAVAVAAAeQAAAdgVAVQgVAVgdAAQgeAAgVgVgAnZMsQgUgVAAgdQAAgeAUgVQAVgUAeAAQAdAAAVAUQAVAVAAAeQAAAdgVAVQgVAVgdAAQgeAAgVgVgAjBMwQgNgBgHgGQgHgHgEgMIgGgVIgEgLQAAgGAFgDQAFgDAFADQAEACADAJQAEAKACALQACAJADACQADACAGABQAJACADAGQABADgBAEQAAAEgEACIgFABIgEgBgAijMRQgEgEAAgIQABgLAPgQIAIgIIAGgFQACgBAHgBQAKAAAHADQAHADABAFQABADgCAEQgCAEgEABQgHACgHgFQgDADgJAHQgIAFgCAGIgBAIQgBAEgDACQgCADgDAAQgDAAgEgEgAAkK5QgFgDgEgIIgGgMQgDgGAAgDQAAgFAEgGQAGgHAIgCQAEAAACACQADADAAAEQABAHgHAEIAIANQAGAGAAAFQABAGgHADIgFABQgDAAgDgCgAB0KQQgGgCAAgGQAAgEACgHQAEgJAEgDIAQgIIAJgGIAHgCQAEAAADAEQACAEgBAEQgBAEgHAFIgTAMQgCAIgEADQgEAEgEAAIgDgBgAA0IyQgDAAgCgDQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAIgCgIQAAgHABgDQADgGAFACIAAgBQAHAAACAGIADANQABAFgEAEQgDACgDAAIgCgBgACOIvQgEgDgBgEQgDgIAHgGQADgDACABIACAAIAAgCIADABIgFgFIgHgEQgFgEgBgGQgBgGAFgEQADgDAEAAQAEAAACADIAFAFIAGAEIAEAHIAEACIAAAAIAFgGIAJgLIAFgKQAEgFAHABQAHABABAGQABAFgFAIIgHAKIgOASIgEAGQgCACgCAAQgBAEgDABQgDADgGAAIgHAAIgEACIgDABIgFgBgACsG4IgYgbIgbgpQgHgKgNgPIgUgYQgKgMgRgbQgUghgCgTQgCgQAGgPQAHgQAMgKQANgLAQgEQAQgEAQADQAiAHASAcQAIAJgBAJQAAAHgGAFQgGAGgIgBQgGgBgHgGIgMgKQgRgQgTAFQgKACgHAIQgHAJACAJQABAFAGALQAaArAQAUIAUAWQALANAGALQAIARADADIANAOIANARIALALQAHAHABAGQADAHgEAIQgDAHgHACIgGABQgMAAgNgOgAh7GxQgHAAgGgEQgKgEgEgEIgDgDIgFAAQgLgBgJgIQgIgIAAgKQACgOgDgHIgFgHQgKgMAIgQQAIgOAQgCQAKgCAHAEQAJAEABAKIgBANIACAIIgBAFQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIADADQADACAIACQAHABADADQADACAHAKIAGAHQAKAMgIANQgGANgNAAIgDgBgAhLErQgLgDgGgMQgFgJABgNQABgPAIgHQAJgHANABQALAAAGAEQAIAGADARQADAOgEAIQgDAIgMAFQgIAEgHAAIgHgBgAgCChIgGgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgIAAQgKgBgDABIgFACQgHADgEgIQgCgCACgGQAEgIAJgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAGABQgJgLgDgGQgCgHABgEQADgGAFAAQABABABAAQAAAAABAAQAAAAAAAAQgBAAAAgBQAGABADAEIAFAKQABAEAFAEIAKgKIAEgIQACgDAEAAQAEAAADACQACACABAFQABADgBAFQgBADgDADIgGAGIgJAKIAFABQAHABADAGIABAFQAAADgCADQgCACgDABIgLgDgAjHAoQgEgDAAgFQgCgKALgEIAKgDIAHgDIADAAIgDgDIgDgFIgEgFQgCgEADgEQACgEAFgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAIADADADIAFAGIAEACIACgCIAJgKQAEgDADAAIABABIABgCQAIABACAFQADAFgFAGIgJAIIgEAGIgCACQgBAFgEABIgGABQAAADgDACQgDADgFAAIgJABQgFABgGAEIgGAEIgDAAIgGgBgAArABQgXgWAAgiQAAghAXgYQAYgYAiAAQAhAAAYAYQAYAYAAAhQAAAigYAWQgYAYghAAQgiAAgYgYgADthSQgXgXAAgiQAAghAXgYQAYgYAiAAQAhAAAYAYQAYAYAAAhQAAAigYAXQgYAYghAAQgiAAgYgYgADwnQQgFgFAAgIQAAgGADgFIgGABQgQAAgLgLQgKgLAAgPQAAgQAKgLQALgKAQAAQAPAAALAKQAKALABAOIADgFQAKgJANAAQANAAAJAJQAJAKAAANQAAANgJAJQgJAJgNAAQgNAAgKgJQgIgIAAgLIgGAHIgEADQAHABAEAEQAGAGAAAHQAAAIgGAFQgFAFgHAAQgIAAgFgFgADiprQgJgCAAgIQABgEAFgEIAKgDIAVgFIAGAAIgJgOIgHgFQgEgDgBgEQgBgDACgEQACgDAEgBQAHgDAHAGQAEADAFAIIAJAPIADAGQABAHgFACQABAEgCADQgBAFgEACIgJAAQgHgBgPAFIgLABIgDAAgAFxqyQgWgVAAgfQAAgeAWgWQAVgVAfAAQAeAAAWAVQAVAWAAAeQAAAfgVAVQgWAWgeAAQgfAAgVgWgAEgutQgEgFABgGIADgHQACgDAGgDIALgFIgBgCIgIgNIgDgEIgIgJQgDgGAEgFQAGgGAGADQAEABADAFIAHAJQADAHADADIACADIAAgCQAAgIACgFQACgEACgCIAIgEQAGgCAEACQAGACAAAGQABAGgFADIgFADIgBAFIAAALQAAAKgDAEQgDADgFgBIgBABIgNAEQgIADgEAEIgGAGIgEABQgDAAgEgDg");
	mask.setTransform(8.1,-15.2);

	// Layer 2
	this.blick = new lib.blick_wrap();
	this.blick.parent = this;
	this.blick.setTransform(-133,29,1,1,-16.8,0,0,-0.1,-0.1);

	var maskedShapeInstanceList = [this.blick];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Layer 1
	this.instance = new lib.elky();
	this.instance.parent = this;
	this.instance.setTransform(-72,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.elky_1, new cjs.Rectangle(-72,-128.5,144,257), null);


(lib.car = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AokK5QqNgXACACQhZgpgWgpQgLgWgMgaIgFgKIANjTQAOjdAJgWQAbhFAUgvQAlhbAPgFQALgEA4gfQAygcACACQABACBLgpQBKgpABACQACACAdgNQAhgQAKgCQALgCBdhbQBbhYABABQACACBZhDQBZhEABACIA1gdQA6ggAYAAQAVAACRgRQCRgQAMAAIDPgKQC8gJACADQABABBvAIQBzAHAKAEQAKAEBiAKQBtAPA6AYQA8AaB7CeQA9BQAzBMIBJBzQADAEAuCPQACACARBeIASBgQACACgEBSQgDBQABADQgjhhACAEQgOhCgOAIQgKAGgRAdQgQAbACAEQABACgsCNQgsCOABACQABACgiAaQgiAbABACQACACiVAZQiQAXgEADQAAgEgRhFIgYhbIgxh2QADAEgfhOIgyhiQgNgKgUgFQgpgIgYArIg2BgQgZAtABACQACACgaBUQgaBUABACQACACgaBMQgaBMABACQACACgjAPQgiAOABACQACADg4ALQg7AKgeAAIqrgYgAU3E7IAAABIAAgBg");
	mask.setTransform(-12.1,-38.1);

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
	this.wh2 = new lib.wheel_in();
	this.wh2.parent = this;
	this.wh2.setTransform(115,13.9,0.169,0.831);

	this.wh = new lib.wheel_in();
	this.wh.parent = this;
	this.wh.setTransform(42.1,24.5,0.662,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wh},{t:this.wh2}]}).wait(1));

	// Layer 1
	this.instance = new lib.xray();
	this.instance.parent = this;
	this.instance.setTransform(-151,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(-151.1,-126,381.1,204.5), null);


// stage content:
(lib._336x280_xray_ny = function(mode,startPosition,loop) {
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
		
		var t2 = g(this.t2);
		var t3 = g(this.t3);
		var t4 = g(this.t4);
		
		var blick = g(this.car.blick);
		var blick2 = g(this.elky.blick);
		
		var tl = new TimelineMax({repeat: -1,  onRepeat: function(){
			repeated += 1;
		}});
		
		tl
			.to(this.over, .5, {alpha: 0})
			.from(this.car, 1.2, {scaleX: 0, scaleY:0, x:'+=200', ease: Expo.easeOut}, 'car')
			.from([this.car.wh.inner, this.car.wh2.inner], 1.2, {rotation: '+=360', ease: Expo.easeOut}, 'car')
			
			
			.from(this.t1, .8, {x:'-=150', alpha: 0, ease: Expo.easeOut}, '-=.5')
			.staggerFrom(t2, .6, {scaleX: '+=1', scaleY:'+=1', alpha: 0, ease: Back.easeOut},.1, '-=.5')
			.from(this.logo, .5, {alpha:0}, '-=.3')
			.from(this.elky, 1.6, {x: '+=100', skewX: 35, ease: Elastic.easeOut.config(.9, .6)}, '-=1')
			.add('blick', '-=.7')
			.fromTo(blick, 1.6, {x: 0, alpha: .7}, {x: 400, alpha: 1, ease: Sine.easeInOut}, 'blick')
			.fromTo(blick2, 1.6, {x: 0, alpha: .7}, {x: 300, alpha: 1, ease: Sine.easeInOut}, 'blick+=.3')
			.staggerFrom(t3, .7, {y:'+=10', alpha: 0, ease: Back.easeOut}, .4, 'blick')
			.from(this.legal, .5, {alpha: 0, ease: Expo.easeInOut}, '-=.7')
			.staggerFrom(t4, .5, {y:'+=10', alpha: 0, ease: Back.easeOut}, .1, '+=.3')
			
			.fromTo(blick, 1.6, {x: 0, alpha: .7}, {x: 400, alpha: 1, ease: Sine.easeInOut}, 'blick2')
			.fromTo(blick2, 1.6, {x: 0, alpha: .7}, {x: 300, alpha: 1, ease: Sine.easeInOut}, 'blick2+=.3')
			.to(this.elky, .5, { skewX: 3, ease:Sine.easeIn}, 'blick2')
			.to(this.elky, 1.3, { skewX: 0, ease: Elastic.easeOut.config(.9, .6)}, 'blick2+=.5')
			
			.from(this.logo.line, .6, {x: -112, y: 33, ease: Expo.easeOut}, '-=.8')
			.from(this.logo.n1, .6, {scaleX: '+=1', scaleY:'+=1', alpha: 0, ease: Expo.easeOut, onComplete: check}, '-=.3')
			.add('car2', '+=1')
			.to(this.car, .7, {scaleX: "+=.3", scaleY:'+=.2', x:'-=200', ease: Expo.easeIn}, 'car2')
			.to([this.car.wh.inner, this.car.wh2.inner], .7, {rotation: '-=360', ease: Expo.easeIn}, 'car2')
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

	// Layer 3
	this.elky = new lib.elky_1();
	this.elky.parent = this;
	this.elky.setTransform(336,264.5,1,1,0,0,0,42,114);

	this.timeline.addTween(cjs.Tween.get(this.elky).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(280.2,24.2,0.628,0.628,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t5
	this.t3 = new lib.t555();
	this.t3.parent = this;
	this.t3.setTransform(99.8,53.9,0.888,0.888,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t3
	this.t4 = new lib.t3();
	this.t4.parent = this;
	this.t4.setTransform(81.2,81.5,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t2
	this.legal = new lib.legal();
	this.legal.parent = this;
	this.legal.setTransform(168,270.4);

	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(113.9,26.5,0.631,0.661,0,17.6,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.legal}]}).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(34.6,27,0.631,0.631,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// car
	this.car = new lib.car();
	this.car.parent = this;
	this.car.setTransform(295.2,188.2,1,1,0,0,0,124.5,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,9.4,0,-14.2).s().p("A6PDCIAAmDMA0fAAAIAAGDg");
	this.shape.setTransform(168,260.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,239.8).s().p("A6LaLQq2q2AAvVQAAvUK2q3QK2q2PVAAQPWAAK2K2QK2K3AAPUQAAPVq2K2Qq2K3vWAAQvVAAq2q3g");
	this.shape_1.setTransform(-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-96.9,638.6,713.7);
// library properties:
lib.properties = {
	id: 'ECE7BC966F244EB1A1BD09AB5D940EB9',
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"back.jpg?1512040260186", id:"back"},
		{src:"banner_atlas_P_.png?1512040260122", id:"banner_atlas_P_"}
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