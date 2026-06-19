import React from "react";
import { noma } from "../assets/index";
import {
  MoreHoriz,
  FavoriteBorder,
  ChatBubbleOutline,
  ShareOutlined,
  Public,
  Verified,
} from "@mui/icons-material";

const heartReaction =
  "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
const likeReaction =
  "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E";

function Main1() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-800">
            From the Administrator’s Desk
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A warm message to parents, guardians, learners, and the wider Amazon
            Christian Academy community.
          </p>
        </div>

        {/* Social post style card */}
        <article className="w-full max-w-[96%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Post header */}
          <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-gray-100">
            <div className="flex items-start gap-3 sm:gap-4 min-w-0">
              <img
                src={noma}
                alt="Mrs N Mlangeni"
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover shadow-md border-2 border-blue-100 shrink-0"
                loading="lazy"
              />

              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate">
                    Mrs N Mlangeni
                  </h3>

                  <Verified className="text-blue-600 shrink-0" fontSize="small" />
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  School Administrator · Amazon Christian Academy
                </p>

                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-500 mt-1">
                  <span>Feb 14, 2022</span>
                  <span>·</span>
                  <Public fontSize="inherit" />
                </div>
              </div>
            </div>

            <button
              className="text-gray-500 hover:text-blue-700 transition shrink-0"
              aria-label="More options"
            >
              <MoreHoriz fontSize="small" />
            </button>
          </div>

          {/* Post body */}
          <div className="p-4 sm:p-6 md:p-8">
            <p className="text-[15px] sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Dear Sir/Madam,
            </p>

            <p className="mt-3 sm:mt-4 text-[15px] sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-blue-700">
                Amazon Christian Academy
              </span>
              , where we are dedicated to nurturing young minds and shaping
              future leaders.
            </p>

            <p className="mt-3 sm:mt-4 text-[15px] sm:text-base md:text-lg text-gray-600 leading-relaxed">
              At ACA, we believe in fostering an environment that encourages
              academic excellence, creativity, and holistic development. Our
              commitment to quality education and student well-being is reflected
              in our dedicated faculty and our passion for learner growth.
            </p>

            <p className="mt-3 sm:mt-4 text-[15px] sm:text-base md:text-lg text-gray-600 leading-relaxed">
              We strive to create a learning experience that empowers students to
              reach their full potential and excel in all aspects of life. I
              invite you to explore our website and learn more about our vibrant
              school community.
            </p>
          </div>

          {/* Post engagement summary */}
          <div className="px-4 sm:px-6 py-3 border-t border-gray-100 flex items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex -space-x-1 shrink-0">
                <img
                  src={likeReaction}
                  alt="Like reaction"
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-2 ring-white"
                />

                <img
                  src={heartReaction}
                  alt="Love reaction"
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-2 ring-white"
                />
              </div>

              <span className="hover:underline cursor-pointer truncate">
                455
                <span className="hidden sm:inline"> people liked this</span>
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <span className="hover:underline cursor-pointer whitespace-nowrap">
                22 comments
              </span>

              <span className="hidden sm:inline hover:underline cursor-pointer whitespace-nowrap">
                8 shares
              </span>
            </div>
          </div>

          {/* Post actions */}
          <div className="grid grid-cols-3 border-t border-gray-100">
            <button className="flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 text-xs sm:text-sm md:text-base text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition">
              <FavoriteBorder fontSize="small" />
              <span className="font-medium">Like</span>
            </button>

            <button className="flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 text-xs sm:text-sm md:text-base text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition border-x border-gray-100">
              <ChatBubbleOutline fontSize="small" />
              <span className="font-medium">Comment</span>
            </button>

            <button className="flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 text-xs sm:text-sm md:text-base text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition">
              <ShareOutlined fontSize="small" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Main1;