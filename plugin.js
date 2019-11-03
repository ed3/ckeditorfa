CKEDITOR.plugins.add('ckeditorfa5',{
icons:'ckeditorfa',
init:function(editor){
editor.addCommand('ckeditorfa5', new CKEDITOR.dialogCommand('ckeditorFaDialog',{allowedContent:'span(!fa-*)'}));
editor.ui.addButton('ckeditorfa5',{label:'FontAwesome5 icons',command:'ckeditorfa5',toolbar:'insert',icon:this.path + 'icons/ckeditorfa.png'});
CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/ckeditorfa.js');
CKEDITOR.document.appendStyleSheet(this.path + 'css/ckeditorfa.css');
}
});
