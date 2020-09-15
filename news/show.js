function getQ(name)
	{
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
    }
	var idd=getQ("news");
	if(idd=="1")
	{
			document.getElementById("title").innerHTML="哈儿页面正式上线 - 最新";
			document.getElementById("main").innerHTML="<h1>哈儿页面正式上线</h1>\n<p>发布者：<a style=\"color: #FFFF00\" href=\"..\\user\\1\\index.html\" target=\"_blank\">OpenG-qkmb</a>\n<br>时间：2020年7月23日 21:12:54</p>\n<p>\n1.什么是哈儿页面？<br>哈儿页面就是让我们与哈儿实验室互动的最好渠道。<br>在这里，您可以查看关于哈儿最新的消息，<br>也可以为哈儿实验室提供最新的建议。\n</p>\n<p>2.如何注册\登陆？<br>参见<a href=\"..\\login.html\" style=\"color: #000000\" target=\"_blank\">注册页面</a>里的提示。</p>\n<p>3.如何与哈儿实验室互动？<br>您可以发送邮件（地址在注册页面里）或申请注册成功后直接上传。</p>\n<p>4.哈儿实验室是什么？<br>参见<a href=\"..\\about.html\" target=\"_blank\" style=\"color: #000000\">关于</a>页面。</p>";
	}
	else if(idd=="2")
	{
			document.getElementById("title").innerHTML="【实验】原子重组实验 - 最新";
			document.getElementById("main").innerHTML="<h1>【实验】原子重组实验</h1>\n<p>发布者：<a style=\"color: #FFFF00\" href=\"..\\user\\2\\index.html\" target=\"_blank\">jky</a>\n<br>时间：2020年7月24日 18:10:07</p>\n<p>\n1.实验主题：<br>将原子重组形成新的组织\n</p>\n<p>\n2.实验方法：<br>使用【禁止显示】设备分解组织的原子，重组尝试形成新的组织\n</p>\n<p>\n3.实验结果：<br>错误率约为0.73%，<br>\n正确组成一些无法使用的组织，<br>\n错误原因：未知，设备错误，设备将自身分解，导致重组未开始，损失1台设备\n</p>";
	}
	else if(idd=="3")
	{
			document.getElementById("title").innerHTML="【实验】高等智商哈儿  - 最新";
			document.getElementById("main").innerHTML="<h1>【实验】高等智商哈儿</h1>\n<p>发布者：<a style=\"color: #FFFF00\" href=\"..\\user\\1\\index.html\" target=\"_blank\">OpenG-qkmb</a>\n<br>时间：2020年9月7日 17:18:47</p>\n<p>\n1.实验主题：<br>尝试让哈儿像人类一样学习，并不告诉它们是哈儿\n</p>\n<p>\n2.实验方法：<br>让250个哈儿像人类一样学习，并不告诉它们是哈儿\n</p>\n<p>\n3.实验结果：<br>102个哈儿成功成为高等智商哈儿，<br>\n智商提升至人类智力残疾水平，<br>\n另有148个哈儿认为自己不是哈儿而狂妄自大，基本失去用途，被集中杀死\n</p>";
	}
	else if(idd=="4")
	{
			document.getElementById("title").innerHTML="搜捕橄榄先生  - 最新";
			document.getElementById("main").innerHTML="<h1>搜捕橄榄先生</h1>\n<p>发布者：<a style=\"color: #FFFF00\" href=\"..\\user\\1\\index.html\" target=\"_blank\">OpenG-qkmb</a>\n<br>时间：2020年9月14日 17:25:59</p>\n<p>\n在<a style=\"color: #FFAAAA\" href=\"show.html?news=3\" target=\"_blank\">【实验】高智商哈儿</a>中，我们产生了一个最糟糕的失败品——<a style=\"color: #AAFFAA\" href=\"..\\access\\show.html?haer=6\" target=\"_blank\">橄榄先生</a>。\n<br><br>\n这个废弃哈儿首先认为<a style=\"color: #FFFFAA\" href=\"..\\user\\1\\index.html\" target=\"_blank\">OpenG-qkmb</a>是哈儿，自己在治疗后者。\n<br><br>\n随后，它开始带领哈儿要求获得管理人员职位，被镇压后打伤1名工作人员，立即逃跑。\n<br><br>\n目前该哈儿已被定义为B等危险级别，在其主页（见上）中我们详细描述了他，目前我们正在全面搜捕，<span style=\"color: #FF0000;\"><b>见到请联系我们</b><span style=\"color: #000000;\">，</span><b>但请勿靠近或使其引起注意</b></span>！<br><br>\n附件：【实验】高智商哈儿、橄榄先生主页\n<br><br>\n<iframe src=\"show.html?news=3\" width=\"35%\" height=\"300px\"></iframe>\n<iframe src=\"..\\access\\show.html?haer=6\" width=\"35%\" height=\"300px\"></iframe>\n</p>";
	}
	else
	{
		document.getElementById("title").innerHTML="未选择最新消息 - 最新";
		document.getElementById("main").innerHTML="<h1 style=\" color: #FFAAAA;\">未选择最新消息</h1>";
	}