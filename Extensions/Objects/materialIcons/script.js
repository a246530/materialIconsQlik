
var template_path = Qva.Remote + "?public=only&name=Extensions/materialIcons/";
Qva.LoadCSS(template_path + "materialIcons.css");
Qva.LoadCSS('https://fonts.googleapis.com/icon?family=Material+Icons');
Qv.AddExtension("materialIcons",
        function () {
		 var _this = this;
		 var icon=this.Layout.Text0.text ? this.Layout.Text0.text : '&#xE859;';
		 var size=this.Layout.Text1.text ? this.Layout.Text1.text : '24';
		 var color=this.Layout.Text2.text ? this.Layout.Text2.text : '#bbbbbb';
		 var Text=this.Layout.Text3.text ? this.Layout.Text3.text : ' ';
		 var OnHoverEnable=this.Layout.Text4.text ? this.Layout.Text4.text : 0;
		  var fontSize=this.Layout.Text5.text ? this.Layout.Text5.text : '24';
		 var html="";
		 $(_this.Element).empty();
		 RenderExtension();
		 
		 
		 if(OnHoverEnable==1)
		 {
			 $("#materialTable").hover(function(){
				$( "#iconText" ).fadeIn( "slow", function() {
				  });
			 }, function () {
				  $( "#iconText" ).fadeOut( "slow", function() {
				  });
			});
		 }
		function RenderExtension() {
			html="";
			$(_this.Element).empty();
			if(OnHoverEnable==1){
				html+='<table id="materialTable"><tr><td><i style="font-size:'+size+'px;padding:2px;color:'+color+'" class="material-icons">'+icon+'</i></td><td><p id="iconText" style="font-size:'+fontSize+'px;display:none;">'+Text+'</p></td></tr></table>';
			}else{
				html+='<table id="materialTable"><tr><td><i style="font-size:'+size+'px;padding:2px;color:'+color+'" class="material-icons">'+icon+'</i></td><td><p id="iconText" style="font-size:'+fontSize+'px;">'+Text+'</p></td></tr></table>';
			}
			_this.Element.innerHTML=html;
			html="";
		}
		
 });

 