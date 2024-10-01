function AddIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_2013_5029)'>
        <path d='M7.9996 0.5C12.4151 0.5 16 4.0849 16 8.5004C16 12.9151 12.4151 16.5 7.9996 16.5C3.5849 16.5 0 12.9151 0 8.5004C0 4.0849 3.5849 0.5 7.9996 0.5ZM7.40185 7.90185H4.60115C4.26987 7.90185 4.001 8.17072 4.001 8.502C4.001 8.83328 4.26987 9.10215 4.60115 9.10215H7.40185V11.9029C7.40185 12.2341 7.67072 12.503 8.002 12.503C8.33328 12.503 8.60215 12.2341 8.60215 11.9029V9.10215H11.4029C11.7341 9.10215 12.003 8.83328 12.003 8.502C12.003 8.17072 11.7341 7.90185 11.4029 7.90185H8.60215V5.10115C8.60215 4.76987 8.33328 4.501 8.002 4.501C7.67072 4.501 7.40185 4.76987 7.40185 5.10115V7.90185Z' fill={color}/>
      </g>
      <defs>
        <clipPath id='clip0_2013_5029'>
          <rect width='16' height='16' fill='white' transform='translate(0 0.5)'/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default AddIcon