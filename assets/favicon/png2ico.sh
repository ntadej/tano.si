mkdir out

inkscape --export-png out/16.png -a 2:2:28:28 -w 16 ../../node_modules/tano-style/assets/src/logo_small.svg
inkscape --export-png out/32.png -a 2:2:28:28 -w 32 ../../node_modules/tano-style/assets/src/logo_small.svg
inkscape --export-png out/48.png -a 2:2:28:28 -w 48 ../../node_modules/tano-style/assets/src/logo_small.svg

png2ico ../../src/favicon.ico out/16.png out/32.png out/48.png

rm -r out
