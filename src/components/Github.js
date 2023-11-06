import * as React from "react";

const Github = () => {
  return (
    <div className="flex flex-row gap-4 items-center mx-auto">
      <a
        href="https://github.com/aditirao7"
        className="transition duration-300 hover:-translate-y-2"
      >
        <img
          src="https://avatars.githubusercontent.com/u/57457307?v=4"
          className="rounded-full p-4 w-32 h-32"
        />
      </a>
      <img
        align="center"
        src="https://github-readme-stats.vercel.app/api?username=aditirao7&show_icons=true&theme=catppuccin_latte&hide_rank=true&include_all_commits=true"
        alt="my Github Stats"
      />
    </div>
  );
};

export default Github;
