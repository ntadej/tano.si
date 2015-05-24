module Jekyll

  class TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      self.data['tag'] = tag

      self.data['title'] = "#{tag}"
      self.data['filter_tag'] = "#{tag}"
    end
  end

  class TagPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'tag'
        dir = '/tag/'
        site.tags.keys.each do |tag|
          tag_name = tag.gsub(/\s+/, '-').downcase
          site.pages << TagPage.new(site, site.source, File.join(dir, tag_name), tag)
        end
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      self.data['category'] = category

      self.data['title'] = "#{category}"
      self.data['filter_category'] = "#{category}"
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category'
        dir = '/category/'
        site.categories.keys.each do |category|
          category_name = category.gsub(/\s+/, '-').downcase
          site.pages << CategoryPage.new(site, site.source, File.join(dir, category_name), category)
        end
      end
    end
  end

end