const exp = require('constants');
const {format_date, format_plural, format_url} = require('../utils/helpers');

// Date formatting test
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

//   Plural word formatter
test('format_plural() returns plural word', () =>{
    const word = 'taco';

    expect(format_plural(word)).toBe('tacos');
});

// test for formatting URLs
test('format_url() returns a simplified url', () =>{
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
})