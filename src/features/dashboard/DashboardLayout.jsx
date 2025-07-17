import styled from "styled-components";
import Spinner from './../../ui/Spinner';
import Stats from "./Stats";
import SalesCharts from "./SalesChart";

import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from './../cabins/useCabins';
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBooking } = useRecentBookings();
  const { confirmedStayes, isLoading: isLoadingStay, numDays } = useRecentStays();
  const { cabins, isLoading: isLoadingCabin } = useCabins();

  if (isLoadingBooking || isLoadingStay || isLoadingCabin) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStayes={confirmedStayes} numDays={numDays} cabinCount={cabins?.length}/>
      <TodayActivity/>
      <DurationChart confirmedStayes={confirmedStayes}/>
      <SalesCharts bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout