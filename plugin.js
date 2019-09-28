CKEDITOR.plugins.add('ckeditor_fa',{
icons:'ckeditor-fa',
init:function(editor){
editor.addCommand('ckeditor_fa', new CKEDITOR.dialogCommand('ckeditorFaDialog',{allowedContent:'span(!fa)'}));
editor.ui.addButton('ckeditor_fa',{label:'FontAwesome icons',command:'ckeditor_fa',toolbar:'insert',icon:this.path + 'icons/ckeditor-fa.png'});
CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/ckeditor-fa.js');
CKEDITOR.document.appendStyleSheet(this.path + 'css/ckeditor-fa.css');
}
});