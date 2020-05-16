import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {
	const openMenu = () => {
		navigation.toggleDrawer();
	};

	return (
		<View>
			<MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
			<View style={styles.headerTitle}>
				<Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		position: 'absolute',
	},
	headerTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		right: 20,
	},
	headerText: {
		fontSize: 18,
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});
