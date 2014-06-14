class Api::TrucksController < ApplicationController
  def index
    trucks = Truck.all
    render partial: 'trucks/index', locals: { trucks: trucks }
  end
end
