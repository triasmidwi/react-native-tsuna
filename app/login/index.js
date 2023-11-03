import React, { useState } from 'react';
import { Text, TouchableOpacity, View,SafeAreaView } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/common/header/index.jsx';
import { Button, GooglesButton } from '../../components/common/button/button';
import Input from '../../components/common/Input';
import Images from '../../constants/Images.js';
import Icon from '../../constants/Icons.js';
import {styles} from "../../styles/login.style.js"


export default function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [visiblePass, setVisiblePass] = useState(true);
    const [errors, setErrors] = useState({});
    
    const router = useRouter()

    const onRegisterPress = () => {
        router.push("registrasi")
      };
    
    const handleForm = () => {
        let errors = {}

        if (!email) {
            errors.email = "Email is required";
        }else {
            const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/;
            if (!emailRegex.test(email)) {
                errors.email = "Email is not in a valid format";
            }else if (!email.includes("@") || !email.split("@")[1].includes(".")) {
                errors.email = "Email is not in a valid format";
            }
        };
        if (!password) errors.password = "Password is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleLogin = () => {
        if(handleForm()){
            console.log("Submitted", email, password);
            setEmail("");
            setPassword("");
            setErrors("");
        }
    }
    return (
        <SafeAreaView>
            <Stack.Screen options={{headerShown : false}} />
            <ScrollView style={styles.container}>
            
            <Header
                source={Images.login}
            >
                Login
            </Header>
            <View style={styles.content}>
                <View>
                    <Input
                        placeholder='Contoh: testing123@gmail.com'
                        value={email}
                        onChangeText={setEmail}
                    >
                        Email
                    </Input>
                    {
                        errors.email ? <Text style={styles.ErrorText}>{errors.email}</Text> : null
                    }
                </View>
                <View>
                    <Input
                        placeholder='Masukkan Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry ={visiblePass}
                    >
                        Password
                    </Input>
                    {
                        errors.password ? <Text style={styles.ErrorText}>{errors.password}</Text> : null
                    }
                    <Icon
                        onPress={
                        () => {
                            setVisiblePass(!visiblePass),
                            setShowPassword(!showPassword)
                        }}
                        name={showPassword === false ? 'eye-off-outline' : 'eye-outline'}
                        size={26}
                        color={'black'}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{ color: 'skyblue', textAlign: 'right', marginBottom: 15}}>Lupa Password?</Text>
                </TouchableOpacity>
                <Button onPress={handleLogin}>Masuk</Button>
                <View style={styles.linkContainer}>
                    <Text style={{color: 'skyblue'}}>Belum punya akun?</Text>
                    <TouchableOpacity onPress={onRegisterPress}>
                        <Text style={styles.linkText} > Daftar disini</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center', marginTop: 10}}>atau masuk dengan: </Text>

                <GooglesButton
                    source={Images.iconG}
                />
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
    };


