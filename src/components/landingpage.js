/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() { 
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src="https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png"
                        alt="avatar"
                        className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Frontend Web Developer</h1>

                            <hr/>

                            <p>HTML | CSS | Javascript | React | NodeJS</p>

                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* FreeCodeCamp */}
                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>

                                {/* YouTube */}
                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;