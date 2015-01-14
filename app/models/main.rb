require 'httparty'

class Main < ActiveRecord::Base

	def self.tumblr_data
		tumblr_array = []
		response = HTTParty.get("http://api.tumblr.com/v2/blog/bsideshuffle.tumblr.com/posts/text?api_key=#{ENV['tumblr_oauth_consumer_key']}")
		tumblr_array << response['response']['posts'][0]
		tumblr_array << response['response']['posts'][1]
	end
end
