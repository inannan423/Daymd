import { themeChange } from "theme-change";

import { FC, ReactNode } from "react";
import configs from "../daymd.config";
import { useEffect } from "react";
export const ThemeChange: React.FC<{
  title?: string | "";
}> = ({ title }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="w-full h-max grid grid-cols-1 md:grid-cols-5 gap-4 p-5 rounded-md bg-base-200">
      <button
        className="btn text-gray-800 bg-gray-200 hover:bg-gray-300 "
        data-set-theme="light"
        data-act-class="ACTIVECLASS"
      >
        light
      </button>
      <button
        className="btn text-gray-200 bg-gray-600 hover:bg-gray-700"
        data-set-theme="dark"
        data-act-class="ACTIVECLASS"
      >
        dark
      </button>
      <button
        className="btn text-pink-700 bg-pink-300 hover:bg-pink-300"
        data-set-theme="valentine"
        data-act-class="ACTIVECLASS"
      >
        valentine
      </button>
      <button
        className="btn text-yellow-700 bg-yellow-200 hover:bg-yellow-300"
        data-set-theme="cupcake"
        data-act-class="ACTIVECLASS"
      >
        cupcake
      </button>
      <button
        className="btn text-yellow-700 bg-yellow-400 hover:bg-yellow-500"
        data-set-theme="bumblebee"
        data-act-class="ACTIVECLASS"
      >
        bumblebee
      </button>
      <button
        className="btn text-red-700 bg-red-200 hover:bg-red-300"
        data-set-theme="emerald"
        data-act-class="ACTIVECLASS"
      >
        emerald
      </button>
      <button
        className="btn text-green-700 bg-green-200 hover:bg-green-300"
        data-set-theme="corporate"
        data-act-class="ACTIVECLASS"
      >
        corporate
      </button>
      <button
        className="btn text-purple-700 bg-purple-200 hover:bg-purple-300"
        data-set-theme="synthwave"
        data-act-class="ACTIVECLASS"
      >
        synthwave
      </button>
      <button
        className="btn text-yellow-900 bg-yellow-600 hover:bg-yellow-700"
        data-set-theme="retro"
        data-act-class="ACTIVECLASS"
      >
        retro
      </button>

      <button
        className="btn text-yellow-400 bg-yellow-100 hover:bg-yellow-300"
        data-set-theme="cyberpunk"
        data-act-class="ACTIVECLASS"
      >
        cyberpunk
      </button>
      <button
        className="btn text-green-700 bg-green-400 hover:bg-green-500"
        data-set-theme="halloween"
        data-act-class="ACTIVECLASS"
      >
        halloween
      </button>
      <button
        className="btn text-green-700 bg-green-100 hover:bg-green-200"
        data-set-theme="forest"
        data-act-class="ACTIVECLASS"
      >
        forest
      </button>
      <button
        className="btn text-green-900 bg-green-500 hover:bg-green-600"
        data-set-theme="garden"
        data-act-class="ACTIVECLASS"
      >
        garden
      </button>
      <button
        className="btn text-blue-700 bg-blue-200 hover:bg-blue-300"
        data-set-theme="aqua"
        data-act-class="ACTIVECLASS"
      >
        aqua
      </button>
      <button
        className="btn text-gray-200 bg-gray-700 hover:bg-gray-900"
        data-set-theme="lofi"
        data-act-class="ACTIVECLASS"
      >
        lofi
      </button>
      <button
        className="btn text-pink-300 bg-pink-100 hover:bg-pink-200"
        data-set-theme="pastel"
        data-act-class="ACTIVECLASS"
      >
        pastel
      </button>
      <button
        className="btn text-pink-500 bg-pink-300 hover:bg-pink-300"
        data-set-theme="fantasy"
        data-act-class="ACTIVECLASS"
      >
        fantasy
      </button>
      <button
        className="btn text-gray-700 bg-gray-200 hover:bg-gray-300"
        data-set-theme="wireframe"
        data-act-class="ACTIVECLASS"
      >
        wireframe
      </button>
      <button
        className="btn text-gray-100 bg-gray-800 hover:bg-gray-900"
        data-set-theme="black"
        data-act-class="ACTIVECLASS"
      >
        black
      </button>
      <button
        className="btn text-yellow-100 bg-yellow-600 hover:bg-yellow-700"
        data-set-theme="luxury"
        data-act-class="ACTIVECLASS"
      >
        luxury
      </button>
      <button
        className="btn text-purple-100 bg-purple-400 hover:bg-purple-300"
        data-set-theme="dracula"
        data-act-class="ACTIVECLASS"
      >
        dracula
      </button>
      <button
        className="btn text-blue-900 bg-blue-400 hover:bg-blue-500"
        data-set-theme="cmyk"
        data-act-class="ACTIVECLASS"
      >
        cmyk
      </button>
      <button
        className="btn text-gray-100 bg-purple-300 hover:bg-purple-400"
        data-set-theme="autumn"
        data-act-class="ACTIVECLASS"
      >
        autumn
      </button>
      <button
        className="btn text-gray-100 bg-blue-600 hover:bg-blue-700"
        data-set-theme="business"
        data-act-class="ACTIVECLASS"
      >
        business
      </button>
      <button
        className="btn text-green-100 bg-yellow-600 hover:bg-yellow-900"
        data-set-theme="coffee"
        data-act-class="ACTIVECLASS"
      >
        coffee
      </button>
      <button
        className="btn text-pink-900 bg-pink-600 hover:bg-pink-700"
        data-set-theme="acid"
        data-act-class="ACTIVECLASS"
      >
        acid
      </button>
      <button
        className="btn text-green-900 bg-green-600 hover:bg-green-700"
        data-set-theme="lemonade"
        data-act-class="ACTIVECLASS"
      >
        lemonade
      </button>
      <button
        className="btn text-blue-900 bg-blue-600 hover:bg-blue-700"
        data-set-theme="night"
        data-act-class="ACTIVECLASS"
      >
        night
      </button>
      <button
        className="btn text-blue-600 bg-blue-200 hover:bg-blue-300"
        data-set-theme="winter"
        data-act-class="ACTIVECLASS"
      >
        winter
      </button>
    </div>
  );
};
