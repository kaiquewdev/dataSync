//product_category
var currentWin = Ti.UI.currentWindow;

function setData() {
	var db = Ti.Database.install('databases/products.sqlite', 'products'),
		rows = db.execute('SELECT DISTINCT category FROM products'),
		dataArray = [];
	
	while (rows.isValidRow())
	{
		dataArray.push({title: '' + rows.fieldByName('category') + '', hasChild:true, path:'products.js'});
		rows.next();
	};
	
	tableView.setData(dataArray);
};

var tableView = Ti.UI.createTableView({});

tableView.addEventListener('click', function(e) {
	if (e.rowData.path) 
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.path,
			title:e.rowData.title
		});
		
		var prodCat = e.rowData.title;
		win.prodCat = prodCat;
		Ti.UI.currentTab.open(win);
	}
});

currentWin.add(tableView);

setData();
