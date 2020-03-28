import React, { useState } from "react";
import axios from "axios";
import { Snackbar, TextField} from '@material-ui/core/';
import {Form, Button} from "react-bootstrap";

const Contact = () => {

  const [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [message, setMessage] = useState(''),
        [open, setOpen] = useState(false);
        // [transition, setTransition] = useState(undefined)

  const data = { name, email, message };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();

    console.log("clieck is very good")
  };

  const sendMessage = () => {
    axios
    .post('/contact', data)
    .then((response) => {
      console.log("send email is success");
    })
    .catch((error) => {
      console.log(error);
    });

    setName('');
    setEmail('');
    setMessage('');
    setOpen(true)
  };


  // const handleClick = Transition => () => {
  //   setTransition(() => Transition);
  //   setOpen(true);
  //   console.log(open)
  // };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="contact">
      <div className="container mt-5">
      <div className="contact_text">
        <h2 className="text-center">Contact us</h2>
      </div>
        <div className="contact_form row mt-5 justify-content-between">
          <div className="contact_form_input p-4 ml-0 ml-md-4 col-12 col-md-9 col-lg-6">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <TextField
                      id="standard-basic"
                      label="Email Address"
                      type="email"
                      value={email}
                      name="email"
                      placeholder="viktoria@email.com"
                      onChange={(e) => setEmail(e.target.value)}/>
              </Form.Row>
              <Form.Row>
                <TextField
                      id="standard-basic"
                      label="Your Name"
                      type="text"
                      value={name}
                      name="name"
                      placeholder="Viktoria Lan"
                      onChange={(e) => setName(e.target.value)}/>
              </Form.Row>
              <Form.Row>
                <TextField
                      id="standard-textarea"
                      label="Message"
                      multiline
                      value={message}
                      name="message"
                      rows="6"
                      placeholder="Hello Bteks, I would like to create my app with your company."
                      onChange={(e) => setMessage(e.target.value)}/>

              </Form.Row>
              {/* <Button type="submit" className="mt-2" variant="contained" style={{color: "white", background:"#32a2b8", width:"100%"}}">
                  Link
                </Button> */}
              <Button type="submit" className="mt-2" variant="info" block>
                Send
              </Button>
            </Form>
            <Snackbar
              open={open}
              onClose={handleClose}
              // TransitionComponent={transition}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">message sent successfuly</span>}
            />
          </div>
          <div className="contact_form_info p-4 ml-0 ml-md-3 mt-2 mt-md-0 col-12 col-md-6 col-lg-4">
          <h2>Get in touch</h2>
          <p>Use this form to send us message and start the conversation with our best lawyers.</p>
          </div>
          </div>
      </div>
    </div>
  );
};


export default Contact;