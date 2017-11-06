const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.topicNotifications = functions.https.onRequest((req, res) => {
    
    // Contentful will send the entry data as the request body
    const lesson = req.body.fields

    // Message details for end user
    const payload = {
        notification: {
            title: 'New Lesson Posted',
            body: `AngularFirebase.com posted a new lesson called ${lesson.title}`,
            icon: 'https://goo.gl/Fz9nrQ'
          }
    }

    return admin.messaging().sendToTopic(topic, payload)
        .then(_ => {
            // successful response
            res.status(200).send('Lesson subscribers have been notified')
        })
        .catch(err => {
            res.status(400).send('Messages failed to send')
        });
});
