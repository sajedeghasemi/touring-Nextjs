import Image from "next/image";
// import productLanding from "../../public/image/04.jpg"
import { Carosel } from "@/components/site/Carosel";
import { Countdown } from "@/components/site/Countdown";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mt-5">
      {/* <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={productLanding} height={100} width={100} className="w-auto h-96 rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

        <div className="flex container bg-gray-500 justify-center items-center gap-5">
          <Carosel/>
          <div className="flex flex-col bg-gray-200 w-1/2">
            <h3 className="text-5xl font-semibold">درخشش شما</h3>
            <h3 className="text-5xl font-semibold mt-2">در دستان ماست !</h3>
            <p className="text-sm mt-5">در ترنج، ما به دنبال این هستیم که هر فردی بتواند با اکسسوری‌های ما احساس خاص بودن کند. از روز اول، ماموریت ما ارائه زیورآلاتی بوده است که نه تنها ظاهری زیبا دارند، بلکه داستانی از هنر، کیفیت و سبک زندگی را نیز روایت می‌کنند.</p>
            <span>همین حالا از تخفیف ۲۰٪ اولین خرید بهره‌مند شوید!</span>
            <div className="flex flex-col justify-center items-center mt-5">
              <h6 className="">تخفیف ویژه</h6>
              <Countdown/>
            </div>
            <button></button>
          </div>
          
        </div>

    </main>
  );
}
