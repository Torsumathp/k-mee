import React from 'react'

function page() {

    return (
        <>
            <div className='navbar bg-neutral'>
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl text-secondary pt-8 pl-8" href='/'>Home</a>
                </div>
            </div>
            <div className='p-16 bg-neutral'>

                <div className='bg-neutral py-16 text-primary border-2 border-primary'>
                    <h1 className='text-center text-7xl font-bold'>QR scan</h1>
                    <div className='flex justify-around items-center m-8'>
                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/416380745_1076955020121719_7142641306872548858_n.jpg?stp=dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHKUJLv803C2nkLF5CGK2nsUODkEEIR9BhQ4OQQQhH0GKDIHdcrBR15zkvu4K65u1OWr8yPFZmkREAlAwk9ojHN&_nc_ohc=ascpLuJ376AAX-iwdCc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSfSTEBrykCHCf03GfFDamgjxITBKImwPQfaQf-1Fxd4g&oe=65D88117' alt='John-Dalton' />
                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/416495564_898485981731064_780570069294036015_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHltGVOGgF0t0pJ56lZljUPXLke8Rb45NxcuR7xFvjk3LiMRR99U6LzXdakSiFkTz2wPXeGVaCNmDp1no23WM-2&_nc_ohc=Ynt_q1nFFjMAX8rv5GA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQBYidQGBIusEnKBvXVKj9m_CONwkabX3vtlNJ_6V7KNw&oe=65D87A85' alt='JJ-Thomson' />
                    </div>

                    <div className='flex justify-around items-center m-8 text-xl font-bold'>
                        <p>John Dalton</p>
                        <p>JJ Thomson</p>
                    </div>

                    <h1 className='text-center text-7xl font-bold mt-32'>Model</h1>
                    <div className='flex justify-around items-center'>
                        <img src='https://cdn.discordapp.com/attachments/1133045775128068179/1190545476689334292/atomic.png?ex=65bde060&is=65ab6b60&hm=45fc81bea95cbffeb4d6b47e58c1ca6b8345271436af778f5f21226a2fee097c&' alt='Ernest-Rutherford' className='w-[70rem]' />
                        <img src='https://cdn.discordapp.com/attachments/1133045775128068179/1190567378610819112/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9NMGVFSS9NQUYzdExNMGVFSS8xL3AucG5n.webp?ex=65bdf4c6&is=65ab7fc6&hm=91ad2168241168a32c1ed0c33824eabf2d242141537452c00c0867fc32fc067a&' alt='Niels-Bohrv' className='w-[25rem]' />
                        <img src='https://cdn.discordapp.com/attachments/1133045775128068179/1190567378929582142/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qbUhhVS9NQUYzdE1qbUhhVS8xL3AucG5n.webp?ex=65bdf4c6&is=65ab7fc6&hm=72ea6b1e9f7a11f3745f85db71785b7ea6edb2e5189a9cd2166b60a1c3d66139&' alt='Erwin-Schrodinger' className='w-[25rem]' />
                    </div>

                    <div className='flex justify-around items-center m-8 text-xl font-bold'>
                        <p>Ernest Rutherford</p>
                        <p>Niels Bohrv</p>
                        <p>Erwin Schrodinger</p>
                    </div>
                </div>



            </div>
        </>

    )
}

export default page