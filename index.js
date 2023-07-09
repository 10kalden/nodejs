const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/python.txt`;
// Create
//fs.writeFileSync(filePath, "this is a text file for crud operation");

//Read
// fs.readFile(filePath, 'utf8', (err, item) => {
//  console.log(item);
// });

//Update
// fs.appendFile(filePath, " and this line is updated.", (err) => {
//   if (!err) console.log("the file is updated");
// });

//Delete
fs.unlinkSync(filePath, () => {
  console.log("the file is deleted");
});
