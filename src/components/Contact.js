import React, {Component} from 'react';
export default class Contact extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <section id="contact">
                <div className="row sections-head">
                    <div className="ten columns">
                    <div id="contact">
    <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{portfolioData.name}</span>
                                    <br></br>
                                    <span>{portfolioData.address}</span>
                                    <br></br>
                                    <span>{portfolioData.website}</span>
                                    <br></br>
                                    <span>{portfolioData.linkedinID}</span>
                                </p>
                            </div>
                        </div>
                    <h1>Contact</h1>
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input style={{"marginRight":"60px"}} id="emailform" type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea style={{"marginRight":"30px"}} id="textbox" className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
                        
                    </div>
                </div>
                
                    
                
            </section>
        );
    }
}