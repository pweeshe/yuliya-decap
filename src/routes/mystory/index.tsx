import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'

// Import the markdown file as raw text using Vite's ?raw suffix
import mystoryMd from '../../../content/mystory.md?raw'

// Simple frontmatter parser
function parseFrontmatter(markdown: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/
  const match = markdown.match(frontmatterRegex)
  
  if (!match) {
    return { data: {}, content: markdown }
  }
  
  const [, frontmatterStr, content] = match
  const data: Record<string, string> = {}
  
  frontmatterStr.split(/\r?\n/).forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim()
      data[key] = value
    }
  })
  
  return { data, content }
}

export const Route = createFileRoute('/mystory/')({
  loader: async () => {
    const { data, content } = parseFrontmatter(mystoryMd)
    // Split content by the separator (---)
    const sections = content.split('---').map(s => s.trim()).filter(Boolean)
    const storyContent = sections[0] || content
    const whyContent = sections[1] || ''

    return {
      title: data.title || 'My Story',
      subtitle: data.subtitle || 'Yulia Jeon',
      heroImage: data.heroImage || '/images/MyStory2.png',
      bottomImage: data.bottomImage || '/images/MyStory1.png',
      secondTitle: data.secondTitle || 'Why I Do This',
      storyHtml: await marked(storyContent),
      whyHtml: await marked(whyContent),
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return <div className="flex flex-col gap-12 w-full h-full pt-24">
    <div className="flex flex-col relative justify-center items-center">
      <p className='text-3xl font-bold text-primary font-h'>{data.title}</p>
      <p className='text-sm text-primary -top-12'>{data.subtitle}</p>
    </div>
    <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
    <div
      className='mystory-content text-sm text-gray-500 max-w-[800px] mx-auto px-6'
      dangerouslySetInnerHTML={{ __html: data.storyHtml }}
    />
    <img src={data.bottomImage} alt={data.title} className="w-full h-full object-cover" />
    <div className="flex flex-col relative justify-center items-center">
      <p className='text-3xl font-bold text-primary font-h'>{data.secondTitle}</p>
    </div>
    <div
      className='mystory-content text-sm text-gray-500 max-w-[800px] mx-auto px-6'
      dangerouslySetInnerHTML={{ __html: data.whyHtml }}
    />
  </div>
}

