import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NavigationProp } from '@react-navigation/native';

const ReportForm = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [formData, setFormData] = useState<{
    name: string;
    address: string;
    location: string;
    description: string;
    phoneNumber: string;
    photo: string | null;
  }>({
    name: "",
    address: "",
    location: "",
    description: "",
    phoneNumber: "",
    photo: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle text input changes
  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled && pickerResult.assets.length > 0) {
      setFormData((prev) => ({
        ...prev,
        photo: pickerResult.assets[0].uri,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    setIsSubmitted(true);
    setFormData({
      name: "",
      address: "",
      location: "",
      description: "",
      phoneNumber: "",
      photo: null,
    });
    setTimeout(() => {
      setIsSubmitted(false);
      navigation.goBack(); // Navigate back to the previous screen
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disaster Incident Form</Text>

      {/* Form Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => handleInputChange("address", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location of Incident"
        value={formData.location}
        onChangeText={(text) => handleInputChange("location", text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description of Disaster"
        value={formData.description}
        onChangeText={(text) => handleInputChange("description", text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChangeText={(text) => handleInputChange("phoneNumber", text)}
        keyboardType="phone-pad"
      />

      {/* Image Upload */}
      <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploadContainer}>
        <Text style={styles.imageUploadText}>
          {formData.photo ? "Photo Selected" : "Tap to Select Photo"}
        </Text>
      </TouchableOpacity>

      {/* Display Selected Image */}
      {formData.photo && (
        <Image source={{ uri: formData.photo }} style={styles.selectedImage} />
      )}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>

      {/* Success Message */}
      {isSubmitted && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>Successfully Submitted!</Text>
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  imageUploadContainer: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  imageUploadText: {
    fontSize: 16,
    color: "#555",
  },
  selectedImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  successMessage: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  successText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ReportForm;