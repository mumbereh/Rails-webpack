# class Api::V1::GreetingsController < ApplicationController
#   # GET /greetings or /greetings.json
#   def index
#     @greetings = [Greeting.order('RANDOM()').first]
#     render json: @greetings
#   end
# end

# app/controllers/api/v1/greetings_controller.rb
module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.all
      end
    end
  end
end
