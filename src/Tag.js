import React from 'react';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

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
      },
      card:{
        marginBottom: 20
      },
      img: {
        width: 250,
        height: 300
      }
    };

    const tagsCard = this.props.links.slice(0, 3).map((link, index) => {
      var imgsrc = 'https://developers.google.com/web/images/content-https-2x.jpg';
      if(link.image){
        imgsrc = link.image;
      }
      return (
        <Card key={index} style={styles.card}>
          <a href={link.url}><CardMedia
            overlay={<CardTitle title={link.title}/>}
          >
            <img style={styles.img} src={imgsrc}/>
          </CardMedia></a>
        </Card>
      );
    });

    return (<div>
      <Subheader style={styles.subheader}>{this.props.titleTag}</Subheader>

      {tagsCard}

      <FontIcon className="material-icons">more_horiz</FontIcon>
    </div>);
  }
}

Tag.propTypes = {
  titleTag: React.PropTypes.string.isRequired,
  links: React.PropTypes.array.isRequired
}

export default Tag;
