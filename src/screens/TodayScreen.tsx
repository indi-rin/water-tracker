import React, { FC } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import { Header } from "../components/style";
import Cup from "../components/Cup";

type todayStack = NativeStackNavigationProp<RootStackParamList, "Today">;

const Today: FC = () => {
  const navigation = useNavigation<todayStack>();
  return (
    <View>
      <Header>TODAY</Header>
      <Text>This will be the Today screen!</Text>
      <Cup />
      <Cup />
    </View>
  );
};

export default Today;
