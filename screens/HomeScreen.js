import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Service from "../components/Service";
import { auth } from "../firebase";

function HomeScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text> Hi {auth.currentUser?.email}!</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Servizi per il membro</Text>
        <View style={styles.items}>
          <Service text={"Google"} url={"https://google.com"} />
          <Service text={"Yahoo"} url={"https://yahoo.com"} />
          <Service text={"Facebook"} url={"https://facebook.com"} />
          <Service text={"Instagram"} url={"https://instagram.com"} />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
