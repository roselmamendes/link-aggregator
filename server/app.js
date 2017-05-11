import express from 'express';
import path from 'path';
let app = express();
import Crawler from './Crawler';

const tags_db = [
  {
    'tag': 'Segurança',
    'links': [
      'https://medium.com/@roselmamendes/todas-as-pessoas-deveriam-saber-o-que-%C3%A9-seguran%C3%A7a-digital-59ea745a4763#.ax61l6p4c'
    ]
  },
  {
    'tag': 'Arquitetura',
    'links': [
      'https://medium.com/@priya104/onion-architecture-b285ca3a2033#.89yf48c8q',
      'https://8thlight.com/blog/uncle-bob/2012/05/15/NODB.html',
      'https://github.com/luanReis/clean-architecture-example',
      'http://www.ben-morris.com/the-problem-with-tiered-or-layered-architecture/',
      'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      'https://medium.com/@_rchaves_/building-microfrontends-part-ii-joining-apps-together-dfa1b6f17d3e'
    ]
  },
  {
    'tag': 'JS',
    'links': [
      'http://sinonjs.org/',
      'https://medium.com/@vrathore/web-assembly-a-gentle-introduction-49a959a3201a',
      'https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html'
    ]
  },
  {
    'tag': 'Delivery',
    'links': [
      'https://leankit.com/learn/kanban/what-is-value-stream-mapping/',
      'https://medium.com/@goforcd/tracing-our-path-to-production-mingles-journey-using-gocd-31ce8d919556'
    ]
  },
  {
    'tag': 'Cloud',
    'links': [
      'https://www.thoughtworks.com/insights/blog/lost-promise-cloud?utm_campaign=shareaholic&utm_medium=twitter&utm_source=socialnetwork',
      'https://medium.com/capital-one-developers/serverless-is-the-paas-i-always-wanted-9e9c7d925539'
    ]
  }
];

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/tags-list', (req, res, next) => {
  var tags_to_treat =JSON.parse(JSON.stringify(tags_db));;
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
