import { useMemo, useState } from "react"

export const useNavigation = (navigations: any) => {

  const [path, setPath] = useState(navigations?.[0]?.path || {})

  const current = useMemo(() => {
    return [...navigations].find(nav => nav.path === path)
  }, [path])

  return {
    current,
    path,
    setPath
  }
}