import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import ScrollToNext from '@components/ScrollToNext';

class ContactPage extends Component {

    constructor() {
        super();
        this.contactRef = React.createRef();

        this.state = {
            name: '',
            subject: '',
            email: '',
            message: '',
            errors: {}
        }
    }

    render() {
        const {theme: {colorPrimary, colorHighlight, bgPrimary, textPrimary}} = this.context;

        return (
            <div className="contact-page" style={{backgroundColor: bgPrimary}}>
                <style jsx="true">
                    {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
                </style>
                <div className="content-grid" style={{button: colorPrimary}}>

                    <h1 style={{color: colorPrimary}}>Contact</h1>
                    <p>Do you have a project you'd want me to jump in or want to get in touch? Just leave me a message
                        and I'll get back to you as soon as I can.</p>

                    <form name="sentMessage" className="center-div" action="https://formspree.io/nabil6391@gmail.com"
                          method="POST">

                            <div className="row">
                                <input type="email" name="_replyto" className="form-control"
                                       placeholder="Your Email *" id="email" required
                                       data-validation-required-message="Please enter your email address."/>
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="row">
                                <input type="text" name="_subject" className="form-control" placeholder="Subject *"
                                       id="subject" required
                                       data-validation-required-message="Please enter the topic you want to discuss"/>
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="row">
                                    <textarea name="name" className="form-control" placeholder="Your Message *"
                                              id="message" required
                                              data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>

                        <button type="submit" className="btn btn-xl"><i className="fa fa-paper-plane"></i> Send</button>
                    </form>

                </div>
                <ScrollToNext pageSelector=".portfolio-page"/>
            </div>
        );
    };
}

ContactPage.contextTypes = {
    theme: PropTypes.any
};

export default ContactPage;
