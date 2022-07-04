const { request } = require('express');
const notificationSvc = require('../service/push.notif.service.js');

exports.doSendMessageFcm = async(request, response) => {
    const result = await notificationSvc.sendMesageToFcm(request);

    response.status(201).json({
        message: 'Message sended successfully on FCM',
        data: result
    });
}

exports.doSendMessageNotif = async(request, response) => {
    const result = await notificationSvc.sendNotifToDB(request);

    response.status(201).json({
        message: 'Message sended successfully on DB',
        data: result
    });
}

exports.doGetMessageNotif = async(request, response) => {
    const result = await notificationSvc.getNotifByUser(request.query.user_id);

    response.status(200).json({
        data: result
    });
}
