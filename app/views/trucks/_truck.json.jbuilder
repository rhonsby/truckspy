json.cache! [truck.id, truck.updated_at] do
  json.extract! truck, :id, :name, :longitude, :latitude, :address, :food_items
end