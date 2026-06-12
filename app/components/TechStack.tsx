import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub, } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase } from 'react-icons/si'
import { DiJavascript1, DiMongodb } from 'react-icons/di'
import { TbBrandTypescript } from 'react-icons/tb'

const technologies = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: TbBrandTypescript },
    { name: "JavaScript", icon: DiJavascript1 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    {name: "Express", icon: SiExpress},
    {name: "MongoDB", icon: DiMongodb},
    {name: "Git", icon: FaGitAlt},
    {name: "GitHub", icon: FaGithub},
    {name: "Figma", icon: FaFigma},
    {name: "FireBase", icon: SiFirebase},
]

export default function TechStack () {
    return (
        <section className='mt-12'>
            <h2 className='mb-4 text-4xl font-playfair'>Technologies</h2>

            <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                {technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div
                        key={tech.name}
                        className='flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-zinc-700'>
                            <Icon size={24}/>
                            <span >{tech.name}</span>

                        </div>
                    )
                })}

            </div>
        </section>
    )
}