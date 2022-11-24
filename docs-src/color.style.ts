import { addStyle } from 'gadjet/src/import';
import { bgColor, bgColorInt } from 'gadjet/src/style';
import { color, theme } from './color';

addStyle`
.bg-theme-violet {
    ${bgColor(theme.violet)}
}
.bg-theme-frost {
    ${bgColor(theme.frost)}
}
.bg-theme-blueGreen {
    ${bgColor(theme.blueGreen)}
}
.bg-theme-yellow {
    ${bgColor(theme.yellow)}
}
.bg-theme-light {
    ${bgColor(theme.light)}
}
.bg-theme-dark {
    ${bgColor(theme.dark)}
}

.bg-theme-violet-int {
    ${bgColorInt({color: theme.violet})}
}
.bg-theme-frost-int {
    ${bgColorInt({color: theme.frost})}
}
.bg-theme-blueGreen-int {
    ${bgColorInt({color: theme.blueGreen})}
}
.bg-theme-yellow-int {
    ${bgColorInt({color: theme.yellow})}
}
.bg-theme-light-int {
    ${bgColorInt({color: theme.light})}
}
.bg-theme-dark-int {
    ${bgColorInt({color: theme.dark})}
}

.bg-red {
    ${bgColor(color.red)}
}
.bg-green {
    ${bgColor(color.green)}
}
.bg-yellow {
    ${bgColor(color.yellow)}
}
.bg-orange {
    ${bgColor(color.orange)}
}
.bg-purple {
    ${bgColor(color.purple)}
}
.bg-brown {
    ${bgColor(color.brown)}
}

.bg-red-int {
    ${bgColorInt({color:color.red})}
}
.bg-green-int {
    ${bgColorInt({color: color.green})}
}
.bg-yellow-int {
    ${bgColorInt({color: color.yellow})}
}
.bg-orange-int {
    ${bgColorInt({color: color.orange})}
}
.bg-purple-int {
    ${bgColorInt({color: color.purple})}
}
.bg-brown-int {
    ${bgColorInt({color: color.brown})}
}
`