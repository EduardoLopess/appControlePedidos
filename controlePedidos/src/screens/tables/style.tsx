import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    
  },

  containerBtn: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },

  btnBusca: {
    width: 100,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#ddd7d7ff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'

  },

  containerOrder: {
    flexDirection: "row",
    
  },

  btnOrder: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,

  },

  txtBtnOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});
