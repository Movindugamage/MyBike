import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerF,
  InfoWindow,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import axios from "axios";
import { apiService } from "../services/apiService";
import { useAuthStore } from "../stores/authStore";

const places1 = ["places"];

const MapComponent = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [center, setCenter] = useState({
    lat: 6.9271,
    lng: 79.8612,
  });
  const searchBoxRef = useRef(null);
  const { token } = useAuthStore();

  const mapStyles = {
    height: "70vh",
    width: "100%",
  };

  console.log({ selectedPlace });

  // Fetch places from Spring Boot backend
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await apiService.get("/api/docking-station/any/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    const searchBox = searchBoxRef.current;
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const selectedPlace = places[0];
        const location = selectedPlace.geometry.location;

        // Update map center
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      }
    }
  };

  return (
    <div className="map-container">
      <LoadScript
        googleMapsApiKey="AIzaSyAqIJAO1gzb2K8meZ3 - rLo_jQJQTzz9oCQ"
        libraries={places1}
      >
        <div style={{ display: "flex", margin: "10px 0" }}>
          <StandaloneSearchBox
            onLoad={(ref) => (searchBoxRef.current = ref)}
            onPlacesChanged={handleSearch}
          >
            <input
              type="text"
              placeholder="Search for a location"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `300px`,
                height: `40px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
              }}
            />
          </StandaloneSearchBox>
        </div>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={center}
        >
          {/* Existing markers for saved places */}
          {places.map((place) => (
            <MarkerF
              key={place.id}
              position={{
                lat: place.latitude,
                lng: place.longitude,
              }}
              onClick={() => setSelectedPlace(place)}
            
            />
          ))}

          {selectedPlace && (
            <InfoWindow
              position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude,
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h3>{selectedPlace.availableBikes}</h3>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
