
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Directory extends Component {
  
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
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
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
                    {directory}
                </div> 
            </div>
        );
    }
}

export default Directory;