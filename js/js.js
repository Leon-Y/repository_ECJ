/*------------------------------自己想的方法，老师看一下合理不-------------------------------*/
/*每张图片都有两个类名，x*和y*，通过这个两个类名来对每一张图片进行操作*/

/*------样式初始化----*/

/*-----公共变量区域----*/
var picList =document.querySelectorAll('.picBox .listBox .picList');
var menu = document.querySelectorAll('.picMenu .listMenu .menu');
var caseMenu = document.querySelectorAll('.picCase .listCase .caseMenu');
var picMenu = document.getElementById('picMenu');
//alert(picList[0].className+menu[0]+caseMenu[1].innerHTML);

/*-----通用函数列表----*/
	/*----变化颜色样式---*/
	function changeColor(doms){
		for (var i = 0;i < doms.length ; i++)
		{
			doms.style
		}
		dom.className +="acitive";
	}
	/*-----决定是否显示----*/
	function show(dom){
		dom.className += "show";
	}
	/*-----判断类名列表中是否包含某一个字符串，返回数量-----*/
	function containNumber(ary,className){
		var count = 0;//统计数量
		for (var i = 0; i < ary.length ;i++ )
		{
			if (ary[i].className.indexOf(className) >= 0)
			{
				count++;
			}
		}
		return count;
	}
	/*-----判断图片列表中归类的数目-----*/
	function menuNumber(className){
		var count = document.querySelectorAll(className).length;
		return count;
	}
/*-----私有代码----*/
	/*----添加右部图片标签---*/
	for (var i= 0; i < caseMenu.length ;i++ )
	{
		caseMenu[i].index=i;
		caseMenu[i].onclick = function (){
			//console.log(this.index);
			var countMenu =menuNumber('.picList.x'+this.index);//计算每个图集中图片的的数量
			alert(countMenu+'.picList.x'+this.index);
			for (var j = 1; j <= countMenu; j++)
			{
				alert(countMenu);
				if (j ==1)
				{
					picMenu.innerHTML =  "<ul class='listMenu'>"+"<li class='menu listMenu"+j+" active'>"+j+"</li>";
					alert(1);
				}else{
				picMenu.innerHTML += "<li class='menu listMenu"+j+">"+j+"</li>";
				}
			}
			picMenu.innerHTML +="</ul>";
		}
	}
	