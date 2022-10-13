import axios from 'axios'
import { useState, useContext } from "react"
import DataContext from '../Data/DataContext'


const EditNotes = ({ setUpdate, }) => {
    const post = useContext(DataContext)
    const [, setPost] = useState([]);
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const apiURL = "http://localhost:8050/note"
    const handleCancelClick = () => {
        setUpdate(false)
    }

    function PostUpdate() {
        axios.put(`${apiURL}` + post.ID, {
            title: title,
            content: content

        })
            .then((response) => {
                setPost(response.data);
            })
        alert("แก้ไขบันทึกเรียบร้อย")
        window.location.reload();
    }



    return (

        <div className="fixed inset-0 z-50">

            <div className="flex h-screen justify-center items-center">

                <div className="bg-white py-5 px-10 border-4 border-white-500 rounded-xl background-image: url('')">

                    <div className="">

                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 ">หัวข้อ</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" class="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="กรุณากรอกหัวข้อ" required />
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 mt-4 ">เนื้อหา</label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} name="" id="" class="w-[500px] h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="กรุณากรอกเนื้อหา" required/>
                    </div>

                    <div className='flex justify-center'>

                        <button onClick={PostUpdate} className=" rounded px-4 py-2 text-white mt-5  bg-green-400 hover:bg-green-500">บันทึก</button>
                        <button onClick={handleCancelClick} className=" rounded px-4 py-2 text-white mt-5 ml-2  bg-red-400 hover:bg-red-500">ปิดหน้าต่าง</button>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default EditNotes

