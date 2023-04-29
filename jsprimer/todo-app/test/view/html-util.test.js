import * as target from 'src/view/html-util.js';

describe('escapeSpecialChars test', () => {
    test.each([
        ['&', '&amp;'],
        ['<', '&lt;'],
        ['>', '&gt;'],
        ['"', '&quot;'],
        ["'", '&#039;']
    ])('escape %s to %s', (targetStr, expected) => {
        const actual = target.escapeSpecialChars(targetStr);
        expect(actual).toBe(expected);
    })
})

// describe('htmlToElement test', () => {
//     test('convert div html to div element', () => {
//         const actual = target.htmlToElement(`
//             <div data-testid='target' class="test" id="test">
//                 Test String
//             </div>`);
//         expect(actual).toHaveClass('test');
//         expect(actual).toHaveTextContent('Test String');
//         expect(actual.id).toBe('test');
//     })
// })