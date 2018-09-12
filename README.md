# web-push
Web Push notifications with Firebase

1. Create Project in Farebase
Go to "Add Firebase to your web app" to see how to Initialize Firebase. Grab the code and replace config in index.html and firebase-messaging-sw.js
2. Move the firebase-messaging-sw.js to localhost/firebase-messaging-sw.js
3. Load localhost/web-push/index.html and get the token
4. Send message by Postman

curl -X POST -H "Authorization: key=<API_ACCESS_KEY>" -H "Content-Type: application/json" \
   -d '{
  "data": {
    "notification": {
        "title": "Notification Title",
        "body": "This is an FCM Notification",
        "icon": "logo.png",
    }
  },
  "to": "<LEGACY_SERVER_KEY>"
}' https://fcm.googleapis.com/fcm/send
