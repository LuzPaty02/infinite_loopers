import firebase_admin
from firebase_admin import credentials, db

def initialize_firebase():
    if not firebase_admin._apps:
        cred = credentials.Certificate("chow report/backend/chow-report-firebase-adminsdk-zqlv8-7c53d0a076.json")
        firebase_admin.initialize_app(cred, {
            'databaseURL': 'https://chow-report.firebaseio.com'
        })
        print("Firebase initialized")
    else:
        print("Firebase already initialized")

initialize_firebase()

