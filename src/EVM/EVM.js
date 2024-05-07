import React from 'react';
import styles from './EVM.module.css';
import candidates from './EVM_Config.json';
import clikSound from './beep.mp3';

const EVM = () => {

  const [clickedbtnId, setClickedBtnId] = React.useState(null)
  const fnClick=(id)=>{
    setClickedBtnId(id)
    const audio = new Audio(clikSound);
    audio.play();
    // alert()
  }

  const resetbtnclicked=()=>{
    setClickedBtnId(null)
  }

  return (

    <div className={`${styles.EVM_CON}`}>
      
        <div className={`${styles.EVM}`}> 
          <div style={{margin:"20px"}}>
            <p style={{display:"inline-block", float:"left", margin:"10px"}}>Ready</p><span style={{backgroundColor: clickedbtnId? "black": "rgb(96, 240, 96)"}} className={`${styles.ReadyBulb}`}></span>
            <button onClick={resetbtnclicked} className={styles.resetbtn}>Reset</button>
          </div>
            <div>
              <table className={`${styles.table} table table-bordered table-info`} >
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Name Of the Candidate</th>
                    <th>Election Symbol</th>
                    <th>Bulb</th>
                    <th>Button</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    candidates.candidates.map((obj, ind)=>{
                      const isClicked = clickedbtnId === obj.id;
                      return <tr >
                        <td>{obj.id}</td>
                        <td>{obj.Name}</td>
                        <td><img src={obj.Symbol} alt='' className={`${styles.symbal}`} /></td>
                        <td><div style={{backgroundColor: isClicked? "red": "black"}} className={`${styles.bulb}`}></div></td>
                        <td><button onClick={()=>fnClick(obj.id)} className={`${styles.button}`}></button></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
        </div>
    </div>
  );
}

export default EVM;
