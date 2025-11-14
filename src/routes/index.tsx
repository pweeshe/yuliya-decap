import HeroClipper from '@/components/HeroClipper'
import HeroText from '@/components/HeroText'
import AboutMeText from '@/components/AboutMeText'
import FAQ from '@/components/FAQ'
import { createFileRoute } from '@tanstack/react-router'
import Services from '@/components/Services'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="">
      <div className="relative flex items-start flex-col w-full gap-24">
        <div className="w-full flex flex-row justify-end">
          <div className="w-2/3 relative max-tablet:h-[600px] max-mobile:h-[300px]">
            <div className="absolute top-0 -left-6 h-full z-10">
              <HeroClipper />
            </div>
            <div className="absolute top-6 opacity-50 -left-7 h-full z-10">
              <HeroClipper />
            </div>
            <div className="absolute -bottom-10 opacity-50 z-10 h-12 w-full bg-white" />
            <div className="absolute -left-1/3 h-full z-10">
              <HeroText />
            </div>
            <div className="max-tablet:overflow-hidden max-tablet:h-full">
              <img
                src="/images/hero.png"
                alt="Gallery image"
                className="w-full h-auto max-tablet:h-full max-tablet:object-cover max-tablet:object-center"
              />
          </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-start">
          <div className="w-2/3 relative max-tablet:h-[600px] max-mobile:h-[300px]">
            <div className="absolute top-0 -right-6 h-full z-10">
              <HeroClipper flipHorizontal />
            </div>
            <div className="absolute top-6 opacity-50 -right-7 h-full z-10">
              <HeroClipper flipHorizontal />
            </div>
            <div className="absolute -bottom-10 opacity-50 z-10 h-12 w-full bg-white" />
            <div className=" absolute  h-full z-10 -right-[40%] max-[570px]:-right-[40%] ">
              <AboutMeText />
            </div>
            <div className="max-tablet:overflow-hidden max-tablet:h-full">
              <img
                src="/images/hero2.png"
                alt="Gallery image"
                className="w-full h-auto max-tablet:h-full max-tablet:object-cover max-tablet:object-center"
              />
            </div>
          </div>
        </div>
        <Services />
        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  )
}
