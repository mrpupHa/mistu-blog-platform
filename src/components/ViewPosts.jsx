import { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import { SmilePlus, Copy } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import facebook from "../assets/images/facebook.png";
import linkedIn from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import authorImage from "../assets/images/tourist.jpg";

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
  const [author, setAuthor] = useState("");

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
      setAuthor(response.data.author);

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
      <div className="md:px-[120px] md:pt-[60px]">
        <div className="w-full h-[375px] md:h-[600px] overflow-hidden md:rounded-2xl">
          {img && (
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover [object-position:center_40%]"
            />
          )}
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-start md:gap-0 gap-[24px] px-[16px] pt-[24px] pb-[40px] md:px-[120px] md:py-[60px]">
        <div className="">
          <div className="flex flex-col md:pr-[48px] md:gap-[48px] gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <div className="inline-flex items-center gap-[16px]">
                <div className=" bg-brand-green px-[12px] py-[4px] rounded-full">
                  {category}
                </div>
                <div>{date && format(new Date(date), "dd MMMM yyyy")}</div>
              </div>
              <div className="md:text-headline-1 text-headline-3 text-brown-600">
                {title}
              </div>
            </div>
            <div>
              <div className="mt-4 mb-10">{description}</div>
              <div className="markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            <div className="flex flex-col p-[16px] m- md:flex-row w-full bg-brown-200 gap-[24px]">
              <div>
                <button className="flex items-center justify-center w-full h-[48px] gap-[8px] bg-white rounded-full border border-brown-400 cursor-pointer hover:bg-brown-200 active:bg-brown-300">
                  <SmilePlus />
                  {likes}
                </button>
              </div>
              <div className="flex items-center gap-[8px]">
                <button
                  className="inline-flex bg-white rounded-full gap-[6px] px-[40px] py-[12px] border border-brown-400 cursor-pointer hover:bg-brown-200 active:bg-brown-300"
                  onClick={() => {
                    console.log("CLICKED");
                    const url = window.location.href;
                    navigator.clipboard.writeText(url);
                    toast.success(
                      <div>
                        <p className="font-medium">Copied!</p>
                        <p className="text-sm text-gray-500">
                          This article link has been copied to your clipboard.
                        </p>
                      </div>,
                    );
                  }}
                >
                  <Copy className="text-brown-400wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww" />
                  <p>Copy Link</p>
                </button>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="facebook"
                >
                  <img src={facebook} className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/home?originalSubdomain=th"
                  target="_blank"
                  rel="linkedIn"
                >
                  <img src={linkedIn} className="social-icon" />
                </a>
                <a href="https://x.com/?lang=th" target="_blank" rel="twitter">
                  <img src={twitter} className="social-icon" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p>Comment</p>
              <textarea
                placeholder="What are your thoughts?"
                className="border pl-[16px] pt-[12px] pr-[4px] pb-[4px]"
              ></textarea>
              <div className="text-right">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="px-[40px] py-[12px] bg-brown-600 text-white rounded-full cursor-pointer">
                      Send
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-[420px] rounded-2xl px-8 py-10">
                    <AlertDialogCancel className="absolute right-4 top-4 border-none p-0 h-auto cursor-pointer">
                      ✕
                    </AlertDialogCancel>
                    <div className="flex flex-col items-center text-center gap-6">
                      <AlertDialogTitle className="text-2xl font-semibold">
                        Create an account to{" "}
                        <span>
                          <br></br>
                        </span>
                        continue
                      </AlertDialogTitle>
                      <AlertDialogAction className="bg-black text-white rounded-full px-8 py-3 hover:bg-black/90 cursor-pointer">
                        Create account
                      </AlertDialogAction>
                      <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <span className="text-black font-medium cursor-pointer hover:underline cursor-pointer">
                          Login
                        </span>
                      </p>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sticky top-[24px] md:w-[300px] w-full bg-brown-200 rounded-2xl shrink-0 gap-[20px] p-[24px]">
          <div className="inline-flex gap-[12px] flex-start  items-center">
            <div>
              <img
                src={authorImage}
                className="w-[44px] h-[44px] rounded-full"
              />
            </div>
            <div>
              <p className="text-body-3 text-brown-400">Author</p>
              <p className="text-headline-4 text-brown-500">{author}</p>
            </div>
          </div>
          <div className="border-b-1 border-b-brown-300 "></div>
          <div>
            <p className="text-body-1 text-brown-400">
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </p>
          </div>
          <div>
            <p className="text-body-1 text-brown-400">
              When I'm not writing, I spend time volunteering at my local animal
              shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPost;
