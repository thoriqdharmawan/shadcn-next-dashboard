export type ChildNavigation = {
  label: string,
  path: string,
}

export type Navigation = {
  icon: string,
  path: string,
  title: string,
  description: string,
  child: ChildNavigation[]
}