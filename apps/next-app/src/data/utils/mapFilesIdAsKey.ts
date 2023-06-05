/**
 * A generic function that maps data into a filterable key:data pair
 * @param data collection from db mapped {key: value}.
 * @param field a field in the data collection to use as the filter i.e. id of the field.
 *  - NB: must be a valid key in the mappedData
 * @returns ket:data pair i.e. {id: {key: value}}
 */
export function mapDataFieldAsKey<T extends { [key: string]: any }>(
  data: Array<T>,
  field: string,
): { [key: string]: T } {
  const mappedData: { [key: string]: T } = {}

  data.forEach(file => {
    mappedData[file[field]] = file
  })

  return mappedData
}

/**
 * Generic function that filters data by a given field
 * @param fields a data field i.e id [must be a valid key in the mappedData]
 * @param mappedData grouped data
 * @returns array of requested data from mapped data i.e [{key: value}]
 */
export function filterMappedDataByFields<T extends { [key: string]: any }>(
  fields: Array<string>,
  mappedData: { [key: string]: T },
): Array<T> {
  return fields.map(field => mappedData[field])
}
