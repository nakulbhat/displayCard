import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const InteractionButtons = () => {
  return (
    <div className="flex my-5 justify-evenly">
      <button className="bg-[#2F3337] border-[#2F3337] rounded-lg p-2 m-2 text-white w-[45%] hover:bg-white hover:border-[#2F3337] border-1 hover:text-[#2F3337] hover:[&>*]:fill-[#2F3337] transition">
        <AiFillGithub className="inline mr-2" />
        GitHub
      </button>
      <button className="bg-[#2F80ED] border-[#2F80ED] rounded-lg p-2 m-2 text-white w-[45%] hover:bg-white hover:border-[#2F80ED] border-1 hover:text-[#2F80ED] hover:[&>*]:fill-[#2F80ED] transition">
        <AiFillLinkedin className="inline mr-2 " />
        Linkedin
      </button>
    </div>
  );
};

export default InteractionButtons;
