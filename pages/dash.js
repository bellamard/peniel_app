import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Styles from './style';
//import Icon from 'react-native-vector-icons/FontAwesome';
import CardP from '../components/event';
import Card from '../components/card';
const Dashboard = ({ navigation }) => {
    const [event, setEvent] = useState([{ title: 'Enseignement', sec: 'Culte', date: 'Mar' },
    { title: 'Délivrance', sec: 'Culte', date: 'Jeu' }, { title: 'Adoration et Action de Grace', sec: 'Culte', date: 'Dim' }]);
    const [conf, setConf] = useState([{ title: 'Enseignement', sec: 'Culte', date: 'Mar' }, { title: 'La foi', sec: 'Conference', date: 'Mer 09' },
    { title: 'Délivrance', sec: 'Culte', date: 'Jeu' }, { title: 'La perseverance', sec: 'Conference', date: 'Jeu 10' },
    { title: 'Adoration et Action de Grace', sec: 'Culte', date: 'Dim' }, { title: 'jeunesse', sec: 'Reunion', date: 'Dim 13' }]);


    const getEvent = () => event.map((item, index) => (<TouchableOpacity key={index} onPress={() => navigation.push('Profil')}><CardP event={item} /></TouchableOpacity>));

    const getConf = () => conf.map((item, index) => (<TouchableOpacity key={index} onPress={() => navigation.push('Profil')}><Card item={item} /></TouchableOpacity>));


    return (
        <View style={Styles.container}>
            <ScrollView>
                <SafeAreaView>
                    <View>
                        <Image source={require('../images/event.jpg')} style={Styles.imageEvent} />

                    </View>
                    <View style={Styles.eventBox}>
                        {getEvent()}
                    </View>
                    <View style={Styles.confBox}>
                        {getConf()}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View >
    );
};

export default Dashboard;
