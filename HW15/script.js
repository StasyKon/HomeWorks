function Form(inputs) {
    this.inputs = inputs;
}

Form.prototype.render = function() {
    const container = document.createElement("form");
    container.classList.add("form-container");
    for (const input of this.inputs) {
        const field = document.createElement('input');
        field.classList.add("field", input);
        field.type = input;
        container.append(field);
    }
    document.body.append(container);
}

const myForm = new Form(['text', 'password', 'submit']);
myForm.render();

const login = document.querySelector('.text');
login.setAttribute('placeholder', 'Your email');

const pass = document.querySelector('.password');
pass.setAttribute('placeholder', 'Your password');

const submit = document.querySelector('.submit');
submit.setAttribute('disabled', 'true');

const form = document.querySelector('.form-container');

function activeButton() {
    if (login.classList.contains('valid') && pass.classList.contains('valid'))
        submit.removeAttribute('disabled')
}

login.addEventListener('input', (event) => {
    let validEmail = /[-.\w]+\@(\w+\.)+\w+/gi;
    if (validEmail.test(event.target.value)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
        activeButton()
    } else {
        event.target.classList.add('invalid');
    }
})

pass.addEventListener('input', (event) => {
    let validPass = /^(?=.*\d)(?=.*\w)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (validPass.test(event.target.value)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
        activeButton()
    } else {
        event.target.classList.add('invalid');
    }
})

form.addEventListener('submit', () => {
    event.preventDefault();
    let user = `login: ${login.value}, password: ${pass.value}`;
    alert(user);
    for (let i = 0; i < form.length - 1; i++) {
        let node = form.childNodes;
        node[i].value = '';
        node[i].classList.remove('valid')
    }
})