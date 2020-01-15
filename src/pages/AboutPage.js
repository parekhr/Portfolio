import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

  return(
    <div>
      <Hero title={props.title} />
      <Content>
        <p>Hello! My name is Ryan Parekh and I am a recent graduate from Wentworth Institute of Technology. I studied Computer Engineering and have a passion for programming.
        I have experience with Java, Python3, and, as you can notice, a little bit with web development using ReactJS, ReactBootstrap, Express, HTML5, CSS3, and JavaScript.</p>
        <p>My goal for the future is to work a job in the Software Development or Software Engineering field creating apps that help a company become even more successful.</p>
        <p>As for hobbies, I like to play video games, watch basketball, and even play the piano once in a while (although I'm still a beginner).</p>
      </Content>
    </div>
  );
}

export default AboutPage;
