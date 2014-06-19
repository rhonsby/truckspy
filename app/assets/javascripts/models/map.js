Truckspy.Models.Map = Backbone.Model.extend({
  initialize: function (options) {
    this.markers = [];

    var mapOptions = {
      center: new google.maps.LatLng(options.lat, options.lng),
      zoom: 16
    };
    this.map = Truckspy.map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
  }
});