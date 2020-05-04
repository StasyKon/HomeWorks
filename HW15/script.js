function Form(inputs) {
    this.inputs = inputs;
};

Form.prototype.render = function() {
    const container = document.createElement("form");
    container.classList.add("form-container");

    for (const input of this.inputs) {
        const field = document.createElement('input');
        field.classList.add("field", input);
        field.type = input;
        container.append(field);
    };

    document.body.append(container);

    const email = document.querySelector('.text');
    email.setAttribute('placeholder', 'Your email');

    const pass = document.querySelector('.password');
    pass.setAttribute('placeholder', 'Your password');

    const submit = document.querySelector('.submit');
    submit.setAttribute('disabled', 'true');

    email.addEventListener('input', this.emailValid.bind(this));
    pass.addEventListener('input', this.passValid.bind(this));
    container.addEventListener('submit', this.onSubmit.bind(this));
};

Form.prototype.activeButton = function() {
    let email = document.querySelector('.text');
    let pass = document.querySelector('.password');
    let submit = document.querySelector('.submit');

    if (email.classList.contains('valid') && pass.classList.contains('valid'))
        submit.removeAttribute('disabled')
}

Form.prototype.emailValid = function(event) {
    let validEmail = /[-.\w]+\@(\w+\.)+\w+/gi;

    if (validEmail.test(event.target.value)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
        this.activeButton();
    } else {
        event.target.classList.add('invalid');
    };
};

Form.prototype.passValid = function(event) {
    let validPass = /^(?=.*\d)(?=.*\w)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (validPass.test(event.target.value)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
        this.activeButton();
    } else {
        event.target.classList.add('invalid');
    };
};

Form.prototype.onSubmit = function() {
    event.preventDefault();
    let email = document.querySelector('.text');
    let pass = document.querySelector('.password');

    let user = `email: ${email.value}, password: ${pass.value}`;
    alert(user);

    for (let i = 0; i < this.length - 1; i++) {
        let node = form.childNodes;
        node[i].value = '';
        node[i].classList.remove('valid');
    };
};

const myForm = new Form(['text', 'password', 'submit']);
myForm.render();