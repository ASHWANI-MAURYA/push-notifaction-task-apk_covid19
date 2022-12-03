import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/Stack'
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigation />
    </NavigationContainer>
  );
}

