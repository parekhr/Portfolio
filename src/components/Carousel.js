import React from 'react';

import twitch from '../assets/twitch.png';
import youtube from '../assets/youtube.jpg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';


import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Carousel extends React.Component {

    constructor(props){
      super(props)
      this.state = {
          items: [
            {
              id: 0,
              title: 'My Youtube Channel',
              subTitle: 'Maplestory/League of Legends/Pokemon',
              imgSrc: youtube,
              link: 'https://www.youtube.com/channel/UCJKXbVXSO6AClfUnrw87KzA?view_as=subscriber',
              selected: false
            },
            {
              id: 1,
              title: 'Twitch Channel',
              subTitle: 'I livestream stuff',
              imgSrc: twitch,
              link: 'https://www.twitch.tv/bestribbonna',
              selected: false
            },
            {
              id: 2,
              title: 'My Github',
              subTitle: 'Check out my projects!',
              imgSrc: github,
              link: 'https://github.com/parekhr',
              selected: false
            },
            {
              id: 3,
              title: 'My LinkedIn',
              subTitle: 'Connect with me!',
              imgSrc: linkedin,
              link: 'https://www.linkedin.com/in/ryanparekh/',
              selected: false
            },
          ]
      }
    }


    handleCardClick = (id, card) => {
      console.log(id);
      let items = [...this.state.items];

      items[id].selected = items[id].selected ? false : true;

      items.forEach(item => {
        if(item.id !== id){
          item.selected = false;
        }
      });

      this.setState({
        items
      });
    }

    makeItems = (items) => {
      return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
      })
    }


    render(){
      return(
        <Container fluid={true}>
          <Row className="justify-content-around">
            {this.makeItems(this.state.items)}
          </Row>
        </Container>
      );
    }
}

export default Carousel;
