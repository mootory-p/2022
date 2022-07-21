$(function () {


  $('#gallery').each(function () {

    var $container = $(this),
      $loadMoreButton = $('#load-more'), // 추가 버튼
      $filter = $('#gallery-filter'), // 필터링 양식
      addItemCount = 16, // 한 번에 표시 할 항목 수
      addedd = 0, // 표시 된 항목 수
      allData = [], // 모든 JSON 데이터
      filteredData = []; // 필터링 된 JSON データ

    $container.masonry({
      columnWidth: '.grid-sizer',
      itemSelector: '.gallery-item',
      gutter: '.gutter-sizer',
      percentPosition: true

    });

    $.getJSON('./assets/images.json', initGallery);

    function initGallery(data) {
      allData = data;
      filteredData = allData;

      // 첫 번째 항목을 표시
      addItems();

      $loadMoreButton.on('click', addItems);
      $filter.on('change', 'input[type="radio"]', filterItems);

    }

    // 항목을 생성하고 문서에 삽입
    function addItems(filter) {

      var elements = [],
        slicedData = filteredData.slice(addedd, addedd + addItemCount);

      $.each(slicedData, function (i, item) {
        var itemHTML =
          '<li class="gallery-item is-loading">' +
          '<a href="' + item.images.large + '" data-lightbox="image" data-lightbox="' + item.category + '">' +
          '<img src="' + item.images.thumb + '" alt="">' +
          '<span class="caption">' +
          '<span class="inner">' +
          '<span class="title">' + item.content + '</span>' +
          '</span>' +
          '</span>' +
          '</a>' +
          '</li>';
        elements.push($(itemHTML).get(0));
      });
			
      $container
        .append(elements)
        .imagesLoaded(function () {
          $(elements).removeClass('is-loading');
          $container.masonry('appended', elements);

          // 필터링시 재배치
          if (filter) {
            $container.masonry();
          }
        });

      // 추가 된 항목 수량 갱신
      addedd += slicedData.length;

      if (addedd < filteredData.length) {
        $loadMoreButton.show();
      } else {
        $loadMoreButton.hide();
      }

    }

    // 항목을 필터링한다.
    function filterItems() {
      var key = $(this).val(),
      masonryItems = $container.masonry('getItemElements');
      $container.masonry('remove', masonryItems);
      filteredData = [];
      addedd = 0;

      if (key === 'all') {
        filteredData = allData;
      } else {
        filteredData = $.grep(allData, function (item) {
          return item.category === key;
        });
      }
      // 항목을 추가
      addItems(true);
    }

  });


});
