import { View, Text, StyleSheet } from "react-native";

function VideoGallary() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.video}>Video Gallary</Text>
      <Text style={styles.video}>Video Gallary</Text>
      <Text style={styles.video}>Video Gallary</Text>
      <Text style={styles.video}>Video Gallary</Text>
      <Text style={styles.video}>Video Gallary</Text>
    </View>
  );
}

export default VideoGallary;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
    gap: 15,
    flexWrap: "wrap",
  },
  video: {
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
  },
});
