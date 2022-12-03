import { StyleSheet, Text, View, Vibration, Alert, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
// import { Camera, CameraType } from 'react-native-camera-kit';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrcodeScanner() {
    const [hasPermmision, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissons = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted');
        }

        getBarCodeScannerPermissons();
    },[])

    const handleBarCodeScan = ({type,data}) => {
        setScanned(true);
        alert(`반납완료 ${type} , 데이터 ${data}`)
    }

    if (hasPermmision === null) {
        return <Text>카메라 접근 허용 요청</Text>
    }

    if (hasPermmision === false) {
        return <Text>카메라 접근 허용 거절됨</Text>
    }

    return (
        <>
            <View style={styles.container}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScan}
                style={StyleSheet.absoluteFillObject}
                barCodeTypes='qr'
                />
                {scanned && <Button title={'다시 스캔'} onPress={() => setScanned(false)} />}
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