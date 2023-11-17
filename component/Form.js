import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, Alert, TextInput, Switch, KeyboardAvoidingView } from 'react-native';
import poke from '../assets/poke.webp'
import corazon from '../assets/corazon.png'
import fire from '../assets/fire.png'

const Form = () => {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [error, setError] = useState({})

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const handleValidation= ()=>{
      let errors = {}
      if(!name) errors.name = "Username is required"
      if(!password) errors.password = "Password is required"
    
      setError(errors)

      return Object.keys(errors).length === 0
     
    }

    const handleSubmit = ()=>{
       if( handleValidation()){
        console.log('enviado', name, password);
       }
    }



    return (
        <>
            <KeyboardAvoidingView 
                style={styles.box}
                behavior='padding'
            >
            <Image source={{ uri: "https://dble.bn-ent.net/shared/img/content-btn01.png" }} style={{ width: 250, height: 250 }} resizeMode='contain' />
                <Text style={{ fontWeight: 900, marginBottom: 5 }}>Username</Text>
                <TextInput
                    style={{ height: 40, marginBottom: 20, borderWidth: 2 }}
                    value={name}
                    onChangeText={setName}
                    placeholder='Ingrese su nombre'
                // keyboardType='numeric'
                // autoComplete={false}
                />
                {error.name ?
                <Text style={{color: 'red'}}>{error.name}</Text> 
                :
                null   
                }

                <Text style={{ fontWeight: 900, marginBottom: 5 }}>Password</Text>
                <TextInput
                    style={{ height: 40, marginBottom: 20, borderWidth: 2 }}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Ingrese su password'
                         secureTextEntry
                />
                 {error.password ?
                <Text style={{color: 'red'}}>{error.password}</Text> 
                :
                null   
                }

                <Button title='Login' onPress={handleSubmit}/>

            </KeyboardAvoidingView>

            <View style={styles.box}>
                <TextInput
                    style={{ minHeight: 100, marginBottom: 20, borderWidth: 2 }}
                    value={text}
                    onChangeText={setText}
                    multiline

                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, paddingHorizontal: 10 }}>
                    <Text>Dark mode</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={handleDarkMode}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    box: {
        backgroundColor: '#fafafa',
        flex: 1,
        padding: 20,
        marginBottom: 30,
        borderRadius: 10
    },

});

export default Form