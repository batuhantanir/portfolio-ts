interface CompenentHeaderProps {
  title: string;
}

function CompenentHeader({ title }: CompenentHeaderProps) {
  return (
    <h1
      className="
    text-4xl
    font-semibold
    text-secondary
    border-b
    pb-5
    relative
    before:w-10
    before:h-1
    before:bg-primary
    before:absolute
    before:-bottom-[2.5px]
    before:left-1/2
    before:translate-x-[-50%]
    "
    >
      {title.toUpperCase()}
    </h1>
  );
}

export default CompenentHeader;
