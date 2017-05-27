
router.post('/moreNews', function (req, res) {

  var news = [
    {
      "link": "http://xw.qq.com/mil/20170523045918/MIL2017052304591802",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585622934_150120/0",
      "title": "韩军发现朝鲜不明飞行器南下，发射90多发子弹进行警告",
      "brief": "资料图：朝鲜大阅兵展示自行研发无人机【环球网快..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170523A008C000",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585131375_150120/0",
      "title": "二战罕见的人吃人战场：2万多名日军被困在孤岛饿疯",
      "brief": "“敌机猛烈轰炸，敌人开始登陆，请求救援！”19..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170523V06KJD00",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585388258_150120/0",
      "title": "视频丨“战影之眼”让我国千架三代机重获“新生”",
      "brief": "“战影之眼”突破一关键难题 千架三代机因它重..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170522A0B9TG00",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585702970_150120/0",
      "title": "朝鲜版“东风21”正式定型投产，弹头突防能力比肩中美",
      "brief": "朝鲜搞固体弹道导弹可谓是站在巨人的肩膀上，世界..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170523A025PL00",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585461533_150120/0",
      "title": "国军抗战中交换比最好的胜仗，为何却不大肆宣传",
      "brief": "枣宜会战形势图，湖阳镇战斗发生在地图上方的唐河..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170523V07G7Q00",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585384881_150120/0",
      "title": "视频丨让子弹飞3秒 英狙击手2.4公里外击毙恐怖分子",
      "brief": "让子弹飞3秒 英狙击手2.4公里外击毙恐怖分子"
    },
    {
      "link": "http://view.inews.qq.com/a/20170523A08AOH00",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1586082580_150120/0",
      "title": "踢馆 | 游牧民族想威胁中原王朝？先要掌握这样战略物资",
      "brief": "怎样天天看《踢馆》？只要打开微信，进入添加朋友..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170523A05GT500",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585424644_150120/0",
      "title": "特朗普任性：不是说我出卖机密吗，今天我就当着面说清楚",
      "brief": "当地时间5月22日，美国总统特朗普在耶路撒冷同..."
    },
    {
      "link": "http://view.inews.qq.com/a/20170523V04Z1M00",
      "img": "http://inews.gtimg.com/newsapp_ls/0/1585387027_150120/0",
      "title": "视频丨美称中国防空力量世界第一 只有一处缺陷",
      "brief": "各型防空导弹密集部署此地 我国一关键系统彻底完善"
    }
  ];

  var newsIndex = req.body.newsIndex;
  var newsLength = 3; //每次获取3项

  setTimeout(function () { //模拟网络延迟
    res.send({
      status: 0,
      data: news.slice(newsIndex*newsLength, newsIndex*newsLength+newsLength)
    })
  }, 1800);



})
