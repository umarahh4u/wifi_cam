import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/colors";

function Instructions() {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.text, styles.textTitle]}>Connection Details</Text>
      <Text style={styles.text}>
        1) Connection the model of power, the red light flash, waiting for
        connection on the model phone{" "}
      </Text>
      <Text style={styles.text}>
        2) Click on the cell phone settings" Options, open the Wifi, find a
        network wifi list, click connect untill connected", and then exit the
        settings option.
      </Text>
      <Text style={styles.text}>
        3) Open the software, click "START" button.
      </Text>
    </View>
  );
}

export default Instructions;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: Colors.primary50,
    padding: 15,
    position: "relative",
  },
  textTitle: {
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 24,
  },

  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});
