export class ToggleSwitches {
    constructor({ randomToggleSwitches = '.js-random-toggle-switches' } = {}) {
        this.$randomToggleSwitches = document.querySelector(randomToggleSwitches);
        this.$checkboxes = this.$randomToggleSwitches?.querySelectorAll('input[type="checkbox"]');

        this.$checkboxes.forEach((check) => {
            check.addEventListener('click', (e) => {
                if (e.target.checked) {
                    this.$checkboxes.forEach((el) => {
                        // eslint-disable-next-line no-param-reassign
                        el.checked = Math.random() < 0.5;
                    });
                }
            });
        });
    }
}
