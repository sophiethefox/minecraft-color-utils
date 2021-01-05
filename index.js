exports.colors = {
    4: {
        "motd": "\\u00A74",
        "decimal": 11141120,
        "hex": "AA0000",
        "rgb": [170, 0, 0],
        "name": {
            "original": "dark_red",
            "formatted": "Dark Red"
        },
        "bash": "\033[0;31m"
    },
    c: {
        "motd": "\\u00A7c",
        "decimal": 16733525,
        "hex": "FF5555",
        "rgb": [255, 85, 85],
        "name": {
            "original": "red",
            "formatted": "Red"
        },
        "bash": "\033[1;31m"
    },
    6: {
        "motd": "\\u00A76",
        "decimal": 16755200,
        "hex": "FFAA00",
        "rgb": [255, 170, 0],
        "name": {
            "original": "gold",
            "formatted": "Gold"
        },
        "bash": "\033[0;33m"
    },
    e: {
        "motd": "\\u00A7e",
        "decimal": 16777045,
        "hex": "FFFF55",
        "rgb": [255, 255, 85],
        "name": {
            "original": "yellow",
            "formatted": "Yellow"
        },
        "bash": "\033[1;33m"
    },
    2: {
        "motd": "\\u00A72",
        "decimal": 43520,
        "hex": "00AA00",
        "rgb": [0, 170, 0],
        "name": {
            "original": "dark_green",
            "formatted": "Dark Green"
        },
        "bash": "\033[0;32m"
    },
    a: {
        "motd": "\\u00A7a",
        "decimal": 5635925,
        "hex": "55FF55",
        "rgb": [85, 255, 85],
        "name": {
            "original": "green",
            "formatted": "Green"
        },
        "bash": "\033[1;32m"
    },
    b: {
        "motd": "\\u00A7b",
        "decimal": 5636095,
        "hex": "55FFFF",
        "rgb": [85, 255, 255],
        "name": {
            "original": "aqua",
            "formatted": "Aqua"
        },
        "bash": "\033[1;36m"
    },
    3: {
        "motd": "\\u00A73",
        "decimal": 43690,
        "hex": "00AAAA",
        "rgb": [0, 170, 170],
        "name": {
            "original": "dark_aqua",
            "formatted": "Dark Aqua"
        },
        "bash": "\033[0;36m"
    },
    1: {
        "motd": "\\u00A71",
        "decimal": 170,
        "hex": "0000AA",
        "rgb": [0, 0, 170],
        "name": {
            "original": "dark_blue",
            "formatted": "Dark Blue"
        },
        "bash": "\033[0;34m"
    },
    9: {
        "motd": "\\u00A79",
        "decimal": 5592575,
        "hex": "5555FF",
        "rgb": [85, 85, 255],
        "name": {
            "original": "blue",
            "formatted": "Blue"
        },
        "bash": "\033[1;34m"
    },
    d: {
        "motd": "\\u00A7d",
        "decimal": 16733695,
        "hex": "FF55FF",
        "rgb": [255, 85, 255],
        "name": {
            "original": "light_purple",
            "formatted": "Light Purple"
        },
        "bash": "\033[1;35m"
    },
    5: {
        "motd": "\\u00A75",
        "decimal": 11141290,
        "hex": "AA00AA",
        "rgb": [170, 0, 170],
        "name": {
            "original": "dark_purple",
            "formatted": "Dark Purple"
        },
        "bash": "\033[0;35m"
    },
    f: {
        "motd": "\\u00A7f",
        "decimal": 16777215,
        "hex": "FFFFFF",
        "rgb": [255, 255, 255],
        "name": {
            "original": "white",
            "formatted": "White"
        },
        "bash": "\033[1;37m"
    },
    7: {
        "motd": "\\u00A77",
        "decimal": 11184810,
        "hex": "AAAAAA",
        "rgb": [170, 170, 170],
        "name": {
            "original": "gray",
            "formatted": "Gray"
        },
        "bash": "\033[0;37m"
    },
    8: {
        "motd": "\\u00A78",
        "decimal": 5592405,
        "hex": "555555",
        "rgb": [85, 85, 85],
        "name": {
            "original": "dark_gray",
            "formatted": "Dark Gray"
        },
        "bash": "\033[1;30m"
    },
    0: {
        "motd": "\\u00A70",
        "decimal": 0,
        "hex": "000000",
        "rgb": [0, 0, 0],
        "name": {
            "original": "black",
            "formatted": "Black"
        },
        "bash": "\033[0;30m"
    },
    k: { //these are formatting codes, e.g. bold, underline -- they do not have any colors associated. needs to have values for search to work
        "motd": "\\u00A7k",
        "decimal": null,
        "hex": null,
        "rgb": null,
        "name": {
            "original": null,
            "formatted": null
        },
        "bash": null
    },
    l: {
        "motd": "\\u00A7l",
        "decimal": null,
        "hex": null,
        "rgb": null,
        "name": {
            "original": null,
            "formatted": null
        },
        "bash": null
    },
    m: {
        "motd": "\\u00A7m",
        "decimal": null,
        "hex": null,
        "rgb": null,
        "name": {
            "original": null,
            "formatted": null
        },
        "bash": null
    },
    n: {
        "motd": "\\u00A7n",
        "decimal": null,
        "hex": null,
        "rgb": null,
        "name": {
            "original": null,
            "formatted": null
        },
        "bash": null
    },
    o: {
        "motd": "\\u00A7o",
        "decimal": null,
        "hex": null,
        "rgb": null,
        "name": {
            "original": null,
            "formatted": null
        },
        "bash": null
    },
    r: {
        "motd": "\\u00A7r",
        "decimal": null,
        "hex": null,
        "rgb": null,
        "name": {
            "original": null,
            "formatted": null
        },
        "bash": null
    }
};

/**
 * @param {String|Number} color Color code
 * @returns {Number} Decimal version of color 
 */
exports.toDecimal = function (color) {
    return (this.colors[strip(color)].decimal);
}

/**
 * @param {String|Number} color Color code
 * @returns {String} Unicode version of color 
 */
exports.toMOTD = function (color) {
    return (this.colors[strip(color)].motd);
}

/**
 * @param {String|Number} color Color code
 * @returns {String} Hex version of color 
 */
exports.toHex = function (color) {
    return (this.colors[strip(color)].hex);
}

/**
 * @param {String|Number} color Color code
 * @returns {[R: Number, G: Number, B: Number]} RGB array version of color
 */
exports.toRGB = function (color) {
    return (this.colors[strip(color)].rgb);
}

/**
 * @param {String|Number} color Color code
 * @returns {{original: String, formatted: String}} Name version of color 
 */
exports.toName = function (color) {
    return (this.colors[strip(color)].name);
}

/**
 * Gets bash color code (e.g. `\033[0;30m`)
 * @param {String|Number} color Color code
 * @returns {String} Bash color code of color
 */
exports.toBash = function (color) {
    return (this.colors[strip(color)].bash);
}

/**
 * Gets color code from color name (e.g. `dark_aqua` and `Dark Aqua` both return `3`)
 * @param {String} color Color name (original or unformatted)
 * @returns {String} Color code 
 */
exports.fromName = function (color) {
    try {
        if (color[0] === color[0].toUpperCase()) {
            return Object.keys(this.colors).filter(c => this.colors[c].name.formatted === color)[0];
        } else {
            return Object.keys(this.colors).filter(c => this.colors[c].name.original === color)[0];
        }
    } catch (error) {
        return null;
    }
}

/**
 * Gets full color object from `this.colors`
 * @param {String|Number} color color code
 * @returns {{motd: String, decimal: Number, hex: String, rgb: [R: Number, G: Number, B: Number], name: {original: String, formatted: String}}}
 */
exports.fullInfo = function (color) {
    return this.colors[color];
}

/**
 * Changes color codes in the string into an MOTD safe unicode version   
 * @param {String} s
 * @returns {String} String with all § characters and & characters replaced with unicode (unless escaped)
 */
exports.stringToMOTD = function(s) {
    return ((" " + s).replace(/(?<!\\)(§|\&)/g, "\\u00A7").replace(/\\\&/g, "&").replace(/\\§/g, "§")).substring(1);
}

/**
 * Removes any color code indicators from string
 * @param {String} s 
 * @returns {String} String without `§` or `&`
 */
function strip(s) {
    return s.replace("§", "").replace("&", "");
}

//note: I believe the double slashes when defining the unicode is nessecary
//      as if you were to try to for example turn a string into an MOTD,
//      it will return \<unicode> in plain text instead of the § character,
//      which MOTDs wouldn't accept
