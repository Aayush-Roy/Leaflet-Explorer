// geocoding.js

const axios = require('axios');

// Replace with your Google Maps API key if using Google Maps
const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // or use Nominatim without a key

// Function to get coordinates from Google Maps API
async function getCoordinatesFromGoogle(location) {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${googleMapsApiKey}`);
    
    if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
    }
    throw new Error('Location not found');
}

// Function to get coordinates from Nominatim (OpenStreetMap)
async function getCoordinatesFromNominatim(location) {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
    
    if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    }
    throw new Error('Location not found');
}

// Main function to get coordinates based on the selected method
async function getCoordinates(location, useGoogleMaps = true) {
    if (useGoogleMaps) {
        return await getCoordinatesFromGoogle(location);
    } else {
        return await getCoordinatesFromNominatim(location);
    }
}

module.exports = { getCoordinates };
