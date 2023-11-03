import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({children, style, onPress, errors}) => {
  return(
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>
                {children}
            </Text>
        </TouchableOpacity>
        {errors && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors}</Text>
        </View>
      )}
    </View>
  )
}

const GooglesButton = ({source}) => {
  return (
    <TouchableOpacity style={styles.googlesButton}>
      <Image
          source={source}
          style={styles.iconG}
      />
    </TouchableOpacity>
  )
}

export {Button, GooglesButton }

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: '#86a8e7',
            padding: 10,
            borderRadius: 50,
            marginTop: 5,
        },
        textButton: {
            textAlign: 'center', 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: 15
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
        iconG: {
          margin: 'auto',
          width: 30,
          height: 30,
        },


    }
)