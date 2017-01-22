import metatags from 'metatags';

export default class {
  read_links(links) {
    var rendered_links = [];

    let pages = this.get_metatags(links);

    pages.map((page, index) => {
      rendered_links.push(
        {
          "url": page.url,
          "image": page.otherimages[0].src,
          "title": page.title
        });
    });

    return rendered_links;
  }

  get_metatags(links) {
    return links.map(this.treat_data());
  }

  treat_data(page, index){
      var page;

      metatags(link, (error, data) => {
        if(error){
          console.error(error);
        }

        page = data;

      });

      return page;
  }

};
