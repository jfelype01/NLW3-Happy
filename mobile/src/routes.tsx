import React from 'react';
import OrphanagesDetails from './pages/OrphanagesDetails'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageMapPosition from './pages/createOrphanage/selecMapPosition';
import OrphanageData from './pages/createOrphanage/orphanageData';
import Header from './components/header';
const  { Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' }}}>
                <Screen name="OrphanagesMap" component={OrphanagesMap} />

                <Screen name="OrphanagesMDatails" component={OrphanagesDetails} options={{
                    headerShown: true,
                    header: () => <Header showCancel={false} title="Orfanato" />
                }} />

                <Screen name="OrphanagesPosition" component={OrphanageMapPosition} options={{
                    headerShown: true,
                    header: () => <Header title="Selecione no mapa" />
                }}/>
            
                <Screen name="OrphanagesData" component={OrphanageData} options={{
                    headerShown: true,
                    header: () => <Header title="Informe os dados" />
                }}/>
            </Navigator>
        </NavigationContainer>
    )
}