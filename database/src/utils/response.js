module.exports = (req, statusCode, data) => {
    res.status(statusCode).json({
        error: false,
        data,
    })
}