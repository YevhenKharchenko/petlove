const variablesStyles = '@import "/src/styles/_variables.scss"';
const breakpointsStyles = '@import "/src/styles/_breakpoints.scss"';
const colorsStyles = '@import "/src/styles/_colors.scss"';
const mixinsStyles = '@import "/src/styles/_mixins.scss"';

const styles = [variablesStyles, breakpointsStyles, colorsStyles, mixinsStyles];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
