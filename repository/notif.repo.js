const db = require('../models/index.js');
const Notification = db.notification;

exports.save = async(notif) => {
    return await Notification.create(notif);
}

exports.findNotificationByEmail = async(email) => {
    return await Notification.findAll({
        where: {email},
        order: [
            ['updatedAt', 'DESC']
        ]
    });
}