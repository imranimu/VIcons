import React, { Component } from 'react';
import { Text, View } from 'react-native';

import IconMap from './src/components/IconMaps';

interface AppProps {}

interface AppState {}

export default class App extends Component<AppProps, AppState> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 

                <IconMap name={'mobile-alt'} size={22} color={'red'} type={'FontAwesome5'} />

                <IconMap name={'mobile-alt'} size={22} color={'red'} type={'FontAwesome5'} />

                <IconMap name={'mobile-alt'} size={22} color={'red'} type={'FontAwesome5'} />

                <IconMap name={'mobile-alt'} size={22} color={'red'} type={'FontAwesome5'} />

                <IconMap name={'facebook'} size={22} color={'red'} type={'FontAwesome6'} />
                
            </View>
        );
    }
}