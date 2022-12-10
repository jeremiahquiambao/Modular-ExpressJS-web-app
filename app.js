// app.js
const express = require('express');
const greetMiddleware = require('./greet.js');
class GreetingService {
 constructor(greeting = 'Hello') {
 this.greeting = greeting;
 }
 createGreeting(name) {
 return `${this.greeting}, ${name}!`;
 }
}
express()
 .use('/api/v1/service1', greetMiddleware({
 service: new GreetingService('Good afternoon'),
 }))
 .use('/api/v1/service2', greetMiddleware({
 service: new GreetingService('Good evening'),
 }))
 .listen(8080);