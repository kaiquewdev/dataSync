//View members
var currentWin = Ti.UI.currentWindow;

function setData() {
	var db = Ti.Database.install('../databases/datas.sqlite', 'datas'),
		members = Ti.UI.currentWindow.members,
		rows = db.execute('SELECT * FROM members'),
		dataArray = [];
		
		while(rows.isValidRow())
		{
			dataArray.push({title:'' + rows.fieldByName('name') + '', hasChild: true, path:'data/profile.js'});
			rows.next();
		};
		
		tableview.setData(dataArray);
};

var tableview = Ti.UI.createTableView({});

tableview.addEventListener('click', function(e) {
	if (e.rowData.path)
	{
		var win = Ti.UI.createWindow({
			url: e.rowData.path,
			title: e.rowData.title
		});
		
		win.profileTitle = e.rowData.title;
		Ti.UI.currentTab.open(win);
	}
});

currentWin.backgroundColor = '#2b2b2b';
currentWin.add(tableview);
setData();
