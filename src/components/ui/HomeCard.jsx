import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const HomeCard = ({ app }) => {
  return (
    <Link href={`/home/${app.id}`}>

      <div className="card bg-base-100  shadow-sm">
        <figure className="px-10 pt-10">
          <Image
            src={app.picture}
            alt={app.id}
            width={50}
            height={50}
            className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{app.name}</h2>
          <p>{app.goal}d ago</p>
          <div className='grid grid-cols-2 gap-4 font-semibold rounded-lg p-2'>
            {app.tags.map(
            (tag, index) => <div className='border-none rounded-full p-2 text-[#244D3F] bg-green-300' key={index}>
              {tag}
            </div>
          )}</div>
          <div className="card-actions">
            <button className="btn btn-primary rounded-full">{app.status}</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;