System.baseURL = 'http://dsv-fe01.tpn.terra.com/~jaydson.gomes/hello-world-es6-modules/dist/modules/';

System.import('hello').then(function(module) {
	var hello = module.hello,
		foo = module.foo;

	console.log(hello('pt'));
	console.log(hello('en'));
	
}).catch();