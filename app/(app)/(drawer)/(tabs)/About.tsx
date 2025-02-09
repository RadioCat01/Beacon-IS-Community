import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Modal, Image } from "react-native";

const Home: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
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

  // Handle image upload using react-native-image-picker
  const handleFileChange = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };
    // launchImageLibrary(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorMessage) {
    //     console.log('ImagePicker Error: ', response.errorMessage);
    //   } else if (response.assets && response.assets.length > 0) {
    //     const source = { uri: response.assets[0].uri };
    //     setFormData((prev) => ({ ...prev, photo: source.uri }));
    //   }
    // });
  };

  // Handle form submission
  const handleSubmit = () => {
    setIsSubmitted(true);
    // Reset form after submission
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
      setIsFormOpen(false);
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* 🔴 Hero Section with Emergency Contact Info */}
      <View style={styles.heroSection}>
        <Text style={styles.title}>Report Disasters & Help Save Lives</Text>
        <Text style={styles.subtitle}>
          Your reports help emergency teams respond faster and save communities.
        </Text>
        <Text style={styles.emergencyContact}>Emergency Hotline: +94 112 456 789</Text>
      </View>

      {/* 🔵 Key Statistics & Impact Information */}
      <View style={styles.statisticsSection}>
        <Text style={styles.sectionTitle}>Impact of Your Reports</Text>
        <View style={styles.highlightedBoxesContainer}>
          <View style={[styles.highlightedBox, { backgroundColor: '#e7f3fe' }]}>
            <Text style={styles.boxTitle}>1,250+</Text>
            <Text style={styles.boxSubtitle}>Disasters Reported</Text>
          </View>
          <View style={[styles.highlightedBox, { backgroundColor: '#fef6e7' }]}>
            <Text style={styles.boxTitle}>95%</Text>
            <Text style={styles.boxSubtitle}>Cases Resolved</Text>
          </View>
          <View style={[styles.highlightedBox, { backgroundColor: '#e7f8f2' }]}>
            <Text style={styles.boxTitle}>50% Faster</Text>
            <Text style={styles.boxSubtitle}>Emergency Response Time</Text>
          </View>
        </View>
      </View>

      {/* 🟢 Guidelines for Effective Reporting */}
      <View style={styles.guidelinesSection}>
        <Text style={styles.sectionTitle}>How to Report Effectively</Text>
        <Text style={styles.step}>Step 1: Provide detailed location and type of disaster.</Text>
        <Text style={styles.step}>Step 2: Attach clear photos if possible.</Text>
        <Text style={styles.step}>Step 3: Provide a valid contact number for responders.</Text>
      </View>

      {/* 🟠 Real-Time Disaster Updates (Static UI for now) */}
      <View style={styles.updatesSection}>
        <Text style={styles.sectionTitle}>Real-Time Disaster Updates</Text>
        <View style={styles.parallelBoxesContainer}>
          <View style={[styles.parallelBox, { backgroundColor: '#fff2e6' }]}>
            <Text style={styles.updateTitle}>Flood Alert - Colombo</Text>
            <Text style={styles.updateSubtitle}>⚠️ High Risk</Text>
          </View>
          <View style={[styles.parallelBox, { backgroundColor: '#f0f8ff' }]}>
            <Text style={styles.updateTitle}>Landslide Warning - Kandy</Text>
            <Text style={styles.updateSubtitle}>⚠️ Moderate Risk</Text>
          </View>
          <View style={[styles.parallelBox, { backgroundColor: '#f9f9f9' }]}>
            <Text style={styles.updateTitle}>Tsunami Alert - Galle</Text>
            <Text style={styles.updateSubtitle}>⚠️ High Risk</Text>
          </View>
        </View>
      </View>

      {/* 🔴 Disaster Reporting Form Section */}
      {!isFormOpen && (
        <View style={styles.formPrompt}>
          <Text style={styles.promptText}>Your Information is Valuable</Text>
          <Text style={styles.promptSubtitle}>
            Inform us about disasters in your area. Your contribution helps us respond quickly.
          </Text>
          <TouchableOpacity onPress={() => setIsFormOpen(true)} style={styles.button}>
            <Text style={styles.buttonText}>Inform About Disaster</Text>
          </TouchableOpacity>
        </View>
      )}

    
      <Modal visible={isFormOpen} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.formTitle}>Disaster Incident Form</Text>
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
              style={styles.input}
              placeholder="Description of Disaster"
              value={formData.description}
              onChangeText={(text) => handleInputChange("description", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
            />

            
            <View style={styles.imageUploadContainer}>
              <TextInput
                style={styles.imageUploadInput}
                placeholder="Upload Photo (Optional)"
                editable={false}
                value={formData.photo ? "Photo selected" : ""}
              />
              <TouchableOpacity onPress={handleFileChange} style={styles.imageUploadIcon}>
              </TouchableOpacity>
            </View>

            <Button title="Submit" onPress={handleSubmit} />
            <TouchableOpacity onPress={() => setIsFormOpen(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {isSubmitted && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>Successfully Submitted!</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;

// Styles
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heroSection: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#7f8c8d",
    lineHeight: 24,
  },
  emergencyContact: {
    fontSize: 18,
    textAlign: "center",
    color: "#e74c3c",
    marginTop: 15,
    fontWeight: '600',
  },
  statisticsSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  highlightedBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  highlightedBox: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  boxSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  guidelinesSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  step: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 12,
    paddingLeft: 10,
  },
  updatesSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  parallelBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  parallelBox: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e67e22',
    textAlign: 'center',
  },
  updateSubtitle: {
    fontSize: 14,
    color: '#e67e22',
    marginTop: 5,
    textAlign: 'center',
  },
  formPrompt: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  promptText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  promptSubtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#2ecc71',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
  },
  successMessage: {
    backgroundColor: '#2ecc71',
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
  imageUploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  imageUploadInput: {
    flex: 1,
    height: 50,
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  imageUploadIcon: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#e7f3fe",
    borderRadius: 8,
  },
  uploadIcon: {
    width: 24,
    height: 24,
  },
});
