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

	else
	{
		document.getElementById("title").innerHTML="未选择最新消息 - 最新";
		document.getElementById("mainb").innerHTML="<h1 style=\" color: #FFAAAA;\">未选择最新消息</h1>";
	}