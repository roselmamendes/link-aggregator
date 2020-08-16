import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

class Tag extends React.Component {

  render() {
    const tagsCard = this.props.links.slice(0, 3).map((link, index) => {
     
      return (
        <li key={index} className="link">
          <a href={link.url}>{link.title}</a>
        </li>
      );
    });

    return (
      <div>
        <div className="tagName">{this.props.titleTag}</div>
        <ul>
          {tagsCard}
        </ul>
        <Icon>more_horiz</Icon>
      </div>
    );
  }
}

Tag.propTypes = {
  titleTag: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default Tag;
