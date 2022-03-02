import React, { FC } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";

type logInStack = NativeStackNavigationProp<RootStackParamList, "LogIn">;

const LogIn: FC = () => {
  console.log("LogIn?");
  const navigation = useNavigation<logInStack>();
  return (
    <View style={{ flex: 1 }}>
      <Text>This will be the LogIn screen!</Text>
      <Text>Why doesn't this text render?</Text>
    </View>
  );
};

export default LogIn;
