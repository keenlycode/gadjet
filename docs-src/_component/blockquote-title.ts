import { Tag } from 'gadjet/src/ui/tag/tag';
import { theme } from '../color';

class BlockquoteTitle extends Tag {};
BlockquoteTitle.define('el-blockquote-title');
BlockquoteTitle.tagStyle(`
    margin-left: 1rem;
    margin-bottom: -1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
`);
BlockquoteTitle.tagStyle({
    color: theme.blueGreen
});

addStyle`
blockquote.fn-detail {
    margin-left: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}`;