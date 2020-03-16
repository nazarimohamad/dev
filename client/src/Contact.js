import React, { useState } from "react";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import {Form, Button} from "react-bootstrap";
import { FaMobile } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {

  const [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [message, setMessage] = useState(''),
        [open, setOpen] = useState(false),
        [transition, setTransition] = useState(undefined)

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
        <h2>Get in touch</h2>
        <p>Use the form bellow to send us message and start the conversation with our best lawyers.</p>
      </div>
        <div className="row mt-5 justify-content-between contact_form">
          <div className="p-4 ml-0 ml-md-4 col-12 col-md-9 col-lg-6 contact_form_input">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
              </Form.Row>
              <Form.Row>
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" value={name} name="name" placeholder="your name" onChange={(e) => setName(e.target.value)}/>
              </Form.Row>
              <Form.Row>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" value={message} name="message" rows="6" placeholder="write your message" onChange={(e) => setMessage(e.target.value)}/>
              </Form.Row>
              <Button type="submit" className="mt-2" variant="info" block>
                Send
              </Button>
            </Form>
            <Snackbar
              open={open}
              onClose={handleClose}
              TransitionComponent={transition}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">message sent successfuly</span>}
            />
          </div>
          <div className="p-4 ml-0 ml-md-3 mt-2 mt-md-0 col-12 col-md-6 col-lg-4 contact_form_info">
            <div className="d-flex flex-column justify-content-around">
              <h4 className="my-4">Contact infromation</h4>
              <h4 className="my-4"><span className="mx-2"><FaMobile style={{color:"#32a2b8"}} /></span>+372 53599795</h4>
              <h4 className="my-4"><span className="mx-2"><MdEmail style={{color:"#32a2b8"}} /></span>hello@bteks.co</h4>
              <h4 className="my-4"><span className="mx-2"><MdLocationOn style={{color:"#32a2b8"}} /></span>Luise 38/a, Tallinn, Estonia</h4>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};


export default Contact;