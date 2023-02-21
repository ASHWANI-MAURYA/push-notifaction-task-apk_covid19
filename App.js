import registerNNPushToken from 'native-notify';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/Stack'
import React, { useEffect } from 'react';
import { Alert, Linking, BackHandler } from 'react-native';
import VersionCheck from 'react-native-version-check';
export default function App() {
  registerNNPushToken(6277, 'I9yC9RmYmeDhf4jziJEAZ5');
  useEffect(() => {
    // checkVersion();
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
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigation />
    </NavigationContainer>
  );
}

