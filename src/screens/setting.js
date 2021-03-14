import React, {useEffect} from 'react'
import { SafeAreaView, Text, TextInput, Button, StyleSheet, BackHandler, Settings } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../redux/actions/user";
import { strings } from "../utils/localization/Localized";

// Here , you can write a name 
const SettingScreen = () => {
    const { Settings } = strings
    // Works as connect mapStatetoProps and mapdispatchToProps
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    // State
    const [text, onChangeText] = React.useState('');

    // Mounting and Unmounting handled in useEffect
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);  // Component Did Mount
        return () => {
            dispatch(userName(''))
            BackHandler.removeEventListener('hardwareBackPress', onBackPress); // Component Will Unmount
        }
    }, [text]) // array element tells when it re-render

    // On Submit of name
    const onSubmit = () => {
        dispatch(userName(text))
    }

    // On Back Press
    const onBackPress=()=>{
        dispatch(userName(''))
        onChangeText('')
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {name ? <Text style={styles.text}>{Settings.Hello} {name} !!!</Text>:
            <Text style={styles.text}>{Settings.PleaseEnterName}</Text>}
            <TextInput
                style={styles.container}
                onChangeText={(text) => onChangeText(text)}
                maxLength= {30}
                value={text}
                placeholder={Settings.EnterName}
            />
            <Button
                title={Settings.Submit}
                onPress={() => onSubmit()}
            />
        </SafeAreaView>
    )
}

export default SettingScreen
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center', 
        flex: 1, 
        margin: 20
    },
    container: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 3 , 
        borderColor:  '#00A2ED', 
        width: '100%', 
        marginBottom: 20 
    },
    text: {
        marginBottom: 20
    },
})
