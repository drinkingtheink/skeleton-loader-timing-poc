import Component from '@ember/component';

export default Component.extend({
	timeoutDur: 2000,
	timeoutId: null,
	fetching: false,
	tableContent: false,
	listContent: false,
	articleContent: true,

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

	actions: {
		updateTimeoutDur(e) {
			this.set('timeoutDur', e.target.value);
		}
	},

	didReceiveAttrs() {	
		if(this.goFetchData) {
			this.fakeFetchData();
		} 
	}
});
