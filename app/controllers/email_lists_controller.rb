class EmailListsController < ApplicationController

	def create
		@email = EmailList.new(email_list_params)

		respond_to do |format|
      if @email.save
        format.html {redirect_to root_path}
        format.json { render json: @email }
      else
        format.html { render :new }
        format.json { render status: 400, nothing: true }
      end
    end
	end
	
	private

	def email_list_params
		params.require(:email_list).permit(:email_address)
	end
	
end