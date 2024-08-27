import { Button, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const McuNode = () => {
  return (
    <View style={styles.containerCard}>
        <View style={styles.container}>
            <Feather name="cpu" size={48} style={styles.icon}/>
        <Text style={styles.text}>McuNode | Esp8266</Text>
        </View>
        <TouchableOpacity  style={styles.toggleDown}>
            <Feather name='chevron-down' size={28} />
        </TouchableOpacity>
    </View>
  );
};

export default McuNode;

const styles = StyleSheet.create({
    containerCard: {
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 6,
        width: '100%',
        height: 92,
        borderRadius: 12,
        maxWidth: '95%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        elevation: 5,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
        text: {
        fontSize: 16,
        color: '#000',
    },
    icon: {
        marginRight: 16,
        color: 'gray',
    },
    toggleDown: {

    },
});
