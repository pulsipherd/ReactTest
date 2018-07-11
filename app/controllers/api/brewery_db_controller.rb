class Api::BreweryDbController < ApplicationController
  def token
    render json: ENV['BREWERY_DROPIN_TOKEN']
  end
end
