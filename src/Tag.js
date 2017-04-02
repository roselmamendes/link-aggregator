import React from 'react';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

class Tag extends React.Component {

  render() {
    const styles = {
      subheader: {
        color: '#9C27B0',
        fontSize: 30,
        fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif'
      },
      titleStyle: {
        color: 'rgba(243, 249, 243, 0.95)',
        fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif'
      },
      listitem: {
        fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif'
      }
    };

    const tags = this.props.links.slice(0, 3).map((link, index) => {

        return (
          <a key={index} href={link.url}>
            <ListItem style={styles.listitem} primaryText={link.title}/>
          </a>
        );

    });

    return (<div>
      <Subheader style={styles.subheader}>{this.props.titleTag}</Subheader>
      <List>
        {tags}
      </List>
      <FontIcon className="material-icons">more_horiz</FontIcon>
    </div>);
  }
}

Tag.propTypes = {
  titleTag: React.PropTypes.string.isRequired,
  links: React.PropTypes.array.isRequired
}

export default Tag;
