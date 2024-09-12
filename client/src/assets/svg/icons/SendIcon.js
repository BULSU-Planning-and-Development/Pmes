function SendIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_2229_20683)'>
        <path d='M13.9096 10.3959L2.92175 11.0504C2.66014 11.0504 2.52933 11.1814 2.52933 11.3123L0.959641 16.6798C0.698026 17.3343 0.824981 18.2421 1.48287 18.7671C2.00831 19.1588 2.92175 19.2505 3.44498 19.0362L18.0954 11.705C18.8802 11.3123 19.2727 10.5268 19.1419 9.7413C19.0111 9.21764 18.6186 8.69398 18.0954 8.43216L3.44498 0.97003C2.79094 0.750478 2.0061 0.839115 1.48287 1.23186C0.828833 1.75552 0.698026 2.541 0.959641 3.32649L2.52933 8.69398C2.52933 8.8249 2.79094 8.95581 2.92175 8.95581L13.9096 9.61038C13.9096 9.61038 14.302 9.61038 14.302 10.0031C14.302 10.3959 13.9096 10.3959 13.9096 10.3959Z' fill={color}/>
      </g>
      <defs>
        <clipPath id='clip0_2229_20683'>
          <rect width='20' height='20' fill={color}/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default SendIcon