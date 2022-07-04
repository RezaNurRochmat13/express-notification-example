const admin = require("firebase-admin");
const serviceAccount = require("./fsw11remajamasjid-d6e6139b3a74.json");

const adminConfig = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = adminConfig.messaging();