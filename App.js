import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import CompanyCard from './components/companylist';
import SummaryCard from './components/summery';

const App = () => {
  const [summary, setSummary] = useState({
    heading: 'Summary',
    type: 'Expiery',
    Capital: 5.13,
    value: 43.66,
    pnl: 0.09,
  });

  const [companylist, setCompanyList] = useState([
    { name: 'GSA BNF Directional', type: 'Live-Entered', value: 2502, pnl: 1.00 },
    { name: 'GSA Nifty Directional', type: 'Exited', value: 1037, pnl: 2.00 },
    { name: 'Banknifty Fighter Lite Positional', type: 'Live-Entered', value: 2502, pnl: 1.00 },
    { name: 'Banknifty Fighter Positional', type: 'Live-Entered', value: 11624, pnl: 1.00 },
    { name: 'Overnight Miner', type: 'Exited', value: 1037, pnl: 2.00 },
    { name: 'Overnight Miner Nifty', type: 'Exited', value: 2337, pnl: 1.00 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSummary(prevSummary => ({
        ...prevSummary,
        pnl: Math.random().toFixed(2),
        value:(Math.random()*100).toFixed(2) 
      }));
      setCompanyList(prevCompanyList =>
        prevCompanyList.map(company => ({
          ...company,
          value: Math.floor(Math.random() * 10000) ,
          pnl: Math.floor(Math.random() * 3) + 1,
        }))
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderCompanyCard = ({ item }) => (
    <CompanyCard
      name={item.name}
      type={item.type}
      value={item.value}
      pnl={item.pnl}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.hambergerIcon}
          source={require('./images/hambergericon.png')}
        />
        <Text style={[styles.heading,{color:'#000000',marginLeft:-20,}]}>Strategies</Text>
        <View style={{width:10}}></View>
      </View>
      <SummaryCard
        heading={summary.heading}
        type={summary.type}
        capital={summary.Capital}
        value={summary.value}
        pnl={summary.pnl}
      />
      <FlatList
        data={companylist}
        renderItem={renderCompanyCard}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 24,
    marginLeft:-20,
    fontWeight: 'bold',
    color: '#000000'
  },
  hambergerIcon: {
    width: 40,
    height: 40
  },
  summaryCard: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  companyCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  pnl: {
    fontSize: 14,
  },
});

export default App;