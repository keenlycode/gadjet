// Generated from coolors.co
import { addStyle } from "gadjet/src/style/add-style";
import { bgColor } from "gadjet/src/style/bg-color";
import { bgColorInt } from "gadjet/src/style/bg-color-int";

export const theme = {
    violet: '#7900FF',
    frost: '#6B9AC4',
    blueGreen: '#97D8C4',
    yellow: '#F4B942',
    light: '#EFF2F1',
    dark: '#3d3846',
}

export const color = {
    blue: '#3584e4',
    green: '#33d17a',
    yellow: '#f6d32d',
    orange: '#ff7800',
    red: '#e01b24',
    purple: '#9141ac',
    brown: '#986a44'
}

addStyle`
.bg-theme-violet {
    ${bgColor(theme.violet)}
}

.bg-theme-violet-int {
    ${bgColorInt({color: theme.violet})}
}

.bg-theme-frost {
    ${bgColor(theme.frost)}
}

.bg-theme-frost-int {
    ${bgColorInt({color: theme.frost})}
}

.bg-theme-blueGreen {
    ${bgColor(theme.blueGreen)}
}

.bg-theme-blueGreen-int {
    ${bgColorInt({color: theme.blueGreen})}
}

.bg-theme-yellow {
    ${bgColor(theme.yellow)}
}

.bg-theme-yellow-int {
    ${bgColorInt({color: theme.yellow})}
}

.bg-theme-light {
    ${bgColor(theme.light)}
}
.bg-theme-dark {
    ${bgColor(theme.dark)}
}
`;