const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.232.123.250:9000/',
       options : {
	    'sonar.projectDescription': 'cicd-pipeline1',
	    'sonar.projectName': 'cicd-pipeline1',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': '',da0e942a6dac21dab2f18afb1745f73b395838e6
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
