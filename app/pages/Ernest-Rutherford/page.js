import React from 'react'

function page() {
  return (
    <div className='p-8 bg-neutral'>
      <div className='bg-neutral border-2 border-secondary py-8'>
        <div className='ml-5 font-semibold text-secondary'>
          <h1 className='ml-2 text-5xl text-primary'>Ernest Rutherford</h1>
          <p className='ml-5 text-lg'>รัทเทอร์ฟอร์ดได้ศึกษาแบบจำลองอะตอมของทอมสัน  และเกิดความสงสัยว่าอะตอมจะมีโครงสร้างตามแบบจำลองของทอมสัน</p>
          <p className='ml-5 text-lg'>จริงหรือไม่  โดยตั้งสมมติฐานว่า</p>
          <p className='ml-5 text-lg'>“ถ้าอะตอมมีโครงสร้างตามแบบจำลองของทอมสันจริง  ดังนั้นเมื่อยิงอนุภาคแอลฟาซึ่งมีประจุไฟฟ้าเป็นบวกเข้าไปในอะตอม  </p>
          <p className='ml-5 text-lg'>แอลฟาทุกอนุภาคจะทะลุผ่านเป็นเส้นตรงทั้งหมดเนื่องจากอะตอมมีความหนาแน่นสม่ำเสมอเหมือนกันหมดทั้งอะตอม”</p>
          <p className='ml-5 text-lg'>เพื่อพิสูจน์สมมติฐานนี้  รัทเทอร์ฟอร์ดได้ทำการทดลองยิงอนุภาคแอลฟาไปยังแผ่นทองคำบาง ๆ โดยมีความหนาไม่เกิน 10<sup>-4</sup> cm</p>
          <p className='ml-5 text-lg'>โดยมีฉากสารเรืองแสงรองรับ  ปรากฏผลการทดลองดังนี้</p>
        </div>

        <div className='flex justify-around items-center px-96'>
          <div className="avatar">
            <div className="w-64 rounded">
              <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190567378610819112/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9NMGVFSS9NQUYzdExNMGVFSS8xL3AucG5n.webp?ex=65a24546&is=658fd046&hm=a51d98408469267bfd728247780313a6aae9809b50ed89402895785568d4dcb5&" />
            </div>
          </div>
        </div>

        <div className='ml-5 font-semibold text-primary'>
          <p className='ml-5 text-lg'>1. อนุภาคส่วนมากเคลื่อนที่ทะลุผ่านแผ่นทองคำเป็นเส้นตรง</p>
          <p className='ml-5 text-lg'>2. อนุภาคส่วนน้อยเบี่ยงเบนไปจากเส้นตรง</p>
          <p className='ml-5 text-lg'>3. อนุภาคส่วนน้อยมากสะท้อนกลับมาด้านหน้าของแผ่นทองคำ</p>
        </div>

        <div className='ml-5 font-semibold text-secondary mt-10'>
          <p className='ml-5 text-lg'>ถ้าแบบจำลองอะตอมของทอมสันถูกต้อง  เมื่อยิงอนุภาคแอลฟาไปยังแผ่นทองคำบาง ๆ นี้  อนุภาคแอลฟาควรพุ่งทะลุผ่านเป็น</p>
          <p className='ml-5 text-lg'>เส้นตรงทั้งหมดหรือเบี่ยงเบนเพียงเล็กน้อย  เพราะอนุภาคแอลฟามีประจุบวกจะเบี่ยงเบนเมื่อกระทบกับประจุบวกที่กระจายอยู่ใน</p>
          <p className='ml-5 text-lg'>อะตอม  แต่แบบจำลองอะตอมของทอมสันอธิบายผลการทดลองของรัทเทอร์ฟอร์ดไม่ได้</p>
          <p className='ml-5 text-lg'>โดย รัทเทอร์ฟอร์ด ได้เสนอภาพแบบจำลองอะตอมขึ้นมาใหม่ดังนี้</p>
          <p className='ml-5 text-lg'>“อะตอมประกอบด้วยนิวเคลียสที่มีโปรตอนรวมกันอยู่ตรงกลาง  นิวเคลียสมีขนาดเล็กแต่มีมวลมาก  และมีประจุบวก  ส่วน</p>
          <p className='ml-5 text-lg'>อิเล็กตรอนซึ่งมีประจุลบและมีมวลน้อยมากวิ่งอยู่รอบ ๆนิวเคลียส”</p>
        </div>

        <div className='flex justify-between items-center px-8 mt-10'>
          <a className="btn btn-outline btn-secondary" href='/pages/JJ-Thomson'>back</a>
          <a className="btn btn-outline btn-primary" href="/pages/Niels-Bohrv">next</a>
        </div>
      </div>
    </div>
  )
}

export default page