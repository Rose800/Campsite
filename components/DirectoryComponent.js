
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDirectoryItem({campsite, onClick}){
     return(
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
       </Card>
     );
}
function Directory(props) {
    //This takes an array of campsites and for each returns a card with an onclick fuc that trigers onCampsiteSelect
     const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick}/>
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


export default Directory;