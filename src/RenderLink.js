import React from 'react';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';

const style = {
  width: 600,
  height: 200
};

const cardMediaStyle = {
  height: 50
};


const RenderLink = () => (
  <Card style={style}>
    <CardMedia style={cardMediaStyle}>
      <img src="https://cdn-images-1.medium.com/max/2000/1*YvdKF-7hYrieVNijUGxHrQ.jpeg" />
    </CardMedia>
    <CardTitle title="Todas as pessoas deveriam saber o que é Segurança Digital"/>
    <CardText>
      Em outubro fiz uma oficina sobre Segurança na Rede no Encontrão das Blogueiras Negras no Recife. E uma coisa que ficou comigo foi essa visão que nem todo mundo tem acesso/consciência/pensa sobre o que significa estar na rede.
      Seja você tecnologista ou não, uma coisa é certa, segurança digital não é discutida, mas ela está ali bem próxima de nós.
    </CardText>
  </Card>
);

export default RenderLink;
