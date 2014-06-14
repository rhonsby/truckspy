class CreateTrucks < ActiveRecord::Migration
  def change
    create_table :trucks do |t|
      t.string :name, null: false
      t.string :longitude, null: false
      t.string :latitude, null: false
      t.string :address, null: false

      t.timestamps
    end
  end
end
