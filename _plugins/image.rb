module Jekyll
    class ImageTag < Liquid::Tag

      def initialize(tag_name, params, tokens)
          super
          @url = params.split('|')[0]
          @text = params.split('|')[1]
          @align = params.split('|')[2]
      end

      def render(context)
          prefix = ''
          if context.registers[:site].config['production']
            prefix = context.registers[:site].config['cdn_url']
          end

          "<div class=\"img-thumbnail thumb-#{@align}\"><img src=\"#{prefix}#{@url}\" alt=\"#{@text}\" class=\"img-responsive\"><div class=\"caption\">#{@text}</div></div>"
      end
    end
end

Liquid::Template.register_tag('img', Jekyll::ImageTag)
