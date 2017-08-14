define('goTop', ['jquery'], function(){
  var GoTop = (function (){
    function _GoTop(ct){
      this.ct = ct;
      this.createNode();
      this.bindEvent();
    };

    _GoTop.prototype = {
      createNode: function(){
        this.target = $('<div></div>');
        this.target.attr('id', 'btn-gotop');
        this.target.text('返回');
        this.ct.append(this.target);
      },
      bindEvent: function(){
        this.ct
      }
    }

  })();

  return GoTop;

})