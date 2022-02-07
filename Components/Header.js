import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import propTypes from 'prop-types';

const Header = props => {
    return (
        <View>
            {props.working && <Text style={styles.heading}> Work </Text>}
            {!props.working && <Text style={styles.heading}> Break </Text>}
        </View>
    )
}

export default Header 

Header.propTypes = {
    working: propTypes.bool,
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 54,
    },
})