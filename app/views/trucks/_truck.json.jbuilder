json.cache! [truck.updated_at] do
  json.extract! truck, :name, :longitude, :latitude
end