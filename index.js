const React = require('react');
const ReactDOM = require('react-dom');

const Carousel = require('./public/js/carousel.js')
const Grid = require('./public/js/grid.js')
const SeasonDetail = require('./public/js/season-detail.js')
const AlbumDetail = require('./public/js/album-detail.js')
const VideoDetail = require('./public/js/video-detail.js')
const Footer = require('./public/js/footer.js')

if ($('#home-grid').length)
  ReactDOM.render(
    <div>
      <Carousel title="Movies" source="/movies" limit="5" href="/movies/:id" />
      <Carousel title="Series" source="/series" limit="5" href="/series/:id" />
      <Carousel title="Plays"  source="/plays"  limit="5" href="/plays/:id" />
    </div>,
    document.getElementById('home-grid')
  );

if ($('#movies-grid').length)
  ReactDOM.render(
    <Grid title="Movies" source="/movies" limit="5" href="/movies/:id" />,
    document.getElementById('movies-grid')
  );

if ($('#movie-details').length) {
  var movie = '/movies/' + $('#movie-details').data('id');
  ReactDOM.render(
    <VideoDetail source={movie} />,
    document.getElementById('movie-details')
  );
}

if ($('#series-grid').length)
  ReactDOM.render(
    <Grid title="Series" source="/series" limit="5" href="/series/:id" />,
    document.getElementById('series-grid')
  );

if ($('#season-details').length) {
  var season = '/series/' + $('#season-details').data('id');
  ReactDOM.render(
    <SeasonDetail source={season} />,
    document.getElementById('season-details')
  );
}

if ($('#music-grid').length)
  ReactDOM.render(
    <Grid title="Music" source="/albums" limit="5" href="/albums/:id" />,
    document.getElementById('music-grid')
  );

if ($('#album-details').length) {
  var album = '/albums/' + $('#album-details').data('id');
  ReactDOM.render(
    <AlbumDetail source={album} />,
    document.getElementById('album-details')
  );
}

if ($('#plays-grid').length)
  ReactDOM.render(
    <Grid title="Plays" source="/plays" limit="5" href="/plays/:id" />,
    document.getElementById('plays-grid')
  );

if ($('#play-details').length) {
  var play = '/plays/' + $('#play-details').data('id');
  ReactDOM.render(
    <VideoDetail source={play} />,
    document.getElementById('play-details')
  );
}

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
