const { request } = require('express');
const notificationSvc = require('../service/push.notif.service.js');

exports.doSendMessageNotif = async(request, response) => {
    const result = await notificationSvc.createNotification(request);

    response.status(201).json({
        message: 'Message sended successfully',
        data: result
    });
}

exports.doGetMessageNotif = async(request, response) => {
    const result = await notificationSvc.getNotificationEmail(request.query.email);

    response.status(200).json({
        data: result
    });
}
