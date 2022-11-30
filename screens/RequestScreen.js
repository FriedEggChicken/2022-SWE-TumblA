import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { Box, Stack, TextInput, Button } from '@react-native-material/core';

export default function RequestScreen({ navigation }) {
  const [checkB, setCheckB] = useState(false);
  const [checkAdd, setCheckAdd] = useState(false);

  const [broke, setBroke] = useState(0);
  const [add, setAdd] = useState(0);

  const [requestText, setRequestText] = useState('');

  const onSubmit = () => {
    console.log(broke)
    console.log(typeof (broke))
    console.log(typeof (add))
    console.log(requestText)
  }
  return (
    <>
    <View style={styles.container}>
      <Text style={{fontSize:23,fontWeight:'bold'}}> 텀블러 요청</Text>
      <Stack spacing={2} style={{ margin: 16 }}>

        <Text style={{ fontSize: 20, color: 'gray' }}>Option</Text>

        <Box style={{ backgroundColor: 'EAF2FF'}}>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <CheckBox
              containerStyle={{  }}
              title="파손 텀블러 수거"
              checked={checkB}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => setCheckB(!checkB)}
            ></CheckBox>

              <Box style={styles.chText}>
                <TextInput
                  style={{ width: '40%' }}
                  editable={checkB}
                  keyboardType={'number-pad'}
                  onChangeText={(e) => { setBroke(parseInt(e)) }} />
                <Text>개</Text>
              </Box>
          </Box>

          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            
            <CheckBox
              containerStyle={{ }}
              title="추가 텀블러 요청"
              checked={checkAdd}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => setCheckAdd(!checkAdd)}
            />

              <Box style={styles.chText}>
                <TextInput
                  style={{ width: '40%' }}
                  editable={checkAdd}
                  keyboardType={'number-pad'}
                  onChangeText={(e) => { setAdd(parseInt(e)) }} />
                <Text>개</Text>
              </Box>
          </Box>
        </Box>

        <Text style={{ marginTop: 50, marginBottom: 15, fontSize: 20, color: 'gray' }}>추가 건의 사항</Text>
        <TextInput
          variant='outlined'
          textAlignVertical='top'
          multiline={true}
          numberOfLines={10}
          onChangeText={(e) => { setRequestText(e) }}
        />

        <Button title="요청하기" onPress={onSubmit}></Button>

      </Stack>
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
  chText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});