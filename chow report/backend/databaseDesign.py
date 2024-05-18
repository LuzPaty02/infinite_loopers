import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("infinite_loopers/chow report/backend/chow-report-firebase-adminsdk-zqlv8-7c53d0a076.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://chow-report.firebaseio.com'
})

ref = db.reference('/')
ref.set({
    'users': {},
    'posts': {},
    'comments': {}
})