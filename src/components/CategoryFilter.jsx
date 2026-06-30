import PropTypes from 'prop-types';

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div>

      <button
        type="button"
        onClick={() => onCategoryChange('')}
      >
        Semua
      </button>

      {
        categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() =>
                onCategoryChange(category)
            }
            style={{
                backgroundColor:
                selectedCategory === category
                    ? '#2563eb'
                    : '#ffffff',
                color:
                selectedCategory === category
                    ? '#ffffff'
                    : '#000000',
            }}
            >
            #{category}
          </button>
        ))
      }
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;