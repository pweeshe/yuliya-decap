import { createFileRoute } from '@tanstack/react-router'
import ServicesSideMenu from '@/components/ServicesSideMenu'
import ServicesFloatingMenu from '@/components/ServicesFloatingMenu'
import ServiceCheckout from '@/components/ServiceCheckout'
import ServiceCheckoutFloating from '@/components/ServiceCheckoutFloating'

export const Route = createFileRoute('/services/post-pregnancy-transformation')(
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
        src="/images/post-pregnancy.jpg" 
        alt="Post-Pregnancy Transformation" 
        className="w-full mb-12 max-h-[400px] object-cover"
      />
      
      <div className="prose prose-lg max-w-none">
        {/* Main intro section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Post-Pregnancy Transformation</h1>
          <p className="text-xl mb-4">A specialized program for women after childbirth</p>
          <p className="text-lg text-gray-600 mb-6">Rebuild your core and feminine health, regain confidence in your body, and thrive as a mother, partner and woman</p>
          
          <div className="bg-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">You'll discover how to:</h3>
            <ul className="text-left space-y-2 max-w-2xl mx-auto">
              <li>Shape your waist and strengthen your stomach</li>
              <li>Reduce stress and learn how to manage your more limited time</li>
              <li>Balance your diet and hormones</li>
            </ul>
          </div>
        </div>

        {/* Who is it for? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Who is it for?</h2>
          <ul className="space-y-3">
            <li>New mothers who want to rebuild core/waist, restore feminine health, balance hormones, and regain confidence, safely and sustainably</li>
            <li>Women struggling with fatigue, low libido, or body image after pregnancy</li>
            <li>Anyone needing guidance on balancing family, self-care, and health</li>
          </ul>
        </section>

        {/* What problems does it solve? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What problems does it solve?</h2>
          <ul className="space-y-3">
            <li>Postpartum stress, weak core/diastasis, time scarcity and diet overwhelm</li>
            <li>Gentle, progressive methods help you feel like yourself again</li>
            <li>Stubborn belly fat and weak core muscles</li>
            <li>Hormonal imbalances affecting health and intimacy</li>
          </ul>
        </section>

        {/* What you'll learn */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What you'll learn</h2>
          <ul className="space-y-3">
            <li><strong>Core rehab & posture:</strong> safe progression for diastasis/pelvic floor; breath + deep core activation</li>
            <li><strong>Waist & strength:</strong> low-impact shaping, gradual load, daily micro-movements that fit mom life</li>
            <li><strong>Nutrition for recovery:</strong> hormone-supportive meals, smart snacks, hydration, simple supplements</li>
            <li><strong>Stress & time:</strong> quick routines, energy management, boundaries, and realistic self-care</li>
            <li><strong>Confidence & identity:</strong> mindset tools to thrive as mother, partner, and woman</li>
          </ul>
        </section>

        {/* How the course runs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How the course runs (8 weeks)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 1:</strong> Postpartum baseline; breath & pelvic floor connection
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 2:</strong> Deep core activation; gentle mobility; daily 10-minute routine
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 3:</strong> Posture & waist shaping; safe progressions; walking plan
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 4:</strong> Hormone-friendly nutrition; simple plates & snacks; hydration
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 5:</strong> Strength return (low impact); band/DB options; fatigue-friendly splits
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 6:</strong> Stress & time systems; micro-workouts; partner support ideas
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 7:</strong> Body confidence; clothes/fit goals; photo & measurement check-in
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <strong>Week 8:</strong> Your personalized 12-week continuation plan
            </div>
          </div>
        </section>

        {/* Coaching Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Coaching Options</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Group Coaching</h3>
              <ul className="space-y-2">
                <li>1 group Zoom call per week with other mothers (coaching + Q&A)</li>
                <li>Supportive group chat (encouragement, questions, daily check-ins)</li>
                <li>Access to postpartum meal ideas, safe workout guides, and habit trackers</li>
              </ul>
              <p className="mt-4 text-2xl font-bold text-primary">$490 USD</p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">1:1 Coaching</h3>
              <ul className="space-y-2">
                <li>2 private calls per week (Zoom or WhatsApp video) for deep guidance, flexible timing</li>
                <li>We talk through your current lifestyle, challenges, and goals</li>
                <li>Fully personalized support tailored to your postpartum journey</li>
              </ul>
              <p className="mt-4 text-2xl font-bold text-primary">$610 USD</p>
            </div>
          </div>
        </section>

        {/* Tools I use */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tools I use</h2>
          <ul className="space-y-3">
            <li>Core rehab videos (10–15 min)</li>
            <li>Postpartum nutrition guide (quick plates, snacks, hydration)</li>
            <li>Daily 10-minute routines (PDF/Video)</li>
            <li>Progress tracker: waist, core strength, energy, sleep</li>
            <li>Postpartum-safe workout and yoga videos</li>
            <li>Meal planning & quick healthy recipes</li>
            <li>Stress management practices (breathing, journaling)</li>
            <li>Time management planners and habit trackers</li>
          </ul>
        </section>

        {/* What you get */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What you get</h2>
          <ul className="space-y-3">
            <li>8 weeks of guided rehab & shaping</li>
            <li>Personalized Post-Pregnancy Action Plan (ready in Week 4–5)</li>
            <li>Mom-Life Time Savers: micro-workouts, meal templates, checklists</li>
            <li>A safe roadmap to rebuild body and energy</li>
            <li>Support and accountability from me (and group if chosen)</li>
            <li>Better confidence, intimacy, and joy in your body</li>
            <li>Practical skills to thrive as a mother and a woman</li>
            <li>Access to materials for 6 months</li>
          </ul>
        </section>
      </div>
    </section>
    
    {/* Desktop checkout - visible above 1200px */}
    <aside className="sticky top-24 self-start hidden xl:block">
      <ServiceCheckout
        title="Post-Pregnancy Transformation"
        description="8-week specialized program for new mothers"
        groupPrice="$490"
        oneOnOnePrice="$610"
        checkoutLink="https://www.google.com"
        checkoutLinkPersonalised="https://www.google.com"
      />
    </aside>
    
    {/* Mobile floating checkout - visible below 1200px */}
    <div className="xl:hidden">
      <ServiceCheckoutFloating
        title="Post-Pregnancy Transformation"
        description="8-week specialized program for new mothers"
        groupPrice="$490"
        oneOnOnePrice="$610"
        checkoutLink="https://www.google.com"
        checkoutLinkPersonalised="https://www.google.com"
      />
    </div>
  </div>
}

