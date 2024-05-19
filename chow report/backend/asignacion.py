import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

from clustering import fetch_coordinates_and_cluster

# Check if the app is already initialized
if not firebase_admin._apps:
    cred = credentials.Certificate("chow-report-firebase-adminsdk-zqlv8-7c53d0a076.json")
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://chow-report-default-rtdb.firebaseio.com'
    })

def fetch_and_assign_clusters(n_clusters):
    # Fetch the cluster centers
    cluster_centers = fetch_coordinates_and_cluster(n_clusters)

    # Get a database reference
    ref = db.reference('ong')

    # Fetch all users
    ongs = ref.get()

    # Assign each user to a cluster based on the distance to the cluster center
    for ong in ongs:
        nombre = ong.get('nombre')
        ubicacion = ong.get('reportes', [])
        for ong in ongs:
            latitud = ubicacion.get('latitud')
            longitud = ubicacion.get('longitud')

            # Calculate the distance to each cluster center
            distances = [((latitud - center[0])**2 + (longitud - center[1])**2)**0.5 for center in cluster_centers]

            # Assign the user to the nearest cluster
            cluster_index = distances.index(min(distances))

            # Update the user's cluster assignment in the database
            ref.child(nombre).child('busqueda').set(cluster_index)

fetch_and_assign_clusters(n_clusters=1)