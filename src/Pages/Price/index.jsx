

import { useState, useEffect } from 'react'

import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import './color.css'

function artist() {

    const [items, setItems] = useState(null)
    useEffect(() => {

        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Car/')
            .then(response => response.json())
            .then(data => console.log(setItems(data)))

    }, [])
    return (
        <>
            <Layout>
                
                Home

                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        items?.map(item => (
                            <Card key={item.id} data={item} />
                            ))
                        }

                </div>
         
        
                        </Layout>
        </>
    )
}
export default artist