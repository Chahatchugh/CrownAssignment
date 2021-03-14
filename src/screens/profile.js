import React from 'react';
import { SafeAreaView, Text, Button, Linking, StyleSheet } from 'react-native';
import {strings} from "../utils/localization/Localized";

// Profile screen ---> Introduction and link to my github
const ProfileScreen = () => {
    const {Profile} = strings
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{Profile.Intro}</Text>
            <Button
                title="Visit github"
                onPress={() => Linking.openURL('https://github.com/Chahatchugh?tab=repositories')} 
            />
        </SafeAreaView>
    )
}

export default ProfileScreen
const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1 
    },
    text: {
        marginBottom: 20
    },
})