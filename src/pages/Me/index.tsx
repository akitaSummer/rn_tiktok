import React from "react";
import { View, Text } from "react-native"
import { RootStackNavigation } from '../../navigator'

interface IProps {
  navigation: RootStackNavigation
}

const Me: React.FC<IProps> = (props) => {

  return (
    <View>
      <Text>Me</Text>
    </View>
  )
}

export default Me
