import React from 'react';
import ConvenienceList from './ConvenienceList.jsx';
import EntretainmentList from './EntretainmentList.jsx';
import OffRoadList from './OffRoadList.jsx';
import SeatTrimList from './SeatTrimList.jsx';
import SpecsDimenList from './SpecsDimenList.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            convenienceDetails: [],
            entretainmentDetails: [],
            offRoadDetails: [],
            seatTrimDetails: [],
            specsDimenDetails: []
        }
        this.getConvenienceDetails = this.getConvenienceDetails.bind(this);
        this.getEntretainmentDetails = this.getEntretainmentDetails.bind(this);
        this.getOffRoadDetails = this.getOffRoadDetails.bind(this);
        this.getSeatTrimDetails = this.getSeatTrimDetails.bind(this);
        this.getSpecsDimenDetails = this.getSpecsDimenDetails.bind(this);
    }

    componentDidMount() {
        this.getConvenienceDetails();
        this.getEntretainmentDetails();
        this.getOffRoadDetails();
        this.getSeatTrimDetails();
        this.getSpecsDimenDetails();
    }

    getConvenienceDetails(){
        fetch('http://localhost:4000/api/convenience-specs')
          .then((response) => {
              console.log('This is convenience response ', response);
              return response.json()
          })
          .then((data) => {
            console.log('This is data ', data);
              this.setState({
                  convenienceDetails: data[0]
              })
          })
          .catch((error) => {
              console.log(error);
          })
    }

    getEntretainmentDetails(){
        fetch('http://localhost:4000/api/entretainment-specs')
            .then((response) => {
                console.log('This is entretainment response ', response);
                return response.json();
            })
            .then((data) =>{
                console.log('This is data from entrmnt', data);
                this.setState({
                    entretainmentDetails: data[0]
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    getOffRoadDetails(){
        fetch('http://localhost:4000/api/off-road-specs')
            .then((response) => {
                console.log('This is off-road response ', response);
                return response.json();
            })
            .then((data) => {
                // console.log('This is data from off-road ', data);
                this.setState({
                    offRoadDetails: data[0]
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    getSeatTrimDetails(){
        fetch('http://localhost:4000/api/seat-trim-specs')
            .then((response) => {
                console.log('This is seat-trim response', response);
                return response.json();
            })
            .then((data) => {
                this.setState({
                    seatTrimDetails: data[0]
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getSpecsDimenDetails(){
        fetch('http://localhost:4000/api/specs-dimensions')
            .then((response) => {
                console.log('This is specs-dimensions response ', response);
                return response.json();
            })
            .then((data) => {
                this.setState({
                    specsDimenDetails: data[0]
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // conditional rendering for button text and action?
    render() {
        return (
        <div className="ddc-content inventory-detail-tech-specs">
            <h3 className="h1 ddc-heading-h1 widget-heading">
                <span>Detailed Specifications</span>
            </h3>
            <div id="tech-specs" className="tech-specs truncate-tech-specs clearfix">
                <ConvenienceList convenienceDetails={this.state.convenienceDetails} />
                <EntretainmentList entretainmentDetails={this.state.entretainmentDetails} />
                <OffRoadList offRoadDetails={this.state.offRoadDetails} />
                <SeatTrimList seatTrimDetails={this.state.seatTrimDetails} />
                <SpecsDimenList specsDimenDetails={this.state.specsDimenDetails} />
                
            </div>
        </div>
        )}
}

export default App;