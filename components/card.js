import React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './style';

const Card = ({
    item,
}) => (
    <View style={Styles.cardBox}>
        <Image source={require('../images/logob.jpg')} style={Styles.cardImg} />
        <View style={Styles.titleBox}>
            <Text>{item.title}</Text>
            <Text>{item.sec}</Text>
        </View>
    </View>
);

export default Card;
