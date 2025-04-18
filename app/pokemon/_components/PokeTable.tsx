export function PokemonTable() {
  return (
    <div className='h-full w-full'>
      <AgGridReact<Pokemon>
        ref={gridRef}
        gridOptions={defaultGridOptions}
        rowData={data}
        columnDefs={colDefs}
        overLayLoadingTemplate={<></>}
        onSortChanged
        onColumnMoved
        onColumnResized

/>
    </div>
  )
}