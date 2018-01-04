require 'fileutils'

@output = '/var/www/default/'

task default: %w(serve)

task :serve do
  puts `bundle exec jekyll serve --watch`
end

task :deploy do
  puts 'Building web page using Jekyll'

  puts `JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_production.yml --destination #{@output}`
end
