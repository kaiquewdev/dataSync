//Insert new member
var currentWin = Ti.UI.currentWindow;

function newRow(labelName) {
	var row = Titanium.UI.createTableViewRow(),
		label = Titanium.UI.createLabel({
			font:{fontSize:12,fontFamily:'Helvetica Neue', fontWeight:'bold'},
			color: '#fff',
			text: labelName,
			left: 5,
			height: 'auto',
			width: 'auto',
			textAlign: 'left'
		});
		
		row.add(label);
		
	var tf = Titanium.UI.createTextField({
			font:{fontSize:12, fontFamily:'Marker Felt', fontWeight:'bold'},
        	color:'#888',
        	height:'auto',
		    top:10,
		    right:5,
		    width:'160',
		    textAlign: 'right',
		    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
		});
		
		row.add(tf);
		
		return row;
}

var data = [];
	data.push(newRow('Nome:'));
	data.push(newRow('Email:'));
	data.push(newRow('House Phone Number:'));
	data.push(newRow('Mobile Phone Number:'));
	data.push(newRow('Other Phone Number:'));

var tableview = Ti.UI.createTableView({
	data: data
});

currentWin.backgroundColor = '#2b2b2b';

currentWin.add(tableview);
