
import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class CountPlot extends Component {
  state = {  } 
  render() { 
    
    return (
      <div>
      <Bar
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: `${this.props.titleText}`,
            },
          },
        }}
        data={{
          labels: [`${this.props.firstLable}`,`${this.props.secoundLable}`],
          datasets: [
            {
              label: "Number of Patient",
              data: [`${this.props.firstData}`,`${this.props.secoundData}`],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
      
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
      ;
    </div>
    );
  }
}


CountPlot.defaultProps = {
  titleText: 'Title of Chart',
  firstLable: 'Red',
  secoundLable: 'Blue',
  firstData: 250,
  secoundData:660
} 
export default CountPlot;
