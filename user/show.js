	function getQ(name)
	{
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
    }
	var idd=getQ("id");
	var name,code,words,date,write;
	if(idd=="1")
	{
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[Name]/g,"OpenG-qkmb");
			test=test.replace(/\[Code]/g,"1");
			test=test.replace(/\[Write]/g,"我们没有在正常说话，我们在异常说话。");
			test=test.replace(/\[Date]/g,"2020年7月23日");
			test=test.replace(/\[Info]/g,"<h1 style=\"font-size: 70px\"><span style=\"color: #AAAAFF\">呃</span>，<span style=\"color: #FFAAAA\">哈</span><span style=\"color: #AAFFAA\">儿</span></h1>");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="2")
	{
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[Name]/g,"夢の死のメッセージ");
			test=test.replace(/\[Code]/g,"2");
			test=test.replace(/\[Write]/g,"（未填写）");
			test=test.replace(/\[Date]/g,"2020年7月24日");
			test=test.replace(/\[Info]/g,"<p style=\"font-size: 20px\">成功发现<span style=\"color: #FFAAAA\">TGT孩子</span>、<span style=\"color: #FFAAAA\">空洞孩子</span>等一系列危险生物，并冒着生命危险进行试验，为实验室提供了许多重要数据</p>");
			document.getElementById("main").innerHTML=test;
	}
	else if(idd=="3")
	{
			var test=document.getElementById("main").innerHTML;
			test=test.replace(/\[Name]/g,"HR");
			test=test.replace(/\[Code]/g,"3");
			test=test.replace(/\[Write]/g,"GREEN");
			test=test.replace(/\[Date]/g,"2020年7月30日");
			test=test.replace(/\[Info]/g,"<a style=\"font-size: 30px; color: #FFFFAA\" href=\"https://mrhaer.github.io/\" target=\"_blank\">我的哈儿公司分部</a>\n<p style=\"color: #AAFFAA; font-size: 40px\">GREEN</p>");
			document.getElementById("main").innerHTML=test;
	}