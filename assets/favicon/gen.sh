# Apple
apple=("76" "76@2x" "60@2x" "60@3x" "83.5@2x")
sizes=(76 152 120 180 167)
length=${#apple[@]}

for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../../src/_assets/images/favicon/apple_${apple[$i]}.png -w ${sizes[$i]} ../../node_modules/tano-style/assets/src/logo_square.svg
done

# Other
sizes=(16 32 36 48 72 96 144 192)
length=${#sizes[@]}
for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../../src/_assets/images/favicon/${sizes[$i]}.png -w ${sizes[$i]} ../../node_modules/tano-style/assets/src/logo.svg
done

# ICO
convert ../../src/_assets/images/favicon/16.png ../../src/_assets/images/favicon/32.png ../../src/_assets/images/favicon/48.png ../../src/favicon.ico

# MS
ms=("70" "150" "310")
sizes=("70" "150" "310")
length=${#ms[@]}
for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../../src/_assets/images/favicon/mstile_${ms[$i]}.png -w ${sizes[$i]} ../../node_modules/tano-style/assets/src/logo_text.svg
done
convert ../../src/_assets/images/favicon/mstile_150.png -gravity center -background transparent -extent 310x150 ../../src/_assets/images/favicon/mstile_310x150.png
