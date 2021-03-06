import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";

export const LearnMore = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden">
      <ContentLimiter className="relative z-10">
        <div className="flex flex-col w-100%  gap-1 pl-60 pr-60 text-white items-center justify-center  mt-70 text-36 ">
          <a href="https://maize-butterfly-741.notion.site/Buying-CO2fi-HCO2-6b271dae119a4acc90e672656a68b8ef">
            <div
              className={
                "text-18 border border-gray bg-dark-l1 p-20 rounded-10"
              }
            >
              <div className="flex flex-col gap-6 lg:gap-0 md:flex-row justify-self-stretch">
                <div className="flex-col">
                  You can buy CO2Fi and ACC token via SushiSwap on Polygon(L2)
                  <br />
                  <span className="text-14 text-gray">
                    Click to learn more for more step by step instructions
                  </span>
                </div>
                <div className="flex justify-end items-end ml-20 h-auto md:justify-center md:items-center">
                  <img className="h-17 w-17" src="/more-arrow.svg" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};
