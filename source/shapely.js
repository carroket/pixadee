/*============================================================================*\

	JavaScript for Shapely
	-----------------------------------------------------------------------
	© 2015 & 2016 by Carroket, Inc.
	http://www.carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	http://www.briansexton.com/

 \*============================================================================*/


(function(document, options) {

	var shapely = new Shapely();

	function Shapely() {

		// TO DO: Consider whether any options should be addressed here.
	}

	// If a namespace was specified, attach shapely to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.shapely = shapely;
	}

})(window.document);