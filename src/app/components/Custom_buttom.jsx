import React from "react";
import './styles/Custom_Button.css';

// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

function Custom_Buttom({ person }) {

  // const router = useRouter();

  // const handleclick = (e) =>  {

  //   e.preventDefault();

  //   router.push({
  //     pathname: '/ProfileDetail',
  //     query:{id : person }
  //   });
  // };

  return (
    <div>
      <button
        onClick={handleclick}
        type="button"
        className="
        btn btn--pink btn--border-ridge
         "
      >
        PUSH!
      </button>
    </div>
  );
}

export default Custom_Buttom;


