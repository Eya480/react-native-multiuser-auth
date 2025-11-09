import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  StatusBar,
  Switch,
  Alert
} from 'react-native';

export default function SettingsScreen({ route, navigation }) {
  const safeRoute = route || {};
  const safeParams = safeRoute.params || {};
  const username = safeParams.username || 'Utilisateur';
  
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSync: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#ff9800" />
      
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>⚙️</Text>
          </View>
          <Text style={styles.name}>Paramètres</Text>
          <Text style={styles.subtitle}>Personnalisez votre expérience</Text>
        </View>

        <View style={styles.userSection}>
          <Text style={styles.userInfo}>
            👤 Connecté en tant que : <Text style={styles.username}>{username}</Text>
          </Text>
        </View>

        <View style={styles.settingsSection}>
          <SettingItem
            icon="🔔"
            title="Notifications"
            subtitle="Activer les alertes"
            value={settings.notifications}
            onToggle={() => toggleSetting('notifications')}
          />
          
          <SettingItem
            icon="🌙"
            title="Mode sombre"
            subtitle="Interface en thème foncé"
            value={settings.darkMode}
            onToggle={() => toggleSetting('darkMode')}
          />
          
          <SettingItem
            icon="🔄"
            title="Synchronisation"
            subtitle="Mise à jour automatique"
            value={settings.autoSync}
            onToggle={() => toggleSetting('autoSync')}
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Retour</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const SettingItem = ({ icon, title, subtitle, value, onToggle }) => (
  <View style={styles.settingItem}>
    <View style={styles.settingLeft}>
      <Text style={styles.settingIcon}>{icon}</Text>
      <View style={styles.settingText}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingSubtitle}>{subtitle}</Text>
      </View>
    </View>
    <Switch
      value={value}
      onValueChange={onToggle}
      trackColor={{ false: '#e0e0e0', true: '#ff9800' }}
      thumbColor={value ? '#ffffff' : '#f4f3f4'}
    />
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ff9800',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ff9800',
    padding: 30,
    alignItems: 'center',
    paddingTop: 50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  userSection: {
    backgroundColor: '#fff3e0',
    padding: 12,
    marginHorizontal: 25,
    marginTop: -10,
    borderRadius: 8,
  },
  userInfo: {
    fontSize: 14,
    color: '#f57c00',
    textAlign: 'center',
  },
  username: {
    fontWeight: 'bold',
  },
  settingsSection: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 30,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  actions: {
    padding: 25,
    backgroundColor: '#ffffff',
  },
  backButton: {
    backgroundColor: '#ff9800',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});