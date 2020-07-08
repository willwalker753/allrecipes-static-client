import React, { Component } from 'react'
import './Signup.css'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2>
                        <a href="/">allRecipes</a>
                    </h2>
                </header>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="funnytexthere@gmail.com"/>
                    <input type="submit" value="Submit"/>
                </form>
                <section>
                    <p>
                        Already have an account? Login 
                        <a href="/login"> here</a>
                    </p>
                </section>
            </div>
        )
    }
}
