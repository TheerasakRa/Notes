import axios from "axios"
import { useState, useEffect } from "react"
import Popup from "./components/Popup";
import PostNote from "./components/PostNote";

const apiURL = "http://localhost:8050/note"

function Notes() {

  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return "no post";


  return (
    <div>
      <div className="">
        <p className='flex justify-center text-4xl font-medium mt-5 text-white'>Notes </p>
        <Popup />
        <div className="flex justify-center mt-2">
          <input onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
            type="text" name="" id="" class="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="ค้นหาบันทึก" required />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2">
        {post.filter((e) => {
          if (searchTerm == "") {
            return e
          } else if (e.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return e
          }
        }).map(e => {
          return <PostNote ID={e.ID} title={e.title} content={e.content} date={e.UpdatedAt}/>

        })}
      </div>
    </div>
  );
}
export default Notes
