//Tab groud
var tabGroup = Ti.UI.createTabGroup();

var main = Ti.UI.createWindow({
	title: 'Actions',
	url: 'main.js'
});

var tab = Ti.UI.createTab({
	title: 'Data Sync',
	window: main
});

tabGroup.addTab(tab);
tabGroup.open()
