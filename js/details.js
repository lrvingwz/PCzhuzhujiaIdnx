$(function(){
	$(".jqzoom").imagezoom();
	$("#thumblist li a").click(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
	});
    //评论模块js，
    var tabs = $('#detailsTabNav>li');
    var tabBox = $('#detailsCon .detailsTag');
    tabs.click(function(){
        tabs.find('a').removeClass('detailsSelected');
        var index = $(this).index();
        $(this).find('a').addClass('detailsSelected');
        tabBox.eq(index).css('display','block').siblings().css('display','none');

    });

    // span点击出现表单

    //textarea 显示字数
    $('#textPJ').on('keyup', function(){
      var _length = $(this).val().length; 
        $('.words-num').text(_length+"/500");
        if(_length>500){
             $('.words-num').text('字数达到上限');
             return;
        }
    });

    //显示图片
    var picBox = $('.picUl');
    var bigPicBox = $('.bigPicBox');
     picBox.on('mouseover','li:not(:last)',function(){
        var imgstr = $(this).find('img').attr('src');
        var _selfIndex = $(this).index();
        bigPicBox.css('display','block');
        bigPicBox.stop(true,true);
        bigPicBox.animate({
                    left:45+_selfIndex*50
        })
        bigPicBox.find('img').attr('src',imgstr);
     });
     picBox.mouseleave(function(){
        bigPicBox.css('display','none');
     })
   
});
/*<!--详情选项卡-->*/
var tabs=function(){
    function detailsTag(name,elem){
        return (elem||document).getElementsByTagName(name);
    }
    //获得相应ID的元素
    function id(name){
        return document.getElementById(name);
    }
    function first(elem){
        elem=elem.firstChild;
        return elem&&elem.nodeType==1? elem:next(elem);
    }
    function next(elem){
        do{
            elem=elem.nextSibling;  
        }while(
            elem&&elem.nodeType!=1  
        )
        return elem;
    }
    return {
        set:function(elemId,tabId){
            var elem=detailsTag("li",id(elemId));
            var tabs=detailsTag("div",id(tabId));
            var listNum=elem.length;
            var tabNum=tabs.length;
            for(var i=0;i<listNum;i++){
                    elem[i].onclick=(function(i){
                        return function(){
                            for(var j=0;j<tabNum;j++){
                                if(i==j){
                                    tabs[j].style.display="block";
                                    //alert(elem[j].firstChild);
                                    elem[j].firstChild.className="detailsSelected";
                                }
                                else{
                                    tabs[j].style.display="none";
                                    elem[j].firstChild.className="";
                                }
                            }
                        }
                    })(i)
            }
        }
    }
}();




