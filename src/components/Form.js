import "../mystyles.css"
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      split: "None",
      graph: "None",
      model: "None"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);


    alert(this.state.split);
    alert(this.state.graph);
    alert(this.state.model);
  }

  render() {
    return (
      <div className="container" id="former">
        <h1>DeepTrace WebApp Deployment </h1>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <label>
            File upload: &nbsp;&nbsp;
            <input
              type="file"
              ref={(ref) => { this.file = ref; }} />
          </label>
          <br/><br/><br/>
          <label>
            Testing split ratio: &nbsp;&nbsp;
            <input
              name="split"
              type="text"
              checked={this.state.split}
              onChange={this.handleInputChange} />
          </label>
          <br /><br /><br/>
          <label>
            Show graph output:&nbsp;&nbsp;
            <input
            type="radio"
            name="graph"
            value="yes"
            checked={this.state.graph === 'yes'}
            onChange={this.handleInputChange} /> Yes
            <input
            type="radio"
            name="graph"
            value="no"
            checked={this.state.model === 'no'}
            onChange={this.handleInputChange} /> No
          </label>
          <br /><br /><br/>
          <label>
            Select a model type: &nbsp;&nbsp;
            <input
            list="models"
            name="model"
            checked={this.state.model}
            onChange={this.handleInputChange} />
            <datalist id="models">
              <option value="M1"/>
              <option value="M2"/>
              <option value="M3"/>
              <option value="M4"/>
              <option value="M5"/>
            </datalist>
          </label>
          <br/><br/><br/>
          <label>
          Get predictions &nbsp;&nbsp;
            <input
              value="Submit"
              type="submit"/>
          </label>
        </form>
      </div>
    )
  }

}

export default Form;
