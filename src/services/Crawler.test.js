import {expect} from 'chai';
import Crawler from './Crawler';
import sinon from 'sinon';

describe('crawler tests', () => {

  it('should receive a list of links', () => {
    var crawler = new Crawler();
    const links_to_read = ['https://medium.com', 'https://twitter.com'];
    const stubbed_get_metatags = sinon.stub(crawler, 'get_metatags');
    var result_to_return = [
      {"title": "no medium", "otherimages":[{"src": "https://image_medium.com"}], "url": links_to_read[0]},
      {"title": "no twitter", "otherimages":[{"src": "https://image_twitter.com"}], "url": links_to_read[1]}
    ];
    stubbed_get_metatags.returns(result_to_return);

    let actual_result = crawler.read_links(links_to_read);

    expect(actual_result).to.have.length(2);

    var expected_result = [
      {"url": "https://medium.com", "title": "no medium", "image": "https://image_medium.com"},
      {"url": "https://twitter.com", "title": "no twitter", "image": "https://image_twitter.com"}
    ];
    expect(actual_result).to.eql(expected_result);
  });

  // it('should add the url into the meta returned', () => {
  //   var crawler = new Crawler();
  //   const links_to_read = ['https://medium.com'];
  //   // jest.mock('metatags');
  //   // var stubbed_metatags = require('metatags');
  //
  //   // var to_retun = {
  //   //   "title": "no medium",
  //   //   "otherimages": [{"src": "https://image_medium.com"}]
  //   // };
  //   // stubbed_metatags.mockImplementation(() => to_retun);
  //
  //   var actual_result = crawler.read_links(links_to_read);
  //
  //   // expect(stubbed_metatags.mock.calls).toContain(links_to_read[0]);
  //
  //   var expected_result = [
  //     {"url": "https://medium.com", "title": "no medium", "image": "https://image_medium.com"}
  //   ];
  //   expect(actual_result).to.have.length(1);
  //   expect(actual_result[0].url).to.eql(links_to_read[0]);
  //
  // });

});