import { StyleSheet, TextInput } from "react-native";

const InputText = (props) => {
    const { placeholder, value, onChangeText } = props
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    )
};

const styles = StyleSheet.create(
    {
        textInput: {
            borderWidth: 1,
            padding: 10,
            marginBottom: 5,
            borderColor: 'grey',
            borderRadius: 5,
            height: 40,
        },
        
    },
);

export default InputText;