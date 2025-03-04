"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="60pt" height="60pt" viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
              fill="#FFA366" stroke="none">
              <path d="M3830 4640 c-220 -19 -379 -71 -640 -207 l-200 -105 -108 65 c-744
                451 -1709 273 -2099 -386 -464 -786 -68 -1857 857 -2314 81 -40 126 -79 170
                -148 114 -178 267 -222 475 -137 104 43 122 45 192 21 218 -75 696 -85 1006
                -20 112 24 144 24 210 0 211 -75 407 -21 515 142 57 86 95 117 217 177 651
                322 1083 1106 970 1762 -132 769 -750 1223 -1565 1150z m-1464 -171 c828 -215
                1298 -1031 1062 -1845 -62 -212 -56 -206 -128 -123 -112 130 -176 292 -210
                535 -97 673 -539 1071 -1097 984 -985 -152 -1072 -1412 -130 -1864 l134 -64
                -55 -33 c-71 -44 -159 -150 -174 -211 -37 -147 -545 233 -776 580 -724 1092
                131 2363 1374 2041z m1834 30 c1316 -213 1465 -1863 235 -2602 l-165 -99 -32
                76 c-39 91 -127 182 -190 198 -38 10 -18 25 117 93 230 115 446 330 548 545
                366 769 -426 1580 -1211 1240 l-112 -49 -60 74 c-33 40 -99 116 -147 168 l-86
                95 156 78 c360 179 637 233 947 183z m-1790 -663 c66 -28 118 -58 115 -68 -3
                -10 -34 -99 -69 -198 -113 -324 -100 -767 32 -1105 l49 -125 -83 -49 c-46 -27
                -126 -68 -178 -90 l-94 -42 -125 51 c-362 147 -630 423 -708 729 -155 604 479
                1139 1061 897z m1688 26 c788 -245 756 -1211 -53 -1606 l-211 -103 -142 74
                c-233 122 -222 99 -153 306 118 352 118 709 0 1031 -34 91 -66 180 -72 198 -7
                23 14 40 77 64 213 81 376 92 554 36z m-1246 -436 c30 -59 64 -183 81 -290 59
                -377 86 -470 170 -595 145 -218 386 -396 682 -504 274 -100 345 -164 341 -307
                -7 -245 -250 -281 -627 -92 -858 429 -1195 1205 -875 2010 l24 59 76 -89 c42
                -48 100 -135 128 -192z m-203 -1264 c16 -31 76 -108 133 -170 117 -128 122
                -110 -64 -232 -113 -74 -541 -260 -599 -260 -142 0 -255 137 -229 276 19 104
                99 168 310 250 105 41 235 101 290 133 124 73 123 73 159 3z m469 -457 c49
                -37 134 -92 190 -121 l102 -53 -195 -18 c-196 -18 -615 -1 -615 25 0 8 29 25
                65 38 36 13 124 68 195 121 72 54 139 92 150 86 11 -6 60 -41 108 -78z" />
            </g>
          </svg>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">my development playground</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link
              href="https://amyzhou.work"
              target="_blank"
              className="inline-flex items-center text-[#FFA366] hover:text-[#FFA366] text-sm"
            >
              who am i? <ExternalLink size={14} className="ml-1" />
            </Link>
            <Link
              href="https://discord.gg/8vDGhqGzfF"
              target="_blank"
              className="inline-flex items-center text-[#FFA366] hover:text-[#FFA366] text-sm"
            >
              discord <ExternalLink size={14} className="ml-1" />
            </Link>
            <Link
              href="https://x.com/amypretzel"
              target="_blank"
              className="inline-flex items-center text-[#FFA366] hover:text-[#FFA366] text-sm"
            >
              twitter <ExternalLink size={14} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Project 1 */}
          <Link
            href="https://taiyaki.ai"
            target="_blank"
            className="bg-white border border-[#FFA366] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-800">Taiyaki.ai</h3>
              <ExternalLink size={12} className="text-[#FFA366] group-hover:text-[#FFA366]" />
            </div>
            <p className="text-xs text-gray-500">Making 3D design accessible through AI</p>
          </Link>

          {/* Project 2 */}
          <Link
            href="https://fishcad.com"
            target="_blank"
            className="bg-white border border-[#FFA366] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-800">FishCAD</h3>
              <ExternalLink size={12} className="text-[#FFA366] group-hover:text-[#FFA366]" />
            </div>
            <p className="text-xs text-gray-500">Making CAD easier - part of taiyaki.ai</p>
          </Link>

          {/* Project 3 */}
          <Link
            href="https://makeprettythings.pretzel.design"
            target="_blank"
            className="bg-white border border-[#FFA366] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-800">Make Pretty Things</h3>
              <ExternalLink size={12} className="text-[#FFA366] group-hover:text-[#FFA366]" />
            </div>
            <p className="text-xs text-gray-500">Artistic form design celebrating aesthetics</p>
          </Link>

          {/* Project 4 */}
          <Link
            href="https://kawaiicharacters.pretzel.design"
            target="_blank"
            className="bg-white border border-[#FFA366] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-800">Cute Character Maker</h3>
              <ExternalLink size={12} className="text-[#FFA366] group-hover:text-[#FFA366]" />
            </div>
            <p className="text-xs text-gray-500">Interactive tool for designing adorable characters</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

