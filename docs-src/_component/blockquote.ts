import { theme } from '../color';

class BlockquoteTitle extends window.gadjet.Tag {};
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

window.gadjet.addStyle`
blockquote {
    border-left: 4px solid ${theme.blueGreen};
    margin: 0;
    margin-left: 1rem;
    padding: 0.2rem 1rem 0.2rem 0.8rem;
    ${window.gadjet.bgColor(theme.light)}
}
`;