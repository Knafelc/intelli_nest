import { StyleSheet, Text, View } from 'react-native';
import McuNode from '../components/mcuNode';

export default function Hardware() {
  return (
    <View style={styles.container}>
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
  }
});
