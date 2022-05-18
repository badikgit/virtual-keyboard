/* eslint-disable import/no-named-default */
// eslint-disable-next-line import/extensions
import { default as Keys } from './keys.js';

class Keyboard {
  constructor() {
    this.keyCodes = [];
    this.element = null;
    this.textarea = null;
    this.state = {
      isShiftLeftPressed: !1,
      isShiftRightPressed: !1,
      isCapsLockNotPressed: 0,
      case: 'notShift',
      lang: 'eng',
    };
    this.current = {
      element: null,
      code: null,
      event: null,
      char: null,
    };
    this.previous = {
      element: null,
      code: null,
      event: null,
      char: null,
    };
  }

  initializationKeyboard(elements) {
    this.initializationLanguage();
    this.drawPage(elements);
    document.addEventListener('keyup', this.keyUp.bind(this));
    document.addEventListener('keydown', this.keyDown.bind(this));
    document.addEventListener('mouseup', this.mouseUp.bind(this));
    this.element.addEventListener('mousedown', this.mouseDown.bind(this));
  }

  drawPage(elements) {
    document.body.classList.add('body');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const title = document.createElement('h1');
    title.innerText = 'RSS Virtual Keyboard';
    title.classList.add('title');
    wrapper.appendChild(title);
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.id = 'textarea';
    textarea.rows = 5;
    textarea.cols = 50;
    textarea.spellcheck = false;
    textarea.setAttribute('autofocus', '');
    textarea.addEventListener('blur', textarea.focus);
    this.textarea = textarea;
    wrapper.appendChild(this.textarea);
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    this.element.id = 'keyboard';
    const rows = document.createDocumentFragment();

    for (let currentRow = 0; currentRow < elements.length; currentRow += 1) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let currentKey = 0; currentKey < elements[currentRow].length; currentKey += 1) {
        this.keyCodes.push(elements[currentRow][currentKey].code);
        const key = document.createElement('div');
        key.classList.add('key', elements[currentRow][currentKey].code);
        this.updateStateCase();
        key.innerHTML = elements[currentRow][currentKey][this.state.lang][this.state.case];
        row.appendChild(key);
      }
      rows.appendChild(row);
    }
    this.element.appendChild(rows);
    wrapper.appendChild(this.element);
    const description = document.createElement('p');
    description.innerText = 'Клавиатура создана в операционной системе Windows';
    description.classList.add('description');
    wrapper.appendChild(description);
    const language = document.createElement('p');
    language.innerText = 'Для переключения языка:\n1) комбинация Left Ctrl + Left Alt\n2) левая кнопка Win на физической клавиатуре\n3) кнопка EN (RU) на виртуальной клавиатуре';
    language.classList.add('language');
    wrapper.appendChild(language);
    document.body.appendChild(wrapper);
  }

  addKeyActiveState() {
    this.current.element.classList.add('active');
  }

  removeKeyActiveState() {
    if (this.current.element) {
      if (this.previous.element) {
        if (this.previous.element.classList.contains('active')) {
          if (!['CapsLock', 'ShiftLeft', 'ShiftRight'].includes(this.previous.code)) {
            this.previous.element.classList.remove('active');
          }
        }
      }
      this.current.element.classList.remove('active');
    }
  }

  keyUp(event) {
    const element = this.element.getElementsByClassName(event.code)[0];
    if (element) {
      this.current.element = element;
      if (event.code !== 'CapsLock') {
        this.removeKeyActiveState();
        if (!(event.code !== 'ShiftLeft' && event.code !== 'ShiftRight')) {
          if (event.code === 'ShiftLeft') {
            this.state.isShiftLeftPressed = !1;
            this.removeKeyActiveState();
          } else if (event.code === 'ShiftRight') {
            this.state.isShiftRightPressed = !1;
            this.removeKeyActiveState();
          }
          this.updateKeys();
        }
      }
    }
  }

  keyDown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.code)) {
      event.preventDefault();
      this.current.event = event;
      this.current.code = event.code;
      [this.current.element] = this.element.getElementsByClassName(event.code);
      if (this.current.element) {
        this.current.char = this.current.element.textContent;
        this.currentKeyAction();
        if (this.current.code === 'MetaLeft') {
          this.addKeyActiveState();
          setTimeout(this.removeKeyActiveState.bind(this), 300);
        } else if (!['CapsLock', 'ShiftLeft', 'ShiftRight'].includes(this.current.code)) {
          this.addKeyActiveState();
        }
      }
    }
  }

  currentKeyAction() {
    let { value } = this.textarea;
    const { selectionStart } = this.textarea;

    const printChar = () => {
      if (selectionStart >= 0 && selectionStart <= value.length) {
        this.textarea.value = value.slice(0, selectionStart)
          + this.current.char
          + value.slice(selectionStart, value.length);
        this.textarea.selectionStart = selectionStart + this.current.char.length;
        this.textarea.selectionEnd = selectionStart + this.current.char.length;
      } else {
        this.textarea.value += this.current.char;
      }
    };

    if (Keys.special.includes(this.current.code)) {
      switch (this.current.code) {
        case 'Backspace': {
          if (selectionStart > 0 && selectionStart <= value.length) {
            value = value.slice(0, selectionStart - 1) + value.slice(selectionStart, value.length);
            this.textarea.value = value;
            this.textarea.selectionStart = selectionStart - 1;
            this.textarea.selectionEnd = selectionStart - 1;
          }
          break;
        }
        case 'Delete': {
          if (selectionStart >= 0 && selectionStart <= value.length - 1) {
            value = value.slice(0, selectionStart) + value.slice(selectionStart + 1, value.length);
            this.textarea.value = value;
            this.textarea.selectionStart = selectionStart;
            this.textarea.selectionEnd = selectionStart;
          }
          break;
        }
        case 'Tab': {
          this.current.char = '\t';
          printChar();
          break;
        }
        case 'Enter': {
          this.current.char = '\n';
          printChar();
          break;
        }
        case 'ArrowLeft': {
          if (window.getSelection().focusOffset) {
            window.getSelection().modify('move', 'backward', 'character');
          } else if (this.textarea.selectionStart) {
            this.textarea.selectionStart = selectionStart - 1;
            this.textarea.selectionEnd = selectionStart - 1;
          }
          break;
        }
        case 'ArrowRight': {
          if (window.getSelection().focusOffset) {
            window.getSelection().modify('move', 'forward', 'character');
          } else {
            this.textarea.selectionStart = selectionStart + 1;
            this.textarea.selectionEnd = selectionStart + 1;
          }
          break;
        }
        case 'ArrowUp': {
          if (window.getSelection().focusOffset) {
            window.getSelection().modify('move', 'backward', 'line');
          } else {
            this.current.char = '▲';
            printChar();
          }
          break;
        }
        case 'ArrowDown': {
          if (window.getSelection().focusOffset) {
            window.getSelection().modify('move', 'forward', 'line');
          } else {
            this.current.char = '▼';
            printChar();
          }
          break;
        }
        case 'CapsLock': {
          if (this.state.isCapsLockPressed && !this.current.event.repeat) {
            this.removeKeyActiveState();
            this.state.isCapsLockPressed = !1;
          } else {
            this.addKeyActiveState();
            this.state.isCapsLockPressed = !0;
          }
          this.updateKeys();
          break;
        }
        case 'ShiftLeft': {
          if (!this.state.isShiftLeftPressed || !this.state.isShiftRightPressed) {
            this.addKeyActiveState();
            this.state.isShiftLeftPressed = !0;
            this.updateKeys();
          }
          break;
        }
        case 'ShiftRight': {
          if (!this.state.isShiftRightPressed || this.state.isShiftLeftPressed) {
            this.addKeyActiveState();
            this.state.isShiftRightPressed = !0;
            this.updateKeys();
          }
          break;
        }
        default:
      }
    } else printChar();

    if ((this.current.event.ctrlKey && this.current.code === 'AltLeft')
      || (this.current.code === 'ControlLeft' && this.current.event.altKey)
      || (this.current.code === 'MetaLeft')) {
      this.toggleLang();
    }
  }

  mouseUp(event) {
    this.current.event = event;
    this.current.element = event.target;
    if (this.current.element) {
      if (this.current.element.classList.contains('key')) {
        [, this.current.code] = this.current.element.classList;
      } else {
        this.current = { ...this.previous };
      }
      if (this.current.code !== 'CapsLock') {
        this.removeKeyActiveState();
        if (this.state.isShiftLeftPressed && this.current.code === 'ShiftLeft') {
          this.state.isShiftLeftPressed = !1;
        } else if (this.state.isShiftRightPressed && this.current.code === 'ShiftRight') {
          this.state.isShiftRightPressed = !1;
          this.removeKeyActiveState();
        }
        this.updateKeys();
      }
    }
  }

  mouseDown(event) {
    if (event.target.classList.contains('key')) {
      this.current.event = event;
      this.current.element = event.target;
      [, this.current.code] = this.current.element.classList;
      this.current.char = event.target.textContent;

      this.currentKeyAction();
      if (this.current.code !== 'CapsLock') {
        this.addKeyActiveState();
      }
      this.previous = { ...this.current };
      event.preventDefault();
    }
  }

  updateKeys() {
    const keys = this.element.querySelectorAll('.key');
    const values = {};
    [...Keys.rows].forEach((row) => row.forEach((key) => {
      values[key.code] = { eng: key.eng, rus: key.rus };
    }));
    for (let i = 0; i < keys.length; i += 1) {
      const [, code] = keys[i].classList;
      this.updateStateCase();
      if (!values[code][this.state.lang][this.state.case] && this.state.case === 'caps') {
        this.state.case = 'shift';
      } else if (!values[code][this.state.lang][this.state.case]) this.state.case = 'notShift';

      keys[i].textContent = (values[code][this.state.lang][this.state.case]);
    }
  }

  updateStateCase() {
    if ((this.state.isShiftLeftPressed || this.state.isShiftRightPressed)
      && this.state.isCapsLockPressed) {
      this.state.case = 'shiftAndCaps';
    } else if (this.state.isCapsLockPressed) {
      this.state.case = 'caps';
    } else if (this.state.isShiftLeftPressed || this.state.isShiftRightPressed) {
      this.state.case = 'shift';
    } else { this.state.case = 'notShift'; }
  }

  toggleLang() {
    if (this.state.lang === 'eng') this.state.lang = 'rus';
    else this.state.lang = 'eng';
    localStorage.setItem('lang', this.state.lang);
    this.updateKeys();
  }

  initializationLanguage() {
    if (!localStorage.lang) localStorage.lang = this.state.lang;
    else this.state.lang = localStorage.lang;
  }
}

export default (new Keyboard());
