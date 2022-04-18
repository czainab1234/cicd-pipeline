const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://35.177.215.184:9000/',
       options : {
	    'sonar.projectDescription': 'cicd-pipeline1',
	    'sonar.projectName': 'cicd-pipeline1',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': '11a10b12255d1246e06ce36c378798c781f8990a',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**',
	       'sonar-exclusions' : '**/node_modules/**'
       },
}, () => {});
