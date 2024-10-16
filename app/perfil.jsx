import { ChevronLeft, Camera, EditProfile, Asterisk, OrderCart, CalendarTwo, Playlist, Help, Privacy, Exit, DeleteMyAcccount as IconDeleteMyAcccount, Profile } from '@/components/Icons';
import { Gradient, Hr, HighlightedButton, Modal } from '@/components/LiveExperience';
import { body, danger } from '@/constants/Colors';
import { router } from 'expo-router';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { primary } from '@/constants/Colors';
import { useAuth } from '@/context/auth'
import { useEffect, useState } from 'react';

export default function MyProfile() {
  const [openModalDeleteMyAcccount, setOpenModalDeleteMyAcccount] = useState(false);
  const [openModalLogout, setOpenModalLogout] = useState(false);
  const [openModalChangePhoto, setOpenModalChangePhoto] = useState(false);
  const { user, logout, token } = useAuth()

  useEffect(() => {
    if (!token) {
      router.replace('/entrar')
    }
  }, [token])

  const onDeleteMyAcccount = () => {
    setOpenModalDeleteMyAcccount(false)
  }

  const onLogout = () => {
    logout()
    setOpenModalLogout(false)
  }

  return (
    <>
      <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
          <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
            <ChevronLeft color={primary} />
          </Pressable>
          <Text style={{ fontSize: 20 }}>Meu perfil</Text>
          <View />
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginBottom: 30 }}>
          <View style={{ position: 'relative', width: 150, height: 150 }}>
            <Photo uri={user?.photo} />
            <Pressable style={{ position: 'absolute', right: 0, bottom: 0, backgroundColor: primary, padding: 10, borderRadius: 100 }} onPress={() => setOpenModalChangePhoto(true)}>
              <Camera color={body} size={20} />
            </Pressable>
          </View>
          <Name>{user?.name}</Name>
          <Email>{user?.email}</Email>
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
          <Link icon={<Privacy color={primary} />} href='teste'>Privacidade</Link>
          <Hr />
          <Link icon={<Exit />} onPress={() => setOpenModalLogout(true)}>Sair</Link>
          <Link icon={<IconDeleteMyAcccount />} onPress={() => setOpenModalDeleteMyAcccount(true)}>Excluir conta e dados</Link>
        </View>
      </ScrollView>
      <DeleteMyAcccount visible={openModalDeleteMyAcccount} setVisible={setOpenModalDeleteMyAcccount} onPressDelete={onDeleteMyAcccount} />
      <Logout visible={openModalLogout} setVisible={setOpenModalLogout} onPressLogout={onLogout} />
      <ChangePhoto user={user} visible={openModalChangePhoto} setVisible={setOpenModalChangePhoto} />
    </>
  )
}

function Link({ children, href, onPress, icon }) {
  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      router.push(href)
    }
  }

  return (
    <Pressable style={{ padding: 10 }} onPress={() => handlePress()}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        {icon}
        <Text style={{ color: primary, fontWeight: 600 }}>{children}</Text>
      </View>
    </Pressable>
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

function Photo({ uri }) {
  return (
    <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={{ uri: uri }} />
  )
}

function ChangePhoto({ user, visible, setVisible }) {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Adicionar imagem de perfil</Text>
        <View style={{ display: 'flex', borderRadius: 100, overflow: 'hidden', marginHorizontal: 20, height: 180, width: 180, marginVertical: 20, marginHorizontal: 'auto' }}>
          <Gradient>
            <ProfilePhoto uri={user?.photo} />
          </Gradient>
        </View>
        <View style={{ display: 'flex', gap: 10 }}>
          <HighlightedButton onPress={() => setVisible(false)}>
            Carregar foto
          </HighlightedButton>
          {user?.photo && <Pressable style={{ padding: 15 }} onPress={() => setVisible(false)}>
            <Text style={{ color: primary, textAlign: 'center', fontWeight: 600 }}>Remover foto</Text>
          </Pressable>}
        </View>
      </View>
    </Modal>
  )
}

function ProfilePhoto({ uri }) {
  return (
    <>
     {!uri ?
      <View style={{ width: '100%', height: '100%' }}>
        <Text style={{ margin: 'auto' }}>
          <Profile color={'grey'} size={60} />
        </Text>
      </View> :
      <Image style={{ height: '100%', width: '100%'  }} source={{ uri: uri }} /> }
    </>
  )
}

function Logout({ visible, setVisible, onPressLogout }) {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 16, marginBottom: 25 }}>Tem certeza que deseja sair?</Text>
        <HighlightedButton onPress={() => onPressLogout()}>
          Sair
        </HighlightedButton>
        <Pressable style={{ padding: 20 }} onPress={() => setVisible(false)}>
          <Text style={{ textAlign: 'center', color: primary, fontWeight: 600 }}>
            Deixa pra lá
          </Text>
        </Pressable>
      </View>
    </Modal>
  )
}

function DeleteMyAcccount({ visible, setVisible, onPressDelete }) {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Excluir conta e dados</Text>
        <Text style={{ marginTop: 40, marginBottom: 30 }}>Ao excluir a sua conta no LIVE! Experience, você perde todo o conteúdo salvo. São deletados do app o seu histórico de atividades, suas playlists, suas participação e comentários em lives, entre outras informações salvas com base em sua preferência.</Text>
        <Pressable style={{ backgroundColor: danger, padding: 15 }} onPress={() => onPressDelete()}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 500 }}>Excluir minha conta</Text>
        </Pressable>
      </View>
    </Modal>
  )
}