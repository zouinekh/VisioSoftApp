import { EvilIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { login } from '../../services/auth.service';
import { useDispatch } from 'react-redux';
import { LOGIN_ACTION } from '../../redux/types';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { loginAction } from '../../redux/actions/user';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isChecked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [emailError, setEmailError] = useState(false)
    const navigation = useNavigation()
    const userInformmation = useSelector((state) => state.user)

    const dispatch = useDispatch()
    function verfiyInputs() {

        const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailRegex.test(email) !== true) {
            console.log("mail invalid")
            setEmailError(true)
            return false;
        }
        return true;
    }
    async function SeConnect() {
        console.log("object")
        if (verfiyInputs()) {
            setEmailError(false)
            try {
                const response = await login(email, password)
                navigation.navigate("home")
                dispatch(loginAction(response))
                console.log(response)
            } catch (error) {
                console.log(error)
                ToastAndroid.show('Mail or password are invalid', ToastAndroid.LONG);

            }
            // TODO : Connexion au serveur
        }
    }

    useEffect(() => {
        if (userInformmation.informations.id) {
            navigation.navigate("home")
        }
    }, []);
    return (
        <View style={{ backgroundColor: "#1B263B", flex: 1 }}>
            <View style={{ padding: 30, marginTop: 60, justifyContent: "center", alignItems: "center", height: "20%" }}>
                <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>LOGO</Text>
            </View>
            <View style={{ backgroundColor: "white", flex: 2, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                <View style={{ justifyContent: "center", alignItems: "center", padding: 12, margin: 12 }}>
                    <Text style={{ marginTop: 60, fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#1B263B" }}>Login</Text>
                    <View style={[style.passwordInputView, { borderColor: emailError ? "red" : "grey", }]}>
                        <MaterialIcons name="email" size={24} color={emailError ? "red" : "#828181"} />
                        <TextInput style={style.passwordInput} placeholder='Email' onChangeText={(e) => setEmail(e)} value={email} />
                    </View>
                    <View style={style.passwordInputView}>
                        <FontAwesome5 name={showPassword ? "unlock-alt" : "lock"} size={18} color="#828181" onPress={(e) => setShowPassword(!showPassword)} style={{ paddingRight: 12 }} />
                        <TextInput secureTextEntry={!showPassword} style={style.passwordInput} placeholder='Password' onChangeText={(e) => { setPassword(e), setEmailError(false) }} value={password} />
                    </View>
                    <View style={{ marginTop: 20, justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Checkbox
                                style={{
                                    marginRight: 12,
                                    width: 14,
                                    height: 14,
                                    borderRadius: 50
                                }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? "#1B263B" : undefined}
                            />
                            <Text>Remember me</Text>
                        </View>
                        <View>
                            <Text style={{ textDecorationLine: "underline", color: "#828181" }}>
                                Forget password
                            </Text>
                        </View>
                    </View>
                    <View style={style.connectContainer}>
                        <Pressable onPress={(e) => SeConnect()}>
                            <Text style={style.buttonText}>Se conncter</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Login


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    connectContainer: {
        backgroundColor: "#1B263B",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: "100%",
        borderRadius: 50,
        marginTop: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    passwordInputView: {
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,

        borderWidth: 1,
        gap: 3,
        justifyContent: "space-between",
        marginTop: 20
    },
    passwordInput: {
        height: 50,
        padding: 4,
        flex: 1,
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Poppins",

    },
});