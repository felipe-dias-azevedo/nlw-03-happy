import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {Feather} from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
    const navigation = useNavigation();
    
    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }

    return (
        
    <View style={styles.container}>
    <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={{
      latitude: -23.5512802,
      longitude: -46.6365314,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    }}>
      <Marker icon={mapMarker} coordinate={{latitude: -23.5512802,longitude: -46.6365314}} calloutAnchor={{
        x: 0.5,
        y: -0.1
      }}>
        <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar das meninas</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>

    <View style={styles.footer}>
      <Text style={styles.footerText}>2 orfanatos encontrados</Text>
      <TouchableOpacity style={styles.createOrphanageButton}>
        <Feather name="plus" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
    {/* <StatusBar style="auto" /> */}
  </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
      elevation: 3
    },
  
    calloutText: {
      color: '#15c3d6',
      fontSize: 14,
      fontFamily: 'nunito7',
      textAlign: 'center'
    },
  
    footer: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 32,
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3
    },
  
    footerText: {
      fontFamily: 'nunito7',
      color: '#8fa7b3'
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  