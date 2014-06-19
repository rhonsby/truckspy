window.Truckspy = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Truckspy.trucks = new Truckspy.Collections.Trucks();
    Truckspy.trucks.fetch();

    new Truckspy.Routers.Router({
      $rootEl: $('#content')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Truckspy.initialize();
});