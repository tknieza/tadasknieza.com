import React, { forwardRef } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

export const Spinner = () => (
  <div className="flex justify-center absolute top-1/2 -translate-y-1/2 w-full">
    <CgSpinnerTwo className="text-brblack dark:text-white animate-spin text-7xl" />
  </div>
)

// eslint-disable-next-line react/prop-types
export const ModelContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className="model h-72 m-auto mt-9 mb-18 relative">
    {children}
  </div>
))

ModelContainer.displayName = 'Model'
