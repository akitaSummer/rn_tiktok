import React from "react";
import { View, Text } from "react-native"
import { RootStackNavigation } from '../../navigator'

interface IProps {
  navigation: RootStackNavigation
}

const Inbox: React.FC<IProps> = (props) => {

  return (
    <View>
      <Text>Inbox</Text>
    </View>
  )
}

export default Inbox
