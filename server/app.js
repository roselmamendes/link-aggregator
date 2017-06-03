import express from 'express';
import path from 'path';
let app = express();
import Crawler from './Crawler';
import tags_list from './tags';

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/tags-list', (req, res, next) => {
  var tags_to_treat =JSON.parse(JSON.stringify(tags_list));;
  Promise.all(Crawler.build_tag_links(tags_to_treat)).then((tags) => {
    var tags_json = tags.map((tag) => {
      return {
        'title': tag.tag,
        'links': tag.links.map((link) => {
          return {
            'title': link.title,
            'image': link.image,
            'url': link.url
          }
        })
      }
    });


    res.send(tags_json);
  }).catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('link-aggregator listening on port 3000!');
});
