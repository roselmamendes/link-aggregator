import React from 'react';
import Tag from './Tag';

class Tags extends React.Component {
  render() {
    const tagsList = this.props.tagsList.map((tag, index) => {
      return (<Tag key={index} titleTag={tag.tag} links={tag.links}/>);
    });

    return (
      <div>
        {tagsList}
      </div>
    );
  };
}

export default Tags;
