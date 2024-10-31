import { ChevronLeft, Camera, EditProfile, Asterisk, OrderCart, CalendarTwo, Playlist, Help, Privacy, Exit, DeleteMyAcccount as IconDeleteMyAcccount, Profile } from '@/components/Icons';
import { Gradient, Hr, HighlightedButton, Modal, Loader } from '@/components/LiveExperience';
import { body, danger, primary } from '@/constants/Colors';
import { router } from 'expo-router';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { useAuth } from '@/context/auth'
import { useEffect, useState } from 'react';
import { launchImageLibraryAsync } from 'expo-image-picker';
import api from '@/hooks/api'

export default function MyProfile() {
  const [openModalDeleteMyAcccount, setOpenModalDeleteMyAcccount] = useState(false);
  const [openModalLogout, setOpenModalLogout] = useState(false);
  const [openModalChangePhoto, setOpenModalChangePhoto] = useState(false);
  const { user, setUser, setToken, logout, token, saveUser, saveToken } = useAuth()

  useEffect(() => {
    if (token === null) {
      router.replace('/entrar')
    }
  }, [token])

  const onDeleteMyAcccount = () => {
    api.post('user/delete-account')
    setUser(null)
    setToken(null)
    saveUser(null)
    saveToken(null)
    setOpenModalDeleteMyAcccount(false)
  }

  const onLogout = () => {
    console.log('start')
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
          <View style={{ position: 'relative', width: 180, height: 180 }}>
            <View style={{ display: 'flex', borderRadius: 100, overflow: 'hidden', height: 180, width: 180 }}>
              <Gradient>
                <ProfilePhoto uri={user?.photo} />
              </Gradient>
            </View>
            <Pressable style={{ position: 'absolute', zIndex: 12, right: 0, bottom: 0, backgroundColor: primary, padding: 10, borderRadius: 100 }} onPress={() => setOpenModalChangePhoto(true)}>
              <Camera color={body} size={20} />
            </Pressable>
          </View>
          <Name>{user?.name}</Name>
          <Email>{user?.email}</Email>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Hr />
          <Link icon={<EditProfile color={primary} />} href='editar-perfil'>Editar perfil</Link>
          <Link icon={<Asterisk color={primary} />} href='alterar-senha'>Alterar senha</Link>
          <Hr />
          <Link icon={<OrderCart color={primary} />} href='pedidos'>Pedidos</Link>
          <Link icon={<CalendarTwo color={primary} />} href='calendario'>Meu calendário</Link>
          <Link icon={<Playlist color={primary} />} href='playlists'>Minhas playlists</Link>
          <Hr />
          <Link icon={<Help color={primary} />} href='ajuda'>Ajuda</Link>
          <Link icon={<Privacy color={primary} />} href='privacidade'>Privacidade</Link>
          <Hr />
          <Link icon={<Exit color={primary} />} onPress={() => setOpenModalLogout(true)}>Sair</Link>
          <Link icon={<IconDeleteMyAcccount color={primary} />} onPress={() => setOpenModalDeleteMyAcccount(true)}>Excluir conta e dados</Link>
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
    <Pressable style={{ paddingVertical: 20 }} onPress={() => handlePress()}> 
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
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

function ChangePhoto({ visible, setVisible }) {
  const [submiting, setSubmiting] = useState(false)
  const { user, setUser } = useAuth()

  const openPicker = async () => {
    const result = await launchImageLibraryAsync({ mediaTypes: 'Images' })

    if (!result.canceled) {
      try {
        setSubmiting(true)

        const data = new FormData()

        data.append('photo', {
          uri: result.assets[0].uri,
          type: result.assets[0].type,
          name: result.assets[0].fileName,
        });

        const response = await api.post('user/upload-photo', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })

        setUser({ ...user, photo: response.data.uri })
      } catch (error) {
        console.log((error))
      }

      setSubmiting(false)
    }
  }

  const onRemovePhoto = () => {
    setUser({ ...user, photo: null })
    api.post('user/remove-photo')
  }

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Adicionar imagem de perfil</Text>
        <View style={{ display: 'flex', borderRadius: 100, overflow: 'hidden', marginHorizontal: 20, height: 150, width: 150, marginVertical: 20, marginHorizontal: 'auto' }}>
          <Gradient>
            <ProfilePhoto uri={user?.photo} />
          </Gradient>
        </View>
        <View style={{ display: 'flex', gap: 10 }}>
          {!submiting && <HighlightedButton onPress={() => openPicker()}>
            Carregar foto
          </HighlightedButton>}
          {submiting && <Loader />}
          {user?.photo && <Pressable style={{ padding: 15 }} onPress={() => onRemovePhoto()}>
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
