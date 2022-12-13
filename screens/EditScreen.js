import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from '@react-native-material/core';
// import QrcodeScanner from '../components/QrcodeScanner';

export default function EditScreen() {
    return (
      <>
      <View>
      <ListItem title="내 정보" />
      <ListItem title="대여 반납 기록" />
      <ListItem title="설정" />
      </View>
      <View style={styles.container}>
        
        
      </View>
      </>
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
  