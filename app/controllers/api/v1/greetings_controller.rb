class Api::V1::GreetingsController < ApplicationController
  # GET /api/v1/greetings
  def index
    @greetings = [Greeting.order('RANDOM()').first]
    render json: @greetings
  end
end
