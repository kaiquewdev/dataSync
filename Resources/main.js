//Main
var currentWin = Ti.UI.currentWindow;

var data = [
	{title:'View Members', hasChild: true, path:'data/view.js'},
	{title:'Insert New Member', hasChild: true, path:'data/insert.js'},
	{title:'Remove Member', hasChild: true, path:'data/remove.js'},
	{title:'Search Member', hasChild: true, path:'data/search.js'}
];

var tableview = Ti.UI.createTableView({data: data});

tableview.addEventListener('click', function (e) {
	if (e.rowData.path)
	{
		var win = Ti.UI.createWindow({
			url: e.rowData.path,
			title: e.rowData.title
		});
		
		var functionName = e.rowData.title;
		win.functionName = functionName;
		Ti.UI.currentTab.open(win);
	}
});

currentWin.backgroundColor = '#2b2b2b';
currentWin.add(tableview);
