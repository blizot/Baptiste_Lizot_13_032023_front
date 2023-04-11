//! DONE

function pageUpdate(pageNumber) {
  const integer = parseInt(pageNumber)
  return integer
}

function pageNext(pageCurrent, pageMax) {
  if (pageCurrent >= pageMax) return pageUpdate(pageMax)
  return pageUpdate(pageCurrent + 1)
}

function pagePrevious(pageCurrent) {
  if (pageCurrent <= 1) return pageUpdate(1)
  return pageUpdate(pageCurrent - 1)
}

function pageSeek(event, pageMax, pageCurrent) {
  const seekedPage = event.target.value
  if (seekedPage < 1 || seekedPage > pageMax || isNaN(seekedPage)) return pageCurrent
  return pageUpdate(seekedPage)
}

/**
 * page navigation actions hub
 * @param {String} action 
 * @param {Event} event only used for "seek" action
 * @param {Integer} pageCurrent
 * @param {Integer} pageMax
 */
function pageNavigationHub(action, event, pageCurrent, pageMax) {
  switch (action) {
    case 'next':
      return pageNext(pageCurrent, pageMax)
    case 'previous':
      return pagePrevious(pageCurrent)
    case 'seek':
      return pageSeek(event, pageMax, pageCurrent)
    case 'first':
      return pageUpdate(1)
    case 'last':
      return pageUpdate(pageMax)
    default:
      return
  }
}

export default pageNavigationHub
