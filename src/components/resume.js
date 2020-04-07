import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
              <div style={{textAlign: 'center'}}>
                  <img src="https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png" alt="avatar" style={{height: '200px', paddingTop: '2em'}}/>
              </div>
              <h2 style={{paddingTop: '2em'}}>Danwin Ambros-Francis</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
              <hr/>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis ...
              </p>
              <hr/>
              <h5>Address</h5>
              <p> 30 Gordon Sands, Hibiscus Avenue, Gordon's Bay, 7140</p>
              <h5>Phone</h5>
              <p> +27 (72) 072 032 0717</p>
              <h5>Email</h5>
              <p> someone@example.com</p>
              <h5>Website</h5>
              <p> myweb.example.com</p>
              <hr/>

          </Cell>
          <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              
              <Education
                startYear={2010}
                endYear={2012}
                schoolName="My University"
                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis ..."
              />
              <Education
                startYear={2013}
                endYear={2016}
                schoolName="My University"
                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis ..."
              />
              <hr style={{borderTop: '3px solid #E22947'}}/>

              <h2>Experience</h2>

              <Experience 
                startYear={2016}
                endYear={2018}
                jobTitle="Junior Frontend Developer"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis ..."
              />
              <Experience 
                startYear={2018}
                endYear={2020}
                jobTitle="Intermediate Frontend Developer"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis ..."
              />
              <hr style={{borderTop: '3px solid #E22947'}}/>

              <h2>Skills</h2>

              <Skills 
                skill="Javascript"
                progress={50}
              />
              <Skills 
                skill="HTML"
                progress={50}
              />
              <Skills 
                skill="CSS"
                progress={50}
              />
              <Skills 
                skill="SQL"
                progress={50}
              />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
