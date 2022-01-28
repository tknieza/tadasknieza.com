import React, { forwardRef } from 'react'

export const Spinner = () => <div>Spinner</div>

// eslint-disable-next-line react/prop-types
export const ModelContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className="model h-60 md:h-96 m-auto mt-9 mb-18 relative">
    {children}
  </div>
))

ModelContainer.displayName = 'Model'

export const Loader = () => {
  return (
    <Spinner>
      <ModelContainer />
    </Spinner>
  )
}

export default Loader
