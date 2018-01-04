module Jekyll
  class ImageTag < Liquid::Tag
    def initialize(tag_name, params, tokens)
      super
      @url = params.split('|')[0].strip!
      @text = params.split('|')[1].strip!
      @align = params.split('|')[2].strip!
    end

    def render(context)
      prefix = ''
      if context.registers[:site].config['production'] && context.registers[:site].config['cdn_url']
        prefix = context.registers[:site].config['cdn_url']
      end

      "<div class=\"thumb thumb-#{@align}\"><img src=\"#{prefix}#{@url}\" alt=\"#{@text}\" class=\"img-responsive\"><div class=\"caption\">#{@text}</div></div>"
    end
  end
end

Liquid::Template.register_tag('thumb', Jekyll::ImageTag)
