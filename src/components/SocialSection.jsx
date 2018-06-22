import React, { Component } from 'react';

class SocialSection extends Component {
    constructor() {
        super()
        this.state = {
            email_visible: false 
        }
    }
    toggleEmail = () => {
        if (this.state.email_visible) {
            this.setState({email_visible: false})
        } else {
            this.setState({email_visible: true})
        }
    }
    render() {
        return (
            <div class="col-md-offset-4 col-md-4" id="social-media">
                <a href="https://www.facebook.com/mcardillo55">
                    <i class="fa fa-facebook-square fa-lg"></i>
                </a>
                <a href="https://twitter.com/mcards55">
                    <i class="fa fa-twitter-square fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/mcardillo55">
                    <i class="fa fa-linkedin-square fa-lg"></i>
                </a>
                <i class="fa fa-envelope fa-lg" onClick={this.toggleEmail}></i>
                {this.state.email_visible ? <span id="email-address">mike@mjcardillo.com</span> : null}
            </div>
        )
    }
};

export default SocialSection;