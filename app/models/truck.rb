# == Schema Information
#
# Table name: trucks
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  longitude  :string(255)      not null
#  latitude   :string(255)      not null
#  address    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Truck < ActiveRecord::Base
  validates :name, :longitude, :latitude, presence: true
end
