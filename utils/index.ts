export function debounce<T extends (any) => void>(fun: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>) {
        
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}
