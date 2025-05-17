// HomePage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RoadGuard</Text>
        <Text style={styles.subtitle}>Stay informed. Stay safe. Empower your street.</Text>
      </View>

      <View style={styles.navSection}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Report')}>
          <Text style={styles.emoji}>🚨</Text>
          <View>
            <Text style={styles.cardTitle}>Report</Text>
            <Text style={styles.cardText}>Submit hazards or incidents you spot.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.emoji}>🗺️</Text>
          <View>
            <Text style={styles.cardTitle}>Map</Text>
            <Text style={styles.cardText}>See nearby reports in real-time.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.emoji}>📢</Text>
          <View>
            <Text style={styles.cardTitle}>Street Feed</Text>
            <Text style={styles.cardText}>Scroll through alerts & updates.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0d1117',
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#58a6ff',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#8b949e',
    textAlign: 'center',
  },
  navSection: {
    width: '100%',
    maxWidth: 500,
  },
  card: {
    backgroundColor: '#161b22',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  emoji: {
    fontSize: 32,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 22,
    color: '#58a6ff',
    marginBottom: 4,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 16,
    color: '#c9d1d9',
  },
});

export default HomePage;
