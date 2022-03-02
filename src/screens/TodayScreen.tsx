import React, { FC } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";

type todayStack = NativeStackNavigationProp<RootStackParamList, "Today">;

const Today: FC = () => {
  const navigation = useNavigation<todayStack>();
  return (
    <View>
      <Text>This will be the Today screen!</Text>
      <MaterialCommunityIcons name="cup-outline" size={24} color="black" />
      <MaterialCommunityIcons name="cup" size={24} color="black" />
    </View>
  );
};

export default Today;
