import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container: {},
        header: {
            height: 275,    
        },
        headerGradient: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'left',
            marginRight: 225,
            marginTop: 10,
        },
        imageContainer: {
            width: 250,
            height: 180, 
            justifyContent: 'center', 
            alignItems: 'flex-end', 
        },
        image: {
            width: '100%', 
            height: '100%', 
            resizeMode: 'contain',
        },
        iconG: {
            margin: 'auto',
            width: 30,
            height: 30,
        },
        content: {
            padding: 20,
        },
        text: {
            fontWeight: 'bold',
            paddingBottom: 3,
        },
        textInput: {
            borderWidth: 1,
            padding: 10,
            marginBottom: 5,
            borderColor: 'grey',
            borderRadius: 5,
            height: 40,
        },
        ErrorText: {
            color: 'red',
            marginBottom: 10,
        },
        btnEye: {
            position: 'absolute',
            right: 10,
            top: 28,
        },
        googlesButton: {
            borderColor: '#86a8e7',
            padding: 10,
            borderRadius: 15,
            borderWidth: 1,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        linkContainer: {
            flexDirection: 'row', 
            justifyContent: 'center', 
            marginTop: 5,
        },
        linkText: {
            color: '#7f7fd5', 
            textDecorationLine: 'none',
        },

    },
);

export {styles}