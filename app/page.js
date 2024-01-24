import React from 'react'

export default function Home() {
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl text-secondary">Model</a>
          <a className="btn btn-ghost text-xl text-secondary" href='/quiz'>Quiz</a>
        </div>
        <div className="navbar-end">
          <a className="btn text-primary">Sign in</a>
        </div>
      </div>

      <div className='p-8 bg-neutral'>
        <div className='bg-neutral border-2 border-secondary py-16'>
          <nav className='flex justify-around items-center'>
            <div className='flex space-x-4 font-semibold'>
              <h1 className='text-5xl text-primary'>A</h1>
              <h1 className='text-5xl text-secondary'>T</h1>
              <h1 className='text-5xl text-secondary'>O</h1>
              <h1 className='text-5xl text-primary'>M</h1>
              <h1 className='text-5xl text-secondary'>I</h1>
              <h1 className='text-5xl text-secondary'>C</h1>
              <h1 className='text-5xl text-secondary'>M</h1>
              <h1 className='text-5xl text-primary'>O</h1>
              <h1 className='text-5xl text-secondary'>D</h1>
              <h1 className='text-5xl text-secondary'>E</h1>
              <h1 className='text-5xl text-secondary'>L</h1>
              <h1 className='text-5xl text-primary'>S</h1>
            </div>
          </nav>

          <div className='flex justify-around items-center mt-5'>
            <div className='flex space-x-2'>
              <input type="text" placeholder="Search..." className="input input-bordered input-primary text-secondary w-full max-w-xs" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>

          <div className='flex justify-around items-center mt-10'>

            <div className="avatar">
              <div className="w-64 rounded">
                <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190545476332834886/atom.png?ex=65a230e0&is=658fbbe0&hm=6feb3d56423ffdd44fdf1b3ce99921b7185c3d1cfcf1ff9f1a8dd310efee6c60&" />
              </div>
            </div>

            <ul className='flex-cols font-semibold text-xl text-center'>
              <li><a href='/pages/John-Dalton' className='text-primary'>John Dalton</a></li>
              <li><a href='/pages/JJ-Thomson' className='text-secondary'>JJ Thomson</a></li>
              <li><a href='/pages/Ernest-Rutherford' className='text-primary'>Ernest Rutherford</a></li>
              <li><a href='/pages/Niels-Bohrv' className='text-secondary'>Niels Bohrv</a></li>
              <li><a href='/pages/Erwin-Schrodinger' className='text-primary'>Erwin Schrodinger</a></li>
            </ul>

            <div className="avatar">
              <div className="w-64 rounded">
                <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190545476689334292/atomic.png?ex=65a230e0&is=658fbbe0&hm=b216e11242221a883ae18e083ad1a23c4bd58bb736641480838f52a9fb554600&" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
