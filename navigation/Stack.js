import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screen/Home';
import MoneyTransfer from '../Screen/MoneyTransfer';
const stack = createNativeStackNavigator();
function AuthNavigation() {
    return (
        <stack.Navigator>
            <stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <stack.Screen name='MoneyTransfer' component={MoneyTransfer} options={{ headerShown: false }} />
        </stack.Navigator>
    );
}
export default AuthNavigation;