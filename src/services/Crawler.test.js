import {expect} from 'chai';
import Crawler from './Crawler';
import sinon from 'sinon';

describe('crawler tests', () => {
  let sandbox = sinon.sandbox.create();

  beforeEach(() => {
    let stubbed_call_metatags = sandbox.stub(Crawler, 'call_metatags');
    var result_to_return = [
      {"title": "no medium", "otherimages":[{"src": "https://image_medium.com"}], "url": 'https://medium.com'},
      {"title": "no twitter", "otherimages":[{"src": "https://image_twitter.com"}], "url": 'https://twitter.com'},
      {"title": "no face", "otherimages":[{"src": "https://image_face.com"}], "url": 'https://face.com'}
    ];
    stubbed_call_metatags.onCall(0).returns(result_to_return[0]);
    stubbed_call_metatags.onCall(1).returns(result_to_return[1]);
    stubbed_call_metatags.onCall(2).returns(result_to_return[2]);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should receive a list of links', () => {
    let actual_result = Crawler.read_links(['https://medium.com', 'https://twitter.com']);

    expect(actual_result).to.have.length(2);

    var expected_result = [
      {"url": "https://medium.com", "title": "no medium", "image": "https://image_medium.com"},
      {"url": "https://twitter.com", "title": "no twitter", "image": "https://image_twitter.com"}
    ];
    expect(actual_result).to.eql(expected_result);
  });

  it('build_links should return the tags with the links information', () => {
    const tags = [
      {
        "tag": "Segurança",
        "links": [
          "https://medium.com"
        ]
      },
      {
        "tag": "Clean Architecture",
        "links": [
          "https://twitter.com",
          "https://face.com"
        ]
      }
    ];

    const expected_tags = [
      {
        "tag": "Segurança",
        "links": [
          {"url": "https://medium.com", "title": "no medium", "image": "https://image_medium.com"}
        ]
      },
      {
        "tag": "Clean Architecture",
        "links": [
          {"url": "https://twitter.com", "image": "https://image_twitter.com", "title": "no twitter"},
          {"url": "https://face.com", "title": "no face", "image": "https://image_face.com"}
        ]
      }
    ];

    var tags_with_link_info = Crawler.build_tag_links(tags);

    expect(tags_with_link_info[0].tag).to.equal(expected_tags[0].tag);
    expect(tags_with_link_info[0].links).to.eql(expected_tags[0].links);

    expect(tags_with_link_info[1].tag).to.equal(expected_tags[1].tag);

    expect(tags_with_link_info[1].links[0]).to.eql(expected_tags[1].links[0]);
    expect(tags_with_link_info[1].links[1]).to.eql(expected_tags[1].links[1]);

  });

});