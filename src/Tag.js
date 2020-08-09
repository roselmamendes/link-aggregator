import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

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
          <a href={link.url}><CardMedia title={link.title}>
            <img style={styles.img} src={imgsrc}/>
          </CardMedia></a>
        </Card>
      );
    });

    return (<div>
      <div style={styles.subheader}>{this.props.titleTag}</div>

      {tagsCard}

      <Icon>more_horiz</Icon>
    </div>);
  }
}

Tag.propTypes = {
  titleTag: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default Tag;
