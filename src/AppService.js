import request from 'superagent';

export default function (){
    return request
      .get('http://localhost:3000/tags-list')
      .then((response) => {
        return response.body;
      });
}