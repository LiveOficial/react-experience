import { Text, View, ScrollView, Image as ReactImage, Pressable } from 'react-native'
import { ResultsTitle, CardSubTitle, SearchInput, FilterButton, SortButton } from '@/components/MainPages';
import { Button } from '@/components/LiveExperience';
import { ChevronLeft, Point } from '@/components/Icons';
import { text, secondary, body } from '@/constants/Colors';
import { router } from 'expo-router';

export default function Aulas() {
    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Button onPress={() => router.back()}>
                        <ChevronLeft />
                    </Button>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>
                            Aulas
                        </Text>
                    </View>
                    <View />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                    <SearchInput placeholder='Aulas, tipo de treino ou professores' />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FilterButton />
                    <SortButton />
                </View>
            </View>
            <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                <ResultsTitle name='Aulas' resultsNumber={12} />
                <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                    {[1,2,3].map((classs) => {
                        return (
                            <Card style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                                <Image duration='01:30' uri='https://s3-alpha-sig.figma.com/img/00b1/a808/8e02c477d1c927d2947107480fe3a137?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsiHugCOYs1CWke~B1wzF2aRkBHOdebCOW0-yj-7rpp04KDSwIg~UOeDiN7LSWT1hOb7XFugHK0dP-tJMQB2PROmuZgzFU1kG5sih7PzOzu57BOqrA9YXoe~SIB0pbInUHWidxjO~lQi2A-EoAKbUsxkEf9y3378zjIz5trOBNFhkn43G4sRcUzSoCk67YzVv01AlkVjQg0xQdmabhN3O9NWydl93mSw2XNl7-ehX7WCv5NF8k6pAPci91O8QGpcW6GRC6cf~Qb0Me6KKRi3f88qHQZfrbpTyKHq6jeFrHmcrsLdIii0weJQE8IX6Fqol-HoynhS6-bWUwCN~iQjGA__' />
                                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, marginVertical: 10 }}>
                                    <CardSubTitle>Cau Saad</CardSubTitle>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>WorCAUt - Aula 01</Text>
                                    <Categories values={['Funcional', 'Moderado']} />
                                </View>
                            </Card>
                        )
                    })}
                </View>
            </View>

        </ScrollView>
    )
}

function Card({ children }) {
    return (
        <Pressable>
            {children}
        </Pressable>
    )
}

function Image({ uri, duration }) {
    return (
        <View style={{ position: 'relative' }}>
            <ReactImage style={{ width: '100%', height: 200 }} source={{ uri: uri }} />
            {duration && <View style={{ position: 'absolute', top: 10, left: 10, padding: 10, paddingHorizontal: 13, borderRadius: 20, backgroundColor: '#EFEBE6CC' }}>
                <Text style={{ color: text }}>{duration}</Text>
            </View>}
        </View>
    )
}

function Categories({ values }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            {values.map((value, index) => (
                <>
                    <Text>{value}</Text>
                    {index != values.length - 1 && <Point />}
                </>
            ))}
        </View>
    )
}