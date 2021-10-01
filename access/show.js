window.location.href="https://hssrgov.github.io/access/";

function getQ(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var idd = getQ("haer");
document.getElementById("sid").value=idd;
const dg=["A+","A","B","C","D"];
const dgclr=["#990000","#FF0000","#FFFF00","#00FFFF","#00FF00"];
var name,age,des,dgs,info;
if (idd == "0") {
    name="夜车联盟";
	age=1;
	des="C学校最大的恐怖组织。";
	dgs=3;
	info="夜车联盟是由Y发起的恐怖组织。这个组织有10多人。<br>其目的是在晚上写作业，然后到其他卧室来。学校规定禁止上述行为，但该组织的成员完全违反这些行为。<br>这个组织中的每个人都有自己的呼叫标志。晚上，总司令Y先生安排时间让成员们在晚上写作业，并安排时间去其他卧室，未经许可。<br>会员在门口时通常会发出奇怪的噪音，使人整夜睡不着觉。<br>有些成员来到门口传达命令，并唤醒其他成员执行任务。这是C学校最大的恐怖组织。"
	//A+=0 A=1 B=2 C=3 D=4
} else if (idd == "1") {
	name="TGT孩子";
	age=13;
	des="最可怕的野兽之一";
	dgs=0;
	info="它是一个类人生物， 于 2018 年 4 月 21 日 14：38：39 变成哈儿。\n<br>\n它爱上了很多人，但是它爱上的所有人都被咬掉部分生殖系统而死。\n<br>\n它死后，它体内的咬下来的部分生殖系统会自动繁殖，并生下许多它的副本，然后逃走。"
} else if (idd == "2") {
    name="哈儿之王";
	age=24;
	des="史上智商最低的哈儿";
	dgs=1;
	info="它是史上智商最低的哈儿，低至-2408325！它曾经把蔬菜大棚涂成绿色，导致温室只透过绿光，而植物的叶反射绿光，造成所有农作物死亡。它曾经毁坏了8000多人的财产！当你看到它时不要动，让自己站着不动，它就会保持不动，否则它会攻击移动的东西，别认为跑得快就可以，它的最高速度可以达到800公里/秒！"
} else if (idd == "3") {
    name="空洞孩子";
	age=14;
	des="拥有复活被TGT孩子杀死的人的能力";
	dgs=2;
	info="当一个人被TGT孩子杀死时， 它会来帮助这个人。但由于它的能力有限，在一个星期内只能治愈一个人。它从头上分泌液体，将这种液体与另一种体液混合，并涂于死者的伤口。死者会被治愈，恢复正常生活。";
} else if (idd == "4") {
    name="肾先生";
	age=31;
	des="一个失恋的哈儿";
	dgs=1;
	info="它失恋了，偶然走进哈儿门。H博士把它的肾小球和静脉连接在一起，成为一个独立的血液循环系统，这导致了他的肾坏死。因为它失恋了，他会毁掉大多数情侣的肾脏，但它支持真正的、坚固的爱情。";
} else if (idd == "5") {
    name="CXK病毒";
	age=0;
	des="使“坤头套儿”遭到报复";
	dgs=2;
	info="2020年7月22日上午C校的信息测试中，有人发现“点我解压CXK打篮球视频”的程序，打开后电脑损坏，代码全部丢失。受害者之一的B先生认为自己遭到了报复，因为前一天晚上他还在画“坤头套儿”。";
} else if (idd == "6") {
    name="橄榄先生";
	age=13;
	des="狂妄自大的哈儿";
	dgs=2;
	info="在<a href=\"..\\news\\3.html\" style=\"color: #FFAAAA;\" target=\"_blank\">高等智商哈儿实验</a>（见文章底部附录）中，橄榄先生是失败品，变成了狂妄自大的低智商哈儿。他甚至认为哈儿实验室创始人<a href=\"..\\user\\show.html?id=1\" style=\"color: #FFFF00;\" target=\"_blank\">[User-1]</a>是哈儿，而自己是治疗后者的医师！\n<br>\n<span style=\"color: #FFFFAA;\">几乎所有哈儿都讨厌他（包括上述实验失败的狂妄自大的废弃哈儿！！）</span>，因为他总是认为自己是正常人而看不起其它哈儿。\n<br>\n该哈儿已被定义为废弃哈儿，目前已成功返回总部。因此删除对其外貌的叙述。\n<br>\n见到它的哈儿都被吓得跟它一样了，例如<a href=\"show.html?haer=17\" target=\"_blank\" style=\"color: #AAFFAA;\">已扭曲矩形对象</a>。\n<br>\n若再次见到请勿与其交流，并报告我们！\n<br><br><br>\n<br><br><br>\n<span style=\"font-size: 5px\">附：高等智商哈儿实验说明<br></span>\n<iframe src=\"..\\news\\3.html\" width=\"66%\" height=\"300px\"></iframe>";
} else if (idd == "7") {
    name="小哈儿";
	age=12;
	des="TGT孩子的附属哈儿";
	dgs=2;
	info="它是在TGT孩子的房间当TGT孩子情绪欲望发泄器多年的哈儿，身受重伤但意志顽强、忠于TGT孩子，减少了很多次TGT孩子攻击人的事件。";
} else if (idd == "8") {
    name="炸（zhá）药";
	age=0;
	des="以油炸方式制成的药品";
	dgs=1;
	info="这是以油炸方式制成的药品，在一次跳水比赛中一名运动员感冒服用过多，入水时炸毁游泳场。\n<br>\n在内燃机中使用这种以油炸过的【禁止显示】药，可以使热机效率达到100%及以上。";
} else if (idd == "9") {
    name="已体检对象";
	age=14;
	des="体检合格后狂喜的哈儿";
	dgs=2;
	info="这个哈儿体检合格后进入<a href=\"..\\door\\index.html\" style=\"color: #AAFFFF;\" target=\"_blank\">哈儿门</a>，随后拿着显示体检合格体检单到处乱跳，\n<br>\n导致哈儿们<span style=\"color: #FFAAAA;\">疯狂跳动了一个下午</span>，最后被我们用麻醉枪全部制服。\n<br>\n它有一个奇怪的癖好：喜欢在<a href=\"..\\door\\index.html\" style=\"color: #AAFFFF;\" target=\"_blank\">哈儿门</a>处反复进出，动作娴熟，每天能进<span style=\"color: #FFFFAA;\">100次以上</span>！\n<br>\n这导致它成为低智商哈儿，智力令人堪忧，但现在它已经对所有麻醉剂产生了抵抗力，目前我们无法阻止它智商骤降。";
}
else if (idd == "10") {
    name="电话者";
	age=9;
	des="电话不停的哈儿";
	dgs=1;
	info="这个哈儿变哈的时候只有7岁，出于好奇进入。\n<br>\n当时他刚刚接触电话，对电话机很感兴趣，\n<br>\n于是他在这几年的时间里每天向外拨出至少300个电话，导致我们话费严重欠费，\n<br>\n我们便把电话机拿走了，\n<br>\n结果他联合<a href=\"show.html?haer=1\" target=\"_blank\" style=\"color: #FFAAAA;\">TGT孩子</a>造反，\n<br>\n我们只好给他电话，但是是<span style=\"color: #AAFFFF;\">内部电话，由计算机负责接电话，并播放祖安话语</span>。\n<br>\n这导致目前它有<span style=\"color: #FF0000;\">严重的暴力倾向，请勿靠近</span>！";
}
else if (idd == "11") {
    name="考生";
	age=13;
	des="考试中的美丽风景";
	dgs=2;
	info="他参加了一场考试，<span style=\"color: #FFFFAA;\">在考试中被发现是哈儿（疑似摔坏了脑子）</span>\n<br>\n他携带一台电子显微镜进入考场，开始做题，\n<br>\n做题期间为证明线段AB=AC+OD，\n<br>\n于是<span style=\"color: #FFAAAA;\">精准作图</span>，<span style=\"color: #FFAAAA;\">并使用电子显微镜数AB、AC、OD有多少个分子</span>，\n<br>\n被轰出考场后补考，几次三番不断地数，被关入高智商哈儿集训营。";
}
else if (idd == "12") {
    name="YJ Collector";
	age=14;
	des="仅次于TGT的恶魔";
	dgs=0;
	info="这是一个可怕的哈儿，有收集人体器官的癖好。\n<br>\n常在公寓、居民小区出没。\n<br>\n被收集器官的人都<span style=\"color:  #FFAAAA;\"><strong>死亡</strong></span>了。\n<br>过于恐怖，不披露更多信息。";
}
else if (idd == "13") {
    name="-000";
	age="未知";
	des="反复自杀的哈儿";
	dgs=0;
	info="这个哈儿令人费解。\n<br>\n关押它的地方有一堵墙，在特定时间会因为错误而消失。\n<br>\n于是，-000走了出去，看见它自己在远处自杀了。\n<br>\n它感到很奇怪，便走过去看，看见了自己的尸体。\n<br>\n它突然明白了自己是哈儿，于是自杀了。\n<br>\n在自杀的几十秒前，墙的破洞内重新吸收了上一具尸体，恢复成走出墙外的-000的状态，\n<br>\n于是这个新的-000看见了上一个自己自杀了。\n<br>\n如此循环，直到墙再次恢复。\n<br>\n我们还有更多的信息，但是过于危险和诡异，\n<br>\n并可能使读者感到不适，已经删除。";
}
else if (idd == "14") {
    name="炸（zhá）药人";
	age=20;
	des="出生便是炸（zhá）药";
	dgs=1;
	info="它以炸（zhá）药为营养来源，出生时便会与母亲互相爆炸（zhá），\n<br>\n极其危险，容易被炸（zhá）至金黄！";
}
else if (idd == "15") {
    name="自行分解";
	age="未知";
	des="可怕如-000";
	dgs=0;
	info="它就像<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"show.html?haer=13\">-000</a>一样可怕。\n<br>\n它要移动自己，会将自己分解掉，并在另外位置重新复制一个自己。\n<br>\n这是它自己吗？还是什么？\n<br>\n目前它已经将3名研究员分解，不披露更多信息。";
}
else if (idd == "16") {
    name="地理老师";
	age=29;
	des="飘（piàp）行者";
	dgs=1;
	info="这是一位老师，而且在严格意义上来说她智商正常，不是哈儿。\n<br>\n每次上地理课，她都会带着学生飘（piàp）走，下课又飘（piàp）回来。\n<br>\n她禁止学生呼吸，因为空气稀薄。\n<br>\n她法力无边，但学生法力不够，因此不能出教室。\n<br>\n飘（piàp）走是为了观察地形地貌，但是一般要飘（piàp）8小时，\n<br>\n而且经常带着教学楼飘（piàp）走，只带着自己的学生回来，\n<br>\n其它的学生以及教学楼，被永远留在了未知位置的空中。";
}
else if (idd == "17") {
    name="已扭曲矩形对象";
	age=14;
	des="小孩终生的阴影";
	dgs=0;
	info="这是一个学生。它面目可怕，使得看到它的人都吓疯了，变得与它一样了，\n<br>\n它成为小孩终生的阴影，直到他们老了，回想人生时也会被吓到猝死。\n<br>\n它双眼扭曲，斜向上45°，鼻子像练了功一样弯曲，十分可怕。\n<br>\n它喜欢练功，常常从楼上跳下去测试自己能否飞行，\n<br>\n最终飞了一下，挂在树上，这种事情已发生几十回了。";
}
else //注意第二年要更新哈儿的年龄！！！
{
    document.getElementById("title").innerHTML = "无档案 - 哈儿实验室数据库";
    document.getElementById("main").innerHTML = "<h1 style=\" color: #FFAAAA;\">没有关于这个哈儿的档案</h1>";
}
document.getElementById("title").innerHTML = name+" - 哈儿实验室数据库 HAER LABOTIY DATV";
document.getElementById("t1").innerHTML =document.getElementById("t2").innerHTML =name;
document.getElementById("des").innerHTML =des;
document.getElementById("img").alt = document.getElementById("id1").innerHTML =idd;
document.getElementById("age").innerHTML =Number(age)+Number(1);
document.getElementById("info").innerHTML =info;
document.getElementById("img").src ="haer-img\\"+idd+".jpg";
document.getElementById("img").title=name+" - "+idd;
document.getElementById("dg").innerHTML=dg[dgs];
document.getElementById("dg").style="color: "+dgclr[dgs]+";";
