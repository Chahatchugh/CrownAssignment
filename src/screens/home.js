import React from 'react'
import { SafeAreaView, Image, StyleSheet } from 'react-native'

// Main landing screen having banner
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                resizeMode={'center'}
                source={require('../assets/images/home.png')}
           />
        </SafeAreaView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1 
    },
})