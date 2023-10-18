import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/colors";
import Button from "../components/UI/Button";

function StartDept({ navigation }) {
  function handleInstruction() {
    navigation.navigate("Instructions");
  }

  function handleMainPage() {
    navigation.navigate("MainPage");
  }

  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/department.jpeg")}
      />
      <View style={styles.buttonRight}>
        <Button onPress={handleMainPage}>Start</Button>
      </View>

      <View style={styles.buttonLeft}>
        <Button onPress={handleInstruction}>Instructions</Button>
      </View>
    </View>
  );
}

export default StartDept;

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
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  buttonLeft: {
    position: "absolute",
    left: 60,
    bottom: 40,
  },
  buttonRight: {
    position: "absolute",
    right: 60,
    top: 50,
    width: 130,
    height: 100,
  },
});
