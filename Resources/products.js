//product_category
var prodCat = Ti.UI.currentWindow.prodCat;

function setData() {
	var db = Ti.Database.install('databases/products.sqlite', 'products'),
		rows = db.execute('SELECT * FROM products WHERE category="'+ prodCat +'"'),
		dataArray = [];
	
	while (rows.isValidRow())
	{
		dataArray.push({title: '' + rows.fieldByName('name') + '', hasChild:true, path:'product_specs.js'});
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
		
		var prodName = e.rowData.title;
		win.prodName = prodName;
		Ti.UI.currentTab.open(win);
	}
});

currentWin.add(tableView);

setData();
