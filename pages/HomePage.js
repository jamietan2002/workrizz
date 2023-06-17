import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

export default function HomePage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
    <View><TopBar></TopBar></View>
      <View style={styles.content}>
        <Text>Home Page</Text>
      </View>
      <View style={styles.bottomNavBar}>
        <NavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    // bottomNavBar: {
    //   height: 60, // Set the desired height for the bottom navigation bar
    //   borderTopWidth: 1,
    //   borderTopColor: "black",
    //   backgroundColor: "#fff",
    //   paddingHorizontal: 16,
    //   paddingBottom: 10,
    // },
  });
  
  