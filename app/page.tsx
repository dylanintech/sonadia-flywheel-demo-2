import Image from 'next/image'
import { Leaderboard } from 'flywheel-leaderboard';

export default function Home() {
  //data would be in JSON but i'm hardcoding arrays of objects here b/c you would be converting the json blobs into objects (as you always do) and passing them to the Leaderboards
  //you can have an arbitrary number of items in each leaderboard -- will be using 5 items for this demo!
  const leaderboard1Data = [
    {
      artist: "goland",
      days: 530,
      id: 1, 
    },
    {
      artist: "marci",
      days: 410,
      id: 2,
    },
    {
      artist: "0xx",
      days: 180,
      id: 3,
    },
    {
      artist: "fari",
      days: 245,
      id: 4,
    },
    {
      artist: "mangano",
      days: 500,
      id: 5,
    }
  ]

  const leaderboard2Data = [
    {
      artist: "goland",
      sales: 42,
      id: 1,
    },
    {
      artist: "marci",
      sales: 34,
      id: 2,
    },
    {
      artist: "0xx",
      sales: 14,
      id: 3,
    },
    {
      artist: "fari",
      sales: 22,
      id: 4,
    },
    {
      artist: "mangano",
      sales: 61,
      id: 5,
    }
  ]

  const leaderboard3Data = [
    {
      user: "jax",
      days: 13,
      id: 1,
    },
    {
      user: "jerome",
      days: 9,
      id: 2,
    },
    {
      user: "ben",
      days: 20,
      id: 3,
    },
    {
      user: "elon",
      days: 44,
      id: 4,
    },
    {
      user: "robert",
      days: 7,
      id: 5,
    }
  ]

  const leaderboard4Data = [
    {
      artist: "goland",
      drops: 27,
      id: 1,
    },
    {
      artist: "marci",
      drops: 23,
      id: 2,
    },
    {
      artist: "0xx",
      drops: 14,
      id: 3,
    },
    {
      artist: "fari",
      drops: 12,
      id: 4,
    },
    {
      artist: "mangano",
      drops: 43,
      id: 5,
    }
  ]

  const leaderboard5Data = [
    {
      user: "jax", //3
      spent: 12,
      id: 1,
    },
    {
      user: "jerome", //4
      spent: 4,
      id: 2,
    },
    {
      user: "ben", //2
      spent: 11,
      id: 3,
    },
    {
      user: "elon", //1
      spent: 17,
      id: 4,
    },
    {
      user: "robert", //5
      spent: 2,
      id: 5,
    }
  ]

  const leaderboard6Data = [ //most streamed songs in hours
    {
      song: "boogie",
      hours: 405,
      id: 1,
    }, 
    {
      song: "acrobat",
      hours: 256,
      id: 2,
    },
    {
      song: "jolly woods",
      hours: 129,
      id: 3,
    }, 
    {
      song: "rollin",
      hours: 5067,
      id: 4,
    }, 
    {
      song: "outcasts",
      hours: 87,
      id: 5,
    }
  ]
  return (
    // maybe change bg to sonadia brand later
    <main className="bg-[url('https://media.discordapp.net/attachments/993733319386730541/1116925999859384370/Screenshot_2023-06-09_at_10.04.42_PM.png?width=1620&height=1262')] bg-center bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-between p-2">
      <div className='flex flex-row items-center justify-between w-full'>
        <h1 className='text-white text-4xl font-mono'>sonadia flywheel demo!</h1>
        <a href='https://github.com/dylanintech' target='none' className='p-2 rounded-full bg-black'>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
      {/* structuring leaderboards in a pseudo-grid of 2 rows and 3 columns */}
      <div className='flex flex-col w-full gap-4 my-4'>
        <div className='flex flex-col md:flex-row w-full justify-evenly gap-2'>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white text-xl font-sans font-bold'>most popular artists (days streamed)</h1>
              <Leaderboard
              scoringMetric="days" //what you wanna rank by - must match the object prop name exactly (required)
              id="artist" //how you wanna id your items. useful for clarity. id values will be displayed on the leaderboard but have no title. (required)
              cell1='days' //the first cell you wanna have -- useful for displaying more properties about each item on the leaderboard. you can have up to 5 of these. (all are optional)
              items={leaderboard1Data} //the data you want to feed to the leaderboard, what you wanna sort. (required)
              theme='indigo' //the color of the text (only certain values allowed, see docs for more info: https://docs.myflywheel.app/) (optional -- defaults to purple)
              className='max-w-md shadow-md bg-black mt-1' //full control of the styling/props of the leaderboard card (optional -- defaults to max-w-md, bg-white, and shadow-md)
              />
          </div>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white text-xl font-sans font-bold'>artists with the most nft sales (no. of sales)</h1>
              <Leaderboard
              scoringMetric="sales"
              id="artist"
              cell1='sales'
              items={leaderboard2Data}
              theme='violet'
              className='max-w-md shadow-md bg-gradient-to-b from-[#EECDA3] to-[#EF629F] mt-1'
              />
          </div>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white text-xl font-sans font-bold'>most active users (days streaming)</h1>
              <Leaderboard
              scoringMetric="days"
              id="user"
              cell1='days'
              items={leaderboard3Data}
              theme='purple'
              className='max-w-md shadow-md bg-gradient-to-b from-[#C33764] to-[#1D2671] mt-1'
              />
          </div>
        </div>

        <div className='flex flex-col md:flex-row w-full gap-2 justify-evenly  '>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white text-xl font-sans font-bold'>artists with the most reward drops</h1>
              <Leaderboard
              scoringMetric="drops"
              id="artist"
              cell1='drops'
              items={leaderboard4Data}
              theme='fuchsia'
              className='max-w-md shadow-md mt-1'
              />
          </div>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white text-xl font-sans font-bold'>users with the most MATIC spent</h1>
              <Leaderboard
              scoringMetric="spent"
              id="user"
              cell1='spent'
              items={leaderboard5Data}
              theme='pink'
              className='max-w-md shadow-md bg-[#2C3E50] mt-1'
              />
          </div>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white text-xl font-sans font-bold'>most streamed songs</h1>
              <Leaderboard
              scoringMetric="hours"
              id="song"
              cell1='hours'
              items={leaderboard6Data}
              theme='rose'
              className='max-w-md shadow-md bg-gradient-to-tl from-[#EFEFBB] to-[#D4D3DD] mt-1 '
              />
          </div>
        </div>
      </div>
    </main>
  )
}
