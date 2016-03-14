const React = require('react');
const ReactDOM = require('react-dom');

const Carousel = require('./public/js/carousel.js')
const Grid = require('./public/js/grid.js')
const Footer = require('./public/js/footer.js')

if ($('#home').length)
  ReactDOM.render(
    <div>
      <Carousel title="Movies" source="/movies" limit="5" />
      <Carousel title="Series" source="/series" limit="5" href="/season" />
      <Carousel title="Plays"  source="/plays"  limit="5" />
    </div>,
    document.getElementById('home')
  );

if ($('#movies-grid').length)
  ReactDOM.render(
    <Grid title="Movies" source="/movies" limit="5" />,
    document.getElementById('movies-grid')
  );

if ($('#series-grid').length)
  ReactDOM.render(
    <Grid title="Series" source="/series" limit="5"  href="/season" />,
    document.getElementById('series-grid')
  );

if ($('#music-grid').length)
  ReactDOM.render(
    <Grid title="Music" source="/albums" limit="5" href="/album" />,
    document.getElementById('music-grid')
  );

if ($('#plays-grid').length)
  ReactDOM.render(
    <Grid title="Plays" source="/plays" limit="5" />,
    document.getElementById('plays-grid')
  );

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
