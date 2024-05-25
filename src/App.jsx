import avatar from "/images/avatar.jpg"
import dog1 from "/images/dog-image-1.jpg"
import dog2 from "/images/dog-image-2.jpg"
import dog3 from "/images/dog-image-3.jpg"

export default function App() {
  return (
    <main className="min-h-screen">
      <div className="absolute sm:w-1/4 w-1/2 -z-10 top-0 h-full bg-LightViolet rounded-b-full -translate-x-20">
        <p className=""></p>
      </div>
      <div className="absolute sm:w-1/4 w-1/2 -z-10 bottom-0 right-0 h-full bg-gray-200 translate-x-20 rounded-t-full">
        <p className=""></p>
      </div>
      <section className="max-w-4xl mx-auto mt-20">
        <article className="flex flex-col sm:flex-row gap-4 sm:gap-20 items-center justify-center p-10 sm:p-0">
          {/* app */}
          <div className="sm:w-1/2 p-2 flex flex-col bg-white border-2 rounded-xl">
            {/* header */}
            <div className="w-full flex flex-col gap-2 bg-gradient-to-l from-LightMagenta to-LightViolet rounded-t-xl">
              <p className="w-1/2 mx-auto bg-white h-8 rounded-b-full"></p>
              <div className="flex flex-row items-center justify-between gap-2">
                <div className="flex flex-row gap-1 items-center ml-4">
                  <span class="material-symbols-outlined text-white">
                    arrow_back_ios
                  </span>

                  <img src={avatar} alt="" className="w-10 h-10 p-1 bg-white rounded-full" />
                  <span>
                    <h1 className="font-semibold text-xl text-white">Samuel Green</h1>
                    <p className="text-gray-700">Available to Walk</p>
                  </span>
                </div>
                <span class="material-symbols-outlined text-white">
                  more_vert
                </span>
              </div>
            </div>
            {/* show mess */}
            <div className="flex flex-col gap-2 bg-LightGrayishViolet p-2">
              <p className="mess">That sounds great. I’d be happy with that.</p>
              <p className="mess">Could you send over some pictures of your dog, please?</p>
              {/* answer */}
              <div className="flex flex-col gap-2 ml-auto">
                <div className="flex flex-row gap-2 ml-auto">
                  <img src={dog1} alt="" className="w-20 h-20 rounded-xl" />
                  <img src={dog2} alt="" className="w-20 h-20 rounded-xl" />
                  <img src={dog3} alt="" className="w-20 h-20 rounded-xl" />
                </div>
                <p className="mess-l">Here are a few pictures. She’s a happy girl!</p>
                <p className="mess-l">Can you make it?</p>
              </div>
              <p className="mess">She looks so happy! The time we discussed works. How long shall I take her out for?</p>
              {/* especial */}
              <div className="price bg-gradient-to-r from-LightMagenta to-LightViolet rounded-t-xl">
                <input type="radio" name="" id="" />
                <p>30 minute walk</p>
                <h1 className="text-xl text-white ml-10">$29</h1>
              </div>
              <div className="price bg-gradient-to-r from-LightMagenta to-LightViolet rounded-t-xl">
                <input type="radio" name="" id="" />
                <p>1 hour walk</p>
                <h1 className="text-xl text-white ml-16">$49</h1>
              </div>
            </div>
            {/* mess */}
            <div className="w-full flex flex-row items-center bg-LightGrayishViolet p-2">
              <input type="text" placeholder="Type a message" className="w-full p-2  bg-white rounded-full" />
              <button type="submit" className="bg-VeryDarkDesaturatedViolet rounded-full flex items-center p-1 -translate-x-10"><span class="material-symbols-outlined text-white">
                arrow_forward_ios
              </span></button>
            </div>
          </div>
          {/* content */}
          <div className="sm:w-1/2 flex flex-col gap-4 text-center sm:text-justify">
            <h1 className="font-semibold text-2xl text-VeryDarkDesaturatedViolet">Simple booking</h1>
            <p>Stay in touch with our dog walkers through the chat interface. This makes it easy to
              discuss arrangements and make bookings. Once the walk has been completed you can rate
              your walker and book again all through the chat.</p>
          </div>
        </article>
      </section>
      
    </main>
  )
}