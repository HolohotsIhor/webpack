import { Tooltip } from 'bootstrap';

export const initBootstrapLogic = () => {
    // Tooltip
    const tooltipTriggerList = document.querySelectorAll('[title]');
    tooltipTriggerList.forEach(el => new Tooltip(el));

    // Toggle alert
    const alertBtn = document.getElementById('alertToggleBtn');
    const alertBox = document.getElementById('myAlert');

    alertBtn.addEventListener('click', () => {
        console.log('click');
        alertBox.classList.toggle('d-none');
    });
}
