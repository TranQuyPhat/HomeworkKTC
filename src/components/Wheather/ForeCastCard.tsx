import React, { type JSX } from 'react'

type Props = {
  temp: number
  time: string
  icon?: JSX.Element // dùng icon động nếu có, hoặc dùng ảnh từ API
}
export default function ForeCastCard({ temp, time, icon }: Props) {
  return (
    <div className='flex justify-center flex-col items-center w-1/5 '>
            <div>
                {icon }
            </div>
              <div className='text-2xl py-2'>{temp}°</div>
        <div className='text-xm py-2'>{time}</div>

    </div>
  )
}