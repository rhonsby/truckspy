window.Truckspy = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Truckspy.Routers.Router({
      $rootEl: $('#content')
    });

    Truckspy.trucks = new Truckspy.Collections.Trucks();
    Truckspy.trucks.fetch();

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Truckspy.initialize();

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(37.7833, -122.4167),
      zoom: 15
    };
    Truckspy.map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
