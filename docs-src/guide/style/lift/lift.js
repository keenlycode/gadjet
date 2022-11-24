import { addStyle } from 'gadjet/src/import.ts';
import { lift } from 'gadjet/src/style/lift';

addStyle`
.lift {
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid;
}
.lv-1 {
    ${lift({level: 1})}
}
.lv-2 {
    ${lift({level: 2})}
}
.lv-3 {
    ${lift({level: 3})}
}
.lv-4 {
    ${lift({level: 4})}
}
.lv-5 {
    ${lift({level: 5})}
}
`;