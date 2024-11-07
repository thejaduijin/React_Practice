import React, { useState, useEffect } from 'react';

const GetLocation = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        // Get the current position of the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error("Error getting location: ", error);
                }
            );
        }
    }, []);

    if (!location) {
        return <p>Loading your location...</p>;
    }

    // Create a dynamic Google Maps link with the user's location
    const googleMapsUrl = `https://maps.google.com/?q=${location.latitude},${location.longitude}`;

    return (
        <div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View in map
            </a>
        </div>
    );
};

export default GetLocation;
