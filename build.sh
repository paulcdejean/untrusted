#!/bin/sh
export target="scripts/build/untrusted.js"

export modules="scripts/util.js 
			 scripts/_head.js 
             scripts/game.js 
             scripts/codeEditor.js 
             scripts/display.js 
             scripts/dynamicObject.js 
             scripts/inventory.js 
             scripts/map.js 
             scripts/objects.js 
             scripts/player.js 
             scripts/reference.js 
             scripts/sound.js 
             scripts/validate.js 
             scripts/ui.js 
	         levels/levels.js 
             scripts/_launcher_release.js 
	         scripts/_tail.js"

echo "Building level file..."
./compile_levels.sh
echo "[ Done ]"
echo "Merging JS files..."
cat $modules > $target
echo "[ Done ]"