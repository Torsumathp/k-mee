import React from 'react'

function page() {
  return (
    <div className='p-8 bg-neutral'>
      <div className='bg-neutral border-2 border-secondary py-8'>
        <div className='ml-5 font-semibold text-secondary'>
          <h1 className='ml-2 text-5xl'>JJ Thomson</h1>
          <p className='ml-5 text-lg'>ทอมสันเป็นนักวิทยาศาสตร์ชาวอังกฤษได้รวบรวมนำการศึกษาด้านต่าง ๆ ของผู้สนใจค้นคว้าในแต่ละสาขามารวมกันเป็นแบบ</p>
          <p className='ml-5 text-lg'>จำลองอะตอมใหม่ เพื่ออธิบายปรากฏการณ์ที่แบบจำลองอะตอมของดอลตันไม่สามารถอธิบายได้ การทดลองที่สำคัญ คือ</p>
        </div>

        <div className='ml-10 font-semibold'>
          <p className='text-lg'>1. หลอดรังสีแคโทดของ William Crookers</p>
          <p className='text-lg'>2. หลอดรังสีแคโทดของ Sir Joseph John Thomson</p>
          <p className='text-lg'>3. การหาค่าประจุของอิเล็กตรอนโดยวิธีเม็ดน้ำมันของ Robert Andrews Millikan</p>
          <p className='text-lg'>4. หลอดรังสีแคโทดของ Eugen Goldstrin</p>
        </div>

        <div className='flex justify-around items-center px-96'>
          <div className="avatar">
            <div className="w-64 rounded">
              <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190545476332834886/atom.png?ex=65a230e0&is=658fbbe0&hm=6feb3d56423ffdd44fdf1b3ce99921b7185c3d1cfcf1ff9f1a8dd310efee6c60&" />
            </div>
          </div>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-5 text-lg text-secondary'>หลอดรังสีแคโทดของ William Crookers</p>
          <p className='ml-16 text-lg'>จากปรากฏการณ์ธรรมชาติที่แสดงให้เห็นว่าแก๊สนำไฟฟ้าได้ คือ ปรากฏการณ์ฟ้าร้อง ฟ้าผ่า นักวิทยาศาสตร์จึงได้ทำการ</p>
          <p className='ml-5 text-lg'>ทดลองเพื่ออธิบายการนำไฟฟ้าของแก๊สพบว่า ที่ความดัน 1 บรรยากาศ (1 atm) อากาศจะไม่นำไฟฟ้า แต่ถ้าลดความดันลง และ</p>
          <p className='ml-5 text-lg'>เพิ่มความต่างศักย์ระหว่างขั้วมาก ๆ แก๊สจะนำไฟฟ้าได้ดี</p>
          <p className='ml-16 text-lg'>William Crookers ได้ประดิษฐ์อุปกรณ์เพื่อจำลองปรากฏการณ์ฟ้าร้อง ฟ้าผ่า ประกอบด้วยหลอดแก้วที่บรรจุแก๊สความ</p>
          <p className='ml-5 text-lg'>ดันต่ำ มีขั้วไฟฟ้าเป็นแผ่นโลหะ (Electrode) 2 ขั้ว ต่อเข้ากับเครื่องกำเนิดไฟฟ้าที่มีความต่างศักย์สูง (10,000 – 20,000 volte)</p>
          <p className='ml-5 text-lg'>แผ่นโลหะด้านไฟฟ้าลบเรียกว่า ขั้ว cathode แผ่นโลหะด้านไฟฟ้าบวกเรียกว่า ขั้ว anode และยังได้วางฉากเรืองแสง</p>
          <p className='ml-5 text-lg'>(ZnS ซิงค์ซัลไฟด์) ขนานไปตามแนวยาวของหลอด</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-5 text-lg text-secondary'>หลอดรังสีแคโทดของ William Crookers</p>
          <p className='ml-5 text-lg mt-5'>1. ที่ความดัน 1 บรรยากาศ ไม่เห็นการเปลี่ยนแปลงใด ๆ</p>
          <p className='ml-5 text-lg'>2. เมื่อลดความดันลง แก๊สภายในหลอดแก้วจะเรืองแสง</p>
          <p className='ml-5 text-lg'>3. เมื่อลดความดันลงมาก ๆ บริเวณ anode จะเรืองแสงมาก</p>
          <p className='ml-5 text-lg'>4. เมื่อนำ หมุนได้ไปไว้ระหว่างขั้ว anode และ cathode ใบพัดจะหมุนได้</p>
          <p className='ml-5 text-lg'>5. เมื่อนำฉากเรืองแสง ZnS ไว้ระหว่างขั้ว anode และ cathode ฉากด้านที่หันไปทางขั้ว cathode เรืองแสงและเกิดเงา</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-5 text-lg text-secondary'>หลอดรังสีแคโทดของ Sir Joseph John Thomson</p>
          <p className='ml-8 text-lg'>Sir Joseph John Thomson นักวิทยาศาสตร์ชาวอังกฤษ ได้ดัดแปลงหลอดรังสีแคโทด พบว่าเมื่อลดความดันลงจนเกือบเป็น</p>
          <p className='ml-5 text-lg'>สูญญากาศ จะมีจุดสว่างบนฉากเรืองแสง Thomson จึงตั้งสมมุติฐานว่า รังสี cathode เป็นอนุภาคที่มีประจุ ดังนั้นอนุภาคควร</p>
          <p className='ml-5 text-lg'>จะเบี่ยงเบนในสนามแม่เหล็กและสนามไฟฟ้า</p>
          <p className='ml-16 text-lg'>เมื่อนำสนามไฟฟ้าภายนอกมาล่อ จุดสว่างบนฉากเรืองแสงจะเบี่ยงเบนเข้าหาขั้วบวกเสมอ เพราะฉะนั้น Thomson จึง</p>
          <p className='ml-5 text-lg'>สรุปว่า รังสี cathode ประกอบด้วยอนุภาคลบที่เคลื่อนที่ออกจากขั้ว cathode ในลักษณะรังสี</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-5 text-lg text-secondary'>Thomson ได้ทำการทดลองต่อโดย</p>
          <p className='ml-5 text-lg'>1. เปลี่ยนแก๊สภายในหลอดรังสี cathode  โดยโลหะที่ทำขั้วยังคงเดิม พบว่าได้ผลการทดลองเช่นเดิม</p>
          <p className='ml-5 text-lg'>2. เปลี่ยนโลหะที่ใช้ทำขั้วเป็นโลหะชนิดต่าง ๆ แต่ใช้แก๊สชนิดเดิม พบว่าได้ผลการทดลองเช่นเดิม</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-16 text-lg text-secondary'>สรุปได้ว่าไม่ว่าจะบรรจุแก๊สชนิดใดหรือใช้โลหะชนิดใดมาทำขั้ว หลอดรังสี cathode  จะให้รังสี cathode  ที่เป็นอนุภาคลบเหมือนกัน</p>
          <p className='ml-16 text-lg'>Thomson ได้ทำการทดลองต่อโดยนำหลอดรังสี cathode  วางไว้ในสนามแม่เหล็กและสนามไฟฟ้าที่ตั้งฉากกั้น จาก</p>
          <p className='ml-5 text-lg'>นั้นค่อย ๆ เพิ่มอำนาจสนามแม่เหล็กจน รังสี cathode   ไม่มีการเบี่ยงเบนแสดงว่าความแรงของสนามไฟฟ้ามีค่าเท่ากับความแรง</p>
          <p className='ml-5 text-lg'>สนามแม่เหล็ก Thomson อาศัยค่าความแรงของสนามแม่เหล็กและความแรงของสนามไฟฟ้าที่กระทำต่ออนุภาคลบในรังสี</p>
          <p className='ml-5 text-lg'>cathode หาอัตราส่วนประจุต่อมวล(e/m) ของอนุภาคได้  e/m = 1.759 x 10<sup>8</sup>  คูลอมบ์ต่อกรัม</p>
        </div>

        <div className='ml-5 font-semibold text-secondary mt-16'>
          <p className='ml-16 text-lg'>Thomson  จึงสรุปว่า อนุภาคไฟฟ้าที่มีประจุลบเป็นองค์ประกอบของอะตอมของธาตุทุกชนิด และเรียกชื่ออนุภาคนี้ว่า  อิเล็กตรอน (Electron)</p>
          <p className='ml-16 text-lg'>การหาค่าประจุของอิเล็กตรอนโดยวิธีเม็ดน้ำมันของ Robert Andrews Millikan</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-5 text-lg'>นักวิทยาศาสตร์ชาวอเมริกัน ได้ทดลองหาค่าประจุของอิเล็กตรอนโดยวิธีเม็ดน้ำมัน (Oil-drop experiment) เมื่อพ่นละอองเม็ด</p>
          <p className='ml-5 text-lg'>น้ำมันเข้าไปหยดน้ำมันจะเคลื่อนที่จากบนลงล่างตามแรงดึงดูดของโลกแต่เมื่อฉาย X-ray จะทำให้อากาศภาย</p>
          <p className='ml-5 text-lg'>(ในแตกตัวเป็นอนุภาคบวกและลบไปเกาะบนหยดน้ำมันที่มีประจุลบเท่านั้น) ดังนั้นเมื่อใส่สนามไฟฟ้าเข้าไปหยดน้ำมันที่มีประจุลบเกาะอยู่จะ</p>
          <p className='ml-5 text-lg'>เคลื่อนที่ลงมาช้าลงเพราะขั้วบวกที่อยู่ด้านบนดึงดูดเอาไว้จากนั้นปรับสนามไฟฟ้าจนกระทั้งแรงดึงดูดจากสนามไฟฟ้า(ด้านบน)กับ</p>
          <p className='ml-5 text-lg'>แรงดึงดูดของโลกมีค่าเท่ากันหยดน้ำมันจะลอยนิ่งนั้นคือ</p>
        </div>

        <div className='ml-80 font-semibold text-secondary mt-16'>
          <p className='ml-5 text-lg'>จากสมการ F<sub>1</sub> = mg (1)</p>
          <p className='ml-28 text-lg'>เมื่อถ้า m = มวลของหยดน้ำมัน</p>
          <p className='ml-28 text-lg'>g = แรงดึงดูดของโลก</p>
          <p className='ml-28 text-lg'>F<sub>1</sub> = แรงดึงดูดของโลกที่กระทำต่อหยดน้ำมัน</p>
          <p className='ml-5 text-lg'>จากสมการ F<sub>2</sub> = Eq (2)</p>
          <p className='ml-20 text-lg'>เมื่อ q = ประจุบนหยดน้ำมัน</p>
          <p className='ml-28 text-lg'>E = สนามไฟฟ้า</p>
          <p className='ml-28 text-lg'>F<sub>2</sub>  =  แรงที่สนามไฟฟ้ากระทำต่อประจุบนหยดน้ำมัน</p>
          <p className='ml-5 text-lg'>เมื่อหยดน้ำมันลอยนิ่ง สมการที่ 1 = สมการที่ 2</p>
          <p className='ml-48 text-lg'>F<sub>1</sub> = F<sub>2</sub></p>
          <p className='ml-48 text-lg'>mg = Eq</p>
          <p className='ml-48 text-lg'>q = (mg) / E</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-16 text-lg'>ค่า m และ E หาได้จากเครื่องมือที่ใช้  Milikan พบว่าประจุบนเม็ดน้ำมันที่น้อยสุดว่ามีค่าเป็นเลขจำนวนเต็มคูณ</p>
          <p className='ml-5 text-lg'>ด้วย 1.602 x 10<sup>-19</sup>  คูลอมบ์ (coulomb) Milikan จึงนับค่าประจุไฟฟ้าของเม็ดน้ำมันที่น้อยสุดว่ามีค่า = 1 x 1.602 x 10<sup>-19</sup></p>
          <p className='ml-5 text-lg'>(ในแตกตัวเป็นอนุภาคบวกและลบไปเกาะบนหยดน้ำมันที่มีประจุลบเท่านั้น) ดังนั้นเมื่อใส่สนามไฟฟ้าเข้าไปหยดน้ำมันที่มีประจุลบเกาะอยู่จะ</p>
          <p className='ml-5 text-lg'>เคลื่อนที่ลงมาช้าลงเพราะขั้วบวกที่อยู่ด้านบนดึงดูดเอาไว้จากนั้นปรับสนามไฟฟ้าจนกระทั้งแรงดึงดูดจากสนามไฟฟ้า(ด้านบน)กับ</p>
          <p className='ml-5 text-lg'>แรงดึงดูดของโลกมีค่าเท่ากันหยดน้ำมันจะลอยนิ่งนั้นคือ</p>
        </div>

        <div className='ml-80 font-semibold text-secondary mt-16'>
          <p className='ml-5 text-lg'>การหาค่ามวลของอิเล็กตรอน</p>
          <p className='ml-16 text-lg'>เมื่อทราบค่าประจุไฟฟ้าของอิเล็กตรอนก็สามารถนำมาแทนค่าในสมการของ Thomson</p>
          <p className='ml-16 text-lg'>สมการของ Thomson e/m = 1.759 x10<sup>8</sup> coulomb / g</p>
          <p className='ml-16 text-lg'>แทนค่า e จาก Milikan e = 1.602 x 10<sup>-19</sup> coulomb</p>
          <p className='ml-16 text-lg'>จะได้มวลของ electron m = 9.11 x 10<sup>-28</sup> g</p>
        </div>

        <div className='ml-5 font-semibold text-primary mt-16'>
          <p className='ml-8 text-lg text-secondary'>หลอดรังสีแคโทดของ Eugen  Goldstein (การค้นพบ Proton)</p>
          <p className='ml-16 text-lg'>การที่อะตอมทุกชนิดมี electron เป็นองค์ประกอบแต่อะตอมมีคุณสมบัติเป็นกลางทางไฟฟ้าทำให้นักวิทยาศาสตร์เชื่อว่าจะต้องมีอนุภาคที่มี</p>
          <p className='ml-5 text-lg'>ประจุไฟฟ้าเป็นบวกเป็นองค์ประกอบในปี ค.ศ. 1889 (พ.ศ. /2429) Eugen Goldstrin นักฟิสิกส์ชาวเยอรมันได้ดัดแปลงหลอดรังสี cathode</p>
          <p className='ml-16 text-lg'>โดยเลื่อน cathode และ anode ที่เจาะรูมาไว้เกือบตรงกลางและมีฉากเรื่องแสงอยู่ที่ปลายทั้งสองข้างเมื่อผ่านกระแสไฟฟ้าศักดิ์สูงเข้าไปปรากฏ</p>
          <p className='ml-5 text-lg'>ว่ามีแสงสว่างเกิดขึ้นบนฉากเรื่องแสงทั้งสองตรงกับตำแหน่งที่เจาะรูไว้แสดงว่ามีรังสีจากขั้ว anode ไปขั้ว cathode ผ่านรูตรงกลางที่เจาะไว้กระทบกับ</p>
          <p className='ml-5 text-lg'>ฉากเรืองแสงรังสีนี้จะเกิดขึ้นพร้อมๆกับcathode ray เรียกรังสีที่พบใหม่ว่า positive ray หรือ anode ray หรือ canal ray</p>
          <p className='ml-16 text-lg'>เมื่อทดลองหลายครั้งโดยเปลี่ยนชนิดของ gas ในหลอดพบว่าอนุภาคที่มีประจุบวกเหล่านี้มีอัตราส่วนประจุต่อมวลไม่คงที่และจะขึ้นกับชนิดของ</p>
          <p className='ml-5 text-lg'>ประจุไฟฟ้าเป็นบวกเป็นองค์ประกอบในปี ค.ศ. 1889 (พ.ศ. /2429) Eugen Goldstrin นักฟิสิกส์ชาวเยอรมันได้ดัดแปลงหลอดรังสี cathode</p>
          <p className='ml-5 text-lg'>gas  ที่บรรจุในหลอดแต่ถ้าใช้ gas ชนิดเดิมแล้วเปลี่ยนชนิดขั้วโลหะที่ทำ anode พบว่าอัตราส่วนต่อประจุต่อมวลมีค่าคงเดิม</p>
          <p className='ml-16 text-lg'>Goldstien ได้สรุปผลการทดลองว่าอัตราส่วนประจุต่อมวลขึ้นอยู่กับชนิดของ gas (gas ต่างชนิดกันจะมีผลมวลต่างกัน)</p>
          <p className='ml-16 text-lg'>เมื่อใช้ Hydrogen gas จะได้อนุภาค H+ (g) มีค่าประจุต่อมวลมากที่สุดโดยที่อนุภาคบวกนี้มีค่าประจุเท่ากับ electron </p>
          <p className='ml-5 text-lg'>(ทำให้มวลของอนุภาคบวกดังกล่าวมีค่าต่ำสุด) จึงเรียกอนุภาคบวกหรือไอออนบวกจาก Hydogen gas ว่า Proton </p>
          <p className='ml-5 text-lg'>ซึ่งมาจากภาษากรีกว่า Proteinos ซึ่งมีความหมายเป็นสิ่งสำคัญสิ่งแรก(fist importance)</p>
          <p className='ml-16 text-lg'>โดย ทอมสัน ได้เสนอแบบจำลองอะตอมว่า “อะตอมมีลักษณะเป็นทรงกลมประกอบด้วยอนุภาคโปรตรอนที่มีประจุบวกและอิเล็กตรอนที่มีประจุลบ</p>
          <p className='ml-5 text-lg'>กระจายอยู่ทั่วไปอย่างสม่ำเสมออะตอมในสภาวะเป็นกลางจะมีประจุบวกเท่ากับประจุลบนอก”  </p>

        </div>

        <div className='flex justify-between items-center px-8 mt-10'>
          <a className="btn btn-outline btn-secondary" href='/pages/John-Dalton'>back</a>
          <a className="btn btn-outline btn-primary" href="/pages/Ernest-Rutherford">next</a>
        </div>

      </div>
    </div>
  )
}

export default page