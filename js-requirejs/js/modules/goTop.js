define('goTop', ['jquery'], function(){

  var GoTop = (function (){
    function _GoTop(){
      this.createNode();
      this.bindEvent();
    };

    _GoTop.prototype = {
      createNode: function(){
        this.target = $('<div></div>');
        this.target.attr('id', 'btn-goTop');
        this.target.text('Top');
        $('body').append(this.target);
        $('#btn-goTop').hide();
      },
      bindEvent: function(){
        //当滚轴拉到一定位置出现按钮
        $(window).on('scroll', function(){
          var scrollTop =  $(window).scrollTop();
          if(scrollTop >= 800){
            $('#btn-goTop').show();
          }else{
            $('#btn-goTop').hide();
          }
        });

        var _this = this;
        this.target.on('click', function(){
          _this.intervalScroll();
        });
        
      },

      intervalScroll: function(){
        var height = window.scrollY;
        var n = 1;
        var id = setInterval(function(){
          if(n===4){
            clearInterval(id)
          }
          window.scrollTo(0, height - height*n/4)
          n += 1;
        },50)
      }
    }

    return {
      init: function(){
        new _GoTop();
      }
    }

  })();

  return GoTop;

})