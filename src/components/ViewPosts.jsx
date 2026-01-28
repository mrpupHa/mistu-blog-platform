import { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  SmilePlus,
  Copy,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";

function ViewPost() {
  const { postId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);

  const getPost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${postId}`,
      );
      setImg(response.data.image);
      setTitle(response.data.title);
      setDate(response.data.date);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setContent(response.data.content);
      setLikes(response.data.likes);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <div className="px-[120px] pt-[60px] ">
        <div className="w-full h-[600px] overflow-hidden rounded-2xl">
          {img && (
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover [object-position:center_40%]"
            />
          )}
        </div>
      </div>
      <div className="flex px-[120px] py-[60px] ">
        <div>
          <div className="pr-[48px]">
            <div>
              <div className="inline-flex bg-brand-green px-[12px] py-[4px] rounded-full">
                {category}
              </div>
              <div>{date}</div>
            </div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{content}</div>
            <div className="flex justify-between items-center bg-brown-200 rounded-2xl px-[24px] py-[16px] ">
              <div>
                <button className="inline-flex items-center bg-white rounded-full gap-[6px] px-[40px] py-[12px] border border-brown-400 cursor-pointer">
                  <SmilePlus />
                  {likes}
                </button>
              </div>
              <div>
                <button className="inline-flex items-center bg-white rounded-full gap-[6px] px-[40px] py-[12px] border border-brown-400 cursor-pointer">
                  <Copy />
                  <p>Copy Link</p>
                </button>
              </div>
              <div className="inline-flex">
                <Facebook className="social-icon" />
                <Linkedin />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-[24px] w-[300px] h-[400px] bg-brown-200 rounded-2xl shrink-0"></div>
      </div>
    </>
  );
}

export default ViewPost;
