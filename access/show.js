function getQ(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var idd = getQ("haer");
document.getElementById("sid").value=idd;
if (idd == "0") {
    document.getElementById("title").innerHTML = "夜车联盟 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>夜车联盟</h1>\n<h3 style=\"color: #7F7F7F\">C学校最大的恐怖组织。</h3>\n<br>\n<p>\n姓名：&nbsp;夜车联盟\n<br><br>\n年龄：&nbsp;1\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #00FFFF\">C</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;0\n<br><br>\n信息：<br>夜车联盟是由Y发起的恐怖组织。这个组织有10多人。其目的是在晚上写作业，然后到其他卧室来。学校规定禁止上述行为，但该组织的成员完全违反这些行为。这个组织中的每个人都有自己的呼叫标志。晚上，总司令Y先生安排时间让成员们在晚上写作业，并安排时间去其他卧室，未经许可。会员在门口时通常会发出奇怪的噪音，使人整夜睡不着觉。有些成员来到门口传达命令，并唤醒其他成员执行任务。这是C学校最大的恐怖组织。\n<br><br><br>\n<img src=\"haer-img\\0.jpg\" alt=\"0\" title=\"夜车联盟 - 0\" width=\"75%\">\n</p>";
} else if (idd == "1") {
    document.getElementById("title").innerHTML = "TGT孩子 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>TGT孩子</h1>\n<h3 style=\"color: #7F7F7F\">最可怕的野兽之一</h3>\n<br>\n<p>\n姓名\n&nbsp;TGT孩子\n<br><br>\n年龄：&nbsp;14\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #990000\">A+</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;1\n<br><br>\n信息：<br>她是一个类人生物， 于 2018 年 4 月 21 日 14：38：39 变成哈儿。她爱上了很多人，但是她爱上的所有人都被咬掉部分生殖系统而死。她死后，她体内的咬下来的部分生殖系统会自动做爱，并生下许多她的副本，然后逃走了。她非常危险。如果你看到她，请马上逃跑，否则你会死的！\n<br><br><br>\n<img src=\"haer-img\\1.jpg\" alt=\"1\" title=\"TGT孩子 - 1\" width=\"75%\">\n</p>";
} else if (idd == "2") {
    document.getElementById("title").innerHTML = "哈儿之王 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>哈儿之王</h1>\n<h3 style=\"color: #7F7F7F\">史上智商最低的哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;哈儿之王\n<br><br>\n年龄：&nbsp;24\n<br><br>\n哈儿危险程度标码：&nbsp;<haer style=\"color: #FF0000\">A</haer>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;2\n<br><br>\n信息：<br>他是史上智商最低的哈儿，低至-2408325！他曾经把蔬菜大棚涂成绿色，导致温室只透过绿光，而植物的叶反射绿光，造成所有农作物死亡。他曾经毁坏了8000多人的财产！当你看到他时不要动，让自己站着不动，他就会保持不动，否则他会攻击移动的东西，别认为跑得快就可以，他的最高速度可以达到800公里/秒！\n<br><br><br>\n<img src=\"haer-img\\2.jpg\" alt=\"2\" title=\"哈儿之王 - 2\" width=\"75%\">\n</p>";
} else if (idd == "3") {
    document.getElementById("title").innerHTML = "空洞孩子 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>空洞孩子</h1>\n<h3 style=\"color: #7F7F7F\">它可以复活被TGT孩子杀死的人</h3>\n<br>\n<p>\n姓名：&nbsp;空洞孩子\n<br><br>\n年龄：&nbsp;14\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FFFF00\">B</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;3\n<br><br>\n信息：<br>当一个人被TGT孩子杀死时， 他会来帮助这个人。但由于他的能力有限，在一个星期内只能治愈一个人。他从头上分泌液体，将这种液体与另一种体液混合，并涂于死者的伤口。死者会被治愈，恢复正常生活。\n<br><br><br>\n<img src=\"haer-img\\3.jpg\" alt=\"3\" title=\"空洞孩子 - 3\" width=\"75%\">\n</p>";
} else if (idd == "4") {
    document.getElementById("title").innerHTML = "肾先生 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>肾先生</h1>\n<h3 style=\"color: #7F7F7F\">一个失恋的哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;肾先生\n<br><br>\n年龄：&nbsp;31\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FF0000\">A</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;4\n<br><br>\n信息：<br>他失恋了，偶然走进哈儿门。我们把他的肾小球和静脉连接在一起，成为一个独立的血液循环系统，这导致了他的肾小球坏死。因为他失恋了，他会毁掉大多数情侣的肾脏，但他非常支持真正的、坚固的爱情。\n<br><br><br>\n<img src=\"haer-img\\4.jpg\" alt=\"4\" title=\"肾先生 - 4\" width=\"75%\">\n</p>";
} else if (idd == "5") {
    document.getElementById("title").innerHTML = "CXK病毒 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>CXK病毒</h1>\n<h3 style=\"color: #7F7F7F\">使“坤头套儿”遭到报复</h3>\n<br>\n<p>\n姓名：&nbsp;CXK病毒\n<br><br>\n年龄：&nbsp;0\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FFFF00\">B</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;5\n<br><br>\n信息：<br>2020年7月22日上午C校的信息测试中，有人发现“点我解压CXK打篮球视频”的程序，打开后电脑损坏，代码全部丢失。受害者之一的B先生认为自己遭到了报复，因为前一天晚上他还在画“坤头套儿”。\n<br><br><br>\n<img src=\"haer-img\\5.jpg\" alt=\"5\" title=\"CXK病毒 - 5\" width=\"75%\">\n</p>";
} else if (idd == "6") {
    document.getElementById("title").innerHTML = "橄榄先生 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>橄榄先生</h1>\n<h3 style=\"color: #7F7F7F\">狂妄自大的哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;橄榄先生\n<br><br>\n年龄：&nbsp;13\n<br><br>\n哈儿危险程度标码\n&nbsp;<span style=\"color: #FFFF00\">B</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;6\n<br><br>\n信息：<br>在<a href=\"..\\news\\3.html\" style=\"color: #FFAAAA;\" target=\"_blank\">高等智商哈儿实验</a>（见文章底部附录）中，橄榄先生是失败品，变成了狂妄自大的低智商哈儿。他甚至认为哈儿实验室创始人<a href=\"..\\user\\show.html?id=1\" style=\"color: #FFFF00;\" target=\"_blank\">[User-1]</a>是哈儿，而自己是治疗后者的医师！\n<br>\n<span style=\"color: #FFFFAA;\">几乎所有哈儿都讨厌他（包括上述实验失败的狂妄自大的废弃哈儿！！）</span>，因为他总是认为自己是正常人而看不起其它哈儿。\n<br>\n该哈儿已被定义为废弃哈儿，目前已成功返回总部。因此删除对其外貌的叙述。\n<br>若再次见到请勿与其交流，并报告我们！\n<br><br><br>\n<img src=\"haer-img\\6.jpg\" alt=\"6\" title=\"橄榄先生 - 6\" width=\"75%\">\n<br><br><br>\n<span style=\"font-size: 5px\">附：高等智商哈儿实验说明<br></span>\n<iframe src=\"..\\news\\3.html\" width=\"66%\" height=\"300px\"></iframe>\n</p>";
} else if (idd == "7") {
    document.getElementById("title").innerHTML = "小哈儿 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>小哈儿</h1>\n<h3 style=\"color: #7F7F7F\">TGT孩子的附属哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;小哈儿\n<br><br>\n年龄：&nbsp;12\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FFFF00\">B</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;7\n<br><br>\n信息：<br>它是在TGT孩子的房间当TGT孩子情绪欲望发泄器多年的哈儿，身受重伤但意志顽强、忠于TGT孩子，减少了很多次TGT孩子攻击人的事件。\n<br><br><br>\n<img src=\"haer-img\\7.jpg\" alt=\"7\" title=\"小哈儿 - 7\" width=\"75%\">\n</p>";
} else if (idd == "8") {
    document.getElementById("title").innerHTML = "炸（zhá）药 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>炸（zhá）药</h1>\n<h3 style=\"color: #7F7F7F\">以油炸方式制成的药品</h3>\n<br>\n<p>\n姓名：&nbsp;炸（zhá）药\n<br><br>\n年龄：&nbsp;0\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FF0000\">A</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;8\n<br><br>\n信息：<br>这是以油炸方式制成的药品，在一次跳水比赛中一名运动员感冒服用过多，入水时炸毁游泳场。\n<br>\n在内燃机中使用这种以油炸过的【禁止显示】药，可以使热机效率达到100%及以上。\n<br><br><br>\n<img src=\"haer-img\\8.jpg\" alt=\"8\" title=\"炸（zhá）药 - 8\" width=\"75%\">\n</p>";
} else if (idd == "9") {
    document.getElementById("title").innerHTML = "已体检对象 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>已体检对象</h1>\n<h3 style=\"color: #7F7F7F\">体检合格后狂喜的哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;已体检对象\n<br><br>\n年龄：&nbsp;14\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FFFF00\">B</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;9\n<br><br>\n信息：<br>这个哈儿体检合格后进入<a href=\"..\\door\\index.html\" style=\"color: #AAFFFF;\" target=\"_blank\">哈儿门</a>，随后拿着显示体检合格体检单到处乱跳，\n<br>\n导致哈儿们<span style=\"color: #FFAAAA;\">疯狂跳动了一个下午</span>，最后被我们用麻醉枪全部制服。\n<br>\n它有一个奇怪的癖好：喜欢在<a href=\"..\\door\\index.html\" style=\"color: #AAFFFF;\" target=\"_blank\">哈儿门</a>处反复进出，动作娴熟，每天能进<span style=\"color: #FFFFAA;\">100次以上</span>！\n<br>\n这导致它成为低智商哈儿，智力令人堪忧，但现在它已经对所有麻醉剂产生了抵抗力，目前我们无法阻止它智商骤降。\n<br><br><br>\n<img src=\"haer-img\\9.jpg\" alt=\"9\" title=\"已体检对象 - 9\" width=\"75%\">\n</p>";
}
else if (idd == "10") {
    document.getElementById("title").innerHTML = "电话者 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>电话者</h1>\n<h3 style=\"color: #7F7F7F\">电话不停的哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;电话者\n<br><br>\n年龄：&nbsp;9\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FF0000\">A</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;10\n<br><br>\n信息：<br>这个哈儿变哈的时候只有7岁，出于好奇进入。\n<br>\n当时他刚刚接触电话，对电话机很感兴趣，\n<br>\n于是他在这几年的时间里每天向外拨出至少300个电话，导致我们话费严重欠费，\n<br>\n我们便把电话机拿走了，\n<br>\n结果他联合<a href=\"show.html?haer=1\" target=\"_blank\" style=\"color: #FFAAAA;\">TGT孩子</a>造反，\n<br>\n我们只好给他电话，但是是<span style=\"color: #AAFFFF;\">内部电话，由计算机负责接电话，并播放祖安话语</span>。\n<br>\n这导致目前它有<span style=\"color: #FF0000;\">严重的暴力倾向，请勿靠近</span>！\n<br><br><br>\n<img src=\"haer-img\\10.jpg\" alt=\"10\" title=\"电话者 - 10\" width=\"75%\">\n</p>";
}
else if (idd == "11") {
    document.getElementById("title").innerHTML = "考生 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>考生</h1>\n<h3 style=\"color: #7F7F7F\">考试中的美丽风景</h3>\n<br>\n<p>\n姓名：&nbsp;考生\n<br><br>\n年龄：&nbsp;13\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FFFF00\">B</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;11\n<br><br>\n信息：<br>他参加了一场考试，<span style=\"color: #FFFFAA;\">在考试中被发现是哈儿（疑似摔坏了脑子）</span>\n<br>\n他携带一台电子显微镜进入考场，开始做题，\n<br>\n做题期间为证明线段AB=AC+OD，\n<br>\n于是<span style=\"color: #FFAAAA;\">精准作图</span>，<span style=\"color: #FFAAAA;\">并使用电子显微镜数AB、AC、OD有多少个分子</span>，\n<br>\n被轰出考场后补考，几次三番不断地数，被关入高智商哈儿集训营。\n<br><br><br>\n<img src=\"haer-img\\11.jpg\" alt=\"11\" title=\"考生 - 11\" width=\"75%\">\n</p>";
}
else if (idd == "12") {
    document.getElementById("title").innerHTML = "YJ Collector - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>YJ Collector</h1>\n<h3 style=\"color: #7F7F7F\">仅次于TGT的恶魔</h3>\n<br>\n<p>\n姓名：&nbsp;YJ Collector\n<br><br>\n年龄：&nbsp;14\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #990000\">A+</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;12\n<br><br>\n信息：<br>这是一个可怕的哈儿，有收集人体器官的癖好。\n<br>\n常在公寓、居民小区出没。\n<br>\n被收集器官的人都<span style=\"color:  #FFAAAA;\"><strong>死亡</strong></span>了。\n<br>过于恐怖，不披露更多信息。\n<br><br><br>\n<img src=\"haer-img\\12.jpg\" alt=\"12\" title=\"YJ Collector - 12\" width=\"75%\">\n</p>";
}
else if (idd == "13") {
    document.getElementById("title").innerHTML = "-000 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>-000</h1>\n<h3 style=\"color: #7F7F7F\">反复自杀的哈儿</h3>\n<br>\n<p>\n姓名：&nbsp;-000\n<br><br>\n年龄：&nbsp;未知\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #990000\">A+</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;13\n<br><br>\n信息：<br>这个哈儿令人费解。\n<br>\n关押它的地方有一堵墙，在特定时间会因为错误而消失。\n<br>\n于是，-000走了出去，看见它自己在远处自杀了。\n<br>\n它感到很奇怪，便走过去看，看见了自己的尸体。\n<br>\n它突然明白了自己是哈儿，于是自杀了。\n<br>\n在自杀的几十秒前，墙的破洞内重新吸收了上一具尸体，恢复成走出墙外的-000的状态，\n<br>\n于是这个新的-000看见了上一个自己自杀了。\n<br>\n如此循环，直到墙再次恢复。\n<br>\n我们还有更多的信息，但是过于危险和诡异，\n<br>\n并可能使读者感到不适，已经删除。\n<br><br><br>\n<img src=\"haer-img\\13.jpg\" alt=\"13\" title=\"-000 - 13\" width=\"75%\">\n</p>";
}
else if (idd == "14") {
    document.getElementById("title").innerHTML = "炸（zhá）药人 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>炸（zhá）药人</h1>\n<h3 style=\"color: #7F7F7F\">出生便是炸（zhá）药</h3>\n<br>\n<p>\n姓名：&nbsp;炸（zhá）药人\n<br><br>\n年龄：&nbsp;20\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #FF0000\">A</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;14\n<br><br>\n信息：<br>它以炸（zhá）药为营养来源，出生时便会与母亲互相爆炸（zhá），\n<br>\n极其危险，容易被炸（zhá）至金黄！\n<br><br><br>\n<img src=\"haer-img\\14.jpg\" alt=\"14\" title=\"炸（zhá）药人 - 14\" width=\"75%\">\n</p>";
}
else if (idd == "15") {
    document.getElementById("title").innerHTML = "自行分解 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1>自行分解</h1>\n<h3 style=\"color: #7F7F7F\">可怕如-000</h3>\n<br>\n<p>\n姓名：&nbsp;自行分解\n<br><br>\n年龄：&nbsp;未知\n<br><br>\n哈儿危险程度标码：&nbsp;<span style=\"color: #990000\">A+</span>\n<!--A+: #990000 A: #FF0000 B: #FFFF00 C : #00FFFF D: #00FF00-->\n<br><br>\n哈儿码：&nbsp;15\n<br><br>\n它就像<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"show.html?haer=13\">-000</a>一样可怕。\n<br>\n它要移动自己，会将自己分解掉，并在另外位置重新复制一个自己。\n<br>\n这是它自己吗？还是什么？\n<br>\n目前它已经将3名研究员分解，不披露更多信息。\n<br><br><br>\n<img src=\"haer-img\\15.jpg\" alt=\"15\" title=\"自行分解 - 15\" width=\"75%\">\n</p>";
}
else //注意第二年要更新哈儿的年龄！！！
{
    document.getElementById("title").innerHTML = "无档案 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1 style=\" color: #FFAAAA;\">没有关于这个哈儿的档案</h1>";
}