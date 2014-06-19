Truckspy.Collections.Trucks = Backbone.Collection.extend({
  url: 'api/trucks',

  model: Truckspy.Models.Truck,

  whereInBounds: function (options) {
    var mapBounds = options.mapBounds;

    trucks = this.select(function (truck) {
      var truckLong = truck.escape('longitude');
      var truckLat = truck.escape('latitude');

      return (truckLong < mapBounds.east &&
      truckLong > mapBounds.west &&
      truckLat < mapBounds.north &&
      truckLat > mapBounds.south);
    });

    return trucks;
  }
});