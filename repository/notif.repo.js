const db = require('../models/index.js');
const Notification = db.notification;

exports.save = async(notif) => {
    return await Notification.create(notif);
}

exports.findNotificationByUserId = async(userId) => {
    return await Notification.findAll({where: {user_id: userId}});
}