import React from 'react'
import { shallow } from 'enzyme'

import { TechGrid } from '../TechGrid'

describe('TechGrid component', () => {
  it('should render correctly', () => {
    const component = shallow(<TechGrid query="all" />)
    expect(component).toContain(<div className="tech-grid"></div>)
  })
})
