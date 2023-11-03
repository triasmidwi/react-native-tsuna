import { LinearGradient } from "expo-linear-gradient"
import { Image, StyleSheet, Text, View } from "react-native"

const Header = ({source, children}) => {
    return (
        <View style={styles.header}>
            <LinearGradient
                colors={['#7f7fd5', '#86a8e7']} 
                start={{ x: 0.1, y: 1 }} 
                end={{ x: 1, y: 0 }}
                style={styles.headerGradient}
            >
                <Text style={styles.title}>{children}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={source}
                        style={styles.image}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        header: {
            height: 370,
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
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'left',
            marginRight: 250,
            marginTop: 30,
        },
        imageContainer: {
            width: 250,
            height: 275, 
            justifyContent: 'center', 
            alignItems: 'flex-end', 
        },
        image: {
            width: '100%', 
            height: '100%', 
            resizeMode: 'contain',
        },
        
    },
);

export default Header;