# minecraft-color-utils
Some functions to get information about Minecraft color codes


### Usage and examples:
```javascript
const mccutils = require("minecraft-color-utils");

// Get all information about a color code
console.log(mccutils.fullInfo('a'));
/* Returns:
 {
        "motd": "\\u00A7a",
        "decimal": 5635925,
        "hex": "55FF55",
        "rgb": [85, 255, 85],
        "name": {
            "original": "green",
            "formatted": "Green"
        },
        "bash": "\033[1;32m"
    }
*/

// Get the decimal color of 'a'
console.log(mccutils.toDecimal('a'));
// Returns 5635925

// Get the color code from the color name
console.log(mccutils.fromName("green")); // the "formatted" version also works
// Returns 'a'

// Convert string into an MOTD safe version by replacing color code symbols with their unicode counterparts. Works with § as well as &.
console.log(mccutils.stringToMOTD("&aTest, cool \\& amazing!"))
// Returns: "\u00A7aTest, cool & amazing! "
```