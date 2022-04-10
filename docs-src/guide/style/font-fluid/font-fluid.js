import { fontFluid } from "gadjet/src/style/font-fluid";
import { addStyle } from "gadjet/src/style";

addStyle`
.font-fluid {
    ${fontFluid({
        fontSizeMin: 14,
        fontSizeMax: 50
    })}
}
`