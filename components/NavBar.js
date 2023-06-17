import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

export default function NavBar({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.iconSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="home" size={26} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile Page")}>
            <MaterialIcons name="leaderboard" size={26} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.iconSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile Page")}>
        <AntDesign name="pluscircleo" size={26} color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.iconSection}>
        <TouchableOpacity onPress={() => alert("Favourites")}>
        <Ionicons name="md-settings-sharp" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%",
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 30,
    height: 60,
  },
  iconSection: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
  },
});
