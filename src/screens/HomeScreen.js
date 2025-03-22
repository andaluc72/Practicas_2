import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button 
                title="Go to Details"
                onPress={() => navigation.navigate('Details')} 
            />

            <Button 
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')} 
            />
        </View>
    );
}   

export default HomeScreen;
