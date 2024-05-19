import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from sklearn.cluster import KMeans
import pandas as pd

# Check if the app is already initialized
if not firebase_admin._apps:
    cred = credentials.Certificate("chow-report-firebase-adminsdk-zqlv8-7c53d0a076.json")
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://chow-report-default-rtdb.firebaseio.com'
    })

def fetch_coordinates_and_cluster(n_clusters):
    firebase_cred_path = "chow-report-firebase-adminsdk-zqlv8-7c53d0a076.json"
    database_url = "https://chow-report-default-rtdb.firebaseio.com"
    # Initialize the Firebase app if it's not already initialized
    if not firebase_admin._apps:
        cred = credentials.Certificate(firebase_cred_path)
        firebase_admin.initialize_app(cred, {
            'databaseURL': database_url
        })

    # Get a database reference
    ref = db.reference('usuario')

    # Fetch all users
    usuarios = ref.get()

    # Create an empty DataFrame
    data = []

    # Iterate through users and collect their report coordinates
    for usuario in usuarios:
        nombre = usuario.get('nombre')
        reportes = usuario.get('reportes', [])
        for reporte in reportes:
            coordenadas = reporte.get('coordenadas', {})
            latitud = coordenadas.get('latitud')
            longitud = coordenadas.get('longitud')
            data.append({'Usuario': nombre, 'Latitud': latitud, 'Longitud': longitud})

    # Create DataFrame from the data
    df = pd.DataFrame(data)

    # Create/Initialize the KMeans object
    km = KMeans(n_clusters=n_clusters, n_init="auto")

    # Do K-means clustering (assign each point in the dataset to a cluster)
    km.fit_predict(df[['Latitud', 'Longitud']])

    # Get the centers of the clusters
    centers = km.cluster_centers_

    # Return the cluster centers
    return centers


fetch_coordinates_and_cluster(
    n_clusters=1
)

print(fetch_coordinates_and_cluster(1))