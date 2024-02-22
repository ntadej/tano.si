module Jekyll
  module AssetFilter
    def cdn(url)
      prefix = ''
      if @context.registers[:site].config['production'] && @context.registers[:site].config['cdn_url']
        prefix = @context.registers[:site].config['cdn_url']
      end

      "#{prefix}#{url}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
