import React from 'react';
import Tag from './Tag';

class Tags extends React.Component {
  render() {

    const tagsList = this.props.tagsList.map((tag, index) => {
      return (<Tag key={index} titleTag={tag.title} links={tag.links}/>);
    });

    return (
      <div className='tags'>
        <h1>Links Adicionados</h1>
        {tagsList}
      </div>
    );
  };
}

export default Tags;
