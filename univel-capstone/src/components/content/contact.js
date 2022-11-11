import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CgMail } from 'react-icons/cg';
import { BsFillPhoneFill } from 'react-icons/bs';
import contactStyle from "./contact.module.css";

export default function Contact(props) {
    return (
        <section>
            <div className={contactStyle.holdContact}>
                <div className={contactStyle.holdInput}>
                    <h1 className={contactStyle.contactHeader}>Leave Us Your Info</h1>
                    <div className={contactStyle.contactBack}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFullName">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" className={contactStyle.formIput} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                                <Form.Label>Phone no</Form.Label>
                                <Form.Control type="number" placeholder="Phone no" className={contactStyle.formIput} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className={contactStyle.formIput} />
                            </Form.Group>
                            <Button variant="primary" className={contactStyle.subButin} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className={contactStyle.holdInput}>
                    <h1 className={contactStyle.contactHeader}>Contact Information</h1>
                    <div>
                        <div className={contactStyle.contactBack}>
                            <div className={contactStyle.holdIcon}>
                                <CgMail className={contactStyle.contactIcon} />
                            </div>
                            <div className={contactStyle.holdText}>
                                <p className={contactStyle.pTag}>
                                    <span>Country:</span>
                                    <span>Bangladesh</span>
                                </p>
                                <p className={contactStyle.pTag}>
                                    <span>City:</span>
                                    <span>Dhaka</span>
                                </p>
                                <p className={contactStyle.pTag}>
                                    <span>Street:</span>
                                    <span>35 vhatara, Badda</span>
                                </p>
                            </div>
                        </div>
                        <div className={contactStyle.contactBack}>
                            <div className={contactStyle.holdIcon}>
                                <CgMail className={contactStyle.contactIcon} />
                            </div>
                            <div className={contactStyle.holdText}>
                                <p className={contactStyle.pTag}>
                                    <span>Email:</span>
                                    <span>youremail@gmail.com</span>
                                </p>
                                <p className={contactStyle.pTag}>
                                    <span>Skype:</span>
                                    <span>@yourusername</span>
                                </p>
                                <p className={contactStyle.pTag}>
                                    <span>Telegram:</span>
                                    <span>@yourusername</span>
                                </p>
                            </div>
                        </div>
                        <div className={contactStyle.contactBack}>
                            <div className={contactStyle.holdIcon}>
                                <BsFillPhoneFill className={contactStyle.contactIcon} />
                            </div>
                            <div className={contactStyle.holdText}>
                                <p className={contactStyle.pTag}>
                                    <span>Support services:</span>
                                    <span>15369</span>
                                </p>
                                <p className={contactStyle.pTag}>
                                    <span>Office:</span>
                                    <span>+58 (021)356 587 235</span>
                                </p>
                                <p className={contactStyle.pTag}>
                                    <span>Personal:</span>
                                    <span>+58 (021)356 587 235</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

