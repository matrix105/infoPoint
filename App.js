import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Service from "./components/Service";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Servizi per il membro</Text>
        <View style={styles.items}>
          <Service text={"Google"} url={'https://google.com'}/>
          <Service text={"Yahoo"} url={'https://yahoo.com'}/>
          <Service text={"Facebook"} url={'https://facebook.com'}/>
        </View>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  wrapper: { 
    paddingTop: 80,
     paddingHorizontal: 20
     },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30,
  },
});
