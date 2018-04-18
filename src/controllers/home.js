exports.get = (req, res) => {
  res.render('home', {
    activePage: { home: true }, loggedIn: false, data: [{
      username: 'helen',
      title: '1',
      date: '2423-21-12',
      image_url: 'https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=923deb764c09e84be3f0b05317a2116d&auto=format&fit=crop&w=1498&q=80',
      description: 'fsfssfsd'
    },
    {
      username: 'jennah',
      title: 'Palmmm',
      date: '2018-12-22',
      image_url: 'https://images.unsplash.com/40/10294420724_0300cf921d_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b1033883b58241450dec9c72f8148b3&auto=format&fit=crop&w=1500&q=80',
      description: 'Treeees'
    }]

  });
};
