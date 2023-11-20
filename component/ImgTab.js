import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const ImgTab = () => {

    // const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Text>ImgTab</Text>
        <Image source={{ uri: "https://www.mundodeportivo.com/alfabeta/hero/2023/09/goku-colores.jpg?width=1200&aspect_ratio=16:9" }} style={{ width: 300, height: 300 }} resizeMode='contain' />
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

export default ImgTab