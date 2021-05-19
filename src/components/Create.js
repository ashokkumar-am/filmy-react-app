import React, { Component } from "react";

export default class Create extends Component {
    render() {
        return (
          
            <div> 
            <form method="post" action="" role="form">
           
            <div class="controls">
                <div class="row">
                 
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_name">MovieName <span class="text-danger">*</span></label>
                            <input id="form_name" type="text" name="name" class="form-control"
                                placeholder="Name of the Movie" required="">
                        </div>
                    </div>
                 
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_description">Movie Description <span
                                    class="text-danger">*</span></label>
                            <input id="form_description" type="text" name="description" class="form-control"
                                placeholder="Movie Description" required="">
                        </div>
                    </div>
                  
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_release">Movie Release <span class="text-danger">*</span></label>
                            <input id="form_release" type="date" name="release" class="form-control"
                                placeholder="Movie Release Date" required="">
                        </div>
                    </div>
              
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_rating">Movie Rating <span class="text-danger">*</span></label>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_ticketprice">Ticket Price <span class="text-danger">*</span></label>
                            <input id="form_ticketprice" type="number" name="name" class="form-control"
                                placeholder="Ticket Price" required="">
                        </div>
                    </div>
               
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="country">Country <span class="text-danger">*</span></label>
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="india">India</option>
                                <option value="uae">UAE</option>
                            </select>
                        </div>
                    </div>
                  
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_genre">Genre <span class="text-danger">*</span></label>
                            <input id="form_genre" type="text" name="genre" class="form-control" placeholder="Genre"
                                required="">
                        </div>
                    </div>
                
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="form_picture">Select your Movie picture:<span
                                    class="text-danger">*</span></label>
                            <input id="form_picture" type="file" name="profile_pic"
                                placeholder="upload the movie picture" required="">

                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12 mt-2">
                        <input type="submit" class="btn btn-success btn-send" value="Send message">
                    
                </div>
            </div>
        </form>
        </div>
        );
    }
}


// <form>
            //     <h3>create</h3>

            //     <div className="form-group">
            //         <label>First name</label>
            //         <input type="text" className="form-control" placeholder="First name" />
            //     </div>

            //     <div className="form-group">
            //         <label>Last name</label>
            //         <input type="text" className="form-control" placeholder="Last name" />
            //     </div>

            //     <div className="form-group">
            //         <label>Email</label>
            //         <input type="email" className="form-control" placeholder="Enter email" />
            //     </div>

            //     <div className="form-group">
            //         <label>Password</label>
            //         <input type="password" className="form-control" placeholder="Enter password" />
            //     </div>

            //     <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            //     <p className="forgot-password text-right">
            //         <button> SUBMIT</button>
            //     </p>
            // </form>