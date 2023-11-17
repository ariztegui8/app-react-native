import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, Alert } from 'react-native';
import poke from '../assets/poke.webp'
import corazon from '../assets/corazon.png'
import fire from '../assets/fire.png'

const Card = () => {
    return (
        <>
        <View style={styles.box}>
            <View style={{ gap: 2, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Squirtle</Text>

                <View style={{ gap: 4, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={corazon} style={{ width: 20, height: 20 }} resizeMode='contain' />
                    <Text style={{ fontWeight: 600 }}>39</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', marginBottom: 20 }}>
                <Image source={poke} resizeMode='contain' style={{ width: '100%', height: 200 }} />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ gap: 8, flexDirection: 'row', borderRadius: 15, alignItems: 'center' , borderWidth: 2, borderColor: 'red', padding: 10, marginBottom: 30, justifyContent: 'center' ,  paddingHorizontal: 20}}>
                    <Image source={fire} style={{ width: 20, height: 20 }} resizeMode='contain' />
                    <Text style={{ fontWeight: 600 }}>Fire</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Squirtle es el mas rapido del oeste, se la banca, pega, y es guapo</Text>
                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Cuenta con poderes de fuego</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    box: {
        backgroundColor: '#fafafa',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        marginVertical: 20,
        padding: 15,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        flex: 1,
        gap: 15
    },

});

export default Card