import React from 'react';
"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import {MAPS_API_KEY} from '../credentials'

const Google_Maps = () => {
    const position= { lat: 22.54992, lng: 0 };
  return (
    <APIProvider apiKey={MAPS_API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={position}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
      </Map>
    </APIProvider>
  );
};

export default Google_Maps;