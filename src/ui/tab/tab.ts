import { Adapter } from "@nitipit/adapter/src/adapter";
import { TabStyle, TabStyleParam } from "./tab.style";


export class Tab extends Adapter {
    static Style = TabStyle;

    static tagStyle(style?: TabStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: TabStyleParam): void {
        super.classStyle(class_, style);
    }

    activedTab: HTMLElement;

    constructor() {
        super();
        this.setupTab();
    }

    setupTab() {
        for (let tab of this.querySelectorAll('div')) {
            if (tab.parentNode != this) { break };
            if (tab.classList.contains('active')) {
                this.activedTab = tab;
            }
            tab.addEventListener('click', (event: Event) => {
                this.activateTab(event.target as HTMLElement)
            })
        }
    }

    activateTab(tab: HTMLElement) {
        try {
            this.activedTab.classList.remove('active');
        } catch(err) {};
        tab.classList.add('active');
        this.activedTab = tab;
    }
}