import request from 'superagent';

export function getTagList (){
    return request
      .get('http://localhost:3000/tags-list')
      .then((response) => {
        return response.body;
      });
}

export function getRSSFeed(){
  return request
  .get('http://localhost:3000/rss-feed')
  .then((response) => {return response.body});
}