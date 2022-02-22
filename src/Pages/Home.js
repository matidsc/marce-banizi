import React from 'react'
import '../style/Home.css'
import imgHome from '../img/imgHome.jpeg'
import imgRandom from '../img/imgBack.jpg'

const Home = () => {
    var tops = [], lefts = []
    const imgsRandom = []
    for (let i = 0; i < 50; i++) {imgsRandom.push(i)}

    /*Valores iniciales*/
    var left = Math.floor((Math.random() * ((window.innerWidth - 50) - 50)))
    var top = Math.floor(Math.random() 
            * ((document.documentElement.scrollHeight
            - (document.documentElement.scrollHeight * 15) / 100) - 50))
            + (document.documentElement.scrollHeight * 15) / 100;
    
    tops.push(top)
    lefts.push(left)
    var leftDef, topDef

    return (

        <main className='HomeWrapper' id='pageWrapper'>

            {imgsRandom.map((index) => {

                top     = Math.floor(Math.random() 
                        * ((document.documentElement.scrollHeight
                        - (document.documentElement.scrollHeight * 15) / 100) - 50))
                        + (document.documentElement.scrollHeight * 15) / 100;
                
                left = Math.floor((Math.random() * ((document.documentElement.scrollWidth - 50) - 50)));
                console.log('IMAGEN NUMERO: ' + index)
                console.log('DIFERENCIA LEFT ' + (Math.abs(lefts[index] - left)));
                
                console.log('DIFERENCIA TOP ' + (Math.abs(tops[index] - top)));
                //CALCULAR COORDENADAS DE NUEVO COMPONENTE
                
                for (let i = 0; i < tops.length-1; i++) {
                    console.log('LARGO'+tops.length)
                    if (((Math.abs(tops[i] - top) >= 50) && (Math.abs(lefts[i] - left)) >= 50)) {

                        leftDef = Math.abs(lefts[index])
                        topDef = Math.abs(tops[index])
                        console.log(leftDef+'---'+ topDef)
                    }
                }

                tops.push(topDef)
                lefts.push(leftDef)

                return <img alt={index} key={index} style={

                    {
                        position: 'absolute',
                        top: '' + topDef + 'px',
                        left: '' + leftDef + 'px',
                        zIndex: '1'

                    }} width='50px' src={imgRandom} />

            })}
            <img src={imgHome} className='imgHome'></img>
        </main>
    )

}

export default Home