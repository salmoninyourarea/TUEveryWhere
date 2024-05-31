import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";
import Page4 from "../screens/Page4";
import Page5 from "../screens/Page5";
import Page6 from "../screens/Page6";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Page5">
          <Stack.Screen
          name="Page5"
          component={Page5}
          options={{ title: "Direction", headerShown : false}}
        /> 
          <Stack.Screen
            name="Page1"
            component={Page1}
            options={{ title: "" ,}}
          />
          <Stack.Screen
            name="Page6"
            component={Page6}
            options={{ title: "" ,}}
          />
          <Stack.Screen
            name="Page3"
            component={Page3}
            options={{ title: "Categoreis" }}
          />
          <Stack.Screen
            name="Page2"
            component={Page2}
            options={{ title: "SC3" ,}}
          />
          <Stack.Screen
            name="Page4"
            component={Page4}
            options={{ title: "Bus" }}
          />
        </Stack.Navigator>
      );
    }
    


