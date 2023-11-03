import React, { useState } from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity, TextInput, Alert, SafeAreaView } from 'react-native';
import {LinearGradient}  from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import Button from '../../components/common/button/button';
import { Stack, useRouter} from 'expo-router';
import {styles} from "../../styles/regist.style.js"
import { regist_user } from '../api/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../../utils/handleToken';


export default function Regist() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [visiblePass, setVisiblePass] = useState(true);
    const [visibleConfirmPass, setVisibleConfirmPass] = useState(true);

    const router = useRouter()

    const onLoginPress = () => {
        router.push('login')
      };

    const handleForm = () => {
        let errors = {}

        if (!username) errors.username = "Username is required";
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
        if (!confirmPassword) errors.confirmPassword = "Confirm Password is required";

        setErrors(errors);

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Password dan konfirmasi password tidak cocok.');
            return;
        }

        return Object.keys(errors).length === 0;
    };

    const handleRegister = async () => {
        if(handleForm()){
            
            await regist_user({
                email: email.toLocaleLowerCase(),
                password: password,
                username: username
            }).then(async result => {
                console.log(result);
                if(result && result.data && result.data.code === 200){
                    AsyncStorage.setItem("AccessToken", result.data.data.accessToken)
                    await setToken(result.data.data.accessToken)
                    Alert.alert('success', result.message)
                    router.push("dashboard")
                }else if (result.message) {
                    Alert.alert('error', result.message);
                }else{
                    Alert.alert('error', 'An error occurred.')
                }
            }).catch(error => {
                Alert.alert('error', error.message)
            }).finally(()=>{
                setEmail("");
                setPassword("");
                setErrors("");
            })
            
        }
    }


    return (
        <SafeAreaView>
            <Stack.Screen options={{headerShown : false}} />
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <LinearGradient
                        colors={['#7f7fd5', '#86a8e7']} 
                        start={{ x: 0.1, y: 1 }} 
                        end={{ x: 1, y: 0 }}
                        style={styles.headerGradient}
                    >
                        <Text style={styles.title}>Register</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/images/Register.png')}
                                style={styles.image}
                            />
                        </View>
                        
                    </LinearGradient>
                </View>

                {/* form */}
                <View style={styles.content}>
                    <View>
                        <Text style={styles.text}>Nama Pengguna </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Isi dengan namamu'
                            value={username}
                            onChangeText={setUsername}
                        />
                        {
                            errors.username ? <Text style={styles.ErrorText}>{errors.username}</Text> : null
                        }
                    </View>
                    <View>
                        <Text style={styles.text}>Email </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Ex: dummy123@gmail.com'
                            value={email}
                            onChangeText={setEmail}
                        />
                        {
                            errors.email ? <Text style={styles.ErrorText}>{errors.email}</Text> : null
                        }
                    </View>
                    <View>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Masukkan password baru'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry ={visiblePass}
                        />
                        {
                            errors.password ? <Text style={styles.ErrorText}>{errors.password}</Text> : null
                        }
                        <TouchableOpacity style={styles.btnEye} onPress={
                            () => {
                                setVisiblePass(!visiblePass),
                                setShowPassword(!showPassword)
                            }
                        }>
                            <Ionicons
                            name = {showPassword === false ? 'eye-off-outline' : 'eye-outline'}
                            color = 'black'
                            size = {26}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.text}>Konfimasi Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Masukkan password kembali'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={visibleConfirmPass}
                        />
                        {
                            errors.confirmPassword ? <Text style={styles.ErrorText}>{errors.confirmPassword}</Text> : null
                        }
                        <TouchableOpacity style={styles.btnEye} onPress={
                            () => {
                                setVisibleConfirmPass(!visibleConfirmPass),
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        }>
                            <Ionicons
                            name = {showConfirmPassword === false ? 'eye-off-outline' : 'eye-outline'}
                            color = 'black'
                            size = {26}
                            />
                        </TouchableOpacity>
                    </View>
                    <Button onPress={handleRegister}>Daftar Sekarang</Button>
                    <View style={styles.linkContainer}>
                        <Text style={{color: 'skyblue'}}>Sudah punya akun?</Text>
                        <TouchableOpacity onPress={onLoginPress}>
                            <Text style={styles.linkText} > Masuk disini</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 10}}>atau masuk dengan: </Text>
                    <TouchableOpacity style={styles.googlesButton}>
                        <Image
                            source={require('../../assets/images/iconG.png')}
                            style={styles.iconG}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
};