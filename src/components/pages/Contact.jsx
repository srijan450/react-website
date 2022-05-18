import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import Button from '@material-ui/core/Button';

function Contact() {
    return (
        <>
            <div className="col-md-6 mx-auto p-4 border my-5" >
                <h3 className="text-center mb-3">Connect with us</h3>
                <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1"><PersonIcon /></span>
                    <input type="text" className="form-control" placeholder="enter your name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon2"><EmailIcon /></span>
                    <input type="text" className="form-control" placeholder="enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                </div>

                <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon2"><PhoneIcon /></span>
                    <input type="text" className="form-control" placeholder="enter your mobile number" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>


                <div className="input-group mb-5">
                    <span className="input-group-text"><MessageIcon /></span>
                    <textarea className="form-control" aria-label="With textarea" placeholder="write your message" style={{ height: '6rem', resize: 'none', overflowY: 'auto' }}></textarea>
                </div>

                <div className="input-group d-flex justify-content-center">
                    <Button variant="contained" className="btn btn-primary">Send</Button>
                </div>
            </div>
        </>
    )
}

export default Contact
