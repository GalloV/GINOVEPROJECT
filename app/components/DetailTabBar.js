import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PhotoSceen from '../screens/PhotoSceen';
import SpeciesScreens from '../screens/SpeciesScreens';
import OverviewScreen from '../screens/OverviewScreen';
import DiversityScreen from '../screens/DiversityScreen';

const Tab = createMaterialTopTabNavigator();

function DetailTabBar(props) {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Photos" component={PhotoSceen} />
        <Tab.Screen name="Species" component={SpeciesScreens}/>
        <Tab.Screen name="Diversity" component={DiversityScreen} />
    </Tab.Navigator>
    );
}

export default DetailTabBar;