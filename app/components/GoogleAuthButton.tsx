import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const GoogleAuthButton = () => {

    return (
        <TouchableOpacity style={styles.googleAuthButton}>
            <Ionicons name="logo-google" size={20} color="#FFFFFF" style={{marginRight:8,}}/>
            <Text style={styles.googleAuthButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    googleAuthButton: {
        backgroundColor:"#4285F4",
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"center",
        paddingVertical:12,
        paddingHorizontal:52,
        borderRadius:12,
    },
    googleAuthButtonText: {
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"600",
    }
})