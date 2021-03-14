import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView} from 'react-native';
import {strings} from "../utils/localization/Localized";

// Main landing screen having banner
const SongsDetailScreen = ({route}) => {
    const {Songs} = strings
    const {data} = route.params
    
    // Change millis to minute
    const min = ((data.trackTimeMillis/1000) / 60) % 60
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style= {styles.image}
                resizeMode={'contain'}
                source={{uri: data.artworkUrl100}}
           />
            <View style={styles.describe}>
                <Text style={styles.songName}>{Songs.TrackName} {data.trackName}</Text>
                <View style={styles.row}>
                    <Text style={styles.songArtist}>{Songs.ArtistName} {data.artistName}</Text>
                    <Text style={styles.songArtist}>{Songs.Time} {min.toFixed(0)} {Songs.Minute}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SongsDetailScreen
const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1 
    },
    image: {
        height: 200,
        width: '100%'
    },
    describe: {
        margin: 20
    },
    songName: {
        fontFamily: 'Arial',
        fontSize: 20
    },
    songArtist: {
        fontSize: 14,
    }
})