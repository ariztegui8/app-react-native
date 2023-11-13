import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hace mate bobo!!! </Text>
      <View 
        style={{backgroundColor: 'red', width: '100%'}}
      >
      <ScrollView>
      <Image
        
        source={require('./assets/caballos.jpg')}
      />
      </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
