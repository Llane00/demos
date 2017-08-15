define('goTop', ['jquery'], function(){
  var GoTop = (function (){
    function _GoTop(){
      this.createNode();
      this.bindEvent();
      this.start();
    };

    _GoTop.prototype = {
      createNode: function(){
        this.target = $('<div></div>');
        this.target.attr('id', 'btn-goTop');
        this.target.text('Top');
        $('body').append(this.target);
      },
      bindEvent: function(){
        this.target.on('click', function(){
          $('body').scrollTop(0);
        })
      },
      start: function(){ //当滚轴拉到1500后出现按钮
        $(window).on('scroll', function(){
          var 
          if()
        })
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