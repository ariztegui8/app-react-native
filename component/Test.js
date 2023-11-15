import React from 'react'
import { Text, View } from 'react-native'

const Test = ({name}) => {
  return (
    <View>
        <Text>Hello, {name}</Text>
    </View>
  )
}

export default Test