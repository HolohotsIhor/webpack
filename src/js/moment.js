import moment from 'moment';

const initMomentsJsLogic = () => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const myDate = moment('1994-03-24');
    document.getElementById('myBirthDate').textContent = myDate.format('dddd, D MMMM YYYY');

    // User data
    const btn = document.getElementById('convertBtn');
    const input = document.getElementById('userInput');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        const userDate = input.value.trim();

        if (!regex.test(userDate)) {
            result.className = 'alert alert-danger';
            result.textContent = 'Incorrect BD format! Use like this: DD/MM/YYY.';
            result.classList.remove('d-none');
            return;
        }

        const [_, dd, mm, yyyy] = userDate.match(regex);
        const parsed = moment(`${yyyy}-${mm}-${dd}`);

        if (!parsed.isValid()) {
            result.className = 'alert alert-danger';
            result.textContent = 'Incorrect BD date.';
            result.classList.remove('d-none');
            return;
        }

        result.className = 'alert alert-success';
        result.textContent = `You BD date in format YYYY-MM-DD: ${parsed.format('YYYY-MM-DD')}`;
        result.classList.remove('d-none');
    });
}
