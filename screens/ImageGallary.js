import { View, Text, StyleSheet, Image } from "react-native";

function ImageGallary() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
      <Text style={styles.image}>Images</Text>
    </View>
  );
}

export default ImageGallary;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
    gap: 15,
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
  },
});
