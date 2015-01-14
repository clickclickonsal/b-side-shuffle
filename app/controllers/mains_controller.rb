class MainsController < ApplicationController

	def index
		gon.soundcloud_key = ENV['soundcloud_client_id']
		@songkick_data = Main.songkick_data
		@tumblr_data = Main.tumblr_data
		@tumblr_blog_images = Main.tumblr_blog_image
		@main = Main.last
		@mains = Main.last(4)
	end

	def create
		@main = Main.new(main_params)
		respond_to do |format|
      if @main.save
        format.html {redirect_to root_path}
        format.json { render json: @main }
      else
        format.html { render :new }
        format.json { render status: 400, nothing: true }
      end
    end
	end
	
	private

	def main_params
		params.require(:main).permit(:video_url)		
	end
end