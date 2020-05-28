import React, { Component } from 'react';
import NavigationComponent from '../components/Navigation.component';
import SearchByIdComponent from '../components/SearchById.component';

class HomeView extends Component {
    render() { 
        return(
            <>
                <NavigationComponent/>
                <SearchByIdComponent/>
            </>
        );
    }
}
 
export default HomeView;