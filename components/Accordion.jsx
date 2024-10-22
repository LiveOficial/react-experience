import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primary } from '../constants/Colors';
import { Minus, Plus } from '@/components/Icons'
import { Hr } from '@/components/LiveExperience'

export default Accordion = {
  Container: ({ children }) => {
    return (
      <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {children}
      </View>
    )
  },
  Item: ({ children, title }) => {
    const [expanded, setExpanded] = useState(false)

    const titleIsString = typeof title === 'string'

    return (
      <>
        <View style={{ display: 'flex' }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }} onPress={() => setExpanded(!expanded)}>
            {titleIsString ? <Text style={{ paddingVertical: 20, fontWeight: 600, fontSize: 16, flexShrink: 1 }}>{title}</Text> : {title} }
            <Text style={styles.title}>{ expanded ? <Minus color={primary} size={30} /> : <Plus color={primary} size={30} /> }</Text>
          </TouchableOpacity>
          <View style={{ display: expanded ? 'flex' : 'none' }}>
            {children}
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Hr />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  accordionItem: {
    marginBottom: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  accordTitle: {
    fontSize: 18,
  },
  header: {
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
  content: {
    padding: 15,
  },
});
