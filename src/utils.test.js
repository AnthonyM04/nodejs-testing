import { sayHello } from "./utils.js"

test('Say Hello Anthony', () => {
    expect(sayHello('Anthony')).toBe('Hello Anthony')
})

test('Say Hello 44', () => {
    expect(sayHello('Anthony')).toBe('Hello 4')
})

test('Say Hello ___', () => {
    expect(sayHello()).toBe('Hello undefined')
})
