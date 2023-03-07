import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const Styles = StyleSheet.create({
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    boxCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        borderWidth: 0.3,
        padding: 2,
        borderRadius: 5
    },
    boxCulte: {
        flex: 1,
        flexDirection: 'row',
    },
    boxTitle: {
        marginLeft: 4
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'

    },
    boxDate: {
        justifyContent: 'center',
        margin: 2
    },
    cardImg: {
        width: width / 4,
        height: 120,
        borderRadius: 5,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardBox: {
        width: (width - 10) / 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    titleBox: {
        textAlign: 'center',
        alignItems: 'center'
    }

});
export default Styles;