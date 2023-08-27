import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        await axios.post("https://salescrm.webnify.in/login.php", formData, config)
            .then(response => {
                if(response.data.success) {
                    // console.log(response.data);
                    Alert.alert("Login Successful")
                    navigation.navigate("Client-List", { 
                        userName: response.data.result.name,
                        userId: response.data.result.id
                    })
                } else {
                    Alert.alert("Email or Password is wrong")
                }
            })
            .catch(error => {
                console.error('Request error',error)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className="h-full flex items-center justify-center bg-slate-50">
                <View className="w-full p-10 max-w-sm">
                    <Text className="text-5xl font-bold mb-6 underline">Login</Text>

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4"
                        placeholder='Enter email address'
                        value={email}
                        onChangeText={(e) => { setEmail(e) }} />

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-6"
                        placeholder='Enter password'
                        value={password}
                        onChangeText={(e) => { setPassword(e) }} />

                    <TouchableOpacity className="w-full py-4 bg-purple-500 rounded-md"
                        onPress={handleSubmit}>
                        <Text className="text-center text-lg font-medium text-white">Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    );
}

