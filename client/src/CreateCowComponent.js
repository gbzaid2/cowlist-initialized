import React from 'react';
import axios from 'axios';

class CreateCowComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e){
        axios.post('/api/cows', this.state)
        .then(() => this.props.updateCowList())
        .catch((err) => console.log(err));

    }

    render(){
        return (
            <form>
                <label>
                    Name:
                    <input type = "text" name = "name" onChange = {this.handleChange}/>
                </label>
                <label>
                    Description:
                    <input type = "text" name = "description" onChange = {this.handleChange}/>
                </label>
                <input type = "button" value = "Submit" onClick = {this.handleSubmit}/>
            </form>
        );
    };

   

}

export default CreateCowComponent