import request from 'superagent';

module.exports = function (){
    return request
      .get('http://localhost:3000/tags-list')
      .end((error, response) => {
        return response.body;
      });
}