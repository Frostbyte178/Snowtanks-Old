let output = require("../../config.js");

const gamemodes = ["display"];

output.gameModeName = "";

for (let gamemode of gamemodes) {
    let mode = require(`./gamemodeconfigs/${gamemode}.js`);
    for (let key in mode) {
        if (key === "ROOM_SETUP") {
            //console.log("a");
            for (let y = 0; y < mode.Y_GRID; y++) {
                for (let x = 0; x < mode.X_GRID; x++) {
                    if (mode[key][y][x]) {
                        output[key][y][x] = mode[key][y][x];
                    }
                }
            }
        } else if (mode[key] === "NAME") {
            //console.log("b");
            output.gameModeName += mode.NAME;
        } else {
            //console.log("c");
            output[key] = mode[key];
        }
    }


/*output.gameModeName = gamemode;
if (["Tag", "Domination", "Mothership"].includes(gamemode)) {
    output.gameModeName = `${output.TEAMS} TDM ${gamemode}`;
}
if (gamemode === "Open TDM") {
    output.gameModeName = `Open ${output.TEAMS} TDM`;
}*/
}
//console.log(output.gameModeName);
module.exports = { output };
