
export function setRem(baseSize: number = 18, designWidth: number = 375): void {
    const scale = document.documentElement.clientWidth / designWidth; // 设计稿宽度为375px
    document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 1)}px`;
}

let resizeTimer: NodeJS.Timeout | null = null;
// 防抖版本的 setRem 函数
export function debounceSetRem(baseSize: number = 18, designWidth: number = 375, delay: number = 100): void {
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => { setRem(baseSize, designWidth) }, delay);
}

