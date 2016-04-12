import React       from 'react'
import TimeBlockHead from './TimeBlockHead'

export default React.createClass({
  play() {
    $('.live-player-modal.modal').modal('show');
    setTimeout(function(){
      jwplayer("live-player").setup({
      	height: '95%',
      	width: '95%',
        sources: [
          { 'file': "http://38.96.148.118/MelodyAflam/smil:aflam.smil/playlist.m3u8"}
        ],
        rtmp: {
          'bufferlength': 25
        }
      });
    })
  },

  render() {
    return (
      <div className="fourteen wide computer sixteen wide tablet column">
        <table className="ui schedule celled fixed table">
          <TimeBlockHead right={this._moveRight}  />
          <table className="ui schedule fixed table">
            <tbody>
              <tr data-row="1" data-img="M21003.jpg">
                <td>Logo</td>
                <td>Hekayty Maa Elzaman</td>
                <td></td>
                <td></td>
                <td>Khaly Balak Men Zozo</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr data-row="2" data-img="M21044.jpg">
                <td>Logo</td>
                <td>Darb Ellabana</td>
                <td>Elketkat</td>
                <td>Gabarout Emraa</td>
                <td>Entakhibo Dr Soliman</td>
                <td>Entakhibo Dr Soliman</td>
                <td></td>
                <td>Gabarout Emraa</td>
              </tr>
              <tr className="selectedChannel">
                <td>Logo</td>
                <td id="selectedChannelBlock">
                  <div id="channel-content">
                    <h3 className="title">Zarf Sehy</h3>
                    <img src="/images/play-button.png" className="ui image schedule-play" onClick={this.play} />
                    <hr/><img src="/images/melody/M22109.jpg" className="ui small image thumb selected-thumb"/>
                    <div className="blockDetails">
                      <div className="title">Zarf Sehy</div><span className="episodes">S2 | Ep7</span><span className="time">8:45pm - 10:45pm</span><span className="description">The film revolves around the figure of Omar ( Abdulaziz Karim ) . Tragedy begins life since he was a small child where he witnessed the exchange of fire between his father ( Mahmoud soldier ) and police forces , and despite the fact that his father left his home.</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-row="3" data-img="M21042.jpg">
                <td>Logo</td>
                <td>Zarf Sehy</td>
                <td></td>
                <td></td>
                <td>Wbelwaldyen Ehsanan</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr data-row="4" data-img="M21043.jpg">
                <td>Logo</td>
                <td>Youm Maloush Lazma</td>
                <td>Giran Elsaad</td>
                <td>Wahda Be Wahda</td>
                <td>Man Oheb</td>
                <td>Akher Alregal Almohtrameen</td>
                <td></td>
                <td>El Kelma Al Akhira</td>
              </tr>
              <tr data-row="5" data-img="M21038.jpg">
                <td>Logo</td>
                <td>Salama</td>
                <td></td>
                <td></td>
                <td>Giran Elsaad</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr data-row="6" data-img="M21003.jpg">
                <td>Logo</td>
                <td>Hekayty Maa Elzaman</td>
                <td>Bahawat Akher Zaman</td>
                <td>Aby Fouq Elshagara</td>
                <td>Eltahady</td>
                <td>Hob Fe Elzenzana</td>
                <td>Ragol Bemaana Elkalema</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </table>
      </div>
    );
  }
});
