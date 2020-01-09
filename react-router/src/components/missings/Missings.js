import React, { Component } from 'react'
import Missing from "./missing/Missing";
import "./Missings.css";

class Missings extends Component {

    onClickHandler = id => {
        if(this.state.id){
            this.setState({id: null})
        }
        else{
            this.setState({ id: id })
        }
    }
  render() {
        return (
          <div className="Missings">
            {this.props.missings.map(missing => {
              return (
                <div
                  className="card"
                  key={missing.recordid}
                  onClick={() => this.onClickHandler(missing.recordid)}
                >
                  <h1>{missing.name}</h1>
                </div>
              );
            })}
            
          </div>
        );
  }
}

export default Missings;