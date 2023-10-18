import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";

function GallaryHome({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonControl}>
        <IconButton
          size={100}
          icon={"image"}
          onPress={() => navigation.navigate("ImageGallary")}
        />
      </View>
      <View style={styles.buttonControl}>
        <IconButton
          size={100}
          icon={"tv"}
          onPress={() => navigation.navigate("VideoGallary")}
        />
      </View>
    </View>
  );
}

export default GallaryHome;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    justifyContent: "center",
  },
  buttonControl: {
    alignItems: "flex-start",
    marginLeft: "10%",
  },
});
