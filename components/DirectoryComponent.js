
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        //This initializes the state for the directory componet (first state)
        this.state = {
            selectedCampsite: null
        };
    }
    // This fuc states the state of the directory componet such that selectedCampsite = the given (campsite)
    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }
    //If campsite is selected it returns a card with the campsite info also a fucntion
    renderSelectedCampsite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />; 
    }
    //This takes an array of campsites and for each returns a card with an onclick fuc that trigers onCampsiteSelect
    render() {
        const rose = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        //This renders the dir and the correct campsite
        return (
            <div className="container">
                <div className="row">
                    {rose}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite}/>    
            </div>
        );
    }
}

export default Directory;