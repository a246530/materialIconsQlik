Qv.AddExtension("materialIcons",
        function () {
		
		 //Css call for loading via accesspoint
		 //Qva.LoadCSS(Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=Extensions/materialIcons/materialIcons.css');
		 
		 //Local CSS load
		 Qva.LoadCSS('https://fonts.googleapis.com/icon?family=Material+Icons');
		  Qva.LoadCSS('Extensions/materialIcons/materialIcons.css');
		 var _this = this;
		 var icon=this.Layout.Text0.text ? this.Layout.Text0.text : '&#xE859;';
		 var size=this.Layout.Text1.text ? this.Layout.Text1.text : '24';
		 var color=this.Layout.Text2.text ? this.Layout.Text2.text : '#bbbbbb';
		 var Text=this.Layout.Text3.text ? this.Layout.Text3.text : ' ';
		 if (size>40)
		 {
			var fontSize=size-20;
		 }else	 if (size>30)		 
		 {
			var fontSize=size-16;
		 }else
		 {
			var fontSize=size-12;
		 }
		 var html="";
		 $(_this.Element).empty();
		 RenderExtension();

		function RenderExtension() {
			html="";
			$(_this.Element).empty();
			html+='<table><tr><td><i style="font-size:'+size+'px;padding:2px;color:'+color+'" class="material-icons">'+icon+'</i></td><td><p style="font-size:'+fontSize+'px">'+Text+'</p></td></tr></table>';
			_this.Element.innerHTML=html;
			html="";
		}
 });
 
