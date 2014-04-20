#BEGIN_PROPERTIES#
{
    "version": "1.3.2",
    "commandsIntroduced":
        ["global.startLevel", "global.onExit", "map.placePlayer",
         "map.placeObject", "map.getHeight", "map.getWidth",
         "map.displayChapter", "map.getPlayer", "player.hasItem"],
    "music": "The Green"
}
#END_PROPERTIES#
/*****************
 * cellBlockA.js *
 *****************
 *
 * Hey Marcel. I've eliminated some of the more obvious ways
 * you can cheat yourself out of this box.
 * This should still be a simple puzzle though, even with the
 * extra restrictions you'll have to deal with.
 */

function startLevel(map) {
#START_OF_START_LEVEL#
    map.displayChapter('Chapter 1\nSimple box');

    map.placePlayer(7, 5);

#BEGIN_EDITABLE#
    // You get your computer in this level so it should be easy :D
    map.placeObject(15, 12, 'computer');


    for (y = 3; y <= map.getHeight() - 10; y++) {
        map.placeObject(5, y, 'block');
        map.placeObject(map.getWidth() - 5, y, 'block');
    }

    for (x = 5; x <= map.getWidth() - 5; x++) {
        map.placeObject(x, 3, 'block');
        map.placeObject(x, map.getHeight() - 10, 'block');
    }
#END_EDITABLE#

    map.placeObject(map.getWidth()-7, map.getHeight()-5, 'exit');
#END_OF_START_LEVEL#
}

function validateLevel(map) {
    // No creating exits!
    map.validateExactlyXManyObjects(1, 'exit');

    // No fancy items!
    map.validateExactlyXManyObjects(0, 'phone');
    map.validateExactlyXManyObjects(0, 'theAlgorithm');
}


function onExit(map) {
    if (!map.getPlayer().hasItem('computer')) {
        map.writeStatus("Don't forget to pick up the computer!");
        return false;
    } else {
        return true;
    }
}
