import React, { useState } from 'react'
import style from './Contact1.module.css'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdMail, MdLocationOn} from 'react-icons/md'
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Maps from './Maps';


const Contact1 = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [surName, setSurName] = useState('')
    const [message, setMessage] = useState('')

    const submit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setSurName('')
        setMessage('')
    }

    return (
        <div className={style.main}>
            <div className={style.inMain} >
                <div className={style.top} >
                    <Rotate top left cascade>
                    <div className={style.inTop} >
                        <div className={style.icon}><MdLocationOn/> </div>
                        <div className={style.infoTop} >
                            <h3>
                                Manzilimiz:
                            </h3>
                            <p>
                            Тошкент шаҳри, Рихсилий кўчаси, 9 уй
                            </p>
                        </div>
                    </div>
                    <div className={style.inTop} >
                        <div className={style.icon}> <FaPhoneAlt/> </div>
                        <div className={style.infoTop} >
                            <h3>
                                Telefon:
                            </h3>
                            <a href="tel://+998 71 207 03 78" rel="noreferrer" target="_blank">
                            +998 71 207 03 78
                            </a>
                        </div>
                    </div>
                    <div className={style.inTop} >
                        <div className={style.icon}><MdMail/> </div>
                        <div className={style.infoTop} >
                            <h3>
                                Email
                            </h3>
                            <a href="mailto:info@sbtsul.uz" rel="noreferrer" target="_blank">
                            info@sbtsul.uz
                            </a>
                        </div>
                    </div>
                    </Rotate>
                </div>
                <div className={style.flex} >
                    <div className={style.map}>
                        <Maps/>
                    </div>
                    <div className={style.inputDiv} >
                        <Flip left cascade>
                        <h2>
                           Biz bilan bog'lanish
                        </h2>
                        <form 
                            onSubmit={submit}>
                            <input 
                                type="text"
                                placeholder="Ismingiz"
                                name="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                />
                            <input 
                                    type="text"
                                    placeholder="Familiyangiz"
                                    name="site"
                                    value={surName}
                                    onChange={(e)=>setSurName(e.target.value)} />
                            <input 
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />

                            <textarea
                                name="message" 
                                value={message}
                                placeholder="Biz bilan bog'lanishdan maqsadingiz" 
                                onChange={(e)=>setMessage(e.target.value)} />
                            <button type="submit">Send Message</button>
                        </form>
                        </Flip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact1
