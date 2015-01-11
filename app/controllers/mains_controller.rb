class MainsController < ApplicationController

	def index
		gon.soundcloud_key = ENV['soundcloud_client_id']
	end
	
end