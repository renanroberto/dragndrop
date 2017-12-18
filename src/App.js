import React, { Component } from 'react'
import { sortable } from 'react-sortable'
import './App.css'

class Item extends Component {
  render () {
    return (
      <li {...this.props}>
        {this.props.children}
      </li>
    )
  }
}

const SortableItem = sortable(Item)

class SortableList extends Component {
  state = {
    items: this.props.items
  }

  onSortItems = (items) => {
    this.setState({ items: items })
  }

  render () {
    const items = this.state.items
    const listItems = items.map((item, i) => {
      return (
        <SortableItem
          key={item.id}
          onSortItems={this.onSortItems}
          items={items}
          sortId={i}
        >
          {item.name}
        </SortableItem>
      );
    });

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

class App extends Component {
  state = {
    items: [
      { id: '0a', name: 'Renan' },
      { id: '5c', name: 'Pedro' },
      { id: '7p', name: 'Paty' },
      { id: '0d', name: 'Katê' },
    ]
  }
  render() {
    return (
      <main>
        <SortableList items={this.state.items} />
      </main>
    )
  }
}

export default App
