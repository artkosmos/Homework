import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        const timerId = +setInterval(() => setDate(new Date()), 1000)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
      setTimerId(timerId)
    }

    const stop = () => {
      if (timerId) {
        clearInterval(timerId)
        setTimerId(undefined)
      }
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }
    // const stringTime = `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`
    //
    // const timeFormatter = new Intl.DateTimeFormat('ru', {hour: "2-digit", minute: "2-digit", second: "2-digit"})
    // const dateFormatter = new Intl.DateTimeFormat('ru', {day: "2-digit", month: "2-digit", year: "numeric"})
    // const monthFormatter = new Intl.DateTimeFormat('en-US', {month: "long"})
    // const dayFormatter = new Intl.DateTimeFormat('en-US', {weekday: "long"})
    //
    // const stringTime = timeFormatter.format(date) // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    // const stringDate = dateFormatter.format(date) // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    // // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    // const stringDay = dayFormatter.format(date) // пишут студенты
    // const stringMonth = monthFormatter.format(date) // пишут студенты

  const stringTime = date.toLocaleTimeString('ru-Ru') || <br/>
  const stringDate = date.toLocaleDateString('ru-Ru')|| <br/>

  const stringDay = new Intl.DateTimeFormat('en-Us', {weekday: "long"}).format(date) || <br/>
  const stringMonth = new Intl.DateTimeFormat('en-Us', {month: "long"}).format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringDate}</span>,{' '}
                            <span id={'hw9-date'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    className={s.button}
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    Start
                </SuperButton>
                <SuperButton
                    className={s.button}
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    Stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
