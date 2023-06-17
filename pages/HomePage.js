import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomePage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>home page</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginVertical: 20,
    
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  optionsBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    margin: 10,
  },
  inputIcon: {
    flex: 1,
    alignSelf: "center",
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "grey",
    margin: 10,
  },
  inputText: {
    flex: 9,
    alignSelf: "center",
    color: "grey",
  },
  showButton: {
    flex: 1,
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 2,
    margin: 10,
    width: "90%",
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  emptySection: {
    flex: 4,
  },
  signUpSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  brand: {
    fontSize: 25,
    color: "green",
    justifyContent: "center",
    fontWeight: "bold",
    height: 30,
    marginBottom: 50,
  }
});
