const adminConfig = require('../config/firebase.js');
const { getMessaging, onMessage } = require('firebase-admin/messaging');

const notificationRepo = require('../repository/notif.repo.js');

exports.sendMesageToFcm = async(payload) => {
    const messagePayload = {
        "notification": {
            "title": payload.fields.title,
            "body": payload.fields.body
        },
        "topic": "push-msg"
    };

    const result = await adminConfig.send(messagePayload);

    return result;
}

exports.sendNotifToDB = async(payload) => {
    const payloadBody = {
        title: payload.fields.title,
        body: payload.fields.body,
        user_id: payload.fields.user_id,
    }
    return await notificationRepo.save(payloadBody);
}

exports.getNotifByUser = async(user_id) => {
    return await notificationRepo.findNotificationByUserId(user_id);
}