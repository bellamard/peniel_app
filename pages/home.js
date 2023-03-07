import React, { useEffect, useRef } from 'react';
import { Text, View, ImageBackground, Image, Button, TouchableOpacity, Animated } from 'react-native';
import Styles from './style';

const Home = ({ navigation }) => {
    const transition = useRef(new Animated.Value(-50)).current;
    const opacite = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(transition, { toValue: 0, duration: 3000, useNativeDriver: true }).start();
        Animated.timing(opacite, { toValue: 1, duration: 3000, useNativeDriver: true }).start();
        setTimeout(() => { navigation.navigate('Dashboard') }, 9000);
    }, [])
    return (
        <ImageBackground
            source={require('../images/bg.jpg')}
            style={Styles.image}
        >
            <View style={Styles.container}>
                <View style={Styles.box}>
                    <Text style={Styles.titlePr}>
                        MISSION CHRETIENNE PENIEL
                    </Text>
                    <Animated.View style={[
                        Styles.boxLogos, {
                            transform: [{ translateY: transition }],
                            opacity: opacite
                        }
                    ]}>
                        <Image
                            source={require('../images/logob2.png')}
                            style={Styles.logos}
                        />
                    </Animated.View>

                    <Text style={Styles.titleCopy}>(c)MCP</Text>
                </View>

            </View>
        </ImageBackground >
    );
};

export default Home;
