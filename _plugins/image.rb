module Jekyll
  	class ImageTag < Liquid::Tag

    	def initialize(tag_name, params, tokens)
      		super
      		@url = params.split('|')[0]
      		@text = params.split('|')[1]
      		@align = params.split('|')[2]
    	end

    	def render(context)
      		"<div class=\"thumbnail thumb-#{@align}\"><img src=\"#{@url}\" alt=\"#{@text}\"><div class=\"caption\">#{@text}</div></div>"
    	end
  	end
end

Liquid::Template.register_tag('img', Jekyll::ImageTag)
