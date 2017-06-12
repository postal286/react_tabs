var dataTabs = [
	{
		title: 'Some Title',
		text: 'Some text',
		tabId: '0'
	},
	{
		title: 'Some Second Title',
		text: 'Some second text',
		tabId: '1'
	},
	{
		title: 'Some Third Title',
		text: 'Some third text',
		tabId: '2'
	}
] || [];

var Tab = React.createClass({

	render: function () {

		var data = this.props.data;
		var dataTemplate;

		if (data.length > 0) {
			dataTemplate = data.map(function(item, index) {
				return (
					<li key={item.tabId}>
						<a className={'tab-' + index}>
							{item.title}
						</a>
					</li>
				);
			});
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

		var data = this.props.data;
		var ContentTemplate;

		if (data.length > 0) {
			ContentTemplate = data.map(function(item) {
				return (
					<div key={item.tabId}>
						<div className={'tab-content'}>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</div>
				);
			});
		} else {
			ContentTemplate = 'Извините, но ничего пока нет.'
		}
		return(
			<div>
				{ContentTemplate}
			</div>
		);
	}
});

var Tabs = React.createClass({
	propTypes: {
		data: React.PropTypes.array
	},

	getInitialState: function () {
		return ({
			data: dataTabs
		});
	},

	render: function () {
		return (
			<div>
				<Tab data={this.state.data}/>
				<Content data={this.state.data}/>
			</div>
		);
	}
});

ReactDOM.render(
	<Tabs />,
	document.getElementById('root')
);