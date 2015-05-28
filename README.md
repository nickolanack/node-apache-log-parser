[![Build Status](https://travis-ci.org/nickolanack/node-apache-log-parser.svg?branch=master)](https://travis-ci.org/nickolanack/node-apache-log-parser)

Simple Apache log file parser/printer-formatter



```js

var apachelog=require('node-apache-log-parser');

var logObject=apachelog.parse(line, [fmt]); //line from log file, fmt is 'common' by default, supports 'error' for parsing error files

```

NPM Install Dependencies (uses npm color)
```
git clone https://github.com/nickolanack/node-apache-log-parser.git
cd node-apache-log-parser
npm install
```

Or Use in package.json
```js
{
...

"dependencies": { 
		"node-apache-log-parser":"git://github.com/nickolanack/node-apache-log-parser.git#master"
	},
...
}
```
