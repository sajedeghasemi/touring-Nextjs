'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/image/01.png";
import profile from "../../../public/image/02.png"

export const Navbar = () => {
  const [mode, setMode] = useState(true)
  const handleThemeMode = () => {
    setMode(!mode)
  }
  const changeThemeMode = () => {
    if(mode === true){
      document.documentElement.setAttribute('data-theme' , 'night')
    }else{
      document.documentElement.setAttribute('data-theme' , 'cupcake')
    }
  }

  useEffect(() => {
    changeThemeMode()
  }, [mode])
  
  return (
    <nav>

      <div className="navbar w-full flex justify-between items-center mt-2 container bg-base-100 dark:bg-black">

        <div className="">
          <a className="" href="#">
            <Image src={logo} height={100} width={100} className="h-10 w-auto"/>
          </a>
        </div>

        <div className="w-1/3">
          <ul className="flex w-full justify-evenly">
            
            {/* <li className="">
              <ul className="menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
                <li>
                  <a>Solutions</a>
                  <ul>
                    <li><a>Design</a></li>
                    <li><a>Development</a></li>
                    <li><a>Hosting</a></li>
                    <li><a>Domain register</a></li>
                  </ul>
                </li>
                <li>
                  <a>Enterprise</a>
                  <ul>
                    <li><a>CRM software</a></li>
                    <li><a>Marketing management</a></li>
                    <li><a>Security</a></li>
                    <li><a>Consulting</a></li>
                  </ul>
                </li>
                <li>
                  <a>Products</a>
                  <ul>
                    <li><a>UI Kit</a></li>
                    <li><a>Wordpress themes</a></li>
                    <li><a>Wordpress plugins</a></li>
                    <li>
                      <a>Open source</a>
                      <ul>
                        <li><a>Auth management system</a></li>
                        <li><a>VScode theme</a></li>
                        <li><a>Color picker app</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Company</a>
                  <ul>
                    <li><a>About us</a></li>
                    <li><a>Contact us</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Press kit</a></li>
                  </ul>
                </li>
              </ul>
            </li> */}

            <li className="">
              <a className="text-base text-gray-700 font-medium hover:text-primary" href="#">محصولات</a>
            </li>

            <li className="">
              <a className="text-base text-gray-700 font-medium hover:text-primary" href="#">درباره ما</a>
            </li>

            <li className="">
              <a className="text-base text-gray-700 font-medium hover:text-primary" href="#">تماس با ما</a>
            </li>

          </ul>
        </div>

        <div className="flex-none">
          
          <label className="swap swap-rotate btn btn-ghost btn-circle" onChange={() => handleThemeMode()}>
            
            <input type="checkbox" className="theme-controller" value="synthwave" />

            <svg
              className="swap-off size-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on size-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>

          </label>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ml-2">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">0 محصول</span>
                <span className="text-info">قیمت : 0 تومان</span>
                <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  مشاهده سبد خرید
                </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={profile} height={100} width={100} className="h-10 w-auto"/>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  پروفایل من
                  <span className="badge">جدید</span>
                </a>
              </li>
              <li>
                <a>تنظیمات</a>
              </li>
              <li>
                <a>خروج</a>
              </li>
            </ul>
          </div>

        </div>


      </div>

    </nav>
  );
};
