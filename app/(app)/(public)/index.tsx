import { AppleAuthButton } from "@/app/components/AppleAuthButton";
import { GoogleAuthButton } from "@/app/components/GoogleAuthButton";
import { Fonts } from "@/constants/theme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.infinitescroll}></View>
      <View style={styles.contentContainer}>
        <Image source={require("@/assets/images/wolt-logo.png")} style={styles.brandLogo}/>
        <Animated.Text entering={FadeInDown} style={styles.tagline}>Almost everything delivered</Animated.Text>
      {/* Login Buttons */}
      <View style={styles.buttonContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <AppleAuthButton/>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)}>
          <GoogleAuthButton/>
          </Animated.View>
        <Animated.View entering={FadeInDown.delay(300)}>
        <TouchableOpacity style={styles.otherButton}>
          <Text style={styles.otherButtonText}>Other options</Text>
        </TouchableOpacity>
                  </Animated.View>
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  brandLogo: {
    width: 200,
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
    
  },
  infinitescroll: {
    flex: 0.7,
  },
  tagline: {
    fontSize: 24,
    fontFamily: Fonts.brandBlack,
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 30,
  },
  buttonContainer: {
    width: "100%",
    // alignItems: "center",
    gap: 16,
    marginTop: 20,
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
   
  },
  otherButtonText: {
    color:"#666",
        fontSize:16,
        fontWeight:"600",
        textAlign:"center",
        
  }});