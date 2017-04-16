//假设域名是localhost, 端口是8080
//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html

/**
 * 当 http://localhost:8080/getInfo 的GET请求到来时被下面匹配到进行处理
 * 发送JSON格式的响应数据 {name: 'ruoyu'}
 */
app.get('/getInfo', function(req, res) {
  res.send({name: 'ruoyu'})  
})


/**
 * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取请求的参数对象 
 * 通过 req.send发送响应
 */
app.get('/getFriends', function(req, res) {
	var username = req.query.username // 通过 req.query获取请求参数
	var friends
  
  //根据请求参数mock数据
  switch (username){
  	case 'ruoyu':
  		friends = ['小明ssss', '小刚', '<script>alert(1)</script>']
  		break
  	case 'hunger':
  		friends = ['小谷sf1111', '小花']
  		break;
  	default:
  		friends = ['没有朋友']
  }
  res.send(friends);
});

app.get("/login", function(req, res){
	var username = req.query.username
	var password = req.query.password

	if(username ===  "xiaoming" || password === "abcd1234"){
		res.send({status: 0});
	}
})

app.get("/more", function(req, res){
	var startId = req.query.startId
	var len = req.query.len
	var arr = []
	for(var i = 0; i < len; i++){
		var str = "内容"+startId
		startId++
		arr.push(str);
	}
	res.send(arr)
})


/**
 * 当 http://localhost:8080/comment 的GET请求到来时被下面匹配到进行处理
 * 通过req.body获取post请求的参数对象 
 * 通过 req.send发送响应
 */
app.post('/comment', function(req, res) {
  console.log(req.body.comment); // 可通过req.body获取 post 提交的参数
  res.send({status: 'ok'});
});


