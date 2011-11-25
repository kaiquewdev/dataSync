//Search members
var currentWin = Ti.UI.currentWindow;

function newRow(labelName) {
	var row = Titanium.UI.createTableViewRow(),
		label = Titanium.UI.createLabel({
			font:{fontSize:13,fontFamily:'Helvetica Neue', fontWeight:'bold'},
			color: '#fff',
			text: labelName,
			left: 5,
			height: 'auto',
			width: 'auto',
			textAlign: 'left'
		});
		
		row.add(label);
		
	var tf = Titanium.UI.createTextField({
			font:{fontSize:18, fontFamily:'Marker Felt', fontWeight:'bold'},
        	color:'#888',
        	height:35,
		    top:10,
		    right:10,
		    width:190,
		    textAlign: 'right',
		    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
		});
		
		row.add(tf);
		
		return row;
}

var data = [newRow('Search:')];

var tableview = Ti.UI.createTableView({
	data: data
});

currentWin.backgroundColor = '#2b2b2b';

currentWin.add(tableview);
