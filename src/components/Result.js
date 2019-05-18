import "../mystyles.css"
import React from 'react';
import CanvasJSReact from '../canvasjs.react'
import {withRouter} from 'react-router-dom';

const OptItems = props => {
  return (
    <div className="flex-row justify-content">
      <div className="flex-column justify-content"><h4>{props.name} : &nbsp;&nbsp;</h4></div>
      <div className="flex-column justify-content">{props.value}</div>
      <br/>
    </div>
  );
}

const Graph = props => {
  const isGraph = props.isGraph;
  if (isGraph === "yes"){
    // var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Bounce Rate by Week of Year"
			},
			axisY: {
				title: "Bounce Rate",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
		}
		return (
		<div class="flex-row justify-content">
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
  }
  else {
    return (
      <div></div>
    );
  }
}

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.location.state;
  };

  render() {
    return (
      <div className="container">
        <h2 class="flex-row justify-content">Results for given parameters</h2>
        <OptItems name="Split" value={this.state.split}/>
        <OptItems name="Graph" value={this.state.graph}/>
        <OptItems name="Model" value={this.state.model}/>
        <Graph isGraph={this.state.graph}/>
      </div>
    );
  }
}

export default withRouter(Result);
