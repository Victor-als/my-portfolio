import ContentMD from "./ContentMD";

export interface ReadmeProps {
  markdown: string;
}

export default function Readme(props: ReadmeProps) {
  return (
    <div className="flex p-4 sm:p-6 flex-wrap bg-black border border-zinc-800 rounded-2xl w-full overflow-hidden">
      <div className="prose prose-zinc prose-invert max-w-none break-words w-full overflow-x-auto">
        <ContentMD markdown={props.markdown} />
      </div>
    </div>
  );
}