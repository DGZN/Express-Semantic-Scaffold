import React from 'react'

import Carousel from './Carousel'

export default React.createClass({
  getInitialState() {
    return {
      language: 'en'
    }
  },

  componentDidMount() {
    $('.schedule.table td').on('click', function(e){
      var col = $(e.target).text()
      if (col.length) {
          var row = $(e.target).parent().data('row')
          var thumb = $(e.target).parent().data('img')
          var selectedChannel = '0px'
          switch (row) {
            case 2:
              var top = '118px;'
              break;
            case 3:
              var top = '182px;'
              break;
            case 4:
              var top = '244px;'
              break;
            case 5:
              var top = '307px;'
              var selectedChannel = '-137px'
              break;
            case 6:
              var top = '370px;'
              var selectedChannel = '-137px'
              break;
            default:
              var top = '56px'
          }
          $('#channel-content').velocity({
            opacity: 0
          }, 200, function(){
            $('h3.title').html(col)
            $('.blockDetails .title').html(col)
            $('.selected-thumb').attr('src', '/images/melody/' + thumb)
          }).delay(0).velocity({
            opacity: 1
          }, 160)

          $('.selectedChannel').show(300).velocity({
              top: top
            , opacity: 1
            , display: 'table-row !important'
          }, 'easeOutBack', 600)
          $('#selectedChannelBlock').velocity({
            top: selectedChannel
          }, 'easeOutCubic', 700)
      }
    })
  },

  componentWillUnmount() {
    $('.schedule.table td').off()
  },

  selectChannel(e) {
    console.log("channel selected", e.target)
  },

  render() {

    return (
      <div>
        <div className="ui container hero">
          <div id="img" className="ui image hero"></div>
        </div>
        <div className="ui container equal width channels grid pad-large">
          <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
            <div className="ui bottom attached label">Melody Aflam</div>
          </div>
          <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
            <div className="ui bottom attached label">Melody Classic</div>
          </div>
          <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
            <div className="ui bottom attached label">Melody Drama</div>
          </div>
          <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
            <div className="ui bottom attached label">Melody Hits</div>
          </div>
          <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
            <div className="ui bottom attached label">Melody General</div>
          </div>
          <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
            <div className="ui bottom attached label">Melody Radio</div>
          </div>
        </div>
        <div className="ui vertical center container aligned grids">
          <div className="ui schedule grid container details pad-top-medium">
            <div className="two wide filter schedule-filter computer only column">
              <h4>TUE, MAY 23</h4>
              <div id="schedule-filter-dropdown" className="ui simple dropdown item inverted">5pm<i className="plus icon"></i>
                <div className="menu">
                  <a className="item">1pm</a>
                  <a className="item">1:30</a>
                  <a className="item">2pm</a>
                  <a className="item">2:30</a>
                  <a className="item">3pm</a>
                  <a className="item">3:30</a>
                  <a className="item">4pm</a>
                  <a className="item">4:30</a>
                  <a className="item">5pm</a>
                  <a className="item">5:30</a>
                  <a className="item">6pm</a>
                  <a className="item">6:30</a>
                  <a className="item">7pm</a>
                  <a className="item">7:30</a>
                  <a className="item">8pm</a>
                  <a className="item">8:30</a>
                  <a className="item">9pm</a>
                  <a className="item">9:30</a>
                  <a className="item">10pm</a>
                  <a className="item">10:30</a>
                  <a className="item">11pm</a>
                  <a className="item">11:30</a>
                  <a className="item">Noon</a>
                  <a className="item">12:30</a>
                  <a className="item">1pm</a>
                  <a className="item">1:30</a>
                  <a className="item">2pm</a>
                  <a className="item">2:30</a>
                  <a className="item">3pm</a>
                  <a className="item">3:30</a>
                  <a className="item">4pm</a>
                  <a className="item">4:30</a>
                  <a className="item">5</a>
                  <a className="item">5:30</a>
                  <a className="item">6pm</a>
                  <a className="item">6:30</a>
                  <a className="item">7pm</a>
                  <a className="item">7:30</a>
                  <a className="item">8pm</a>
                  <a className="item">8:30</a>
                  <a className="item">9pm</a>
                  <a className="item">9:30</a>
                  <a className="item">10pm</a>
                  <a className="item">10:30</a>
                  <a className="item">11pm</a>
                  <a className="item">11:30</a>
                  <a className="item">Midnight</a>
                  <a className="item">12:30</a>
                </div>
              </div>
              <div className="ui icon input inverted">
                <input type="text" placeholder="Search..." className="prompt"/><i className="search link icon"></i>
              </div>
              <div className="results"></div>
            </div>
            <div className="fourteen wide computer sixteen wide tablet column">
              <table className="ui schedule celled fixed table">
                <thead>
                  <tr>
                    <th><span className="left-arrow">&#706;</span>
                      <th>5<sub>pm</sub></th>
                      <th>5<sub className="medium">:30</sub></th>
                      <th>6<sub>pm</sub></th>
                      <th>6<sub className="medium">:30</sub></th>
                      <th>7<sub>pm</sub></th>
                      <th>7<sub className="medium">:30</sub></th>
                      <th>8<sub>pm</sub></th>
                      <th><span className="right-arrow">&#707;</span></th>
                    </th>
                  </tr>
                </thead>
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
            <div className="sixteen wide tablet column schedule-mobile">
              <div className="ui top attached schedule tabular menu"><a data-tab="first" className="item active"><img src="/images/wireframe/image.png" className="ui tiny image centered"/></a><a data-tab="second" className="item"><img src="/images/wireframe/image.png" className="ui tiny image centered"/></a><a data-tab="third" className="item"><img src="/images/wireframe/image.png" className="ui tiny image centered"/></a><a data-tab="fourth" className="item"><img src="/images/wireframe/image.png" className="ui tiny image centered"/></a><a data-tab="fifth" className="item"><img src="/images/wireframe/image.png" className="ui tiny image centered"/></a><a data-tab="sixth" className="item"><img src="/images/wireframe/image.png" className="ui tiny image centered"/></a></div>
              <div data-tab="first" className="ui bottom attached schedule tab segment active">
                <div className="ui inverted segment">
                  <div className="ui inverted relaxed schedule divided list">
                    <div className="item">
                      <div className="header">5pm</div>Khally Balak
                    </div>
                    <div className="item">
                      <div className="header">5:30</div>Harim Karim
                    </div>
                    <div className="item">
                      <div className="header">6pm</div>Zaki Chan
                    </div>
                    <div className="item">
                      <div className="header">6:30</div>Keda Reda
                    </div>
                    <div className="item">
                      <div className="header">7pm</div>Wahed Sefr
                    </div>
                    <div className="item">
                      <div className="header">7:30</div>Habib Saldo
                    </div>
                    <div className="item">
                      <div className="header">8pm</div>Breem Harashi
                    </div>
                  </div>
                </div>
              </div>
              <div data-tab="second" className="ui bottom attached tab segment">
                <div className="ui inverted segment">
                  <div className="ui inverted relaxed schedule divided list">
                    <div className="item">
                      <div className="header">5pm</div>Another Balak
                    </div>
                    <div className="item">
                      <div className="header">5:30</div>Harim Name
                    </div>
                    <div className="item">
                      <div className="header">6pm</div>Zaki Chan
                    </div>
                    <div className="item">
                      <div className="header">6:30</div>Keda Reda
                    </div>
                    <div className="item">
                      <div className="header">7pm</div>Wahed Sefr
                    </div>
                    <div className="item">
                      <div className="header">7:30</div>Habib Saldo
                    </div>
                    <div className="item">
                      <div className="header">8pm</div>Breem Harashi
                    </div>
                  </div>
                </div>
              </div>
              <div data-tab="third" className="ui bottom attached tab segment">
                <div className="ui inverted segment">
                  <div className="ui inverted relaxed schedule divided list">
                    <div className="item">
                      <div className="header">5pm</div>Third Balak
                    </div>
                    <div className="item">
                      <div className="header">5:30</div>Name Karim
                    </div>
                    <div className="item">
                      <div className="header">6pm</div>Zaki Chan
                    </div>
                    <div className="item">
                      <div className="header">6:30</div>Keda Reda
                    </div>
                    <div className="item">
                      <div className="header">7pm</div>Wahed Sefr
                    </div>
                    <div className="item">
                      <div className="header">7:30</div>Habib Saldo
                    </div>
                    <div className="item">
                      <div className="header">8pm</div>Breem Harashi
                    </div>
                  </div>
                </div>
              </div>
              <div data-tab="fourth" className="ui bottom attached tab segment">
                <div className="ui inverted segment">
                  <div className="ui inverted relaxed schedule divided list">
                    <div className="item">
                      <div className="header">5pm</div>And yet
                    </div>
                    <div className="item">
                      <div className="header">5:30</div>another name
                    </div>
                    <div className="item">
                      <div className="header">6pm</div>Zaki Chan
                    </div>
                    <div className="item">
                      <div className="header">6:30</div>Keda Reda
                    </div>
                    <div className="item">
                      <div className="header">7pm</div>Wahed Sefr
                    </div>
                    <div className="item">
                      <div className="header">7:30</div>Habib Saldo
                    </div>
                    <div className="item">
                      <div className="header">8pm</div>Breem Harashi
                    </div>
                  </div>
                </div>
              </div>
              <div data-tab="fifth" className="ui bottom attached tab segment">
                <div className="ui inverted segment">
                  <div className="ui inverted relaxed schedule divided list">
                    <div className="item">
                      <div className="header">5pm</div>Khally Balak
                    </div>
                    <div className="item">
                      <div className="header">5:30</div>Harim Karim
                    </div>
                    <div className="item">
                      <div className="header">6pm</div>Zaki Chan
                    </div>
                    <div className="item">
                      <div className="header">6:30</div>Keda Reda
                    </div>
                    <div className="item">
                      <div className="header">7pm</div>Wahed Sefr
                    </div>
                    <div className="item">
                      <div className="header">7:30</div>Habib Saldo
                    </div>
                    <div className="item">
                      <div className="header">8pm</div>Breem Harashi
                    </div>
                  </div>
                </div>
              </div>
              <div data-tab="sixth" className="ui bottom attached tab segment">
                <div className="ui inverted segment">
                  <div className="ui inverted relaxed schedule divided list">
                    <div className="item">
                      <div className="header">5pm</div>still Balak
                    </div>
                    <div className="item">
                      <div className="header">5:30</div>Harim more
                    </div>
                    <div className="item">
                      <div className="header">6pm</div>Zaki Chan
                    </div>
                    <div className="item">
                      <div className="header">6:30</div>Keda Reda
                    </div>
                    <div className="item">
                      <div className="header">7pm</div>Wahed Sefr
                    </div>
                    <div className="item">
                      <div className="header">7:30</div>Habib Saldo
                    </div>
                    <div className="item">
                      <div className="header">8pm</div>Breem Harashi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
