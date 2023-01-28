
export function lazy (parent: JQuery<HTMLElement> | JQuery<Window>) {
  const top = parent.scrollTop() || 0
  const h = document.documentElement.clientHeight
  $('.lazy:visible').each(function () {
    const y = $(this).parents('.tr')[0].offsetTop
    if (y > top + h || y < top - 100) return
    $(this).attr('src', $(this).attr('data-src')!).removeClass('lazy')
  })
}