import { define, Adapter } from "@nitipit/adapter/src/adapter";
import { ProgressBar } from '../progress/progress-bar';
import { FileUploadStyle, FileUploadStyleParam } from './file-upload.style';
import { render, svg, html } from 'uhtml';
import { aspectRatio } from '../../style';


class FileUploadProgressBar extends ProgressBar {};


interface FileUploadChildElement {
    file: HTMLElement;
    image: HTMLImageElement;
    upload: HTMLElement;
    delete: HTMLElement;
    progressBar: FileUploadProgressBar;
}


export class FileUpload extends Adapter {
    static Style = FileUploadStyle;

    static define(tagName: string) {
        define(`${tagName}-progress-bar`, FileUploadProgressBar);
        super.define(tagName);
    }

    static initStyle(): void {
        super.initStyle();
        FileUploadProgressBar.tagStyle(`
            position: absolute;
            bottom:0;
            width: 95%;
        `);
    }

    static tagStyle(style?: string | FileUploadStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | FileUploadStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | FileUploadStyleParam): void {
        super.addStyle(style);
    }

    uploadURL: string = './';
    _file: File;
    _url: string; // keep file url for uploaded file.
    xhr: XMLHttpRequest = new XMLHttpRequest();
    el: FileUploadChildElement = {
        file: null,
        image: null,
        upload: null,
        delete: null,
        progressBar: null
    };
    icon = {
        "delete": svg`
            <svg
                    viewBox="0 0 16 16"
                    style="width: 1em; height: 1em;"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg">
                <path
                    d="M4 4h1.031c.255.011.51.129.688.313L8 6.592l2.312-2.28c.266-.231.447-.306.688-.313h1v1c0 .286-.034.55-.25.75L9.469 8.031l2.25 2.25c.188.188.281.454.281.719v1h-1c-.265 0-.53-.093-.719-.281L8 9.438l-2.281 2.28A1.015 1.015 0 015 12H4v-1c0-.265.093-.53.281-.719l2.281-2.25-2.28-2.281A.909.909 0 014 5z"
                    style="line-height:normal;-inkscape-font-specification:'Andale Mono';text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none;stroke:#ffffff;stroke-opacity:1;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none"
                    color="#bebebe"
                    font-weight="400"
                    font-family="Andale Mono"
                    overflow="visible"
                    fill="#2e3436"
                    id="path2" />
            </svg>
        `,
        "upload": svg`
            <svg
                viewBox="0 0 16 16"
                style="width: 1em; height: 1em;"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <g color="#000" fill="#2e3436">
                    <path
                        id="path2"
                        style="marker:none;stroke:#ffffff;stroke-opacity:1;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none"
                        d="M 3 1 A 1 1 0 0 0 2 2 L 2 15 A 1 1 0 0 0 3 16 L 6 16 L 6 14 L 4 14 L 4 3 L 9.5859375 3 L 12 5.4140625 L 12 14 L 10 14 L 10 16 L 13 16 A 1 1 0 0 0 14 15 L 14 5 A 1 1 0 0 0 13.707031 4.2929688 L 10.707031 1.2929688 A 1 1 0 0 0 10 1 L 3 1 z M 8 6.5859375 L 5.2929688 9.2929688 C 5.1122188 9.4737187 5 9.723 5 10 L 5 11 L 6 11 C 6.277 11 6.5262813 10.887781 6.7070312 10.707031 L 7 10.414062 L 7 16 L 9 16 L 9 10.414062 L 9.2929688 10.707031 C 9.4737187 10.887781 9.723 11 10 11 L 11 11 L 11 10 C 11 9.723 10.887781 9.4737187 10.707031 9.2929688 L 8 6.5859375 z " />
                </g>
            </svg>
        `
    };

    constructor() {
        super();
        this.addStyle(aspectRatio('1'));
        this.el.progressBar = new FileUploadProgressBar();
        this.el.progressBar.classList.add('ProgressBar');
        this.render();
    }

    get file(): File {
        return this._file;
    }

    set file(file: File) {
        this._file = file;
        if (!file) { return };

        // Create image thumbnail
        let objectURL = window.URL.createObjectURL(file);
        this.url = objectURL;
        this.el['image'].addEventListener('load', () => {
            URL.revokeObjectURL(this.el['image'].src);
        });
    }

    get isUploaded(): boolean {
        // Must check this.file because sometime this.url keep preview file url.
        if (!this.file && this.url) { return true }
        else { return false }
    }

    get url() {
        return this._url;
    }

    set url(url) {
        this._url = url;
        this.render();
    }

    render() {
        render(this, html`
        <div el="file">
            <img el="image" src="${this.url}">
            <div class="button delete" el="delete" @click=${() => { this.delete() }}>
                ${this.icon['delete']}
            </div>
            <div class="button upload" el="upload" @click=${() => { this.send() }}>
                ${this.icon['upload']}
            </div>
        </div>
        ${this.el["progressBar"]}
        `);
        this.el['progressBar'].value = 0;

        this.el['file'] = this.querySelector('[el="file"]');
        this.el['image'] = this.querySelector('[el="image"]');
        this.el['delete'] = this.querySelector('[el="delete"]');
        this.el['upload'] = this.querySelector('[el="upload"]');

        if (this.isUploaded == true) {
            this.el['upload'].style.display = 'none';
            this.el['progressBar'].style.display = 'none';
        }
    }

    async send(method = "POST") {
        if (this.isUploaded) {
            console.log('File has been uploaded');
            return;
        }
        this.xhr.upload.addEventListener(
            "progress", (event) => { this.onUploadEvent(event) }
        );
        this.xhr.onreadystatechange = () => {
            if (this.xhr.readyState == 4) {
                if (this.xhr.status == 200) {
                    this.onUploadCompleted();
                } else {
                    this.on_HTTP_Error();
                }
            }
        };

        let formData = new FormData();
        formData.append('file', this.file);
        this.xhr.open(method, this.uploadURL);
        this.xhr.send(formData);
    }

    async delete() {
        if (this.url) {
            try {
                let response = await fetch(this.url, {
                    method: 'DELETE',
                });
                response = await response.json();
            }
            catch (err) {
                console.error(err);
            };
        };
        if (this.xhr.readyState >= 1 && this.xhr.readyState <= 3) {
            this.xhr.abort();
        };
        this.remove();
        this.dispatchEvent(new CustomEvent('delete'));
    }

    onUploadEvent(progressEvent: ProgressEvent) {
        if (progressEvent.lengthComputable) {
            let percent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            this.el['progressBar'].value = percent;
            let event = new CustomEvent('progress', {
                detail: { "progressEvent": progressEvent }
            });
            this.dispatchEvent(event);
        }
    }

    onUploadCompleted() {
        this.url = this.xhr.response;
        this.file = null;
        this.render();
        this.el['progressBar'].classList.remove('error');
        this.el['progressBar'].classList.add('completed');
        this.dispatchEvent(new Event('uploadCompleted'));
    }

    on_HTTP_Error() {
        this.el['progressBar'].value = null;
        this.el['progressBar'].classList.remove('completed');
        this.el['progressBar'].classList.add('error');
    }
}