import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import selfphoto from '../assets/selfphoto.JPG';

function AboutPage(props){

  return(
    <div>
      <Hero title={props.title} />
      <Content>
        <img src={selfphoto} height={350} width={450} />
        <p className="aboutPageInfo">Hello! My name is Ryan Parekh and I am a recent graduate from Wentworth Institute of Technology. I studied Computer Engineering and have a passion for programming.
        I have experience with Java, Python3, and, as you can notice, a little bit with web development using ReactJS, ReactBootstrap, Express, HTML5, CSS3, and JavaScript.
        My goal for the future is to work a job in the Software Development or Software Engineering field creating apps that help a company become even more successful.
        As for hobbies, I like to play video games, watch basketball, and even play the piano once in a while.</p>
      </Content>
    </div>
  );
}

export default AboutPage;
