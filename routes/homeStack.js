import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function homeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='GameXone'
				component={Home}
				options={({ navigation }) => ({
					headerTitle: () => <Header title='GameZone' navigation={navigation} />,
				})}
			/>
			<Stack.Screen name='Review Details' component={ReviewDetails} />
		</Stack.Navigator>
	);
}
