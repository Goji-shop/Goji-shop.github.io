function getCookie(t) {
  var o = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return o ? decodeURIComponent(o[1]) : void 0
}
function act_timer(m1,m2,s1,s2){
	if(!(m1==0&&m2==0&&s1==0&&s2==0)){
		s2--;
		if(s2==-1&&s1>0){
			s2=9;
			s1=s1-1;
		}else if(s2==-1&&s1==0){
			s1=5;
			s2=9;
			m2=m2-1;
		}
		if(m2==-1&&m1>0){
			m2=9;
			m1=m1-1;
		}else if(m2==-1&&m1==0){
			m2=0;
		}
		$('.time').html("<li><span>0</span><span>0</span></li><li><span>"+m1+"</span><span>"+m2+"</span></li><li><span>"+s1+"</span><span>"+s2+"</span></li>");
		if(m1==0&&m2==0&&s1<1){
			$('.time li:last-child span').css('color','#d31812');
		}
        setTimeout("act_timer("+m1+','+m2+','+s1+','+s2+")", 1000);
    }else{
		if($('.time li span').css('opacity')=='1'){
			$('.time li span').css('opacity','0');
			setTimeout("act_timer("+m1+','+m2+','+s1+','+s2+")", 200);
		}else{
			$('.time li span').css('opacity','1');
			setTimeout("act_timer("+m1+','+m2+','+s1+','+s2+")", 1000);
		}
	}
}
$(document).ready(function(){
	var datecurent = new Date,
	datecount = new Date;
	datecount.setMinutes(datecount.getMinutes() + 49);
	(void 0 === getCookie("countdownplus") || new Date(getCookie("countdownplus")) <= datecurent)&&(document.cookie = "countdownplus=" + datecount + "; path=/; expires=" + datecount);
	var time=new Date(new Date(getCookie("countdownplus")).getTime()-Date.now());
	var min=time.getMinutes().toString().split('');
	var sec=time.getSeconds().toString().split('');
	if(isNaN(min[0]))min[0]=0;
	if(isNaN(min[1]))min[1]=0;
	if(isNaN(sec[0]))sec[0]=0;
	if(isNaN(sec[1]))sec[1]=1;
	act_timer(min[0],min[1],sec[0],sec[1]);
});
