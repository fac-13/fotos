exports.get = (req, res, next) => {
    const { imageID } = req.params;
    // Have an IF statement - so if there is an image based on the imageID, then otherwise go to 404 page (next())
    res.render('photo', { activePage: { profile: true }, loggedIn: true, photo: { image_url: 'https://images.unsplash.com/40/10294420724_0300cf921d_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b1033883b58241450dec9c72f8148b3&auto=format&fit=crop&w=1500&q=80', title: 'Palm trees', description: 'Palm trees on a beach', username: 'helen', date: '2018-03-22 23:23:10' } });
};  