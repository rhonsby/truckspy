Truckspy.Views.rootIndex = Backbone.View.extend({
  template: JST['index'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});