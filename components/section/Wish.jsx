import CommentForm from "../commentForm";
import { FcOk } from "react-icons/fc";

const Wish = ({ guest, posts }) => {
  return (
    <div className="w-full min-h-screen" id="wish">
      <CommentForm guest={guest} />
      <div className="w-full py-20 relative bg-[#191919] pl-3 lg:px-10 ">
        <h2 className="text-zinc-100">
          {posts.length + 1} <span className="italic">Post Comment</span>
        </h2>
        <ol className="border-l-2  border-gray-200 p-8 dark:border-zinc-400/60  ">
          <li className="w-full border-b pb-4 border-zinc-700">
            <div className="absolute w-3 h-3 left-1 lg:left-8 ">
              <FcOk size={20} />
            </div>
            <span className="mb-1 text-lg lg:text-xl font-normal leading-none text-zinc-700 dark:text-zinc-100">
              WebHouse.id
            </span>
            <p className="mb-2 p-2 text-sm leading-relaxed lg:text-md font-thin text-zinc-300 ">
              Happy wedding Rahmadi & Dinda, semoga menjadi keluarga yang
              Sakinah, Mawadah & Warohmah.. Amiin .. 🤲
            </p>
            <small className="text-zinc-500 p-2 ">10 Juni 2023, 9:14 pm</small>
          </li>
        </ol>

        {posts?.map((post, i) => (
          <ol
            key={i}
            className="border-l-2  border-gray-200 p-8 dark:border-zinc-400/60 "
          >
            <li className="w-full border-b pb-4 border-zinc-700">
              <div className="absolute w-3 h-3 left-1 lg:left-8  ">
                <FcOk size={20} />
              </div>
              <span className="mb-1 text-lg lg:text-xl font-normal  text-zinc-700 dark:text-zinc-100">
                {post.name}
              </span>

              <p className="mb-4 p-2 text-md leading-relaxed lg:text-md  text-zinc-300 ">
                {post.comments}
              </p>

              <small className="text-zinc-500 p-2">{post.date}</small>
            </li>

            {!post.reply ? (
              <span className="text-md italic dark:text-zinc-600/70">
                Belum ada balasan ...
              </span>
            ) : (
              <div className="bg-zinc-400/10 w-full h-auto pb-10 pt-2 px-2 shadow-md shadow-black-20 relative">
                <h1 className="mb-2  text-md italic dark:text-zinc-500">
                  Balasan...
                </h1>
                <div className="relative left-4">
                  <p className="text-zinc-300 text-md">{post.reply}</p>
                </div>
              </div>
            )}
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Wish;
