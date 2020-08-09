import React from 'react';
import Tag from './Tag';
import Button from '@material-ui/core/Button';

class Tags extends React.Component {
  render() {

    const style = {
      tags:{
        margin: '0 auto',
        width: 600
      },
      button: {
        margin: 12
      }

    };

    const tagsList = this.props.tagsList.map((tag, index) => {
      return (<Tag key={index} titleTag={tag.title} links={tag.links}/>);
    });

    return (
      <div style={style.tags}>
        <Button style={style.button} color="secondary">Criar Tag</Button>
        <Button style={style.button} color="secondary">Adicionar link</Button>
        {tagsList}
      </div>
    );
  };
}

export default Tags;
