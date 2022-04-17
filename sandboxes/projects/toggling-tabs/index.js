import { TogglingTabs } from './TogglingTabs';

const togglingTabs = new TogglingTabs();

console.log('TogglingTabs component', togglingTabs);

togglingTabs.onChange((value) => console.log('New value ', value));
