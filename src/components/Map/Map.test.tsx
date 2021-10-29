import { render } from '@testing-library/react'
import Map from './Map'
import { Provider } from 'react-redux'
import { store } from '../../store/index'

test('Initialize map', () => {
  const { container } = render(<Provider store={store}><Map /></Provider>)
  expect(container.firstChild).toHaveClass('mapDiv')
})


