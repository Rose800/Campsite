import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



//this is my compontent and how to build it

    function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }//this is a fucntion 
    function RenderComments({comments}) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return(
                            <div key={comment.id}>
                                <p>{comment.text}<br />
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }//this is an else
        return <div />
    }//this is rendering both functions
    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className= "container">
                    <div className="row">
                        <RenderCampsite campsite= {props.campsite}/>
                        <RenderComments comments= {props.campsite.comments}/>
                    </div>
                </div>    
            );
        }
        return <div />;
    }
// export to other files 
export default CampsiteInfo;