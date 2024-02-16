type Props = {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: Props) {
  return (
    <span className={`typcn typcn-${name} ${className}`}></span>
  )
}
