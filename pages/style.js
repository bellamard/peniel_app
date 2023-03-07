
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const Styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logos: {
        width: 100,
        height: 100
    },
    boxLogos: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: width,
        flex: 1,
        margin: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    titlePr: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white',
        marginHorizontal: 5,
    },
    titleCopy: {
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'right',
        color: 'white',
        marginRight: 4,
        marginBottom: 5,
    },
    imageEvent: {
        width: width,
        height: height / 3,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    iconPlay: {
        position: 'absolute',
        left: width / 2,
        top: height / 6,
        width: 60,
        height: 60,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30

    },
    eventBox: {
        margin: 8,
        padding: 5,
        borderWidth: 0.4,
        borderRadius: 5,
        borderColor: 'blue'
    },
    confBox: {
        flex: 1,
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-between',
        flexWrap: 'wrap'

    },
    titleBoxP: {
        borderColor: 'blue',
        margin: 5,
        padding: 5,
        borderWidth: 0.4,
        borderRadius: 5,
    },
    titleP: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 0.25
    },
    sousP: {
        fontSize: 24,
        fontWeight: '100',
        textAlign: 'center'
    },
    orateurP: {
        fontSize: 24,
        fontWeight: '100',
        textAlign: 'center',
        borderBottomWidth: 0.25
    },
    verseeP: {
        fontSize: 14,
        fontWeight: '600',
        fontStyle: 'italic'
    },
    predicationP: {
        margin: 5,
        padding: 5,
        borderRadius: 5,

    },
    predication: {
        textAlign: 'justify',
        fontSize: 16
    }
});
export default Styles;