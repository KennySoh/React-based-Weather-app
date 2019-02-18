import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
class App extends Component {
  state={
    toggleApp:true
  }

  handleToggleApp(){
    this.setState({toggleApp:!this.state.toggleApp});
    console.log(this.state.toggleApp);

  }
  render() {
    return (
      <div>
        <Layout handleToggleApp={this.handleToggleApp.bind(this)} toggleApp={this.state.toggleApp}>
        </Layout>
      </div>
    );
  }
}

export default App;
