export const Divider = ({ margin, ...args }: { margin?: boolean }) => {
  return (
    <div
      {...args}
      className={`h-[1px] w-full bg-linear-to-r from-transparent via-purple-900/80 to-transparent ${margin ? `my-16` : ''}`}
    />
  );
};
