import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { danger } from "@/constants/Colors";

export default function DeleteMyAccount({ visible, setVisible }) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={() => { setVisible(false) }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Excluir conta e dados</Text>
            <Text style={{ marginVertical: 30 }}>Ao excluir a sua conta no LIVE! Experience, você perde todo o conteúdo salvo. São deletados do app o seu histórico de atividades, suas playlists, suas participação e comentários em lives, entre outras informações salvas com base em sua preferência.</Text>
            <Pressable style={{ backgroundColor: danger, padding: 15 }} onPress={() => setVisible(false)}>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 500 }}>Excluir minha conta</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    fontWeight: 500,
    marginBottom: 15,
    fontSize: 20,
  }
});
