import metatags from 'metatags';

export default class Crawler{

  static build_tag_links(tags){
    return tags.map((tag, index) => {
      tag.links = Crawler.read_links(tag.links);
      return tag;
    });
  }

  static read_links(links) {
    return links.map((link, index) => {

      var link_data = Crawler.call_metatags(link);

      return {
        "url": link_data.url,
        "image": link_data.otherimages[0].src,
        "title": link_data.title
      }
    });
  }

  static call_metatags(link){
    var link_data;
    metatags(link, (error, data) => {
      if(error){
        console.error(error);
      }else {

        link_data = data;

      }

    });

    return link_data;

  }

};
