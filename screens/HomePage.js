import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/colors";
import OutlineButton from "../components/UI/OutlineButton";

function HomePage({ navigation }) {
  function handleNext() {
    navigation.navigate("Start");
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        A project on the Design and implementation of a mini uav (drone ), with
        flight data record
      </Text>
      <Text style={styles.text}>By</Text>
      <Text style={styles.text}>Abdul-hafeez Afolayan</Text>
      <Text style={[styles.text, styles.mb]}>Mat no: 2018/2/00387EE</Text>
      <Image
        style={[styles.logo, styles.logoLeft]}
        source={require("../assets/fut.jpeg")}
      />
      <Image
        style={[styles.logo, styles.logoRight]}
        source={require("../assets/poly.jpeg")}
      />
      <OutlineButton onPress={handleNext}>NEXT</OutlineButton>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    padding: 10,
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 32,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  mb: {
    marginBottom: 20,
  },
  logoLeft: {
    left: 80,
  },
  logoRight: {
    right: 80,
  },
});
