import React, { Component } from 'react';

import {
  ListContainerStyle,
  SelectDisplayStyle,
  SelectBoxStyle,
  SelectIconStyle,
  DownArrow,
  ListItemStyle,
  UpArrow,
  Line,
} from './styles.js';

const SelectIcon = ({ onClick }) => (
  <SelectIconStyle onClick={onClick}>
    <UpArrow />
    <DownArrow />
  </SelectIconStyle>
);

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.id = new Date().getTime();
    let selText = '';
    if (this.props.value) {
      for (var i = 0; i < this.props.items.length; i++) {
        if (String(this.props.items[i].value) === String(this.props.value)) {
          selText = this.props.items[i].text;
          break;
        }
      }
    }

    this.state = { selectedText: selText };
    this.selectItem = this.selectItem.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  selectItem(index) {
    document.getElementById('select_list_container' + this.id).display = 'none';
    this.setState({ selectedText: this.props.items[index].text });
    if (this.props.onChange) this.props.onChange(this.props.items[index].value);
  }

  toggleList(event) {
    const ele = document.getElementById('select_list_container' + this.id);
    if (ele.style.display === 'none' || ele.style.display === '')
      ele.style.display = 'flex';
    else ele.style.display = 'none';
    event.stopPropagation();
  }

  render() {
    return (
      <SelectBoxStyle onClick={this.toggleList}>
        <SelectDisplayStyle id="select_display">
          {' '}
          {this.state.selectedText}
        </SelectDisplayStyle>
        <SelectIcon onClick={this.toggleList} />
        <ListContainerStyle
          id={'select_list_container' + this.id}
          ref={input => {
            this.refsListContainer = input;
          }}
        >
          {this.props.items.map((item, i) => (
            <div key={i}>
              {String(item.value) === String(this.props.value) ? null : (
                <div>
                  <ListItemStyle key={i} onClick={() => this.selectItem(i)}>
                    {' '}
                    {item.text}
                  </ListItemStyle>
                  <Line />
                </div>
              )}
            </div>
          ))}
        </ListContainerStyle>
      </SelectBoxStyle>
    );
  }
}

export default SelectBox;
