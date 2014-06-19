json.cache! [truck.updated_at] do
  json.extract! truck, :id, :name, :longitude, :latitude, :address
end