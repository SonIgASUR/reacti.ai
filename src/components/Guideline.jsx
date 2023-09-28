import guideImg from "../assets/Guide-Img.png";
import guideIcon from "../assets/guideIcon.png";
import { useNavigate } from "react-router-dom";

const Guideline = () => {
  const navigate = useNavigate();
  return (
    <div id="guide" className="w-full mt-[6rem] vsm:mt-[4rem] xl:mt-auto">
      <div className=" text-stone-950 text-[44px] vsm:text-[45px] font-bold text-center">
        Let’s reply better
      </div>

      <div className="w-full relative mt-[2.38rem] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-[3.5rem]">
        {/* Icons */}
        <img
          className="absolute top-[-60px] left-[91px]"
          src={guideIcon}
          alt="sun"
        />
        <div className="hidden xmd:block absolute right-[-120px] top-[-40px] w-[350px] 2xl:w-[508px] h-[415.01px]">
          <div className="relative w-full h-full">
            <div className="origin-top-left w-full h-full rotate-[-30deg] opacity-60 bg-purple-50" />
            <div className="absolute left-[30px] top-[0px] w-full h-full z-[2] origin-top-left rotate-[-30deg] opacity-60 bg-purple-100" />
          </div>
        </div>
        {/* Icons end */}

        <img
          className="h-fit vsm:h-[361px] w-[90%] vsm:w-fit z-[2]"
          src={guideImg}
          alt="Twiiter_logo_design"
        />
        <div className="px-[10px] vsm:px-0">
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] relative">
                <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] left-0 top-0 absolute bg-slate-900 rounded-full" />
                <div className="w-[30px] md:w-16  h-[30px] md:h-16 left-0 top-[2px] absolute bg-purple-50 rounded-full" />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-900 text-xl font-bold">
                  1
                </div>
              </div>
              <div className="text-slate-900 text-lg font-bold">
                First Install Reacti AI extension
              </div>
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] relative">
                <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] left-0 top-0 absolute bg-slate-900 rounded-full" />
                <div className="w-[30px] md:w-16  h-[30px] md:h-16 left-0 top-[2px] absolute bg-purple-50 rounded-full" />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-900 text-xl font-bold">
                  2
                </div>
              </div>
              <div className="text-slate-900 text-lg font-bold">
                Pin React AI extension to your web browser
              </div>
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] relative">
                <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] left-0 top-0 absolute bg-slate-900 rounded-full" />
                <div className="w-[30px] md:w-16  h-[30px] md:h-16 left-0 top-[2px] absolute bg-purple-50 rounded-full" />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-900 text-xl font-bold">
                  3
                </div>
              </div>
              <div className="text-slate-900 text-lg font-bold">
                Select the tweet that you want to reply
              </div>
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] relative">
                <div className="w-[35px] md:w-[66px] h-[34px] md:h-[69px] left-0 top-0 absolute bg-slate-900 rounded-full" />
                <div className="w-[30px] md:w-16  h-[30px] md:h-16 left-0 top-[2px] absolute bg-purple-50 rounded-full" />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-900 text-xl font-bold">
                  4
                </div>
              </div>
              <div className="text-slate-900 text-lg font-bold">
                Select tone and add prompt to generate the reply
              </div>
            </div>
          </div>

          <div className="mt-[2rem] flex flex-col vsm:flex-row items-center gap-4">
            <div
              onClick={() => navigate("/profile/dashboard")}
              className="get-started-btn hidden lg:block"
            >
              <div />
              <button>Get Started</button>
            </div>
            <a
              href="https://chrome.google.com/webstore/detail/reacti-ai/pmikjafnekojjckgdhcdmimoegkemdfj/related"
              target="blank"
              className="install-extension-btn"
            >
              <div />
              <button>Install Extension</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guideline;
