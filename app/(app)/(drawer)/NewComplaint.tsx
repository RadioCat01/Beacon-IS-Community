import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { getDatabase, ref, push, set } from "firebase/database";
import app from "../../../lib/firebase-config";
import { useSession } from "@/context";

export default function NewComplaint() {
  const [contactNumber, setContactNumber] = useState<string>("");
  const [complaintType, setComplaintType] = useState<string>("");

  const { user } = useSession();

  const userId = user?.uid;

  const handleSubmit = () => {
    if (!contactNumber || !complaintType) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const db = getDatabase(app);
    const complaintsRef = ref(db, "complaints");
    const newComplaintRef = push(complaintsRef);

    set(newComplaintRef, {
      user: userId,
      contact: contactNumber,
      type: complaintType,
      username: user?.displayName,
    })
      .then(() => {
        Alert.alert("Success", "Complaint submitted successfully");
        setContactNumber("");
        setComplaintType("");
      })
      .catch((error: Error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View className="mb-10">
        <Image
          source={require("../../../assets/images/pngwing.com.png")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            borderRadius: 100,
            borderColor: "#000",
            borderWidth: 1,
            marginBottom: 20,
          }}
        />
        <Text className="text-center font-bold text-3xl text-gray-700">
          Create a New Complaint!
        </Text>
      </View>
      <View>
        <Text style={styles.labelText}>Contact Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter contact number"
          placeholderTextColor="#999"
          value={contactNumber}
          onChangeText={(text) => setContactNumber(text.replace(/[^0-9]/g, ""))}
        />

        <Text style={styles.labelText}>Complaint Type</Text>
        <RNPickerSelect
          onValueChange={setComplaintType}
          items={[
            { label: "Flood", value: "Flood" },
            { label: "Landslide", value: "Landslide" },
            { label: "Tornado", value: "Tornado" },
            { label: "Earthquake", value: "Earthquake" },
            { label: "Hurricane", value: "Hurricane" },
            { label: "Heatwave", value: "Heatwave" },
            { label: "Wildfire", value: "Wildfire" },
          ]}
          placeholder={{ label: "Select complaint type", value: null }}
          style={{
            inputAndroid: styles.inputAndroid,
            inputIOS: styles.inputIOS,
          }}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonHover,
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#404040",
    marginBottom: 15,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#FFF",
    color: "#404040",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 40,
    width: "50%",
    alignSelf: "center",
  },
  buttonHover: {
    backgroundColor: "#357ABD",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});
