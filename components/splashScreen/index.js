import React from 'react'
import { useEffect, useState } from 'react'
import { View, SafeAreaView, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

export default function Splash({ navigation }) {

    const isFocused = useIsFocused()
    useEffect(() => {
        getLoginData()
        setTimeout(() => {
        }, 3000)
    }, [isFocused])


    const getLoginData = async () => {
        try {
            const value = await AsyncStorage.getItem('userName')
            if (value !== null) {
                navigation.navigate('Client-List')
            } else {
                navigation.navigate('Login')
            }
        } catch (error) {
            console.log("Error getting Logged User info", error)
        }
    }

    return (
        <SafeAreaView>
            <View className='h-screen flex justify-center items-center'>
                <Image source={require('../../assets/splash-img.png')} className="w-48 h-48 ml-4" />
            </View>
        </SafeAreaView>
    )
}
