import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeTab = () => {

    // const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Text>HomeTab</Text>
        {/* <Button title='Toogle drawer' onPress={()=> navigation.toggleDrawer()}/>
        <Button title='Setting' onPress={()=> navigation.jumpTo('Setting')}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeTab