
export function setRem({ baseSize = 18, designWidth = 375, scaleNum = 1 }: { baseSize?: number; designWidth?: number; scaleNum?: number; }): void {
    const scale = document.documentElement.clientWidth / designWidth; // 设计稿宽度为375px
    const fontSize = baseSize * Math.min(scale, scaleNum);

    const clampedFontSize = Math.max(14, fontSize);
    document.documentElement.style.fontSize = `${clampedFontSize}px`;
}

let resizeTimer: NodeJS.Timeout | null = null;
// 防抖版本的 setRem 函数
export function debounceSetRem({ baseSize = 18, designWidth = 375, scaleNum = 1, delay = 100 }: {
    baseSize?: number; designWidth?: number; delay?: number; scaleNum?: number;
}): void {
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => { setRem({ baseSize, designWidth, scaleNum }) }, delay);
}

