export const prevent = (e) => e.preventDefault();
export const enter = (e) => e.keyCode === 13 ? prevent(e) : null;  