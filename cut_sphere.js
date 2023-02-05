var fb = console.log;


var app = {
	data: {},
	graph: {},
};


app.init = function() {

	app.data.pieces = 5;
	app.data.diameter = 20;

	app.graph.init();

	app.process();

};


app.graph.init = function() {

	app.graph.canvas = document.createElement('canvas');
	document.body.appendChild(app.graph.canvas);
	app.graph.canvas.position = 'absolute';
	app.graph.canvas.width = app.graph.canvas.clientWidth;
	app.graph.canvas.height = app.graph.canvas.clientHeight;

	app.graph.ctx = app.graph.canvas.getContext('2d');
	app.graph.ctx.fillStyle = "white";
	app.graph.ctx.strokeStyle = "black";
	app.graph.ctx.lineWidth = 1;

	app.graph.reference = Math.min(app.graph.canvas.width, app.graph.canvas.height);
	app.graph.center = { x: (app.graph.canvas.width / 2), y: (app.graph.canvas.height / 2) }; // { x: 400, y: 300 }
	app.graph.radius = (app.graph.reference / 3); // 200
	app.graph.slicesGapMax = app.graph.reference / 15; // 40
	app.graph.slicesLineDash = [(app.graph.reference / 120), (app.graph.reference / 60)]; // [5, 10]
	app.graph.slicesRadiusFactorMax = 0.06; // 0.05 // 0.00 to 0.10
	app.graph.slicesDottedLineWidth = 0.1; // 0.4
	app.graph.fontSize = parseInt(app.graph.reference * 0.025);
	app.graph.flagAnimation = true;
//app.graph.flagAnimation = false;
	app.graph.flag3d = true;
//app.graph.flag3d = false;
	app.graph.currentAnimation = null;

	app.graph.resetAnimationValues();

	app.graph.refreshControls();

	$("#controls input").on("change", e => {
		app.graph.stopAnimation();
		if (!e || !e.target || !$(e.target)) return;
		let elem = $(e.target);
		app.graph.readControls(elem);
		app.process();
	});

};


app.process = function() {

	app.start();

	if (app.graph.flagAnimation) {
		app.graph.startAnimation();
	} else {
		app.graph.draw();
	}

};


app.graph.startAnimation = function() {

	new Animation({

		steps: (app.cuts.length + 1),
		duration: 1000,
		funcDraw: app.graph.draw,
		funcBefore: (step, anim) => {
			app.graph.currentAnimation = anim;
			app.graph.slicesGap = 0;
			app.graph.slicesRadiusFactor = 0;
			app.graph.limitToCut = -1;
			app.graph.flagDrawCircle = true;
		},
		funcFrame: (step) => {
			app.graph.limitToCut = (step - 1);
		},

	}).start()
	.then(new Animation({

		steps: 200,
		duration: 1000,
		funcDraw: app.graph.draw,
		funcBefore: (step, anim) => {
			app.graph.currentAnimation = anim;
		},
		funcFrame: (step, anim) => {
			app.graph.slicesGap = ((step * app.graph.slicesGapMax) / anim.steps);
			app.graph.slicesRadiusFactor = ((step < (anim.steps * .6)) ? 0 : ((step - (anim.steps * .6)) / (anim.steps * .4))) * (app.graph.flag3d ? app.graph.slicesRadiusFactorMax : 0);
			app.graph.limitToCut = false;
			app.graph.flagDrawCircle = false;
		},

	}).start)
	.then(() => {
		app.graph.resetAnimationValues();
	});

};


app.graph.stopAnimation = function() {
	if (app.graph.currentAnimation) app.graph.currentAnimation.stop();
	app.graph.resetAnimationValues();
};


app.graph.resetAnimationValues = function() {
	app.graph.slicesGap = app.graph.slicesGapMax;
	app.graph.slicesRadiusFactor = (app.graph.flag3d ? app.graph.slicesRadiusFactorMax : 0);
	app.graph.limitToCut = false;
	app.graph.flagDrawCircle = false;
};


app.graph.refreshControls = function() {
	$("#controls input.pieces").val(app.data.pieces);
	$("#controls input.diameter").val(app.data.diameter);
	$("#controls input.animation").prop('checked', app.graph.flagAnimation);
	$("#controls input.3d").prop('checked', app.graph.flag3d);
};

app.graph.readControls = function(elem) {
	if (elem.hasClass('pieces')) app.data.pieces = parseInt(elem.val());
	if (elem.hasClass('diameter')) app.data.diameter = parseInt(elem.val());
	if (elem.hasClass('animation')) app.graph.flagAnimation = elem.prop('checked');
	if (elem.hasClass('3d')) app.graph.flag3d = elem.prop('checked');

	if (app.data.pieces < 1) app.data.pieces = 1;
	if (app.data.pieces > 100) app.data.pieces = 100;
	if (app.data.diameter < 1) app.data.diameter = 1;
	if (app.data.diameter > 10000) app.data.diameter = 10000;
	app.graph.slicesRadiusFactor = (app.graph.flag3d ? app.graph.slicesRadiusFactorMax : 0);

	app.graph.refreshControls();
};


app.start = function() {
	fb("---------- cut_sphere start ----------");

	app.cuts = [];

	fb("pieces:", app.data.pieces);
	fb("diameter:", app.data.diameter);
	app.data.radius = app.data.diameter / 2;
	fb("radius:", app.data.radius);

	if (app.data.pieces < 2) {
		fb("DONE");
		return;
	}

	let sphereVolume = round_two_digit(sphere_volume(app.data.radius));
	fb("volume of sphere:", sphereVolume);

	let desiredVolume = (sphereVolume / app.data.pieces);
	fb("volume of pieces:", round_two_digit(desiredVolume));

	let cuttedSoFar = 0;

	for (var cut = 0; cut < (app.data.pieces - 1); cut++) {
		fb("----- cut", cut);

		let capHeight = 0, bestDelta = Number.MAX_SAFE_INTEGER, delta = 0;
		for (var h = 0; h <= app.data.diameter; h += 0.001) {
			if ((delta = Math.abs(desiredVolume - (spherical_cap_volume(app.data.radius, h) - cuttedSoFar))) < bestDelta) capHeight = h, bestDelta = delta;
		}

		fb("cap height:", round_two_digit(capHeight));
		app.cuts.push(round_two_digit(capHeight));

		cuttedSoFar += desiredVolume;
	}

	fb("cuts:", app.cuts);
}


app.graph.draw = function() {
	//fb("########## draw ##########");

	app.graph.ctx.clearRect(0, 0, app.graph.canvas.width, app.graph.canvas.height);
	app.graph.ctx.fillRect(0, 0, app.graph.canvas.width, app.graph.canvas.height);
	//app.graph.drawCircle(app.graph.center, app.graph.radius, { color: "gray" });
	if (app.graph.flagDrawCircle) app.graph.drawCircle(app.graph.center, app.graph.radius);

	app.graph.factor = app.graph.radius / app.data.radius;
	//fb("factor", round_two_digit(app.graph.factor));

	if (!app.cuts.length) {
		app.graph.drawCircle(app.graph.center, app.graph.radius);
		return;
	}
	if (app.graph.limitToCut === -1) return;

	let shiftX = (Math.max((app.data.pieces - 1), 0) * app.graph.slicesGap / 2), lastHeight = 0, lastAngle = 0, lastCapRadius = 0, pointOnCircle = null;
	let lastSliceStartX = (app.graph.center.x + app.graph.radius + shiftX), cutCenterX = 0, sliceCenterX = 0;

	for (var i = 0; i < app.cuts.length; i++) {
		//fb("---", i, app.cuts[i]);

		let height = app.cuts[i], cap_radius = spherical_cap_radius(app.data.radius, height);
		//fb("cap_radius", round_two_digit(cap_radius));

		let angle = Math.asin(cap_radius / app.data.radius);
		if (height > app.data.radius) angle = Math.PI - angle;
		//fb("angle", round_two_digit(angle));

		if (i == 0) {
			app.graph.drawCircle(app.graph.pointAdd(app.graph.pointCopy(app.graph.center), { x: shiftX }), app.graph.radius, { start: -angle, stop: angle, closePath: false });
		} else {
			pointOnCircle = app.graph.getPointOnCircle(app.graph.center, app.graph.radius, -lastAngle);
			if (app.graph.slicesRadiusFactor && app.graph.slicesDottedLineWidth) app.graph.drawEllipse((pointOnCircle.x + shiftX), app.graph.center.y, (app.graph.radius * app.graph.slicesRadiusFactor), lastCapRadius * app.graph.factor, { start: Math.PI / 2, stop: -Math.PI / 2, closePath: false, lineDash: app.graph.slicesLineDash, lineWidth: app.graph.slicesDottedLineWidth });
			app.graph.drawEllipse((pointOnCircle.x + shiftX), app.graph.center.y, (app.graph.radius * app.graph.slicesRadiusFactor), lastCapRadius * app.graph.factor, { start: -Math.PI / 2, stop: Math.PI / 2, closePath: false });
			app.graph.drawCircle(app.graph.pointAdd(app.graph.pointCopy(app.graph.center), { x: shiftX }), app.graph.radius, { start: -angle, stop: -lastAngle, closePath: false });
			app.graph.drawCircle(app.graph.pointAdd(app.graph.pointCopy(app.graph.center), { x: shiftX }), app.graph.radius, { start: lastAngle, stop: angle, closePath: false });
		}

		pointOnCircle = app.graph.getPointOnCircle(app.graph.center, app.graph.radius, -angle);
		app.graph.drawEllipse((pointOnCircle.x + shiftX), app.graph.center.y, (app.graph.radius * app.graph.slicesRadiusFactor), cap_radius * app.graph.factor);

		if (i == (app.cuts.length - 1)) {
			if (app.graph.slicesRadiusFactor && app.graph.slicesDottedLineWidth) app.graph.drawEllipse((pointOnCircle.x + shiftX - app.graph.slicesGap), app.graph.center.y, (app.graph.radius * app.graph.slicesRadiusFactor), cap_radius * app.graph.factor, { start: Math.PI / 2, stop: -Math.PI / 2, closePath: false, lineDash: app.graph.slicesLineDash, lineWidth: app.graph.slicesDottedLineWidth });
			app.graph.drawEllipse((pointOnCircle.x + shiftX - app.graph.slicesGap), app.graph.center.y, (app.graph.radius * app.graph.slicesRadiusFactor), cap_radius * app.graph.factor, { start: -Math.PI / 2, stop: Math.PI / 2, closePath: false });
			app.graph.drawCircle(app.graph.pointAdd(app.graph.pointCopy(app.graph.center), { x: (shiftX - app.graph.slicesGap) }), app.graph.radius, { start: angle, stop: -angle, closePath: false });
		}

		cutCenterX = (app.graph.center.x + app.graph.radius + shiftX - (app.graph.slicesGap / 2) - height * app.graph.factor);
		sliceCenterX = (lastSliceStartX + (app.graph.center.x + app.graph.radius + shiftX - height * app.graph.factor)) / 2;
		//app.graph.drawPoint(cutCenterX, (app.graph.center.y - app.graph.radius * 1.1));
		//app.graph.drawPoint(sliceCenterX, (app.graph.center.y + app.graph.radius * 1.1), { color: "red" });
		let pos = app.graph.drawText(cutCenterX, (app.graph.center.y - app.graph.radius * 1.1), ("@" + app.cuts[app.cuts.length - 1 - i].toFixed(2)), { fontSize: app.graph.fontSize, center: true, fillStyle: "lightgray" })
		app.graph.drawText(pos, ("@" + parseInt(app.cuts[app.cuts.length - 1 - i])), { fontSize: app.graph.fontSize })
		pos = app.graph.drawText(sliceCenterX, (app.graph.center.y + app.graph.radius * 1.1), (round_two_digit(height - lastHeight).toFixed(2)), { fontSize: app.graph.fontSize, center: true, fillStyle: "lightgray" })
		app.graph.drawText(pos, (parseInt(round_two_digit(height - lastHeight))), { fontSize: app.graph.fontSize })
		lastSliceStartX = app.graph.center.x + app.graph.radius + shiftX - app.graph.slicesGap - height * app.graph.factor;

		shiftX -= app.graph.slicesGap;
		lastHeight = height;
		lastAngle = angle;
		lastCapRadius = cap_radius;

		if (app.graph.limitToCut === i) break;
	}

	sliceCenterX = (lastSliceStartX + (app.graph.center.x - app.graph.radius + shiftX)) / 2;
	//app.graph.drawPoint(sliceCenterX, (app.graph.center.y + app.graph.radius * 1.1), { color: "red" });
	let pos = app.graph.drawText(sliceCenterX, (app.graph.center.y + app.graph.radius * 1.1), ((app.data.diameter - lastHeight).toFixed(2)), { fontSize: app.graph.fontSize, center: true, fillStyle: "lightgray" })
	app.graph.drawText(pos, (parseInt((app.data.diameter - lastHeight))), { fontSize: app.graph.fontSize })

};



app.graph.save = function() {
	app.graph.ctx.save();
}

app.graph.restore = function() {
	app.graph.ctx.restore();
}

app.graph.drawLine = function(x1, y1, x2, y2, args) {
	if (typeof (x1) == 'object') args = x2, y2 = y1.y, x2 = y1.x, y1 = x1.y, x1 = x1.x;
	args = args || {};
	app.graph.ctx.save();
	app.graph.ctx.strokeStyle = (args.color || "black");
	if (args.lineWidth) app.graph.ctx.lineWidth = args.lineWidth;
	app.graph.ctx.beginPath();
	app.graph.ctx.moveTo(x1, y1);
	app.graph.ctx.lineTo(x2, y2);
	app.graph.ctx.closePath();
	app.graph.ctx.stroke();
	app.graph.ctx.restore();
}

app.graph.drawCircle = function(x, y, radius, args) {
	if (typeof (x) == 'object') args = radius, radius = y, y = x.y, x = x.x;
	args = args || {};
	app.graph.ctx.save();
	app.graph.ctx.strokeStyle = (args.color || "black");
	if (args.lineWidth) app.graph.ctx.lineWidth = args.lineWidth;
	app.graph.ctx.beginPath();
	app.graph.ctx.arc(x, y, radius, (args.start || 0), (args.stop || (2 * Math.PI)), false);
	if (args.closePath !== false) app.graph.ctx.closePath();
	app.graph.ctx.stroke();
	app.graph.ctx.restore();
}

app.graph.drawEllipse = function(x, y, radiusX, radiusY, args) {
	if (typeof (x) == 'object') args = radiusY, radiusY = radiusX, radiusX = y, y = x.y, x = x.x;
	args = args || {};
	app.graph.ctx.save();
	app.graph.ctx.lineWidth
	app.graph.ctx.strokeStyle = (args.color || "black");
	if (args.lineWidth) app.graph.ctx.lineWidth = args.lineWidth;
	if (args.lineDash) app.graph.ctx.setLineDash(args.lineDash);
	app.graph.ctx.beginPath();
	app.graph.ctx.ellipse(x, y, radiusX, radiusY, (args.rotation || 0), (args.start || 0), (args.stop || (2 * Math.PI)), false);
	if (args.closePath !== false) app.graph.ctx.closePath();
	app.graph.ctx.stroke();
	app.graph.ctx.restore();
}

app.graph.drawPoint = function(x, y, args) {
	if (typeof (x) == 'object') args = y, y = x.y, x = x.x;
	args = args || {};
	app.graph.ctx.save();
	app.graph.ctx.strokeStyle = (args.color || "black");
	if (args.lineWidth) app.graph.ctx.lineWidth = args.lineWidth;
	app.graph.ctx.beginPath();
	app.graph.ctx.arc(x, y, (args.radius || 3), 0, (2 * Math.PI));
	app.graph.ctx.stroke();
	app.graph.ctx.restore();
}

app.graph.drawText = function(x, y, text, args) {
	if (typeof (x) == 'object') args = text, text = y, y = x.y, x = x.x;
	args = args || {};
	app.graph.ctx.save();
	let pos = { x: x, y: y };
	app.graph.ctx.font = (args.font || ((args.fontSize || 48) + "px " + (args.fontFace || "Verdana")));
	if (args.stroke) app.graph.ctx.strokeStyle = (args.strokeStyle || "black");
	app.graph.ctx.fillStyle = (args.fillStyle || (args.stroke ? "white" : "black"));
	if (args.center || args.centerX || args.centerY) {
		let metrics = app.graph.ctx.measureText(text);
		let height = (args.heightOnFont ? (metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) : (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent));
		if (args.center || args.centerX) pos.x -= (metrics.width / 2);
		if (args.center || args.centerY) pos.y += (height / 2);
	}
	app.graph.ctx.fillText(text, pos.x, pos.y);
	if (args.stroke) app.graph.ctx.strokeText(text, pos.x, pos.y);
	app.graph.ctx.restore();
	return pos;
}


app.graph.drawPointOnCircle = function(center, radius, angle, args) {
	app.graph.drawPoint(app.graph.getPointOnCircle(center, radius, angle), args);
}

app.graph.getPointOnCircle = function(center, radius, angle) {
	return { x: (center.x + Math.cos(angle) * radius), y: (center.y + Math.sin(angle) * radius) };
}


app.graph.pointAdd = function(point, pointToAdd) {
	point.x = ((point.x || 0) + (pointToAdd.x || 0));
	point.y = ((point.y || 0) + (pointToAdd.y || 0));
	return point;
}

app.graph.pointCopy = function(point) {
	return { x: point.x, y: point.y };
}

app.graph.pointCombine = function(point, point2, factorX, factorY) {
	factorX = ((typeof (factorX) == "undefined") ? 1 : factorX);
	factorY = ((typeof (factorY) == "undefined") ? 1 : factorY);
	point.x = ((point.x || 0) + ((point2.x || 0) * factorX));
	point.y = ((point.y || 0) + ((point2.y || 0) * factorY));
	return point;
}



let sphere_volume = radius => {
	return 4 / 3 * Math.PI * Math.pow(radius, 3);
}


let spherical_cap_volume = (radius, height) => {
	return ((Math.PI * height * height) / 3) * (3 * radius - height);
}

let spherical_cap_height = (radius, cap_radius) => {
	return (radius - Math.sqrt(radius * radius - cap_radius * cap_radius));
}

let spherical_cap_radius = (radius, height) => {
	return Math.sqrt(radius * radius - Math.pow((radius - height), 2));
}


let round_two_digit = num => {
	return Math.round((num + Number.EPSILON) * 100) / 100;
}



function Animation(args) {
	if (!(this instanceof Animation)) {
		return new Animation(args);
	}

	this.args = args;

	this.steps = args.steps || 0;
	this.duration = args.duration || 0;
	this.fps = args.fps || 0;

	this.funcDraw = null;
	this.funcBefore = null;
	this.funcFrame = null;
	this.timerLoop = null;

	this.start = () => {
		return new Promise(resolve => {
			let frameDelay = parseInt(this.duration / this.steps), step = 0;

			if (typeof(this.args.funcBefore) == "function") this.args.funcBefore(step, this);
			if (typeof(this.args.funcDraw) == "function") this.args.funcDraw();

			let funcLoop = () => {
				if (typeof(this.args.funcFrame) == "function") this.args.funcFrame(step, this);
				if (typeof(this.args.funcDraw) == "function") this.args.funcDraw();
				step++;
				if (step > this.steps) return resolve();
				this.timerLoop = setTimeout(funcLoop, frameDelay);
			}

			funcLoop();
		});
	}

	this.stop = () => {
		clearTimeout(this.timerLoop)
	}

}



setTimeout(app.init, 10);
