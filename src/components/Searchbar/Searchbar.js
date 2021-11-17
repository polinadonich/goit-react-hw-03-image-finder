import { Component } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";
// import SearchForm from "../SearchForm";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSearchQuery = (e) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
    if (this.state.searchQuery === "") {
      toast.error("Please, enter your request!");
    }
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleSearchQuery}
            value={searchQuery}
            placeholder="Search images and photos"
          />
        </form>
        {/* <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleSearchQuery}
          value={searchQuery}
        /> */}
      </header>
    );
  }
}

export default Searchbar;
