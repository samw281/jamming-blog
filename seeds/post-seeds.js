const { Post } = require('../models');

const postdata = [
  {
    title: 'XOXO cray kickstarter gluten-free fingerstache.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 2
  },
  {
    title: 'Organic mumblecore cloud bread typewriter.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 3
  },
  {
    title: 'Farm-to-table VHS tilde letterpress man bun air plant blog banh mi.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Messenger bag affogato cardigan.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Sriracha kale chips glossier squid vape.',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 2
  },
  {
    title: 'YOLO raclette actually roof party salvia poutine live-edge.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 3
  },
  {
    title: 'Fanny pack fashion axe beard asymmetrical polaroid.',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Taiyaki gluten-free direct trade readymade chambray.',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Mumblecore bespoke paleo.',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 4
  },
  {
    title: 'Authentic taxidermy master cleanse.',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
