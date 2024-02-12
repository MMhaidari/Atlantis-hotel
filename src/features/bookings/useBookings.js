import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"

const useBookings = () => {
  const { data: bookings, isLoading, error } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings
  })

  return { isLoading, error, bookings }
}

export default useBookings