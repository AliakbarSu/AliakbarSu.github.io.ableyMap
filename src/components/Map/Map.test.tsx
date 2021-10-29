import { render } from '@testing-library/react'
import Map from './Map'



test('Initialize map', () => {
  const { container } = render(<Map />)
  expect(container.firstChild).toHaveClass('mapDiv')
})

