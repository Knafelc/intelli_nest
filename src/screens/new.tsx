import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sendXmlRequest } from "../util/xmlRequests";

export default function Home() {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => sendXmlRequest('192.168.0.111')}>
          <Text style={styles.buttonText}>Enviar requisição</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
