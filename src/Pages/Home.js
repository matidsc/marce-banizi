import React from 'react'
import '../style/Home.css'
import imgHome from '../img/imgHome.jpeg'
import imgRandom from '../img/imgBack.jpg'

const Home = () => {
    var tops = [], lefts = []
    const imgsRandom = []
    for (let i = 0; i < 20; i++) {imgsRandom.push(i)}

    /*VALORES INICIALES*/
    var left = Math.floor((Math.random() * ((document.documentElement.scrollHeight - 50) - 50)))
    var top = Math.floor(Math.random() 
            * ((document.documentElement.scrollHeight
            - (document.documentElement.scrollHeight * 15) / 100) - 50))
            + (document.documentElement.scrollHeight * 15) / 100;
    
    tops.push(top)
    lefts.push(left)

    return (

        <main className='HomeWrapper' id='pageWrapper'>

            {imgsRandom.map((index) => {
                console.log('prueba'+tops.length)
                //CALCULAR COORDENADAS ALEATORIAS

                top     = Math.floor(Math.random() 
                        * ((document.documentElement.scrollHeight
                        - (document.documentElement.scrollHeight * 15) / 100) - 50))
                        + (document.documentElement.scrollHeight * 15) / 100;
                left = Math.floor((Math.random() * ((document.documentElement.scrollWidth - 50) - 50)));

                console.log('IMAGEN NUMERO: ' + tops.length)
                console.log('DIFERENCIA LEFT ' + (Math.abs(lefts[index] - left)));
                console.log('DIFERENCIA TOP ' + (Math.abs(tops[index] - top)));
                
                //VERIFICACIÓN DE COORDENADAS
                for (let i = 0; i < tops.length-1; i++) {

                    console.log('iteracion del loop:' +i)

                    if (((Math.abs(tops[i] - top) >= 50) && (Math.abs(lefts[i] - left)) >= 50)) {
                        console.log('LA DIFERENCIA ES MAYOR')
                        tops.push(Math.abs(tops[index]))
                        lefts.push(Math.abs(lefts[index]))
                    }
                    else{
                       tops.push(1)
                       lefts.push(1)
                       console.log('LA DIFERENCIA ES MENOR')

                    }
                }

                return <img alt={index} key={index} style={

                    {
                        position: 'absolute',
                        top: '' + tops[index] + 'px',
                        left: '' + tops[index] + 'px',
                        zIndex: '1'

                    }} width='50px' src={imgRandom} />

            })}
            
            <img src={imgHome} className='imgHome'></img>
        </main>
    )

}

export default Home