import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        backgroundColor: 'white',
        margin: 10,
        elevation: 10,
        borderRadius: 20
        
    },

    containerImg: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        padding: 5
    },

    imgCategory: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    
    },

    containerTxt: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        
    },

    txtCategory: {
        fontSize: 20,
        fontWeight: '500'
    }
})