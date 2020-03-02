import React from 'react';

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
              title: 'My Github',
              subTitle: 'Check out my projects!',
              imgSrc: github,
              link: 'https://github.com/parekhr',
              selected: false
            },
            {
              id: 1,
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
