class RemoveNullFalseOnTruckAddress < ActiveRecord::Migration
  def change
    change_column :trucks, :address, :string, null: true
  end
end
