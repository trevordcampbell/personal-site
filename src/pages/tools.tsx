import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }: {title?: string, children: any}) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }: {title: string, href?: string, children: any}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Tools() {
  return (
    <>
      <Head>
        <title>Tools - Trevor Campbell</title>
        <meta
          name="description"
          content="Tools and equipment I use, gadgets + software I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Tools and equipment I use, gadgets + software I love, and other things I recommend. 💪"
        intro="I get asked a lot about the things I use in filmmaking, doing web development, writing, or other stuff I buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff:"
      >
        <div className="space-y-20">
          <ToolsSection title="💼 Workstation">
            <Tool title="13” MacBook Air, 4GB RAM (2015)">
              This thing is a tank. I don't know what Apple actually put inside this machine to make it magic, but somehow this rinky-dink little laptop can handle anything I can throw at it (even outside of it's performance specs). I'm talking Adobe Photoshop, Illustrator, a fuckton of Chrome tabs. Thing just won't quit!
            </Tool>
            <Tool title='Custom-Built Windows "Gaming" Computer, 64GB RAM'>
              The real beast behind the scenes. This big-rig has been fully operational for a few years now, but has specs that can make a video editor cry (in a good way). GeForce 2070 Super graphics card, 64GB of high-performance RAM, and a snappy motherboard with an AMD 3800X CPU. Did I mention the 500GB SSD and 20TB of drive storage?
            </Tool>
            <Tool title='27" LG 4K 16:9 Display, LG27BL85U-W (x2)'>
              These widescreen displays are *beautiful*, and offer true 4K viewing. The screen has a nice matte finish, which helps prevent room-glare. When you’re working with high-quality photo and videos, graphic design, and other visually-important tasks, every pixel you can get counts.
            </Tool>
          </ToolsSection>
          <ToolsSection title="🎬 Filmmaking Equipment">
            <Tool title="Sony FX3 Cinema Camera">
              The smallest and lightest camera available in Sony's Cinema line. This camera can shoot 4K, 60FPS, 10-Bit 4:2:2 Colorspace, and Sony's powerful S-Log3.cine picture profile. Also allows for shooting in CineEI mode. It produces a really gorgeous and stunning picture that is easy to edit.
            </Tool>
            <Tool title="Atomos Ninja V External Monitor + Recorder">
              This tool is invaluable for filmmaking. By using it over-the-wire via HDMI, you get a much larger monitoring screen to view your picture in real time. In addition, it comes outfitted with lots of tools that can be used to monitor exposure peaking, focus peaking, different aspect ratio guidelines, etc. My favorite feature is that it allows you to load LUTs onto the monitor to view how the video will look *after* it's been color-graded. But this is not just a monitor, it is also a recorder! You can attach an SSD drive to the back to capture video in a much more cost-effective way than recording with SD cards on the camera internally.
            </Tool>
            <Tool title="Sony ECM-XM1 Microphone">
              Not the best microphone on the market, but it gets the job done! This shotgun mic hooks into the camera nicely via the XLR input on the Camera's included top handle, and fits snugly into the microphone holder. 
            </Tool>
            <Tool title="Sirui 50mm Anamorphic Lens, E-Mount">
              This is one of the secrets to the coveted "Hollywood" look. By shooting with an anamorphic lens, you get an image which is a little bit softer, slightly distorted, and very widescreen when stretched to the correct aspect ratio. It also offers nicely oval-shaped bokeh in the background, and this particular lens has some crazy J.J. Abrams-style blue lens flares as well. 
            </Tool>
            <Tool title="Sirui 75mm Anamorphic Lens, E-Mount">
              Just like his 50mm brother, but in 75mm for a little tighter image. Great for all kinds of shots!
            </Tool>
            <Tool title="Tilta Mirage VND Kit">
              When shooting in CineEI mode, a Variable Neutral Density filter (VND) is essential for getting the correct exposure. One of the big challenges of shooting CineEI in the "real" world is that you often have zero control over the lighting in a space. This VND and mattebox kit makes it fast and easy to correctly expose your picture according to local lighting conditions.
            </Tool>
          </ToolsSection>
          <ToolsSection title="🖼 Photo Editing + Video Production + Animation">
            <Tool title="Adobe Photoshop">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
            <Tool title="Adobe Premiere Pro">
              Sadly, nothing beats the king. Adobe Premiere Pro is an exercise in both excellence and frustration. You can do anything you need in Premiere Pro, but you might pull all your hair out in the process!
            </Tool>
            <Tool title="Adobe After Effects">
              The industry standard for Animation work, but it's truly a heinous tool. If you have to use it, question whether or not animation is even needed in the first place...
            </Tool>
          </ToolsSection>
          <ToolsSection title="🤖 Development tools">
            <Tool title="VS Code">
              Let's be real, VS Code is like the Toyota Camry of the development world. She's cheap (free), efficient, and sexy as hell. Not to mention highly customizable! No other way to say it, VS Code is the best in the game.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal, but it’s what I use.
            </Tool>
            <Tool title="TextEdit">
              Hear me out ... sometimes it's faster for me to quickly view a file in TextEdit than any other program. Please don't hurt me!
            </Tool>
            <Tool title="Punching Bag">
              Development is frustrating as hell. Ever worked with Typescript before? You're gonna need a punching bag too :'(
            </Tool>
          </ToolsSection>
          <ToolsSection title="🕸 Web Dev Tech Stack">
            <Tool title="Next.js">
              Next.js makes it stupidly easy to make highly performant websites and web apps with lots of features out of the box. My favorite is the simple Server-Side Rendering (SSR), which makes delivering high-quality images and videos without huge load times a piece of cake!
            </Tool>
            <Tool title="Supabase">
              Supabase is a BEAST! A full-fledged backend / database service that cuts out a lot of work and complexity for a one-man-developer! If you need a "for dummies" version of cloud databases, APIs, cloud functions and cron jobs, Supabase is the tool for you!
            </Tool>
            <Tool title="Tailwind CSS">
              Love it or hate it, Tailwind CSS is what I use! I have never found an easier way to make beautiful web designs at the speed of thought. It's like writing CSS on meth.
            </Tool>
          </ToolsSection>
          <ToolsSection title="🎨 Design">
            <Tool title="Figma">
              Figma is the best tool for the design stages of building a website, an application, or just whiteboarding a new concept. It's like if a virtual whiteboard and a software design tool had a baby.
            </Tool>
            <Tool title="Adobe Illustrator">
              My favorite tool in the Adobe Creative Suite. Not much to complain about, it actually works very well. I use this for all kinds of things design – some of which it was meant for, some of which it was not.
            </Tool>
            <Tool title="Adobe InDesign">
              This is a great tool for designing print items. Need to make a beautiful whitepaper, a magazine, a flyer, an ebook? Indesign has your back!
            </Tool>
          </ToolsSection>
          <ToolsSection title="✍️ Writing">
            <Tool title="Apple Notes">
              It’s not the newest kid on the block but it’s still the fastest way to jot something down and come back to it later.
            </Tool>
            <Tool title="Notion">
              A little better for structuring thoughts and long-form writing. I use this as the intermediate step for writing all my articles. The most powerful features for me are the impressively robust "everything" search, and the ability to export pages as markdown.
            </Tool>
            <Tool title="Markdown + MDX">
              I can easily publish articles and writings on my website using Markdown and MDX. These play very nicely together for a simple and easy-to-edit publishing workflow.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
