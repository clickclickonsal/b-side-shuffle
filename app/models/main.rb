require 'httparty'

class Main < ActiveRecord::Base

	def self.tumblr_data
		response = HTTParty.get("http://api.tumblr.com/v2/blog/bsideshuffle.tumblr.com/posts/text?api_key=#{ENV['tumblr_oauth_consumer_key']}&limit=2&filter=text}")
		response['response']['posts']
	end

	def self.tumblr_blog_image
		response = HTTParty.get("http://api.tumblr.com/v2/blog/bsideshuffle.tumblr.com/posts/text?api_key=#{ENV['tumblr_oauth_consumer_key']}&limit=2}")
		response['response']['posts']['body']
	end
end
