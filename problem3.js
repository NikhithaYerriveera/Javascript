function calculateFare(distance) {
    let fare = 0;
    if (distance <= 4) {
      fare = 30;  
    } else {
      fare = 30;  
      let remaining = distance - 4;
      if (remaining > 0) {
        let slab = Math.min(remaining, 5);
        fare += slab * 10;
        remaining -= slab;
      }
      if (remaining > 0) {
        let slab = Math.min(remaining, 10);
        fare += slab * 15;
        remaining -= slab;
      }
      if (remaining > 0) {
        let slab = Math.min(remaining, 15);
        fare += slab * 20;
        remaining -= slab;
      }
      if (remaining > 0) {
        fare += remaining * 20;
      }
    }
    return fare;
}
  let distance = 19.5;  
  console.log(`Fare for ${distance} km is ₹${calculateFare(distance)}`);
  