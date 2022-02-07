import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Timer from '../Components/Timer';
import Counter from '../Components/renderTimer';

export default function Header({title, navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
    return (
        <View style={styles.container}>
          <Modal visible={modalOpen} style={{flex: 1}}>
            <Timer/>
          </Modal>
            <View style={styles.header}>
                <MaterialIcons name='menu' size={26} onPress={navigation.openDrawer} style={{paddingRight: 10, paddingTop: 2}} />
                <Text style={styles.headerText}>
                    {title}
                </Text>
                <TouchableOpacity style={styles.timerBtn} onPress={() => setModalOpen(true)}>
                  <Text style={styles.timerTxt}>25:00</Text>
                  {/* <Counter count={this.state.now} /> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#EBFDFF', 
      },
    header: {
      // backgroundColor: '#CCE0E3',
      paddingHorizontal:10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', 
    },
    headerText: {
      fontSize: 20,
      color: '#000',
    },
    timerBtn: {
      backgroundColor: '#CCE0E3',
      padding: 5,
      borderRadius: 10,
    },
    timerTxt: {
      fontSize: 15,
    }
});





