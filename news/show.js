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
	else
	{
		document.getElementById("title").innerHTML="未选择最新消息 - 最新";
		document.getElementById("mainb").innerHTML="<h1 style=\" color: #FFAAAA;\">未选择最新消息</h1>";
	}