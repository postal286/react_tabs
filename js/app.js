var dataTabs = [
	{
		title: 'London',
		text: 'Some text about London',
		tabId: '0'
	},
	{
		title: 'Moscow',
		text: 'Some text about Moscow',
		tabId: '1'
	},
	{
		title: 'Paris',
		text: 'Some text about Paris',
		tabId: '2'
	}
] || [];

var TabArrow = React.createClass({
	onTabClick: function () {
		this.props.onTabClick(this.props.item.title, this.props.item.text);
	},
	render: function () {
		return (
			<a className={this.props.className} onClick={this.onTabClick} >
				{this.props.item.title}
			</a>
		);
	}
});

var Tab = React.createClass({

	render: function () {

		var data  = this.props.dataTab,
				dataTemplate;

		if (data.length > 0) {
			dataTemplate = data.map(function(item, index) {
				return (
					<li key={item.tabId}>
						<TabArrow
						item={item}
						className={'tab-' + index}
						onTabClick={this.props.changeTabContent}
						/>
					</li>
				);
			},
			this
			);
		} else {
			dataTemplate = 'Извините, но ничего пока нет.'
		}
		return(
			<ul className='tab'>
				{dataTemplate}
			</ul>
		);
	}
});

var Content = React.createClass({
	render: function () {
		var title = this.props.dataTitle,
				text  = this.props.dataText;

		return(
			<div className='tab-content'>
				<div>{title}</div>
				<div>{text}</div>
			</div>
		);
	}
});

var Tabs = React.createClass({
	changeTabContent: function (newTitle, newText) {
		this.setState({
			title: newTitle,
			text: newText
		})
	},

	getInitialState: function () {
		return ({
			data: dataTabs,
			title: dataTabs[0].title,
			text: dataTabs[0].text,
		});
	},

	render: function () {
		return (
			<div>
				<Tab dataTab={this.state.data}
						 changeTabContent={this.changeTabContent}
				/>
				<Content dataTitle={this.state.title}
								 dataText={this.state.text}
				/>
			</div>
		);
	}
});

ReactDOM.render(
	<Tabs />,
	document.getElementById('root')
);