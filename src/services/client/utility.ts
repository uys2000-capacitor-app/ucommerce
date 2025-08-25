export const isVisibleInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export const isVisibleInViewportListener = (el: HTMLElement, callback: () => void) =>
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
      }
    })
  }).observe(el)
