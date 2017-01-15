import React from 'react';
import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';

class Tag extends React.Component {

  render() {
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

    const tags = this.props.links.slice(0, 3).map((link, index) => {

        return (
          <a key={index} href={link.url}>
            <GridTile
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
      <Subheader>{this.props.titleTag}</Subheader>
      <GridList style={styles.gridList}>
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
