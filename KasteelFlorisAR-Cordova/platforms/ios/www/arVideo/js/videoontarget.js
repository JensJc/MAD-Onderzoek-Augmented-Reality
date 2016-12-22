var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});

		var video = new AR.VideoDrawable("assets/video.mp4", 1, {
			offsetY: -0.3,
		});
		
		var pageOne = new AR.Trackable2DObject(this.tracker, "*", {
			drawables: {
				cam: [video]
			},
			onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
				video.play(-1);
			}
		});
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
