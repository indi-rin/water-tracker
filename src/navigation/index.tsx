import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../screens/LogInScreen";
import Settings from "../screens/SettingsScreen";
import SignUp from "../screens/SignUpScreen";
import Today from "../screens/TodayScreen";

export type RootStackParamList = {
  // TO DO: update param types as I figure out what params need to be passed around
  Today: undefined;
  LogIn: undefined;
  Settings: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreens: FC = ({}) => {
  return (
    //NavigationContainer functions like Provider in React
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Today">
        {/* TO DO: navbar will be a property inside the Stack.Navigator tag */}
        <Stack.Screen name="Today" component={Today} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* can also include options property for screens where the navbar shouldn't be shown, like log-in */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
