# test-Protractor-Andersen

My initial project.


### Installing

First install all dependenices:
```
npm install
```

You will need running selenium server on `localhost:4444`, run it with webdriver-manager:
```
npm install -g webdriver-manager  
webdriver-manager update
webdriver-manager start
```

The tsc command envokes the TypeScript compiler :
```
tsc
``` 

Switch to new terminal tab, and run tests:
```
protractor JSFiles/configuration.js
``` 