import { lazy } from "react"

const LazyLoading = (path: string, namedExport: string) => {
  return lazy(async () => {
        const promise = import(path)

        if(namedExport == null) {
            return promise
        } else {
            const module = await promise
          return ({ default: module[namedExport] })
        }
    })
}

export default LazyLoading