const SearchList = ({ recentSearches }) => {
    return (
        <div className='search-list'>
            <div className='title'>Recent Searches</div>
            { recentSearches.map(search => <div key={ search }>{ search }</div>) }
        </div>
    );
};

export default SearchList;