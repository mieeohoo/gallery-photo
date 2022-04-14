'use strict';

$(function () {

  // mv_scale(scroll)の共通処理
  function mv_scale(scroll) {
    if (window.innerWidth > 900) {
      $('.keyimg').css({
        'width': 33 + scroll / 10 + '%'
      });
    } else {
      $('.keyimg').css({
        'width': 33 - scroll / 10 + '%'
      });
    }
  }

  // ハンバーガーメニュー
  $('#menu-btn').on('click', function () {
    if ($('header').hasClass('open')) {
      $('header').removeClass('open');
    }
    else {
      $('header').toggleClass('open');
    }
  });

  $('#mask').on('click', function () {
    $('header').removeClass('open');
  });

  $('#global-menu').on('click', function () {
    $('header').removeClass('open');
  });

  // フェード表示
  $('.inview').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('show');
    }
  });

  // スクロールイベント
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    // キー画像の拡大・縮小
    mv_scale(scroll);

    // ヘッダートップの表示・非表示
    if (scroll > 600) {
      $('#header-top').fadeIn(500);
    } else {
      $('#header-top').fadeOut(500);
    }

    // サイドボタンの表示・非表示
    let gallery_position = $('#gallery').offset().top - $(window).height();
    let access_position = $('#access').offset().top - $(window).height();

    if (window.innerWidth > 900) {
      // スクロール位置が、画面下から#galleryまでの距離を超えた場合（＝#galleryが表示された時）
      if (scroll > gallery_position) {

        // #accessが表示されるまでの間
        if (scroll < access_position) {
          $('#side-btn').addClass('appear');
        } else {
          // 非表示
          $('#side-btn').removeClass('appear');
        }
        // #galleryが表示される前は、非表示
      } else {
        $('#side-btn').removeClass('appear');
      }
    }

    // 「access」の背景画像の表示
    let contact_position = $('#contact').offset().top - $(window).height();

    if (scroll > access_position) {
      if (scroll < contact_position) {
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
    } else {
      $('.bg').fadeOut(500);
    }
  });

  // 画面読み込み時と、画面幅変更時のイベント
  $(window).on('load resize', function () {
    let scroll = $(window).scrollTop();
    mv_scale(scroll);
  });

});



