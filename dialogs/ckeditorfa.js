function klick(el) {
	var className = el.getAttribute('title');
	document.getElementsByClassName('fontawesomeClass')[0].getElementsByTagName('input')[0].value = className;
	el.className = el.className.replace('active', '');
	el.className += ' active';
}
function searchIcon(val){
	var fas = document.getElementById('ckeditor-fa-icons');
	var a = fas.getElementsByTagName('a');
	for(var i = 0, len = a.length, el, atr; i < len; i ++){
		el = a[i];
		atr = el.getAttribute('title');
		if(atr && atr.indexOf(val) >= 0){
			el.style.display = 'inline-block';
		}else{
			el.style.display = 'none';
		}
	}
};
function clear(){
	var icons = document.getElementById('ckeditor-fa-icons');
	var activeIcon = icons.getElementsByClassName('active');
	var icon = icons.getElementsByTagName('a');
	for (var i=0; i < activeIcon.length; ++i) {
		activeIcon[i].className = activeIcon[i].className.replace('active', '');
	}
	for(j=0; j < icon.length; ++j){
		icon[j].className = '';
		icon[j].style.display = '';
		icon[j].getElementsByTagName('span')[0].style.color = '';
	}
}
CKEDITOR.dialog.add('ckeditorFaDialog', function (editor) {
var allFaIcons = JSON.parse('["500px","address-book","address-book-o","address-card","vcard","address-card-o","vcard-o","adjust","adn","align-center","align-justify","align-left","align-right","amazon","ambulance","asl-interpreting","anchor","android","angellist","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","apple","archive","area-chart","arrow-circle-down","arrow-circle-left","arrow-circle-o-down","arrow-circle-o-left","arrow-circle-o-right","arrow-circle-o-up","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrows","arrows-alt","arrows-h","arrows-v","arrow-up","assistive-listening-systems","asterisk","at","audio-description","backward","balance-scale","ban","bandcamp","bar-chart","bar-chart-o","barcode","bars","navicon","reorder","bath","bathtub","s15","battery-0","battery-empty","battery","battery-4","battery-full","battery-2","battery-half","battery-1","battery-quarter","battery-3","battery-three-quarters","bed","hotel","beer","behance","behance-square","bell","bell-o","bell-slash","bell-slash-o","bicycle","binoculars","birthday-cake","bitbucket","bitbucket-square","black-tie","blind","bluetooth","bluetooth-b","bold","bolt","flash","bomb","book","bookmark","bookmark-o","braille","briefcase","bitcoin","btc","bug","building","building-o","bullhorn","bullseye","bus","buysellads","calculator","calendar","calendar-check-o","calendar-minus-o","calendar-o","calendar-plus-o","calendar-times-o","camera","camera-retro","automobile","car","caret-down","caret-left","caret-right","caret-square-o-down","toggle-down","caret-square-o-left","toggle-left","caret-square-o-right","toggle-right","caret-square-o-up","toggle-up","caret-up","cart-arrow-down","cart-plus","cc","cc-amex","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","certificate","chain-broken","unlink","check","check-circle","check-circle-o","check-square","check-square-o","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","chrome","circle","circle-o","circle-o-notch","circle-thin","clipboard","paste","clock-o","clone","cloud","cloud-download","cloud-upload","code","code-fork","codepen","codiepie","coffee","cog","gear","cogs","gears","columns","comment","commenting","commenting-o","comment-o","comments","comments-o","compass","compress","connectdevelop","contao","copyright","creative-commons","credit-card","credit-card-alt","crop","crosshairs","css3","cube","cubes","cutlery","dashcube","database","deaf","deafness","hard-of-hearing","delicious","desktop","deviantart","diamond","digg","dot-circle-o","download","dribbble","dropbox","drupal","edge","eercast","eject","ellipsis-h","ellipsis-v","empire","ge","envelope","envelope-o","envelope-open","envelope-open-o","envelope-square","envira","eraser","etsy","eur","euro","exchange","exclamation","exclamation-circle","exclamation-triangle","warning","expand","expeditedssl","external-link","external-link-square","eye","eyedropper","eye-slash","facebook","facebook-f","facebook-official","facebook-square","fast-backward","fast-forward","fax","female","fighter-jet","file","file-archive-o","file-zip-o","file-audio-o","file-sound-o","file-code-o","file-excel-o","file-image-o","file-photo-o","file-picture-o","file-o","file-pdf-o","file-powerpoint-o","copy","files-o","file-text","file-text-o","file-movie-o","file-video-o","file-word-o","film","filter","fire","fire-extinguisher","firefox","first-order","flag","flag-checkered","flag-o","flask","flickr","floppy-o","save","folder","folder-o","folder-open","folder-open-o","font","fa","font-awesome","fonticons","fort-awesome","forumbee","forward","foursquare","free-code-camp","frown-o","futbol-o","soccer-ball-o","gamepad","gavel","legal","gbp","genderless","get-pocket","gg","gg-circle","gift","git","github","github-alt","github-square","gitlab","git-square","glass","glide","glide-g","globe","google","google-plus","google-plus-circle","google-plus-official","google-plus-square","google-wallet","graduation-cap","mortar-board","gittip","gratipay","grav","hacker-news","y-combinator-square","yc-square","hand-lizard-o","hand-o-down","hand-o-left","hand-o-right","hand-o-up","hand-paper-o","hand-stop-o","hand-peace-o","hand-pointer-o","hand-grab-o","hand-rock-o","hand-scissors-o","handshake-o","hand-spock-o","hashtag","hdd-o","header","headphones","heart","heartbeat","heart-o","history","home","hospital-o","hourglass","hourglass-3","hourglass-end","hourglass-2","hourglass-half","hourglass-o","hourglass-1","hourglass-start","houzz","h-square","html5","i-cursor","id-badge","drivers-license","id-card","drivers-license-o","id-card-o","ils","shekel","sheqel","imdb","inbox","indent","industry","info","info-circle","inr","rupee","instagram","internet-explorer","ioxhost","italic","joomla","cny","jpy","rmb","yen","jsfiddle","key","keyboard-o","krw","won","language","laptop","lastfm","lastfm-square","leaf","leanpub","lemon-o","level-down","level-up","life-bouy","life-buoy","life-ring","life-saver","support","lightbulb-o","line-chart","chain","link","linkedin","linkedin-square","linode","linux","list","list-alt","list-ol","list-ul","location-arrow","lock","long-arrow-down","long-arrow-left","long-arrow-right","long-arrow-up","low-vision","magic","magnet","male","map","map-marker","map-o","map-pin","map-signs","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","maxcdn","meanpath","medium","medkit","meetup","meh-o","mercury","microchip","microphone","microphone-slash","minus","minus-circle","minus-square","minus-square-o","mixcloud","mobile","mobile-phone","modx","money","moon-o","motorcycle","mouse-pointer","music","neuter","newspaper-o","object-group","object-ungroup","odnoklassniki","odnoklassniki-square","opencart","openid","opera","optin-monster","dedent","outdent","pagelines","paint-brush","paperclip","paper-plane","send","paper-plane-o","send-o","paragraph","pause","pause-circle","pause-circle-o","paw","paypal","pencil","pencil-square","edit","pencil-square-o","percent","phone","phone-square","image","photo","picture-o","pie-chart","pied-piper","pied-piper-alt","pied-piper-pp","pinterest","pinterest-p","pinterest-square","plane","play","play-circle","play-circle-o","plug","plus","plus-circle","plus-square","plus-square-o","podcast","power-off","print","product-hunt","puzzle-piece","qq","qrcode","question","question-circle","question-circle-o","quora","quote-left","quote-right","random","ravelry","ra","rebel","resistance","recycle","reddit","reddit-alien","reddit-square","refresh","registered","renren","repeat","rotate-right","mail-reply","reply","mail-reply-all","reply-all","retweet","road","rocket","feed","rss","rss-square","rouble","rub","ruble","safari","cut","scissors","scribd","search","search-minus","search-plus","sellsy","server","mail-forward","share","share-alt","share-alt-square","share-square","share-square-o","shield","ship","shirtsinbulk","shopping-bag","shopping-basket","shopping-cart","shower","signal","sign-in","signing","sign-language","sign-out","simplybuilt","sitemap","skyatlas","skype","slack","sliders","slideshare","smile-o","snapchat","snapchat-ghost","snapchat-square","snowflake-o","sort","unsorted","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-asc","sort-up","sort-desc","sort-down","sort-numeric-asc","sort-numeric-desc","soundcloud","space-shuttle","spinner","spoon","spotify","square","square-o","stack-exchange","stack-overflow","star","star-half","star-half-empty","star-half-full","star-half-o","star-o","steam","steam-square","step-backward","step-forward","stethoscope","sticky-note","sticky-note-o","stop","stop-circle","stop-circle-o","street-view","strikethrough","stumbleupon","stumbleupon-circle","subscript","subway","suitcase","sun-o","superpowers","superscript","table","tablet","dashboard","tachometer","tag","tags","tasks","cab","taxi","telegram","television","tv","tencent-weibo","terminal","text-height","text-width","th","themeisle","thermometer-0","thermometer-empty","thermometer","thermometer-4","thermometer-full","thermometer-2","thermometer-half","thermometer-1","thermometer-quarter","thermometer-3","thermometer-three-quarters","th-large","th-list","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up","thumb-tack","ticket","close","remove","times","times-circle","times-circle-o","tint","toggle-off","toggle-on","trademark","train","intersex","transgender","transgender-alt","trash","trash-o","tree","trello","tripadvisor","trophy","truck","try","turkish-lira","tty","tumblr","tumblr-square","twitch","twitter","twitter-square","umbrella","underline","rotate-left","undo","universal-access","bank","institution","university","unlock","unlock-alt","upload","usb","dollar","usd","user","user-circle","user-circle-o","user-md","user-o","user-plus","group","users","user-secret","user-times","venus","venus-double","venus-mars","viacoin","viadeo","viadeo-square","video-camera","vimeo","vimeo-square","vine","vk","volume-control-phone","volume-down","volume-off","volume-up","weibo","wechat","weixin","whatsapp","wheelchair","wheelchair-alt","wifi","wikipedia-w","times-rectangle","window-close","times-rectangle-o","window-close-o","window-maximize","window-minimize","window-restore","windows","wordpress","wpbeginner","wpexplorer","wpforms","wrench","xing","xing-square","yahoo","yc","y-combinator","yelp","yoast","youtube","youtube-play","youtube-square"]');
var faIcons='';
for(var x in allFaIcons){
var ids = allFaIcons[x];
var id = ids.split('-').join('<br/>');
faIcons += '<a href="#" onclick="klick(this);return false;" title="'+ids+'"><span class="fa fa-'+ids+'"></span>'+id+'</a>';
}
return {
	title:'FontAwesome Icons',
	minWidth:500,
	minHeight:400,
	resizable:false,
	contents:[{
	id:'font-awesome',
	label:'Add icon',
	elements:[
		{
		type:'hbox',
		widths:['25%','10%','15%','50%'],
		children:[
		{
			type:'text',
			id:'colorChooser',
			className:'colorChooser',
			label:'Color',
			setup:function(widget){
			var color = widget.data.color != '' ? widget.data.color:'';
			this.setValue(color);
			},
			commit:function(widget){
			widget.setData('color', this.getValue());
			}
		},
		{
			type:'button',label:'Color',style:'margin-top:1.35em',
			onClick:function(){
			editor.getColorFromDialog(function(color){
			document.getElementsByClassName('colorChooser')[0].getElementsByTagName('input')[0].value = color;
			}, this);
			}
		},
		{
			type:'text',id:'size',className:'size',label:'Size',setup: function(widget){this.setValue(widget.data.size);},
			commit: function(widget){widget.setData('size', this.getValue());}
		},
		{
			type:'text',id:'faSearch',className:'faSearch',label:'Search',onKeyUp:function(e){searchIcon(e.sender.$.value);}
		}
		]
		},
		{
		type:'hbox',
		widths:['15%','15%','15%','15%','40%'],
		children:[
		{
		type:'select',id:'fixwidth',className:'faSelect',label:'Fixed Width',items:[['No'],['Yes']],'default':'No',
			commit:function(widget){widget.setData('fixwidth', this.getValue());}
		},
		{
		type:'select',id:'bordered',className:'faSelect',label:'Bordered',items:[['No'],['Yes']],'default':'No',
			commit:function(widget){widget.setData('bordered', this.getValue());}
		},
		{
		type:'select',id:'spinning',className:'faSelect',label:'Spinning',items:[['No'],['Yes']],'default':'No',
			commit:function(widget){widget.setData('spinning', this.getValue());}
		},
		{
		type:'select',id:'rotating',className:'faSelect',label:'Rotating',items:[['No'],['fa-rotate-90'],['fa-rotate-180'],['fa-rotate-270'],['fa-flip-horizontal'],['fa-flip-vertical']],'default':'No',
			commit:function(widget){widget.setData('rotating', this.getValue());}
		},
		{type:'text',id:'faicon',className:'fontawesomeClass',label:'Selected',validate:CKEDITOR.dialog.validate.notEmpty("Select fontAwesome icon"),setup:function(widget){this.setValue(widget.data.class != '' ? widget.data.class:'');},commit:function(widget){widget.setData('class', this.getValue());}
		}
		]
		},
		{type:'html',html:'<div id="ckeditor-fa-icons">' + faIcons + '</div>'}
	]
	}],
	onOk:function () {
		clear();
		var dialog = this,icon = editor.document.createElement('span'),cls='';
		if(dialog.getValueOf('font-awesome','fixwidth') == "Yes") cls += ' fa-fw';
		if(dialog.getValueOf('font-awesome','bordered') == "Yes") cls += ' fa-border';
		if(dialog.getValueOf('font-awesome','spinning') == "Yes") cls += ' fa-spin';
		if(dialog.getValueOf('font-awesome','rotating') != "No") cls += ' '+dialog.getValueOf('font-awesome','rotating');
		icon.setAttribute('class', 'fa fa-' + dialog.getValueOf('font-awesome', 'faicon')+cls);
		var style='';
		if(dialog.getValueOf('font-awesome', 'colorChooser') !='') style += 'color:' + dialog.getValueOf('font-awesome', 'colorChooser')+';';
		if(dialog.getValueOf('font-awesome', 'size') !='') style += 'font-size:' + dialog.getValueOf('font-awesome', 'size') + 'px;';
		if(style) icon.setAttribute('style', style);
		editor.insertElement(icon);
	},
	onCancel:function () {
		clear();
	}
};
});