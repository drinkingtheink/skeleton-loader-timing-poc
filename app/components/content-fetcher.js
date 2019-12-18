import Component from '@ember/component';

export default Component.extend({
	timeoutDur: null,
	timeoutId: null,
	fetching: false,
	tableContent: false,
	listContent: false,
	articleContent: true,
	classNames: ['content-fetcher'],

	init() {
		this._super(...arguments);
		let newDuration = this.getRandomInt(1000, 5000);
		this.set('timeoutDur', newDuration);
	},	

	willRender() {
		if(this.goFetchData) {
			this.fakeFetchData();
		}
	},

	fakeFetchData() {
		this.set('fetching', true);
		
		let timer = setTimeout(() => { 
			this.set('fetching', false); 
		}, this.timeoutDur);

		this.set('timeoutId', timer);
	},

	clearFetchData() {
		window.clearTimeout(this.timeoutId);
	},

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	},

	actions: {
		updateTimeoutDur(e) {
			this.set('timeoutDur', e.target.value);
		},
		activateArticleContent() {
			this.setProperties({
				tableContent: false,
				listContent: false,
				articleContent: true
			})
		},
		activateListContent() {
			this.setProperties({
				tableContent: false,
				listContent: true,
				articleContent: false
			})
		},
		activateTableContent() {
			this.setProperties({
				tableContent: true,
				listContent: false,
				articleContent: false
			})
		}
	},

	didReceiveAttrs() {	
		if(this.goFetchData) {
			this.fakeFetchData();
		} 
	}
});
