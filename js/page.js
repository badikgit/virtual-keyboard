import KEYS from './keys.js';

class Keyboard {
    constructor() {
        this.keyCodes = [];
        this.element = null,
            this.textarea = null,
            this.state = {
                isShiftLeftPressed: !1,
                isShiftRightPressed: !1,
                isCapsLockNotPressed: 0,
                case: 'notShift',
                lang: 'eng',
            },
            this.current = {
                element: null,
                code: null,
                event: null,
                char: null,
            },
            this.previous = {
                element: null,
                code: null,
                event: null,
                char: null,
            };
    }

    initializationKeyboard(elements) {
        this.initializationLanguage(),
            this.drawPage(elements),
            document.addEventListener('keyup', this.keyUp.bind(this)),
            document.addEventListener('keydown', this.keyDown.bind(this)),
            document.addEventListener('mouseup', this.mouseUp.bind(this)),
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
        textarea.setAttribute('id', 'textarea');
        textarea.setAttribute('rows', '5');
        textarea.setAttribute('cols', '50');
        textarea.setAttribute('spellcheck', "false");
        textarea.setAttribute('autofocus', "");
        textarea.addEventListener('blur', textarea.focus);
        this.textarea = textarea;
        wrapper.appendChild(this.textarea);
        this.element = document.createElement('div');
        this.element.classList.add('keyboard');
        this.element.setAttribute('id', 'keyboard');
        const rows = document.createDocumentFragment();

        for (let currentRow = 0; currentRow < elements.length; currentRow++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let currentKey = 0; currentKey < elements[currentRow].length; currentKey++) {
                this.keyCodes.push(elements[currentRow][currentKey].code);
                const key = document.createElement('div');
                key.classList.add('key', elements[currentRow][currentKey].code);
                let value = (!this.state.isCapsLockNotPressed && !this.state.isShiftLeftPressed && !this.state.isShiftRightPressed) ?
                    ('notShift') :
                    (!this.state.isCapsLockNotPressed && (this.state.isShiftLeftPressed || this.state.isShiftRightPressed)) ?
                    ('shift') :
                    (this.state.isCapsLockNotPressed && (!this.state.isShiftLeftPressed && !this.state.isShiftRightPressed)) ?
                    (elements[currentRow][currentKey][this.state.lang]['caps'] ? ('caps') : 'shift') :
                    (this.state.isCapsLockNotPressed && (this.state.isShiftLeftPressed || this.state.isShiftRightPressed)) ?
                    (elements[currentRow][currentKey][this.state.lang]['shiftAndCaps'] ? ('shiftAndCaps') : 'notShift') : '';
                key.innerHTML = elements[currentRow][currentKey][this.state.lang][value];
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
        language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
        language.classList.add('language');
        wrapper.appendChild(language);
        document.body.appendChild(wrapper);
    }
    keyUp(element) {
        if (this.keyCodes.includes(element.code)) {
            const key = document.querySelector('.' + element.code);
            if (element.code !== 'CapsLock') key.classList.remove('active');
            else {
                this.state.isCapsLockNotPressed = !this.state.isCapsLockNotPressed;
                this.state.isCapsLockNotPressed ? key.classList.toggle('active') : null;

            }
        }
    }
    keyDown(element) {
        if (this.keyCodes.includes(element.code)) {
            const key = document.querySelector('.' + element.code);
            if (element.code == 'CapsLock')
                (!key.classList.contains('active') && this.state.isCapsLockNotPressed == 0) ? this.state.isCapsLockNotPressed = 1 : null;
            key.classList.add('active');
        }
    }
    mouseUp(element) {
        if (element.composedPath()[0].classList[0] === 'key') {
            const key = element.composedPath()[0];
            if (key.classList[0] === 'key')
                if (!key.classList.contains('CapsLock')) key.classList.remove('active');
                else {
                    this.state.isCapsLockNotPressed = !this.state.isCapsLockNotPressed;
                    key.classList.toggle('active');

                }
        }
    }
    mouseDown(element) {
        if (element.composedPath()[0].classList[0] === 'key') {
            const key = element.composedPath()[0];
            if (key.classList.contains('CapsLock'))
                (!key.classList.contains('active') && this.state.isCapsLockNotPressed == 0) ? this.state.isCapsLockNotPressed = 1 : null;
            else
                key.classList.add('active');
        }
    }

    initializationLanguage() {
        if (!localStorage.lang) localStorage.lang = this.state.lang;
        else this.state.lang = localStorage.lang;
    }
}
export default (new Keyboard()).initializationKeyboard(KEYS.KEYS.ROWS);