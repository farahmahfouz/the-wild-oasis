import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status");

  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue, method: "eq" };

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const sortedBy = { field, direction };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortedBy, page],
    queryFn: () => getBookings({ filter, sortedBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if(page < pageCount)
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortedBy, page + 1],
    queryFn: () => getBookings({ filter, sortedBy, page: page + 1 }),
  });
  
  if(page > 1)
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortedBy, page - 1],
    queryFn: () => getBookings({ filter, sortedBy, page: page - 1 }),
  });

  return { isLoading, bookings, error, count };
}
