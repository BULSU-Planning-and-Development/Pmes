function ChevronLeftIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1882_14003)'>
        <path d='M-1 11H13V9.33333H-1V11ZM-1 6.83333H13V5.16667H-1V6.83333ZM-1 1V2.66667H13V1H-1Z' fill={color}/>
      </g>
      <defs>
        <clipPath id='clip0_1882_14003'>
          <rect width='12' height='12' fill={color}/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default ChevronLeftIcon