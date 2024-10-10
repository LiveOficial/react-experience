import { ChevronLeft, Point, Camera } from '@/components/Icons';
import { Hr } from '@/components/LiveExperience';
import { body } from '@/constants/Colors';
import { Link as NativeLink, router } from 'expo-router';
import { View, Text, ScrollView, Image, Pressable, Modal } from 'react-native';
import { primary } from '@/constants/Colors';

export default function Profile() {
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
        <Link icon={<Point />} href='editar-perfil'>Editar perfil</Link>
        <Link icon={<Point />} href='alterar-senha'>Alterar senha</Link>
        <Hr />
        <Link icon={<Point />} href='pedidos'>Pedidos</Link>
        <Link icon={<Point />} href='calendario'>Meu calendário</Link>
        <Hr />
        <Link icon={<Point />} href='teste'>Minha playlists</Link>
        <Link icon={<Point />} href='teste'>Ajuda</Link>
        <Hr />
        <Link icon={<Point />} href='teste'>Privacidade</Link>
        <Link icon={<Point />} href='teste'>Sair</Link>
        <Hr />
        <Link icon={<Point />} href='teste'>Excluir conta e dados</Link>
      </View>
      <ModalLogout show={false} />
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

function ModalLogout({ show }) {
  return (
    <Modal visible={show}>
      <Text>Logout</Text>
    </Modal>
  )
}