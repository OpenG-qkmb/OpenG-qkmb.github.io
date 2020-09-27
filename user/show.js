	function getQ(name)
	{
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
    }
	const N=3+1;
	var useless=["22","33","55"],name101=["und","OpenG-qkmb","夢の死のメッセージ","HR"],write=["und","我们没有在正常说话，我们在异常说话。","（未填写）","GREEN"],date=["und","2020年7月23日","2020年7月24日","2020年7月30日"],info=["und","<h1 style=\"font-size: 70px\"><span style=\"color: #AAAAFF\">呃</span>，<span style=\"color: #FFAAAA\">哈</span><span style=\"color: #AAFFAA\">儿</span></h1>","<p style=\"font-size: 20px\">成功发现<span style=\"color: #FFAAAA\">TGT孩子</span>、<span style=\"color: #FFAAAA\">空洞孩子</span>等一系列危险生物，并冒着生命危险进行试验，为实验室提供了许多重要数据</p>","<a style=\"font-size: 30px; color: #FFFFAA\" href=\"https://mrhaer.github.io/\" target=\"_blank\">我的哈儿公司分部</a>\n<p style=\"color: #AAFFAA; font-size: 40px\">GREEN</p>"];
	function change(idd)
	{
		var tmp,flag=0;
		for(var i=0;i<=N;++i)tmp+=name101[i]+'\n';
		console.log(tmp);
		for(var i=1;i<=N;++i)
		{
			if(i==idd)
			{
				useless[i]=useless[i]+1;
				document.getElementById("title").innerHTML=(name101[i]+" - 用户信息");
				var test=document.getElementById("main").innerHTML;
				test=test.replace(/\[Name]/g,name101[i]);
				test=test.replace(/\[Code]/g,i);
				test=test.replace(/\[Write]/g,write[i]);
				test=test.replace(/\[Date]/g,date[i]);
				test=test.replace(/\[Info]/g,info[i]);
				document.getElementById("main").innerHTML=test;
				flag=1;
				break;
			}
		}
		if(flag==0){document.getElementById("mmm").innerHTML="<h1 style=\"color: #FFAAAA\">未选择</h1>";
		document.getElementById("title").innerHTML="未选择 - 用户信息";}
	}
	function cngbynn()
	{
		var idr=getQ("id");
		//if(idr>='0'&&idr<='9')idr-='0';
		change(idr);
	}