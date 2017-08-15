define('lazyLoad', ['jquery'], function(module, exports){

  var lazyLoad = (function(){
    function _lazyLoad(){
      this.init();
      this.start();
      this.bind();
      // var _this = this;
      // $(window).on('scroll', function(){
      //   if(_this.isVisible($("#load"))){
      //     _this.start();
      //   }
      // });

    }

    _lazyLoad.prototype = {
      init: function(){
        this.curPage = 1;
        this.perPageCount = 10;
        this.colSumHeight = [];
        this.nodeWidth = $(".item").outerWidth(true);
        this.colNum = parseInt($("#pic-ct").width()/$(".item").outerWidth(true));
        this.isDataArrive = true;
        //初始化
        for(var i = 0; i < this.colNum; i++){
          this.colSumHeight[i] = 0;
        }
      },

      start: function(){
        var _this = this;
        $(".wrap #load").text("加载中...");
        this.getData(function (newsList){
          $.each(newsList, function(idx, news){
            var $node = _this.getNode(news);
            $node.find("img").on('load',function(){
              $("#pic-ct").append($node);
              _this.waterFullPlace($node);
            })
          })
        })
      },

      getData: function (callback) {
        if(!this.isDataArrive) return;
        this.isDataArrive = false;
        var _this = this;
        $.ajax({
          url: "http://platform.sina.com.cn/slide/album_tech",
          dataType: "jsonp",
          jsonp: "jsoncallback",
          data: {
            app_key: "1271687855",
            num: _this.perPageCount,
            page: _this.curPage
          }
        }).done(function (ret) {
          if (ret && ret.status && ret.status.code == "0") {
            callback(ret.data);
            _this.curPage++;
            _this.isDataArrive = true;
            $(".wrap #load").text("查看更多");
          } else {
            $(".wrap #load").text("加载失败");
            console.log("get error data");
          }
        });
      },

      getNode: function(item){
        var tpl = `
          <li class="item">
            <a href="${item.url}" class="link"><img src="${item.img_url}" alt=""></a>
            <h4 class="header">${item.short_name}</h4>
            <P class="desp">${item.short_intro}</p>
          </li>
        `;
        return $(tpl);
      },

      waterFullPlace: function($node){
        var idx = 0;
        var minSumHeight = this.colSumHeight[0];

        for (var i = 0; i < this.colSumHeight.length; i++) {
          if (this.colSumHeight[i] < minSumHeight) {
            idx = i;
            minSumHeight = this.colSumHeight[i];
          }
        }

        $node.css({
          left: this.nodeWidth * idx,
          top: minSumHeight,
          opacity: 1
        })

        this.colSumHeight[idx] += $node.outerHeight(true);
        $("#pic-ct").height(Math.max.apply(null, this.colSumHeight));
      },

      bind: function(){
        var _this = this;
        $(".wrap #load").on("click", function(){
          _this.start();
        })
      }
    }

    return {
      init: function(){
        // $.each(function(index, node){
          new _lazyLoad();
        // })
      }
    }
  })();

  return lazyLoad;





})