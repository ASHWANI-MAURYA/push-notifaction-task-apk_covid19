import { View, Text, Alert, Linking, BackHandler } from 'react-native'
import React, { useEffect } from 'react';
import VersionCheck from 'react-native-version-check';

const ABB = () => {
    useEffect(() => {

        checkVersion();

    }, []);
    const checkVersion = async () => {
        try {
            let updateNeeded = await VersionCheck.needUpdate();

            if (updateNeeded && updateNeeded.isNeeded) {
                Alert.alert('Alert Title', 'My Alert Msg', [
                    {
                        text: 'Cancel',
                        onPress: () => Alert.alert('cancel'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => Alert.alert('ok') },
                ]);

            }

        } catch (error) { }
    }
    return (
        <View>
            <Text>ABB</Text>
        </View>
    )
}

export default ABB