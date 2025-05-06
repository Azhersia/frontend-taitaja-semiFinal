'use client'
import React from 'react'
import {fetcher} from '@/lib/fetcher'

export default function page() {
    const [location, setLocation] = React.useState(null);
    const [address, setAddress] = React.useState(null);
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const data = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            };
            setLocation(data);
            console.log('Location data:', data);
            // Skicka till PHP-backend
            try{
                //await fetcher.post('/api/location', data)
            }catch(err) {
                console.error('Error sending location data:', err);
            }
          },
          (err) => console.error('Geolocation error', err)
          ,{enableHighAccuracy: true, maximumAge: 0, timeout: 5000}
        );
      };
      async function getAddressFromCoords(lat, lng) {
        const apiKey = 'YOUR_API_KEY';
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
        );
      
        const data = await res.json();
      
        if (data.status === 'OK') {
            setAddress(data.results[0].formatted_address);
          console.log('Address:', data.results[0].formatted_address);
          return data.results[0].formatted_address;
        } else {
          throw new Error('Geocoding failed: ' + data.status);
        }
      }
  return (
    <div>
        <button onClick={getLocation}>Get my location</button>
        <button onClick={getAddressFromCoords}>Get my location</button>
    </div>
  )
}