import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 10,
    width: "100%",
    maxHeight: "95%",
    overflow: "scroll",
    zIndex: 5,
    position: "relative",
  
  },

  containerTop: {
    width: '100%',
    height: '10%',
    borderBottomWidth: 1,
  },

  tableNumber: {
    width: '100%',
    height: '100%',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: '#386dbd' 

  },

  txtTableNumber: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SpaceMono_Bold'
    
  },

  containerContent: {
    width: '100%',
    height: '75%',

  },

  containerBtnClose: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.2)", 
  },

  btn: {
    width: '40%',
    height: '50%',
    backgroundColor: '#492dfcff',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
    
  },

  txtBtn: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500'
  }
});
