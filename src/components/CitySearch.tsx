import { CitySearchProps } from "../types"

export const CitySearch = ({ setCity }: CitySearchProps) => {
  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  )
}
