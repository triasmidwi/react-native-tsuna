import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container:{},
        content: {
            padding: 20,
        },
        ErrorText: {
            color: 'red',
            marginBottom: 10,
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
    }
)

export {styles}