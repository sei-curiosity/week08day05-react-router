import React, { Component } from 'react'
import "./Missing.css";

class Book extends Component {
    render() {
        return (
            <div className="Book">
                <div class="card">
                    <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                    <div class="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book