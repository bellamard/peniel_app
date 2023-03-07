import React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './style';

const CardP = ({
    event
}) => (
    <View style={Styles.boxCard}>
        <View style={Styles.boxCulte}>
            <Image source={require('../images/event.jpg')} style={Styles.cardImage} />
            <View style={Styles.boxTitle}>
                <Text style={Styles.title}>{event.title}</Text>
                <Text>{event.sec}</Text>
            </View>
        </View>
        <View style={Styles.boxDate}>
            <Text>{event.date}</Text>
        </View>

    </View>
);

export default CardP;
