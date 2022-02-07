import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';


export default function Login({navigation}) {
    const loadScreen = (props) => {
        navigation.navigate('List');
    } 
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Login to Activity Tracker</Text>
                
                <TextInput style={styles.input} placeholder='Username'/>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={loadScreen}> 
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Signup</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBFDFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontSize: 20,
    },
    input: {
        padding: 10,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10,
        paddingLeft: 15,
    },
    btnContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: "45%",
        marginTop: 15,
        backgroundColor: "#DDFFF4",
        borderRadius: 10,
        padding: 10,
    },
    btnText: {
        textAlign: 'center',
        color: '#000'
    }
})

