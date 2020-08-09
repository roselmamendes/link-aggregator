const metafetch = require('metafetch');

module.exports = class Crawler{

  static promise_read_links(link){
    return new Promise((resolve, reject) => {
      metafetch.fetch(link, (error, data) => {
        if(error){
          reject(error);
        }else {
          resolve(data);
        }

      });
    });
  }

  static promise_build_tag_links(tag){
    return new Promise((resolve, reject) => {

      var links_promises = tag.links.map(Crawler.promise_read_links);
      return Promise.all(links_promises).then((links_data) => {
        tag.links = links_data;
        resolve(tag);
      }).catch(error => {
        reject(error);
      });

    });
  }

  static build_tag_links(tags){

    console.log('[Server] Receiving links metadata');

    return tags.map(Crawler.promise_build_tag_links);
  }

};
