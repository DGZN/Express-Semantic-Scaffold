$(document)
  .ready(function() {
    // fix menu when passed
    // $('.masthead')
    //   .visibility({
    //     once: false,
    //     onBottomPassed: function() {
    //       $('.fixed.menu').transition('fade in');
    //     },
    //     onBottomPassedReverse: function() {
    //       $('.fixed.menu').transition('fade in');
    //     }
    //   })
    // ;

    // create sidebar and attach to menu open

    setTimeout(function(){
      $('#watchlist-sidebar')
        .sidebar('attach events', '.watchlist.item')
      ;
    }, 1000)

    $('#seasons-dropdown-filter')
      .dropdown()
    ;

    $('#schedule-filter-dropdown')
      .dropdown()
    ;

    $('.schedule-mobile .item')
      .tab()
    ;

    $('#language-dropdown')
      .dropdown({
        direction: 'left'
      })
    ;

    $('#account-dropdown')
      .dropdown({
        direction: 'left'
      })
    ;


    $('#nav-sidebar')
      .sidebar('attach events', '.toc.item')
    ;


    setTimeout(function(){
      $('.episode').progress({
        percent: 0
      , showActivity: false
      , className: ''
      , text: { percent : '' }
      });
    }, 1000)

    $('.ep11').progress({
      percent: 45
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    $('.ep12').progress({
      percent: 75
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    $('.ep13').progress({
      percent: 30
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    $('.ep14').progress({
      percent: 100
    , showActivity: false
    , className: 'success'
    , text: { percent : '' }
    });

    $('.ep15').progress({
      percent: 0
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    $('.ep16').progress({
      percent: 0
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    $('.ep17').progress({
      percent: 0
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    $('.ep18').progress({
      percent: 0
    , showActivity: false
    , className: 'error'
    , text: { percent : '' }
    });

    



  })
;
