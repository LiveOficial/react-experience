import { ChevronLeft, Camera, EditProfile, Asterisk, OrderCart, CalendarTwo, Playlist, Help, Privacy, Exit, DeleteMyAcccount } from '@/components/Icons';
import { Hr, HighlightedButton } from '@/components/LiveExperience';
import { body } from '@/constants/Colors';
import { Link as NativeLink, router } from 'expo-router';
import { View, Text, ScrollView, Image, Pressable, Modal, StyleSheet } from 'react-native';
import { primary } from '@/constants/Colors';
import DeleteMyAccount from '@/components/DeleteMyAccount';
import { useAuth } from '@/context/auth'
import { useState } from 'react';

export default function Profile() {
  const [openModalLogout, setOpenModalLogout] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { token } = useAuth()

  if (token === null) {
    router.replace('/entrar')
  }

  return (
    <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
            <ChevronLeft />
        </Pressable>
        <View>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Meu perfil</Text>
        </View>
        <View />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginBottom: 30 }}>
        <View style={{ position: 'relative', width: 150, height: 150 }}>
          <Image
            style={{ width: '100%', height: '100%', borderRadius: 100 }}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9450/d960/3f4d180a5ca2eab8be3250ab5fc65bef?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAL90o0y8AzZR3NooIUqqbuR38YVvqswSEjVS3TteZPDb0qMjKDsHTV2ZNOyaOqW6JqpCn8h5OOhcp48DQ3Cp0LV8a~MHzSBvSUErjAUY07ALH23lS-hHiSnuhOrYqo5fzREuByvMddERxPCNE47jI3BQ7jq-D8WbL2YrVvX38LrVzP7I8Y460E8X0F1nxHF-WazcmMTx~0O2ELQTdZthrcL8-MUHmcIMClkqZLngFEp2dWQVXiRYtf454dq8A6Zi6~U4v~KNa6QVVnasxBBFm70vj~86rdQFnKflD2U5jjiFxv0DVK0D9jsdwudD6U5-bf~3htfNI2RaDOuoQ4YBQ__'
            }}
          />
          <Pressable style={{ position: 'absolute', right: 0, bottom: 0, backgroundColor: primary, padding: 10, borderRadius: 100 }}>
            <Camera />
          </Pressable>
        </View>
        <Name>Taís Lima</Name>
        <Email>taislima@gmail.com</Email>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Hr />
        <Link icon={<EditProfile />} href='editar-perfil'>Editar perfil</Link>
        <Link icon={<Asterisk />} href='alterar-senha'>Alterar senha</Link>
        <Hr />
        <Link icon={<OrderCart />} href='pedidos'>Pedidos</Link>
        <Link icon={<CalendarTwo />} href='calendario'>Meu calendário</Link>
        <Link icon={<Playlist />} href='teste'>Minha playlists</Link>
        <Hr />
        <Link icon={<Help />} href='teste'>Ajuda</Link>
        <Link icon={<Privacy />} href='teste'>Privacidade</Link>
        <Hr />

        <Pressable style={styles.link} onPress={() => setOpenModalLogout(true)}>
          <Exit />
          <Text style={styles.linkText}>Sair</Text>
        </Pressable>

        <Pressable style={styles.link} onPress={() => setDeleteModal(true)}>
          <DeleteMyAcccount />
          <Text style={styles.linkText}>Excluir conta e dados</Text>
        </Pressable>
        
      </View>
      <DeleteMyAccount visible={deleteModal} setVisible={setDeleteModal} />

      <TexModal visible={openModalLogout} setVisible={setOpenModalLogout}>
        <View style={{ backgroundColor: 'white', padding: 20, paddingBottom: 50, borderRadius: 10, display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 40 }}>Tem certeza que deseja sair?</Text>
          <HighlightedButton>
            Sair
          </HighlightedButton>
          <Pressable style={{ marginTop: 20 }} onPress={() => setOpenModalLogout(false)}>
            <Text style={{ textAlign: 'center', color: primary ,fontWeight: 500 }}>Deixa pra lá</Text>
          </Pressable>
        </View>
      </TexModal>
    </ScrollView>
  )
}

function Link({ children, href, icon }) {
  return (
    <NativeLink href={href}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        {icon}
        <Text style={{ color: primary, fontWeight: 500 }}>{children}</Text>
      </View>
    </NativeLink>
  )
} 

function Name({ children }) {
  return (
    <Text style={{ fontWeight: 500, fontSize: 18, marginTop: 20 }}>{children}</Text>
  )
}

function Email({ children }) {
  return (
    <Text style={{ marginTop: 10 }}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  linkText: {
    color: primary,
    fontWeight: 500
  }
})

function TexModal({ children, visible, setVisible }) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={() => { setVisible(false) }}>
        <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          {children}
        </View>
      </Modal>
    </View>
  )
}