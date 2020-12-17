import React, { useEffect } from 'react'
import { TabNavigationState, RouteProp } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RootStackNavigation, RootStackParamList } from "./index";

import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Inbox from "../pages/Inbox";
import Me from "../pages/Me";
import Record from "../pages/Record";

export type BottomTabParamList = {
  Home: undefined,
  Discover: undefined,
  Inbox: undefined,
  Me: undefined,
  Record: undefined,
}

export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState<BottomTabParamList>
};

interface Iprops {
  navigation: RootStackNavigation,
  route: Route
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabs: React.FC<Iprops> = (props) => {

  const { navigation, route } = props

  // const getHeaderTitle = (route: Route) => {
  //   return route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'Home'
  // }
  //
  // useEffect(
  //   () => {
  //     navigation.setOptions({
  //       headerTitle: getHeaderTitle(route)
  //     })
  //   }
  //   , [props])

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f86442'
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'home'
        }}
      />
      <Tab.Screen
        name={'Discover'}
        component={Discover}
        options={{
          tabBarLabel: 'Discover'
        }}
      />
      <Tab.Screen
        name={'Record'}
        component={Record}
        options={{
          tabBarLabel: 'Record'
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox'
        }}
      />
      <Tab.Screen
        name={'Me'}
        component={Me}
        options={{
          tabBarLabel: 'Me'
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
