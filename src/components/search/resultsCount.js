const ResultsCount = ({ results, query }) => {
  return results.length ? (
    <div className='my-10'>
      <p>
        &quot;{query}&quot; returned {results.length} results
      </p>
    </div>
  ) : query && !results.length ? (
    <div className='my-10'>
      <p>No results found for &quot;{query}&quot;</p>
    </div>
  ) : null
}

export default ResultsCount
