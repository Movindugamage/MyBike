// This has errors. fix this

import React, { useState } from "react";
import { useEffect } from "react";
import MapComponent from "../components/MapComponent.jsx";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Import Google Maps components
import "../styles/FindBicycle.css"; // Ensure the CSS file path is correct
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx"; // Import Layout component

function FindBicycle() {
  const [center, setCenter] = useState({
    lat: 6.586224130521862,
    lng: 79.97086002113106,
  });
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      if (window.google) {
        const input = document.getElementById("place-picker");
        const autocompleteInstance = new google.maps.places.Autocomplete(
          input,
          {
            fields: ["geometry", "formatted_address", "name"],
          }
        );

        autocompleteInstance.addListener("place_changed", () => {
          const place = autocompleteInstance.getPlace();
          if (place.geometry) {
            const location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            setCenter(location); // Update the center state
          } else {
            alert("No details available for the entered location.");
          }
        });

        setAutocomplete(autocompleteInstance);
      }
    };

    loadGoogleMapsAPI();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Find A Location</h2>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <MapComponent />
      </div>
    </div>
  );
}

export default FindBicycle;
