export class TabSwitcher {
    constructor({
        tabSwitcher = '.js-tab-switcher',
        input = '.js-input',
        button = '.js-button',
        tabs = '.js-tabs',
        tabsList = '[role=tablist]',
        tabsItem = '[role=tab]',
        tabPanel = '[role=tabpanel]',
    } = {}) {
        this.$tabSwitcher = document.querySelector(tabSwitcher);
        this.$input = this.$tabSwitcher?.querySelector(input);
        this.$button = this.$tabSwitcher?.querySelector(button);
        this.$tabs = this.$tabSwitcher?.querySelector(tabs);
        this.$tabsList = this.$tabs?.querySelector(tabsList);
        this.$tabsItems = this.$tabsList?.querySelectorAll(tabsItem);
        this.$tabPanels = this.$tabs?.querySelectorAll(tabPanel);
        this.handleChange = null;

        if (
            ![
                this.$tabSwitcher,
                this.$input,
                this.$button,
                this.$tabs,
                this.$tabsList,
                this.$tabsItems,
                this.$tabPanels,
            ].every(Boolean)
        ) {
            throw new Error("Couldn't init TabSwitcher widget");
        }

        this.handleTabListClick = this.handleTabListClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.init();
    }

    init() {
        this.$tabsList.addEventListener('click', this.handleTabListClick);
        this.$button.addEventListener('click', this.handleButtonClick);
    }

    destroy() {
        this.$tabsList.addEventListener('click', this.handleTabListClick);
        this.$button.addEventListener('click', this.handleButtonClick);
    }

    handleTabListClick(e) {
        const { ariaSelected } = e.target;

        if (ariaSelected === null) {
            return;
        }

        this.$tabsItems.forEach((btn) => {
            // eslint-disable-next-line no-param-reassign
            btn.ariaSelected = 'false';
        });

        e.target.ariaSelected = 'true';
        this.handleChange?.(e.target.i);

        this.$tabPanels.forEach((content) => {
            // eslint-disable-next-line no-param-reassign
            content.ariaHidden = 'true';

            if (content.id === e.target.getAttribute('aria-controls')) {
                // eslint-disable-next-line no-param-reassign
                content.ariaHidden = 'false';
            }
        });
    }

    handleButtonClick() {
        if (this.$input.value >= this.$tabsItems.length + 1 || this.$input.value <= 0) {
            this.$input.value = '';
            // eslint-disable-next-line no-alert
            alert('Index is invalid');
            return;
        }

        this.$tabsItems.forEach((btn) => {
            // eslint-disable-next-line no-param-reassign
            btn.ariaSelected = 'false';
        });
        this.$tabsItems[this.$input.value - 1].ariaSelected = 'true';

        this.$tabPanels.forEach((content) => {
            // eslint-disable-next-line no-param-reassign
            content.ariaHidden = 'true';
        });
        this.$tabPanels[this.$input.value - 1].ariaHidden = 'false';
        this.handleChange?.(this.$input.value);
        this.$input.value = '';
    }

    onChange(cb) {
        this.handleChange = cb;
    }
}
