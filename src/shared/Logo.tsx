type Props = Readonly<{
  size:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
}>;

export const Logo = ({ size }: Props) => (
  <span className={`risecruit ${size}`}>
    <span className="tracking-tighter">Risecruit</span>
  </span>
);
