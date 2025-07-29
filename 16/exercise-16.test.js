import { fixLetter } from './exercise-16.js';

describe('fixLetter()', () => {
  it('should be defined as a function', () => {
    expect(typeof fixLetter).toBe('function');
  });

  it('should fix spacing, punctuation, and capitalization in a complex sentence', () => {
    expect(
      fixLetter(
        ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
      )
    ).toEqual(
      'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
    );
  });

  it('should capitalize proper nouns and fix punctuation in a polite request', () => {
    expect(
      fixLetter(
        "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
      )
    ).toEqual(
      "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
    );
  });

  it('should handle excessive spaces and capitalization in a short greeting', () => {
    expect(fixLetter('  hi    santa    claus ')).toEqual('Hi Santa Claus.');
  });

  it('should fix spacing and punctuation in a sentence with repeated names', () => {
    expect(
      fixLetter('  hi    santa    claus . santa claus is the best  ')
    ).toEqual('Hi Santa Claus. Santa Claus is the best.');
  });

  it('should correctly fix spacing before punctuation and capitalize questions', () => {
    expect(fixLetter('  hi,santa claus. are you there ?   ')).toEqual(
      'Hi, Santa Claus. Are you there?'
    );
  });

  it('should preserve sentence types and fix formatting in multiple statements', () => {
    expect(
      fixLetter('Hey santa Claus .  I want a bike.   I want a videogame! ')
    ).toEqual('Hey Santa Claus. I want a bike. I want a videogame!');
  });
});
