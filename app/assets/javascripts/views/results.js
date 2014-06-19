Truckspy.Views.results = Backbone.View.extend({
  template: JST['results'],

  render: function (trucks) {
    var renderedContent = this.template({ trucks: trucks });
    this.$el.html(renderedContent);
    return this;
  }
});