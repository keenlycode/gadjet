var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { html, render } from 'uhtml';
import { define, StyledElement } from '../ui';
import { FileManagerStyle, } from './file-manager.style';
import { FileUpload } from './file-upload';
class FileManagerFileUpload extends FileUpload {
}
;
export class FileManager extends StyledElement {
    constructor() {
        super();
        this.el = {
            dashboard: null,
            input: null,
            toolbar: null
        };
        this.uploadURL = './';
        this.uploadURL = this.getAttribute('uploadURL') || this.uploadURL;
        this.render();
    }
    static onDefine(tagName) {
        define(`${tagName}-file-upload`, FileManagerFileUpload);
        super.onDefine(tagName);
    }
    static tagStyle(style) {
        super.tagStyle(style);
        FileManagerFileUpload.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
        FileManagerFileUpload.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    _addFile(file) {
        let elFileUpload = new FileManagerFileUpload();
        elFileUpload.uploadURL = this.uploadURL;
        this.el['dashboard'].appendChild(elFileUpload);
        elFileUpload.file = file;
    }
    render() {
        render(this, html `
        <input el="input" type="file" accept="image/*" multiple style="display: none">
        <div el="toolbar">
            <div el="left">
                <button class="add" @click=${() => { this.openFileSelector(); }}>Add</button>
                <button class="upload" @click=${() => { this.send(); }}>Upload All</button>
            </div>
            <div el="right">
                <button class="delete" @click=${() => { this.delete(); }}>Delete All</button>
            </div>
        </div>
        <div el="dashboard"></div>
        `);
        this.el['input'] = this.querySelector('[el="input"]');
        this.el['toolbar'] = this.querySelector('[el="toolbar"]');
        this.el['dashboard'] = this.querySelector('[el="dashboard"]');
        this.uploadURL = this.getAttribute('uploadURL') || this.uploadURL;
        let input = this.querySelector('input[el="input"]');
        input.addEventListener('change', () => {
            this._onFileSelected(input);
        });
    }
    _onFileSelected(input) {
        for (let file of input.files) {
            this._addFile(file);
        }
        this.el['input'].value = null;
    }
    openFileSelector() {
        this.el['input'].click();
    }
    loadFile(url) {
        let elFileUpload = new FileManagerFileUpload();
        this.el['dashboard'].appendChild(elFileUpload);
        elFileUpload.url = url;
    }
    loadFiles(urls) {
        for (let url of urls) {
            this.loadFile(url);
        }
        ;
    }
    send(method = "POST") {
        return __awaiter(this, void 0, void 0, function* () {
            let tag = this.tagName.toLowerCase();
            let elFileUploadList = this.querySelectorAll(`${tag}-file-upload`);
            for (let elFileUpload of elFileUploadList) {
                if (elFileUpload.isUploaded) {
                    continue;
                }
                ;
                yield elFileUpload.send(method);
            }
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            let tag = this.tagName.toLowerCase();
            let elFileUploadList = this.querySelectorAll(`${tag}-file-upload`);
            for (let elFileUpload of elFileUploadList) {
                yield elFileUpload.delete();
            }
        });
    }
}
FileManager.Style = FileManagerStyle;
