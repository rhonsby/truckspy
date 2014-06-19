class AddFoodItemsToTrucks < ActiveRecord::Migration
  def change
    add_column :trucks, :food_items, :text
  end
end
