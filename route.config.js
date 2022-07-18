const express = require('express');
const router = express.Router();
const notificationController = require('./controller/push.notif.controller.js');

router.post('/', (request, response) => {
    response.json({message: "Service up"});
});
router.post('/api/notif/send', notificationController.doSendMessageNotif);
router.get("/api/notif", notificationController.doGetMessageNotif);

module.exports = router;