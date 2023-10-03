const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use("/characters", createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true
}));

app.use("/planets", createProxyMiddleware({
    target: "http://planets:8002",
    changeOrigin: true
}));

app.use("/films", createProxyMiddleware({
    target: "http://films:8003",
    changeOrigin: true
}));

app.use("/database/:model", createProxyMiddleware({
    target: "http://database:8004",
    changeOrigin: true
}))

app.listen(PORT, () =>
    console.log(`Gateway listening 
    on port ${PORT}`));
