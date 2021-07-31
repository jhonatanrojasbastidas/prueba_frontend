import React, { Component } from 'react'
import axios from 'axios'


class Searchbar extends Component{
constructor(props) {
    super(props)

    this.state = {
        userId:'',
        body:''
    }
}

changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response =>{
        console.log(response)
        this.setState({posts: response.data.id})
    })
    .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error en el id'})
    })

}


   render() {
       const {userId, body} = this.state 
       return (
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input placeholder="buscar libro" type="text" name="userId" value={userId} onChange= {this.changeHandler} />
                </div>
                <div>
                    <input placeholder="buscar en el body" type="text" name="body" value={body}  onChange= {this.changeHandler}/>
                </div>
                <button type="submit">Buscar</button>
            </form>
        </div>
       )
   }
}

export default Searchbar