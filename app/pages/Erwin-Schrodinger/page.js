import React from 'react'

function page() {
    return (
        <div className='p-8 bg-neutral'>
            <div className='bg-neutral border-2 border-secondary py-8'>
                <div className='ml-5 font-semibold text-primary'>
                    <h1 className='ml-5 text-5xl'>Erwin Schrodinger</h1>
                    <p className='ml-5 text-lg text-secondary'>แบบจำลองอะตอมแบบกลุ่มหมอก</p>
                    <p className='ml-5 text-lg'>1. สสารทุกชนิดประกอบด้วยอนุภาคที่เล็กที่สุด ซึ่งไม่สามารถแบ่งแยกต่อไปได้อีก เรียกว่า Atom</p>
                    <p className='ml-5 text-lg'>2. อะตอมของธาตุชนิดเดียวกัน จะมีสมบัติเหมือนกันทุกประการ(เช่นมีมวลเท่ากัน) แต่ถ้าอะตอมต่างธาตุกันก็จะมีคุณสมบัติต่าง</p>
                    <p className='ml-5 text-lg'>กัน และมีสมบัติแตกต่างจากอะตอมของธาตุอื่น</p>
                    <p className='ml-5 text-lg'>3. ไม่สามารถทำให้อะตอมสูญหายหรือเกิดใหม่ได้ (กฎทรงมวล Law of conservation mass)</p>
                    <p className='ml-5 text-lg'>4. สารประกอบเกิดจากการรวมตัวทางเคมีระหว่างอะตอมของตั้งแต่สองชนิดขึ้นไป และจำนวนอะตอมของธาตุที่รวมตัวกันจะเป็น</p>
                    <p className='ml-5 text-lg'>อัตราส่วนตัวเลขลงตัวน้อย ๆ (กฎสัดส่วนคงที่ Law of multipleproperties)</p>
                    <p className='ml-5 text-lg'>โดย ดอลตัน ได้เสนอภาพของแบบจำลองอะตอมว่า “อะตอมมีลักษณะทรงกลมตัน มีขนาดเล็กมาก และไม่สามารถแบ่งแยกได้อีก”</p>
                </div>

                <div className='flex justify-around items-center px-96'>
                    <div className="avatar">
                        <div className="w-64 rounded">
                            <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190567378929582142/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qbUhhVS9NQUYzdE1qbUhhVS8xL3AucG5n.webp?ex=65bdf4c6&is=65ab7fc6&hm=72ea6b1e9f7a11f3745f85db71785b7ea6edb2e5189a9cd2166b60a1c3d66139&" />
                        </div>
                    </div>
                </div>

                <div className='ml-5 font-semibold text-secondary'>
                    <p className='ml-5 text-lg text-primary'>แต่ต่อมาได้มีการศึกษาเพิ่มและพบว่า</p>
                    <p className='ml-5 text-lg'>1. อะตอมยังไม่ใช่สิ่งที่เล็กที่สุด เพราะอะตอมยังประกอบด้วย อนุภาคอิเล็กตรอน โปรตอน และนิวตรอน</p>
                    <p className='ml-5 text-lg'>2. อะตอมของธาตุชนิดเดียวกันมีคุณสมบัติทางกายภาพไม่เหมือนกัน</p>
                </div>

                <div className='flex justify-between items-center px-8 mt-10'>
                    <a className="btn btn-outline btn-secondary" href='/pages/Niels-Bohrv'>back</a>
                    <a className="btn btn-outline btn-primary" href="/quiz">quiz</a>
                </div>
            </div>
        </div>
    )
}

export default page