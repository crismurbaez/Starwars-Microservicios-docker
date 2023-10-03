const server = require("./src/sever");

const PORT = 8002;


server.listen(PORT, () => {
    console.log(`Planets Service 
    listening on ${PORT}`)
});

