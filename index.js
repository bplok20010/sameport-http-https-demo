const net = require("net");

function isHTTPRequest(buffer) {
    return /GET|PUT|HEAD|POST|DELETE|PATCH|OPTIONS/g.test(String(buffer));
}

const server = net.createServer(socket => {
    // 'connection' listener.
    console.log("client connected");
    socket.on("data", data => {
        if (isHTTPRequest(data)) {
            console.log("http  request");
        } else {
            console.log("https request");
        }
        socket.end("");
    });
    socket.on("end", () => {
        console.log("client disconnected");
    });
});
server.on("error", err => {
    throw err;
});
server.listen(8124, () => {
    console.log("server bound");
});
