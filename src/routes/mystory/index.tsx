import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mystory/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col gap-12 w-full h-full pt-24">
    <div className="flex flex-col relative justify-center items-center">
      <p className='text-3xl font-bold text-primary font-h'>My Story</p>
      <p className='text-sm text-primary -top-12'>Yulia Jeon</p>
    </div>
    <img src="/images/MyStory2.png" alt="My Story" className="w-full h-full object-cover" />
    <div className='text-sm text-gray-500 max-w-[800px] mx-auto flex flex-col gap-4 px-6'>
      <p>
        I grew up as a happy child, deeply loved by my grandparents, who showed their affection in the most caring way they knew — with food. It was a beautiful time of warmth and comfort, but as a result, I became a heavy child who didn't enjoy movement and always ran last in P.E. classes.
      </p>

      <p>
        By the time I reached middle school, I began to feel the effects of that lifestyle: low energy, slow digestion, constant constipation, weight gain, and growing insecurity. I started using food not only for nourishment but as emotional comfort — a way to feel safe and loved like I did as a child. It felt like a cycle I couldn't escape.
      </p>

      <p>
        But one day, something inside me shifted. I was in middle school. I realized I wasn't happy with how I felt in my body and in my life. I started asking myself:
      </p>

      <p className='italic'>
        What can I change to feel balanced, strong, and alive again?
      </p>

      <p>
        That question marked the beginning of my wellness journey — one that would turn into a lifelong path of learning, healing, and transformation.
      </p>

      <p>
        At first, I started running — even though I used to hate it. I started to run short distances with friends, and when they gave up, I kept going, just to see what might happen in a month. Slowly, I fell in love with the fresh morning air, quiet sunrises, and the peace of being alone with myself. My body began to change. My digestion improved. My energy grew. I started reaching little goals I never thought possible, because I disciplined myself.
      </p>

      <p>
        That's when I learned something life-changing:
      </p>

      <p className='italic font-semibold'>
        Small things you do every day can change everything.
      </p>

      <p>
        Years passed, and when I had my first child, I found myself in a new kind of challenge, dealing with exhaustion, postpartum depression, and the loss of connection to my body. Also, because that time was a hard part of my life. I felt small and powerless under the weight of it all. One day, I knew I had to act. If I don't, I might fall into a real depression.
      </p>

      <p>
        That moment was the turning point.
      </p>

      <p>
        I began running again, just a little, and then found a few beginner yoga videos online. At first, I thought of yoga as just physical stretches — a way to gently move my body. I started feeling better, lighter, calmer, and more hopeful.
      </p>

      <p>
        I kept going. And then I discovered that yoga was much more than movement.
      </p>

      <p>
        I discovered meditation, moments of quiet I hadn't known I needed, breathwork (Pranayama), patterns of breathing that opened my body and mind in the most healing way.
      </p>

      <p>
        My flexibility improved, my moods lifted, my energy returned. People around me began noticing the glow in my face and the strength in my body. They started asking what I was doing. I began sharing, and that's when I knew this journey wasn't just for me. It was meant to be shared.
      </p>

      <p>
        That passion led me to the birthplace of yoga — Rishikesh, India — where I became a certified yoga teacher. For over six years, I taught and trained, helping people reconnect to their bodies, minds, and breath. But I wanted to go further. I wanted to combine yoga with strength training, with functional movement, with science.
      </p>

      <p>
        I kept running, completed marathons and Spartan races, and eventually decided to chase a dream I had had since school, to enter a bodybuilding competition. It was a new world, but I started from scratch, step by step, supported by an amazing trainer who believed in me.
      </p>

      <p>
        Through this process, I became a certified Personal Trainer and Nutritionist, and built the knowledge to craft programs that supported not just aesthetics, but sustainable well-being.
      </p>
    </div>
    <img src="/images/MyStory1.png" alt="My Story" className="w-full h-full object-cover" />
    <div className="flex flex-col relative justify-center items-center">
      <p className='text-3xl font-bold text-primary font-h'>Why I Do This</p>
    </div>
    <div className='text-sm text-gray-500 max-w-[800px] mx-auto flex flex-col gap-4 px-6'>
      <p>
        I've lived through the struggle — from emotional eating and burnout to physical exhaustion and disconnection from my body. And I've also lived the transformation.
      </p>

      <p>
        Today, I bring together everything I've learned — yoga, strength training, breathwork, nutrition, and mindset — to help others feel strong, balanced, and empowered in their bodies and lives.
      </p>

      <p>
        Because I know how it feels to start over.
      </p>

      <p>
        I know how it feels to rebuild.
      </p>

      <p>
        And I know how powerful it feels to rise.
      </p>

      <p>
        If you're ready to return to yourself, I'm here to walk that journey with you — with care, strength, and everything I've learned along the way.
      </p>
    </div>
  </div>
}

