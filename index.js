var chalk = require("chalk");

var message = chalk.blue.underline("Andrew") + " " + chalk.yellow.bgRed.bold("McCrodan") + " " +
  chalk.green.bgWhite("is") + " " + chalk.magenta.bgBlue("testing") + " " +
  chalk.bgBlack.cyan("chalk.");
console.log(message);