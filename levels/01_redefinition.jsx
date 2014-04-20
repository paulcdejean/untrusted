#BEGIN_PROPERTIES#
{
    "version": "1.0001",
    "commandsIntroduced":
        ["global.startLevel", "global.onExit", "map.placePlayer",
         "map.placeObject", "map.getHeight", "map.getWidth",
         "map.defineObject", "player.getColor", "player.setColor",
         "map.displayChapter", "map.getPlayer", "player.hasItem"],
    "music": "The Green"
}
#END_PROPERTIES#
/*****************
 * redefinition.js *
 *****************
 *
 * <insert flavor text here>
 *
 */

function startLevel(map) {
#START_OF_START_LEVEL#
    map.displayChapter('Chapter 1\nBreakout');

    map.placePlayer(7, 5);
    
    map.placeObject(15, 12, 'computer');
    
    for (y = 10; y <= 14; y++) {
        map.placeObject(12, y, 'block');
        map.placeObject(18, y, 'block');
        map.placeObject(22, y, 'block');
        map.placeObject(28, y, 'block');
    }

    for (x = 12; x <= 16; x++) {
        map.placeObject(x, 10, 'block');
        map.placeObject(x, 14, 'block');
    }
    
    for (x = 22; x <= 26; x++) {
        map.placeObject(x, 10, 'block');
        map.placeObject(x, 14, 'block');
    }
    
    map.defineObject('door', {
      'symbol': '-',
      'color': '#0f0',
      'impassable': function (player) {
        if (player.getColor() == this.color) {
          player.setColor('red');
          return false;
        }
        return true;
      }
    });
    
    map.placeObject(17, 10, 'door');
    map.placeObject(17, 14, 'block');
    
    map.placeObject(27, 10, 'door');
    map.placeObject(27, 14, 'block');
#BEGIN_EDITABLE#

#END_EDITABLE#

    map.placeObject(25, 12, 'exit');
#END_OF_START_LEVEL#
}

function validateLevel(map) {
    map.validateExactlyXManyObjects(1, 'exit');
}

function onExit(map) {
    if (!map.getPlayer().hasItem('computer')) {
        map.writeStatus("Don't forget to pick up the computer!");
        return false;
    } else {
        return true;
    }
}