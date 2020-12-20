import React ,{Component}from 'react';
import NavbarComponent from './Components/NavbarComponent';
import Salad from './Components/SaladComponent';
import './App.css';
import SaladData from './Shared/SaladData';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Salad: SaladData,
    };
}

  render() {
    return (
      <div>
      <NavbarComponent />
      <Salad data={this.state.Salad} />\
      </div>
    )
  }
}
export default App;

