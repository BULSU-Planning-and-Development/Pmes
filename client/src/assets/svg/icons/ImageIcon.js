function ImageIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1974_35375)'>
        <path d='M14.568 0.575C16.77 1.749 20.506 5.458 22 7.456C20.714 6.556 17.956 5.799 15.909 6.277C16.131 4.809 15.724 1.743 14.568 0.575ZM22 11.5V24.5H2V0.5H10.409C15.266 0.5 13.744 8.5 13.744 8.5C16.753 7.755 22 8.081 22 11.5ZM7 13C7 13.828 7.672 14.5 8.501 14.5C9.328 14.5 10 13.828 10 13C10 12.172 9.328 11.5 8.501 11.5C7.672 11.5 7 12.172 7 13ZM17 19.5L13.5 13.5L11.407 16.468L10.097 15.5L7 19.5H17Z' fill={color}/>
      </g>

      <defs>
        <clipPath id='clip0_1974_35375'>
          <rect width='24' height='24' fill='white' transform='translate(0 0.5)'/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default ImageIcon