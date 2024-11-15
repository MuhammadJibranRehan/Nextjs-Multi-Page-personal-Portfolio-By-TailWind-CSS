import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./For-Responsiveness.css"
import HeroImage from "../images/hero-image.png"

export default function Main() {
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <div className="flex-1 text-2xl text-white pr-5">
          I&apos;m a<span className="text-[#4caf50] font-bold"> Web Developer</span>,
          <span className="text-[#ff6347] font-bold"> Graphic Design</span>
          <span className="m-x-2 text-[#888]">|</span>...
          <p className="text-[1.1rem] leading-[1.6] text-[#444] mt-5 italic">
            &quot;Crafting seamless, user-centered experiences with every line of
            code.&quot; &quot;Turning ideas into interactive, responsive web designs that
            engage and delight.&quot; &quot;Building the web with clean, scalable code and
            beautiful designs.&quot; &quot;Transforming visions into pixel-perfect digital
            experiences.&quot; &quot;Passionate about creating intuitive websites that
            blend functionality with design.&quot;
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          <Image
            src={HeroImage}
            alt="Coding Boy Image"
            height={300}
            width={300}
          />
        </div>
      </div>
      <div>
        <br />
        <br />
        <Link className="bg-black text-red-500 mr-auto border-10 border-solid rounded-[9px]" href="/pages/contact">
          Contact-Us
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">My Skills</h1>
          <div className="w-[50px] h-[2px] bg-[#3498db] my-2 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center">
  {/* Skill 1: HTML */}
  <div className="group">
    <div className="bg-white p-4 m-4 w-[240px] rounded-lg shadow-md text-center transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]">
      <div className="mb-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-[50px] h-[50px] fill-[#ff493c]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z"></path>
          <path d="M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
        </svg>
      </div>
      <div className="pt-2">
        <h2 className="text-[1.2rem] font-bold text-[#333]">HTML</h2>
      </div>
    </div>
  </div>

  {/* Skill 2: CSS */}
  <div className="group">
    <div className="bg-white p-4 m-4 w-[240px] rounded-lg shadow-md text-center transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]">
      <div className="mb-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-[50px] h-[50px] fill-[#5c6fed]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z"></path>
          <path d="M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
        </svg>
      </div>
      <div className="pt-2">
        <h2 className="text-[1.2rem] font-bold text-[#333]">CSS</h2>
      </div>
    </div>
  </div>

  {/* Skill 3: JavaScript/TypeScript */}
  <div className="group">
    <div className="bg-white p-4 m-4 w-[240px] rounded-lg shadow-md text-center transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]">
      <div className="mb-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-[50px] h-[50px] fill-[#e3b726]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z"></path>
          <path d="M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
        </svg>
      </div>
      <div className="pt-2">
        <h2 className="text-[1.2rem] font-bold text-[#333]">JavaScript/TypeScript</h2>
      </div>
    </div>
  </div>

  {/* Skill 4: Next.js */}
  <div className="group">
    <div className="bg-white p-4 m-4 w-[240px] rounded-lg shadow-md text-center transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]">
      <div className="mb-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-[50px] h-[50px] fill-[#000000cc]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z"></path>
          <path d="M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
        </svg>
      </div>
      <div className="pt-2">
        <h2 className="text-[1.2rem] font-bold text-[#333]">Next.js</h2>
      </div>
    </div>
  </div>
</div>
      </div>
      <br />
      <br />
      <br />
      <div className="p-8 text-center mb-8 ">
      <h1 className="text-2xl font-bold text-gray-800">
        My Projects
        <div className="w-[50px] h-[2px] bg-[#3498db] my-2 mx-auto"></div>
      </h1>
      </div>
      <div className="p-8">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap -mx-2">
            <div className="px-5 w-full sm:w-1/2 mb-6">
              <div className="group flex flex-wrap w-full bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  alt="Static Resume"
                  loading="lazy"
                  decoding="async"
                  src="data:image/jpeg;base64,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"
                  width={640}
                  height={360}
                  className="w-full object-cover h-full opacity-25 absolute inset-0"
                />
                <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <h2 className="text-xl text-red-600 font-medium title-font mb-2">
                    Static Resume
                  </h2>
                  <p className="leading-relaxed text-black ">
                    Static Resume With Hide/Show Skill Toggle Button
                  </p>
                  <Link
                    target="_blank"
                    href="https://hackathon-milestone-based-interactive-resume-builder-eta.vercel.app/"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline mt-2 flex items-center justify-center">
                      View More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="ml-2 w-5 h-5 mt-1"
                        height="1em"
                        width="1em"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Second project */}
            <div className="px-5 w-full sm:w-1/2 mb-6">
              <div className="group flex flex-wrap w-full bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  alt="Calculator"
                  loading="lazy"
                  decoding="async"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA9lBMVEX4+PgcHB7///+Zl5UAAAANDRBwcHHf39//WgD/ZQAZGRv/YwD/XADX19cbGx0VFReem5lVVVQTGR5VNRoAGh9jYmEFBguVk5Gbm5yNjIqDgYD/bABISEifNBL/UgD/SAAEFh//0r7/5NYjGR2+vbz/qYSNTRWxr67s7OwoKCp5eXq5ubmnp6jGxsY+Pj5tbGv/cgAxMTL/9u5DQ0RYWFgAER8rIx1mPheCSRZwQhZCLRvGaAzlaAbudwRQLBqwXhDrXgNSIhqKLhb/yKz/h0//mm3/onj/dzmUKhQDHR1+IBcxGRyBOBXGKg20NRHkLwZuHxjUNwvUOuY5AAAHP0lEQVR4nO2di3baNhiAbVkK4ATbULCxwzK6dcMQDGEkXddtXXfvrt3e/2Um3y1ZZBCb5FT6v5zEJOI4x9+Rfl2RNA0AAAAAAAAAAAAAAAAAAAAAAAAAgA8JFBOGnUaEYXKbp36Wx4aKi4zN2sKNsdYbIwqVMojC1RRjl9imZemNsCzTJi7G01WoikDUWWJsN/TGWbQxXnZUEIi0AJNW3WUGCQ406QWiiLjtu0txSSS5P+Rh81T2dN3EntT+0Bk+QbktsfCZxP6ovVPKi5HYH1qe3B71t5TUH1o9gj3qbyWnv85p416OhTtP/aSnAO3sx7Cn6/ZOwuyH5o9SdGPwXD5/aME1+Gh3tSX4mGAupNOHrtnMZ+H2ImHtXvhaNn9owEQ+E0/SkbpWCCdsX8YeyKaPrXZNt0V5iUC36k+6ypdr8+GoXXsIRez9JWv7oTGpFq5dC8K0eRCsykzMNIvIWC59ml4tXK7f3F6UjtXP89+96jiYqT/187ZLhy1bk8b2OlTd9Jb+yMPApPofJAt+fGhqrm+aiKMSbZG+OLg+9TO3CNflaK6PetvEV6PIfpw+qToe/MM11rfKtFGNgVDfRCp9gduuviXGaaVLI6BInxtIpW9J2tVHK430hY6JSB+RatAUnbWsb53r2+YvOH1SjdmDvka0rm+aW1uAvgewwThdooXxFvQdjY9xJ75qGI9B39HQHu8qu05A3/FgbMaXad7+A31HMcF40O/TEHhW/EEZfW7QWB8apANW2/x3tl8jtT5Tb64PGTYuOrwUZkBRbn1tlF4UL2cuX7NlV3J9ejlK3A78HLzk+nQ8mPdbYz7gVzDIrk+3m38moaS2ekZ6facF9IG+AtDXCJE+02Zh2m0Wl8h+isYazqoMh8rpM8l6wLKtLFMh1pRNnOrlR2msu5dfvvq85NVXr+94gZLrs9e+wxMs8gqUjI1a6ib3N9S/vrm5ZLj55s1MJX322jFqOMYiNUQ2otRstsmafXvZq3H5ZqiOPot4dT/UUNrtN0VuaWq6QnD2ncBer/d2po4+eycUZDhJ9iNLcWqQ3OPuRmSvd/n9UB1941KQV8mITrLKzPWF9gwvvof1co++H0YK6vOc6xfzwqAz5fTNkVaxG99j+HqPvo8U1Ocl8z0o8g7X90wY+pTU54UIdfph4a+Bvp56+rwIoZXv+fQC+u5DrM8Ps2znOPXC68VQfX58BX2i3EczH1O3VvR5UTwOSkNjOh5a1Xd+ft7r0e/0Z/qtoj4DIWefPp/54EeaSUt9dRTUV+Q+r17zev1kkyBatcRcG6Bvf+yLIkcY+/w89nmgT5D7spq3n9evh9W8oI9v912Dvvv4n17Hi6N6HaDv8D4vAn0NRlxWlZaNB/oyfQ8f7wN9Dx1tTkr2Pn3nCulrMNeR6eteVbhQTd/DZ9pSfVc/Pq/w04Vq+kTzvOSQed5M3xfVHvHPXeX0PXSVQabv+ScVFMx9D2X4rBdHuiu1Y18TfRfn9KuKcjVvM32UbpVEoWL6TMLBLKKy96Wm+viqQzl9ZLsJWDaL4j2WO1iyicvbrF4GfTHuxuGbxo5zm73JXPi1drPjbc1SX/eXzyr8qlrhJWNRvyztltEuXd0exUs2aIfYRwXp4kGBdCcg+1bc593Ypb4aKumzB3tGXJICSgJhouG7oC/VJyy7guFSFgL6GH2e42XXxvou1NPnXaN57M/vaPWJyv36uqAv1Rei2J/fz5cRQO4Tc89E5by0B7lvD3snKuOJXmrPF8Q+r4TTR1t6WYOveNVVUl/ir7DHLtLo8yuEMn3nXRFq6otLLlqJ5nmzGXTQp9V2UCv0xfa00h9TeOcvClbG0frk2kGN3eci15fWGqU/turYE/sO0ifZ/n3sTg15w6Wfxj3qb354zXuQPsl2j5wL9XWyWkNrX59ce5dGIn2025EV2vkR7b7D9EVP/citwm5ZX7b7WD+H6Hu9R9+7qj7J9m3mdg3fM6JnOGszCftie8looPVbT6iv+3tVn2y7hrN71ptbsT4jWUpgi5a4FItc7t4K7V39Uc3esu1Zz52YIF6D5qSOrYU4a6aTHbM/L0T6/mJDn2QnJnDBz7IF0xnOMmsc2rvaPFL8aegs/87+FuS994w9C4dP/bwtw50WY5ExX0H4g2K3B3ux5BcABtui9I/++fdjlvfvRsxOG/KdFlM7q8jmTpm1SMWvSRjZ8bR5peoZjkbmpyXmaDRi3y3fWUX1k7J0i+XexNqxUPelSXhSVi37nRAJMx/1N4VTApsAZ1Q24pGOWZRrtKACnM/bDDgduhlwNnkzkIf55l+LmNiT2l48cEpOVoCxKdXxYkKQFmByghJsERxo0tujoM4SY7tVg5aN8bKjgrwYFK7iHfuJbdY7rEd6s0yb0FsNVqEq8mIQCqPJ2c50m2547Zq7s0kUIpXkJSTLL7Sw04gwuw0AAAAAAAAAAAAAAAAAAAAAAAAAAB8S/wH84hvWNXGvzwAAAABJRU5ErkJggg=="
                  width={640}
                  height={360}
                  className="w-full object-cover h-full opacity-25 absolute inset-0"
                />
                <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <h2 className="text-xl text-red-600 font-medium title-font mb-2">
                    Calculator
                  </h2>
                  <p className="leading-relaxed text-black  ">
                    I built a Calculator using HTML, CSS, and
                    JavaScript/TypeScript.
                  </p>
                  <Link target="_blank" href="https://calculator-by-me.web.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline mt-2 flex items-center justify-center">
                      View More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="ml-1 w-5 h-5 mt-1"
                        height="1em"
                        width="1em"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Third project */}
            <div className="px-5 w-full sm:w-1/2 mb-6">
              <div className="group flex flex-wrap w-full bg-grey-100 py-16 sm:py-24 px-6 sm:px-10 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  alt="Portfolio Website"
                  loading="lazy"
                  decoding="async"
                  src="data:image/jpeg;base64,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"
                  width={640}
                  height={360}
                  className="w-full object-cover h-full opacity-25 absolute inset-0"
                />
                <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <h2 className="text-xl text-red-600 font-medium title-font mb-2">
                    Personal Portfolio Website
                  </h2>
                  <p className="leading-relaxed text-black">
                    I built a Personal Portfolio Website using Next.js
                  </p>
                  <Link
                    target="_blank"
                    href="https://m-jibran-rehan-portfolio.web.app/"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline mt-2 flex items-center justify-center">
                      View More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="ml-2 w-5 h-5 mt-1"
                        height="1em"
                        width="1em"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 p-5 items-start">
        <div className="flex-1 h-[600px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.8744723032006!2d67.16858015780836!3d24.880993134397695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339f2f880f029%3A0x2355614a1cac85c7!2sPunjab%20Town!5e0!3m2!1sen!2s!4v1731102934557!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex-1 bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-[1.5rem] text-[#333] mb-5">Contact Me</h2>
          <p className="font-light text-base">Fill the form below to get in touch with me.</p>
          <form action="https://formspree.io/f/xgvewzje" method="POST">
            <div>
              <label htmlFor="name" className="block mb-1 text-[#666]">Name</label>
              <input type="text" id="name" name="name" required className="w-full p-2 mb-3 border border-[#ddd] rounded-sm outline-none focus:border-[#0070f3]" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required className="w-full p-2 mb-3 border border-[#ddd] rounded-sm outline-none focus:border-[#0070f3]"></textarea>
            </div>

            <button type="submit" className="p-2.5 px-4 text-[1rem] text-white bg-[#28a745] border-0 rounded-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#218838]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}