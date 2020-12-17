import React from "react";
import { View, Text } from "react-native"
import { RootStackNavigation } from '../../navigator'

interface IProps {
  navigation: RootStackNavigation
}

const Record: React.FC<IProps> = (props) => {

  return (
    <View>
      <Text>Record</Text>
    </View>
  )
}

export default Record
