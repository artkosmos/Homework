import React, {useEffect, useState} from 'react';
import s from '../sidebar/Sidebar.module.css'

type OverLayPropsType = {
  callBack: () => void
}

export const OverLay = ({callBack}: OverLayPropsType) => {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMount(true)
    }, 80)
  }, [])

  return (
    <div className={`${s.background} ${isMount && s.visible}`} onClick={callBack}>

    </div>
  );
};
