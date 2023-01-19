import { Adapter } from "@nitipit/adapter/src/adapter";
import { TabStyle } from "./tab.style";
export class Tab extends Adapter {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    constructor() {
        super();
        this.setupTab();
    }
    setupTab() {
        for (let tab of this.querySelectorAll('div')) {
            if (tab.parentNode != this) {
                break;
            }
            ;
            if (tab.classList.contains('active')) {
                this.activedTab = tab;
            }
            tab.addEventListener('click', (event) => {
                this.activateTab(event.target);
            });
        }
    }
    activateTab(tab) {
        try {
            this.activedTab.classList.remove('active');
        }
        catch (err) { }
        ;
        tab.classList.add('active');
        this.activedTab = tab;
    }
}
Tab.Style = TabStyle;
