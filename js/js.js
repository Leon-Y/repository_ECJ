/*------------------------------�Լ���ķ�������ʦ��һ�º���-------------------------------*/
/*ÿ��ͼƬ��������������x*��y*��ͨ�����������������ÿһ��ͼƬ���в���*/

/*------��ʽ��ʼ��----*/

/*-----������������----*/
var picList =document.querySelectorAll('.picBox .listBox .picList');
var menu = document.querySelectorAll('.picMenu .listMenu .menu');
var caseMenu = document.querySelectorAll('.picCase .listCase .caseMenu');
var picMenu = document.getElementById('picMenu');
//alert(picList[0].className+menu[0]+caseMenu[1].innerHTML);

/*-----ͨ�ú����б�----*/
	/*----�仯��ɫ��ʽ---*/
	function changeColor(doms){
		for (var i = 0;i < doms.length ; i++)
		{
			doms.style
		}
		dom.className +="acitive";
	}
	/*-----�����Ƿ���ʾ----*/
	function show(dom){
		dom.className += "show";
	}
	/*-----�ж������б����Ƿ����ĳһ���ַ�������������-----*/
	function containNumber(ary,className){
		var count = 0;//ͳ������
		for (var i = 0; i < ary.length ;i++ )
		{
			if (ary[i].className.indexOf(className) >= 0)
			{
				count++;
			}
		}
		return count;
	}
	/*-----�ж�ͼƬ�б��й������Ŀ-----*/
	function menuNumber(className){
		var count = document.querySelectorAll(className).length;
		return count;
	}
/*-----˽�д���----*/
	/*----����Ҳ�ͼƬ��ǩ---*/
	for (var i= 0; i < caseMenu.length ;i++ )
	{
		caseMenu[i].index=i;
		caseMenu[i].onclick = function (){
			//console.log(this.index);
			var countMenu =menuNumber('.picList.x'+this.index);//����ÿ��ͼ����ͼƬ�ĵ�����
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
	