import { createFileRoute } from '@tanstack/react-router'
import ServicesSideMenu from '@/components/ServicesSideMenu'
import ServicesFloatingMenu from '@/components/ServicesFloatingMenu'
import ServiceCheckout from '@/components/ServiceCheckout'
import ServiceCheckoutFloating from '@/components/ServiceCheckoutFloating'

export const Route = createFileRoute('/services/holistic-body-transformation')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div className="flex pt-24 flex-row gap-8 px-4 xl:px-8 max-w-[1600px] mx-auto pb-24">
    {/* Desktop sidebar - visible above 1200px */}
    <aside className="sticky top-24 self-start hidden xl:block">
      <ServicesSideMenu />
    </aside>
    
    {/* Mobile floating menu - visible below 1200px */}
    <div className="xl:hidden">
      <ServicesFloatingMenu />
    </div>
    <section className="flex-1 w-full xl:max-w-[800px]">
      <img 
        src="/images/hollistic-body-transformation-image.png" 
        alt="Holistic Body Transformation" 
        className="w-full mb-12 max-h-[400px] object-cover"
      />
      
      <div className="prose prose-lg max-w-none">
        {/* Main intro section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Holistic Body Transformation</h1>
          <p className="text-xl mb-4">Discover how to stay healthy, youthful and energized for life</p>
          <p className="text-lg text-gray-600 mb-6">Nutrition + Workout + Lifestyle in one 8-week program</p>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Learn how to:</h3>
            <ul className="text-left space-y-2 max-w-2xl mx-auto">
              <li>Support digestion and gut health for more energy</li>
              <li>Balance hormones and optimize circadian rhythm</li>
              <li>Build strength with yoga, workouts, and a personalized diet</li>
              <li>Create healthy routines that fit your busy lifestyle</li>
              <li>Stay youthful, active, and energetic long-term</li>
              <li>Reshape your body and achieve the results you've always wanted</li>
            </ul>
          </div>
        </div>

        {/* Who is it for? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Who is it for?</h2>
          <ul className="space-y-3">
            <li>Anyone who feels low in energy and wants to reset their body</li>
            <li>People struggling with inconsistent workouts or diets</li>
            <li>Those who want a full system, not just "quick fixes"</li>
            <li>Busy professionals or parents who need structure and accountability</li>
            <li>Those who want to transform body composition, balance hormones, and build flexibility and strength with a sustainable training + nutrition plan</li>
          </ul>
          <p className="mt-4 text-gray-700">Train your body and mind together, improve physical shape, build strength, and learn how to eat in a way that supports your workouts</p>
        </section>

        {/* What problems does it solve? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What problems does it solve?</h2>
          <ul className="space-y-3">
            <li>Constant fatigue and digestive issues</li>
            <li>Confusion about which diet or workout to follow</li>
            <li>Lack of consistency and motivation</li>
            <li>Stress from balancing health with work and family life</li>
          </ul>
        </section>

        {/* What you'll learn */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What you'll learn</h2>
          <ul className="space-y-3">
            <li><strong>Body science made simple:</strong> metabolism, recovery, and why strength training is important</li>
            <li><strong>Circadian rhythm & hormones:</strong> sleep timing, cortisol, GH support, consistent energy</li>
            <li><strong>Yoga for mobility,</strong> workout for core + strength blocks for your goal (lean/shape/maintain)</li>
            <li><strong>Diet that fits you:</strong> macros for training days, simple peri-workout nutrition and meal timing</li>
            <li><strong>How to break old patterns</strong> and build lasting habits</li>
            <li><strong>Phases:</strong> understanding bulking/shaping/cutting the healthy way</li>
            <li><strong>Recovery:</strong> breathwork basics, stretching, deload weeks, stress management</li>
          </ul>
        </section>

        {/* How the course runs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How the course runs (8 weeks)</h2>
          <p className="mb-4">Structured modules with videos, exercises, and worksheets</p>
          <p className="mb-6 text-gray-700">Step-by-step progression: from understanding to action to integration</p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 1:</strong> Assess baseline; mobility & core; goal map
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 2:</strong> Sleep/circadian routine; training schedule that fits real life
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 3:</strong> Strength foundations; Principles of Yoga, yoga flows for posture & core
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 4:</strong> Fitness and how to start your training
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 5:</strong> Personalized diet design; macro ranges; meal timing
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 6:</strong> Progression & phases (shape/cut/maintain) + plateau fixes
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 7:</strong> Fine-tuning: travel, social eating, habit stacking
            </div>
            <div className="border-l-4 border-primary pl-4">
              <strong>Week 8:</strong> Your 12-week follow-on plan + measurements & photos
            </div>
          </div>
        </section>

        {/* Coaching Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Coaching Options</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Group Coaching</h3>
              <ul className="space-y-2">
                <li>1 group Zoom call per week (live teaching, Q&A, group coaching)</li>
                <li>Group chat support (daily accountability, feedback, encouragement)</li>
                <li>Access to all course materials, trackers, and weekly tasks</li>
              </ul>
              <p className="mt-4 text-2xl font-bold text-primary">$430 USD</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">1:1 Coaching</h3>
              <ul className="space-y-2">
                <li>2 private calls per week (Zoom or WhatsApp video) for deep guidance</li>
                <li>Tailored meal plans, workout adjustments, and lifestyle check-ins</li>
                <li>Full accountability and personalized tracking through all 8 weeks</li>
              </ul>
              <p className="mt-4 text-2xl font-bold text-primary">$550 USD</p>
            </div>
          </div>
        </section>

        {/* Tools I use */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tools I use</h2>
          <ul className="space-y-3">
            <li>Nutrition and workout trackers (Google Docs / PDFs)</li>
            <li>Checklists & habit trackers for daily accountability</li>
            <li>Progress check-ins and feedback sessions</li>
            <li>Practical meal planning and grocery guides</li>
          </ul>
        </section>

        {/* What you get */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What you get</h2>
          <ul className="space-y-3">
            <li>20 classes + workout/yoga core series</li>
            <li>Personalized Diet & Training Blueprint (ready in Week 4)</li>
            <li>Sleep & Rhythm Routine (AM/PM checklist)</li>
            <li>Plateau Fix Guide (progressions, swaps, deloads)</li>
            <li>A complete 8-week transformation roadmap</li>
            <li>Personalized feedback (1:1) or supportive group setting</li>
            <li>Practical knowledge you can use for life</li>
            <li>Access to materials for 6 months</li>
          </ul>
        </section>
      </div>
    </section>
    
    {/* Desktop checkout - visible above 1200px */}
    <aside className="sticky top-24 self-start hidden xl:block">
      <ServiceCheckout
        title="Holistic Body Transformation"
        description="8-week program"
        groupPrice="$430"
        oneOnOnePrice="$550"
        checkoutLink="https://www.google.com"
        checkoutLinkPersonalised="https://www.google.com"
      />
    </aside>
    
    {/* Mobile floating checkout - visible below 1200px */}
    <div className="xl:hidden">
      <ServiceCheckoutFloating
        title="Holistic Body Transformation"
        description="8-week program"
        groupPrice="$430"
        oneOnOnePrice="$550"
        checkoutLink="https://www.google.com"
        checkoutLinkPersonalised="https://www.google.com"
      />
    </div>
  </div>
}

