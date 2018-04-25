nf.GraphControl = (function () {

  var config = {
    translateIncrement: 20
  };

  return {
    /**
     * Initializes the graph controls.
     */
    init: function () {
      // pan up
      nf.Common.addHoverEffect('#pan-up-button', 'pan-up', 'pan-up-hover').on('click', function () {
        var translate = nf.Canvas.View.translate();
        nf.Canvas.View.translate([translate[0], translate[1] + config.translateIncrement]);

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // pan down
      nf.Common.addHoverEffect('#pan-down-button', 'pan-down', 'pan-down-hover').on('click', function () {
        var translate = nf.Canvas.View.translate();
        nf.Canvas.View.translate([translate[0], translate[1] - config.translateIncrement]);

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // pan left
      nf.Common.addHoverEffect('#pan-left-button', 'pan-left', 'pan-left-hover').on('click', function () {
        var translate = nf.Canvas.View.translate();
        nf.Canvas.View.translate([translate[0] + config.translateIncrement, translate[1]]);

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // pan right
      nf.Common.addHoverEffect('#pan-right-button', 'pan-right', 'pan-right-hover').on('click', function () {
        var translate = nf.Canvas.View.translate();
        nf.Canvas.View.translate([translate[0] - config.translateIncrement, translate[1]]);

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // zoom in
      nf.Common.addHoverEffect('#zoom-in-button', 'zoom-in', 'zoom-in-hover').on('click', function () {
        nf.Canvas.View.zoomIn();

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // zoom out
      nf.Common.addHoverEffect('#zoom-out-button', 'zoom-out', 'zoom-out-hover').on('click', function () {
        nf.Canvas.View.zoomOut();

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // zoom fit
      nf.Common.addHoverEffect('#zoom-fit-button', 'fit-image', 'fit-image-hover').on('click', function () {
        nf.Canvas.View.fit();

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });

      // one to one
      nf.Common.addHoverEffect('#zoom-actual-button', 'actual-size', 'actual-size-hover').on('click', function () {
        nf.Canvas.View.actualSize();

        // hide the context menu
        nf.ContextMenu.hide();

        // refresh the canvas
        nf.Canvas.View.refresh({
          transition: true
        });
      });
    }
  };
}());