	function getQ(name)
	{
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
    }
	var idd=getQ("id");
	if(idd=="prussia")
	{
			document.getElementById("fn").innerHTML="普鲁士进行曲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文件名：Prussia.mp3";
			document.getElementById("dn").innerHTML="<a style=\"color: #FFFFFF;\" href=\"Prussia.mp3\" download=\"Prussia.mp3\"><img src=\"download.jpg\" alt=\"下载   DOWNLOAD\" title=\"下载   DOWNLOAD\"></a>";
	}
	else if(idd=="imgs")
	{
			document.getElementById("fn").innerHTML="一些图片&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文件名：imageres.zip";
			document.getElementById("dn").innerHTML="<a style=\"color: #FFFFFF;\" href=\"imgs.zip\" download=\"imageres.zip\"><img src=\"download.jpg\" alt=\"下载   DOWNLOAD\" title=\"下载   DOWNLOAD\"></a>";
	}
	else if(idd=="reg")
	{
			document.getElementById("fn").innerHTML="用户注册信息填写模板&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文件名：reg.zip";
			document.getElementById("dn").innerHTML="<a style=\"color: #FFFFFF;\" href=\"..\\reg.zip\" download=\"reg.zip\"><img src=\"download.jpg\" alt=\"下载   DOWNLOAD\" title=\"下载   DOWNLOAD\"></a>";
	}
	else
	{
		document.getElementById("fn").innerHTML="未选择文件";
		document.getElementById("dn").innerHTML="未选择文件";
	}