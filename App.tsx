import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import db from "./config/firebase";
import { collection, query, getDocs } from "firebase/firestore";

const dbTest = async () => {
  const userRef = collection(db, "users");
  const q = query(userRef);
  const userSnapshot = await getDocs(q);

  userSnapshot.forEach((doc) => {
    console.log(doc.data().email);
  });
};

export default function App() {
  dbTest();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
