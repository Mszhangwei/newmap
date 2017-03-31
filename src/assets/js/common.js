export const api = {
	buildApiUrl: function(url){
		console.log(window.APIURL);
		return APIURL + url + '.html?token=' + TOKEN
	},
	handleHttpResponse: function(response){
		var data = JSON.parse(response.body);
		if(data && response.code == 400){
			window.location.href = BASEURL;
		}
		return data;
	}
};