import React from 'react';
import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';

class Tag extends React.Component {

  render() {
    const styles = {
      subheader: {
        color: '#9C27B0',
        fontSize: 30,
        fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif'
      },
      gridtile: {
        border: '5px solid yellowgreen'
      },
      gridList: {
        overflowX: 'auto'
      },
      titleStyle: {
        color: 'rgba(243, 249, 243, 0.95)',
        fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif'
      },
    };

    const tags = this.props.links.slice(0, 3).map((link, index) => {

        return (
          <a key={index} href={link.url}>
            <GridTile
              style={styles.gridtile}
              title={link.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={link.image}/>
            </GridTile>
          </a>
        );

    });

    return (<div>
      <Subheader style={styles.subheader}>{this.props.titleTag}</Subheader>
      <GridList style={styles.gridList} cols='1'>
        {tags}
      </GridList>
      <FontIcon className="material-icons">more_horiz</FontIcon>
    </div>);
  }
}

Tag.propTypes = {
  titleTag: React.PropTypes.string.isRequired,
  links: React.PropTypes.array.isRequired
}

export default Tag;
