function hover(hover_item) {
		document.getElementById('jalgpall').className = "topmenuitem";
		document.getElementById('tennis').className = "topmenuitem";
		document.getElementById('kontakt').className = "topmenuitem";

		if (hover_item) document.getElementById(hover_item).className = "topmenuselected";

		var submenulist = document.getElementById("submenulist")
		switch(hover_item)
{
			case 'jalgpall':
				submenulist.innerHTML = FormatMenuItem("&#220;levaade","./ulevaade_jalgpall.html") +
								FormatMenuItem("Hinnakiri","./hinnakiri_jalgpall.html");				break;
			case 'tennis':
				submenulist.innerHTML = FormatMenuItem("&#220;levaade","./ulevaade_tennis.html") +
								FormatMenuItem("Hinnakiri","./hinnakiri_tennis.html");				break;
		}
	}	
	
	function FormatMenuItem(name,link){
		return '<a class="submenuitem" onmouseover="this.className=\'submenuselected\'" onmouseout="this.className=\'submenuitem\'" href="'+link+'">'+name+'</a>';
	}