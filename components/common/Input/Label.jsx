import { StyleSheet, Text } from "react-native";

const Label = (props) => {
    const { children } = props;
    return(
        <Text style={styles.text}> {children} </Text>
    )
}

const styles = StyleSheet.create(
    {
        text: {
            fontWeight: 'bold',
            paddingBottom: 3,
        },
        
    },
);

export default Label;