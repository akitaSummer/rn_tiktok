import React from "react";
import { View, Text } from "react-native"
import { RootStackNavigation } from '../../navigator'

interface IProps {
  navigation: RootStackNavigation
}

const Discover: React.FC<IProps> = (props) => {

  return (
    <View>
      <Text>Discover</Text>
    </View>
  )
}

export default Discover
