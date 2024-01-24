import React from 'react'

function page() {
  return (
    <div className='p-8 bg-neutral'>
      <div className='bg-neutral border-2 border-secondary py-8'>
        <div className='ml-5 font-semibold text-secondary'>
          <h1 className='ml-5 text-5xl text-primary'>Niels Bohrv</h1>
          <p className='ml-16 text-lg'>นักวิทยาศาสตร์ได้พยายามศึกษาเรื่องเกี่ยวกับอะตอม โดยได้เสนอแบบจำลองอะตอมจากการทดลองที่เกิดขึ้น ซึ่งแบบจำลอง</p>
          <p className='ml-5 text-lg'>ของรัทเธอร์ฟอร์ดได้รับการยอมรับแต่ก็ยังไม่สมบูรณ์ จึงมีผู้พยายามหาคำอธิบายเพิ่มเติม โดยในปี 1913 นีล โบร์ (Niels Bohr)</p>
          <p className='ml-5 text-lg'>นักวิทยาศาสตร์ชาวเดนมาร์ก ได้ทำการศึกษาการเกิดสเปกตรัมของก๊าซไฮโดรเจน และได้สร้างแบบจำลองอะตอมเพื่อใช้อธิบาย</p>
          <p className='ml-5 text-lg'>ลักษณะการเคลื่อนที่ของอิเล็กตรอนรอบ ๆ นิวเคลียสเป็นวงคล้ายกับวงโคจรของดาวเคราะห์รอบดวงอาทิตย์ แต่ละวงจะมีระดับ</p>
          <p className='ml-5 text-lg'>พลังงานเฉพาะตัว และเรียกระดับพลังงานของอิเล็กตรอนที่อยู่ใกล้นิวเคลียสที่สุด ซึ่งมีระดับพลังงานต่ำที่สุด เรียกว่า ระดับ</p>
          <p className='ml-5 text-lg'>พลังงาน K และเรียกระดับพลังงานถัดออกมาว่า ระดับพลังงาน L,M,N,… ตามลำดับ</p>
        </div>

        <div className='flex justify-around items-center px-96'>
          <div className="avatar">
            <div className="w-64 rounded">
              <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190567378610819112/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9NMGVFSS9NQUYzdExNMGVFSS8xL3AucG5n.webp?ex=65bdf4c6&is=65ab7fc6&hm=91ad2168241168a32c1ed0c33824eabf2d242141537452c00c0867fc32fc067a&" />
            </div>
          </div>
        </div>

        <div className='ml-5 font-semibold text-secondary'>
          <p className='ml-5 text-lg'>วิธีทำการทดลอง</p>
          <p className='ml-16 text-lg'>เขาศึกษาสเปกตรัมการเปล่งแสงของธาตุ โดยบรรจุแก๊สไฮโดรเจนในหลอดปล่อยประจุ จากนั้นให้พลังงานเข้าไป</p>
          <p className='ml-5 text-lg'>สเปกตรัม หมายถึง อนุกรมของแถบสีหรือเส้นที่ได้จากการผ่านพลังงานรังสีเข้าไปในสเปกโตรสโคป ซึ่งทำให้พลังงานรังสีแยกออกเป็นแถบหรือ</p>
          <p className='ml-5 text-lg'>เป็นเส้น ที่มีความยาวคลื่นต่างๆเรียงลำดับกันไป</p>
          <p className='ml-5 text-lg'>ผลการทดลอง</p>
          <p className='ml-16 text-lg'>อิเล็กตรอนเคลื่อนจากขั้วบวกไปขั้วลบชนกับแก๊สไฮโดรเจน จากนั้นเปล่งแสงออกมาผ่านปริซึมทำให้เราเห็นเป็นเส้นสเปกตรัมสีต่าง ๆ</p>
          <p className='ml-5 text-lg'>ฉากรับภาพ</p>
          <p className='ml-5 text-lg'>สรุปผลการทดลอง</p>
          <p className='ml-16 text-lg'>การเปล่งแสงของธาตุไฮโดรเจน เกิดจากอิเล็กตรอนเปลี่ยนระดับพลังงานจากวงโคจรสูงไปสู่วงโคจรต่ำ พร้อมทั้งคายพลังงานในรูปแสงสีต่างๆในระดับ</p>
          <p className='ml-5 text-lg'>พลังงานแต่ละชั้น โดย โบร์ ได้เสนอภาพแบบจำลองอะตอมขึ้นมาใหม่ดังนี้</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-10'>
          <p className='ml-5 text-lg'>“ 1. อิเล็กตรอนจะอยู่กันเป็นชั้นๆ แต่ละชั้นนั่นคือ ระดับพลังงาน</p>
          <p className='ml-5 text-lg'>2. อิเล็กตรอนที่อยู่ในระดับพลังงานวงนอกสุดเรียกว่า เวเลนซ์อิเล็กตรอน (Valent electron) จะเป็นอิเล็กตรอนที่เกิดปฏิกิริยาต่าง ๆ ได้</p>
          <p className='ml-5 text-lg'>3. อิเล็กตรอนที่อยู่ในระดับพลังงานวงในอยู่ใกล้นิวเคลียส จะเสถียรมากเพราะประจุบวกจาก นิวเคลียสดึงดูดไว้อย่างดี ส่วนอิเลคตรอนระดับพลังงานวง</p>
          <p className='ml-5 text-lg'>นอจะไม่เสถียรเพราะนิวเคลียสส่งแรงไป ดึงดูดได้น้อยมาก</p>
          <p className='ml-5 text-lg'>4. ระดับการพลังงานวงในจะอยู่ห่างกันมาก ส่วนระดับพลังงานวงนอกจะอยู่ชิดกันมาก</p>
          <p className='ml-5 text-lg'>5.แบบจำลองอะตอมของโบร์ต่างไปจากของรัทเทอร์ฟอร์ด คือ ลักษณะคล้ายระบบสุริยะ โดยนิวเคลียสตรงกลางและอิเล็กตรอนจะวิ่งรอบๆ</p>
          <p className='ml-5 text-lg'>นิวเคลียสเป็นระดับพลังงาน ”</p>
        </div>

        <div className='flex justify-between items-center px-8 mt-10'>
          <a className="btn btn-outline btn-secondary" href='/pages/Ernest-Rutherford'>back</a>
          <a className="btn btn-outline btn-primary" href="/pages/Erwin-Schrodinger">next</a>
        </div>
      </div>
    </div>
  )
}

export default page