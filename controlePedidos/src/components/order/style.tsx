import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 10,
    width: 100,
    height: 175,
    margin: 10,
    borderRadius: 10
  },

  containernumberTable: {
    width: '100%',
    height: '20%',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#386dbd',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
    
  },

  containerImg: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    

  },

  containerHr: {
    width: '100%',
    height: '25%',
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
    
  },

  txt: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white'
  },

  txtHr: {
    fontSize: 20,
    fontWeight: '500'
  }
});
