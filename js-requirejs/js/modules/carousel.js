define('carousel', ['jquery'], function(module, exports) {

    var Carousel = (function(){
      function _Carousel($ct){
        this.$ct = $ct;
        this.init();
        this.bind();
      }

      _Carousel.prototype.init = function(){
        this.$imgCt = this.$ct.find(".img-ct");
        this.imgWidth = this.$ct.find(".img-ct>li>a").width();
        this.imgLength = this.$ct.find(".img-ct>li").length;
        this.currentIndex = 0;

        this.$firstLi = this.$imgCt.find("li").first();
        this.$lastLi = this.$imgCt.find("li").last();
        this.$imgCt.prepend(this.$lastLi.clone());
        this.$imgCt.append(this.$firstLi.clone());

        this.nextBtn = this.$ct.find(".btn-next");
        this.preBtn = this.$ct.find(".btn-pre");
        this.$bullets = this.$ct.find(".bullet>li");

        this.isLock = false;

      }

      _Carousel.prototype.bind = function(){
        var _this = this;
        _this.nextBtn.on("click", function(){
          _this.playnext(1);
        })

        _this.preBtn.on("click", function(){
          _this.playpre(1);
        })

        this.$bullets.on("click", function(){
          var bulletIndex = $(this).index();
          if(bulletIndex>=_this.currentIndex){
            _this.playnext(bulletIndex-_this.currentIndex);
          }else{
            _this.playpre(_this.currentIndex-bulletIndex);
          }
        })
      }

      _Carousel.prototype.playnext = function(n){
        var _this = this;
        if(this.isLock === true) return;
        this.isLock = true;
        this.$imgCt.animate({
          left : "-=" + this.imgWidth*n
        }, function(){
          _this.currentIndex += n;
          if(_this.currentIndex>=_this.imgLength){
            _this.$imgCt.css("left", "-"+_this.imgWidth+"px");
            _this.currentIndex = 0;
          }
          _this.isLock = false;
          _this.activeBullet();
        })
      }


      _Carousel.prototype.playpre = function(n){
        var _this = this;
        if(this.isLock === true) return;
        this.isLock = true;
        this.$imgCt.animate({
          left : "+=" + this.imgWidth*n
        }, function(){
          _this.currentIndex -= n;
          if(_this.currentIndex<0){
            _this.$imgCt.css("left", "-"+_this.imgWidth*_this.imgLength+"px");
            _this.currentIndex = _this.imgLength-1;
          }
          _this.isLock = false;
          _this.activeBullet();
        })
      }

      _Carousel.prototype.activeBullet = function(){
        this.$bullets.removeClass("active").eq(this.currentIndex).addClass("active");
      }

      return {
        init: function($ct){
          $ct.each(function(index, node){
            new _Carousel($(node));
          })
        }
      }
      
    })();

    return Carousel;


  
});