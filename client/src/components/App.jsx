import React from 'react';
import ConvenienceList from './ConvenienceList.jsx';
// import Entretainment from './Entretainment.jsx';
// import OffRoad from './OffRoad.jsx';
// import SeatTrim from './SeatTrim.jsx';
// import SpecsDimen from './SpecsDimen.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            convenienceDetails: []
        }
        this.getConvenienceDetails = this.getConvenienceDetails.bind(this);
    }

    componentDidMount() {
        this.getConvenienceDetails();
    }

    getConvenienceDetails(){
        fetch('http://localhost:4000/api/convenience-specs')
          .then((response) => {
              console.log('This is response ', response);
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

    render() {
        return (
        <div className="ddc-content inventory-detail-tech-specs">
            <h3 className="h1 ddc-heading-h1 widget-heading">
                <span>Detailed Specifications</span>
            </h3>
            <div id="tech-specs" className="tech-specs truncate-tech-specs clearfix">
                <ConvenienceList convenienceDetails={this.state.convenienceDetails} />
            </div>
        </div>
        )}
}

export default App;