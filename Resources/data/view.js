//View members
var currentWin = Ti.UI.currentWindow;

function setData() {
	var db = Ti.Database.install('../databases/datas.sqlite', 'members'),
		members = Ti.UI.currentWindow.members,
		rows = db.execute('SELECT * FROM members'),
		dataArray = [];
		
		while(rows.isValidRow())
		{
			dataArray.push({title:'' + rows.fieldByName('name') + '', header: 'Name'});
			rows.next();
		};
		
		tableview.setData(dataArray);
};

var tableview = Ti.UI.createTableView({});

currentWin.add(tableview);
setData();
