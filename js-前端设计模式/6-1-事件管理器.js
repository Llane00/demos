var Event = (function(){
  var eventsPool = {};
  function on(event, handler){
    eventsPool[event] = eventsPool[event] || []; //如果还没有订阅就初始化数组
    eventsPool[event].push({
      handler: handler
    });
  }

  function fire(event, args){
    if(!eventsPool[event]){
      return;
    }
    for(var i = 0; i < eventsPool[event].length; i++){
      eventsPool[event][i].handler(args);
    }
  }

  function off(event){
    delete eventsPool[event];
  }

  return {
    on: on,
    fire: fire,
    off: off
  }
})()


Event.on('change', function(val){
  console.log('change...  now val is ' + val);  
});
Event.fire('change', '饥人谷');
Event.off('changer');