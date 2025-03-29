import { luckiestGuyFont } from '@/lib/fonts-config';
import SearchInput from '@/components/home/SearchInput';
import { TeaSelectionComboBox } from '@/components/home/TeaSelection';
import BlurText from '@/components/reactbits/TextAnimations/BlueText/BlueText';
import SplitText from '@/components/reactbits/TextAnimations/SplitText/SplitText';
import ShinyText from '@/components/reactbits/TextAnimations/ShinyText/ShinyText';
import FuzzyText from '@/components/reactbits/TextAnimations/FuzzyText/FuzzyText';
import FallingText from '@/components/reactbits/TextAnimations/FallingText/FallingText';
import CircularText from '@/components/reactbits/TextAnimations/CircularText/CircularText';
import TextPressure from '@/components/reactbits/TextAnimations/TextPressure/TextPressure';
import GradientText from '@/components/reactbits/TextAnimations/GradientText/GradientText';
export default function Home() {
  return (
    <section className="flex flex-col gap-2">
      <section className="mb-2 text-base">Welcome!</section>
      <section className="mb-2 text-sm">Welcome!</section>
      <SearchInput />
      <div>
        <SplitText
          text="Hello, Tailwind!"
          className="text-center text-2xl font-semibold"
          delay={ 150 }
          animationFrom={ { opacity: 0, transform: 'translate3d(0,50px,0)' } }
          animationTo={ { opacity: 1, transform: 'translate3d(0,0,0)' } }
          threshold={ 0.2 }
          rootMargin="-50px"
        />
      </div>
      <div>
        <BlurText
          text="Isn't this so cool?!"
          delay={ 150 }
          animateBy="words"
          direction="top"
          className={ `mb-8 text-2xl` }
        />
      </div>
      <div className="w-full">
        <ShinyText text="Just some shiny text!" disabled={ false } speed={ 3 } className={ `
          custom-class
        ` } />
      </div>
      <div className="">
        <div className="">
          <TextPressure
            text="Hello!"
            flex={ false }
            alpha={ false }
            stroke={ true }
            width={ false }
            weight={ true }
            italic={ false }
            textColor="var(--primary)"
            strokeColor="purple"
            minFontSize={ 14 }
            hardFontSize={ 40 }
            containerClassName={ `w-[10rem] ` }
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <FuzzyText baseIntensity={ 0.2 } hoverIntensity={ 0.5 } enableHover={ true }>
          404
        </FuzzyText>
        <FuzzyText baseIntensity={ 0.2 } hoverIntensity={ 0.5 } enableHover={ true } color="blue" fontSize="32px">
          Not found
        </FuzzyText>
      </div>
      <div>
        <GradientText
          colors={ ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'] }
          animationSpeed={ 3 }
          showBorder={ false }
          className="flex- flex-row justify-start"
        >
          <p className="text-[12px]">Add a splash of color!</p>
        </GradientText>
      </div>
      <div className="h-[20rem] border-2 border-red-500 w-[20rem]">
        <FallingText
          text={ `React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.` }
          highlightWords={ ['React', 'Bits', 'animated', 'components', 'simplify'] }
          trigger="click"
          backgroundColor="transparent"
          wireframes={ false }
          gravity={ 0.56 }
          fontSize="14px"
          mouseConstraintStiffness={ 0.9 }
        />
      </div>
    </section>
  );
}
