import { luckiestGuyFont } from '@/lib/fonts-config';
import SearchInput from '@/components/home/SearchInput';
import Orb from '@/components/reactbits/Backgrounds/Orb/Orb';
import { TeaSelectionComboBox } from '@/components/home/TeaSelection';
import Aurora from '@/components/reactbits/Backgrounds/Aurora/Aurora';
import Lanyard from '@/components/reactbits/Components/Lanyard/Lanyard';
import CountUp from '@/components/reactbits/TextAnimations/CountUp/CountUp';
import MetaBalls from '@/components/reactbits/Animations/MetaBalls/MetaBalls';
import BlurText from '@/components/reactbits/TextAnimations/BlueText/BlueText';
import SplitText from '@/components/reactbits/TextAnimations/SplitText/SplitText';
import ShinyText from '@/components/reactbits/TextAnimations/ShinyText/ShinyText';
import FuzzyText from '@/components/reactbits/TextAnimations/FuzzyText/FuzzyText';
import TrueFocus from '@/components/reactbits/TextAnimations/TrueFocus/TrueFocus';
import ASCIIText from '@/components/reactbits/TextAnimations/ASCIIText/ASCIIText';
import MagnetLines from '@/components/reactbits/Animations/MagnetLines/MagnetLines';
import TextCursor from '@/components/reactbits/TextAnimations/TextCursor/TextCursor';
import GlitchText from '@/components/reactbits/TextAnimations/GlitchText/GlitchText';
import SplashCursor from '@/components/reactbits/Animations/SplashCursor/SplashCursor';
import FallingText from '@/components/reactbits/TextAnimations/FallingText/FallingText';
import CircularText from '@/components/reactbits/TextAnimations/CircularText/CircularText';
import TextPressure from '@/components/reactbits/TextAnimations/TextPressure/TextPressure';
import GradientText from '@/components/reactbits/TextAnimations/GradientText/GradientText';
import ScrollReveal from '@/components/reactbits/TextAnimations/ScrollReveal/ScrollReveal';
import RotatingText from '@/components/reactbits/TextAnimations/RotatingText/RotatingText';
import DecryptedText from '@/components/reactbits/TextAnimations/DecryptedText/DecryptedText';

export default function FunPage() {
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

      <div>
        <GradientText
          colors={ ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'] }
          animationSpeed={ 3 }
          showBorder={ false }
          className="flex- flex-row justify-start"
        >
          <p className="text-[12px]">Add a splash of color!</p>
          <CountUp from={ 0 } to={ 1000 } separator="," direction="up" duration={ 1.25 } className={ `
            count-up-text
          ` } />
        </GradientText>
      </div>
      <div className="h-[20rem] w-[20rem] border-2 border-red-500">
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

      <div className="flex flex-col items-start justify-start gap-2">
        <FuzzyText baseIntensity={ 0.2 } hoverIntensity={ 0.5 } enableHover={ true }>
          404
        </FuzzyText>
        <FuzzyText baseIntensity={ 0.2 } hoverIntensity={ 0.5 } enableHover={ true } color="blue">
          Not found
        </FuzzyText>
      </div>

      <section>
        { /* Example 1: Defaults (hover to decrypt) */ }
        <DecryptedText
          text="Boba Shop"
          characters="ABCD1234!?"
          speed={ 100 }
          revealDirection="end"
          parentClassName={ `font-semibold ${luckiestGuyFont.className} text-amber-500 text-3xl` }
          maxIterations={ 30 }
        />
        <div>
          { /* Example 2: Customized speed and characters */ }
          <DecryptedText
            text="Customize me"
            speed={ 100 }
            maxIterations={ 20 }
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        { /* Example 3: Animate on view (runs once) */ }
        <div>
          <DecryptedText text="This text animates when in view" animateOn="view" revealDirection="center" />
        </div>
      </section>
      <section className="flex flex-col border-2 border-red-500">
        <TrueFocus
          sentence="Where is my Boba Tea?"
          manualMode={ true }
          blurAmount={ 5 }
          borderColor="purple"
          animationDuration={ 0.7 }
          pauseBetweenAnimations={ 1 }
          parentClassName={ 'flex flex-row justify-start items-center' }
        />
      </section>

      <section className="flex flex-row items-center justify-start gap-x-2">
        <p className="font-semibold">Hello:</p>
        <RotatingText
          texts={ ['React', 'Bits', 'Is', 'Cool'] }
          mainClassName="px-2 sm:px-2 md:px-5 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-1.5 justify-center rounded-lg font-semibold italic"
          staggerFrom={ 'last' }
          initial={ { y: '100%' } }
          animate={ { y: 0 } }
          exit={ { y: '-120%' } }
          staggerDuration={ 0.025 }
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-0"
          transition={ { type: 'spring', damping: 30, stiffness: 400 } }
          rotationInterval={ 2300 }
        />
      </section>

      <section>
        <CountUp from={ 0 } to={ 1000 } separator="," direction="up" duration={ 1.25 } className={ `
          count-up-text
        ` } />
      </section>

      <section>{ /* <SplashCursor /> */ }</section>
      <section className="flex flex-row items-center justify-start">
        <MetaBalls
          color="#ffffff"
          cursorBallColor="#ffffff"
          cursorBallSize={ 2 }
          ballCount={ 15 }
          animationSize={ 30 }
          enableMouseInteraction={ true }
          enableTransparency={ true }
          hoverSmoothness={ 0.05 }
          clumpFactor={ 1 }
          speed={ 0.3 }
        />
      </section>

      <section>
        <div style={ { width: '10rem', height: '20rem', position: 'relative' } }>
          <Orb hoverIntensity={ 0.5 } rotateOnHover={ true } hue={ 0 } forceHoverState={ false } />
          <p className="">DREAM</p>
        </div>
      </section>
    </section>
  );
}
