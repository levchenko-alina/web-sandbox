export class TogglingTabs {
    constructor({
        widgetSelector = '.js-toggling-tabs',
        selectSelector = '.js-selector',
        buttonGroupSelector = '.js-button-group',
        buttonSelector = '.js-button',
    } = {}) {
        this.$togglingTabs = document.querySelector(widgetSelector);
        this.$selector = this.$togglingTabs?.querySelector(selectSelector);
        this.$buttonGroup = this.$togglingTabs?.querySelector(buttonGroupSelector);
        this.$buttons = this.$buttonGroup?.querySelectorAll(buttonSelector);

        this.value = this.$selector?.value;
        this.handleChange = null;

        if (![this.$togglingTabs, this.$selector, this.$buttonGroup, this.$buttons?.length].every(Boolean)) {
            throw new Error("Couldn't init TogglingTabs widget");
        }

        this.handleButtonGroupClick = this.handleButtonGroupClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);

        this.init();
    }

    init() {
        this.$selector?.addEventListener('change', this.handleSelectChange);
        this.$buttonGroup?.addEventListener('click', this.handleButtonGroupClick);

        const $activeButton = this.$buttonGroup?.querySelector(`[data-value=${this.$selector.value}]`);
        $activeButton?.classList.add('button--is-active');
    }

    destroy() {
        this.$selector?.removeEventListener('change', this.handleSelectChange);
        this.$buttonGroup?.removeEventListener('click', this.handleButtonGroupClick);
    }

    handleSelectChange(event) {
        this.$buttons.forEach(($button) => {
            $button.classList.remove('button--is-active');

            if ($button.dataset.value === event.target.value) {
                $button.classList.add('button--is-active');
            }
        });

        this.value = event.target.value;
        this.handleChange?.(this.value);
    }

    handleButtonGroupClick(event) {
        const { value } = event.target.dataset;

        if (!value) return;

        this.$buttons.forEach(($button) => {
            if ($button === event.target) {
                $button.classList.add('button--is-active');
            } else {
                $button.classList.remove('button--is-active');
            }
        });

        this.$selector.value = value;
        this.value = value;
        this.handleChange?.(this.value);
    }

    onChange(cb) {
        this.handleChange = cb;
    }
}
