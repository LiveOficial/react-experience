import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { primary, secondary } from '@/constants/Colors';

const CartOverlay = ({ visible, setVisible }) => {
  // Lista de itens no carrinho
  const cartItems = [
    { id: 1, name: 'Kit atleta', description: 'Tamanho Babylook', price: 160 },
    { id: 2, name: 'Clínica de Tênis LIVE! e XP', description: 'com André Ghem', price: 90 },
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={visible}>
        <View style={styles.overlay}>
          <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Carrinho ({cartItems.length} itens)</Text>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <ScrollView>
              {cartItems.map((item) => (
                <View key={item.id} style={styles.cartItem}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemPrice}>R$ {item.price}</Text>
                  <TouchableOpacity style={styles.removeItemButton}>
                    <Text style={styles.removeItemText}>Remover item</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.subtotal}>Subtotal</Text>
                <Text style={styles.subtotal}>R$ {calculateSubtotal()}</Text>
            </View>
            <TouchableOpacity style={styles.finalizeButton}>
              <Text style={styles.finalizeButtonText}>Finalizar compra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continuar comprando</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 100,
    paddingLeft: 90,
    paddingRight: 20,
    width: '100%',
    height: '100%',
  },
  cartContainer: {
    backgroundColor: '#fff',
    padding: 20,
    maxHeight: '80%',
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#FF6347',
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#888',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
  },
  removeItemButton: {
    marginTop: 5,
  },
  removeItemText: {
    color: '#FF6347',
  },
  subtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  finalizeButton: {
    backgroundColor: primary,
    padding: 15,
    marginVertical: 5,
  },
  finalizeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  continueButton: {
    padding: 15,
    borderColor: secondary,
    borderWidth: 1,
    marginVertical: 5,
  },
  continueButtonText: {
    textAlign: 'center',
    color: '#FF6347',
    fontSize: 16,
  },
});

export default CartOverlay;
