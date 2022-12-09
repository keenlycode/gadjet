import { Tag } from 'gadjet/src/ui/tag/tag';

class BlockTitle extends Tag {};
BlockTitle.define('el-block-title');
BlockTitle.tagStyle(`
    margin-left: 1rem;
    margin-bottom: -1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
`);