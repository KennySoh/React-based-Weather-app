import React from 'react';

import WeatherApp from '../../containers/WeatherApp/WeatherApp';
import TodoList from '../../containers/ActivityApp/TodoList';


const layout=(props)=>{
  let display
  if(props.toggleApp){
    display=<WeatherApp></WeatherApp>
  }else{
    display=<TodoList/>
  }

  return(
    <div>
      <button onClick={props.handleToggleApp} className="Layout">Change</button>
      <main>
        {display}
      </main>
    </div>
  )
};

export default layout;
