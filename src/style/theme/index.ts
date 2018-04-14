import * as styledComponents from 'styled-components';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
    TestThemeInterface
>;

export interface TestThemeInterface {
    primaryColor: string;
}

export const theme = {
    primaryColor: '#e9e9b'
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
