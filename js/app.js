Vue.use(VueMaterial)
var vm = new Vue({
	el: '#app',
	data: {
		message: 'Vue material is working!',
		clicked: false
	},
	methods: {
		showProgress: function(){
			console.log('clicked')
			this.clicked = true
		}
	}
}) 

