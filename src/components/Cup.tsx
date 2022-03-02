import React, { FC, useState } from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Cup: FC = () => {
  const [filled, setFilled] = useState(false);
  return (
    <Pressable onPress={() => setFilled(!filled)}>
      {filled ? (
        <MaterialCommunityIcons name="cup" size={24} color="black" />
      ) : (
        <MaterialCommunityIcons name="cup-outline" size={24} color="black" />
      )}
    </Pressable>
  );
};

export default Cup;
