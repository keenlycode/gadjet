import { Adapter } from 'gadjet/src/adapter';

class Paragraph extends Adapter {};
Paragraph.define('el-paragraph');
Paragraph.tagStyle(`
    width: 100%;
    max-width: 40rem;
`)