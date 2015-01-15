class EmailList < ActiveRecord::Base
	validates :email_address, presence: true
end
