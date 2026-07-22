import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // Stores the search text and selected filter
    this.state = {
      search: "",
      type: "All"
    };
  }

  // Updates the search box
  onSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  };

  // Updates the dropdown filter
  onFilter = (eventKey) => {
    this.setState({
      type: eventKey
    });
  };

  // Checks if an item matches the search and filter
  filterItem = (item) => {
    const matchesSearch =
      item.name.toLowerCase().search(this.state.search) !== -1;

    const matchesType =
      this.state.type === "All" ||
      item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    // Creates a filtered list to display
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <div>
        {/* Search box */}
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onSearch}
        />

        {/* Dropdown menu */}
        <DropdownButton
          title="Filter"
          onSelect={this.onFilter}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
        </DropdownButton>

        {/* Display the filtered items */}
        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;