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
}
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
var allFaIcons = JSON.parse('[{"id":"500px"},{"id":"address-book"},{"id":"address-book-o"},{"id":"address-card"},{"id":"vcard"},{"id":"address-card-o"},{"id":"vcard-o"},{"id":"adjust"},{"id":"adn"},{"id":"align-center"},{"id":"align-justify"},{"id":"align-left"},{"id":"align-right"},{"id":"amazon"},{"id":"ambulance"},{"id":"asl-interpreting"},{"id":"anchor"},{"id":"android"},{"id":"angellist"},{"id":"angle-double-down"},{"id":"angle-double-left"},{"id":"angle-double-right"},{"id":"angle-double-up"},{"id":"angle-down"},{"id":"angle-left"},{"id":"angle-right"},{"id":"angle-up"},{"id":"apple"},{"id":"archive"},{"id":"area-chart"},{"id":"arrow-circle-down"},{"id":"arrow-circle-left"},{"id":"arrow-circle-o-down"},{"id":"arrow-circle-o-left"},{"id":"arrow-circle-o-right"},{"id":"arrow-circle-o-up"},{"id":"arrow-circle-right"},{"id":"arrow-circle-up"},{"id":"arrow-down"},{"id":"arrow-left"},{"id":"arrow-right"},{"id":"arrows"},{"id":"arrows-alt"},{"id":"arrows-h"},{"id":"arrows-v"},{"id":"arrow-up"},{"id":"assistive-listening-systems"},{"id":"asterisk"},{"id":"at"},{"id":"audio-description"},{"id":"backward"},{"id":"balance-scale"},{"id":"ban"},{"id":"bandcamp"},{"id":"bar-chart"},{"id":"bar-chart-o"},{"id":"barcode"},{"id":"bars"},{"id":"navicon"},{"id":"reorder"},{"id":"bath"},{"id":"bathtub"},{"id":"s15"},{"id":"battery-0"},{"id":"battery-empty"},{"id":"battery"},{"id":"battery-4"},{"id":"battery-full"},{"id":"battery-2"},{"id":"battery-half"},{"id":"battery-1"},{"id":"battery-quarter"},{"id":"battery-3"},{"id":"battery-three-quarters"},{"id":"bed"},{"id":"hotel"},{"id":"beer"},{"id":"behance"},{"id":"behance-square"},{"id":"bell"},{"id":"bell-o"},{"id":"bell-slash"},{"id":"bell-slash-o"},{"id":"bicycle"},{"id":"binoculars"},{"id":"birthday-cake"},{"id":"bitbucket"},{"id":"bitbucket-square"},{"id":"black-tie"},{"id":"blind"},{"id":"bluetooth"},{"id":"bluetooth-b"},{"id":"bold"},{"id":"bolt"},{"id":"flash"},{"id":"bomb"},{"id":"book"},{"id":"bookmark"},{"id":"bookmark-o"},{"id":"braille"},{"id":"briefcase"},{"id":"bitcoin"},{"id":"btc"},{"id":"bug"},{"id":"building"},{"id":"building-o"},{"id":"bullhorn"},{"id":"bullseye"},{"id":"bus"},{"id":"buysellads"},{"id":"calculator"},{"id":"calendar"},{"id":"calendar-check-o"},{"id":"calendar-minus-o"},{"id":"calendar-o"},{"id":"calendar-plus-o"},{"id":"calendar-times-o"},{"id":"camera"},{"id":"camera-retro"},{"id":"automobile"},{"id":"car"},{"id":"caret-down"},{"id":"caret-left"},{"id":"caret-right"},{"id":"caret-square-o-down"},{"id":"toggle-down"},{"id":"caret-square-o-left"},{"id":"toggle-left"},{"id":"caret-square-o-right"},{"id":"toggle-right"},{"id":"caret-square-o-up"},{"id":"toggle-up"},{"id":"caret-up"},{"id":"cart-arrow-down"},{"id":"cart-plus"},{"id":"cc"},{"id":"cc-amex"},{"id":"cc-diners-club"},{"id":"cc-discover"},{"id":"cc-jcb"},{"id":"cc-mastercard"},{"id":"cc-paypal"},{"id":"cc-stripe"},{"id":"cc-visa"},{"id":"certificate"},{"id":"chain-broken"},{"id":"unlink"},{"id":"check"},{"id":"check-circle"},{"id":"check-circle-o"},{"id":"check-square"},{"id":"check-square-o"},{"id":"chevron-circle-down"},{"id":"chevron-circle-left"},{"id":"chevron-circle-right"},{"id":"chevron-circle-up"},{"id":"chevron-down"},{"id":"chevron-left"},{"id":"chevron-right"},{"id":"chevron-up"},{"id":"child"},{"id":"chrome"},{"id":"circle"},{"id":"circle-o"},{"id":"circle-o-notch"},{"id":"circle-thin"},{"id":"clipboard"},{"id":"paste"},{"id":"clock-o"},{"id":"clone"},{"id":"cloud"},{"id":"cloud-download"},{"id":"cloud-upload"},{"id":"code"},{"id":"code-fork"},{"id":"codepen"},{"id":"codiepie"},{"id":"coffee"},{"id":"cog"},{"id":"gear"},{"id":"cogs"},{"id":"gears"},{"id":"columns"},{"id":"comment"},{"id":"commenting"},{"id":"commenting-o"},{"id":"comment-o"},{"id":"comments"},{"id":"comments-o"},{"id":"compass"},{"id":"compress"},{"id":"connectdevelop"},{"id":"contao"},{"id":"copyright"},{"id":"creative-commons"},{"id":"credit-card"},{"id":"credit-card-alt"},{"id":"crop"},{"id":"crosshairs"},{"id":"css3"},{"id":"cube"},{"id":"cubes"},{"id":"cutlery"},{"id":"dashcube"},{"id":"database"},{"id":"deaf"},{"id":"deafness"},{"id":"hard-of-hearing"},{"id":"delicious"},{"id":"desktop"},{"id":"deviantart"},{"id":"diamond"},{"id":"digg"},{"id":"dot-circle-o"},{"id":"download"},{"id":"dribbble"},{"id":"dropbox"},{"id":"drupal"},{"id":"edge"},{"id":"eercast"},{"id":"eject"},{"id":"ellipsis-h"},{"id":"ellipsis-v"},{"id":"empire"},{"id":"ge"},{"id":"envelope"},{"id":"envelope-o"},{"id":"envelope-open"},{"id":"envelope-open-o"},{"id":"envelope-square"},{"id":"envira"},{"id":"eraser"},{"id":"etsy"},{"id":"eur"},{"id":"euro"},{"id":"exchange"},{"id":"exclamation"},{"id":"exclamation-circle"},{"id":"exclamation-triangle"},{"id":"warning"},{"id":"expand"},{"id":"expeditedssl"},{"id":"external-link"},{"id":"external-link-square"},{"id":"eye"},{"id":"eyedropper"},{"id":"eye-slash"},{"id":"facebook"},{"id":"facebook-f"},{"id":"facebook-official"},{"id":"facebook-square"},{"id":"fast-backward"},{"id":"fast-forward"},{"id":"fax"},{"id":"female"},{"id":"fighter-jet"},{"id":"file"},{"id":"file-archive-o"},{"id":"file-zip-o"},{"id":"file-audio-o"},{"id":"file-sound-o"},{"id":"file-code-o"},{"id":"file-excel-o"},{"id":"file-image-o"},{"id":"file-photo-o"},{"id":"file-picture-o"},{"id":"file-o"},{"id":"file-pdf-o"},{"id":"file-powerpoint-o"},{"id":"copy"},{"id":"files-o"},{"id":"file-text"},{"id":"file-text-o"},{"id":"file-movie-o"},{"id":"file-video-o"},{"id":"file-word-o"},{"id":"film"},{"id":"filter"},{"id":"fire"},{"id":"fire-extinguisher"},{"id":"firefox"},{"id":"first-order"},{"id":"flag"},{"id":"flag-checkered"},{"id":"flag-o"},{"id":"flask"},{"id":"flickr"},{"id":"floppy-o"},{"id":"save"},{"id":"folder"},{"id":"folder-o"},{"id":"folder-open"},{"id":"folder-open-o"},{"id":"font"},{"id":"fa"},{"id":"font-awesome"},{"id":"fonticons"},{"id":"fort-awesome"},{"id":"forumbee"},{"id":"forward"},{"id":"foursquare"},{"id":"free-code-camp"},{"id":"frown-o"},{"id":"futbol-o"},{"id":"soccer-ball-o"},{"id":"gamepad"},{"id":"gavel"},{"id":"legal"},{"id":"gbp"},{"id":"genderless"},{"id":"get-pocket"},{"id":"gg"},{"id":"gg-circle"},{"id":"gift"},{"id":"git"},{"id":"github"},{"id":"github-alt"},{"id":"github-square"},{"id":"gitlab"},{"id":"git-square"},{"id":"glass"},{"id":"glide"},{"id":"glide-g"},{"id":"globe"},{"id":"google"},{"id":"google-plus"},{"id":"google-plus-circle"},{"id":"google-plus-official"},{"id":"google-plus-square"},{"id":"google-wallet"},{"id":"graduation-cap"},{"id":"mortar-board"},{"id":"gittip"},{"id":"gratipay"},{"id":"grav"},{"id":"hacker-news"},{"id":"y-combinator-square"},{"id":"yc-square"},{"id":"hand-lizard-o"},{"id":"hand-o-down"},{"id":"hand-o-left"},{"id":"hand-o-right"},{"id":"hand-o-up"},{"id":"hand-paper-o"},{"id":"hand-stop-o"},{"id":"hand-peace-o"},{"id":"hand-pointer-o"},{"id":"hand-grab-o"},{"id":"hand-rock-o"},{"id":"hand-scissors-o"},{"id":"handshake-o"},{"id":"hand-spock-o"},{"id":"hashtag"},{"id":"hdd-o"},{"id":"header"},{"id":"headphones"},{"id":"heart"},{"id":"heartbeat"},{"id":"heart-o"},{"id":"history"},{"id":"home"},{"id":"hospital-o"},{"id":"hourglass"},{"id":"hourglass-3"},{"id":"hourglass-end"},{"id":"hourglass-2"},{"id":"hourglass-half"},{"id":"hourglass-o"},{"id":"hourglass-1"},{"id":"hourglass-start"},{"id":"houzz"},{"id":"h-square"},{"id":"html5"},{"id":"i-cursor"},{"id":"id-badge"},{"id":"drivers-license"},{"id":"id-card"},{"id":"drivers-license-o"},{"id":"id-card-o"},{"id":"ils"},{"id":"shekel"},{"id":"sheqel"},{"id":"imdb"},{"id":"inbox"},{"id":"indent"},{"id":"industry"},{"id":"info"},{"id":"info-circle"},{"id":"inr"},{"id":"rupee"},{"id":"instagram"},{"id":"internet-explorer"},{"id":"ioxhost"},{"id":"italic"},{"id":"joomla"},{"id":"cny"},{"id":"jpy"},{"id":"rmb"},{"id":"yen"},{"id":"jsfiddle"},{"id":"key"},{"id":"keyboard-o"},{"id":"krw"},{"id":"won"},{"id":"language"},{"id":"laptop"},{"id":"lastfm"},{"id":"lastfm-square"},{"id":"leaf"},{"id":"leanpub"},{"id":"lemon-o"},{"id":"level-down"},{"id":"level-up"},{"id":"life-bouy"},{"id":"life-buoy"},{"id":"life-ring"},{"id":"life-saver"},{"id":"support"},{"id":"lightbulb-o"},{"id":"line-chart"},{"id":"chain"},{"id":"link"},{"id":"linkedin"},{"id":"linkedin-square"},{"id":"linode"},{"id":"linux"},{"id":"list"},{"id":"list-alt"},{"id":"list-ol"},{"id":"list-ul"},{"id":"location-arrow"},{"id":"lock"},{"id":"long-arrow-down"},{"id":"long-arrow-left"},{"id":"long-arrow-right"},{"id":"long-arrow-up"},{"id":"low-vision"},{"id":"magic"},{"id":"magnet"},{"id":"male"},{"id":"map"},{"id":"map-marker"},{"id":"map-o"},{"id":"map-pin"},{"id":"map-signs"},{"id":"mars"},{"id":"mars-double"},{"id":"mars-stroke"},{"id":"mars-stroke-h"},{"id":"mars-stroke-v"},{"id":"maxcdn"},{"id":"meanpath"},{"id":"medium"},{"id":"medkit"},{"id":"meetup"},{"id":"meh-o"},{"id":"mercury"},{"id":"microchip"},{"id":"microphone"},{"id":"microphone-slash"},{"id":"minus"},{"id":"minus-circle"},{"id":"minus-square"},{"id":"minus-square-o"},{"id":"mixcloud"},{"id":"mobile"},{"id":"mobile-phone"},{"id":"modx"},{"id":"money"},{"id":"moon-o"},{"id":"motorcycle"},{"id":"mouse-pointer"},{"id":"music"},{"id":"neuter"},{"id":"newspaper-o"},{"id":"object-group"},{"id":"object-ungroup"},{"id":"odnoklassniki"},{"id":"odnoklassniki-square"},{"id":"opencart"},{"id":"openid"},{"id":"opera"},{"id":"optin-monster"},{"id":"dedent"},{"id":"outdent"},{"id":"pagelines"},{"id":"paint-brush"},{"id":"paperclip"},{"id":"paper-plane"},{"id":"send"},{"id":"paper-plane-o"},{"id":"send-o"},{"id":"paragraph"},{"id":"pause"},{"id":"pause-circle"},{"id":"pause-circle-o"},{"id":"paw"},{"id":"paypal"},{"id":"pencil"},{"id":"pencil-square"},{"id":"edit"},{"id":"pencil-square-o"},{"id":"percent"},{"id":"phone"},{"id":"phone-square"},{"id":"image"},{"id":"photo"},{"id":"picture-o"},{"id":"pie-chart"},{"id":"pied-piper"},{"id":"pied-piper-alt"},{"id":"pied-piper-pp"},{"id":"pinterest"},{"id":"pinterest-p"},{"id":"pinterest-square"},{"id":"plane"},{"id":"play"},{"id":"play-circle"},{"id":"play-circle-o"},{"id":"plug"},{"id":"plus"},{"id":"plus-circle"},{"id":"plus-square"},{"id":"plus-square-o"},{"id":"podcast"},{"id":"power-off"},{"id":"print"},{"id":"product-hunt"},{"id":"puzzle-piece"},{"id":"qq"},{"id":"qrcode"},{"id":"question"},{"id":"question-circle"},{"id":"question-circle-o"},{"id":"quora"},{"id":"quote-left"},{"id":"quote-right"},{"id":"random"},{"id":"ravelry"},{"id":"ra"},{"id":"rebel"},{"id":"resistance"},{"id":"recycle"},{"id":"reddit"},{"id":"reddit-alien"},{"id":"reddit-square"},{"id":"refresh"},{"id":"registered"},{"id":"renren"},{"id":"repeat"},{"id":"rotate-right"},{"id":"mail-reply"},{"id":"reply"},{"id":"mail-reply-all"},{"id":"reply-all"},{"id":"retweet"},{"id":"road"},{"id":"rocket"},{"id":"feed"},{"id":"rss"},{"id":"rss-square"},{"id":"rouble"},{"id":"rub"},{"id":"ruble"},{"id":"safari"},{"id":"cut"},{"id":"scissors"},{"id":"scribd"},{"id":"search"},{"id":"search-minus"},{"id":"search-plus"},{"id":"sellsy"},{"id":"server"},{"id":"mail-forward"},{"id":"share"},{"id":"share-alt"},{"id":"share-alt-square"},{"id":"share-square"},{"id":"share-square-o"},{"id":"shield"},{"id":"ship"},{"id":"shirtsinbulk"},{"id":"shopping-bag"},{"id":"shopping-basket"},{"id":"shopping-cart"},{"id":"shower"},{"id":"signal"},{"id":"sign-in"},{"id":"signing"},{"id":"sign-language"},{"id":"sign-out"},{"id":"simplybuilt"},{"id":"sitemap"},{"id":"skyatlas"},{"id":"skype"},{"id":"slack"},{"id":"sliders"},{"id":"slideshare"},{"id":"smile-o"},{"id":"snapchat"},{"id":"snapchat-ghost"},{"id":"snapchat-square"},{"id":"snowflake-o"},{"id":"sort"},{"id":"unsorted"},{"id":"sort-alpha-asc"},{"id":"sort-alpha-desc"},{"id":"sort-amount-asc"},{"id":"sort-amount-desc"},{"id":"sort-asc"},{"id":"sort-up"},{"id":"sort-desc"},{"id":"sort-down"},{"id":"sort-numeric-asc"},{"id":"sort-numeric-desc"},{"id":"soundcloud"},{"id":"space-shuttle"},{"id":"spinner"},{"id":"spoon"},{"id":"spotify"},{"id":"square"},{"id":"square-o"},{"id":"stack-exchange"},{"id":"stack-overflow"},{"id":"star"},{"id":"star-half"},{"id":"star-half-empty"},{"id":"star-half-full"},{"id":"star-half-o"},{"id":"star-o"},{"id":"steam"},{"id":"steam-square"},{"id":"step-backward"},{"id":"step-forward"},{"id":"stethoscope"},{"id":"sticky-note"},{"id":"sticky-note-o"},{"id":"stop"},{"id":"stop-circle"},{"id":"stop-circle-o"},{"id":"street-view"},{"id":"strikethrough"},{"id":"stumbleupon"},{"id":"stumbleupon-circle"},{"id":"subscript"},{"id":"subway"},{"id":"suitcase"},{"id":"sun-o"},{"id":"superpowers"},{"id":"superscript"},{"id":"table"},{"id":"tablet"},{"id":"dashboard"},{"id":"tachometer"},{"id":"tag"},{"id":"tags"},{"id":"tasks"},{"id":"cab"},{"id":"taxi"},{"id":"telegram"},{"id":"television"},{"id":"tv"},{"id":"tencent-weibo"},{"id":"terminal"},{"id":"text-height"},{"id":"text-width"},{"id":"th"},{"id":"themeisle"},{"id":"thermometer-0"},{"id":"thermometer-empty"},{"id":"thermometer"},{"id":"thermometer-4"},{"id":"thermometer-full"},{"id":"thermometer-2"},{"id":"thermometer-half"},{"id":"thermometer-1"},{"id":"thermometer-quarter"},{"id":"thermometer-3"},{"id":"thermometer-three-quarters"},{"id":"th-large"},{"id":"th-list"},{"id":"thumbs-down"},{"id":"thumbs-o-down"},{"id":"thumbs-o-up"},{"id":"thumbs-up"},{"id":"thumb-tack"},{"id":"ticket"},{"id":"close"},{"id":"remove"},{"id":"times"},{"id":"times-circle"},{"id":"times-circle-o"},{"id":"tint"},{"id":"toggle-off"},{"id":"toggle-on"},{"id":"trademark"},{"id":"train"},{"id":"intersex"},{"id":"transgender"},{"id":"transgender-alt"},{"id":"trash"},{"id":"trash-o"},{"id":"tree"},{"id":"trello"},{"id":"tripadvisor"},{"id":"trophy"},{"id":"truck"},{"id":"try"},{"id":"turkish-lira"},{"id":"tty"},{"id":"tumblr"},{"id":"tumblr-square"},{"id":"twitch"},{"id":"twitter"},{"id":"twitter-square"},{"id":"umbrella"},{"id":"underline"},{"id":"rotate-left"},{"id":"undo"},{"id":"universal-access"},{"id":"bank"},{"id":"institution"},{"id":"university"},{"id":"unlock"},{"id":"unlock-alt"},{"id":"upload"},{"id":"usb"},{"id":"dollar"},{"id":"usd"},{"id":"user"},{"id":"user-circle"},{"id":"user-circle-o"},{"id":"user-md"},{"id":"user-o"},{"id":"user-plus"},{"id":"group"},{"id":"users"},{"id":"user-secret"},{"id":"user-times"},{"id":"venus"},{"id":"venus-double"},{"id":"venus-mars"},{"id":"viacoin"},{"id":"viadeo"},{"id":"viadeo-square"},{"id":"video-camera"},{"id":"vimeo"},{"id":"vimeo-square"},{"id":"vine"},{"id":"vk"},{"id":"volume-control-phone"},{"id":"volume-down"},{"id":"volume-off"},{"id":"volume-up"},{"id":"weibo"},{"id":"wechat"},{"id":"weixin"},{"id":"whatsapp"},{"id":"wheelchair"},{"id":"wheelchair-alt"},{"id":"wifi"},{"id":"wikipedia-w"},{"id":"times-rectangle"},{"id":"window-close"},{"id":"times-rectangle-o"},{"id":"window-close-o"},{"id":"window-maximize"},{"id":"window-minimize"},{"id":"window-restore"},{"id":"windows"},{"id":"wordpress"},{"id":"wpbeginner"},{"id":"wpexplorer"},{"id":"wpforms"},{"id":"wrench"},{"id":"xing"},{"id":"xing-square"},{"id":"yahoo"},{"id":"yc"},{"id":"y-combinator"},{"id":"yelp"},{"id":"yoast"},{"id":"youtube"},{"id":"youtube-play"},{"id":"youtube-square"}]');
var faIcons='';
for(var x in allFaIcons){
var ids = allFaIcons[x].id;
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
		icon.setAttribute('aria-hidden','true');
		editor.insertElement(icon);
	},
	onCancel:function () {
		clear();
	}
};
});