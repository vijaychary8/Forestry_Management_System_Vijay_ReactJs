import React from 'react'
import "./contacts.css"

export default function Contacts() {
    return (
        <div>
            <br/>
            <br/>
            <h1>CONTACT US</h1>
            <br />
            <p className="para">Email us <b>"myforestry@gmail.com" </b>with any questions or inqueries or call<b> 518-458-458</b>. We would be happy to answer your questions  </p>
            <br />
            <br />



            <form className="contactform">
                <div class="form-group col-md-6">
                    <input type="text" pattern="[A-Za-z ]{1,20}" title="must be characters and range from [1-20]" class="form-control" id="inputName" placeholder="Name" required />
                </div>

                <div class="form-group col-md-6 ">
                    <input type="email" class="form-control" id="inputEmail" placeholder="mailId" required />
                </div>
                <div class="form-group col-md-6 ">
                    <textarea type="text" class="form-control" id="inputEmail" placeholder="message" style={{ height: "100px" }} />

                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>





            </form>

        </div>
    )
}
