/* eslint-disable no-useless-escape */
const hash = "<!--\n _ _                 _   _             \n(_) |_ ___ _ __ __ _| |_(_) ___  _ __  \n| | __/ _ \\ \'__/ _` | __| |/ _ \\| \'_ \\ \n| | ||  __/ | | (_| | |_| | (_) | | | |\n|_|\\__\\___|_|  \\_____\\__|_|\\___/|_| |_|\n__   ____ _ ___(_) (_)(_) ___          \n\\ \\ / / _` / __| | | || |/ _ \\         \n \\ V / (_| \\__ \\ | | || |  __/         \n  \\_/ \\__,_|___/_|_|_|/ |\\___|         \n                    |__/           \n-\n\nwww.vasilie.net\n\nSay hello: \nhello@vasilie.net\n   \n-->";
const buffer = Buffer.from(hash,'hex').toString("utf8");
const identify = () => {
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeBegin", hash);
}

export default identify;
