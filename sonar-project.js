const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://15.207.99.1:9000/',
       options : {
	    'sonar.projectDescription': 'node-app',
	    'sonar.projectName': 'node-app',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': '84283ade512912faf58ed9e1afe6e58b9a26fee5',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
