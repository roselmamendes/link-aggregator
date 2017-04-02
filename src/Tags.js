import React from 'react';
import Tag from './Tag';

class Tags extends React.Component {
  render() {

    const style = {
      tags:{
        margin: '0 auto',
        width: 600
      }

    };

    const tagsList = this.props.tagsList.map((tag, index) => {
      return (<Tag key={index} titleTag={tag.title} links={tag.links}/>);
    });

    return (
      <div style={style.tags}>
        {tagsList}
      </div>
    );
  };
}

export default Tags;
