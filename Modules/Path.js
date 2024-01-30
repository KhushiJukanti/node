const path = require("path");

const filePath = "users/0010au/Desktop/Mern/Node/modules/index.js";
console.log(path.basename(filePath));

const path1 = "users/0010au";
const path2 = "index.html";
console.log(path.join(path1, path2));
