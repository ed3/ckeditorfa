CKEDITOR.plugins.add('ckeditorfa',{
icons:'ckeditor-fa',
init:function(editor){
editor.addCommand('ckeditorfa', new CKEDITOR.dialogCommand('ckeditorFaDialog',{allowedContent:'span(!fa)'}));
editor.ui.addButton('ckeditorfa',{label:'FontAwesome icons',command:'ckeditorfa',toolbar:'insert',icon:this.path + 'icons/ckeditor-fa.png'});
CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/ckeditor-fa.js');
CKEDITOR.document.appendStyleSheet(this.path + 'css/ckeditor-fa.css');
}
});
