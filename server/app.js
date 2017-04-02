import express from 'express';
import path from 'path';
let app = express();
import Crawler from './Crawler';

const tags = [
  {
    'tag': 'Segurança',
    'links': [
      'https://medium.com/@roselmamendes/todas-as-pessoas-deveriam-saber-o-que-%C3%A9-seguran%C3%A7a-digital-59ea745a4763#.ax61l6p4c'
    ]
  },
  {
    'tag': 'JS',
    'links': [
      'http://sinonjs.org/',
      'https://medium.com/@vrathore/web-assembly-a-gentle-introduction-49a959a3201a',
      'https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html'
    ]
  }
];

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/tags-list', (req, res, next) => {
  Promise.all(Crawler.build_tag_links(tags)).then((tags) => {

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
