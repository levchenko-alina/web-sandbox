const $togglingTabs = document.querySelector('.js-toggling-tabs');
const $selector = $togglingTabs.querySelector('.js-selector');
const $buttonGroup = $togglingTabs.querySelector('.js-button-group');
const $buttons = $buttonGroup.querySelectorAll('.js-button');

$selector.addEventListener('change', (event) => {
    $buttons.forEach(($button) => {
        $button.classList.remove('button--is-active');

        if ($button.dataset.value === event.target.value) {
            $button.classList.add('button--is-active');
        }
    });
});

$buttonGroup.addEventListener('click', (event) => {
    const { value } = event.target.dataset;

    if (!value) return;

    $buttons.forEach(($button) => {
        if ($button === event.target) {
            $button.classList.add('button--is-active');
        } else {
            $button.classList.remove('button--is-active');
        }
    });

    $selector.value = value;
});

const $activeButton = $buttonGroup.querySelector(`[data-value=${$selector.value}]`);
$activeButton.classList.add('button--is-active');
