import React from 'react';
import MyDate from './MyDate/MyDate';
import Card from '../../UI/Card/Card';
import './LogItem.css'

const LogItem = (props) => {


  const deleteHandler = () => {
    const isDel = window.confirm('are you sure you want to delete?')
    if(isDel) {
      props.onDelLog(props.index)
    }

  }

  return (    
  <Card className='item'>
   <MyDate date={props.date}/>
   {/* content of each log */}
      <div className="content">
        <h2 className="desc"> {props.desc} </h2>
        <div className="time"> {props.time}</div>
      </div>

      <div>
        <div onClick={deleteHandler} className='delete'>x</div>
      </div>
    </Card>)

};

export default LogItem;
