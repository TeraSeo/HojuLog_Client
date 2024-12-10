import React, { useState, useRef } from "react";
import { Dialog, DialogContent, Typography, Box, Button, TextField } from "@mui/material";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const LocationDialog = ({
  open,
  onClose,
  googleMapsApiKey,
  onLocationSelected,
}) => {
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.978 }); 
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null); 
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);

  const handleSearch = () => {
    const placesService = new window.google.maps.places.PlacesService(mapRef.current);
    const query = searchBoxRef.current.value;

    const request = {
      query,
      fields: ["geometry", "place_id", "name", "formatted_address", "types"],
      locationBias: { lat: mapCenter.lat, lng: mapCenter.lng },
    };

    placesService.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setSearchResults(results);
        if (results[0].geometry.location) {
          setMapCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      } else {
        console.error("Error retrieving search results:", status);
      }
    });
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const geocoder = new window.google.maps.Geocoder();
  
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK && results.length > 0) {
        const place = results[0];
        setSelectedPlace({
          name: place.formatted_address, 
          formatted_address: place.formatted_address,
          geometry: {
            location: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            },
          },
          place_id: place.place_id,
          types: place.types,
        });
      } else {
        console.error("Geocoder failed due to:", status);
        setSelectedPlace({
          name: "Unknown Location",
          formatted_address: "Address information not available.",
          geometry: { location: { lat, lng } },
          place_id: null,
        });
      }
    });
  };
  

  const handleConfirm = () => {
    if (selectedPlace) {
      const locationUrl = selectedPlace.place_id
        ? `https://www.google.com/maps/place/?q=place_id:${selectedPlace.place_id}`
        : `https://www.google.com/maps?q=${selectedPlace.geometry.location.lat},${selectedPlace.geometry.location.lng}`;
      onLocationSelected(locationUrl); 
      onClose(); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
          Search for a place or click on the map
        </Typography>
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
          <TextField
            fullWidth
            inputRef={searchBoxRef}
            variant="outlined"
            placeholder="Search for a location"
            sx={{ mb: 2 }}
          />
          <Button onClick={handleSearch} variant="contained" color="primary" sx={{ mb: 2 }}>
            Search
          </Button>

          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={mapCenter}
            zoom={14}
            onLoad={(map) => (mapRef.current = map)}
            onClick={handleMapClick} 
          >
            {searchResults.map((place, index) => (
              <Marker
                key={index}
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }}
                onClick={() => setSelectedPlace(place)}
              />
            ))}

            {selectedPlace && (
              <InfoWindow
                position={{
                  lat: selectedPlace.geometry.location.lat,
                  lng: selectedPlace.geometry.location.lng,
                }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div>
                  <Typography variant="subtitle1">{selectedPlace.name}</Typography>
                  <Typography variant="body2">{selectedPlace.formatted_address}</Typography>
                  {selectedPlace.types && (
                    <Typography variant="body2" color="textSecondary">
                      {`Place Types: ${selectedPlace.types.join(", ")}`}
                    </Typography>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="primary" disabled={!selectedPlace}>
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LocationDialog;