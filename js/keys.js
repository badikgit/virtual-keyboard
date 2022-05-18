class Keys {
  // constructor() {
  #special = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

  #rows = [
    [{
      code: 'Backquote',
      eng: {
        caps: '`',
        notShift: '`',
        shift: '~',
        shiftAndCaps: '~',
      },
      rus: {
        caps: 'Ё',
        notShift: 'ё',
        shift: 'Ё',
        shiftAndCaps: 'ё',
      },
    },
    {
      code: 'Digit1',
      eng: {
        caps: '1',
        notShift: '1',
        shift: '!',
        shiftAndCaps: '!',
      },
      rus: {
        caps: '1',
        notShift: '1',
        shift: '!',
        shiftAndCaps: '!',
      },
    },
    {
      code: 'Digit2',
      eng: {
        caps: '2',
        notShift: '2',
        shift: '@',
        shiftAndCaps: '@',
      },
      rus: {
        caps: '2',
        notShift: '2',
        shift: '"',
        shiftAndCaps: '"',
      },
    },
    {
      code: 'Digit3',
      eng: {
        caps: '3',
        notShift: '3',
        shift: '#',
        shiftAndCaps: '#',
      },
      rus: {
        caps: '3',
        notShift: '3',
        shift: '№',
        shiftAndCaps: '№',
      },
    },
    {
      code: 'Digit4',
      eng: {
        caps: '4',
        notShift: '4',
        shift: '$',
        shiftAndCaps: '$',
      },
      rus: {
        caps: '4',
        notShift: '4',
        shift: ';',
        shiftAndCaps: ';',
      },
    },
    {
      code: 'Digit5',
      eng: {
        caps: '5',
        notShift: '5',
        shift: '%',
        shiftAndCaps: '%',
      },
      rus: {
        caps: '5',
        notShift: '5',
        shift: '%',
        shiftAndCaps: '%',
      },
    },
    {
      code: 'Digit6',
      eng: {
        caps: '6',
        notShift: '6',
        shift: '^',
        shiftAndCaps: '^',
      },
      rus: {
        caps: '6',
        notShift: '6',
        shift: ':',
        shiftAndCaps: ':',
      },
    },
    {
      code: 'Digit7',
      eng: {
        caps: '7',
        notShift: '7',
        shift: '&',
        shiftAndCaps: '&',
      },
      rus: {
        caps: '7',
        notShift: '7',
        shift: '?',
        shiftAndCaps: '?',
      },
    },
    {
      code: 'Digit8',
      eng: {
        caps: '8',
        notShift: '8',
        shift: '*',
        shiftAndCaps: '*',
      },
      rus: {
        caps: '8',
        notShift: '8',
        shift: '*',
        shiftAndCaps: '*',
      },
    },
    {
      code: 'Digit9',
      eng: {
        caps: '9',
        notShift: '9',
        shift: '(',
        shiftAndCaps: '(',
      },
      rus: {
        caps: '9',
        notShift: '9',
        shift: '(',
        shiftAndCaps: '(',
      },
    },
    {
      code: 'Digit0',
      eng: {
        caps: '0',
        notShift: '0',
        shift: ')',
        shiftAndCaps: ')',
      },
      rus: {
        caps: '0',
        notShift: '0',
        shift: ')',
        shiftAndCaps: ')',
      },
    },
    {
      code: 'Minus',
      eng: {
        caps: '-',
        notShift: '-',
        shift: '_',
        shiftAndCaps: '_',
      },
      rus: {
        caps: '-',
        notShift: '-',
        shift: '_',
        shiftAndCaps: '_',
      },
    },
    {
      code: 'Equal',
      eng: {
        caps: '=',
        notShift: '=',
        shift: '+',
        shiftAndCaps: '+',
      },
      rus: {
        caps: '=',
        notShift: '=',
        shift: '+',
        shiftAndCaps: '+',
      },
    },
    {
      code: 'Backspace',
      eng: { notShift: '⇤', shift: '⇤' },
      rus: { notShift: '⇤', shift: '⇤' },
    },
    ],
    [{
      code: 'Tab',
      eng: { notShift: '↹', shift: '↹' },
      rus: { notShift: '↹', shift: '↹' },
    },
    {
      code: 'KeyQ',
      eng: { notShift: 'q', shift: 'Q' },
      rus: { notShift: 'й', shift: 'Й' },
    },
    {
      code: 'KeyW',
      eng: { notShift: 'w', shift: 'W' },
      rus: { notShift: 'ц', shift: 'Ц' },
    },
    {
      code: 'KeyE',
      eng: { notShift: 'e', shift: 'E' },
      rus: { notShift: 'у', shift: 'У' },
    },
    {
      code: 'KeyR',
      eng: { notShift: 'r', shift: 'R' },
      rus: { notShift: 'к', shift: 'К' },
    },
    {
      code: 'KeyT',
      eng: { notShift: 't', shift: 'T' },
      rus: { notShift: 'е', shift: 'Е' },
    },
    {
      code: 'KeyY',
      eng: { notShift: 'y', shift: 'Y' },
      rus: { notShift: 'н', shift: 'Н' },
    },
    {
      code: 'KeyU',
      eng: { notShift: 'u', shift: 'U' },
      rus: { notShift: 'г', shift: 'Г' },
    },
    {
      code: 'KeyI',
      eng: { notShift: 'i', shift: 'I' },
      rus: { notShift: 'ш', shift: 'Ш' },
    },
    {
      code: 'KeyO',
      eng: { notShift: 'o', shift: 'O' },
      rus: { notShift: 'щ', shift: 'Щ' },
    },
    {
      code: 'KeyP',
      eng: { notShift: 'p', shift: 'P' },
      rus: { notShift: 'з', shift: 'З' },
    },
    {
      code: 'BracketLeft',
      eng: {
        caps: '[',
        notShift: '[',
        shift: '{',
        shiftAndCaps: '{',
      },
      rus: {
        caps: 'Х',
        notShift: 'х',
        shift: 'Х',
        shiftAndCaps: 'х',
      },
    },
    {
      code: 'BracketRight',
      eng: {
        caps: ']',
        notShift: ']',
        shift: '}',
        shiftAndCaps: '}',
      },
      rus: {
        caps: 'Ъ',
        notShift: 'ъ',
        shift: 'Ъ',
        shiftAndCaps: 'ъ',
      },
    },
    {
      code: 'Backslash',
      eng: {
        caps: '\\',
        notShift: '\\',
        shift: '|',
        shiftAndCaps: '|',
      },
      rus: {
        caps: '\\',
        notShift: '\\',
        shift: '/',
        shiftAndCaps: '/',
      },
    },
    {
      code: 'Delete',
      eng: { notShift: 'Del', shift: 'Del' },
      rus: { notShift: 'Del', shift: 'Del' },
    },
    ],
    [{
      code: 'CapsLock',
      eng: { notShift: 'Caps Lock', shift: 'Caps Lock' },
      rus: { notShift: 'Caps Lock', shift: 'Caps Lock' },
    },
    {
      code: 'KeyA',
      eng: { notShift: 'a', shift: 'A' },
      rus: { notShift: 'ф', shift: 'Ф' },
    },
    {
      code: 'KeyS',
      eng: { notShift: 's', shift: 'S' },
      rus: { notShift: 'ы', shift: 'Ы' },
    },
    {
      code: 'KeyD',
      eng: { notShift: 'd', shift: 'D' },
      rus: { notShift: 'в', shift: 'В' },
    },
    {
      code: 'KeyF',
      eng: { notShift: 'f', shift: 'F' },
      rus: { notShift: 'а', shift: 'А' },
    },
    {
      code: 'KeyG',
      eng: { notShift: 'g', shift: 'G' },
      rus: { notShift: 'п', shift: 'П' },
    },
    {
      code: 'KeyH',
      eng: { notShift: 'h', shift: 'H' },
      rus: { notShift: 'р', shift: 'Р' },
    },
    {
      code: 'KeyJ',
      eng: { notShift: 'j', shift: 'J' },
      rus: { notShift: 'о', shift: 'О' },
    },
    {
      code: 'KeyK',
      eng: { notShift: 'k', shift: 'K' },
      rus: { notShift: 'л', shift: 'Л' },
    },
    {
      code: 'KeyL',
      eng: { notShift: 'l', shift: 'L' },
      rus: { notShift: 'д', shift: 'Д' },
    },
    {
      code: 'Semicolon',
      eng: {
        caps: ';',
        notShift: ';',
        shift: ':',
        shiftAndCaps: ':',
      },
      rus: {
        caps: 'Ж',
        notShift: 'ж',
        shift: 'Ж',
        shiftAndCaps: 'ж',
      },
    },
    {
      code: 'Quote',
      eng: {
        caps: "'",
        notShift: "'",
        shift: '"',
        shiftAndCaps: '"',
      },
      rus: {
        caps: 'Э',
        notShift: 'э',
        shift: 'Э',
        shiftAndCaps: 'э',
      },
    },
    {
      code: 'Enter',
      eng: { notShift: '↵', shift: '↵' },
      rus: { notShift: '↵', shift: '↵' },
    },
    ],
    [{
      code: 'ShiftLeft',
      eng: { notShift: 'Shift', shift: 'Shift' },
      rus: { notShift: 'Shift', shift: 'Shift' },
    },
    {
      code: 'KeyZ',
      eng: { notShift: 'z', shift: 'Z' },
      rus: { notShift: 'я', shift: 'Я' },
    },
    {
      code: 'KeyX',
      eng: { notShift: 'x', shift: 'X' },
      rus: { notShift: 'ч', shift: 'Ч' },
    },
    {
      code: 'KeyC',
      eng: { notShift: 'c', shift: 'C' },
      rus: { notShift: 'с', shift: 'С' },
    },
    {
      code: 'KeyV',
      eng: { notShift: 'v', shift: 'V' },
      rus: { notShift: 'м', shift: 'М' },
    },
    {
      code: 'KeyB',
      eng: { notShift: 'b', shift: 'B' },
      rus: { notShift: 'и', shift: 'И' },
    },
    {
      code: 'KeyN',
      eng: { notShift: 'n', shift: 'N' },
      rus: { notShift: 'т', shift: 'Т' },
    },
    {
      code: 'KeyM',
      eng: { notShift: 'm', shift: 'M' },
      rus: { notShift: 'ь', shift: 'Ь' },
    },
    {
      code: 'Comma',
      eng: {
        caps: ',',
        notShift: ',',
        shift: '<',
        shiftAndCaps: '<',
      },
      rus: {
        caps: 'Б',
        notShift: 'б',
        shift: 'Б',
        shiftAndCaps: 'б',
      },
    },
    {
      code: 'Period',
      eng: {
        caps: '.',
        notShift: '.',
        shift: '>',
        shiftAndCaps: '>',
      },
      rus: {
        caps: 'Ю',
        notShift: 'ю',
        shift: 'Ю',
        shiftAndCaps: 'ю',
      },
    },
    {
      code: 'Slash',
      eng: {
        caps: '/',
        notShift: '/',
        shift: '?',
        shiftAndCaps: '?',
      },
      rus: {
        caps: '.',
        notShift: '.',
        shift: ',',
        shiftAndCaps: ',',
      },
    },
    {
      code: 'ArrowUp',
      eng: { notShift: '▲', shift: '▲' },
      rus: { notShift: '▲', shift: '▲' },
    },
    {
      code: 'ShiftRight',
      eng: { notShift: 'Shift', shift: 'Shift' },
      rus: { notShift: 'Shift', shift: 'Shift' },
    },
    ],
    [{
      code: 'ControlLeft',
      eng: { notShift: 'Ctrl', shift: 'Ctrl' },
      rus: { notShift: 'Ctrl', shift: 'Ctrl' },
    },
    {
      code: 'MetaLeft',
      eng: { notShift: 'RU', shift: 'RU' },
      rus: { notShift: 'EN', shift: 'EN' },
    },
    {
      code: 'AltLeft',
      eng: { notShift: 'Alt', shift: 'Alt' },
      rus: { notShift: 'Alt', shift: 'Alt' },
    },
    {
      code: 'Space',
      eng: { notShift: ' ', shift: ' ' },
      rus: { notShift: ' ', shift: ' ' },
    },
    {
      code: 'AltRight',
      eng: { notShift: 'Alt', shift: 'Alt' },
      rus: { notShift: 'Alt', shift: 'Alt' },
    },
    {
      code: 'ArrowLeft',
      eng: { notShift: '◄', shift: '◄' },
      rus: { notShift: '◄', shift: '◄' },
    },
    {
      code: 'ArrowDown',
      eng: { notShift: '▼', shift: '▼' },
      rus: { notShift: '▼', shift: '▼' },
    },
    {
      code: 'ArrowRight',
      eng: { notShift: '►', shift: '►' },
      rus: { notShift: '►', shift: '►' },
    },
    {
      code: 'ControlRight',
      eng: { notShift: 'Ctrl', shift: 'Ctrl' },
      rus: { notShift: 'Ctrl', shift: 'Ctrl' },
    },
    ],
  ];

  // }
  get rows() {
    return this.#rows;
  }

  get special() {
    return this.#special;
  }
}

const KEYS = new Keys();

export default KEYS;
