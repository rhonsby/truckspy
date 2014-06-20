ActiveRecord::Base.transaction do
  raw_data = RestClient.get('http://data.sfgov.org/resource/mbtc-ffmn.json')
  parsed_data = JSON.parse(raw_data)

  parsed_data.each do |truck_data|
    lat = truck_data["latitude"]
    long = truck_data["longitude"]
    food_items = truck_data["fooditems"].gsub(':', ' -')
    raw_address_data = RestClient.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=#{lat},#{long}&key=#{ENV['GOOGLE_MAPS_API_KEY']}")
    address_data = JSON.parse(raw_address_data)["results"][0]
    address = address_data["formatted_address"][0..-6]

    Truck.create(
      name: truck_data["applicant"],
      longitude: long,
      latitude: lat,
      address: address,
      food_items: food_items
    )
  end
end