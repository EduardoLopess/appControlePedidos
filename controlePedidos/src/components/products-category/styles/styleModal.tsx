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

  containerTxtCategory: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    
  },

  txtTitleCategory: {
    fontSize: 25,
    fontWeight: "500",
  
  },

  containerContent: {
    width: "100%",
    height: "80%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },

  btnCloseContainer: {
    position: "absolute",
    bottom: 0,
    width: "50%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  btnClose: {
    backgroundColor: "red",
    width: 200,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  txtBtnClose: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
