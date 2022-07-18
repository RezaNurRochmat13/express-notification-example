const notificationRepo = require('../repository/notif.repo.js');
const emailSvc = require('../service/email.service.js');

exports.createNotification = async(payload) => {
    const payloadBody = {
        title: payload.fields.title,
        body: payload.fields.body,
        email: payload.fields.email,
    }

    const sendingEmail = await emailSvc.sendEmail(payloadBody);

    if(sendingEmail != null) {
        return await notificationRepo.save(payloadBody);
    } else {
        return null;
    }

}

exports.getNotificationEmail = async(email) => {
    return await notificationRepo.findNotificationByEmail(email);
}