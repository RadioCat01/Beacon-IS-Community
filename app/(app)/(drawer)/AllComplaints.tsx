import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import app from "../../../lib/firebase-config";
import { useSession } from "@/context";

interface Complaint {
  id: string;
  contact: string;
  type: string;
}

export default function AllComplaints() {
  const disasters = [
    { name: "Flood", image: require("../../../assets/disasters/flood.jpg") },
    {
      name: "Earthquake",
      image: require("../../../assets/disasters/earthquake.jpg"),
    },
    {
      name: "Hurricane",
      image: require("../../../assets/disasters/hurricane.jpg"),
    },
    {
      name: "Wildfire",
      image: require("../../../assets/disasters/wildfire.jpg"),
    },
    {
      name: "Landslide",
      image: require("../../../assets/disasters/landslide.jpg"),
    },
    {
      name: "Drought",
      image: require("../../../assets/disasters/drought.jpg"),
    },
  ];

  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const { user } = useSession();
  const userId = user?.uid;

  useEffect(() => {
    const db = getDatabase(app);
    const complaintsRef = ref(db, "complaints");

    onValue(complaintsRef, (snapshot) => {
      const data = snapshot.val();
      const complaintArray: Complaint[] = data
        ? Object.keys(data)
            .map((key) => ({ id: key, ...data[key] }))
            .filter((item) => item.user === userId) // Filter by userId
        : [];

      setComplaints(complaintArray);
    });
  }, [userId]);

  const handleDelete = (id: string) => {
    const db = getDatabase(app);
    const complaintRef = ref(db, `complaints/${id}`);
    remove(complaintRef).then(() =>
      Alert.alert("Success", "Complaint deleted successfully")
    );
  };

  return (
    <View style={styles.container}>
      {complaints.some((item) => item.user === userId) ? (
        <FlatList
          data={complaints}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>Contact Number : {item.contact}</Text>
              <Text style={styles.text}>Disaster Type : {item.type}</Text>

              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonHover,
                ]}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
  },
  listItem: {
    backgroundColor: "#2A2A2A",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#E74C3C",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    alignItems: "center",
  },
  buttonHover: {
    backgroundColor: "#C0392B",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
