const { request } = require('express');
const notificationSvc = require('../service/push.notif.service.js');

exports.doSendMessageNotif = async(request, response) => {
    const result = await notificationSvc.createNotification(request);

    if(result != null) {
        response.status(201).json({
            message: 'Message sended successfully',
            data: result
        });
    } else {
        response.status(400).json({
            error: 'Email not sended',
            data: null
        });
    }

    
}

exports.doGetMessageNotif = async(request, response) => {
    const result = await notificationSvc.getNotificationEmail(request.query.email);

    response.status(200).json({
        data: result
    });
}
