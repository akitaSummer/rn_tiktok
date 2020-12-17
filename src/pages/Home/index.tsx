import React from "react";
import { View, Text } from "react-native"
import { RootStackNavigation } from '../../navigator'

interface IProps {
  navigation: RootStackNavigation
}

const Home: React.FC<IProps> = (props) => {

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
