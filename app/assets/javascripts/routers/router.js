Truckspy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'rootIndex'
  },

  rootIndex: function () {
    var rootIndexView = new Truckspy.Views.rootIndex();
    this._swapView(rootIndexView);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }

    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});