import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screen/Home';
import MoneyTransfer from '../Screen/MoneyTransfer';
import Covid19 from '../Screen/Covid19';
import WebView from '../Screen/WebView';
import Calculator from '../Screen/Calculator';
import Map from '../Screen/Map'
const stack = createNativeStackNavigator();
function AuthNavigation() {
    return (
        <stack.Navigator>
            <stack.Screen name='Map' component={Map} options={{ headerShown: false }} />
            <stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <stack.Screen name='MoneyTransfer' component={MoneyTransfer} options={{ headerShown: false }} />
            <stack.Screen name='Covid19' component={Covid19} options={{ headerShown: false }} />
            <stack.Screen name='WebView' component={WebView} options={{ headerShown: false }} />
            <stack.Screen name='Calculator' component={Calculator} options={{ headerShown: false }} />
        </stack.Navigator>
    );
}
export default AuthNavigation;