ActiveRecord::Base.transaction do
  raw_data = RestClient.get('http://data.sfgov.org/resource/mbtc-ffmn.json')
  parsed_data = JSON.parse(raw_data)

  parsed_data.each do |truck_data|
    lat = truck_data["latitude"]
    long = truck_data["longitude"]
    # raw_address_data = RestClient.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=#{lat},#{long}&key=#{ENV['GOOGLE_MAPS_API_KEY']}")
    # address = JSON.parse(raw_address_data)["results"].first["formatted_address"]

    Truck.create(
      name: truck_data["applicant"],
      longitude: long,
      latitude: lat
    )
  end
end