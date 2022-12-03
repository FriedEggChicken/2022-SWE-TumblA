import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import QrcodeScanner from '../components/QrcodeScanner';

export default function EditScreen() {
    return (
      <View style={styles.container}>
        <Text>editScreen</Text>
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
});
  