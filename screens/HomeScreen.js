import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

// 스크린으로 사용된 컴포넌트 navigation 객체를 props로 받아옴.

export default function HomeScreen({navigation}) {
    return (
      <View>
        <Text>homeScreen</Text>
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
  