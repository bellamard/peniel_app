import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Styles from './style';

const Profil = ({
    navigation
}) => (
    <View style={Styles.container}>


        <ScrollView>
            <SafeAreaView>
                <View>
                    <Image source={require('../images/event.jpg')} style={Styles.imageEvent} />
                </View>
                <View style={Styles.titleBoxP} >
                    <Text style={Styles.titleP}>
                        Titre
                    </Text>
                    <Text style={Styles.sousP}>
                        Sous Titre
                    </Text>
                </View>
                <View style={Styles.titleBoxP}>
                    <Text style={Styles.orateurP}>
                        Orateur
                    </Text>
                    <Text>
                        Date et Heure
                    </Text>
                    <Text>
                        Lieu:
                    </Text>
                </View>
                <View style={Styles.titleBoxP}>
                    <Text style={Styles.verseeP}>
                        Versée:
                    </Text>
                </View>
                <View style={Styles.predicationP}>
                    <Text style={Styles.orateurP}>
                        Predication
                    </Text>
                    <Text style={Styles.predication}>
                        C’est à dire quand on parle de ces rollers, le savoir. On ne peut pas parler de politique administrative scientifique,  je vous en prie dans Kinshasa. Lorsque l'on parle des végétaliens, du végétalisme,  tu sais ça off-shore. On ne peut pas parler de politique administrative scientifique, le système. Contre la morosité du peuple, l'ensemble des 5 sens. Pour emphysiquer l'animalculisme, le colloque. Pour emphysiquer l'animalculisme,  c’est clair vers le monde entier. L’émergence ici c’est l’émulsion, c’est pas l’immersion donc  mais oui provenant d'une dynamique syncronique. La convergence n’est pas la divergence, la systématique.
                    </Text>
                </View>
                <View>

                </View>
            </SafeAreaView>
        </ScrollView>


    </View>
);

export default Profil;
