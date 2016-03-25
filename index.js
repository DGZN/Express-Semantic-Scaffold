const React         = require('react');
const ReactDOM      = require('react-dom');

const App           = require('./public/js/app.js')
const Grid          = require('./public/js/grid.js')
const Footer        = require('./public/js/footer.js')
const GridApp       = require('./public/js/gridApp.js')
const SetApp        = require('./public/js/setApp.js')
const HomeApp       = require('./public/js/homeApp.js')
const MyAccount     = require('./public/js/my-account.js')
const SeasonApp     = require('./public/js/seasonApp.js')
const AlbumDetail   = require('./public/js/album-detail.js')
const CollectionApp = require('./public/js/collectionApp.js')
const VideoDetail   = require('./public/js/video-detail.js')
const SimilarTitles = require('./public/js/similar-titles.js')

if ($('#home').length) {
  ReactDOM.render(
    <HomeApp />,
    document.getElementById('home')
  );
}

if ($('#movies').length) {
  ReactDOM.render(
    <GridApp title="Movies" source="/movies" limit="5" href="/movies/:id" />,
    document.getElementById('movies')
  );
}

if ($('#movie').length) {
  var movie = '/movies/' + $('#movie').data('id');
  ReactDOM.render(
    <App source={movie} />,
    document.getElementById('movie')
  );
}

if ($('#series').length) {
  ReactDOM.render(
    <GridApp title="Series" source="/series" limit="5" href="/series/:id" />,
    document.getElementById('series')
  );
}

if ($('#season').length) {
  var season = '/series/' + $('#season').data('id');
  ReactDOM.render(
    <SeasonApp source={season} />,
    document.getElementById('season')
  );
}

if ($('#music').length) {
  ReactDOM.render(
    <GridApp title="Music" source="/albums" limit="5" href="/albums/:id" thumbPath="songs" />,
    document.getElementById('music')
  );
}

if ($('#album-details').length) {
  var album = '/albums/' + $('#album-details').data('id');
  ReactDOM.render(
    <AlbumDetail source={album} />,
    document.getElementById('album-details')
  );
}

if ($('#plays').length) {
  ReactDOM.render(
    <GridApp title="Plays" source="/plays" limit="5" href="/plays/:id" />,
    document.getElementById('plays')
  );
}

if ($('#play').length) {
  var play = '/plays/' + $('#play').data('id');
  ReactDOM.render(
    <App source={play} />,
    document.getElementById('play')
  );
}

if ($('#collections').length) {
  ReactDOM.render(
    <SetApp title="Collections" source="/sets/collections" limit="5" href="/collections/:id" />,
    document.getElementById('collections')
  );
}

if ($('#collection').length) {
  var collection = '/sets/' + $('#collection').data('id');
  ReactDOM.render(
    <CollectionApp source={collection} />,
    document.getElementById('collection')
  );
}


if ($('#footer').length) {
  ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
  );
}
