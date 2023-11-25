// import  { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, seData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/mrfahid')
  //   .then(response => response.json())
  //   .then(data => {
  //     seData(data)
  //   },[])
  // })
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex items-center justify-center flex-col gap-5 mt-4">
        <img
          src={data.avatar_url}
          alt="GITHUB PROFILE"
          width={300}
          className=" rounded-full"
        />
        {data.name}
        <br />
        Github followers: {data.followers}
      </div>
    </div>
  );
}

export default GitHub;

// Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/mrfahid");
  const data = await response.json();
  return data;
};
