// nav show Or hide
// window.onload = function() {
// 	
// 
// }
$(function(){
	aboutUs();
	lunbo();
	tab();
})
// nav
function aboutUs() {
	$('.about-us').hover(function(){
		$('.about-hide').removeClass("none")
	},function(){
		$('.about-hide').addClass("none")
	})
}
// banner
function lunbo() {
	var num = $('.banner-img >img').length;
	for (i = 0; i < num; i++) {
		$('.banner-page').append("<li></li>")
	}
	$('.banner-img').find('img').eq(0).show().siblings().hide();
	$(".banner-page").find('li').eq(0).addClass("banner-page-active");
	$(".banner-page>li ").on("click",function(){
		var ind = $(this).index();
		$(this).addClass("banner-page-active").siblings().removeClass("banner-page-active");
		$('.banner-img').find("img").eq(ind).fadeIn().siblings().fadeOut();
	});
}
// store
function tab(){
	$(".store-page > span").click(function(){
		var num = $(this).index();
		$(this).addClass("store-page-active").siblings().removeClass("store-page-active");
		$(".store-img-content > ul").eq(num).removeClass("none").siblings().addClass("none");
	})
}

// json
var option_old = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            x:'center',
            y:'top',
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            y:'bottom',
            data:['蒙特斯-不可错过的酒庄','洲际好年城市巡礼 见证蒙特斯奇迹 重庆站','与世界级评家探索阿根廷美酒','洲际好年 蒙特斯25周年巡回品鉴会 山西站','hsh']
        },
        xAxis: [
            {
                type: 'category',
                data: ['蒙特斯-不可错过的酒庄','洲际好年城市巡礼 见证蒙特斯奇迹 重庆站','3','4','5','6','7','8','9','10','11','12'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '高度 (mm)',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'第一組',
                type:'line',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'第二組',
                type:'line',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'第三組',
                type:'line',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 72.7, 185.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }
        ]
    };
	
	$(function(){
		console.log(option_old.legend.data);
		var jd = option_old.legend.data;
		var htmls= "";
		for(var i=0;i<jd.length;i++){
			htmls+='<li class="wenzi">'+option_old.legend.data[i]+'<span>【2016-05-06】</span></li>';
		}
		$('.news-tit').html(htmls);
	})
	
	
    
	


