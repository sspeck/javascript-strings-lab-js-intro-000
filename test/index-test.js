/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
var greeting = "Hello, everbody!"
var specialGuest = "Niel deGrasse Tyson"
var greetSpecialGuest = 'Hello' + specialGuest + '!'
var topic = 'space'
var conversation = `${topic}`
greeting = 'Hello, everybody!'
greetSpecialGuest = `Hello ${specialGuest}!`
conversation = "Let's talk about ${topic}."
