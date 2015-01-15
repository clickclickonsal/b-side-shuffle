class ContactUs < ActiveRecord::Base
	validates :name, :email, :subject, :message, presence: true
end
