const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.130.220.92:9000/',
       options : {
	    'sonar.projectDescription': 'cicd-pipeline1',
	    'sonar.projectName': 'cicd-pipeline1',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': '0672fc34ae541b4e2f72ef0ee9ffadb230223282',
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
