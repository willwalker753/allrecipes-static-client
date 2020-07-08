import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import './Home.css';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',searched: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        localStorage.clear();
        localStorage.setItem('search', this.state.value);
        let search = localStorage.getItem('search');
        console.log(search);
        this.setState({searched: true});
        event.preventDefault();
    }

    render() {
        if (this.state.searched === true) {
            return <Redirect to='/results' />
        }
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href='/'>allRecipes</a></li>
                        <li><a href='/signup'>Sign Up</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </nav>
                <header>
                    <h2>Search for recipes from apple pie to ziti!</h2>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
                <article>
                    <p>
                        Lorem Ipsum put stuff about the website here blah blah
                    </p>
                </article>
            </div>
        )
    }
}
