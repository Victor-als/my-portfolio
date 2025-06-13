import { useInView } from "../../../hooks/useInView";


export function TechnologiesSection ( ) {
  const { ref, isVisible } = useInView({ threshold: 0.6 });

  return (
         <div className={`flex gap-12 flex-wrap transition-all duration-1000  ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`} ref={ref}>
            <div className="flex flex-col items-center justify-center gap-4"
                
            >
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              />
              <span className="text-neutral-300 font-medium">HTML 5</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              />
              <span className="text-neutral-300 font-medium">CSS 3</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              />
              <span className="text-neutral-300 font-medium">JavaScript</span>
            </div>

             <div className="flex flex-col items-center justify-center gap-4">
              <img 
               className="w-16 h-16"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" 
              />
              <span className="text-neutral-300 font-medium">Jquery</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              />
              <span className="text-neutral-300 font-medium">TypeScript</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img 
               className="w-16 h-16"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" 
              />
              <span className="text-neutral-300 font-medium">Vite.js</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
              <span className="text-neutral-300 font-medium">React.js</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img 
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
              />
              <span className="text-neutral-300 font-medium">Next.js</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
              <span className="text-neutral-300 font-medium">Tailwind</span>
            </div>


            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              />
              <span className="text-neutral-300 font-medium">Bootstrap</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
              />
              <span className="text-neutral-300 font-medium">Material UI</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              />
              <span className="text-neutral-300 font-medium">Sass</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              />
              <span className="text-neutral-300 font-medium">Postgresql</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img 
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
              />
              <span className="text-neutral-300 font-medium">Git</span>
            </div>
          </div>
  )
}