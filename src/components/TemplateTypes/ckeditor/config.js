/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  //
  //

  // Table,Iframe,Preview,Print
  config.removeButtons = 'Source,Outdent,Indent,RemoveFormat,NumberedList,About,ImageButton,Scayt,BidiLtr,BidiRtl,Templates,SelectAll,Form,HiddenField,Find,Replace,TextField,Radio,Checkbox,Textarea,Select,Button,Maximize,Clipboard,RemoveFormat,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock, Undo,Cut,Copy,Paste,Undo,Redo,Underline,Strike,Subscript,Superscript,Language,Print,Smiley,Flash,Unlink,NewPage,Preview,PasteText,PasteFromWord,HorizontalRule,SpecialChar,TextColor,BGColor,PageBreak';

  config.extraPlugins = 'autogrow';
  config.autoGrow_minHeight = 200;
  config.autoGrow_maxHeight = 600;
  config.autoGrow_bottomSpace = 50;
};
