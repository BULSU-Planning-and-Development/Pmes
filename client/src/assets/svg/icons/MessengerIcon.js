function MessengerIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_118_2477)'>
        <path fillRule='evenodd' clipRule='evenodd' d='M10 0C4.4775 0 0 4.14583 0 9.25917C0 12.1733 1.45417 14.7725 3.72667 16.4692V20L7.13167 18.1317C8.04 18.3825 9.00333 18.5183 10 18.5183C15.5225 18.5183 20 14.3733 20 9.25917C20 4.14583 15.5225 0 10 0ZM10.9942 12.4692L8.4475 9.75333L3.47833 12.4692L8.94417 6.66667L11.5525 9.3825L16.46 6.66667L10.9942 12.4692Z' fill={color}/>
      </g>
      <defs>
        <clipPath id='clip0_118_2477'>
          <rect width={width} height={height} fill='white'/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default MessengerIcon