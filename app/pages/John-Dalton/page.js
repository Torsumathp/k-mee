import React from 'react'

function page() {
    return (
        <div className='p-8 bg-neutral'>
            <div className='bg-neutral border-2 border-secondary py-8'>
                <div className='ml-5 font-semibold text-secondary'>
                    <h1 className='ml-2 text-5xl text-primary'>John Dolton</h1>
                    <p className='ml-16 text-lg'>ดอลตันเป็นครูสอนวิทยาศาสตร์  คณิตศาสตร์ และนักปรัชญา ชาวอังกฤษ ได้เสนอแนวคิดเกี่ยวกับอะตอมที่เรียกว่าทฤษฎี</p>
                    <p className='ml-5 text-lg'>อะตอมของดอลตัน โดยที่มีใจความสำคัญว่า</p>
                </div>

                <div className='ml-10 font-semibold text-primary'>
                    <p className='text-lg'>1. สสารทุกชนิดประกอบด้วยอนุภาคที่เล็กที่สุด ซึ่งไม่สามารถแบ่งแยกต่อไปได้อีก เรียกว่า Atom</p>
                    <p className='text-lg'>2. อะตอมของธาตุชนิดเดียวกัน จะมีสมบัติเหมือนกันทุกประการ(เช่นมีมวลเท่ากัน) แต่ถ้าอะตอมต่างธาตุกันก็จะมีคุณสมบัติต่างกัน และมีสมบัติแตกต่างจากอะตอมของธาตุอื่น</p>
                    <p className='text-lg'>3. ไม่สามารถทำให้อะตอมสูญหายหรือเกิดใหม่ได้ (กฎทรงมวล Law of conservation mass)</p>
                    <p className='text-lg'>4. สารประกอบเกิดจากการรวมตัวทางเคมีระหว่างอะตอมของตั้งแต่สองชนิดขึ้นไป และจำนวนอะตอมของธาตุที่รวมตัวกันจะเป็นอัตราส่วนตัวเลขลงตัวน้อย ๆ (กฎสัดส่วนคงที่ Law of multipleproperties) โดย ดอลตัน ได้เสนอภาพของแบบจำลองอะตอมว่า “อะตอมมีลักษณะทรงกลมตัน มีขนาดเล็กมาก และไม่สามารถแบ่งแยกได้อีก”</p>
                </div>

                <div className='flex justify-around items-center px-96'>
                    <div className="w-32">
                        <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190567402115694682/t_1.webp?ex=65a2454c&is=658fd04c&hm=cd02471afc9eb306a13f35511a28e4198a55f03b59189b06835c2d7fa05512cf&" />
                    </div>

                    <div className="avatar">
                        <div className="w-64 rounded">
                            <img src="https://cdn.discordapp.com/attachments/1133045775128068179/1190567401696272434/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9weWZtQS9NQUYzdEhweWZtQS8xL3AucG5n.webp?ex=65a2454c&is=658fd04c&hm=33d597c7b897278a4308366428b685a93f003d6ff4a3c329e3b0dc5b43034056&" />
                        </div>
                    </div>
                </div>

                <div className='ml-5 font-semibold text-secondary'>
                    <p className='text-lg text-primary'>แต่ต่อมาได้มีการศึกษาเพิ่มและพบว่า</p>
                    <p className='text-lg'>1. อะตอมยังไม่ใช่สิ่งที่เล็กที่สุด เพราะอะตอมยังประกอบด้วย อนุภาคอิเล็กตรอน โปรตอน และนิวตรอน</p>
                    <p className='text-lg'>2. อะตอมของธาตุชนิดเดียวกันมีคุณสมบัติทางกายภาพไม่เหมือนกัน</p>
                </div>

                <div className='flex justify-between items-center px-8 mt-10'>
                    <a className="btn btn-outline btn-secondary" href='/'>back</a>
                    <a className="btn btn-outline btn-primary" href="/pages/JJ-Thomson">next</a>
                </div>

            </div>
        </div>
    )
}

export default page