import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { borderColor } from '../constants/Colors';

export function AccordionItem({ children, title }) {
  const [expanded, setExpanded] = useState(false)

  function toggleItem() {
    setExpanded(!expanded)
  }

  return (
    <View style={{ display: 'flex', borderTopWidth: 1, borderTopColor: borderColor }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15, marginVertical: 10, paddingVertical: 15 }} onPress={ toggleItem }>
        <Text style={styles.accordTitle}>{ title }</Text>
        <Text style={styles.title}>{ expanded ? '-' : '+' }</Text>
      </TouchableOpacity>
      <View style={{ display: expanded ? 'flex' : 'none' }}>
        {children}    
      </View> 
    </View>
  )
}

export const Accordion = ({ children }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    flex: 1,
  },
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
