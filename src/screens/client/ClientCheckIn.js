import {
  Text,
  Layout as LayoutB,
  useTheme,
  Spinner,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Button from "../../components/Button";
import * as Location from "expo-location";
import Layout from "../../layouts/Index";

var mapStyle = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2196f3",
      },
    ],
  },
];

export default function ClientCheckIn({ navigation }) {
  const theme = useTheme();

  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [userInitialLocation, setUserInitialLocation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      setLoading(false);
      setUserLocation(coords);
      setUserInitialLocation(coords);
    }
  };

  return (
    <Layout title="Check in" isBack navigation={navigation}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Check in to visit
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Confirm your location on the map below.
          </Text>
        </View>

        {locationServiceEnabled &&
          (loading ? (
            <LayoutB
              level="2"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner />
            </LayoutB>
          ) : (
            <MapView
              region={{
                latitude: userInitialLocation?.latitude,
                longitude: userInitialLocation?.longitude,
              }}
              // onRegionChange={(coords) => setUserLocation(coords)}
              style={{ flex: 1 }}
              customMapStyle={mapStyle}
            >
              <Marker
                provider={PROVIDER_GOOGLE}
                draggable
                title="Your current location"
                coordinate={userLocation}
                onDragEnd={(e) => setUserLocation(e.nativeEvent.coordinate)}
              />
            </MapView>
          ))}
      </View>

      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button>Check in</Button>
      </View>
    </Layout>
  );
}
