# Ichnaea
- Name origin: In Greek mythology, Ichnaea (Iknaia), "the tracker”. 
- Project Ichnaea is node.js API using rethinkDB with a reporting UI.
- It is a boilerplate for allowing tracking of time elapsed of actions taken by a user on browser interacting with your application in real time.

## Flow chart
![Image of flow-chart](./flow-chart.png)

## Quick start
- Clone this repo to your local
- Install Node
```sh
brew update 
brew install node
```
- Install Node dependencies
```sh 
cd ichnaea
npm install
```
- Install RethinkDB
```sh
brew install rethinkdb
```
- Start RethinkDB
```sh
rethinkdb --http-port 7999
```
- Visit [http://localhost:7999/#tables](http://localhost:7999/#tables), add a database "testDB", then add a table "testTable" under "testDB"
- Start Node server
```sh
node app.js
```
- Visit [http://localhost:3000](http://localhost:3000) in browser
- Open another tab in browser and open demo/index.html

## APIs
ng-ichnaea.js

- $ichnaea.connect();
  
- $ichnaea.trackOn('myEvent');
  
- $ichnaea.trackOff('myEvent');

- $ichnaea.disconnect();

## License

The MIT License

Copyright (c) 2016 ADARA, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.