function FormIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_119_1143)'>
        <path d='M12.5 11.6667H7.5V10H12.5V11.6667ZM17.5 5.83333V20H2.5V2.5C2.5 1.83696 2.76339 1.20107 3.23223 0.732233C3.70107 0.263392 4.33696 0 5 0L11.6667 0V5.83333H17.5ZM14.1667 15H5.83333V16.6667H14.1667V15ZM14.1667 8.33333H5.83333V13.3333H14.1667V8.33333ZM16.5233 2.845L14.655 0.976667C14.2826 0.612287 13.8299 0.340289 13.3333 0.1825V4.16667H17.3208C17.163 3.66938 16.8897 3.21649 16.5233 2.845Z' fill={color}/>
      </g>
      <defs>
        <clipPath id='clip0_119_1143'>
          <rect width={width} height={height} fill='white'/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default FormIcon