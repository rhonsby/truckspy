Truckspy.Views.rootIndex = Backbone.View.extend({
  template: JST['index'],

  initialize: function (options) {
    this.trucks = options.trucks;
    this.renderMap({
      lat: 37.7833,
      lng: -122.4167
    });

    this.resultsView = new Truckspy.Views.results();
  },

  events: {
    'submit .address-search-form': 'handleSearch',
    'click .truck': 'zoomOnTruck'
  },

  zoomOnTruck: function (event) {
    var title = $(event.currentTarget).data('title');
    var truck = Truckspy.trucks.where({ id: title })[0];
    this.zoomOnAddress(truck.escape('address'));
  },

  renderMap: function (options) {
    this.markers = [];
    this.map = new Truckspy.Models.Map(options).map;

    google.maps.event.addDomListener(this.map, 'dragend', this.updateMarkers.bind(this));
    google.maps.event.addDomListener(this.map, 'zoom_changed', this.updateMarkers.bind(this));
  },

  updateMarkers: function () {
    this.removeMarkers();
    this.addMarkers();
  },

  addMarkers: function () {
    var bounds = this.map.getBounds();
    var mapBounds = {
      north: bounds.Ba.j - 0.0015,
      south: bounds.Ba.k + 0.0015,
      west: bounds.ra.j + 0.0015,
      east: bounds.ra.k - 0.0015
    };

    trucks = this.trucks.whereInBounds({ mapBounds: mapBounds });
    var markerOptions;
    var marker;
    var view = this;

    trucks.forEach(function (truck) {
      markerOptions = new google.maps.LatLng(truck.escape('latitude'), truck.escape('longitude'));

      marker = new google.maps.Marker({
        position: markerOptions,
        map: Truckspy.map,
        title: truck.escape('id')
      });

      view.markers.push(marker);
    });

    this.displayResults(trucks);
    this.bindMarkerEvents();
  },

  bindMarkerEvents: function () {
    _(this.markers).each(function (marker) {
      var key = marker.title;
      var selector = '.truck[data-title=' + key + ']';
      $(selector).hover(function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }, function () {
        marker.setAnimation(null);
      });
    });
  },

  displayResults: function (trucks) {
    var $results = $('.results');
    $results.html(this.resultsView.render(trucks).$el);
  },

  removeMarkers: function () {
    this.markers.forEach(function (marker) {
      marker.setMap(null);
    });
  },

  handleSearch: function (event) {
    event.preventDefault();
    var address = $(event.currentTarget).serializeJSON().address;
    address = address + ', sf';

    this.zoomOnAddress(address);
  },

  zoomOnAddress: function (address) {
    var geocoder = new google.maps.Geocoder();
    var that = this;

    geocoder.geocode({ 'address': address }, function (results, status) {
      if (!results.length) {
        alert('Invalid address!');
      } else {
        var data = results[0].geometry.location;
        var lat = data.k;
        var lng = data.A;

        var location = new google.maps.LatLng(lat, lng);
        that.map.setCenter(location);
        that.map.setZoom(16);

        that.updateMarkers();
      }
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.resultsView.delegateEvents();
    return this;
  }
});