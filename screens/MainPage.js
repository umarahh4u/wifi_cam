import { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  PermissionsAndroid,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import RecordScreen from "react-native-record-screen";
import { Video, ResizeMode } from "expo-av";
import {
  initialize,
  createGroup,
  discoverPeers,
  onConnectionInfoUpdated,
  startDiscoveringPeers,
  stopDiscoveringPeers,
  removeGroup,
  disconnect,
} from "react-native-wifi-p2p";
import NetInfo from "@react-native-community/netinfo";

import IconButton from "../components/UI/IconButton";
import ScreenRecorder from "./Recording";

function MainPage({ navigation }) {
  const imageRef = useRef();
  const video = useRef(null);

  const [connected, setConnected] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [imageScreen, setImageScreen] = useState("");
  const [networkType, setNetworkType] = useState();
  const [ipAddress, setIpAddress] = useState("");

  const [addition, setAddition] = useState();

  //   useEffect(() => {
  //     const initializeP2P = async () => {
  //       try {
  //         await initialize();

  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //           {
  //             title: "Access to wi-fi P2P mode",
  //             message: "ACCESS_COARSE_LOCATION",
  //           }
  //         );

  //         await startDiscoveringPeers();

  //         console.log("WifiP2P initialized");
  //       } catch (error) {
  //         console.error("Error initializing WifiP2P:", error);
  //       }
  //     };

  //     initializeP2P();

  //     return () => {
  //       //   stopDiscovery();
  //       stopDiscoveringPeers();
  //       removeGroup();
  //       disconnect();
  //     };
  //   }, []);

  //   useEffect(() => {
  //     // RecordScreen.clean();
  //   }, []);

  //   const connectToDevice = async () => {
  //     try {
  //       if (networkType !== "wifi") {
  //         return Alert.alert("Please connect to drum wifi");
  //       }

  //       await createGroup();
  //       console.log("Group created");

  //       await discoverPeers();
  //       console.log("Discovering peers");

  //       onConnectionInfoUpdated((info) => {
  //         if (info.groupFormed && info.isGroupOwner) {
  //           // If connected as a group owner, you can now communicate with the drum camera.
  //           setConnected(true);
  //         }
  //       });
  //     } catch (error) {
  //       console.error("Error connecting to device:", error);
  //     }
  //   };

  // Subscribe
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      setNetworkType(state.type);
      setIpAddress(state.details.ipAddress);
      console.log("address?", state.details);
    });

    setAddition({ unsubscribe, ipAddress });
    // Unsubscribe
    // unsubscribe();
  }, []);

  const getImageFromCamera = () => {
    // Implement code to get an image from the drum camera
    // This might involve making HTTP requests to the camera's API
    // and handling the response to get the image URI.
    // For example:
    // const imageUri = await api.getImageFromCamera();
    // setImageUri(imageUri);
  };

  async function takeScreenshortHandler() {
    if (status === null) {
      requestPermission();
    }

    if (networkType !== "wifi") {
      return Alert.alert("Please connect to drum wifi");
    }

    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      console.log("local uri", localUri);
      setImageScreen(localUri);

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        Alert.alert("Saved!");
      }

      Alert.alert(JSON.stringify(addition));
    } catch (e) {
      console.log(e);
    }
  }

  //   function screenRecorder() {
  //     const record = new ScreenRecorder();
  //     const res = record._fetchRecordings();
  //     console.log("res", res);
  //   }

  async function recordVideo() {
    try {
      const res1 = await RecordScreen.startRecording({
        mic: false,
        bitrate: 1024000,
        fps: 24,
      });
      console.log("start", res1);

      // recording stop
      //   const res = await RecordScreen.stopRecording();
      //   if (res1) {
      //     const url = res.result.outputURL;
      //     console.log("respond", url, res);
      //   }
    } catch (error) {
      console.log(error);
    }
    // recording start

    // recording start
    // RecordScreen.startRecording().catch((error) => console.error(error));

    // // recording stop
    // const res = await RecordScreen.stopRecording().catch((error) =>
    //   console.warn(error)
    // );
    // if (res) {
    //   const url = res.result.outputURL;
    // }
  }

  return (
    <View style={styles.rootContainer} ref={imageRef} collapsable={false}>
      <Video
        style={styles.imageStyle}
        // source={require("../assets/department.jpeg")}
        ref={video}
        resizeMode={ResizeMode.COVER}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
      />
      <View style={styles.iconsBox}>
        <IconButton icon={"tv"} size={30} />
        <IconButton icon={"videocam"} size={30} onPress={recordVideo} />

        <IconButton
          icon={"camera"}
          size={30}
          onPress={takeScreenshortHandler}
        />
        <IconButton
          icon={"images"}
          size={30}
          onPress={() => navigation.navigate("GallaryHome")}
        />
      </View>

      {imageScreen && (
        <Image style={styles.imgStyl} source={{ uri: imageScreen }} />
      )}

      {/* <ScreenRecorder /> */}
      {ipAddress && (
        <Image
          style={styles.imgStyl}
          source={{ uri: `http://${ipAddress}/video.mjpg` }}
        />
      )}
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },

  iconsBox: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 15,
    gap: 25,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  imgStyl: {
    width: 90,
    height: 90,
  },
});
