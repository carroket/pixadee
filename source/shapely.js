/*============================================================================*\

	JavaScript for Pixadee
	-----------------------------------------------------------------------
	© 2015 & 2016 by Carroket, Inc.
	http://www.carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	http://www.briansexton.com/

 \*============================================================================*/


(function(document, options) {

	var pixadee = new Pixadee();

	function Pixadee() {

		// TO DO: Consider whether any options should be addressed here.
	}

	// If a namespace was specified, attach pixadee to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.pixadee = pixadee;
	}

})(window.document);