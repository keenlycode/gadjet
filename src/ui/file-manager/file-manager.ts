import { define, Adapter } from "@nitipit/adapter/src/adapter";
import { html, render } from 'uhtml';
import {    
    FileManagerStyle,
    FileManagerStyleParam,
} from './file-manager.style';
import { FileUpload } from './file-upload';


class FileManagerFileUpload extends FileUpload {};

interface FileManagerChildElement {
    dashboard: HTMLElement;
    input: HTMLInputElement;
    toolbar: HTMLElement;
}

export class FileManager extends Adapter {
    static Style = FileManagerStyle;

    static define(tagName: string): void {
        define(`${tagName}-file-upload`, FileManagerFileUpload);
        super.define(tagName);
    }

    static tagStyle(style?: string | FileManagerStyleParam): void {
        super.tagStyle(style);
        FileManagerFileUpload.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | FileManagerStyleParam): void {
        super.classStyle(class_, style);
        FileManagerFileUpload.classStyle(class_, style);
    }

    addStyle(style?: string | FileManagerStyleParam): void {
        super.addStyle(style);
    }
    
    el: FileManagerChildElement = {
        dashboard: null,
        input: null,
        toolbar: null
    }
    
    uploadURL: string = './';

    constructor() {
        super();
        this.uploadURL = this.getAttribute('uploadURL') || this.uploadURL;
        this.render();
    }

    _addFile(file: File) {
        let elFileUpload = new FileManagerFileUpload();
        elFileUpload.uploadURL = this.uploadURL;
        this.el['dashboard'].appendChild(elFileUpload);
        elFileUpload.file = file;
    }

    render() {
        render(this, html`
        <input el="input" type="file" accept="image/*" multiple style="display: none">
        <div el="toolbar">
            <div el="left">
                <button class="add" @click=${() => {this.openFileSelector()}}>Add</button>
                <button class="upload" @click=${() => {this.send()}}>Upload All</button>
            </div>
            <div el="right">
                <button class="delete" @click=${() => {this.delete()}}>Delete All</button>
            </div>
        </div>
        <div el="dashboard"></div>
        `);

        this.el['input'] = this.querySelector('[el="input"]');
        this.el['toolbar'] = this.querySelector('[el="toolbar"]');
        this.el['dashboard'] = this.querySelector('[el="dashboard"]');

        this.uploadURL = this.getAttribute('uploadURL') || this.uploadURL;
        let input: HTMLInputElement = this.querySelector('input[el="input"]');
        input.addEventListener('change', () => {
            this._onFileSelected(input);
        });
    }

    _onFileSelected(input: HTMLInputElement) {
        for (let file of input.files) {
            this._addFile(file);
        }
        this.el['input'].value = null;
    }

    openFileSelector() {
        this.el['input'].click();
    }

    loadFile(url: string) {
        let elFileUpload = new FileManagerFileUpload();
        this.el['dashboard'].appendChild(elFileUpload);
        elFileUpload.url = url
    }

    loadFiles(urls: Array<string>) {
        for (let url of urls) {
            this.loadFile(url);
        };
    }

    async send(method="POST") {
        let tag = this.tagName.toLowerCase();
        // let elFileUploadList: NodeListOf<FileManagerFileUpload> =
        //     this.querySelectorAll(`${tag}-file-upload`);
        let elFileUploadList: NodeListOf<FileManagerFileUpload> = this.querySelectorAll(`${tag}-file-upload`);
        for (let elFileUpload of elFileUploadList) {
            if (elFileUpload.isUploaded) { continue };
            await elFileUpload.send(method);
        }
    }

    async delete() {
        let tag = this.tagName.toLowerCase();
        let elFileUploadList: NodeListOf<FileManagerFileUpload> =
            this.querySelectorAll(`${tag}-file-upload`);
        for (let elFileUpload of elFileUploadList) {
            await elFileUpload.delete();
        }
    }
}