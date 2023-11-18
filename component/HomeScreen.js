import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button 
            title='Go to About' 
            onPress={()=> navigation.navigate("About",
        {
            name: "Jorge Ariztegui"
        })}/>
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

export default HomeScreen