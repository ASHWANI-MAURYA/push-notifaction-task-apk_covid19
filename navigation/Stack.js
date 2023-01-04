import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screen/Home';
import MoneyTransfer from '../Screen/MoneyTransfer';
import Covid19 from '../Screen/Covid19';
import WebView from '../Screen/WebView';
const stack = createNativeStackNavigator();
function AuthNavigation() {
    return (
        <stack.Navigator>
            <stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <stack.Screen name='MoneyTransfer' component={MoneyTransfer} options={{ headerShown: false }} />
            <stack.Screen name='Covid19' component={Covid19} options={{ headerShown: false }} />
            <stack.Screen name='WebView' component={WebView} options={{ headerShown: false }} />
        </stack.Navigator>
    );
}
export default AuthNavigation;