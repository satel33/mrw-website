export const enter = (e, data) => {
  e.target.style.backgroundColor = data?.backgroundColorHover
  return (e.target.style.color = data?.textColorHover)
}

export const leave = (e, data) => {
  if (data?.buttonType === 'outline') {
    e.target.style.backgroundColor = 'transparent'
    return (e.target.style.color = data?.textColor)
  }
  e.target.style.backgroundColor = data?.backgroundColor
  return (e.target.style.color = data?.textColor)
}
