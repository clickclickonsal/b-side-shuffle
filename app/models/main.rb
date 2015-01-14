require 'httparty'

class Main < ActiveRecord::Base

	def self.tumblr_data
		response = HTTParty.get("http://api.tumblr.com/v2/blog/bsideshuffle.tumblr.com/posts/text?api_key=#{ENV['tumblr_oauth_consumer_key']}&limit=2&filter=text")
		response['response']['posts']
	end

	def self.tumblr_blog_image
		image_array = []
		response = HTTParty.get("http://api.tumblr.com/v2/blog/bsideshuffle.tumblr.com/posts/text?api_key=#{ENV['tumblr_oauth_consumer_key']}&limit=2")
		image_array << response['response']['posts'][0]['body'][/img.*?src="(.*?)"/i,1]
		image_array << response['response']['posts'][1]['body'][/img.*?src="(.*?)"/i,1]
	end
end
