import { StyleSheet, Text, View } from 'react-native';
import McuNode from '../components/mcuNode';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Hardware() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.addNodeButton}>
          <Text style={styles.buttonText}>Adicionar novo</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Seus módulos:</Text>
      <McuNode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title:{
    marginBottom: 0,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  addNodeButton: {
    marginTop: 20,
    padding: 10,
    width: 'auto',
    backgroundColor: '#007BFF',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 8,
  },
});
