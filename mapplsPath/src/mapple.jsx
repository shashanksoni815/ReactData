import React, { useState, useEffect, useRef } from 'react';
import { Navigation, MapPin, Clock, Activity, Search, Loader, AlertCircle } from 'lucide-react';

const MapplsDirectionApp = () => {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [routeInfo, setRouteInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const currentMarker = useRef(null);
  const destMarker = useRef(null);
  const routePolyline = useRef(null);

  // Replace with your actual keys from Mappls Dashboard
  const MAPPLS_MAP_KEY = '98ec020134e7300e24de04624ea2ddae';  // Main API Key for SDK
  const MAPPLS_REST_KEY = '98ec020134e7300e24de04624ea2ddae'; // REST API Key (can be same as MAP_KEY)

  // Load Mappls SDK
  useEffect(() => {
    if (document.getElementById('mappls-sdk')) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'mappls-sdk';
    script.src = `https://apis.mappls.com/advancedmaps/api/${MAPPLS_MAP_KEY}/map_sdk?layer=vector&v=3.0`;
    script.async = true;
    script.onload = () => {
      console.log('Mappls SDK loaded successfully');
      setMapLoaded(true);
    };
    script.onerror = () => {
      setError('Failed to load Mappls SDK. Please check your Map Key.');
    };

    document.body.appendChild(script);

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = `https://apis.mappls.com/advancedmaps/api/${MAPPLS_MAP_KEY}/map_sdk?layer=vector&v=3.0`;
    document.head.appendChild(style);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapLoaded || map || !window.mappls) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });

        try {
          const mapInstance = new window.mappls.Map(mapRef.current, {
            center: [latitude, longitude],
            zoom: 14,
            traffic: true,
            geolocation: true
          });

          // Add current location marker
          currentMarker.current = new window.mappls.Marker({
            map: mapInstance,
            position: [latitude, longitude],
            fitbounds: true,
            icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'
          });

          setMap(mapInstance);
          console.log('Map initialized successfully');
        } catch (err) {
          console.error('Map initialization error:', err);
          setError('Failed to initialize map. Please check your API key.');
        }
      },
      (err) => {
        console.warn('Location access denied:', err);
        setError('Location access denied. Using default location (India Gate, Delhi).');
        
        const defaultLoc = { lat: 28.6129, lng: 77.2295 };
        setCurrentLocation(defaultLoc);

        try {
          const mapInstance = new window.mappls.Map(mapRef.current, {
            center: [defaultLoc.lat, defaultLoc.lng],
            zoom: 13,
            traffic: true
          });

          currentMarker.current = new window.mappls.Marker({
            map: mapInstance,
            position: [defaultLoc.lat, defaultLoc.lng],
            fitbounds: true,
            icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'
          });

          setMap(mapInstance);
        } catch (err) {
          console.error('Map initialization error:', err);
          setError('Failed to initialize map. Please check your API key.');
        }
      }
    );
  }, [mapLoaded, map]);

  // Autosuggest API - Search places
  const searchPlace = async (query) => {
    if (!query || query.length < 3) {
      setSearchResults([]);
      return;
    }

    try {
      // Using Mappls Autosuggest API
      const response = await fetch(
        `https://atlas.mappls.com/api/places/search/json?query=${encodeURIComponent(query)}&access_token=${MAPPLS_REST_KEY}`
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.suggestedLocations && data.suggestedLocations.length > 0) {
        setSearchResults(data.suggestedLocations.slice(0, 5));
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error('Search error:', err);
      // Don't show error for search, just clear results
      setSearchResults([]);
    }
  };

  // Get directions with traffic
  const getDirections = async (result) => {
    if (!currentLocation) {
      setError('Current location not available');
      return;
    }

    setLoading(true);
    setError('');
    setDestination(result.placeName);
    setSearchResults([]);

    try {
      let destLat, destLng;
      
      // Get coordinates from result
      if (result.latitude && result.longitude) {
        destLat = parseFloat(result.latitude);
        destLng = parseFloat(result.longitude);
      } else if (result.lat && result.lng) {
        destLat = parseFloat(result.lat);
        destLng = parseFloat(result.lng);
      } else if (result.eLoc) {
        // Geocode the eLoc
        const geocodeResponse = await fetch(
          `https://atlas.mappls.com/api/places/geocode?address=${result.eLoc}&access_token=${MAPPLS_REST_KEY}`
        );
        
        if (!geocodeResponse.ok) {
          throw new Error('Geocoding failed');
        }
        
        const geocodeData = await geocodeResponse.json();
        
        if (geocodeData.copResults && geocodeData.copResults.length > 0) {
          const coords = geocodeData.copResults[0];
          destLat = parseFloat(coords.latitude || coords.lat);
          destLng = parseFloat(coords.longitude || coords.lng);
        }
      }

      if (!destLat || !destLng) {
        setError('Unable to get destination coordinates');
        setLoading(false);
        return;
      }

      // Get route with traffic using Route ETA API
      const routeUrl = `https://apis.mappls.com/advancedmaps/v1/${MAPPLS_REST_KEY}/route_eta/driving/${currentLocation.lng},${currentLocation.lat};${destLng},${destLat}?geometries=polyline&overview=full&steps=true`;
      
      console.log('Fetching route:', routeUrl);
      
      const routeResponse = await fetch(routeUrl);
      
      if (!routeResponse.ok) {
        throw new Error(`Route API error: ${routeResponse.status}`);
      }
      
      const routeData = await routeResponse.json();
      console.log('Route data:', routeData);
      
      if (routeData.routes && routeData.routes.length > 0) {
        const route = routeData.routes[0];
        const duration = Math.round(route.duration / 60);
        const distance = (route.distance / 1000).toFixed(2);
        const trafficDuration = route.duration_in_traffic ? Math.round(route.duration_in_traffic / 60) : duration;
        const trafficDelay = trafficDuration - duration;
        
        setRouteInfo({
          duration: duration,
          distance: distance,
          trafficDuration: trafficDuration,
          trafficDelay: Math.max(0, trafficDelay)
        });

        // Remove old route polyline
        if (routePolyline.current && map) {
          try {
            map.removeLayer(routePolyline.current);
          } catch (e) {
            console.log('Could not remove old route');
          }
        }

        // Draw new route
        if (route.geometry && window.mappls && window.mappls.Polyline) {
          const coordinates = decodePolyline(route.geometry);
          
          routePolyline.current = new window.mappls.Polyline({
            map: map,
            path: coordinates,
            strokeColor: '#2563eb',
            strokeOpacity: 0.8,
            strokeWeight: 6,
            fitbounds: true
          });
        }

        // Remove old destination marker
        if (destMarker.current) {
          try {
            destMarker.current.remove();
          } catch (e) {
            console.log('Could not remove old marker');
          }
        }

        // Add destination marker
        destMarker.current = new window.mappls.Marker({
          map: map,
          position: [destLat, destLng],
          fitbounds: true,
          icon_url: 'https://apis.mapmyindia.com/map_v3/2.png'
        });

        // Fit map to show entire route
        setTimeout(() => {
          if (map && map.fitbounds) {
            try {
              map.fitbounds([
                [currentLocation.lat, currentLocation.lng],
                [destLat, destLng]
              ]);
            } catch (e) {
              console.log('Could not fit bounds');
            }
          }
        }, 500);
      } else {
        setError('No route found. Please try a different destination.');
      }
    } catch (err) {
      console.error('Directions error:', err);
      setError(`Failed to get directions: ${err.message}. Please check your API keys.`);
    } finally {
      setLoading(false);
    }
  };

  // Polyline decoder for route geometry
  const decodePolyline = (encoded) => {
    const points = [];
    let index = 0;
    const len = encoded.length;
    let lat = 0;
    let lng = 0;

    while (index < len) {
      let b;
      let shift = 0;
      let result = 0;
      
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      
      const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lat += dlat;

      shift = 0;
      result = 0;
      
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      
      const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lng += dlng;

      points.push([lat / 1e5, lng / 1e5]);
    }

    return points;
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Navigation className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Mappls Navigator</h1>
          </div>
          
          {/* Search Box */}
          <div className="relative">
            <div className="flex items-center bg-white rounded-lg shadow-md">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search destination (e.g., India Gate, Connaught Place)"
                className="w-full p-3 text-gray-800 rounded-lg focus:outline-none"
                onChange={(e) => searchPlace(e.target.value)}
                disabled={!mapLoaded}
              />
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl z-20 max-h-80 overflow-y-auto">
                {searchResults.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 transition"
                    onClick={() => getDirections(result)}
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{result.placeName}</div>
                        <div className="text-sm text-gray-500 line-clamp-1">{result.placeAddress}</div>
                        {result.eLoc && (
                          <div className="text-xs text-blue-500 mt-1">📍 {result.eLoc}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {error && (
            <div className="mt-3 p-3 bg-red-100 text-red-700 rounded-lg text-sm flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>

      {/* Route Info */}
      {routeInfo && (
        <div className="bg-white shadow-md border-b z-10">
          <div className="max-w-7xl mx-auto p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Route to {destination}
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">Travel Time</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {routeInfo.trafficDuration} min
                </div>
                {routeInfo.trafficDelay > 0 && (
                  <div className="text-xs text-orange-600 mt-1">
                    +{routeInfo.trafficDelay} min delay
                  </div>
                )}
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <Navigation className="w-5 h-5" />
                  <span className="text-sm font-medium">Distance</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">{routeInfo.distance} km</div>
              </div>
              
              <div className={`${routeInfo.trafficDelay > 5 ? 'bg-red-50' : routeInfo.trafficDelay > 0 ? 'bg-orange-50' : 'bg-green-50'} p-4 rounded-lg`}>
                <div className={`flex items-center gap-2 ${routeInfo.trafficDelay > 5 ? 'text-red-600' : routeInfo.trafficDelay > 0 ? 'text-orange-600' : 'text-green-600'} mb-1`}>
                  <Activity className="w-5 h-5" />
                  <span className="text-sm font-medium">Traffic</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {routeInfo.trafficDelay > 5 ? 'Heavy' : routeInfo.trafficDelay > 0 ? 'Moderate' : 'Light'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map */}
      <div className="flex-1 relative">
        <div ref={mapRef} className="w-full h-full" />
        
        {loading && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-lg shadow-xl flex items-center gap-3">
              <Loader className="w-6 h-6 animate-spin text-blue-600" />
              <span className="text-gray-700 font-medium">Finding best route...</span>
            </div>
          </div>
        )}

        {!mapLoaded && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <Loader className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading Mappls Map...</p>
              <p className="text-sm text-gray-500 mt-2">Please wait...</p>
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!routeInfo && mapLoaded && !loading && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-xl max-w-md z-10">
          <p className="text-sm text-gray-600 text-center">
            <strong>🔍 Search for any destination</strong><br/>
            Get route, travel time, and real-time traffic info
          </p>
        </div>
      )}
    </div>
  );
};

export default MapplsDirectionApp;