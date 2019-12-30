import React from 'react';

import {NavigationScreenProp, NavigationState} from 'react-navigation';
import styled from 'styled-components/native';
import {AsyncStorage} from 'react-native';

interface Props {
    navigation: NavigationScreenProp<NavigationState>;
}

const Container = styled.View`
    flex: 1;
    background-color: #efefef;
    justify-content: center;
    align-items: center;
`;

const CheckLogin = async ({navigation}: Props) => {
    try {
        const token = await AsyncStorage.getItem('key');

        if (token) {
            navigation.navigate('MainTabNavigator');
        } else {
            navigation.navigate('LoginNavigator');
        }
    } catch (e) {
        console.log(e);
    }

    return <Container />;
};

CheckLogin.navigationOption = {
    header: null,
};

export default CheckLogin;
