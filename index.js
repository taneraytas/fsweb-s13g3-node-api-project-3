// require your server and launch it
const server = require("./api/server");

port = 9000;

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
