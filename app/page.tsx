"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <svg
            width="60"
            height="60"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Pretzel logo"
          >
            <path
              fill="#FFA366"
              d="M662.896 232.45C667.314 231.93 671.78 231.978 676.22 231.772C688.176 231.212 700.4 230.24 712.268 232.446C700.486 233.638 688.138 233.184 676.308 232.862C671.838 232.74 667.35 232.902 662.896 232.45Z"
            />
            <path
              fill="#FFA366"
              d="M712.268 232.446C719.94 232.742 727.844 234.148 735.392 235.55C781.058 244.034 826.372 267.374 858.076 301.624C886.12 331.918 906.916 367.658 916.278 408.092C917.67 414.102 919.98 421.608 920.004 427.77C920.004 427.924 919.988 428.078 919.98 428.23C923.996 448.566 924.144 474.864 920.97 495.26C921.848 510.108 908.95 551.768 902.944 566.526Q900.612 572.218 898.064 577.818Q895.514 583.416 892.75 588.912Q889.986 594.408 887.014 599.792Q884.04 605.178 880.86 610.444Q877.68 615.71 874.3 620.85Q870.92 625.99 867.344 630.996Q863.768 636 860.002 640.864Q856.234 645.728 852.282 650.442Q848.33 655.156 844.2 659.714Q840.068 664.274 835.764 668.668Q831.46 673.064 826.99 677.29Q822.52 681.516 817.89 685.566Q813.26 689.618 808.478 693.486Q803.694 697.354 798.766 701.036Q793.836 704.716 788.77 708.204Q783.702 711.692 778.504 714.982C770.254 720.144 761.796 725.362 753.106 729.754C745.506 733.594 735.73 736.53 729.044 741.716C725.272 744.64 723.022 748.772 720.874 752.926C712.598 768.938 707.17 776.748 689.85 783.916C665.984 793.794 638.5 786.622 615.58 777.184C615.22 777.32 614.86 777.462 614.494 777.586C600.352 782.374 584.51 784.642 569.726 786.532C524.434 792.32 478.596 792.72 433.912 782.194C425.596 780.236 416.532 778.096 408.822 774.388C386.738 783.834 365.126 796.546 340.648 787.284C320.292 779.582 309.472 764.548 300.742 745.352C288.944 736.364 273.774 731.19 260.732 724.156C234.456 709.984 210.78 690.184 189.892 669.014C149.226 627.804 119.664 577.02 106.682 520.432C103.536 506.722 100.759 491.15 100.847 477.12C99.961 462.876 99.97 447.016 102.49 432.924C102.823 421.232 107.071 405.738 110.621 394.526C111.745 389.946 113.479 385.496 115.048 381.05C121.791 361.106 132.937 340.82 145.055 323.666C178.632 276.132 232.996 246.26 289.708 236.532Q293.29 235.932 296.884 235.42Q300.478 234.908 304.084 234.484Q307.69 234.06 311.306 233.724Q314.922 233.386 318.544 233.138Q322.166 232.89 325.794 232.73Q329.42 232.57 333.052 232.498Q336.682 232.426 340.312 232.442Q343.944 232.458 347.572 232.562Q351.202 232.668 354.828 232.86Q358.454 233.054 362.074 233.334Q365.694 233.616 369.306 233.984Q372.918 234.354 376.52 234.81Q380.122 235.268 383.712 235.812Q387.302 236.356 390.878 236.988Q394.454 237.62 398.012 238.338Q401.572 239.056 405.112 239.862Q408.652 240.666 412.172 241.556Q415.692 242.448 419.19 243.424Q422.688 244.4 426.16 245.46Q429.632 246.522 433.078 247.666Q436.524 248.812 439.94 250.04Q443.358 251.27 446.744 252.582Q450.132 253.894 453.482 255.286Q456.834 256.678 460.154 258.15Q463.474 259.622 466.754 261.172Q470.034 262.722 473.276 264.35Q476.518 265.978 479.72 267.682Q482.922 269.386 486.08 271.166Q489.24 272.946 492.354 274.798Q495.47 276.652 498.538 278.578Q501.606 280.504 504.626 282.498Q507.646 284.494 510.616 286.558C556.68 260.45 608.232 231.996 662.896 232.45C667.35 232.902 671.838 232.74 676.308 232.862C688.138 233.184 700.486 233.638 712.268 232.446Z"
            />
          </svg>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">my development playground</p>
          <Link
            href="https://amyzhou.work"
            target="_blank"
            className="inline-flex items-center text-[#FFA366] hover:text-[#FFA366] mt-2 text-sm"
          >
            who am i? <ExternalLink size={14} className="ml-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project 1 */}
          <Link
            href="#" // TODO: Replace with actual link
            target="_blank"
            className="bg-white border border-[#FFA366] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-800">Cute Character Maker</h3>
              <ExternalLink size={12} className="text-[#FFA366] group-hover:text-[#FFA366]" />
            </div>
            <p className="text-xs text-gray-500">Interactive tool for designing adorable characters</p>
          </Link>

          {/* Project 2 */}
          <Link
            href="#" // TODO: Replace with actual link
            target="_blank"
            className="bg-white border border-[#FFA366] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-800">Make Pretty Things</h3>
              <ExternalLink size={12} className="text-[#FFA366] group-hover:text-[#FFA366]" />
            </div>
            <p className="text-xs text-gray-500">Artistic form design celebrating aesthetics</p>
          </Link>

          {/* Project 3 */}
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
        </div>
      </div>
    </div>
  )
}

