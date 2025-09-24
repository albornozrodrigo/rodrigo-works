export const Divider = ({ margin }: { margin?: boolean }) => {
  return (
    <div
      className={`h-[1px] w-full bg-gradient-to-r from-transparent via-purple-900/80 to-transparent ${margin ? `my-16` : ''}`}
    />
  );
};
