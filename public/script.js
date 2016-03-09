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
    $('#watchlist-sidebar')
      .sidebar('attach events', '.watchlist.item')
    ;

    $('#seasons-dropdown-filter')
      .dropdown()
    ;


    $('#nav-sidebar')
      .sidebar('attach events', '.toc.item')
    ;

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
