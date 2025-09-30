import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "white",

    elevation: 10,
    width: "100%",
    maxHeight: "100%",
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
    fontFamily: 'SpaceMono_Bold'
  },

  containerContent: {
    width: "100%",
    height: "80%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingTop: 10,
    alignItems: "center",
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

  //STYLE PRODUTOS MODAL
  containerType: {
    width: 150,
    height: 50,
    backgroundColor: "#386dbd",
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  txtType: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },

  containerProp: {
    backgroundColor: "#d3dbd9",
    width: "100%",
    height: 60,
    marginBottom: 5,
    flexDirection: "row",
  },

  containerName: {
    width: "40%",
    height: "100%",
    borderRightWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    paddingLeft: 10,
  },

  containerPrice: {
    width: "40%",
    height: "100%",
    borderRightWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    paddingLeft: 10,
  },

  containerBtnAdd: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },

  btnAdd: {
    width: '70%',
    height: '70%',
    backgroundColor: '#13b30dff',
    borderRadius: 12,
    
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtProp: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'SpaceMono_Regular'

  }
});
