import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Clock(){
    const [time, setTime] = useState(new Date());

  return (
    <View style={styles.container}>
        <Text 
            id='clock'
            style={styles.clockText}
            >16:10</Text>
        <Text
            id='date'
            style={styles.dateText}>
                Terça-Feira, 27 de Agosto de 2024
        </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    clockText: {
        fontSize: 64,
    },
    dateText: {
        fontSize: 18,
        textAlign: 'center'
    }
});
