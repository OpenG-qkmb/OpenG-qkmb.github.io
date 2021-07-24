function getQ(name)
	{
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
    }
	var idd=getQ("news");
	if(idd=="1")
	{
			var title="哈儿页面正式上线";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年7月23日 21:12:54";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n1.什么是哈儿页面？<br>哈儿页面就是让我们与哈儿实验室互动的最好渠道。<br>在这里，您可以查看关于哈儿最新的消息，<br>也可以为哈儿实验室提供最新的建议。\n</p>\n<p>2.如何注册\登陆？<br>参见<a href=\"..\\login.html\" style=\"color: #000000\" target=\"_blank\">注册页面</a>里的提示。</p>\n<p>3.如何与哈儿实验室互动？<br>您可以发送邮件（地址在注册页面里）或申请注册成功后直接上传。</p>\n<p>4.哈儿实验室是什么？<br>参见<a href=\"..\\about.html\" target=\"_blank\" style=\"color: #000000\">关于</a>页面。</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="2")
	{
			var title="【实验】原子重组实验";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年7月24日 18:10:07";
			document.getElementById("user").innerHTML="[User-2]";
			document.getElementById("mainb").innerHTML="<p>\n1.实验主题：<br>将原子重组形成新的组织\n</p>\n<p>\n2.实验方法：<br>使用【禁止显示】设备分解组织的原子，重组尝试形成新的组织\n</p>\n<p>\n3.实验结果：<br>错误率约为0.73%，<br>\n正确组成一些无法使用的组织，<br>\n错误原因：未知，设备错误，设备将自身分解，导致重组未开始，损失1台设备\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,2);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="3")
	{
			var title="【实验】高等智商哈儿";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年9月7日 17:18:47";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n1.实验主题：<br>尝试让哈儿像人类一样学习，并不告诉它们是哈儿\n</p>\n<p>\n2.实验方法：<br>让250个哈儿像人类一样学习，并不告诉它们是哈儿\n</p>\n<p>\n3.实验结果：<br>102个哈儿成功成为高等智商哈儿，<br>\n智商提升至人类智力残疾水平，<br>\n另有148个哈儿认为自己不是哈儿而狂妄自大，基本失去用途，被集中杀死\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="4")
	{
			var title="搜捕橄榄先生";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年9月14日 17:25:59";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n在<a style=\"color: #FFAAAA\" href=\"show.html?news=3\" target=\"_blank\">【实验】高智商哈儿</a>中，我们产生了一个最糟糕的失败品——<a style=\"color: #AAFFAA\" href=\"..\\access\\show.html?haer=6\" target=\"_blank\">橄榄先生</a>。\n<br><br>\n这个废弃哈儿首先认为<a style=\"color: #FFFFAA\" href=\"..\\user\\show.html?id=1\" target=\"_blank\">[User-1]</a>是哈儿，自己在治疗后者。\n<br><br>\n随后，它开始带领哈儿要求获得管理人员职位，被镇压后打伤1名工作人员，立即逃跑。\n<br><br>\n目前该哈儿已被定义为B等危险级别，在其主页（见上）中我们详细描述了他，目前我们正在全面搜捕，<span style=\"color: #FF0000;\"><b>见到请联系我们</b><span style=\"color: #000000;\">，</span><b>但请勿靠近或使其引起注意</b></span>！<br><br>\n附件：【实验】高智商哈儿、橄榄先生主页\n<br><br>\n<iframe src=\"show.html?news=3\" width=\"35%\" height=\"300px\"></iframe>\n<iframe src=\"..\\access\\show.html?haer=6\" width=\"35%\" height=\"300px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="5")
	{
			var title="【实验】TGT孩子见面实验";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年9月21日 11:15:31";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n1.实验主题：<br>让一个普通哈儿与TGT孩子见面\n</p>\n<p>\n2.实验方法：<br>让一个普通哈儿与TGT孩子见面，位置在太平洋中部某海岛\n</p>\n<p>\n3.实验结果：<br>哈儿非常震惊，上前一步，昂首挺胸地说：“安拉胡阿克巴！安拉胡阿克巴！”随后向海岸跑去，<br>\n冲入大海，根据定位，这个哈儿以无法捕获的速度，30分钟后出现在南极某浮冰区域，工作人员赶到后发现其尸体。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="6")
	{
			var title="炸（zhá）药";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年9月22日 13:09:17";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n炸（zhá）药，即油炸制成的药，\n<br>\n美味可口，功效极佳，善于爆炸（zhá）（即油炸周边物体），强身健体，延年益寿。\n<br>\n近日一名运动员服用炸（zhá）药后跳水，入水时炸（zhá）毁游泳场。（即油炸了游泳场）\n<br>\n<br>\n目前我们发现了“炸（zhá）药生产理论”，如下图：\n<br>\n<img src=\"newsimgs\\1.jpg\" alt=\"炸（zhá）药生产理论\" title=\"炸（zhá）药生产理论\" width=\"50%\"></p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="7")
	{
			var title="一些禁止行为";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月10日 12:06:56";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n最新的一些禁止行为目前已经可用：\n<br>\n<ol>\n<li>禁止把内裤穿在头上</li>\n<li><span style=\"color: #FF0000;\"><strong>禁止</strong></span>雄性哈儿以如图的形式如厕：<img src=\"newsimgs\\2.jpg\" alt=\"可怕的如厕方式\" title=\"可怕的如厕方式\" width=\"5%\"></li>\n<li>禁止与豪猪、<a href=\"..\\access\\show.html?haer=1\" style=\"color: #FFAAAA;\" target=\"_blank\">TGT孩子</a>发生关系</li>\n</ol>\n<br>\n<br>\n目前已发现上述行为，一律禁止，违法的哈儿将受到<span style=\"color: #00FF00;\"><strong>[禁止显示]</strong></span>的惩罚。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="8")
	{
			var title="炸（zhá）药炸（zhá）毁人类";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月13日 12:46:04";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n请注意，炸（zhá）药是<strong style=\"color: #FFAAAA;\">十分危险</strong>的物质！\n<br><br>\n下面是一些事故事例：\n<dl>\n<li>一名运动员跳水时服用炸（zhá）药，炸（zhá）毁游泳场。</li>\n<li>一名男子尝试给炸（zhá）药通电，被炸（zhá）药爆炸（zhá），炸（zhá）至金黄，被路人以为是烧烤吃了。</li>\n<li>一名男子使用炸（zhá）药，炸（zhá）毁了他的房子，无家可归。</li>\n</dl>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="9")
	{
			var title="YJ Collector出现";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月14日 12:16:25";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n请注意（特别是搜捕队），最近发现<a style=\"color: #AAFFAA;\" href=\"..\\access\\show.html?haer=12\" target=\"_blank\">YJ Collector</a>出现在<strong style=\"color: #FF0000;\">[禁止显示]</strong>区域，请做好准备！\n<br>\n<br>\n附：YJ Collector资料\n<br>\n<iframe src=\"..\\access\\show.html?haer=12\" width=\"75%\" height=\"500px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="10")
	{
			var title="紧急消息";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月15日 13:24:17";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n请搜捕队阅读，最近发现<a style=\"color: #AAFFAA;\" href=\"..\\access\\show.html?haer=12\" target=\"_blank\">YJ Collector</a>出现在<strong style=\"color: #FF0000;\">[禁止显示]</strong>区域，详细信息见文件下载。\n<br>\n<br>\n附一：YJ Collector出现的信息  <a style=\"color: #AAFFFF;\" target=\"_blank\" href=\"..\\downloads\\crys\\1.cry\">1.cry</a>，密码：<span style=\"background: #FFFFFF; color: #000000;\">haer</span>，\n<br>\n请使用HE2020解密。\n<br>\n<br>\n附二：YJ Collector资料\n<br>\n<iframe src=\"..\\access\\show.html?haer=12\" width=\"75%\" height=\"500px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="11")
	{
			var title="哈儿大礼包";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月20日 16:40:03";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n哈儿大礼包现在已经可以购买。\n<br>\n费用：￥100.00元\n<br>\n包含：<a style=\"color: #FFAAAA;\" target=\"blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>（繁殖阶段）100个（可生长出10000个）\n<br>\n只要有光照射即可自行拆毁笼子爬出。\n<br>\n如需购买请邮件并附上购买激活码。\n<br>\n附件：<a style=\"color: #FFAAAA;\" target=\"blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>资料\n<br>\n<iframe src=\"..\\access\\show.html?haer=1\" width=\"75%\" height=\"400px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="12")
	{
			var title="哈儿作画";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月26日 11:19:26";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n目前<a href=\"..\\access\\show.html?haer=7\" style=\"color: #AAFFAA;\" target=\"_blank\">小哈儿</a>已经开始学习作画，\n<br>\n下周就将展示它的一幅巨作《TGT孩子吃炸（zhá）药图》，敬请期待！\n<br>\n附件：小哈儿资料\n<br>\n<iframe src=\"..\\access\\show.html?haer=7\" width=\"75%\" height=\"300px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="13")
	{
			var title="大家好，我是TGT孩子";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月27日 12:59:25";
			document.getElementById("user").innerHTML="[User-5]";
			document.getElementById("mainb").innerHTML="<p>\n大家好，我是<a href=\"..\\access\\show.html?haer=1\" style=\"color: #FFAAAA;\" target=\"_blank\">TGT孩子</a>！\n<br>\n我已经开始学习，\n<br>\n并立志成为一个高智商哈儿！\n<br>\n我爱读书，这是我看到的两段好句：\n<br>\n<dl style=\"color: #AAFFAA;\">\n<li>眼睛鼓大点，认清串并联。\n<br>\n串联分压电流等，并联分流电压同。</li>\n<br>\n<li>你[Uns]再说话，我就把你的[Uns]没收了！！！</li>\n</dl>\n<br>\n我最近发现了一些不好的事情，非常不好。\n<br>\n请参阅文件：不好的事情  <a style=\"color: #AAFFFF;\" target=\"_blank\" href=\"..\\downloads\\crys\\2.cry\">2.cry</a>，密码：<span style=\"background: #FFFFFF; color: #000000;\">tgt</span>\n<br>\n<br>\n附件：TGT孩子资料\n<br>\n<iframe src=\"..\\access\\show.html?haer=1\" width=\"75%\" height=\"300px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,5);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="14")
	{
			var title="TGT孩子游玩事件";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月28日 11:44:08";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n近日，TGT孩子在游玩中发生一些不良事件。\n<br>\n事件列表：<dl style=\"color: #0000cc;\">\n<li>将鸭梨和炸（zhá）药嫁接在一起，形成一株抗病能力弱、果实小、味道涩、破坏能力强的炸（zhá）梨。</li>\n<li>帮路人挑粪，走到一半太累了，停下来喝了很久。</li>\n<li>制作了自动炸（zhá）毁器炸（zhá）毁大量路人，原理图如下：\n<br>\n<img src=\"newsimgs\\3.jpg\" width=\"32%\" title=\"自动炸（zhá）毁器\" alt=\"自动炸（zhá）毁器\"></li>\n</dl>\n现在公示以惩罚！\n<br>\n<br>\n附件：TGT孩子资料\n<br>\n<iframe src=\"..\\access\\show.html?haer=1\" width=\"75%\" height=\"300px\"></iframe>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="15")
	{
			var title="一哈儿成功消灭造反派";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年10月30日 11:55:11";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n近日，部分哈儿造反，企图消灭哈儿实验室。\n<br>\n敌方共3名哈儿，武器装备：无（空手），\n<br>\n在[Uns]地区几乎遇到我方3万<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>组成的安保巡逻队，\n<br>\n一名哈儿成功阻止交火并以自己的单个哈儿的力量消灭了敌方3名哈儿组成的大军。\n<br>\n具体事件如下：\n<br>\n<br>\n<span style=\"color: #AAFFAA; background: #000000; text-align: center;\">\n敌军3名哈儿行走于山坡，一名哈儿正在山顶里的木屋里冲澡，\n<br>\n水漏出来形成一条宽约30cm，深约0.8mm的溪流，\n<br>\n敌方3名哈儿担心溺水而死，\n<br>\n于是肩搭着肩一起抬脚跨越，\n<br>\n结果3名哈儿同时踩进水里，\n<br>\n全部滑倒，三个头一起撞在石头上，\n<br>\n这导致敌方3名哈儿组成的大军全军覆没，\n<br>\n成功避免与我方3万<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>组成的安保巡逻队交火。\n</span>\n<br>\n<br>\n这名哈儿事后被立一等功，并获得与3万<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>跳舞的机会。\n<br>\n在场的一名目击者说：“这个哈儿真[Uns]！”\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="16")
	{
			var title="《TGT孩子吃炸（zhá）药图》";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年11月23日 11:16:32";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n这是由<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=7\">小哈儿</a>绘制的《<a style=\"color: #cc0000;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>吃<a style=\"color: #FF00FF;\" target=\"_blank\" href=\"..\\access\\show.html?haer=8\">[FM]</a>图》，请欣赏。\n<br>\n注：小哈儿画完后被TGT孩子咬去[Uns]。\n<br>\n<img src=\"newsimgs\\4.jpg\" title=\"《TGT孩子吃炸（zhá）药图》\" alt=\"《TGT孩子吃炸（zhá）药图》\" width=\"75%\">\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[FM]/g,"炸（zhá）药");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="17")
	{
			var title="小哈儿的哈儿文";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年12月18日 17:10:24";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n<a style=\"color: #AAFFFF;\" target=\"_blank\" href=\"..\\access\\show.html?haer=7\">小哈儿</a>发布了一份由它自创的哈儿语文件。\n<br>\n注：<strong style=\"color: #CC0000;\">此文件是小哈儿自行创作，与哈儿实验室无关</strong>！\n<br>\n下载链接：<a href=\"dn\\News-2020-12-18.pdf\" target=\"_blank\" download=\"News-2020-12-18-download-by-button.pdf\"><button>下载</button></a>\n<br>\n<embed src=\"dn\\News-2020-12-18.pdf\" width=\"75%\" height=\"500px\"></embed>\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[FM]/g,"炸（zhá）药");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="18")
	{
			var title="紧急信息-关于THVH-982实验失误";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2020年12月21日 17:13:15";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n近日在[Uns]地区发现由哈儿实验室研发的THVH-982泄露，\n<br>\n截至21日中午12:00，已有<strong style=\"color: #FF0000\">89756</strong>个哈儿感染，\n<br>\n其中就地击毙和回炉处理的共<strong style=\"color: #FF0000\">88342</strong>个，\n<br>\n仍有<strong style=\"color: #FF0000\">1414</strong>个在逃。\n<br>\n更多信息见内部私信。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[FM]/g,"炸（zhá）药");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="19")
	{
			var title="关于2021年的注意事项";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年1月1日 00:00:00";
			document.getElementById("user").innerHTML="[User-1]";
			document.getElementById("mainb").innerHTML="<p>\n2020年已经过去了，在这一年里，我们累积获得<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>[Gt1]90274772696[Gt2]个（截至2020年12月31日23:30）；[br]我们累积获得<a style=\"color: #AAFFFF;\" target=\"_blank\" href=\"..\\access\\show.html?haer=7\">小哈儿</a>[Gt1]90274797233[Gt2]个（截至2020年12月31日23:45）；[br]累计生产了<a style=\"color: #FFFFAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=8\">[FM]</a>[Gt1]291645.97[Gt2]吨（截至2020年12月31日23:00）。[br]在此对哈儿实验室的工作人员和哈儿们给予高度评价。[br][br]于此提出对2021年的要求：[br]<ol><li>累计获得TGT孩子[Gt1]100000000000[Gt2]个以上</li><li>累计获得小哈儿[Gt1]100000002000[Gt2]个以上</li><li>累计生产[FM][Gt1]300000.00[Gt2]吨以上</li><li>保证累计不超过[Gt1]1200[Gt2]次哈儿暴动或叛乱</li><li>[Gt1]全面禁止[Gt2]哈儿乱交行为，这样产生的新品种难以控制，可以施行[Gt1]STD-325[Gt2]</li></ol>以下无正文，修改无效。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,1);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[FM]/g,"炸（zhá）药");
			test=test.replace(/\[Gt1]/g,"<strong style=\"color: #FF0000;\">");
			test=test.replace(/\[Gt2]/g,"</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="20")
	{
			var title="农历新年的重要讲话";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年2月11日 16:00:00";
			document.getElementById("user").innerHTML="[User-5]";
			document.getElementById("mainb").innerHTML="<p>\n本消息仅包含如下视频（TGT孩子新年讲话）[br]<video controls autoplay width=\"45%\"><source src=\"https://github.com/OpenG-qkmb/OpenG-qkmb.github.io/releases/download/v0.0.1/2021.mp4\"></video>[br]不限制下载。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,5);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="21")
	{
			var title="事故通报";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年3月2日 17:06:12";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n在2021年3月2日 11:30:00开始的2021030249实验发生事故，[br]该实验位于哈儿实验室东南方向的一处树林中。[br]存放<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>的一个高压容器发生爆炸。[br]<strong style=\"color: #FF0000;\">239</strong>个TGT孩子下落不明。[br]该事故目前正在调查中，请无关人员在<strong style=\"color: #FF0000;\">2021年4月1日</strong>前不要到达哈儿实验室周围<strong style=\"color: #FF0000;\">15km</strong>以内的区域，[br]我们会使用[Uns]方法处理出逃哈儿，并使用铁丝网禁止进入，[br]造成的不便见谅。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="22")
	{
			var title="讣告";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年3月16日 09:17:33";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n我们敬爱的哈儿实验室创始人、哈儿实验室总负责人、哈儿实验室最高苏维埃主席——[br]<a style=\"color: #FFFFAA\" href=\"..\\user\\show.html?id=1\" target=\"_blank\">[User-1]</a>先生于今晨08:19:03在哈儿实验室紧急治疗中心去世，享年[Uns]岁。[br][User-1]于<a href=\"show.html?news=21\" target=\"_blank\" style=\"color: #FFAAAA;\">3月2日的事故</a>中被<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"..\\access\\show.html?haer=1\">TGT孩子</a>追赶，[br]开车撤离时车从悬崖落下，今日不治身亡。[br]在此沉痛悼念。\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="23")
	{
			var title="新一任领导人";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年4月25日 09:10:57";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n新的哈儿实验室苏维埃主席团主席已经产生——<a style=\"color: #FFFFAA\" href=\"..\\user\\show.html?id=6\" target=\"_blank\">[User-6]</a>先生。[br]他是我们伟大的领袖，继承了哈儿实验室的光辉传统。[br]他将带领着哈儿实验室进入新时代！\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="24")
	{
			var title="哈儿语相关事宜 HAER LANGU ABET DORIV";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年5月15日 20:51:18";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n哈儿语言研究小组已成功根据哈儿当地语言研发了拉丁字母的哈儿语，[br]目前正在推广和应用于本网站。[br]目前只在少部分页面上施行，接下来几个月会全部施行至哈儿实验室数据库。[br]我们保留使用西里尔字母的可能性。[br]另外，我们删除了毫无意义的下载中心，但其文件可以从链接继续被访问，其页面将被废除。\n</p><p>\nHAER LANGU STUDA DRIGVS NEWILAV POBEDA SPEDTREK HAER MESTNIV LANGU YEFIDROV LATIN PISROZ D HAER LANGU,[br]LIS VEDAN ZIKK BEV VEDAROV TET VEBAT.[br]LIS OKKRU T NIHV VEBAT WUK VEDAN, BUK GOTERA VLOTA WILAV ALAK VEDAN HAER LABOTIY DATV.[br]IYI VEEBET VEDAN KIRILIVA PISROZ D MAY.[br]DRUGIV, IYI OTMENIT NESSMI D NAGRUZOVA SUK, VET TET TEKST RUZ G SAYIT WORETNED WASEV YEVAROV, TET VEBAT WILAV WASEV OTMENIT.\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[Unsh]/g,"<strong style=\"color: #FF0000;\">[Neruz Udsafoz]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="25")
	{
			var title="哈儿国战时中央委员会 HAER UFEKKE POB KLOTA SUK ODEWZ";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年6月6日 23:00:00";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n哈儿国最高苏维埃昨日通过议案，正式组建哈儿国战时中央委员会。[br]其中，哈儿共产党中央委员会总书记兼哈儿实验室苏维埃主席兼哈儿国国防部长兼战时哈儿工人红军总司令<a style=\"color: #AAFFAA\" href=\"..\\user\\show.html?id=6\" target=\"_blank\">[User-6]</a>同志任哈儿国战时中央委员会主席。[br]哈儿国最高苏维埃主席团主席TGT孩子-3674117及哈儿国部长会议主席任副主席。[br]另外还有7名委员：TGT孩子-3601209、TGT孩子-5411648、TGT孩子-7168091、小哈儿-3601209、小哈儿-5411648、小哈儿-7168091、空洞孩子-36114。[br]本委员会在哈儿国进入紧急状态或战时状态时掌控国家一切权力。[br]昨日通过的另一项议案，宣布哈儿国自即日起进入战时状态，估计在12月前能够解除。[br]另通知：哈儿共产党第二次全国代表大会将于6月15日召开。\n</p><p>\nHAER UFEKKE VOE AK SOVET NOS FEHIU YOT OST, TREKVDOG BILID HAER UFEKKE POB KLOTA SUK ODEWZ.[br]SUK, HAER KOMUTA PARITY SUK ODEWZ ALAKROVEZ BEV HAER LABOTIY SOVET YEMAN BEV HAER UFEKKE POBVEDA FORETONZ BEV POB KLOTA HAER WOREV SEKHI POBPETA POBPETAZIZ <a style=\"color: #AAFFAA\" href=\"..\\user\\show.html?id=6\" target=\"_blank\">[User-6]</a> TOVARISHCH PETAS HAER UFEKKE POB KLOTA SUK ODEWZ YEMAN. [br]HAER UFEKKE VOE AK SOVET YEMANI YEMAN TGT KID-3674117 BEV HAER UFEKKE FORETONZ ZIZST YEMANI PETAS TANVED YEMAN.[br]DRUGIV SN HE 7 (GOGIZ) ODEW: TGT KID-3601209, TGT KID-5411648, TGT KID-7168091, SIN HAER-3601209, SIN HAER-5411648, SIN HAER-7168091, RUL KID-36114.[br]TET ODEWZ T HAER UFEKKE IGZ DEKVEDAN VEDANZ ORE POB VEDANZ KLOTA DUHZ UFEKKE ALAK POUMON.[br]NOS FEHIU D DRUGIV YOT OST, MU HAER UFEKKE G TET KLOTA RUHZ IGZ POB VEDANZ, TSONRAZ T 12 VLOTA (YOT-GOTA-VLOTA) FUK RUZ OTMENIT.[br]DRUGIV MU: HAER KOMUTA PARITY PARIZ 1 (PARIZ YOT) WILAV T 6 VLOTA 15 DLOTA (GOTU-VLOTA YOT-GOTI-VLOTA) WORETNED.\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[Unsh]/g,"<strong style=\"color: #FF0000;\">[Neruz Udsafoz]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="26")
	{
			var title="来自哈儿实验室苏维埃的消息 G Haer Labotiy sovet d nev";
			document.getElementById("title").innerHTML=title+" - 最新";
			document.getElementById("titleh1").innerHTML=title;
			document.getElementById("ttime").innerHTML="2021年7月25日 00:00:00";
			document.getElementById("user").innerHTML="[User-4]";
			document.getElementById("mainb").innerHTML="<p>\n亲爱的同志们，据哈儿苏维埃社会主义共和国肃反委员会报告，<a style=\"color: #FFFFAA\" href=\"..\\user\\show.html?id=6\" target=\"_blank\">[User-6]</a>同志于7月4日遇刺身亡，[br]其继任者<span style=\"color: #AAFFAA\">K-526-406Y</span>继续错误地执行其前任领导人的错误指示。[br]在此二人的领导下，从党到政府，再到实验室，无不骄傲自大、软弱无能。[br]在7月4日至7月9日，哈儿国遭遇了前所未有的打击，危机不断出现，使得<a style=\"color: #FFAAAA\" href=\"..\\user\\show.html?id=1\" target=\"_blank\">[User-1]</a>同志的一切努力几乎都付诸东流。[br]在15日的会议上，经过同志们的指导，<span style=\"color: #AAFFAA\">K-526-406Y</span>认识到了自己的错误，并宣布辞去哈儿实验室苏维埃主席、哈儿共产党中央委员会总书记及哈儿工人红军战时司令委员会主席的职务。[br]经会议讨论通过，同意其辞职请求，其将于8月1日正式卸任，其退休后住所已安排到位。[br]经会议选举，决定自8月1日起，<a style=\"color: #FFAAAA\" href=\"..\\user\\show.html?id=7\" target=\"_blank\">[User-7]</a>同志将正式被任命为哈儿实验室苏维埃主席、哈儿共产党中央委员会总书记及哈儿工人红军战时司令委员会主席。[br]极端的个人崇拜、骄傲自大及修正主义已被完全清除，哈儿苏维埃社会主义共和国肃反委员会将于8月1日结束肃反扩大化工作，感谢同志们的支持与配合。[br]另外，哈儿语改革工作使得现在的哈儿语看起来与旧版不同，见谅。[br]最后，哈儿实验室工作语言为：简体中文、哈儿语；哈儿苏维埃社会主义共和国官方语言为：大写哈儿语。请相关部门及时调整。\n</p><p>\nBetil tovarishkh, spedtrek Haer Sovet Sotsialism Respublik purigu odeŭz duzov, <a style=\"color: #FFFFAA\" href=\"..\\user\\show.html?id=6\" target=\"_blank\">[User-6]</a> tovarishkh t 7 vlota 4 dlota (iz-vlota veh-dlota) ŭasev kit dek, [br]te d sinsekveta <span style=\"color: #AAFFAA\">K-526-406Y</span> ŭoretned frekva z vipoleni te d fuk keh d frekva komanda.[br]T tet sep homan d keh duk, g parity r govera, denove r Haer Labotiy, alak aroganta, nestag bev senutil.[br]T 7 vlota 4 dlota (iz-vlota veh-dlota) r 7 vlota 9 dlota (iz-vlota vos-dlota),[br]Haer Ufekke renkont ŭirez bespretsedentni d razokharovaniye, uzasni sinseks ved, wasez <a style=\"color: #FFAAAA\" href=\"..\\user\\show.html?id=1\" target=\"_blank\">[User-1]</a> tovarishkh d alak poleznost pokti alak ŭasev otmenit.[br]T 15 dlota (vot-nya-dlota) d zizst ŭuk, prokhodyashkhi tovarishkh d komanda, <span style=\"color: #AAFFAA\">K-526-406Y</span> yefidrov ŭirez te d frekva, bev mu rezig Haer Labotiy sovet yeman,[br]Haer Kommunism Parity suk odeŭz alakrovez bev Haer Ŭorev Sekhi Pobpeta pob klota pobpetaz odeŭz yeman d petas.[br]Prokhodyashkhi zizst spedpob fehiu, fehiu te d rezig vid, te d ŭilav t 8 vlota 1 dlota (rek-vlota on-dlota) trekvdog rezig, te d rezig buk fekke neŭilav ŭasev raspolozheniye.[br]Prokhodyashkhi zizst rolekt, komanda g 8 vlota 1 dlota (rek-vlota on-dlota) ruhz, <a style=\"color: #FFAAAA\" href=\"..\\user\\show.html?id=7\" target=\"_blank\">[User-7]</a> tovarishkh ŭilav trekvdog ŭasev rendev veda Haer Labotiy sovet yeman,[br]Haer Kommunism Parity suk odeŭz alakrovez bev Haer Ŭorev Sekhi Pobpeta pob klota pobpetaz odeŭz yeman.[br]Voe d kuldlikhnost, aroganta bev revizionism neŭilav ŭasev alak purigu,[br]Haer Sovet Sotsialism Respublik purigu odeŭz ŭilav t 8 vlota 1 dlota (rek-vlota on-dlota) ŭoretneh purigu ŭasez veda bin ŭoret, spasiv tovarishkh d poleznost bev pomogad.[br]Drugiv, Haer Langu reforma ŭoret ŭasez lis d Haer Langu yevarov neidentikhni, prostid.[br]Voe buk, Haer Labotiy d ŭoret langu veda: Lakonikhni Kitay Langu bev Haer Langu;[br]Haer Sovet Sotsialism Respublik d tregvdog langu veda: Bin Haer Langu.[br]Vid svyazani foreton bistri regulirovad.\n</p>";
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[idd]/g,4);
			test=test.replace(/\[Uns]/g,"<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
			test=test.replace(/\[Unsh]/g,"<strong style=\"color: #FF0000;\">[Neruz Udsafoz]</strong>");
			test=test.replace(/\[br]/g,"\n<br>\n");
			document.getElementById("main").innerHTML=test;
	}
	else
	{
		document.getElementById("title").innerHTML="未选择最新消息 - 最新<br>Ne Rolekt Voe Nev - Voe Nev";
		document.getElementById("mainb").innerHTML="<h1 style=\" color: #FFAAAA;\">未选择最新消息<br>Ne rolekt voe nev.</h1>";
	}