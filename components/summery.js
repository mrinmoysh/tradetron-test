import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const SummaryCard = ({ heading, type, capital, value, pnl }) => {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>{type}</Text>
          <Image 
          style={styles.dropdownIcon}
          source={require('../images/dropdown.png')}
          />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Capital:</Text>
          <Text style={styles.fieldValue}>{'\u20B9'} {capital} Cr</Text>
        </View>
        <View style={[styles.fieldContainer, { alignItems: 'center' ,width:120}]}>
          <Text style={styles.fieldName}>P&L:</Text>
          <Text style={styles.fieldValue}>{'\u20B9'} {value}k ({pnl}%)</Text>
        </View>
        <View style={[styles.fieldContainer, { alignItems: 'center',width:80 }]}>
          <Text style={styles.fieldName}>Value:</Text>
          <Text style={styles.fieldValue}>{'\u20B9'} {value}L(43)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: '#6771E4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  typeContainer: {
    borderWidth:1,
    borderColor:'#FFFFFF',
    height:28,
    width:120,
    borderRadius:8,
    alignItems:'center',
    paddingLeft:8,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  type: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  dropdownIcon:{
    width: 20,
    height: 20,
    tintColor:'#FFFFFF',
    marginRight:10
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldContainer: {
    alignItems: 'flex-end',
  },
  fieldName: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  fieldValue: {
    fontSize: 14,
    color: '#FFFFFF'
  },
});

export default SummaryCard;
