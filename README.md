# Ichnaea

# Quick start
1. Clone this repo to your local
2. Install node dependencies
```sh 
cd ichnaea
npm install
```
3. Install RethinkDB
```sh
brew update 
brew install rethinkdb
```
4. Start RethinkDB
```sh
rethinkdb
```
5. Start Node server
```sh
node app.js
```
6. Visit localhost:3000 in browser
7. Open another tab in browser and open demo/index.html

# Flow chart
![Image of flow-chart](https://github.com/adara/ichnaea/flow-chart.png)

# APIs
## ng-ichnaea.js
- $ichnaea.connect();
  
- $ichnaea.trackOn('myEvent');
  
- $ichnaea.trackOff('myEvent');

- $ichnaea.disconnect();
