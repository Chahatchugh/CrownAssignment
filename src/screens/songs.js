import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { songsList } from "../redux/actions/user";
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Loader from '../components/Loader/Loader';
import {strings} from "../utils/localization/Localized";

const SongsScreen = ({navigation}) => {
    const {Songs} = strings
    
    // Works as connect mapStatetoProps and mapdispatchToProps
    const songs = useSelector(state => state.user.songs);
    const dispatch = useDispatch();
    
    //UseEffect
    useEffect(() => {
        dispatch(songsList())     // Component Did Mount
    }, [])

    //Key Extractor of flatlist
    const keyData = (item) => {
        return item.trackId?.toString()
      }

    //Render Items of Flatlist
    const renderItem =({item}) =>{
    const min = ((item.trackTimeMillis/1000) / 60) % 60
        return(
            <TouchableOpacity 
                style={styles.row}
                onPress = {()=> {navigation.navigate("Song Detail", {data: item})}}
            >
                <Image
                    style={styles.image}
                    resizeMode={'cover'}
                    source={{uri: item.artworkUrl100}}
                />
                <View style={styles.describe}>
                    <Text style={styles.songName}>{item.trackName}</Text>
                    <View style={styles.row}>
                        <Text style={styles.songArtist}>{item.artistName}</Text>
                        <Text style={styles.songArtist}>{min.toFixed(0)} {Songs.Minute}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Loader loading={!songs.length} />
           <FlatList
                keyExtractor={keyData}
                data={songs}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                onRefresh={()=> dispatch(songsList())}
                refreshing={!songs.length}
           />
        </SafeAreaView>
    )
}

export default SongsScreen
const styles = StyleSheet.create({
    container: {
        margin: 20, 
        flex: 1 
    },
    row: {
        flexDirection: 'row',
        height: 100,
        marginBottom: 5
    },
    image: {
        flex: 0.3,
        height:30,
        width: 30
    },
    describe: {
        flex: 0.7,
        marginLeft: 10
    },
    songName: {
        fontFamily: 'Arial',
        fontSize: 20
    },
    songArtist: {
        fontSize: 14,
        flex: 0.5
    }
})