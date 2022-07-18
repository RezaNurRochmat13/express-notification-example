const notificationRepo = require('../repository/notif.repo.js');

exports.createNotification = async(payload) => {
    const payloadBody = {
        title: payload.fields.title,
        body: payload.fields.body,
        email: payload.fields.email,
    }
    return await notificationRepo.save(payloadBody);
}

exports.getNotificationEmail = async(email) => {
    return await notificationRepo.findNotificationByEmail(email);
}