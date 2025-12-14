Project Setup:
    mkdir selenium-js
    cd selenium-js
    npm init -y
    npm install selenium-webdriver mocha chai --save-dev


Update package.json
{
  "scripts": {
    "test": "mocha test/**/*.js --timeout 30000"
  }
}


Run the test suit:
    npm test