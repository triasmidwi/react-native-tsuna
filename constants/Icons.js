import { StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const Icon = ({onPress, name, size, color}) => {
    return(
        <TouchableOpacity style={styles.btnEye} onPress={onPress}
        >
            <Ionicons name = {name} size={size} color={color} />
        </TouchableOpacity>
    )
}

export default Icon;

const styles = StyleSheet.create(
    {
        btnEye: {
            position: 'absolute',
            right: 10,
            top: 28,
        },
    }
)