import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2>
                        <a href="/">allRecipes</a>
                    </h2>
                </header>
                <form>
                    <input type="text" placeholder="Username or Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="submit" value="Submit"/>
                </form>
                <section>
                    <p>
                        Need an Account? Sign up 
                        <a href="/signup"> here</a>
                    </p>
                </section>
            </div>
        )
    }
}
