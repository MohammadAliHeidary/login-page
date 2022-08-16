const submit = document.getElementById('submit') as HTMLButtonElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const mode = document.getElementById('mode')!;

mode.addEventListener('click', e => {
    e.preventDefault();
    document.documentElement.classList.toggle('dark');
});
phone.addEventListener('keyup', e => {
    const val = phone.value.split('');
    if (val[0] == '0') {
        val.shift()
        phone.value = val.join();
    }
    if (val.length == 10) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
})