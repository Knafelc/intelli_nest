import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { sendXmlRequest } from "../util/xmlRequests";
import { Feather } from '@expo/vector-icons'

export default function Pin(){
    return(
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <View style={styles.iconBorder}>
                    <Feather name='zap' style={styles.icon} size={64} />
                </View>
                <View>
                    <Text style={styles.title}>Nome do Pin</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => sendXmlRequest('192.168.0.111')}>
                    <Feather style={styles.buttonText} name='power' size={32} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 6,
        width: '100%',
        minHeight: 92,
        borderRadius: 12,
        maxWidth: '95%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        elevation: 5,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    dataContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonContainer : {
        marginLeft: 'auto'
    },
    icon: {
        color: 'white',
    },
    iconBorder: {
        marginRight: 16,
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'pink'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 100,
        width: 'auto',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
}
)