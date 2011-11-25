//View profile data
var currentWin = Ti.UI.currentWindow;

function setData() {
	var db = Ti.Database.install('../databases/datas.sqlite', 'datas'),
		title = Ti.UI.currentWindow.profileTitle,
		rows = db.execute('SELECT * FROM members WHERE name="' + title + '"'),
		dataArray = [],
		fields = {
					table:['name', 'email', 'home_phone', 'mobile_phone', 'other_phone'],
					header:['Name', 'Email', 'Home Phone Number', 'Mobile Phone Number', 'Other Phone Number']
		};
			
		if (rows.rowCount == 1)
		{
			for (var i=0; i < fields['table'].length; i++)
			{
				if (typeof rows.fieldByName(fields['table'][i]) !== 'object')
				{
					dataArray.push({title:'' + rows.fieldByName(fields['table'][i]) + '', header: fields['header'][i]});	
				}					
			}
		}
		
		tableview.setData(dataArray);
};

var tableview = Ti.UI.createTableView({});

currentWin.backgroundColor = '#2b2b2b';
currentWin.add(tableview);
setData();
