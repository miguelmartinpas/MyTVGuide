import React from 'react';
import SideMenu from 'react-native-side-menu';
import { View, TouchableOpacity, Image } from 'react-native';
import Guide from '../Guide';

const LeftSidebar = () => {
    return <TouchableOpacity
        onPress={()=> console.log('press')}
    >
        <Image
            source={{ uri: 'https://image.flaticon.com/icons/png/128/56/56763.png'}}
            style={{ width: 32, height: 32 }}
        />
    </TouchableOpacity>;
}

const Site = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
        }}>
            <SideMenu openMenuOffset={200}>
                <View style={{
                    marginTop: Platform.OS === 'ios' ? 30 : 0,
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <Guide  />
                </View>
            </SideMenu>
        </View>
    );
};

export default Site;
