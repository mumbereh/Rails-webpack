# app/controllers/root_controller.rb
class RootController < ApplicationController
  def index
    @random_greeting = Greeting.order('RANDOM()').first
  end
end
