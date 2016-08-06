require 'fileutils'

@output = '/var/www/default/'
@cdn = '/var/www/cdn/'
@cdn_name = 'personal'

task default: %w(serve)

task :serve do
  puts `bundle exec jekyll serve --watch`
end

task :deploy do
  puts 'Building web page using Jekyll'

  puts `JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_production.yml --destination #{@output}`

  puts ''
  puts 'Copying assets and other resources to CDN'
  FileUtils.cp_r "#{@output}error/.", "#{@cdn}error", verbose: true

  FileUtils.rm_rf("#{@cdn}#{@cdn_name}/")

  FileUtils.mkdir("#{@cdn}#{@cdn_name}")
  FileUtils.cp_r "#{@output}assets/", "#{@cdn}#{@cdn_name}/assets", verbose: true
  FileUtils.cp_r "#{@output}files/", "#{@cdn}#{@cdn_name}/files", verbose: true
  FileUtils.cp_r "#{@output}resources/", "#{@cdn}#{@cdn_name}/resources", verbose: true
end
