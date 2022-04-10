import {addStyle, aspectRatio} from 'gadjet/src/style';

addStyle`
.aspectRatio-4-3 {
    ${aspectRatio('4/3')}
}
.aspectRatio-16-9 {
    ${aspectRatio('16/9')}
}
.aspectRatio-1-1 {
    ${aspectRatio('1')}
}
.aspectRatio-21-9 {
    ${aspectRatio('21/9')}
}
`;