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
blockquote {
    border-left: 4px solid ${theme.blueGreen};
    margin: 0;
    margin-left: 1rem;
    padding: 0.2rem 1rem 0.2rem 0.8rem;
    ${bgColor(theme.light)}
}
`;