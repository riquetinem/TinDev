import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// createStackNavigator com uma opção de voltar
// createSwitchNavigator ja com essa nao tem a opçao de voltar

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
)