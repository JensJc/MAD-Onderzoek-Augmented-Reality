var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});

		var castleImg = new AR.ImageResource("assets/logo.png");
		var overlayOne = new AR.AnimatedImageDrawable(castleImg, 1, 286, 315, {
			offsetX: 0,
			offsetY: 0
		});

		var imgSparkles = new AR.ImageResource("assets/imageSparkles.png");
		var sparkles = new AR.AnimatedImageDrawable(imgSparkles, 0.25, 128, 128, {
			offsetX: -0.2,
			offsetY: 0.5,
			rotation: 75
		});

		sparkles.animate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100, -1);


		this.imgButton = new AR.ImageResource("assets/kfar.png");

		var pageOneButton = this.createWwwButton("http://kasteeldoornenburg.nl/floris/", 0.2, {
			offsetX: 0,
			offsetY: -0.70
		});

		var pageOne = new AR.Trackable2DObject(this.tracker, "*", {
			drawables: {
				cam: [overlayOne, pageOneButton, sparkles]
			}
		});
	},

	createWwwButton: function createWwwButtonFn(url, size, options) {
		/*
			As the button should be clickable the onClick trigger is defined in the options passed to the AR.ImageDrawable. In general each drawable can be made clickable by defining its onClick trigger. The function assigned to the click trigger calls AR.context.openInBrowser with the specified URL, which opens the URL in the browser.
		*/
		options.onClick = function() {
			AR.context.openInBrowser(url);
		};
		return new AR.ImageDrawable(this.imgButton, size, options);
	},

	worldLoaded: function worldLoadedFn() {
		var cssDivInstructions = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		var cssDivMarker = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 38px'";
		document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivInstructions + ">Scan Target &#35;1 (marker):</div>" +
			"<div" + cssDivMarker + "><img src='assets/marker.png'></img></div>";
		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 10000);
	}
};

World.init();
