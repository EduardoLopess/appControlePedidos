import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    backgroundColor: "white",
    margin: 10,
    flexDirection: "column",
    elevation: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 0.2
  },

  containerNumber: {
    width: "100%",
    height: "20%",
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtNumber: {
    fontSize: 18,
    fontWeight: '500'
  },

  containerImg: {
    width: "100%",
    height: "60%",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
   
  },

  imgTable: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    
  },

  containerStatus: {
    width: "100%",
    height: "20%",
    backgroundColor: '#48BD11',
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtStatus: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
});
