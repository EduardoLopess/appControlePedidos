import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 10,
        width: '100%',
        maxHeight: '95%',
        overflow: 'scroll',
        paddingTop: 20,
        zIndex: 5,
        position: 'relative'

    },

    containerContent: {
        width: '100%',
        height: '80%'

    },

    containerBtn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'

    },

    btnClose: {
        width: 120,
        height: 20,
        backgroundColor: 'blue'
    }
})