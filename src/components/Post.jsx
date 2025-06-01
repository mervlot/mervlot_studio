import { Comment, Like, Share, Save } from "../assets/svgs/Svg";

const Post = ({ img, usrImg, username, content, date }) => {
  return (
    <>
      <div className="h-full w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="border max-w-screen-md bg-gray-100 dark:bg-gray-900 mt-6 rounded-2xl p-4">
          <div className="flex items-center	justify-between">
            <div className="gap-3.5	flex items-center ">
              <img
                src={usrImg}
                className="object-cover bg-yellow-500 rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <b className="mb-2 capitalize">{username}</b>
                <time datetime="06-08-21" className="text-gray-400 text-xs">
                  {date}
                </time>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-full h-3.5 flex	items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="34px"
                fill="#92929D"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
          </div>
          <div className="whitespace-pre-wrap mt-7">{content}</div>
          <div className="mt-5 flex gap-2 justify-center border-b-white pb-4 flex-wrap	">
            <img
              src={img}
              className="  bg-red-500 rounded-2xl w-10 object-cover  flex-auto"
              alt="photo"
            />
          </div>
          <div className=" h-16 border-b-white  flex items-center justify-around	">
            <div className="flex items-center	gap-3	">
              <Comment />
              <div className="text-sm	">10 Comments</div>
            </div>
            <div className="flex items-center	gap-3">
              <Like />
              <div className="text-sm">5 Likes</div>
            </div>
            <div className="flex items-center	gap-3">
              <Share />
              <div className="text-sm">Share</div>
            </div>
            <div className="flex items-center w	gap-3">
              <Save />
              <div className=" text-sm">Save</div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <img
              src=""
              className="bg-yellow-500 rounded-full w-10 h-10 object-cover border"
            />
            <div className="flex items-center	justify-between	 bg-gray-50 h-11 w-11/12 border rounded-2xl	 overflow-hidden px-4 ">
              <input
                type="text"
                className="h-full w-full bg-gray-50 outline-none "
                placeholder="Write your comment..."
                name="comment"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
