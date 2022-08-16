var submit = document.getElementById('submit');
var phone = document.getElementById('phone');
var mode = document.getElementById('mode');
mode.addEventListener('click', function (e) {
    e.preventDefault();
    document.documentElement.classList.toggle('dark');
});
phone.addEventListener('keyup', function (e) {
    var val = phone.value.split('');
    if (val[0] == '0') {
        val.shift();
        phone.value = val.join();
    }
    if (val.length == 10) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
});
