import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Button, Modal, ModalHeader, ModalBody,Form,FormGroup, Input, Label, } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentModal from './CommentComponent';
import { Loading } from './LoadingComponent';


//this is my compontent and how to build it

    
    function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }//this is a fucntion 
    function RenderComments({comments, addComment, campsiteId}) {
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

                    <CommentModal campsiteId={campsiteId} addComment={addComment} />
                </div>
            );
        }//this is an else
        return <div />
    }//this is rendering both functions
    function CampsiteInfo(props) {
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        if (props.campsite) {
            return (
                <div className= "container">
                    <div className="row">
                        <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                    <hr/>
                 </div> 
               </div>
                    <div className="row">
                        <RenderCampsite campsite= {props.campsite}/>
                        <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    />
                    </div>
                </div>    
            );
        }
        return <div />;
    }
// export to other files 
export default CampsiteInfo;