(function($){$.fn.insetBorder=function(options){if((options!=undefined)&&(options.inset!=undefined))
{if(options.insetleft==undefined){options.insetleft=options.inset;}
if(options.insetright==undefined){options.insetright=options.inset;}
if(options.insettop==undefined){options.insettop=options.inset;}
if(options.insetbottom==undefined){options.insetbottom=options.inset;}}
options=$.extend({speed:250,insetleft:10,insetright:10,insettop:10,insetbottom:10,borderColor:'#ffffff',borderType:"solid",outerClass:"ibe_outer",innerClass:"ibe_inner"},options);return this.each(function(i){var
$el=$(this),ibe_height=$el.outerHeight(),ibe_width=$el.outerWidth();var
wrapper=$("<div />",{"class":options.outerClass,"css":{"width":ibe_width,"height":ibe_height,"overflow":"hidden","top":0,"left":0,"position":"relative"},"mouseenter":function(){$el.next().animate({"top":0,"left":0,"height":(ibe_height-(options.insettop+ options.insetbottom))+"px","width":(ibe_width-(options.insetleft+ options.insetright))+"px","opacity":1},{"duration":options.speed,"queue":false});},"mouseleave":function(){$el.next().animate({"top":"-"+ options.insettop+"px","left":"-"+ options.insetleft+"px","height":ibe_height,"width":ibe_width,"opacity":1},{"duration":options.speed,"queue":false,"complete":function(){}});}}),after=$("<div />",{"class":options.innerClass,"css":{"height":ibe_height,"width":ibe_width,"border-left":options.insetleft+"px "+ options.borderType+" "+ options.borderColor,"border-right":options.insetright+"px "+ options.borderType+" "+ options.borderColor,"border-top":options.insettop+"px "+ options.borderType+" "+ options.borderColor,"border-bottom":options.insetbottom+"px "+ options.borderType+" "+ options.borderColor,"position":"absolute","top":"-"+ options.insettop+"px","left":"-"+ options.insetleft+"px","opacity":0.01}});$el.wrap(wrapper).after(after);});};})(jQuery);