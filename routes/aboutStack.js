import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function aboutNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='About'
				component={About}
				options={({ navigation }) => ({
					headerTitle: () => <Header title='About GameZone' navigation={navigation} />,
				})}
			/>
		</Stack.Navigator>
	);
}
