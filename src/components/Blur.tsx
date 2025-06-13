export default function Blur () {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] xl:w-[40rem] w-[32rem] xl:h-[40rem] h-[32rem] bg-indigo-600 opacity-20 rounded-full blur-[15rem]" />
        <div className="absolute bottom-[-8rem] right-[-8rem] xl:w-[40rem] w-[32rem] xl:h-[40rem] h-[32rem] bg-purple-500 opacity-20 rounded-full blur-[18rem]" />
    </div>
  )
}