var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/friend.json', function(req, res, next) {
  res.send({
	"ret":"true",
	"list":[
		{
			"title":"小马过河",
            "id":1
		},{
           "title":"雅思培训",
            "id":2
		},
		{
           "title":"留学机构",
            "id":3
		},
		{
           "title":"出国语言培训",
            "id":4
		},
		{
           "title":"大学生",
            "id":5
		},
		{
           "title":"人人听力网",
            "id":6
		},
		{
           "title":"英语口语",
            "id":7
		},
		{
           "title":"英文小说网",
            "id":8
		},
		{
           "title":"口译",
            "id":9
		},
		{
           "title":"美国之音",
            "id":10
		},

		{
           "title":"给力英语网",
            "id":11
		},
		{
           "title":"中小学教育",
            "id":12
		},
		{
           "title":"翻译资格考试",
            "id":13
		},
		{
           "title":"GCT",
            "id":14
		},
		{
           "title":"英语六级",
            "id":15
		},
		{
           "title":"英语学习网站",
            "id":16
		},
		{
           "title":"泰语学习网站",
            "id":17
		},
		{
           "title":"英蕊幼儿英语",
            "id":18
		},
		{
           "title":"手抄报",
            "id":19
		},
		{
           "title":"简单学习网",
            "id":20
		},
		{
           "title":"哈尔滨英语",
            "id":21
		},
		{
           "title":"英语口语培训",
            "id":22
		},
		{
           "title":"在线英语培训",
            "id":23
		},
		{
           "title":"英语培训",
            "id":24
		},
		{
           "title":"韩语学习网",
           "id":25
		},
		{
            
           "title":"职称英语考试",
            "id":26
		},
		{
            
           "title":"家教",
            "id":27
		},
		{
            
           "title":"在线英语培训",
            "id":28
		}
	]
});
});

router.get('/api/header.json', function(req, res, next) {
  res.send({
	"ret":"true",
	"list":{
		"headerList":[
         {"text":"大家说英语",
          "id":1,
          "link":""
          },
          {"text":"空中英语教室",
          "id":2,
          "link":""
          },
          {"text":"彭蒙慧英语",
          "id":3,
          "link":""
          },
          {"text":"科学美国人",
          "id":4,
          "link":""
          },
          {"text":"冬吴相对论",
          "id":5,
          "link":""
          },
          {"text":"走遍美国",
          "id":6,
          "link":""
          },
          {"text":"英文名著",
          "id":7,
          "link":""
          },
          {"text":"托福考试",
          "id":8,
          "link":""
          },
          {"text":"美国脱口秀",
          "id":9,
          "link":""
          },
          {"text":"BBC听力资料",
          "id":10,
          "link":""
          },
          {"text":"外教课堂",
          "id":11,
          "link":""
          }
		]
	}
});
});

router.get('/api/index.json', function(req, res, next) {
  res.send({
	"ret":"true",
	"normalEnglish":{
				"title":"常速英语",
				"normal":[
					{"text":"音频",
		             "id":1,
		             "link":""},
		            {"text":"视频",
		             "id":2,
		             "link":""},
		            {"text":"翻译",
		             "id":3,
		             "link":""}]
				  }
			
				,

				
    "slowEnglish":{
		          "title":"慢速英语(中级)",
				   "slow":[
				    {
		           "text":"科技报道",
		            "id":1,
		            "link":""
				   },
				   {
		           "text":"词汇掌故",
		            "id":2,
		            "link":""
				   },
				   {
		           "text":"美国故事",
		            "id":3,
		            "link":""
				   },
				   {
		           "text":"时事新闻",
		            "id":4,
		            "link":""
				   },
				   {
		           "text":"经济报道",
		            "id":5,
		            "link":""
				   },
				   {
		           "text":"建国史话",
		            "id":6,
		            "link":""
				   },
				   {
		           "text":"教育报道",
		            "id":7,
		            "link":""
				   },
				   {
		           "text":"自然探索",
		            "id":8,
		            "link":""
				   },
				   {
		           "text":"健康报道",
		            "id":9,
		            "link":""
				   },
				   {
		           "text":"美国万花筒",
		            "id":10,
		            "link":""
				   },
		           {
		           "text":"科学动态",
		            "id":11,
		            "link":""
				   },{
		           "text":"农业报道",
		            "id":12,
		            "link":""
				   },
				   {
		           "text":"美国专栏",
		            "id":13,
		            "link":""
				   },
				   {
		           "text":"美国人物",
		            "id":14,
		            "link":""
				   }]
				}
				,

     "fashionEnglish":{
		       "title":"英语教学(初级)",
			   "fashion": [
		         {"text":"流行英语",
		       "id":1,
		       "link":""
		      },
		       {"text":"美语三级跳",
		       "id":2,
		       "link":""
		      },
		       {"text":"美国习惯用语",
		       "id":3,
		       "link":""
		      },
		       {"text":"学个词",
		       "id":4,
		       "link":""
		      },
		       {"text":"AS IT IS",
		       "id":5,
		       "link":""
		      },
		       {"text":"体育美语",
		       "id":6,
		       "link":""
		      },
		       {"text":"美语怎么说",
		       "id":7,
		       "link":""
		      },
		       {"text":"商务礼节美语",
		       "id":8,
		       "link":""
		      },
		       {"text":"双语新闻",
		       "id":9,
		       "link":""
		      },
		       {"text":"美语咖啡屋",
		       "id":10,
		       "link":""
		      },
		       {"text":"中级美语",
		       "id":11,
		       "link":""
		      },
		       {"text":"美语训练班",
		       "id":12,
		       "link":""
		      },
		       {"text":"VOA每日一课",
		       "id":13,
		       "link":""
		      },
		       {"text":"OMG美语",
		       "id":14,
		       "link":""
		      },
		      {"text":"OMG美语",
		       "id":15,
		       "link":""
		      },
		      {"text":"OMG美语",
		       "id":16,
		       "link":""
		      }]
		   }
} 
);
});

router.get('/api/voice.json', function(req, res, next) {
  res.send({
	"ret":"true",
	"list":[{
	   "id":1,
       "title":"[暖湾]",
       "text":"宠物鱼品牌推广~",
       "classOne":"green",
       "classTwo":"red"
	 },
    {  "id":2,
       "classOne":"blue",
       "classTwo":"brown",
       "title":"[空中英语教室]",
       "text":"本年度亚洲最佳英文教学奖：《空中英语教室》系列杂志！"
	},
   {   "id":3,
       "classOne":"AS",
       "classTwo":"blue",
       "title":"[AS IT IS]",
       "text":"Gerald Ford:Unelected (2017-11-20)"
	},
	{ "id":4,
       "classOne":"AS",
       "classTwo":"blue",
       "title":"[AS IT IS]",
       "text":"Too Much Tourism? (2017-11-20)"
	},
   {   "id":5,
      "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[科技报道]",
       "text":"Scientist:CO2 Levels will Rise This Year(2017-11-20)"
	},
	{   "id":6,
       "classOne":"blue",
       "classTwo":"brown",
       "title":"[科技报道]",
       "text":"American Wwomen Try to Break Barriers in Show Business (2017-11-20)"
	},
	{	"id":7,
            "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Leonardo da Vinci Painting Sells for Record $450 Million (2017-11-17)"
	},
 {	"id":8,
      "classOne":"blue",
       "classTwo":"brown",
       "title":"[AS IT IS]",
       "text":"Gerald Ford:Unelected (2017-11-20)"
	},
	{	"id":9,
            "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Too Much Tourism? (2017-11-20)"
	},
{		"id":10,
      "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[科技报道]",
       "text":"Scientist:CO2 Levels will Rise This Year(2017-11-20)"
	},
	{ "id":11,
       "classOne":"blue",
       "classTwo":"brown",
       "title":"[科技报道]",
       "text":"American Wwomen Try to Break Barriers in Show Business (2017-11-20)"
	},
	{"id":12,
      "classOne":"#b04533",
      "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Leonardo da Vinci Painting Sells for Record $450 Million (2017-11-17)"
	},
 {    "id":13,
      "classOne":"blue",
       "classTwo":"brown",
       "title":"[AS IT IS]",
       "text":"Gerald Ford:Unelected (2017-11-20)"
	},
	{"id":14,
       "title":"[VOA慢速英语]",
      "classOne":"#b04533",
      "classTwo":"#004499",
       "text":"Too Much Tourism? (2017-11-20)"
	},
{"id":15,
      "classOne":"blue",
       "classTwo":"brown",
       "title":"[科技报道]",
       "text":"Scientist:CO2 Levels will Rise This Year(2017-11-20)"
	},
	{"id":16,
            "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[科技报道]",
       "text":"American Wwomen Try to Break Barriers in Show Business (2017-11-20)"
	},
	{"id":17,
      "classOne":"#b04533",
      "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Leonardo da Vinci Painting Sells for Record $450 Million (2017-11-17)"
	},
	 {"id":18,
            "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Gerald Ford:Unelected (2017-11-20)"
	},
	{"id":19,
            "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Too Much Tourism? (2017-11-20)"
	},
{      "id":20,
      "classOne":"#b04533",
      "classTwo":"#004499",
       "title":"[科技报道]",
       "text":"Scientist:CO2 Levels will Rise This Year(2017-11-20)"
	},
	{"id":21,
            "classOne":"#a08a21",
      "classTwo":"#004499",
       "title":"[科技报道]",
       "text":"American Wwomen Try to Break Barriers in Show Business (2017-11-20)"
	},
	{"id":22,
       "classOne":"#b04533",
       "classTwo":"#004499",
       "title":"[AS IT IS]",
       "text":"Leonardo da Vinci Painting Sells for Record $450 Million (2017-11-17)"
	}]
});
});


module.exports = router;
