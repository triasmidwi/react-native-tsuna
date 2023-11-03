import { View } from "react-native";
import InputText from "./InputText";
import Label from "./Label";


const Input = ({children, placeholder, value, onChangeText}) => {

    return (
        <View>
            <Label> {children} </Label>
            <InputText
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
};

export default Input;