const fs = require("fs");
const chalk = require("chalk");

// Other
let gg = process.env.MODS;
if (!gg) {
  gg = "263788914422";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "none";
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;
(global.packname = process.env.PACKNAME || "Master"),
  (global.prefix = process.env.PREFIX || "."),
  (global.author = process.env.AUTHOR || "peace"),
  (global.sessionName = "Master"),
  (global.name = process.env.NAME || "Master-Peace"),
  (global.thumb = fs.readFileSync("./src/assest/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
