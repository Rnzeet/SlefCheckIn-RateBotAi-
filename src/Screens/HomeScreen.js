import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';

const HomeScreen = () => {
  const [hasReservation, setHasReservation] = useState(null);

  const reservationYes = () => {
      Alert.alert("Yay!", "You have a reservation!", [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
  };
  const reservationNo = () => {
      Alert.alert(
        "Oops!",
        "You don't have a reservation. Do you want to book an Reservation?",
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          // { text: "OK", onPress: () => Linking.openURL('https://www.wbhotels.in/') },
        ]
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do you have a reservation?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={reservationYes}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reservationNo}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
