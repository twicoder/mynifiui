$(document).ready(function () {
  // setup general button mouse behavior
  nf.Common.addHoverEffect('div.button', 'button-normal', 'button-over');

  // configure the ok dialog
  $('#nf-ok-dialog').modal({
    buttons: [{
      buttonText: 'Ok',
      handler: {
        click: function () {
          // close the dialog
          $('#nf-ok-dialog').modal('hide');
        }
      }
    }],
    handler: {
      close: function () {
        // clear the content
        $('#nf-ok-dialog-content').empty();
      }
    }
  });

  // configure the yes/no dialog
  $('#nf-yes-no-dialog').modal({
    handler: {
      close: function () {
        // clear the content
        $('#nf-yes-no-dialog-content').empty();
      }
    }
  });
});

nf.Dialog = (function () {

  return {
    /**
     * Shows an general dialog with an Okay button populated with the
     * specified dialog content.
     *
     * @argument {object} options       Dialog options
     */
    showOkDialog: function (options) {
      options = $.extend({
        headerText: '',
        dialogContent: '',
        overlayBackground: true
      }, options);

      // regardless of whether the dialog is already visible, the new content will be appended
      var content = $('<p></p>').append(options.dialogContent);
      $('#nf-ok-dialog-content').append(content);

      // conditionally show the header text
      if (nf.Common.isBlank(options.headerText)) {
        $('#nf-ok-dialog-content').css('margin-top', '-10px');
      } else {
        $('#nf-ok-dialog-content').css('margin-top', '0px');
      }

      // show the dialog
      $('#nf-ok-dialog').modal('setHeaderText', options.headerText).modal('setOverlayBackground', options.overlayBackground).modal('show');
    },

    /**
     * Shows an general dialog with Yes and No buttons populated with the
     * specified dialog content.
     *
     * @argument {object} options       Dialog options
     */
    showYesNoDialog: function (options) {
      options = $.extend({
        headerText: '',
        dialogContent: '',
        overlayBackgrond: true
      }, options);

      // add the content to the prompt
      var content = $('<p></p>').append(options.dialogContent);
      $('#nf-yes-no-dialog-content').append(content);

      // update the button model
      $('#nf-yes-no-dialog').modal('setButtonModel', [{
        buttonText: 'Yes',
        handler: {
          click: function () {
            // close the dialog
            $('#nf-yes-no-dialog').modal('hide');
            if (typeof options.yesHandler === 'function') {
              options.yesHandler.call(this);
            }
          }
        }
      }, {
        buttonText: 'No',
        handler: {
          click: function () {
            // close the dialog
            $('#nf-yes-no-dialog').modal('hide');
            if (typeof options.noHandler === 'function') {
              options.noHandler.call(this);
            }
          }
        }
      }]);

      // show the dialog
      $('#nf-yes-no-dialog').modal('setOverlayBackground', options.overlayBackground).modal('show');
    }
  };
}());