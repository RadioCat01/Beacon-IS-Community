import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import MapView, { UrlTile } from "react-native-maps";
import axios from "axios";

const WeatherScreen = () => {
  const [weather, setWeather] = useState<{
    name?: string;
    sys?: { country?: string };
    main?: { temp?: number; feels_like?: number; humidity?: number; pressure?: number };
    weather?: { description?: string }[];
    wind?: { speed?: number };
    visibility?: number;
  } | null>(null);
  
  const [forecast, setForecast] = useState<{
    hourly?: { dt: number; temp: number; weather?: { description?: string }[] }[];
    daily?: { dt: number; temp: { day: number }; weather?: { description?: string }[] }[];
    current?: { sunrise: number; sunset: number };
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "eb3d413eadd68e7a6b18919fb9969342";
  const LAT = 6.7194; // Sabaragamuwa Latitude
  const LON = 80.7885; // Sabaragamuwa Longitude

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch current weather
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
        );
        setWeather(weatherResponse.data);

        // Fetch detailed forecast (hourly and daily)
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&exclude=minutely&appid=${API_KEY}&units=metric`
        );
        setForecast(forecastResponse.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#2563eb" />;
  }

  const TILE_URL = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`;

  // Helper function to format timestamps
  const formatDate = (timestamp: number | undefined) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Weather Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: LAT,
          longitude: LON,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        <UrlTile urlTemplate={TILE_URL} zIndex={1} />
      </MapView>

      {/* Current Weather Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {weather?.name}, {weather?.sys?.country}
        </Text>
        <Text style={styles.text}>
          🌡 Temperature: {weather?.main?.temp}°C
        </Text>
        <Text style={styles.text}>
          ☁ Weather: {weather?.weather?.[0]?.description || "N/A"}
        </Text>
        <Text style={styles.text}>
          💨 Wind Speed: {weather?.wind?.speed} m/s
        </Text>
        <Text style={styles.text}>
          🌡 Feels Like: {weather?.main?.feels_like}°C
        </Text>
        <Text style={styles.text}>
          💧 Humidity: {weather?.main?.humidity}%
        </Text>
        <Text style={styles.text}>
          ⚡ Pressure: {weather?.main?.pressure} hPa
        </Text>
        <Text style={styles.text}>
          👀 Visibility: {((weather?.visibility ?? 0) / 1000).toFixed(2)} km
        </Text>
      </View>

      {/* Hourly Forecast Section */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hourly Forecast</Text>
        <FlatList
          horizontal
          data={forecast?.hourly?.slice(0, 12)} // Show next 12 hours
          keyExtractor={(item) => item.dt.toString()}
          renderItem={({ item }) => (
            <View style={styles.forecastCard}>
              <Text style={styles.forecastTime}>
                {new Date(item.dt * 1000).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </Text>
              <Text style={styles.forecastTemp}>
                {item.temp.toFixed(1)}°C
              </Text>
              <Text style={styles.forecastDesc}>
                {item.weather?.[0]?.description || "N/A"}
              </Text>
            </View>
          )}
        />
      </View> */}

      {/* Daily Forecast Section */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Forecast</Text>
        <FlatList
          horizontal
          data={forecast?.daily?.slice(0, 7)} // Show next 7 days
          keyExtractor={(item) => item.dt.toString()}
          renderItem={({ item }) => (
            <View style={styles.forecastCard}>
              <Text style={styles.forecastTime}>
                {new Date(item.dt * 1000).toLocaleDateString([], {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
              <Text style={styles.forecastTemp}>
                {item.temp.day.toFixed(1)}°C
              </Text>
              <Text style={styles.forecastDesc}>
                {item.weather?.[0]?.description || "N/A"}
              </Text>
            </View>
          )}
        />
      </View> */}

      {/* Detailed Metrics Table */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detailed Metrics</Text>
        <ScrollView horizontal>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Metric</Text>
              <Text style={styles.tableHeader}>Value</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Pressure</Text>
              <Text style={styles.tableCell}>{weather?.main?.pressure} hPa</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Visibility</Text>
              <Text style={styles.tableCell}>
                {((weather?.visibility ?? 0) / 1000).toFixed(2)} km
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Sunrise</Text>
              <Text style={styles.tableCell}>
                {formatDate(forecast?.current?.sunrise)}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Sunset</Text>
              <Text style={styles.tableCell}>
                {formatDate(forecast?.current?.sunset)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  map: {
    height: 300,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: "rgba(100, 149, 237, 0.6)",
    position: "relative",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginTop: 5,
    textAlign: "center",
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  forecastCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  forecastTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  forecastTemp: {
    fontSize: 18,
    color: "#e74c3c",
    marginTop: 5,
  },
  forecastDesc: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 5,
  },
  table: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
});

export default WeatherScreen;