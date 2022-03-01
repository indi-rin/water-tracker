import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  /* TO DO: will contain list of route names and params for each route in the form of:
    Navigation: undefined;
    LogIn: string;
  */
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreens: FC = () => {
  return (
    //NavigationContainer functions like Provider in React
    <NavigationContainer>
      <Stack.Navigator>
        {/* TO DO: navbar will be a property inside the Stack.Navigator tag */}
        <Stack.Screen />
        {/* TO DO: mount reach route here with name="" component{}, can also include options property for screens where the navbar shouldn't be shown, like log-in */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
