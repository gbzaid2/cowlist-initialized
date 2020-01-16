import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Cow from './CowComponent.js'
import CreateCowComponent from './CreateCowComponent.js';
import CurrentCow from './CurrentCow.js';
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      cowList: [],
      currentCow: null
      // [ {cow_name: 'billy', cow_description: 'potato eater'} .....]
    }
    this.handleCowClick = this.handleCowClick.bind(this);
    this.updateCowList = this.updateCowList.bind(this);
    this.editCow = this.editCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
  }

  handleCowClick(cow){
    
    this.setState({
      currentCow: cow
    })
    console.log("yo", this.state.currentCow);

  }
  
  componentDidMount(){
    axios.get('/api/cows')
    .then(({data}) => {
      this.setState({
        cowList: data
      })
    });
  }

  updateCowList(){
    axios.get('/api/cows')
      .then(({ data }) => {
        this.setState({
          cowList: data
        })
      });
  }

  indexOfCow(cow){
    return this.state.cowList.find((ele) => cow.id === ele.id)
  }
  editCow(cowId){
    var cowName = window.prompt("Enter new cow name");
    var cowDesc = window.prompt("Enter new cow description");
    var cow = {
      name: cowName,
      description: cowDesc,
      id: cowId
    };
    axios.put(`/api/cows/${cowId}`, cow)
    .then((data) => {
      this.updateCowList();
    })
    .catch((err) => {
      window.alert("Couldn't update cow");
      console.log(err);
    });
  }

  deleteCow(cowid){
    axios.delete(`/api/cows/${cowid}`)
    .then((data) => {
      var cowList = this.state.cowList;
      var index = cowList.indexOf(cowList.find((cow) => cow.id === cowid));
      cowList.splice(index, 1);
      this.setState({
        cowList: cowList
      })
    })
    .catch((err) => {
      window.alert("Couldn't delete cow");
    })

  }
  render() {
    return (
    <div>
      
      <p> Create Cow</p>
      <CreateCowComponent updateCowList = {this.updateCowList} />
      <CurrentCow cow = {this.state.currentCow} />
      <p>Cows:</p>
      {
        this.state.cowList.map((cow, index) => <Cow cow = {cow} key = {index} handleClick = {()=>{this.handleCowClick(cow)}}
        editCow = {this.editCow} deleteCow = {this.deleteCow} />)
      }
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);