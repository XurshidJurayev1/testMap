import React from 'react'
import style from './Home2.module.css'

const Home2 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
                <h2>
                    Stanford's Response to 
                </h2>
                <p>
                    Stanford is implementing a phased recovery of university    operations. We are currently in <a href="/" target='_blank' >Stage 2</a> of the restart process.
                </p>
                <div className={style.btn} >
                    <div></div>
                    <a href="/">More about Standfor's response to  COVID-19</a>
                </div>
            </div>
        </div>
    )
}

export default Home2
