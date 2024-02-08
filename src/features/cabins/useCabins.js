import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

const useCabins = () => {
    const { data: cabins, isLoading, error } = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins
      })

  return {isLoading, error, cabins}
}

export default useCabins