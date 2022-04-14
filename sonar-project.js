const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.110.177.134:9000/',
       options : {
	    'sonar.projectDescription': 'Pipeline node-js -pipeline',
	    'sonar.projectName': 'Pipeline node-js -pipeline',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'efc2443e6cf06a342f144bf5abad17ef6f545328',
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
