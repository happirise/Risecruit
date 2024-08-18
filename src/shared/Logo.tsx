type Props = Readonly<{
  prefix?: string;
  suffix?: string;
}>;

export default function Logo({ prefix = '', suffix='' }: Props) {
  return (
    <div className="risecruit text-3xl tracking-tighter inline-block -mt-1">
      {prefix ? prefix : null}
      <span className="text-2xl mr-2">🪴</span>Risecruit
      {suffix ? suffix : null}
    </div>
  );
}
