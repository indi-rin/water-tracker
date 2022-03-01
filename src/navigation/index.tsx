import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../screens/LogIn";
import Settings from "../screens/Settings";
import SignUp from "../screens/SignUp";
import Today from "../screens/Today";

export type RootStackParamList = {
  // TO DO: update param types as I figure out what params need to be passed around
  LogIn: undefined;
  Settings: undefined;
  SignUp: undefined;
  Today: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreens: FC = () => {
  return (
    //NavigationContainer functions like Provider in React
    <NavigationContainer>
      <Stack.Navigator>
        {/* TO DO: navbar will be a property inside the Stack.Navigator tag */}
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Today" component={Today} />
        {/* can also include options property for screens where the navbar shouldn't be shown, like log-in */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
