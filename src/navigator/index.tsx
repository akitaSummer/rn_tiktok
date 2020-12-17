import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  StackNavigationProp
} from "@react-navigation/stack";
import {Platform, StyleSheet} from "react-native";
import BottomTabs from "./BottomTabs";
import SplashScreen from "react-native-splash-screen";

export type RootStackParamList = {
  BottomTabs: {
    screen?: string
  }
}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>()

const Navigator: React.FC<RootStackParamList> = (props) => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 200)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth
              }
            })
          }
        }}
        headerMode={'float'}
      >
        <Stack.Screen
          name='BottomTabs'
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
