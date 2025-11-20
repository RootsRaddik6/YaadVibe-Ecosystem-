import { defaultPrices } from "./prices";

export function calculateTotal({
  travel,
  hotel,
  nights,
  guests,
  food,
  attraction,
}) {
  let base = 0;

  if (travel) base += defaultPrices.transport;
  if (hotel) base += defaultPrices.hotelPerNight * nights;
  if (food) base += defaultPrices.foodPerGuest * guests;
  if (attraction)
    base += defaultPrices.attractionPerGuest * guests;

  return Math.round(base * (1 + defaultPrices.fee));
}
