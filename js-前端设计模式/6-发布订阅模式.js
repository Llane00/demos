
var EventCenter = (function(){
  var events = {};
  function on(evt, handler){
    events[evt] = events[evt] || [];
    events[evt].push({
      handler: handler
    });
  };
  function fire(evt, args){
    if(!events[evt]){
      return;
    }
    for(var i = 0; i<events[evt].length; i++){ //同一个事件下可能有多个订阅好的任务
      events[evt][i].handler(args);
    }
  };
  function off(evt){
    delete events[evt];
  }
  return {
    on: on,
    fire: fire,
    off: off
  }
})();

EventCenter.on('my_event', function(data){
  console.log('my_event received...');
});
EventCenter.on('my_event', function(data){
  console.log('my_event2 reveived...');
});

EventCenter.fire('my_event');

EventCenter.off('my_event'); //取消事件绑定
EventCenter.fire('my_event');