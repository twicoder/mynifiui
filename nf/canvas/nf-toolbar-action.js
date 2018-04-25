/**
 * Creates a new toolbar action.
 *
 * @argument {jQuery} container         The container to add the action to
 * @argument {string} action            The action to perform
 * @argument {string} id                The id of the element for the action
 * @argument {string} cls               The css class for the element
 * @argument {string} hoverCls          The css class for the hover state of the element
 * @argument {string} disableCls        The css class for the disabled state of the element
 * @argument {string} title             The title (tooltip) of the element
 */
nf.ToolbarAction = function (container, action, id, cls, hoverCls, disableCls, title) {
  this.container = container;
  this.action = action;
  this.id = id;
  this.cls = cls;
  this.hoverCls = hoverCls;
  this.disableCls = disableCls;
  this.title = title;
  this.initAction();
};

nf.ToolbarAction.prototype.container = null;
nf.ToolbarAction.prototype.action = null;
nf.ToolbarAction.prototype.id = null;
nf.ToolbarAction.prototype.cls = null;
nf.ToolbarAction.prototype.hoverCls = null;
nf.ToolbarAction.prototype.disableCls = null;
nf.ToolbarAction.prototype.title = null;

/**
 * Initializes the toolbar action by dynamically creating an element,
 * registering mouse listeners, and inserting it into the DOM.
 */
nf.ToolbarAction.prototype.initAction = function () {
  var self = this;

  // create the default button
  $('<div/>').addClass('toolbar-icon').attr('id', this.id).attr('title', this.title).mouseover(function () {
    if (!$(this).hasClass(self.disableCls)) {
      $(this).removeClass(self.cls).addClass(self.hoverCls);
    }
  }).mouseout(function () {
    if (!$(this).hasClass(self.disableCls)) {
      $(this).addClass(self.cls).removeClass(self.hoverCls);
    }
  }).click(function () {
    if (!$(this).hasClass(self.disableCls)) {
      // hide the context menu
      nf.ContextMenu.hide();

      // execute the action
      nf.Actions[self.action](nf.CanvasUtils.getSelection());
    }
  }).appendTo(this.container);
};

/**
 * Enables the toolbar action.
 */
nf.ToolbarAction.prototype.enable = function () {
  $('#' + this.id).removeClass(this.disableCls).addClass(this.cls).addClass('pointer');
};

/**
 * Disables the toolbar action.
 */
nf.ToolbarAction.prototype.disable = function () {
  $('#' + this.id).removeClass(this.cls).addClass(this.disableCls).removeClass('pointer');
};