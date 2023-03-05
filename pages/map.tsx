import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries: any = ['places'];
const mapContainerStyle = {
  height: '95vh',
  width: '100vw',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 40.73,
  lng: -73.93,
};

export default function Map(values) {

  const { 
    latCoord, 
    longCoord, 
    latitude, 
    longitude 
  } = values;

  const [desktop, setDesktop] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyBEQ-ARtxsdwKqfkMjCxo4RF4YN3k1xP5g`,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef<any>(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return;
  if (!isLoaded) return;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          transform: desktop ? 'translateY(0px)' : 'translate(10px, 502px) scale(1.07, 1.03)'
        }}
      >
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
            />
          ))}
          <Marker
            position={{
              lat: 40.73,
              lng: -73.99,
            }}
          />
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
            }}
          />
          <Marker
            position={{
              lat: parseFloat(latCoord) - parseFloat(latCoord) * 2,
              lng: parseFloat(longCoord) + 180,
            }}
          />
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>Dropped Pin</h2>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </>
  );
}
