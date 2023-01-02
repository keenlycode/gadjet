import { Tag } from 'gadjet/src/ui/tag/tag';
import { theme } from '../color';
import '../global.d';

class BlockquoteTitle extends Tag {};
BlockquoteTitle.define('el-blockquote-title');
BlockquoteTitle.tagStyle({
    color: theme.blueGreen
});

BlockquoteTitle.tagStyle(`
    margin-left: 1rem;
    margin-bottom: -1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
`);

addStyle`
blockquote.fn-detail {
    margin-left: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}`;