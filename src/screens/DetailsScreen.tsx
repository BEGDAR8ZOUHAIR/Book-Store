import * as React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({ route, navigation }:{ navigation: any ,route: any}) {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}


export default DetailsScreen;