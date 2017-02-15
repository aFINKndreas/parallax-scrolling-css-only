/*
Parallax Scrolling Framework - a lightweight and customizable framework for parallax scrolling
Version: 0.2.09-02-2017
Author: Andreas Fink 
Website: https://afink.at
Github: https://github.com/aFinkndreas
*/
document.addEventListener("DOMContentLoaded", function() {

	var defaults = {
		parallaxPercent: 0.25
	};

	var globals = {
		obj: '',
		pers: 300
	};

	init();

	function init() {
		globals.obj = document.getElementsByTagName("parallax");
		document.getElementsByClassName("parallax")[0].style.perspective = globals.pers+"px";
		parallax();
	}

	function parallax() {
		for (var i = 0; i < globals.obj.length; i++){
			var maxTrans = globals.obj[i].getBoundingClientRect().height;
			var speed = getAttr(globals.obj[i],'parallax-speed')*maxTrans/2.5;
			var transZ = speed;
			var scale = 1 + (transZ * -1)/globals.pers;
			globals.obj[i].getElementsByTagName('content')[0].style.transform = "translateZ("+transZ+"px) scale("+scale+")";				
		}
	}

	function getValueWithinRange(value,fall,min,max){
		if (value >= min && value <= max){
			return value;
		} else {
			return fall;
		}
	}

	function getAttr(obj,attr){
		if (obj.getAttribute(attr) != null){
			switch (attr){
				case "parallax-speed":
					return getValueWithinRange(obj.getAttribute(attr),defaults.parallaxPercent,0,1);
					break;
			}
		} else {
			switch (attr){
				case "parallax-speed":
					return defaults.parallaxPercent;
					break;
			}
		}
	};

});