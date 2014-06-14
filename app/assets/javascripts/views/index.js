Truckspy.Views.rootIndex = Backbone.View.extend({
  template: JST['index'],

  events: {
    'submit .address-search-form': 'handleSearch'
  },

  handleSearch: function (event) {
    event.preventDefault();
    var address = $(event.currentTarget).serializeJSON().address;
    // use address to hit Geocode api to get longlat
    // move map to center in on that location
    // use map.getBounds() to get the current long/lat
    // compare with all of the trucks and return an array of all trucks within the bounds
    // display on map as markers
    // generate results view with collection of trucks to generate results for in #content
    debugger
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});