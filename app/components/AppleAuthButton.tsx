import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const AppleAuthButton = () => {

    return (
        <TouchableOpacity style={styles.appleAuthButton}>
            <Ionicons name="logo-apple" size={20} color="#FFFFFF" style={{marginRight:8,}}/>
            <Text style={styles.appleAuthButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appleAuthButton: {
         backgroundColor:"#000",
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"center",
        paddingVertical:12,
        paddingHorizontal:52,
        borderRadius:12,
    },
    appleAuthButtonText: {
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"600",
    }
})