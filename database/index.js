const server = require('./src/server');


PORT = 8004;

server.listen(PORT, console.log(`Listening database on port ${PORT}`));