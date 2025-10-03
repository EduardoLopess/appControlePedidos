import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginRight: 25,
  },

  modalContainer: {
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

  cartTop: {
    width: "100%",
    height: "10%",
    backgroundColor: '#386dbd',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtTable: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SpaceMono_Bold'

  },

  // -------------------------------------------------------
  // CONTEUDO CARRINHO

  modalContent: {
    width: "100%",
    height: "75%",
    
    
  },

  itemContainer: {
    flexDirection: 'column',
    width: '100%',
    height: 80,
    backgroundColor: "#d3dbd9",
    marginTop: 10,
    marginBottom: 10,
    

  },

  ItemProp: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue'

  },







  // --------------------------------

  btnContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "15%",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(0,0,0,0.2)",
  },

  txtCancel: {
    textDecorationLine: "underline",
    textDecorationColor: "red",
    color: "red",
    fontSize: 16,
    fontWeight: "500",
  },

  btnClose: {
    backgroundColor: "red",
    width: 200,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginTop: 10,
  },

  txtBtn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
