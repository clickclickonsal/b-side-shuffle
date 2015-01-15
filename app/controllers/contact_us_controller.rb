class ContactUsController < ApplicationController

	def create
		@contact = ContactUs.new(contact_us_params)
		respond_to do |format|
      if @contact.save
        format.html {redirect_to root_path}
        format.json { render json: @contact }
      else
        format.html { render :new }
        format.json { render status: 400, nothing: true }
      end
    end
	end
	
	private

	def contact_us_params
		params.require(:contact_us).permit(:name, :email, :subject, :message)		
	end
	
end