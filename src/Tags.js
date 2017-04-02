import React from 'react';
import Tag from './Tag';
import RaisedButton from 'material-ui/RaisedButton';

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
        <RaisedButton style={style.button} label="Criar Tag" secondary={true}/>
        <RaisedButton style={style.button} label="Adicionar link" secondary={true}/>
        {tagsList}
      </div>
    );
  };
}

export default Tags;
