import { TabSwitcher } from './TabSwitcher';

const tabSwitcher = new TabSwitcher();

console.log('TabSwitcher component', tabSwitcher);

tabSwitcher.onChange((index) => console.log('New index ', index));
