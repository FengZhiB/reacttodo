import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabbar: [
        {
          text: '全部',
          className: 'circle-success',
          id: 1,
          type: '/all'
        },
        {
          text: '未完成',
          className: 'circle-primary',
          id: 2,
          type: '/unfinish'
        },
        {
          text: '已完成',
          className: 'circle-warn',
          id: 3,
          type: '/finished'
        }
      ]
    }
  }
  render () {
    return (
      <footer>
        <ul>
          {this.state.tabbar.map(item => (
            <NavLink className={item.className} key={item.id} to={item.type}>
              {item.text}
            </NavLink>)
          )}
        </ul>
      </footer>
    )
  }
}

export default Footer;