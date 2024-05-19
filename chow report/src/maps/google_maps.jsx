import React, { useEffect, useRef } from 'react';
import { MAPS_API_KEY } from '../../credentials.js';

const Google_Maps = () => {
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const loadGoogleMapsScript = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onerror = () => {
      console.error("Google Maps script failed to load.");
    };

    window.initMap = initMap;

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  };

  const initMap = () => {
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 20.6763989, lng:  -103.3479102 },
      zoom: 9,
      mapTypeControl: false,
      streetViewControl: false,
    });

    mapInstanceRef.current = map;
    infoWindowRef.current = new google.maps.InfoWindow();
  };

  const handleLocationError = (browserHasGeolocation, pos) => {
    infoWindowRef.current.setPosition(pos);
    infoWindowRef.current.setContent(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindowRef.current.open(mapInstanceRef.current);
  };

  useEffect(() => {
    const cleanupScript = loadGoogleMapsScript();
    return () => {
      if (cleanupScript) cleanupScript();
    };
  }, []);

  const handlePanToLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
  
          // Remove any existing marker
          if (infoWindowRef.current) {
            infoWindowRef.current.close();
            infoWindowRef.current = null;
          }
  
          // Create a marker at the user's current location
          const marker = new google.maps.Marker({
            position: pos,
            map: mapInstanceRef.current,
            title: "You are here!",
          });
  
          // Set map center and zoom
          mapInstanceRef.current.setCenter(pos);
          mapInstanceRef.current.setZoom(15); // Zoom to a specific level, e.g., 15
  
          // Create and open an info window
          const infoWindow = new google.maps.InfoWindow({
            content: "You are here!",
          });
          infoWindow.open(mapInstanceRef.current, marker);
  
          // Store the infoWindow reference
          infoWindowRef.current = infoWindow;
        },
        () => {
          handleLocationError(true, mapInstanceRef.current.getCenter());
        }
      );
    } else {
      handleLocationError(false, mapInstanceRef.current.getCenter());
    }
  };
  
  return (
<div style={{ position: 'relative', width: '100%', height: '50vh'}}>
      <div id="map" ref={mapRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius:50 }} />
      <button
        onClick={handlePanToLocation}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out"
      >
        Pan to Current Location
      </button>
    </div>
  );
};

export default Google_Maps;
