import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, Alert, SafeAreaView } from 'react-native';
import caballo from './assets/caballos.jpg'
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Test from './component/Test';
import Card from './component/Card';
import Form from './component/Form';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>

    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>



      {/* <SafeAreaView >
        <View style={{  padding: 10 }}>
        <ScrollView>
          <Text >Hola Jorgito
            <Text style={{ color: '#963147' }}> GATO</Text>
          </Text>
          <Image source={caballo} style={{ width: 300, height: 300 }} resizeMode='contain' />
          <Pressable onPress={() => console.log('Text press')}>
            <Text>¿Qué es Lorem Ipsum?
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

              ¿Por qué lo usamos?
              Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</Text>
          </Pressable>
          <Pressable onPress={() => console.log('Image press')}>
            <Image source={{ uri: "https://www.mundodeportivo.com/alfabeta/hero/2023/09/goku-colores.jpg?width=1200&aspect_ratio=16:9" }} style={{ width: 300, height: 300 }} resizeMode='contain' />
          </Pressable>
          <Button title='Button' color={'red'} onPress={() => setModalVisible(true)} />
          <ActivityIndicator />

          <Button title='Alert' onPress={() => Alert.alert('Invalid key', 'error al poner la key', [
            {
              text: 'Cancel',
              onPress: () => { console.log('Cancel press'); }
            },
            {
              text: 'Ok',
              onPress: () => { console.log('Ok press'); }
            }
          ])} />

         

          <Test name="Goku" />
          <Test name="Vegeta" />

          <View style={{flex: 1, backgroundColor: '#fafafa'}}>
            <View style={styles.boxColor1}></View>
            <View style={styles.boxColor2}></View>
          </View>

          <Card />

          <Form />



          <Modal visible={modalVisible}>
            <View style={{ backgroundColor: 'skyblue', flex: 1, padding: 60 }}>
              <Text>Modal React Native</Text>
              <Button title='Close' color={'red'} onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        </ScrollView>
        </View>
      </SafeAreaView> */}

    </>
  );
}

const styles = StyleSheet.create({

  boxColor1: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'purple',
    width: 250,
    height: 250,
    marginVertical: 20
  },
  boxColor2: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'purple',
    width: 250,
    height: 250,
    marginVertical: 20
  }
});
