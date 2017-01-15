import React from 'react';
import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  listItem: {
    width: 400,
    height: 400
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const Tag = () => (
  <div>
    <Subheader>Roselma's medium</Subheader>
    <GridList style={styles.gridList}>

      <GridTile
        title="Todas as pessoas deveriam saber o que é Segurança Digital"
        titleStyle={styles.titleStyle}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      >
        <img src="https://cdn-images-1.medium.com/max/2000/1*YvdKF-7hYrieVNijUGxHrQ.jpeg" />
      </GridTile>

      <GridTile
        title="Todas as pessoas deveriam saber o que é Segurança Digital"
        titleStyle={styles.titleStyle}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      >
        <img src="https://cdn-images-1.medium.com/max/2000/1*YvdKF-7hYrieVNijUGxHrQ.jpeg" />
      </GridTile>

      <GridTile
        title="Todas as pessoas deveriam saber o que é Segurança Digital"
        titleStyle={styles.titleStyle}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      >
        <img src="https://cdn-images-1.medium.com/max/2000/1*YvdKF-7hYrieVNijUGxHrQ.jpeg" />
      </GridTile>

    </GridList>
    <FontIcon className="material-icons">more_horiz</FontIcon>
  </div>
);

export default Tag;
