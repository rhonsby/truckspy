Truckspy.Models.Map = Backbone.Model.extend({
  initialize: function (options) {
    this.markers = [];

    var styles = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#435158"}]}];

    var mapOptions = {
      center: new google.maps.LatLng(options.lat, options.lng),
      zoom: 16,
      styles: styles,
    };
    this.map = Truckspy.map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
  }
});