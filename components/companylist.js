import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompanyCard = ({ name, type, value, pnl }) => {
  let valuecolor = type == 'Exited' ? '#DE5F67' : '#72AF72'
  let typeColor = type == 'Exited' ? '#ECCE7C' : '#B6B6B6'
  let valueAmount = type == 'Exited' ? `${'\u20B9'} -${value} (${pnl.toFixed(2)}%)` : `${'\u20B9'} ${value} (${pnl.toFixed(2)}%)`
  return (
    <View style={styles.companyCard}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={[styles.type, { color: typeColor }]}>{type}</Text>
        <Text style={[styles.value, { color: valuecolor }]}>{valueAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  companyCard: {
    padding: 16,
    borderBottomWidth: 1,
    height: 80,
    borderBottomColor: '#EAEAEA',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6771E4'
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  type: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  value: {
    fontSize: 14,
  },
  pnl: {
    fontSize: 14,
  },
});

export default CompanyCard;
