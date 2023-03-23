const uploader = require('multer')

module.exports = uploader({
    storage: uploader.diskStorage({}),
    limits: { fileSize: 10_000_000 } //? 10 mb data
});