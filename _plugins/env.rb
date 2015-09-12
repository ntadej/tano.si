module Jekyll
  class EnvGenerator < Generator
    def generate(site)
      site.config['analytics'] = ENV['GA_TANO'] || ''
    end
  end
end
