
import { useEffect, useState } from 'react'
import  './App.css'
import ukraine from "./assets/ukraine.png"
import uk from './assets/united-kingdom.png'
import myPhoto from './assets/my_photo.png'
import tik from './assets/Tik.png'
import HiPeople from './assets/HiPeople.png'
import Uk from './Languages/Uk'
import Ukraine from './Languages/Ukraine'
function App() {

  const thisYear = new Date().getFullYear()

  function calculate_age() { 
    const dob = new Date(2000, 8, 21)
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}



const [lanuage, setLanuage] = useState("uk")


useEffect(() => {
  console.log(lanuage);
},[lanuage])



/*
setLanuage, uk, ukraine, calculate_age, myPhoto, tik, HiPeople, thisYear
*/


  return (
    <div>
      {lanuage === "uk" ?
       <Uk
       setLanuage={setLanuage}
       uk={uk}
       ukraine={ukraine}
       calculate_age={calculate_age}
       myPhoto={myPhoto}
       tik={tik}
       HiPeople={HiPeople}
       thisYear={thisYear}
       
       /> :
       <Ukraine
       setLanuage={setLanuage}
       uk={uk}
       ukraine={ukraine}
       calculate_age={calculate_age}
       myPhoto={myPhoto}
       tik={tik}
       HiPeople={HiPeople}
       thisYear={thisYear}
       
       /> 
    }
       
       
    </div>
  );
}

export default App;
