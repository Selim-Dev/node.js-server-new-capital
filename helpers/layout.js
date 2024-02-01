console.log("hello from inside layout.js");

const test = require("fs");
const getLayout = () => {
  console.log("require", require);
  console.log("filename", __filename);
  console.log("filename", __dirname);
  return `
	<html>
		<head>
		 <title>New Capital</title>
		 <link rel="stylesheet" href="style.css"/>
	 </head>
	 <body>
		 <h1>Main Page</h1>
		 <p> hello ahmed, ${new Date()}</p>
		 <img src="test.jpg" />
	 </body>
	<html>
 `;
};
const postLayout = () => {};
module.exports = { getLayout, postLayout };
